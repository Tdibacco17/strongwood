import Link from "next/link"
import { EmailIconComponent, InstagramIconComponent, WhatsappIconComponent } from "../IconComponent/IconComponent"
import styles from "./FooterComponent.module.scss"
import data from "@/models/es.json"
import NavItemsComponent from "./NavItemsComponent/NavItemsComponent"

export default function FooterComponent() {
    return (
        <footer className={styles["container-section-footer"]}>
            <div className={styles["wrapper-footer"]}>
                <div className={styles["primary-footer"]}>
                    <Link href={"/"} className={styles["logo-title"]}>{data.footer.title}</Link>
                    <div className={styles["info-divider"]}>
                        <div className={styles["left"]}>
                            <p className={styles["title-contact"]}>{data.footer.titleContact}</p>
                            <div className={styles["container-networks-icon"]}>
                                <InstagramIconComponent fill="#4F4F4F" hover={true} link="https://www.instagram.com/strongwood_ar" />
                                <WhatsappIconComponent isDesktop={true} fill="#4F4F4F" hover={true} link="https://web.whatsapp.com/send?phone=5491171196506" />
                                <WhatsappIconComponent isMobile={true} fill="#4F4F4F" hover={true} link="https://wa.me/5491171196506" />
                                <EmailIconComponent fill="#4F4F4F" hover={true} link="mailto:strongwoodventas@gmail.com" />
                            </div>
                        </div>
                        <NavItemsComponent />
                    </div>
                </div>
                <div className={styles["secondary-footer"]}>
                    <small>{data.footer.company}</small>
                    <Link style={{fontSize: "12px"}} href={"/politica-privacidad"}>Politica y privacidad</Link>
                    <Link style={{fontSize: "12px"}} href={"/condiciones"}>Condiciones</Link>
                </div>
            </div>
        </footer>
    )
}