import React from "react";
import { useInView } from 'react-intersection-observer';



import Questions from '../Components/Questions'
import Card from '../Components/CardServicesMain'
import Feedback from '../Components/Feedback'
import GalleryWorks from '../Components/GalleryWorks'
import Slider from "../Components/SliderPreview";
import Callback from "../Components/CallBack";
import MyButton from "../Components/UI/MyButton";



const cardList = [
    {
        title: 'Полировка',
        navTag: 'Полировка',
        id: 1,
        price: 8000,
        imageUrl: '/image/cards__price/card1.jpg',
        time: '1 раб/день'
    },
    {
        title: 'Полировка + Керамика  (с гарантией 1 год)',
        navTag: 'Керамические покрытия',
        id: 2,
        price: 18000,
        imageUrl: '/image/cards__price/card2.jpg',
        time: '2 раб/дня'
    },
    {
        title: 'Полировка + Керамика  (с гарантией 3 года)',
        navTag: 'Керамические покрытия',
        id: 3,
        price: 25000,
        imageUrl: '/image/cards__price/card3.jpg',
        time: '2 раб/дня'
    },
    {
        title: 'Антидождь на всё остекление',
        navTag: 'Антидождь',
        id: 4,
        price: 4000,
        imageUrl: '/image/cards__price/card4.jpg',
        time: '4 часа'
    },
    {
        title: 'Химчистка (полная)',
        navTag: 'Химчистка',
        id: 5,
        price: 10000,
        imageUrl: '/image/cards__price/card5.jpg',
        time: '1 раб/день'
    },
    {
        title: 'Химчистка подкапотного пространтсва',
        navTag: 'Химчистка подкапотного пространства',
        id: 6,
        price: 2500,
        imageUrl: '/image/cards__price/card6.jpg',
        time: '2 часа'
    },
    {
        title: 'Оклейка зон риска автомобиля',
        navTag: 'Бронепленка',
        id: 7,
        price: 50000,
        imageUrl: '/image/cards__price/card7.jpg',
        time: '2 раб/дня'
    },
    {
        title: 'Полная оклейка автомобиля защитной пленкой',
        navTag: 'Бронепленка',
        id: 8,
        price: 150000,
        imageUrl: '/image/cards__price/card8.jpg',
        time: '5 раб/дней'
    }
]
const Home: React.FC = () => {

    const [isActive, setIsActive] = React.useState<boolean>(false)
    const [isView, setIsView] = React.useState(false)
    const { ref, inView } = useInView({
        threshold: 0.5
    })

    React.useEffect(() => {
        if (inView) {
            setIsView(true)
        }
    }, [inView])

    const openPopUp = () => {
        setIsActive(true)
    }


    return (
        <>
            <Slider />
            <Callback active={isActive} setActive={setIsActive} />
            <section className="content__info container" >
                <div className="info__title" >AUTOLUX164 - ЭТО</div>
                <div className="content__list " >
                    <div ref={ref} className={`first__info ${isView ? 'visibled-left' : ''} `} >
                        <div className="nubmer__one" >1</div>
                        <div className="text__list" >
                            <div>Профессиональная противоаллигерная химия премимум качества - безопасна для вас и детей</div>
                            <div>Химчистка с полным разбором</div>
                            <div>Химчистка без разбора</div>
                            <div>Селективная химчистка (отдельно элемент интерьера</div>
                        </div>
                    </div>
                    <div ref={ref} className={`two__info ${isView ? 'visibled-right' : ''} `}  >
                        <div className="text__list" >
                            <div>Большой выбор пленок:</div>
                            <div>Защитная (бронепленка) - разной толщины, матовые / глянцевые / цветые</div>
                            <div>Тонировка - разная степень затемнения от 83% до 5% с разным цветным эффектом</div>
                        </div>
                        <div className="nubmer__two" >2</div>
                    </div>
                    <div ref={ref} className={`first__info ${isView ? 'visibled-left' : ''} `}  >
                        <div className="nubmer__one" >3</div>
                        <div className="text__list" >
                            <div>Разнообразия защитных покрытий:</div>
                            <div>Керамика - от 5000 руб (с разным сроком работы и эффектом</div>
                            <div>Воск - разнообразия производителей </div>
                            <div>Кварц - быстро, дешего, практично</div>
                        </div>
                    </div>
                    <div ref={ref} className={`two__info ${isView ? 'visibled-right' : ''} `}  >
                        <div className="text__list" >
                            <div>Даем <span >ГАРАНТИЮ</span> на все виды работ:<br />
                                и фиксированная цена на все услуги, независимо от класса и <br />
                                состояния автомобиля</div>
                        </div>
                        <div className="nubmer__two" >4</div>
                    </div>
                </div>
            </section>
            <section className={`callback ${isView ? 'visibled' : ''} `} >
                <div className="cb__inner">
                    <div className="title__cb" >Может уже стоит заняться автомобилем? </div>
                    <div className="description__cb" >Хватит откладывать!</div>
                    <MyButton handleClick={openPopUp} >Записаться</MyButton>
                </div>
            </section>
            <section className="whywe container">
                <div className="whywe__title" >Почему выбирают нас?</div>
                <div className="whywe__list">
                    <div className="whywe__cardText">
                        <div className="cardText__title">Персонал</div>
                        <div className="cardText__text">Каждый наш сотрудик прошел  обучение и имеет сертификат, который подтверждает его знания и навыки работы, это означает, что услуги будут оказаны максимально
                            качественно и аккуратно. </div>
                    </div>
                    <img src='/image/icon/4el.svg' alt='Химчистка' />
                    <div className="whywe__cardText">
                        <div className="cardText__title">Срок</div>
                        <div className="cardText__text">Выбирая нас, Вы можете быть спокойны за то, что ваш автомобиль будет готов в установленный срок без потери качества. Мы дорожим вашим временем. </div>
                    </div>
                    <img src='/image/icon/gubka.svg' alt='Химчистка' />
                    <div className="whywe__cardText">
                        <div className="cardText__title">Материал</div>
                        <div className="cardText__text">Мы используем материалы премиум качества, которые не будут вредить никакому элементу автомобиля. Биоразлагаемая химия, никакой аллергии, пятен и запаха после химчистки  </div>
                    </div>
                    <img src='/image/icon/srok.svg' alt='Химчистка' />
                </div>
            </section>
            <section className="bridge">
                <div className="bridge__inner">
                    <div className="bridge__text" >Детейлинг - это комплексный уход за вашим автомобилем, который не только защитит, но и продлит срок его эксплуатации. А также придаст строгий и ухоженный вид. </div>
                </div>
            </section>
            <section className="service__list container">
                <div className="title__services">НАШИ УСЛУГИ</div>
                <div className="card__list__services" >
                    {cardList.map((obj, index) => (
                        <Card
                            key={index}
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            navTag={obj.navTag}
                            time={obj.time} />
                    ))}
                </div>
            </section>
            <section className="bridge__two">
                <div className="bridge__inner">
                    <div className="bridge__text" >Автомобиль - это, как женщина, любит когда за <br />  ней ухаживают и делают подарки <span> &#128513;</span> </div>
                </div>
            </section>
            <GalleryWorks />
            <Feedback />
            <Questions />

        </>
    )
};

export default Home;