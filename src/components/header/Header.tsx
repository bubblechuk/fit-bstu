import React from "react";
import styles from "./header.module.css";
import Logo from "./logo.png";
import Search from "./search.svg";
import Menu from "./menu.svg";
import { useState } from "react";
interface ButtonHandler {
    button: React.Dispatch<React.SetStateAction<boolean>>;
    search: boolean;
}
export const Header: React.FC<ButtonHandler> = ({button, search}) => {
    const [slider, setSlider] = useState<boolean>(false);
    const sliderOptions: string[] = [
        "Главная",
        "О факультете",
        "Студентам",
        "Абитуриентам",
        "Работодателю",
        "Сайт БГТУ"];
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.button} onClick={() => {
                    button(!search)
                }}>
                    <img className={styles.option} src={Search} alt="Search Icon" />
                    <span>Поиск</span>
                </div>
                <img className={styles.logo} src={Logo} alt="Logo" />
                <div className={styles.button} onClick={() => setSlider(!slider)}>
                    <span>Меню</span>
                    <img className={styles.option} src={Menu} alt="Menu Icon" />
                </div>
                <div className={`${styles.slider} ${slider ? styles.show : styles.hide}`}>
                    {sliderOptions.map(elem => (
                        <div 
                        className={`${styles.sliderOption} ${slider ? styles.show : styles.hide}`}
                        >
                            <div>{elem}</div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
};
