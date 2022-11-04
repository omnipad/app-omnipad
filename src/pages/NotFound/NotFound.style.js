import styled from 'styled-components'
import Logo from '../../components/Logo'
import Title from '../../components/Title'

const NotFound = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & ${Logo} {
    margin-bottom: 5rem;
    width: 300px;
  }

  & ${Title} {
    text-align: center;
    line-height: 1.3;
    margin-bottom: 2rem;
  }
`

export default {
  NotFound
}
