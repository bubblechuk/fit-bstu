import React from "react";
import styles from "./header.module.css";
import Logo from "./logo.png";
import Search from "./search.svg";
import Menu from "./menu.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
interface ButtonHandler {
    button: React.Dispatch<React.SetStateAction<boolean>>;
    search: boolean;
}
interface SliderOption {
    name: string,
    link: string
}
export const Header: React.FC<ButtonHandler> = ({button, search}) => {
    var navigate = useNavigate();
    const [slider, setSlider] = useState<boolean>(false);
    const sliderOptions: SliderOption[] = [
        {name: "Главная", link: '/'},
        {name: "О факультете", link: "/faculty/contacts"},
        {name: "Студентам", link: "/student"},
        {name: "Абитуриентам", link: "/abiturient"},
        {name: "Работодателю", link: "/employer"},
    ];
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.button} onClick={() => {
                    button(!search)
                }}>
                    <img className={styles.option} src={Search} alt="Search Icon" />
                    <span>Поиск</span>
                </div>
                <img onClick={() => {navigate('/')}} className={styles.logo} src={Logo} alt="Logo" />
                <div className={styles.button} onClick={() => setSlider(!slider)}>
                    <span>Меню</span>
                    <img className={styles.option} src={Menu} alt="Menu Icon" />
                </div>
                <div className={`${styles.slider} ${slider ? styles.show : styles.hide}`}>
                    {sliderOptions.map(elem => (
                        <div 
                        className={`${styles.sliderOption} ${slider ? styles.show : styles.hide}`}
                        >
                            <Link to={elem.link} onClick={() => {setSlider(!slider)}}><div>{elem.name}</div></Link>
                        </div>
                    )
                    )}
                    <div 
                        className={`${styles.sliderOption} ${slider ? styles.show : styles.hide}`}
                        >
                            <a href="https://belstu.by" ><div>Сайт БГТУ</div></a>
                        </div>
                </div>
            </div>
        </div>
    );
};
