import React, { useState } from 'react';
import Phrase from './Phrase';
import GlobalStyle from './styles/GlobalStyle';
import { Wrapper, Button } from './styles/Styles';

function App() {
  const API_URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

  const [quote, setQuote] = useState({
    quote: 'Fire in the hole, Bitch!',
    author: ' Jesse Pinkman',
  });

  const handleClick = () => {
    setTimeout(() => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setQuote(data[0]))
        .catch((error) => { console.log(`No se pudo realizar la consulta. Error => ${error}`); });
    }, 0);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Phrase quote={quote} />
        <Button onClick={handleClick}>Obtener Frase</Button>
      </Wrapper>
    </>
  );
}

export default App;
