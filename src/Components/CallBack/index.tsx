import styles from './CallBack.module.scss'
import { Link } from 'react-router-dom'

type CallBackProps = {
    active: boolean;
    setActive: (open: boolean) => void;
}



const Callback: React.FC<CallBackProps> = ({ active, setActive }) => {

    const activeClass = styles.callback + ' ' + styles.active
    const activeClassInner = styles.inner + ' ' + styles.active
    return (
        <div className={active ? activeClass : styles.callback} onClick={() => setActive(false)}>
            <div className={active ? activeClassInner : styles.inner} onClick={e => e.stopPropagation()} >
                <img className={styles.close} onClick={() => setActive(false)} src='/image/icon/close.svg' alt='' />
                <div className={styles.tel__block}>
                    <span className={styles.title}>Вы можете просто позвонить НАМ!</span>
                    <a className={styles.tel} href='tel:79085432638'>+7 (908) 543-26-38</a>
                    <span className={styles.title}>или написать в личные сообщения</span>
                </div>
                <div className="footer__socialBlock" >
                    <button className="footer__social">
                        <Link to={'https://www.instagram.com/autolux_164/'}>
                            <img src='/image/icon/insta.svg' alt='' />
                        </Link>
                    </button>
                    <button className="footer__social">
                        <Link to={'https://vk.com/autolux164'}>
                            <img src='/image/icon/vk.svg' alt='' />
                        </Link>
                    </button>
                    <button className="footer__social">
                        <Link to={'https://t.me/makarov_369'}>
                            <img src='/image/icon/tg.svg' alt='' />
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Callback
