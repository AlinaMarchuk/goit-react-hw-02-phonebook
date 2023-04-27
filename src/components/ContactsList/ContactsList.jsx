import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, filter, onDelete }) => {
  return (
    <ul className={styles.list}>
      {filter
        ? contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default ContactsList;
