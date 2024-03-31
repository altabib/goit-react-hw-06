import css from "./SearchBox.module.css"
// import { FaBook } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice'
import { selectNameFilter } from '../../selectors/selectors'


const SearchBox = () => { 
const dispatch = useDispatch()
const filter = useSelector(selectNameFilter)


    return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;