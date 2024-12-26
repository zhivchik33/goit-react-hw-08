
import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";


const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const onDelete = (itemId) => {
    dispatch(deleteContact(itemId));
  };
  return (
    <ul>
      {filteredContacts.map((contactItem) => {
        return (
          <li key={contactItem.id}>
            <Contact contactItem={contactItem} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
