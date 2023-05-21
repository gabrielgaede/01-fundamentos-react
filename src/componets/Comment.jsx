import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [ likeCount, setLikeCount ] = useState(0);

    function handleDeleteComment() {        
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/11730269?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Gaede</strong>
                            <time title='26 de março às 14:36h' dateTime="2023-03-26 14:36:00">1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Apagar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>


    );
}