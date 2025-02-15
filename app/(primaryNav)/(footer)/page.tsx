import PortraitImgComponent from "@/components/PortraitImgComponent/PortraitImgComponent";
import styles from "./page.module.scss"
import data from "@/models/es.json"
// import CategoriesComponent from "@/components/CategoriesComponent/CategoriesComponent";
// import VideoPlayerComponent from "@/components/VideoPlayerComponent/VideoPlayerComponent";
import Image from "next/image";
const SliderComponent = dynamic(() => import('@/components/SliderComponent/SliderComponent'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '8rem' }} />,
});
import dynamic from 'next/dynamic';
import ContactForm from "@/components/ContactForm/ContactForm";

export default function HomePage() {
  return (
    <div className={styles["container-section-home"]}>
      <PortraitImgComponent
        imageData={data.homePage.image}
        projectData={undefined}
        heroData={data.homePage.hero}
      />
      <section id="secondSection" className={styles['first-section']}>
        <div className={styles["header"]}>
          <p className={styles["title"]}>Calidad y puntualidad</p>
          <p className={styles["subtitle"]}>Desarrollamos cada proyecto al mejor precio, haciendo foco en la calidad, las soluciones a medida, con los mejores tiempos de entrega y colocación.</p>
        </div>
        <div className={styles["cards-container"]}>
          <div className={styles["card"]}>
            <div className={styles["container-img"]}>
              <Image
                src={"/assets/newImgs/img-9293.jpeg"}
                alt="card-1"
                className={styles["img"]}
                width={2808}
                height={2808}
              />
            </div>
            <div className={styles["footer"]}>
              <p className={styles["title"]}>
                Equipamiento para obra
              </p>
              <p className={styles["subtitle"]}>Presupuestamos en base a planos, medimos y producimos muebles para todos los ambientes en obras nuevas.</p>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["container-img"]}>
              <Image
                src={"/assets/newImgs/img-5248.jpeg"}
                alt="card-2"
                width={2808}
                height={2808}
                className={styles["img"]}
              />
            </div>
            <div className={styles["footer"]}>
              <p className={styles["title"]}>
                Cocinas personalizadas
              </p>
              <p className={styles["subtitle"]}>
                Medimos y construimos muebles para todos los proyectos de refacción y cocinas nuevas modernas y tradicionales.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['second-section']}>
        <div className={styles["header"]}>
          <p className={styles["title"]}>¿Qué hacemos?</p>
          <p className={styles["subtitle"]}>Somos gestores de soluciones, nos ocupamos de todo el proceso desde la concepción de la idea hasta la colocación del último tornillo.</p>
        </div>
        <ul className={styles["container-list"]}>
          <li>Muebles de cocina y bodegas</li>
          <li>Vanitories, mesadas y canastos de ropa</li>
          <li>Racks de TV y Winebars</li>
          <li>Recibidores y muebles de living</li>
          <li>Aparadores y cómodas de comedor</li>
          <li>Camas, cunas y mesas de luz</li>
          <li>Lavaderos</li>
          <li> Placares y vestidores</li>
          <li>Escritorios y equipamiento de oficinas</li>
          <li>Mostradores y equipamiento de locales</li>
        </ul>
      </section>
      <section className={styles['third-section']}>
        <div className={styles["header"]}>
          <p className={styles["title"]}>¿Cómo trabajamos?</p>
        </div>
        <div className={styles["cards-container"]}>
          <div className={`${styles["card-container"]} ${styles["left"]}`}>
            <div className={styles['card']}>
              <p className={styles["title"]}>Consulta inicial</p>
              <p className={styles["subtitle"]}>Evaluación de necesidades y presupuesto preliminar.</p>
            </div>
            <div className={styles['hidden']} />
          </div>
          <div className={`${styles["card-container"]} ${styles["right"]}`}>
            <div className={styles['hidden']} />
            <div className={styles['card']}>
              <p className={styles["title"]}>Planificación</p>
              <p className={styles["subtitle"]}>Ajustes de diseño y detalles de entrega.</p>
            </div>
          </div>
          <div className={`${styles["card-container"]} ${styles["left"]}`}>
            <div className={styles['card']}>
              <p className={styles["title"]}>Producción</p>
              <p className={styles["subtitle"]}>Fabricación de muebles a medida.</p>
            </div>
            <div className={styles['hidden']} />
          </div>
          <div className={`${styles["card-container"]} ${styles["right"]}`}>
            <div className={styles['hidden']} />
            <div className={styles['card']}>
              <p className={styles["title"]}>Control de calidad</p>
              <p className={styles["subtitle"]}>Revisión exhaustiva del producto.</p>
            </div>
          </div>
          <div className={`${styles["card-container"]} ${styles["left"]}`}>
            <div className={styles['card']}>
              <p className={styles["title"]}>Logística y montaje</p>
              <p className={styles["subtitle"]}>Entrega e instalación organizadas.</p>
            </div>
            <div className={styles['hidden']} />
          </div>
          <div className={`${styles["card-container"]} ${styles["right"]}`}>
            <div className={styles['hidden']} />
            <div className={styles['card']}>
              <p className={styles["title"]}>Inspección Final</p>
              <p className={styles["subtitle"]}>Verificación completa en sitio.</p>
            </div>
          </div>

          <div className={styles["time-line-container"]}>
            <div className={styles["time-line"]}>
              <div className={styles["item"]}></div>
              <div className={styles["item"]}></div>
              <div className={styles["item"]}></div>
              <div className={styles["item"]}></div>
              <div className={styles["item"]}></div>
              <div className={styles["item"]}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['fourth-section']}>
        <div className={styles["header"]}>
          <p className={styles["title"]}>Calidad y puntualidad</p>
        </div>
        <SliderComponent />
        <div className={`${styles["header"]} ${styles["spacing"]}`}>
          <p className={styles["title"]}>Testimonios de nuestros clientes</p>
        </div>
        <div className={styles["cards-container"]}>
          <div className={styles["card"]}>
            <p className={styles["title"]}>Gracias equipo de Strongwood por su profesionalismo y atención. Cumpliendo en tiempo, forma y gran predisposición! ❤</p>
            <div>
              <p className={styles["subtitle"]}>Lucila Cicciaro + Natalia Helou</p>
              <p className={styles["title"]}>CicciaroHelou Arquitectura</p>
            </div>
          </div>
          <div className={styles["card"]}>
            <p className={styles["title"]}>Muy buena atencion y predisposicion! Cumplieron con el tiempo de entrega 😊. La cocina quedó super linda!</p>
            <div>
              <p className={styles["subtitle"]}>Carolina Lipszyc y Melanie Zusmanovicius</p>
              <p className={styles["title"]}>Arquitectas</p>
            </div>
          </div>
          <div className={styles["card"]}>
            <p className={styles["title"]}>Un equipo con todo el compromiso
              y la mejor predisposición.
              100% recomendables!</p>
            <div>
              <p className={styles["subtitle"]}>OJA-Arquitectos</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      {/* <CategoriesComponent  */}
      {/* <VideoPlayerComponent /> */}
    </div>
  );
}
