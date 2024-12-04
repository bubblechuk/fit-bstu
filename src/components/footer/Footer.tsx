import styles from "./footer.module.css"
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
            <span className={styles.text}>© БГТУ 2013-2024</span>
            <span className={styles.text}>Версия для слабовидящих</span>
            </div>
        </div>
    )
}