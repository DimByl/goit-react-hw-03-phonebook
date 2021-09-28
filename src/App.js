import { useState } from "react";
import shortid from "shortid";
import styles from "./App.scss";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container/Container";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addNewContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (!name || !number) {
      alert("Please enter the correct name and number");
      return;
    }

    contacts.find(({ name }) => name === contact.name)
      ? alert(`${name} is already in contacts`)
      : setContacts((prevState) => [contact, ...prevState]);
  };

  const handleChangeFilter = (event) => setFilter(event.currentTarget.value);

  const getContactsToShow = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const handleDeleteContact = (id) =>
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );

  return (
    <Container>
      <h1 className={styles.title}>Phonebook (hook)</h1>
      <ContactForm onSubmit={addNewContact} />

      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter value={filter} onChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={getContactsToShow()}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};

export default App;
