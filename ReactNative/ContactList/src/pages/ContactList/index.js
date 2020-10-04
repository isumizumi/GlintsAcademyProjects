import React, {useState, createContext} from 'react';
import Contact from './Contact';

export const RootContext = createContext();

const ContactList = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContact] = useState([]);

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangeHp = (value) => {
    setNumber(value);
  };

  const addContact = () => {
    const time =
      new Date().getTime().toString() +
      Math.floor(Math.random() * Math.floor(new Date().getTime())).toString();
    if (name && number) {
      setContact((state) => [
        {key: time, name: name, number: number},
        ...state,
      ]);
      setName('');
      setNumber('');
    }
  };

  const deleteContact = (id) => {
    setContact(
      contacts.filter((_item, _index) => {
        if (_index !== id) {
          return true;
        }
      }),
    );
  };

  return (
    <RootContext.Provider
      value={{
        name,
        number,
        contacts,
        handleChangeName,
        handleChangeHp,
        addContact,
        deleteContact,
      }}>
      <Contact />
    </RootContext.Provider>
  );
};

export default ContactList;
