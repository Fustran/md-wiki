import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import LinkButton from '../LinkButton';
import { act } from 'react-dom/test-utils';

describe('LinkButton', () => {
    test('should render the supplied text in the button', () => {
        render(
            <Router>
                <LinkButton to='/' text='Test text' />
            </Router>
        );

        const text = screen.queryByText('Test text');
        expect(text).toBeInTheDocument();
    });

    test('should change the path when clicked', () => {
        let testLocation;
        //we include a Route in here so we can pull out the current path to a variable
        render(
            <Router>
                <LinkButton to='/test/path' text='button text' />

                <Route path="*" render={({location}) => {
                    testLocation = location; 
                    return null;
                }} />
            </Router>
        );

        act(() => {
            const button = screen.getByRole('button');
            fireEvent.click(button);
        });
        
        expect(testLocation.pathname).toEqual('/test/path');

    });
});