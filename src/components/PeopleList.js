import React from 'react';
import { connect } from 'react-redux';
import { removePerson } from '../actions';

function PeopleList(props) {

  function handleOnClick(person) {
    if(person !== '') {
      props.removePerson(person);
    }
  }
  const listItems = props.contacts.map((person, index) =>
    <li key={index} onClick={() => handleOnClick(person)}>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}

const mapDipatchToProps = {
  removePerson
}

export default connect(mapStateToProps, mapDipatchToProps)(PeopleList)