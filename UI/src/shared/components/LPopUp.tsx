import React from "react";
import Modal from "react-bootstrap/Modal";

interface ILPopUpProps {
  show: boolean;
  handleCancel: () => void;
  handleConfirm: () => void;
}
const LPopUp: React.FunctionComponent<ILPopUpProps> = ({
  show,
  handleCancel,
  handleConfirm,
}) => {
  const onCancel = () => {
    handleCancel();
  };
  const onConfirm = () => {
    handleConfirm();
  };
  return (
    <>
      <Modal size="lg" show={show} contentClassName="modal-container">
        <Modal.Header>
          <h5>Delete</h5>
        </Modal.Header>

        <Modal.Body>
          <span>Are you sure to delete?</span>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default LPopUp;
