interface ModalState{
    modalOpen:boolean;
    setModalOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const ModalStateChild = ({modalOpen,setModalOpen}:ModalState) => {
    const clickModal=()=>{
        setModalOpen(true);
    }
  return (
    <>
        {/* <div>{modalOpen}</div> */}
        <button onClick={clickModal}>클릭하여 열기</button>
        {modalOpen?<div>모달!</div>:<div></div>}
    </>
  )
}

export default ModalStateChild