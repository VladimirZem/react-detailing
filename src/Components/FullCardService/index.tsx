import Callback from '../CallBack';
import styles from './FullCardService.module.scss'
import React from 'react'


type propsList = {
    name: string;
}
type propsImageList = {
    image: string;
}


interface cardServiceProps {
    title: string;
    imageTitle: string;
    types: string;
    startPrice: number;
    time: string;
    description: string;
    serviceList: propsList[];
    advantage: propsList[];
    imagesSlider: propsImageList[];
}





const FADE_DURATION = 300
const FullCardService: React.FC<cardServiceProps> = ({ serviceList, advantage, imagesSlider, title, imageTitle, types, startPrice, time, description }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const [fadeState, setFadeState] = React.useState('fade-in');
    const [currentTimer, setCurrentTimer] = React.useState();
    const [isActive, setIsActive] = React.useState<boolean>(false)

    const handlerClickPrev = () => {
        const timer: any = setTimeout(() => {
            const newIndex = (currentSlideIndex - 1 + imagesSlider.length) % imagesSlider.length
            setCurrentSlideIndex(newIndex)
            setFadeState('fade-in')
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState('fade-out');
        setCurrentTimer(timer)
    };

    const handlerClickNext = () => {
        const timer: any = setTimeout(() => {
            const newIndex = (currentSlideIndex + 1) % imagesSlider.length
            setCurrentSlideIndex(newIndex)
            setFadeState('fade-in')
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState('fade-out');
        setCurrentTimer(timer)
    };



    return (
        <div className='container'>
            <div className={styles.root}>
                <Callback active={isActive} setActive={setIsActive} />
                <div className={styles.main}>
                    <img className={styles.image} width={700} src={imageTitle} alt='Detailing Services' />
                    <div className={styles.main__leftBLock} >
                        <h1 className={styles.main__title}>{title}</h1>
                        <span className={styles.types} >{types}</span>
                        <p className={styles.main__price}>от {startPrice} Р.</p>
                        <p className={styles.main__price}>Срок выполнения {time}</p>
                        <button onClick={() => setIsActive(true)}> ХОЧУ К ВАМ </button>
                    </div>
                </div>
                <p className={styles.description}> {description} </p>
                <h2 className={styles.service__title}> В услугу входит:</h2>
                <ul className={styles.service__list} >
                    {
                        serviceList.map((obj, i) => <li key={i} > {obj.name} </li>)
                    }

                </ul>
                <div className={styles.advantage}>
                    <h2 className={styles.advantage__title}> Преимущества данной услуги</h2>
                    <ul className={styles.advantage__list}>
                        {
                            advantage.map((obj, i) =>
                                <div className={styles.advantage__list__item}
                                    key={i}
                                >
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <li  > {obj.name} </li>
                                </div>)
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.sliderBlock}>
                <h2 className={styles.slider__title}>Примеры работ</h2>
                <div className={styles.slider__container}  >
                    <button onClick={handlerClickPrev}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="57" height="106" viewBox="0 0 57 106" fill="none">
                            <path className={styles.btn__prev} d="M1.78057 49.5916L48.5988 1.41108C50.4269 -0.470577 53.3914 -0.470578 55.2198 1.4114C57.0479 3.29307 57.0479 6.34362 55.2195 8.22528L11.712 52.999L55.2198 97.775C57.0479 99.6567 57.0479 102.707 55.2195 104.589C54.3056 105.53 53.1074 106 51.9091 106C50.7109 106 49.5127 105.53 48.5984 104.589L1.78057 56.4055C0.90226 55.5019 0.409111 54.2765 0.409111 52.9987C0.409111 51.7209 0.90226 50.4952 1.78057 49.5916Z" fill="white" />
                        </svg>
                    </button>
                    <div className={styles.slider__inner}>
                        {
                            imagesSlider.map((obj, index) => (
                                <div className={fadeState} style={{ transitionDuration: `${FADE_DURATION}ms` }}
                                    key={index}
                                >
                                    {currentSlideIndex === index &&
                                        <img height={700} src={obj.image} alt='Detailing Service' />
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={handlerClickNext}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="58" height="106" viewBox="0 0 58 106" fill="none">
                            <path className={styles.btn__next} d="M56.4977 49.5916L8.3159 1.41108C6.43456 -0.470577 3.38369 -0.470578 1.50203 1.4114C-0.37931 3.29307 -0.379311 6.34362 1.50235 8.22528L46.2771 52.999L1.50203 97.775C-0.37931 99.6567 -0.379311 102.707 1.50235 104.589C2.44286 105.53 3.67599 106 4.90913 106C6.14226 106 7.37539 105.53 8.31623 104.589L56.4977 56.4055C57.4016 55.5019 57.9091 54.2765 57.9091 52.9987C57.9091 51.7209 57.4016 50.4952 56.4977 49.5916Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div >
        </div>
    )
}

export default FullCardService;
