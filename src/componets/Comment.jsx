import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/11730269?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Gaede</strong>
                            <time title='26 de março às 14:36h' dateTime="2023-03-26 14:36:00">1h atrás</time>
                        </div>

                        <button title='Apagar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, Gabriel! Parabéns 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>


    );
}