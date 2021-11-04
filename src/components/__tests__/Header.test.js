import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    test('should display the supplied text', () => {
        render(
            <Header text='Test text'></Header>
        )

        const text = screen.queryByText('Test text');
        expect(text).toBeInTheDocument();
    });
});