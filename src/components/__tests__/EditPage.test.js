import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import EditPage from '../EditPage';

jest.mock('../../services/api');

describe('EditPage', () => {
    test('should return an EditPage with article title and body', async () => {

        render(
            <MemoryRouter initialEntries={['/articles/Article 1']}>
                <Route path='/articles/:name' component={EditPage} />
            </MemoryRouter>
        );
        
        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

        const title = screen.queryByText('Editing "Article 1"');
        // const body = screen.queryByText(/Article 1 body/g);
        const plaintextField = screen.getByTestId('plainInput');
        expect(title).toBeInTheDocument();
        expect(plaintextField).toHaveTextContent('Article 1 body');
        // expect(body).toBeInTheDocument();
    });
});