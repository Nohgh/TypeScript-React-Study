import { useState } from "react"
import ModalStateChild from "./ModalStateChild";

const ModalStateParent = () => {
    const [modalOpen,setModalOpen]=useState(false);
  return (
        <ModalStateChild modalOpen={modalOpen} setModalOpen={setModalOpen}/>
  )
}

export default ModalStateParent