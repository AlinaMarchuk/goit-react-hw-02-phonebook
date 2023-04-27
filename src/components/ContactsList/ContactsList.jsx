import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import styles from './ContactsList.module.css';

const ContactsList = ({ filteredArr, contacts, filter, onDelete }) => {
  return (
    <ul className={styles.list}>
      {filter
        ? filteredArr.map(contact => (
            <ContactsItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            />
          ))
        : contacts.map(contact => (
            <ContactsItem
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            />
          ))}
    </ul>
  );
};

ContactsList.propTypes = {
  filteredArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default ContactsList;
