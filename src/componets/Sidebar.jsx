import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/11730269?v=4" />
                <strong>Gabriel Gaede</strong>
                <span>CEO</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="20"/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}