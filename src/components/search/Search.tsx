import styles from "./search.module.css"
interface ISearch {
    button: React.Dispatch<React.SetStateAction<boolean>>;
    search: boolean;
}
export const Search: React.FC<ISearch> = ({ search, button }) => {
    return (
        <div className={`${styles.search} ${search ? styles.show : styles.hide}`}>
            <div className={styles.window}>
                <p className={styles.title}>Поиск</p>
                <input className={styles.input} placeholder="Поиск по новостям..."></input>
                <div className={styles.suggestions}>
                    <div className={styles.suggestion}>
                        <img className={styles.image} />
                        <div className={styles.desc}>
                            <h1>News Name</h1>
                            <p>ewewe</p>
                        </div>
                    </div>
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
