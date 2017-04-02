import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clockUpdate} from '../actions/clock-actions'

class Clock  extends Component {
  render() {
    return (
      <div>
        <h2 onClick={() => this.props.clockUpdate()}>Clock</h2>
        {this.props.clock.day}
        <br/>
        {this.props.clock.month} {this.props.clock.date}, {this.props.clock.year}
        <h3>{this.props.clock.time}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.timeID = setInterval(
      () => this.props.clockUpdate(),
      1000
    );
    this.props.clockUpdate();
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

}

function mapStateToProps(state) {
    return {
      clock: state.clock
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({clockUpdate: clockUpdate}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Clock);

