import React, { useEffect } from "react";


import SliderMain from "./SliderMain";

type slideItem = {
    title: string;
    descriptionLeft: string;
    descriptionRight: string;
    imageUrl: string;
    lineColor: string;
}

const slide: slideItem[] = [
    {
        title: 'Полировка кузова',
        descriptionLeft: "ОСВЕЖИТЕ КУЗОВ СВОЕГО АВТОМОБИЛЯ И ПРИДАЙТЕ ПЕРВОЗДАННЫЙ ВИД",
        descriptionRight: "УДАЛЕНИЕ ЦАРАПИН, БЛЕСК И НАСЫЩЕННОСТЬ ЦВЕТА",
        imageUrl: '/image/CarouselMain/Slide1.jpg',
        lineColor: '2px solid #FF0000',
    },
    {
        title: 'Химчистка салона',
        descriptionLeft: "ПРИДАНИЕ ПЕРВОНАЧАЛЬНОГО ВИДА САЛОНА УДАЛЕНИЕ БАКТЕРИЙ, НЕПРИЯТНОГО ЗАПАХА",
        descriptionRight: "ОЧИСТКА ПЯТЕН, ГРЯЗИ, А ТАК ЖЕ ВЪЕВШИХСЯ ЗАГРЯЗНЕНИЙ",
        imageUrl: '/image/CarouselMain/slide2.jpg',
        lineColor: '2px solid #FAFF00',
    },
    {
        title: 'Тонировка авто',
        descriptionLeft: "СТРОГИЙ ВИД АВТОМОБИЛЯ ЗАЩИТА ОТ СОЛНЕЧНЫЙ ЛУЧЕЙ",
        descriptionRight: "АТЕРМАЛЬНАЯ ПЛЕНКА 70% (ПРОХОДИТ ГОСТ) ПЛЕНКА ХАМЕЛЕОН 83% (ПРОХОДИТ ГОСТ)",
        imageUrl: '/image/CarouselMain/Slide6.jpg',
        lineColor: '2px solid #000',
    },
    {
        title: 'Защитные покрытия',
        descriptionLeft: "НАСЫЩЕННОСТЬ И КОНТРАСТ ЦВЕТА ГИДРОФОБНЫЙ ЭФФЕКТ ГЛУБИНА ЦВЕТА",
        descriptionRight: "ЗАЩИТА КУЗОВА ОТ МЕЛКИХ ПОВРЕЖДЕНИЙ И ВНЕШНИХ ФАКТОРОВ ГАРАНТИЯ ОТ 1 ГОДА",
        imageUrl: '/image/CarouselMain/Slide4.jpg',
        lineColor: '2px solid #0500FF',
    },
    {
        title: 'Бронепленка',
        descriptionLeft: "НАСЫЩЕННОСТЬ И КОНТРАСТ ЦВЕТА ГИДРОФОБНЫЙ ЭФФЕКТ МАКСИМАЛЬНАЯ ЗАЩИТА КУЗОВА",
        descriptionRight: "ПЛЕНКИ ПРЕМИУМ КАЧЕСТВА ПРОЗРАЧНЫЕ / МАТОВЫЕ / ЦВЕТНЫЕ ГАРАНТИЯ ОТ 5 ЛЕТ",
        imageUrl: '/image/CarouselMain/Slide5.jpg',
        lineColor: '2px solid #00990F'
    }
]

const FADE_DURATION = 300

const Slider: React.FC = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const [fadeState, setFadeState] = React.useState('fade-in');
    const [currentTimer, setCurrentTimer] = React.useState();

    const handlerClickPrev = () => {
        const timer: any = setTimeout(() => {
            const newIndex = (currentSlideIndex - 1 + slide.length) % slide.length
            setCurrentSlideIndex(newIndex)
            setFadeState('fade-in')
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState('fade-out');
        setCurrentTimer(timer)
    };

    const handlerClickNext = () => {
        const timer: any = setTimeout(() => {
            const newIndex = (currentSlideIndex + 1) % slide.length
            setCurrentSlideIndex(newIndex)
            setFadeState('fade-in')
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState('fade-out');
        setCurrentTimer(timer)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handlerClickPrev();
        }, 5000);
        return () => clearInterval(interval);
    }, [fadeState]);


    const classs = "slider" + '  ' + fadeState;

    return (
        <div className={classs}
            style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
            {slide.map((obj, index: number) => (
                <div
                    key={index}
                >

                    {currentSlideIndex === index &&
                        <SliderMain
                            title={obj.title}
                            descriptionLeft={obj.descriptionLeft}
                            descriptionRight={obj.descriptionRight}
                            imageUrl={obj.imageUrl}
                            lineColor={obj.lineColor}
                        />
                    }
                </div>
            ))}
            <div className="btn__slider" >
                <svg
                    onClick={handlerClickPrev}
                    xmlns="http://www.w3.org/2000/svg" width="57" height="106" viewBox="0 0 57 106" fill="none">
                    <path d="M1.78057 49.5916L48.5988 1.41108C50.4269 -0.470577 53.3914 -0.470578 55.2198 1.4114C57.0479 3.29307 57.0479 6.34362 55.2195 8.22528L11.712 52.999L55.2198 97.775C57.0479 99.6567 57.0479 102.707 55.2195 104.589C54.3056 105.53 53.1074 106 51.9091 106C50.7109 106 49.5127 105.53 48.5984 104.589L1.78057 56.4055C0.90226 55.5019 0.409111 54.2765 0.409111 52.9987C0.409111 51.7209 0.90226 50.4952 1.78057 49.5916Z" fill="white" />
                </svg>
                <svg
                    onClick={handlerClickNext}
                    xmlns="http://www.w3.org/2000/svg" width="58" height="106" viewBox="0 0 58 106" fill="none">
                    <path d="M56.4977 49.5916L8.3159 1.41108C6.43456 -0.470577 3.38369 -0.470578 1.50203 1.4114C-0.37931 3.29307 -0.379311 6.34362 1.50235 8.22528L46.2771 52.999L1.50203 97.775C-0.37931 99.6567 -0.379311 102.707 1.50235 104.589C2.44286 105.53 3.67599 106 4.90913 106C6.14226 106 7.37539 105.53 8.31623 104.589L56.4977 56.4055C57.4016 55.5019 57.9091 54.2765 57.9091 52.9987C57.9091 51.7209 57.4016 50.4952 56.4977 49.5916Z" fill="white" />
                </svg>
            </div>
        </div >
    )
};

export default Slider;