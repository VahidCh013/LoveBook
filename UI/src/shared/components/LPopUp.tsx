import React from "react";
import Modal from "react-bootstrap/Modal";

interface ILPopUpProps {
  show: boolean;
  headerNode?: React.ReactNode;
  children: React.ReactNode;
  footerNode: React.ReactNode;
  // handleCancel: () => void;
  // handleConfirm: () => void;
}
const LPopUp: React.FunctionComponent<ILPopUpProps> = ({
  show,
  headerNode,
  children,
  footerNode,
}) => {
  // const onCancel = () => {
  //   handleCancel();
  // };
  // const onConfirm = () => {
  //   handleConfirm();
  // };
  return (
    <>
      <Modal size="lg" show={show} contentClassName="modal-container">
        {headerNode && <Modal.Header>{headerNode}</Modal.Header>}

        <Modal.Body>
          {children}
        </Modal.Body>

        {footerNode && <Modal.Footer>{footerNode}</Modal.Footer>} 
      </Modal>
    </>
  );
};
export default LPopUp;
