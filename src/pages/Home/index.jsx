/* eslint-disable react/display-name */
import useHome from './useHome'
import Home from './Home'

export default () => {
  const { showTicketModal, toggleTicketModal } = useHome()

  return <Home statusTicketModal={showTicketModal} toggleTicketModal={toggleTicketModal} />
}
