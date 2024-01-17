import styles from "./Card.module.scss";
import { Link } from "react-router-dom";


function Card(props) {

  const linkStart = 'detailing/'
  const linkEnd = linkStart + props.navTag
  return (
    <div className={styles.card}>
      <img className={styles.img__card__ser} width={270} height={180} src={props.imageUrl} alt='Polish' />
      <div className={styles.title__card} >{props.title}</div>
      <Link to={linkEnd}>
        <button className={styles.btn__card} >Подробнее</button>
      </Link>
      <div className={styles.price__card} >
        <div className={styles.title__price} >Цена</div>
        <div className={styles.price} >ОТ {props.price} Р.</div>
      </div>
      <div className={styles.time__card} >
        <div className={styles.title__time} >Срок выполнения</div>
        <div className={styles.term} >{props.time}</div>
      </div>
    </div>
  )
};

export default Card;