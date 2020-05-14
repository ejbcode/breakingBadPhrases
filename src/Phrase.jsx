import React from 'react';

import { PhraseContainer } from './styles/Styles';

const Phrase = (quote) => (

  <PhraseContainer>
    <h1>{quote.quote.quote}</h1>
    <p>
      -
      {' '}
      {quote.quote.author}
      {' '}
      -
    </p>
  </PhraseContainer>
);


export default Phrase;
