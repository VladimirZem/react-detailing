
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <div className="footer__title" >НАШИ КОНТАКТЫ</div>
      <div className="footer__inner">
        <div className="footer__left" >
          <a className="tel__footer" href='tel:79085432638'>+7 (908) 543-26-38</a>
          <div className="location__footer" > Лунная 33ст1 <br /> г.Саратов</div>
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
        <div className="footer__right" >
          <img width={380} height={440} src='/image/qr__insta.png' alt='' />
        </div>
      </div>
    </footer>
  )
};

export default Footer;