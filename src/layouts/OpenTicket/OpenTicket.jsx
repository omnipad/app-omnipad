import { bool, func } from 'prop-types'
import openTicket from '../../assets/videos/open-ticket.mp4'
import Button from '../../components/Button'
import S from './OpenTicket.style'

const OpenTicket = ({ closeModal, status }) => (
  <S.OpenTicket active={status} onClick={({ target }) => target.tagName === 'SECTION' && closeModal()}>
    <S.Modal>
      <S.Close onClick={closeModal} />
      <S.Title>How to create a Ticket?</S.Title>

      <S.Video src={openTicket} autoPlay loop muted controls />

      <Button as="a" href="https://discord.gg/RZuu5ghjmV" target='_black'>Join Discord</Button>
    </S.Modal>
  </S.OpenTicket>
)

OpenTicket.propTypes = {
  closeModal: func.isRequired,
  status: bool.isRequired
}

export default OpenTicket
