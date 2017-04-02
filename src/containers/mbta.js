import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updatePredictions} from '../actions/mbta-actions'

class MBTA extends Component{ 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.updatePredictions(),
      20000
    );
    this.props.updatePredictions();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.props.updatePredictions();
  }

  renderList() {
    return this.props.predictions.map((prediction) => {
      return (
        <li>{prediction.eta}, {prediction.time_away} minutes </li>
      );
    });
  }

  render() {
    return(
      <div>
        <h2 onClick={() => this.props.updatePredictions()}>MBTA</h2>
        <ul>
          {this.renderList()}  
        </ul>          
      </div>
    );
  }
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    predictions: state.mbta.predictions
  };
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({updatePredictions: updatePredictions}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MBTA);

