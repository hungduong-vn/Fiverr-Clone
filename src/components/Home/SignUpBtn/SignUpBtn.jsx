import { useState } from "react";
import { Modal } from "antd";
import SignUpModal from "./SignUpModal.jsx";
export default function SignUpBtn(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if (props.closeSideBar) {
      props.closeSideBar();
    }
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className={props.className} onClick={showModal}>
        {props.innerText}
      </button>
      <Modal
        title="Join Fiverr"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={350}
      >
        <SignUpModal closeModal={handleOk} />
      </Modal>
    </>
  );
}
