import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  font-size: 2rem;
  border: 0.1rem solid var(--color-white);
  background-color: var(--color-first-black);
  color: var(--color-white);
  padding: 0 2rem;
  border-radius: 2.5rem;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: var(--color-first-black);
    background-color: var(--color-first);
    border-color: var(--color-first-black);
  }
`

export default Button
