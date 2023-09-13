import { useState } from 'react';
import React from 'react';
import css from './form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactToList } from 'redux/slice';
import { toast } from 'react-toastify';

export const Form = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const AddContact = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name,
      phone: number,
    };
    const contactExists = contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      toast.error('Already Added.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      dispatch(addContactToList(newContact));
    }

    reset();
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  return (
    <form className={css.containerform} onSubmit={AddContact}>
      <div>
        <label className={css.namecontact}>
          Name
          <input
            className={css.inputform}
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div>
        <label className={css.namecontact}>
          Phone Number
          <input
            className={css.inputform}
            type="tel"
            id="number"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={css.button_submit_form} type="submit">
        Add contact
      </button>
    </form>
  );
};
