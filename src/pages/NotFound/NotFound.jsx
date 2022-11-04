import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import S from './NotFound.style'

const NotFound = () => (
  <S.NotFound>
    <Logo />

    <Title>Sorry! <br />I didn't find this page.</Title>

    <Button as={Link} to="/">Go Home</Button>
  </S.NotFound>
)

export default NotFound
