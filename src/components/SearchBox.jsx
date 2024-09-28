import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filtersSlice";
import css from "../css/SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSearchChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label>
      <p className={css.paragraph}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleSearchChange}
        className={css.input}
      />
    </label>
  );
};

export default SearchBox;
