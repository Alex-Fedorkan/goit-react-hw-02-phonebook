import PropTypes from 'prop-types';
import contactsContext from '../../../context/contactsContext';

const ContactItem = ({ id, name, number }) => {
  return (
    <li>
      {name}: {number}
      <contactsContext.Consumer>
        {({ deleteContact }) => (
          <button type="button" onClick={() => deleteContact(id)}>
            Delete
          </button>
        )}
      </contactsContext.Consumer>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
