import { render, screen } from '@testing-library/react';
import ArticleList from './ArticleList';
import { BrowserRouter as Router } from 'react-router-dom';
import { getArticleList } from '../services/api';

test('big oll test', () => {
    // const apiFunc = jest.spyOn(getArticleList).mockImplementationOnce(() => {
    //     return Promise.resolve(
    //         ['article1', 'article2']
    //     );
    // });
    // jest.mock('../services/api',() => {
    //     getArticleList: jest.fn().mockImplementation((props) => ['article 1', 'article 2']);
    // });

    // render(<ArticleList></ArticleList>)

//   const linkElement = screen.getByText(/article 1/i);
//   expect(linkElement).toBeInTheDocument();
    // expect()
});
