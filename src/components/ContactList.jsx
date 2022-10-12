import { PropTypes } from "prop-types";
import { Contact } from "./Contact";
export const ContactList = ({contacts , filter , deleteContact}) => {
  const filterNormalized = filter.toLowerCase();
  const filterContacts = contacts.filter(el => {
    return (
      el.name.toLowerCase().includes(filterNormalized) ||
      el.number.includes(filterNormalized)
    );
  });
  return (
    <>
      <ul>
        {filterContacts.map(el => {
          return <Contact key={el.id} el={el} deleteContact={deleteContact}/>;
        })}
      </ul>
    </>
  );
};
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    filter: PropTypes.string.isRequired,
  };