import Parser from 'html-react-parser'
import { useSelector } from 'react-redux'
import { State } from '../../redux/slices'
import styles from '../main/main.module.css'
import { useNavigate } from 'react-router'
import { useLoad } from '../useLoad'
import { newsData } from '../../redux/slices'
import { useEffect } from 'react'
import { Link } from 'react-router'
export const NewsArchive = () => {
    const news = useSelector((state: State) => state.form.news);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    return (
        <div className="main">
            <div className={styles.newsblock}>
                <p className={styles.newshead}>Архив новостей</p>
                <div className={styles.news}>
                    {news.map((elem) => (
                        <NewsItem {...elem}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
const NewsItem: React.FC<newsData> = (elem) => {
    const { imageRef, isVisible, src } = useLoad(elem.image);
    const navigate = useNavigate();
    return (
        <div
            className={styles.block}
            onClick={() => {
                navigate(`/article?id=${elem.id}`);
            }}
        >
            <img
                className={styles.img}
                src={src}
                ref={imageRef}
                style={{ opacity: isVisible ? 1 : 0.3 }}
                alt={elem.title}
            />
            <div className={styles.text}>
                <span>
                    {elem.date.day}-
                    {elem.date.month}-
                    {elem.date.year}
                </span>
                <Link to={`/article?id=${elem.id}`} title={elem.title} className={styles.head}> 
                                    {elem.title}
                                </Link>
                <span className={styles.desc}>{elem.content.small}</span>
            </div>
        </div>
    );
};
