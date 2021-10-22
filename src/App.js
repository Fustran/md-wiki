import styles from './App.module.css';
import ArticleList from './components/ArticleList';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ReadPage from './components/ReadPage';
import EditPage from './components/EditPage';

const App = () => {
  return (
    <div className={styles.App}> 
      <Router>
        <Route exact path="/" component={ArticleList}/>
        <Route exact path ="/articles/:name" component={ReadPage} />
        <Route exact path ="/articles/edit/:name" component={EditPage} />
      </Router>
    </div>
  );
}

export default App;
