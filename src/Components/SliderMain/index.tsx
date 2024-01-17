import styles from './SliderMain.module.scss'


type slideProps = {
    title: string;
    descriptionLeft: string;
    descriptionRight: string;
    imageUrl: string;
    lineColor: string;
}

const SliderMain: React.FC<slideProps> = ({ title, imageUrl, lineColor, descriptionLeft, descriptionRight }) => {

    return (
        <div>
            <div className={styles.slide} style={{ backgroundImage: `url(${imageUrl}) ` }} >
                <div className={styles.slide__inner} >
                    <h1 className={styles.title__slide} style={{ borderBottom: `${lineColor}` }} >{title}</h1>
                    <div className={styles.description__block__sldie} >
                        <p className={styles.description__slide}>{descriptionLeft}</p>
                        <p className={styles.description__slide}>{descriptionRight}</p>
                    </div>
                </div>

            </div >
        </div >
    )
};

export default SliderMain;

