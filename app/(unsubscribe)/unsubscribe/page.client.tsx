'use client';

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss"
import { updateDesuscrito } from "@/app/actions/sheets";

export default function UnsubscribePageClient({ slug }: { slug: string }) {
    const id = parseInt(slug, 10);

    useEffect(() => {
        // Verificar si ya se ha desuscrito antes
        const isAlreadyUnsubscribed = localStorage.getItem('hasUnsubscribed');
        // console.log('Estado de desuscripción en localStorage:', isAlreadyUnsubscribed);

        // Si ya está desuscrito, mostrar mensaje sin hacer nada
        if (isAlreadyUnsubscribed === 'true') {
            // setMessage("Ya estás desuscrito. No es necesario realizar más acciones.");
            return;
        }

        // Si no está desuscrito, proceder con la desuscripción
        const unsubscribe = async () => {
            try {
                // console.log("Llamando a updateDesuscrito...");
                const response = await updateDesuscrito(id);

                // console.log("Respuesta de desuscripción:", response);  // Log para ver la respuesta

                if (response.success) {
                    // Guardar en localStorage que el usuario ya se desuscribió
                    localStorage.setItem('hasUnsubscribed', 'true');
                    // setMessage("Te has desuscrito correctamente.");
                    // console.log("Te has desuscrito correctamente.");
                } else {
                    // setMessage(`No se pudo desuscribir: ${response.message}`);
                    console.log("Error:", response.message);
                }
            } catch (error) {
                console.error('Error:', error);
                // setMessage("Hubo un error al intentar desuscribirte. Por favor, inténtalo nuevamente.");
            } finally {
            }
        };

        // Ejecutar la función de desuscripción solo si no ha sido realizada antes
        if (isAlreadyUnsubscribed !== 'true') {
            unsubscribe();
        }
    }, [id]);

    return (
        <section className={styles["container-thanks-page"]}>
            <p className={styles["title-container"]}>
                <span className={styles["title"]}>
                    ¡Te has desuscrito correctamente!
                </span>
            </p>

            <Link href={"/"} className={styles["go-home"]}>
                Volver al inicio
            </Link>
        </section>
    );
}
