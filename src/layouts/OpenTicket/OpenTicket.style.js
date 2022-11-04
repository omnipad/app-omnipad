import styled, { css } from 'styled-components'
import FloatButton from '../../components/FloatButton'

const Title = styled.h1`
  text-align: center;
  color: var(--color-first);
  font-size: 3rem;
`

const Video = styled.video`
  height: 75%;
  border: 0.1rem solid var(--color-second);
  border-radius: calc(var(--radius) / 2);
`

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box; 
  background-color: var(--color-first-black);
  width: 60%;
  height: 80%;
  padding: 2rem;
  border: 0.1rem solid var(--color-white);
  border-radius: var(--radius);
  transform: translateY(-120%);
  transition: transform 0.6s ease-in-out;

  & > ${FloatButton} {
    position: relative;
  }
`

const hasActive = ({ active }) => active && css`
  transform: scale(1);

  & ${Modal} {
    transform: translateY(0);
  }
`

const OpenTicket = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height:100vh;
  background-color: var(--color-first-light-black);
  transform-origin: 25% bottom;
  transition: transform 0.6s ease-in-out;

  transform: scale(0);

  ${hasActive};
`

export default {
  OpenTicket,
  Modal,
  Video,
  Title

}
