// app/api/open/route.ts
import { updateOpenCount } from "@/app/actions/sheets";
import { NextResponse } from "next/server";

// URL real de la imagen que deseas mostrar en el email
const imageUrl = "https://www.strongwood.com.ar/assets/img/emails/strongwood_logo.png";

export async function GET(request: Request) {
    try {
        // Extraer el parámetro 'id' de la query string
        const { searchParams } = new URL(request.url);
        const idParam = searchParams.get("id");
        if (!idParam) {
            return NextResponse.json({ error: 'id.' }, { status: 400 });
        }
        const numericId = parseInt(idParam, 10);
        if (isNaN(numericId)) {
            // El parámetro "id" debe ser un número válido.
            return NextResponse.json({ error: 'Ok' }, { status: 400 });
        }

        // Actualizamos el contador de "open" en Google Sheets
        const response = await updateOpenCount(numericId);
        console.log('[response]: ', response);
        // Configuramos los headers para evitar cacheo
        const headers = new Headers();
        headers.set("Cache-Control", "no-cache, no-store, must-revalidate");

        // Redirigir a la URL real de la imagen
        return NextResponse.redirect(imageUrl, 302);
    } catch (error) {
        console.error("Error en /open:", error);
        return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }
}