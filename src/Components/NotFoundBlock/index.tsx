import styles from "./NotFoundBlock.module.scss";


const NotFoundBlock: React.FC = () => {
    return (
        <>
            <h1 className={styles.root} >
                <span>&#128532;</span>
                <br />
                Ничего не найдено
                <br />
                <button> На главную </button>
            </h1>

        </>
    )
};

export default NotFoundBlock;