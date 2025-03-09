import styles from "./footer.module.css"
import vk from "./vk.png"
import insta from "./insta.png"
import yt from "./yt.png"
import { useNavigate } from "react-router"
export const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.footer}>
        <div className={styles.footerBlock}>
            <div className={styles.list}>
                <h3>Полезные ресурсы</h3>
                <ul className={styles.ulfooter}>
                    <a href="https://www.belstu.by/universitet/divisions/uchebno-metodicheskoe-upravlenie/perechen-specialnostej.html"><li>Специальности</li></a>
                    <a href="https://www.belstu.by/faculties.html"><li>Кафедры</li></a>
                    <a href="https://abiturient.belstu.by/"><li>Абитуриент БГТУ</li></a>
                    <a href="https://dist.belstu.by/login/index.php"><li>Система дистанционного обучения БГТУ</li></a>
                    <a href="https://mail.belstu.by/mail/"><li>Почта университета</li></a>
                </ul>
                
            </div>
            <div className={styles.links}>
            <h3>Колледжи</h3>
            <ul className={styles.ulfooter}>
                    <a href="https://gomel.belstu.by/"><li>Гомельский государственный политехнический колледж</li></a>
                    <a href="http://www.bobruisk.belstu.by/"><li>Бобруйский государственный лесотехнический колледж</li></a>
                    <a href="https://vitgtk.belstu.by/"><li>Витебский государственный технологический колледж</li></a>
                    <a href="https://pglk.belstu.by/"><li>Полоцкий государственный лесной колледж</li></a>
                    <a href="http://bgkpsm.belstu.by/"><li>Белорусский государственный колледж промышленности строительных материалов</li></a>
                </ul>
            </div>
            <div className={styles.contacts}>
                <h3>Контакты</h3>
                <h2><a href="tel:80173993389">(8-017) 399 33 89</a></h2>
                <p>Тел./Факс</p>
                <h2><a href="tel:80173276375">(8-017) 327 63 75</a></h2>
                <p>Приемная комиссия</p>
                <h3>Адрес</h3>
                <p>220006, г. Минск, ул. Свердлова, 13а</p>
                
            </div>
            <div className={styles.emblem}>
                <img className={styles.emblemimg}/>
                <button onClick={() => {navigate('/faculty/contacts')}}>Написать нам</button>
                <div className={styles.social}>
                <a href="#" ><img  className={styles.socialbuttons} src={vk}></img></a>
                <a href="#" ><img  className={styles.socialbuttons} src={insta}></img></a>
                <a href="#" ><img  className={styles.socialbuttons} src={yt}></img></a>
                </div>
            </div>
        </div>
        <div className={styles.blindmode}>Нажмите<span className={styles.blind}> здесь </span>чтобы включить режим для слабовидящих</div>
        <div className={styles.copyright}>
        
        © БГТУ 2013 - 2024
        </div>
    </div>
        // <div className={styles.footer}>
        //     <div className={styles.content}>
        //     <span className={styles.text}>© БГТУ 2013-2024</span>
        //     <span className={styles.text}>Версия для слабовидящих</span>
        //     </div>
        // </div>
    )
}