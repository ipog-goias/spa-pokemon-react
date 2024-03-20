import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonListV2 from './PokemonListV2';

describe('<PokemonListV2 />', () => {
  test('it should mount', () => {
    render(<PokemonListV2 />);
    
    const pokemonListV2 = screen.getByTestId('PokemonListV2');

    expect(pokemonListV2).toBeInTheDocument();
  });
});