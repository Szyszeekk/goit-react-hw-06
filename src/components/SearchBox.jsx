import css from "../css/SearchBox.module.css";

const SearchBox = ({ search, onSearchChange }) => {
  return (
    <label>
      <p className={css.paragraph}>Find contacts by name</p>
      <input
        type="text"
        value={search}
        onChange={onSearchChange}
        className={css.input}
      />
    </label>
  );
};

export default SearchBox;
