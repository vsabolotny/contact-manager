import React from 'react';
import { connect } from 'react-redux';

function ActionLog(props) {
    console.log(props);
    const logEntries = props.logs.map((entry, index) => <p key={index}>- {entry}</p>);
    return <div><h2>Action log</h2>{logEntries}</div>;
}
  
function mapStateToProps(state) {
    return {
      logs: state.logs
    }
}

export default connect(mapStateToProps)(ActionLog)