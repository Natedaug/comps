import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const actionBar = (
    <div>
      <Button primary onClick={() => setShowModal(false)}>
        Give soul
      </Button>
    </div>
  );

  const modal = (
    <Modal setShowModal={setShowModal} actionBar={actionBar}>
      <p>Here is an important agreement where you sign your life away.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={() => setShowModal(true)} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
