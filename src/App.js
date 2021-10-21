import styles from './App.module.css';
import ArticleList from './components/ArticleList';

const App = () => {

  return (
    <div className = {styles.App}> 
      <ArticleList/> 
    </div>
  );
}

export default App;
