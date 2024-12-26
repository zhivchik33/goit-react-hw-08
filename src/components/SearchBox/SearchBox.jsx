
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/slice";
import { selectFilter } from "../../redux/filter/selectors";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
