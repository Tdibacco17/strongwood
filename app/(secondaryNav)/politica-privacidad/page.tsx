import Head from 'next/head';

export default function PoliticaYPrivacidad() {
    return (
        <>
            <Head>
                <title>Política de Privacidad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div style={{ margin: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>

                <h1>Política de Privacidad</h1>
                <p>Fecha de última actualización: [Fecha]</p>

                <h2>1. Información que recopilamos</h2>
                <p>Recopilamos la siguiente información personal:</p>
                <ul>
                    <li>Correo electrónico (para el envío de formularios y campañas de email marketing).</li>
                    {/* Agrega otros datos si es necesario */}
                </ul>

                <h2>2. Uso de la información</h2>
                <p>Utilizamos la información recopilada para los siguientes fines:</p>
                <ul>
                    <li>Enviar formularios y comunicarnos con los usuarios.</li>
                    <li>Realizar campañas de email marketing, en caso de que hayas dado tu consentimiento.</li>
                    <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
                </ul>
                <p>Los datos se almacenan de manera segura y no se comparten con terceros, salvo obligación legal o cuando el usuario lo autorice expresamente.</p>

                <h2>3. Google OAuth y seguridad</h2>
                <p style={{ maxWidth: "80%" }}>Para integrarse con Google OAuth, nos comprometemos a utilizar y almacenar tus datos de forma segura y únicamente para los fines autorizados. Google OAuth solo accederá a la información necesaria para autenticar tu cuenta y garantizar un uso adecuado de nuestros servicios.</p>

                <h2>4. Consentimiento</h2>
                <p>Al utilizar nuestro sitio web y servicios, das tu consentimiento para que recopilemos y utilicemos tus datos personales de acuerdo con esta política de privacidad.</p>

                <h2>5. Cambios en la política</h2>
                <p>Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios importantes a través de nuestro sitio web o por correo electrónico.</p>

                <h2>6. Contacto</h2>
                <p>
                    Si tienes alguna duda o inquietud sobre esta política de privacidad, por favor contáctanos a través de:{" "}
                    <a href="mailto:strongwoodventas@gmail.com">strongwoodventas@gmail.com</a>.
                </p>
            </div>
        </>
    )
}