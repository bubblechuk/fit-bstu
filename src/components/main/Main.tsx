import styles from "./main.module.css"
import bg_abiturient from './bg_abiturient.jpg'
import { MySlider } from "./Slider"
import { useSelector } from "react-redux"
import { State, newsData } from "../../redux/slices"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router"
export const Main = () => {
    const news = useSelector((state: State)=> state.form.news);
    const [pages, setPage] = useState<number>(6);
    const navigate = useNavigate();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
              setPage(3);
            } else {
              setPage(6);
            }
          };
          handleResize();
          window.addEventListener("resize", handleResize);
    }, [])
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
                    {news.slice(0, pages).map((elem) => {
                        return(
                        <div className={styles.block} onClick={()=>{navigate(`/article?id=${elem.id}`)}}>
                            <img className={styles.img} src={elem.image}/>
                            <div className={styles.text}>
                                <span>
                                    {elem.date.day}-
                                    {elem.date.month}-
                                    {elem.date.year}
                                </span>
                                <Link to={`/article?id=${elem.id}`} title={elem.title} className={styles.head}> 
                                    {elem.title}
                                </Link>
                                <span className={styles.desc}>
                                    {elem.content.small}
                                </span>
                            </div>
                        </div>
                        )
                    })}
            </div>
            <button className={styles.archive} onClick={() => {navigate('/archive')}}>Архив новостей</button>
            </div>
        </div>
    )
}