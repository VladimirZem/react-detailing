import React, { useRef } from "react";
import styles from "./Question.module.scss";
import { CSSTransition } from "react-transition-group";


type questionProps = {
    question: string;
    answer: string;
}


const Question: React.FC<questionProps> = ({ question, answer }) => {
    const [isActive, setIsActive] = React.useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const onClickPlus = () => {
        setIsActive(!isActive);
    }
    return (
        <div className={styles.question__inner} >
            <div className={styles.question__ask}>
                <div className={styles.question__text} >{question}</div>
                <CSSTransition
                    in={isActive}
                    nodeRef={imageRef}
                    timeout={300}
                    classNames={{
                        enterActive: styles.BtnEnterActive,
                        enterDone: styles.BtnEnterDone,
                        exitActive: styles.BtnExitActive,
                        exitDone: styles.BtnExitDone
                    }}
                    onEnter={() => setIsActive(true)}
                >
                    <img ref={imageRef} src={isActive ? "/image/icon/cross.svg" : "image/icon/plus.svg"} alt='plus' onClick={onClickPlus} className="question__btn" />
                </CSSTransition>
            </div>
            <div className={styles.answer__list}>
                <CSSTransition
                    in={isActive}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames={{
                        enterActive: styles.AnswerEnterActive,
                        enterDone: styles.AnswerEnterDone,
                        exitActive: styles.AnswerExitActive,
                        exitDone: styles.AnswerExitADone
                    }}
                    unmountOnExit
                    onEnter={() => setIsActive(true)}
                    onExited={() => setIsActive(false)}
                >
                    <div ref={nodeRef} className={styles.item}>{answer}</div>
                </CSSTransition>
            </div >
        </div >
    )
};

export default Question;