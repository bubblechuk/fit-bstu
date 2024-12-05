import styles from './faculty.module.css'
import nav from '../navigation.module.css'
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {useState} from 'react';
interface navOption {
    name: string,
    link: string
}
const importAll = (requireContext: __WebpackModuleApi.RequireContext): string[] => 
    requireContext.keys().map((key) => requireContext(key).default || requireContext(key));
const Contacts = () => {
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    const scrollToForm = () => {
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    }
    const handleSubmit = () => {

    }
    return (
        <div className={styles.contacts}>
            <div className={styles.persons}>
            <div className={styles.person}>
                <img src={images[1]}/>
                <div className={styles.desc}>
                    <h1>Шиман Дмитрий Васильевич</h1>
                    <h2>Декан факультета</h2>
                    <p>Кандидат технических наук, доцент</p>
                    <p>ауд. 104 корпус 4</p>
                    <p>тел. <a href="tel:80173993389">8 (017) 399-3389</a></p>
                    <p>почта <a href="mailto:it@belstu.by">it@belstu.by</a></p>
                    <p>Приём: Среда с 13.00 до 16.00</p>
                    <p>Отправить <a onClick={scrollToForm}>электронное обращение</a></p>
                </div>
            </div>
            <div className={styles.person}>
                <img src={images[0]}/>
                <div className={styles.desc}>
                    <h1>Салычиц Ольга Игоревна</h1>
                    <h2>Зам. декана по идеологической <br/>и воспитательной работе</h2>
                    <p>Кандидат химических наук </p>
                    <p>ауд. 104 корпус 4</p>
                </div>
            </div>
            <div className={styles.person + ' ' + styles.blank}>
                <img src={images[2]}/>
                <div className={styles.desc}>
                    <h1>Жавненко Анна Александровна</h1>
                    <h2>Специалист</h2>
                    <p>Время работы:</p>
                    <p>Пн-Пт: 8:30 - 16:15, 12:00 - 12:45</p>
                    <p>Суббота: 8:30 - 13:30</p>
                </div>
            </div>
            <div className={styles.person + ' ' + styles.blank}>
                <img src={images[2]}/>
                <div className={styles.desc}>
                    <h1>Юшкевич Екатерина Григорьевна</h1>
                    <h2>Секретарь</h2>
                    <p>Время работы:</p>
                    <p>Пн-Пт: 8:30 - 16:15, 12:00 - 12:45</p>
                    <p>Суббота: 8:30 - 13:30</p>
                </div>
            </div>
        </div>
        <div className={styles.formblock}>
        <form className={styles.form} onSubmit={handleSubmit} id="form">
            <label 
                className={styles.label}>
                    Электронное обращение
            </label>
            <input 
                className={styles.input} 
                placeholder="Ваше ФИО"/>
            <input 
                className={styles.input} 
                placeholder="Ваш email"/>
            <input 
                className={styles.input} 
                placeholder="Ваш телефон"/>
            <input 
                className={styles.input} 
                placeholder="Тема"/>
            <textarea 
                className={`${styles.input} ${styles.textarea}`} 
                placeholder="Сообщение"/>
            <input 
                className={`${styles.input} ${styles.file}`} 
                type="file"/>
            <button 
                className={`${styles.input} ${styles.button}`}>
                    Отправить
            </button>
        </form>
        </div>
        </div>
    )
}
export const Faculty = () => {
    const [button, setActiveButton] = useState<Number>(0);
    const navOptions: navOption[] = [
        {name: "О факультете", link: "/about"},
        {name: "Контакты", link: "/contacts"},
        {name: "Воспитательная работа", link: "/eduwork"},
        {name: "Стипендии", link: "/scolarship"},
        {name: "Общежитие", link: "/dormitory"},
    ];
    return (
        <div className="main">
            <p className={nav.header}>Факультет</p>
            <div className={nav.navigation}>
                {navOptions.map((elem, index) => {
                    return(
                        <div 
                            className={`${nav.navbutton} ${button===index?nav.show:null}`}
                            onClick={() => {setActiveButton(index)}}>
                            {elem.name}
                        </div>
                    )
                })}
            </div>
            <div className={styles.formblock}>
                <Contacts/>
            </div>
        </div>
    )
}