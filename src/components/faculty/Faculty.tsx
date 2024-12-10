import styles from './faculty.module.css'
import nav from '../navigation.module.css'
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import {useState} from 'react';
import {BrowserRouter as Routes, Route, Outlet, Link} from 'react-router-dom'
declare type FormValues = {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    file: FileList;
  };
interface navOption {
    name: string,
    link: string
}
const importAll = (requireContext: __WebpackModuleApi.RequireContext): string[] => 
    requireContext.keys().map((key) => requireContext(key).default || requireContext(key));
export const Contacts = () => {
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    const scrollToForm = () => {
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    }
    const handleEmail: SubmitHandler<FormValues> = async (data) => {
        console.log("Отправляем сообщение:", data); 
        const emailContent = `
        <div style="width: 1024px; height: fit-content;">
  <div style="height: 80px; background-color: black; display: flex">
    <img 
      src="https://it.belstu.by/wp-content/uploads/2019/05/LogoFIT-1-e1557999163520.png"
      style="height: 60px; margin: 10px"/>
    <h1 style="color: white; line-height: 55px; margin: 10px">Факультет информационных технологий БГТУ</h1>
  </div>
  <div style="padding: 10px; font-size: 18px; background-color: #262121" color: white !important>
      <p style="color: white">Здравствуйте, ${data.fullName}! Спасибо за ваше электронное обращение. Оно получено, и сейчас находится в обработке. Спасибо за ожидание.</p>
      <p style="font-size: 14px; color: white;">С уважением,<br> деканат факультета информационных технологий.</p>
  </div>
</div>
`
        try {
          const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: data.email,
              subject: "Мы получили ваше обращение",
              html: emailContent
            }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to send email');
          }
      
          const result = await response.json();
          alert(result.message);
        } catch (error) {
          console.error('Error in handleEmail:', error);
          alert('Не удалось отправить письмо');
        }
      };
      
      
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        handleEmail(data);
        reset();
    };
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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} id="form">
      <label className={styles.label}>Электронное обращение</label>
      
      <input 
        {...register("fullName", { required: "Введите ваше ФИО" })} 
        className={styles.input} 
        placeholder="Ваше ФИО" 
      />
      {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
      
      <input 
        {...register("email", { 
          required: "Введите ваш email", 
          pattern: { 
            value: /^\S+@\S+$/i, 
            message: "Некорректный email"
          }
        })} 
        className={styles.input} 
        placeholder="Ваш email" 
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      
      <input 
        {...register("phone", { 
          pattern: { 
            value: /^\+?\d{10,15}$/, 
            message: "Некорректный телефон"
          }
        })} 
        className={styles.input} 
        placeholder="Ваш телефон" 
      />
      
      <input 
        {...register("subject")} 
        className={styles.input} 
        placeholder="Тема" 
      />
      
      <textarea 
        {...register("message", { required: "Введите сообщение" })} 
        className={`${styles.input} ${styles.textarea}`} 
        placeholder="Сообщение" 
      />
      {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      
      <input 
        {...register("file")} 
        className={`${styles.input} ${styles.file}`} 
        type="file" 
      />
      <button 
        type="submit" 
        className={`${styles.input} ${styles.button}`}>
        Отправить
      </button>
    </form>
        </div>
        </div>
    )
}
export const Faculty = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const navOptions: navOption[] = [
      { name: "О факультете", link: "about" },
      { name: "Контакты", link: "contacts" },
      { name: "Воспитательная работа", link: "eduwork" },
      { name: "Стипендии", link: "scolarship" },
      { name: "Общежитие", link: "dormitory" },
  ];

  return (
      <div className={styles.faculty}>
          <p className={nav.header}>Факультет</p>
          <div className={nav.navigation}>
              {navOptions.map((elem, index) => (
                  <Link
                      key={index}
                      to={elem.link} 
                      className={`${nav.navbutton} ${activeButton === index ? nav.show : ''}`}
                      onClick={() => setActiveButton(index)}
                  >
                      {elem.name}
                  </Link>
              ))}
          </div>
          <div className={styles.content}>
              <Outlet /> 
          </div>
      </div>
  );
};