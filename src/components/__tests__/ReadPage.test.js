import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ReadPage from '../ReadPage';

jest.mock('../../services/api');

describe('ReadPage', () => {
    test('should return a page with article title and body', async () => {

        render(
            <MemoryRouter initialEntries={['/articles/Article 1']}>
                <Route path='/articles/:name' component={ReadPage} />
            </MemoryRouter>
        );
        
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

        const title = screen.queryByText('Reading "Article 1"');
        const body = screen.queryByText(/Article 1 body/g);
        expect(title).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });

    test('should provide the correct info when no article is found', async () => {
        render(
            <MemoryRouter initialEntries={['/articles/FakeArticle']}>
                <Route path='/articles/:name' component={ReadPage} />
            </MemoryRouter>
        );
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

        const title = screen.queryByText('Reading "FakeArticle"');
        const body = screen.queryByText(/No article with this exact name found./g);
        expect(title).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });
});
