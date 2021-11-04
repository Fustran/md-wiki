import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import EditPage from '../EditPage';
import userEvent from '@testing-library/user-event';

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
        const plaintextField = screen.getByTestId('plainField');
        const markdownField = screen.getByTestId('markdownField')

        expect(title).toBeInTheDocument();
        expect(plaintextField).toHaveTextContent('Article 1 body');
        expect(markdownField).toHaveTextContent('Article 1 body')
    });

    test('edits made to the plaintext field should be reflected in the markdown area', async () => {

        render(
            <MemoryRouter initialEntries={['/articles/Article 1']}>
                <Route path='/articles/:name' component={EditPage} />
            </MemoryRouter>
        );

        await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

        const plaintextField = screen.getByTestId('plainField');
        const markdownField = screen.getByTestId('markdownField')
        userEvent.type(plaintextField, 'Test text');

        expect(markdownField).toHaveTextContent('Test text');
    });
});