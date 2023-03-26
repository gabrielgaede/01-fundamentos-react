import { Header } from './componets/Header';
import { Post } from './Post';
import styles from './App.module.css';
import './global.css'
import { Sidebar } from './componets/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas aperiam animi facilis at necessitatibus dignissimos harum unde tempora voluptate debitis labore, architecto, cupiditate atque. Aut cum corporis sed tempora."
          />
        </main>
      </div>
    </div>

  )
}

export default App
