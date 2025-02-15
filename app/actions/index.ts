'use server'
import { template } from "@/utils/templateHtml";
import nodemailer from "nodemailer"
import { google } from "googleapis";

// Configuración de OAuth2 con Google
const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export const ContactFormAction = async (formdata: FormData, gRecaptchaToken: string): Promise<{ success: boolean }> => {
    if (!process.env.EMAIL_USERNAME || !process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REFRESH_TOKEN) {
        throw new Error("Faltan variables de entorno para la configuración de OAuth2");
    }
    const accessTokenResponse = await oAuth2Client.getAccessToken();
    const accessToken = accessTokenResponse.token;

    if (!accessToken) {
        throw new Error("No se pudo obtener el access token");
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const formSecret = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formSecret,
        });

        if (!response.ok) {
            throw new Error(`Network responseponse was not ok: ${response.status}`);
        }
        const responseData = await response.json();

        // Validar la respuesta de reCAPTCHA
        if (responseData.success && responseData.score > 0.5) {
            console.log("Score: ", responseData.score);

            const name = formdata.get('name') as string;
            const email = formdata.get('email') as string;
            const phone = formdata.get('phone') as string;
            const coment = formdata.get('coment') as string;
            const service = formdata.get('service') as string;

            if (!name || !email || !phone || !coment || !service) {
                console.log('Todos los campos son obligatorios.');
                return { success: false }
            }

            const contentHtml = template({ name, email, phone, coment, service });

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: process.env.EMAIL_USERNAME,
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                    accessToken,
                },
            });
            // const transporter = nodemailer.createTransport({
            //     host: `${process.env.EMAIL_SERVICE}`,
            //     port: 465,
            //     secure: true,
            //     auth: {
            //         user: `${process.env.EMAIL_USERNAME}`,
            //         pass: `${process.env.EMAIL_PASSWORD}`,
            //     },
            // });

            // Verificamos la configuración del servidor de correo
            await transporter.verify();

            // Enviamos el correo
            const info = await transporter.sendMail({
                from: process.env.EMAIL_USERNAME,
                to: process.env.EMAIL_USERNAME,
                subject: "Contacto - Pagína web",
                html: contentHtml,
            });

            console.log("Message sent: %s", info.messageId);
            return { success: true };
        } else {
            console.log('Invalid reCAPTCHA token or score is too low.');
            return { success: false };
        }
    } catch (error) {
        console.log(error)
        return { success: false };
    }
}