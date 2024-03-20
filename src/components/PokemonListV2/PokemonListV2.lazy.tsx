import React, { lazy, Suspense } from 'react';

const LazyPokemonListV2 = lazy(() => import('./PokemonListV2'));

const PokemonListV2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPokemonListV2 {...props} />
  </Suspense>
);

export default PokemonListV2;
