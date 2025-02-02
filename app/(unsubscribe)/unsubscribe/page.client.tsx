'use client';

import { useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.scss"
import { updateDesuscrito } from "@/app/actions/sheets";

export default function UnsubscribePageClient({ slug }: { slug: string }) {
    useEffect(() => {
        if (typeof window === "undefined") return; // Evitar ejecución en SSR

        const id = parseInt(slug, 10);
        if (isNaN(id)) return; // Evitar IDs inválidos

        const isAlreadyUnsubscribed = localStorage.getItem("hasUnsubscribed");

        if (isAlreadyUnsubscribed === "true") {
            console.log("El usuario ya está desuscrito. No se enviará otra solicitud.");
            return;
        }

        (async () => {
            try {
                console.log(`Enviando solicitud de desuscripción para ID: ${id}`);
                const response = await updateDesuscrito(id);

                if (response.success) {
                    localStorage.setItem("hasUnsubscribed", "true");
                    console.log("Desuscripción exitosa.");
                } else {
                    console.log("Error en la desuscripción:", response.message);
                }
            } catch (error) {
                console.error("Error en la solicitud de desuscripción:", error);
            }
        })();
    }, [slug]);

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
