import React from 'react';
import { connect } from 'react-redux'

function handleOnClick(val) {
  console.log(val);
  // props.handleOnClick(val);
}

function PeopleList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, index) =>
    <li key={index} onClick={() => handleOnClick(val)}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
    return {
      contacts: state.contacts
    }
}

export default connect(mapStateToProps)(PeopleList)