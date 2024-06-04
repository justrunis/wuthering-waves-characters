import Modal from "../UI/Modal";
export default function WeaponDetailsModal({ weapon, open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="bg-secondary rounded-lg shadow-md p-8 flex flex-col items-center"
    >
      <h1>{weapon}</h1>
      <p>More details soon</p>
    </Modal>
  );
}
