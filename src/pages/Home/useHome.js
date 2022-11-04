import { useState } from 'react'

const useHome = () => {
  const [showTicketModal, setShowTicketModal] = useState(false)

  const toggleTicketModal = () => setShowTicketModal(!showTicketModal)

  return {
    showTicketModal,
    toggleTicketModal
  }
}

export default useHome
