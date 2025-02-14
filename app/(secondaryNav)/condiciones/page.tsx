import Head from 'next/head';

export default function Condiciones() {
    return (
        <>
            <Head>
                <title>Condiciones de Uso</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div style={{ margin: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
                <h1>Condiciones de Uso</h1>
                <p>Fecha de última actualización: [Fecha]</p>
                <p>
                    Bienvenido a nuestro sitio web. Al acceder y utilizar este sitio, aceptas cumplir con las siguientes condiciones. Te recomendamos leer detenidamente estos términos.
                </p>

                <h2>1. Uso del Sitio Web</h2>
                <p>
                    El acceso y uso de este sitio web se rige por los términos y condiciones aquí establecidos. Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.
                </p>

                <h2>2. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido presente en este sitio, incluyendo textos, imágenes, logotipos y gráficos, es de propiedad exclusiva de la empresa y está protegido por las leyes de propiedad intelectual.
                </p>

                <h2>3. Responsabilidad</h2>
                <p>
                    Si bien buscamos brindar información precisa y actualizada, no garantizamos la exactitud ni la integridad de los contenidos. El uso del sitio es bajo tu propia responsabilidad.
                </p>

                <h2>4. Enlaces a Sitios de Terceros</h2>
                <p>
                    Este sitio puede contener enlaces a páginas de terceros. No somos responsables del contenido o las políticas de privacidad de esos sitios externos.
                </p>

                <h2>5. Modificaciones y Suspensión</h2>
                <p>
                    Nos reservamos el derecho de modificar, suspender o interrumpir el funcionamiento del sitio, total o parcialmente, en cualquier momento y sin previo aviso.
                </p>

                <h2>6. Legislación Aplicable</h2>
                <p>
                    Estas condiciones se rigen por las leyes vigentes en [Tu País/Región]. Cualquier disputa que surja del uso de este sitio se someterá a la jurisdicción de los tribunales competentes.
                </p>

                <h2>7. Contacto</h2>
                <p>
                    Si tenés alguna consulta sobre estas condiciones, podés contactarnos a través de:{" "}
                    <a href="mailto:tu-email@dominio.com">tu-email@dominio.com</a>.
                </p>
            </div>
        </>
    );
}
