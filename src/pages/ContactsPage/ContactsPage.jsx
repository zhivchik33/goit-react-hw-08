
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectItems } from "../../redux/contacts/selectors";


const ContactsPage = () => {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <p>There are no contacts in your phonebook yet!</p>
      )}
    </div>
  );
};

export default ContactsPage;
