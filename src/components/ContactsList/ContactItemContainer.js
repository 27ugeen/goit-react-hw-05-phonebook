import { connect } from 'react-redux';
import ContactItem from './ContactItem';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import withTheme from '../hoc/withTheme';

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () =>
    dispatch(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(ContactItem));
