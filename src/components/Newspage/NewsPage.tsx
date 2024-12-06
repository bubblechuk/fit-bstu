import { State, newsData } from "../../redux/slices"
import Parser from 'html-react-parser'
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
export const NewsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const news_list = useSelector((state: State)=> state.form.news);
    const news = news_list.filter((elem: newsData) => elem.id.toString() === searchParams.get('id'));
    
    return (
        <div className="main">
            {news.map((elem)=>{
                return (
                    <div>
                        {Parser(elem.content.big)}
                    </div>
                )
            })}
        </div>
    )
}