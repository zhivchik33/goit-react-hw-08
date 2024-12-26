import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
const Contact = ({ contactItem: { id, name, number }, onDelete }) => {
  return (
    <div>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
