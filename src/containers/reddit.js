import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPosts} from '../actions/reddit-actions'

class Reddit extends Component{ 
  componentDidMount() {
    /*this.timerID = setInterval(
      () => this.props.weatherUpdate(),
      30000
    );
    this.props.weatherUpdate();*/
  }

  componentWillUnmount() {
    //clearInterval(this.timerID);
  }

  /*slideShow() {*/
    /*var i;*/
    /*var slides = document.getElementsByClassName("get_motivated");*/
    /*var dots = document.getElementsByClassName("dot");*/
    /*for (i = 0; i < slides.length; i++) {*/
       /*slides[i].style.display = "none";  */
    /*}*/
    /*slideIndex++;*/
    /*if (slideIndex> slides.length) {slideIndex = 1}    */
    /*for (i = 0; i < dots.length; i++) {*/
        /*dots[i].className = dots[i].className.replace(" active", "");*/
    /*}*/
    /*slides[slideIndex-1].style.display = "block";  */
    /*dots[slideIndex-1].className += " active";*/
    /*setTimeout(showSlides, 2000); // Change image every 2 seconds*/
  /*}*/

  renderImages() {
    if (this.props.reddit.length !== undefined) {
      return this.props.reddit.map(image => {
        return (
          <img src={image} alt="Get Motivated" width="300" height="300" className="get_motivated"/> 
        )
        console.log(image)
      });
  }}
  
  render() {
    window.test();
    return(
      <div>
        <h2 onClick={() => this.props.getPosts()}>Reddit</h2>
        <div className="row">
            {this.renderImages()}
        </div>
      </div>
    );
  }
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    reddit: state.reddit
  };
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({getPosts: getPosts}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Reddit);

