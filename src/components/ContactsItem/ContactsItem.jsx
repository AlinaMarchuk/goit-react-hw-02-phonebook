import styles from './ContactsItem.module.css';

const ContactsItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li key={id} className={styles.item}>
      <p className={styles.p}>
        {name}: {number}
      </p>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;
