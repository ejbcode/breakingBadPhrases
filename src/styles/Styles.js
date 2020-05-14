import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  height: 100vh;
  margin-top: -30px
`;

export const PhraseContainer = styled.div`
  padding: 1rem;
  border-radius:.5rem;
  background: rgba(255,255,255, 0.8);
  max-width:90vw;
  width:800px;
  max-height:300px;
  font-size: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    margin:1rem;
    padding-left: 2rem;
      &::before {
      content: open-quote;
      font-size: 5rem;
      color: black;
      position: absolute;
      left: -2rem;
      top: -2rem; 

      }
  }

  p {

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2vw;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin:0px;
  }

  
  @media (min-width:992) {
    margin-top: 10rem;
  }
`;


export const Button = styled.button`
  background-image:  radial-gradient(
      circle farthest-corner at -1% 57.5%,
      rgba(19, 170, 82, 1) 0%,
      rgba(0, 102, 43, 1) 90%
    );
    font-family:Arial, Helvetica, sans-serif;
    color:white;
    padding:1rem 3rem;
    font-size:1rem;
    position:absolute;
    bottom: 15px;
    border: solid black 3px;
    background-size: 100%;
    transition:  0.6s ease;

    :hover {
      cursor: pointer;
      background-size: 350%;  
        }
`;
