import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import * as api from '../../services/api';
import ArticleList from '../ArticleList';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../services/api');

describe('ArticleList', () => {
    test('should have 3 ArticleCards', async () => {
        render(
            <Router>
                <ArticleList />
            </Router> 
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const article1 = screen.queryByText('Article 1');
        const article2 = screen.queryByText('Article 2');
        const article3 = screen.queryByText('Article 3');
        expect(article1).toBeInTheDocument();
        expect(article2).toBeInTheDocument();
        expect(article3).toBeInTheDocument();
    });

    test('should render "no articles found" when there arent any', async () => {
        //override our manual mock to return an empty article list
        jest.spyOn(api, 'getArticleList').mockReturnValue(
            Promise.resolve([])
        );

        render(
            <Router>
                <ArticleList />
            </Router> 
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
        const test = screen.queryByText('No articles found.');
        expect(test).toBeInTheDocument();
    });
});

