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
            .map(contact => <ContactsItem key={contact.id} contact={contact} />)
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

export default ContactsList;
