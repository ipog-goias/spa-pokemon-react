import React, { lazy, Suspense } from 'react';

const LazyPokemonList = lazy(() => import('./PokemonList'));

const PokemonList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPokemonList {...props} />
  </Suspense>
);

export default PokemonList;
