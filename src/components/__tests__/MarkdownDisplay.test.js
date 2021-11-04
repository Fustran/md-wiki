import MarkdownDisplay from '../MarkdownDisplay';
import { render, screen } from '@testing-library/react';

describe('MarkdownDisplay', () => {
    test('Should render an element with supplied text', () => {
        render(
            <MarkdownDisplay text="Test text" />
        )

        const text = screen.queryByText('Test text');
        expect(text).toBeInTheDocument();
    });
});