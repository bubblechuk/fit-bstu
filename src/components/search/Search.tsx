import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./search.module.css"
import {State, newsData} from "../../redux/slices"
import { useState } from "react";
interface ISearch {
    button: React.Dispatch<React.SetStateAction<boolean>>;
    search: boolean;
}
export const Search: React.FC<ISearch> = ({ search, button }) => {
    const news = useSelector((state: State)=> state.form.news);
    const [news_searched, setSearched] = useState<newsData[]>([]);
    const handleSearch = (value: string) => {
        setSearched(news
                    .filter(elem => 
                        elem.title
                        .toLowerCase()
                        .includes(
                                    value
                                    .toLowerCase()
                                )))
        console.log(news_searched)
    }
    useEffect(() => {
        if (search) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "";
        }
    }, [search])
    return (
        <div className={`${styles.search} ${search ? styles.show : styles.hide}`}>
            <div className={styles.window}>
                <p className={styles.title}>Поиск</p>
                <input onChange={(e) => {handleSearch(e.target.value)}}className={styles.input} placeholder="Поиск по новостям..."></input>
                <div className={styles.suggestions}>
                    {news_searched.map((elem)=>{
                        return(
                            <div className={styles.suggestion}>
                                <img className={styles.image} src={elem.image}/>
                                <div className={styles.desc}>
                                    <h1>{elem.title}</h1>
                                    <p>{elem.content.small}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div
                    className={styles.close}
                    onClick={() => {
                        button(!search);
                    }}
                >
                    X
                </div>
            </div>
        </div>
    );
};
