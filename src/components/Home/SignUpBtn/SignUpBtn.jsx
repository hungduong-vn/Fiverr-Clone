import { useEffect, useState } from "react";
import { Modal } from "antd";
import SignUpModal from "./SignUpModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpModal } from "../../../store/actions/view.action.js";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setSignUpModal({
        open: () => setIsModalOpen(true),
        close: () => setIsModalOpen(false),
      })
    );
  }, []);
  const { signInModal, signUpModal } = useSelector(
    (state) => state.viewReducer
  );
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
        footer={
          <div className="d-flex justify-content-center">
            Already a member?{" "}
            <button
              className="text-success pl-2"
              onClick={() => {
                signUpModal.close();
                signInModal.open();
              }}
            >
              Sign In
            </button>
          </div>
        }
        width={350}
      >
        <SignUpModal closeModal={handleOk} />
      </Modal>
    </>
  );
}
