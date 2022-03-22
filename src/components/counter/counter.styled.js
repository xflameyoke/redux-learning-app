import styled from 'styled-components';

export const CounterStyled = styled.div`
  margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 40rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: darkgrey;

  h1 {
    text-transform: uppercase;
    color: #575757;
    margin: 0;
    font-size: 1rem;
  }

  button {
    margin: 1rem;
    border-radius: 25px;
    border: 1px solid grey;
    background: white;
    padding: 15px;
  }
`;

export const ValueStyled = styled.div`
  font-size: 2rem;
  color: #3c0080;
  margin: 2rem 0;
  font-weight: bold;
`;
