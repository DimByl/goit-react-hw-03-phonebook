import { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.scss";

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const { name, number } = state;

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

    return (
      <form className={styles.ContactForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.formText}>Name</span>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Enter contact's name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.formText}>Number</span>
          <input
            className={styles.formInput}
            type="tel"
            placeholder="Enter contact's number"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </label>

        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;