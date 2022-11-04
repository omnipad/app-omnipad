import styled, { css, keyframes } from 'styled-components'
import FloatButton from '../../components/FloatButton'
import Logo from '../../components/Logo'
import { Item } from './List'

const Title = styled.h1`
  font-size: 5rem;
  color: var(--color-white);
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0px 0px 1rem var(--color-white);
  background-color: var(--color-first-black);
  padding: 0.5rem 2rem;
  border-radius: 2em;

  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
`

const up = keyframes`
  0% {
    bottom: 0;
    opacity: 0.5;
    transform: scale3d(1, 1, 1);
  }

  50% {
    bottom: 50%;
    opacity: 1;
    transform: scale3d(1, 2, 1);
  }

  100% {
    bottom: calc(100% - 1rem);
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`

const moveLeft = keyframes`
  0% {
    right:  100%;
    opacity: 1;
  }

  100% {
    right: 0;
    opacity: 1;
  }
`

const hasLeft = ({ left }) => left && css`
  border-right: 0.2rem solid var(--color-second-black);

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 1rem;
    width: 0.4rem;
    border-radius: 0 0 0.2rem 0.2rem;
    filter: blur(0.1rem);
    bottom: 0;
    right: -0.3rem;
    opacity: 0;
    background-color: var(--color-first);
    animation: ${up} 4s 4.1s linear infinite paused;
    z-index: 5;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 0.4rem;
    width: 1rem;
    border-radius: 0 0 0.2rem 0.2rem;
    filter: blur(0.1rem);
    bottom: 0rem;
    right: 0rem;
    opacity: 0;
    background-color: var(--color-first);
    animation: ${moveLeft} 4s linear infinite paused;
    z-index: 5;
  }

  &:hover {
    & ${Title} {
      color: var(--color-first)
    }
  }
`

const moveRight = keyframes`
  0% {
    left: calc(100% - 1rem);
    opacity: 1;
  }

  100% {
    left:  0;
    opacity: 1;
  }
`

const hasRight = ({ right }) => right && css`
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 1rem;
    width: 0.4rem;
    border-radius: 0 0 0.2rem 0.2rem;
    filter: blur(0.1rem);
    bottom: 0;
    left: -0.3rem;
    opacity: 0;
    background-color: var(--color-third);
    animation: ${up} 4s 4.1s linear infinite paused;
    z-index: 5;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 0.4rem;
    width: 1rem;
    border-radius: 0 0 0.2rem 0.2rem;
    filter: blur(0.1rem);
    bottom: 0rem;
    right: 0rem;
    opacity: 0;
    background-color: var(--color-third);
    animation: ${moveRight} 4s linear infinite paused;
  }

  &:hover {
    & ${Title} {
      color: var(--color-third)
    }
  }
`

const Section = styled.section`
  box-sizing: border-box;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  & ${FloatButton} {
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover {
    & ${Title} {
      transform: translateY(-20%);
    }
    
    & ${Item} {
      animation-play-state: running;
    }

    &::after, &::before {
      animation-play-state: running;
    }

    & ${FloatButton} {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ${hasLeft};
  ${hasRight};
`

const Home = styled.main`
  display: flex;
  justify-content: center;

  & ${Logo} {
    position: absolute;
    top: 1rem;
    background-color: var(--color-first-black);
    border-radius: 50%;
    width: 15rem;
    z-index: 20;
  }
`

export default {
  Home,
  Section,
  Title
}
