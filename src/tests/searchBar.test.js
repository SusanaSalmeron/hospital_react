import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { KeywordProvider } from '../context/KeywordContext';

describe('SearchBar', () => {
    test('render SearchBar component', async () => {
        render(
            <KeywordProvider>
                <SearchBar />
            </KeywordProvider>);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'Hola' },
        });
        expect(screen.getByDisplayValue('Hola')).toBeInTheDocument()
    });
});