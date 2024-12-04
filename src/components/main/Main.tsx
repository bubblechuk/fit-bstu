import styles from "./main.module.css"
import bg_abiturient from './bg_abiturient.jpg'
import { MySlider } from "./Slider"
export const Main = () => {
    return (
        <div className={styles.main}>
            <MySlider/>
            <div className={styles.abiturient}>
                <p>Абитуриент? Присоединяйся к нам!</p>
                <span>Посети страницу <a>Абитуриентам</a> и выбери специальность своей мечты! Также можешь ознакомиться с информацией <a>О факультете</a></span>
            </div>
            <div className={styles.newsblock}>
                <p className={styles.newshead}>Новости факультета</p>
                <div className={styles.news}>
                <div className={styles.block}>
                    <img className={styles.img}/>
                    <div className={styles.text}>
                    <span>19-02-2024</span>
                    <span className={styles.head}>News Title</span>
                    <span className={styles.desc}>blablablablablablablabla</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.img}/>
                    <div className={styles.text}>
                    <span>19-02-2024</span>
                    <span className={styles.head}>News Title</span>
                    <span className={styles.desc}>blablablablablablablabla</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.img}/>
                    <div className={styles.text}>
                    <span>19-02-2024</span>
                    <span className={styles.head}>News Title</span>
                    <span className={styles.desc}>blablablablablablablabla</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.img}/>
                    <div className={styles.text}>
                    <span>19-02-2024</span>
                    <span className={styles.head}>News Title</span>
                    <span className={styles.desc}>blablablablablablablabla</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.img}/>
                    <div className={styles.text}>
                    <span>19-02-2024</span>
                    <span className={styles.head}>News Title</span>
                    <span className={styles.desc}>blablablablablablablabla</span>
                    </div>
                </div>
                <div className={styles.block}>
                    <img className={styles.img}/>
                    <div className={styles.text}>
                    <span>19-02-2024</span>
                    <span className={styles.head}>News Title</span>
                    <span className={styles.desc}>blablablablablablablabla</span>
                    </div>
                </div>
            </div>
            <button className={styles.archive}>Архив новостей</button>
            </div>
        </div>
    )
}