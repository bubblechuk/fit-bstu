import { State, newsData } from "../../redux/slices"
import Parser from 'html-react-parser'
import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import styles from './newspage.module.css'
import './parsed.css'
export const NewsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const news_list = useSelector((state: State)=> state.form.news);
    const news = news_list.filter((elem: newsData) => elem.id.toString() === searchParams.get('id'));
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    return (
        <div className={styles.main}>
            {news.map((elem)=>{
                return (
                    <div>
                        <div className={styles.head}>
                            <h1 className={styles.title}>{elem.title}</h1>
                            <p>{`${elem.date.day} ${elem.date.month} ${elem.date.year}`}</p>
                            <hr/>
                        </div>
                        {Parser(elem.content.big)}
                    </div>
                )
            })}
        </div>
    )
}