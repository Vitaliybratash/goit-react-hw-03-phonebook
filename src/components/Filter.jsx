import { PropTypes } from "prop-types";
export const Filter = ({filter , onChangeHandler}) => {
  return (
    <>
      <input
        type="text"
        onChange={onChangeHandler}
        value={filter}
        name="filter"
      />
    </>
  );
};
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
  };