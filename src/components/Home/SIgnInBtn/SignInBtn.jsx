import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSignInModal } from "../../../store/actions/view.action";
import SignInModal from "./SignInModal";
import SignInModalFooter from "./SignInModalFooter";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSignInModal({
        open: () => setIsModalOpen(true),
        close: handleCancel,
      })
    );
  }, []);
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
        footer={<SignInModalFooter closeModal={() => setIsModalOpen(false)} />}
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
