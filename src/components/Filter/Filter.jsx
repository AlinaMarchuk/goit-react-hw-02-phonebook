import styles from './Filter.module.css';

const Filter = ({ inputSearch }) => {
  return (
    <>
      <p className={styles.p}>Fined contacts by name</p>
      <input
        className={styles.input}
        onChange={inputSearch}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
