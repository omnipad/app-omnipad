import styled, { keyframes } from 'styled-components'

const up = keyframes`
  from {
    opacity: 0.6;
    transform: translateY(calc(120vh)) scale(2);
    filter: blur(0.5px)
  }

  to {
    opacity: 1;
    transform: translateY(-120%) scale(0.8);
  }
`

export const Item = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  background-color: var(--color-first-black);
  font-size: 2.5rem;
  font-weight: bold;
  width: 12rem;
  height: 12rem;
  opacity: 0;
  color: var(--color-white);
  border: 0.2rem solid var(--color-white);
  transform-origin: center;
  transform: scale(${({ scale }) => scale || '1'});
  text-align: center;
  animation: ${up} ${({ time }) => time || '4s'} ease-out ${({ delay }) => delay || '0s'} infinite;
  animation-play-state: paused;
  transform: translateY(calc(100vh));
  position: relative;
  z-index: ${({ zIndex }) => zIndex || '0'};
`

const List = styled.ol`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`

export default {
  List,
  Item
}
