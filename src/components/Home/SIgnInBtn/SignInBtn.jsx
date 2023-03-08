import { Modal } from "antd";
import React, { useState } from "react";
import SignInModal from "./SignInModal";

export default function SignInBtn(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
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
      <button className={props.className} onClick={openModal}>
        {props.innerText}
      </button>
      <Modal
        title="Sign In"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={350}
      >
        <SignInModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
