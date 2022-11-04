import { bool, func } from 'prop-types'
import Services from './Services'
import Tools from './Tools'
import S from './Home.style'
import FloatButton from '../../components/FloatButton'
import OpenTicket from '../../layouts/OpenTicket'
import Logo from '../../components/Logo'

const Home = ({ statusTicketModal, toggleTicketModal }) => (
  <S.Home>
    <Logo />
    <S.Section left>
      <S.Title>Launch Pad</S.Title>

      <Services />

      <FloatButton onClick={toggleTicketModal}>Open ticket</FloatButton>
    </S.Section>
    <S.Section right>
      <S.Title>Tools</S.Title>

      <Tools />
    </S.Section>

    <OpenTicket closeModal={toggleTicketModal} status={statusTicketModal} />
  </S.Home>
)

Home.propTypes = {
  statusTicketModal: bool.isRequired,
  toggleTicketModal: func.isRequired
}

export default Home
