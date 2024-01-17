import React from 'react'
import images from './galleyWorks.json'


type imageItem = {
    url: string;
    description: string;
}


const FADE_DURATION = 300
const length = images.length

function GalleryWorks() {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const [fadeState, setFadeState] = React.useState('fade-inV2');
    const [currentTimer, setCurrentTimer] = React.useState();

    const handlerClickPrev = () => {
        const timer: any = setTimeout(() => {
            const newIndex = (currentSlideIndex - 1 + images.length) % images.length
            setCurrentSlideIndex(newIndex)
            setFadeState('fade-inV2')
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState('fade-out');
        setCurrentTimer(timer)
    };

    const handlerClickNext = () => {
        const timer: any = setTimeout(() => {
            const newIndex = (currentSlideIndex + 1) % images.length
            setCurrentSlideIndex(newIndex)
            setFadeState('fade-inV2')
        }, FADE_DURATION);
        clearTimeout(currentTimer);
        setFadeState('fade-outV2');
        setCurrentTimer(timer)
    };
    const classs = "slider__inner" + ' ' + fadeState;
    return (
        <section className="gallery__works container" >
            <div className="title__gallery" >НАШИ РАБОТЫ</div>
            <div className='works__inner'>
                <div className='slider__count'>
                    <span >{currentSlideIndex + 1} / {length}</span>
                </div>
                <div className={classs} style={{ transitionDuration: `${FADE_DURATION}ms` }}>
                    {
                        images.map((obj, index) =>
                            <div
                                key={index}
                            >
                                {
                                    currentSlideIndex === index &&
                                    <img className='works__img' src={obj.url} alt={obj.description} />
                                }


                            </div>

                        )}
                </div>

                <div className="slider__footer">

                    <div className="btn__slider">
                        <button onClick={handlerClickPrev}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="57" height="106" viewBox="0 0 57 106" fill="none">
                                <path d="M1.78057 49.5916L48.5988 1.41108C50.4269 -0.470577 53.3914 -0.470578 55.2198 1.4114C57.0479 3.29307 57.0479 6.34362 55.2195 8.22528L11.712 52.999L55.2198 97.775C57.0479 99.6567 57.0479 102.707 55.2195 104.589C54.3056 105.53 53.1074 106 51.9091 106C50.7109 106 49.5127 105.53 48.5984 104.589L1.78057 56.4055C0.90226 55.5019 0.409111 54.2765 0.409111 52.9987C0.409111 51.7209 0.90226 50.4952 1.78057 49.5916Z" fill="white" />
                            </svg>
                        </button>
                        <button onClick={handlerClickNext}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="58" height="106" viewBox="0 0 58 106" fill="none">
                                <path d="M56.4977 49.5916L8.3159 1.41108C6.43456 -0.470577 3.38369 -0.470578 1.50203 1.4114C-0.37931 3.29307 -0.379311 6.34362 1.50235 8.22528L46.2771 52.999L1.50203 97.775C-0.37931 99.6567 -0.379311 102.707 1.50235 104.589C2.44286 105.53 3.67599 106 4.90913 106C6.14226 106 7.37539 105.53 8.31623 104.589L56.4977 56.4055C57.4016 55.5019 57.9091 54.2765 57.9091 52.9987C57.9091 51.7209 57.4016 50.4952 56.4977 49.5916Z" fill="white" />
                            </svg>
                        </button>
                    </div>


                </div>

            </div>

        </section>
    )
};

export default GalleryWorks;