import { useEffect, FC } from "react";
import { useSpring, animated } from "react-spring";
import style from "./Modal.module.scss";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  modalText: string;
}

const Modal: FC<ModalProps> = ({ showModal, closeModal, modalText }) => {
  const modalAnimation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-100%)",
  });

  useEffect(() => {
    if (showModal) {
      const timeoutId = setTimeout(() => {
        closeModal();
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showModal, closeModal]);

  return (
    showModal && (
      <animated.div style={modalAnimation} className={style.modal}>
        <h4>{modalText}</h4>
      </animated.div>
    )
  );
};

export default Modal;
