import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCafeListByGeoloc } from '../actions/cafe-api';
import { setNeighborhood, setPreferences, fetchCoordinates } from '../actions/index';

class PrefList extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  getCoords() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.fetchCoordinates(position);
      });
    } else {
      //Redirect to the neighborhood route
      console.log("Sorry your browser is not supporting Geo Location");
      this.context.router.push('/neighborhood');
    }
  }

  componentDidMount() {
    this.getCoords.bind(this)();
  }
  
  onPrefClick({ target, target: { dataset: { value } } }) {
    this.props.setPreferences(value);
    const squareClass = 'mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone';
    if(this.props.pref.pref[value]) {
      target.className = `${squareClass} clicked`;
    } else {
      target.className = `${squareClass} unclicked`;
    }
  }

  onPrefSubmit() {
    if(this.props.term === false) {
      setTimeout(this.onPrefSubmit, 200);
    } else {
      this.props.fetchCafeListByGeoloc(this.props.term);
      this.context.router.push('/cafes');
    }    
  }

  render() {
    const squareClass = "mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--1-col-phone";

    return (
      <div className="PrefList">
        <div className="div-holder">
          <div className="small-print">Location set closest to you</div>
          <div className="small-print-button">
            <button type="submit" 
                    className="mdl-button mdl-button--raised mdl-button--accent mdl-js-button mdl-js-ripple-effect" 
                    onClick={this.getCoords.bind(this)}>
              Update Location
            </button>
          </div>
          <div className="search-button">
            <button type="submit" 
                    className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored"
                    onClick={this.onPrefSubmit.bind(this)}>
              Find Cafes
            </button>
          </div>
        </div>
        <div className="mdl-grid">
          <div className={`${squareClass} unclicked`} 
               data-value='coffeeQuality' 
               onClick={this.onPrefClick.bind(this)}>
            Coffee
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='ambiance' 
               onClick={this.onPrefClick.bind(this)}>
            Ambiance
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='rating' 
               onClick={this.onPrefClick.bind(this)}>
            Rating
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='seats' 
               onClick={this.onPrefClick.bind(this)}>
            Seats
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='outlets' 
               onClick={this.onPrefClick.bind(this)}>
            Outlets
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='bathroomQuality' 
               onClick={this.onPrefClick.bind(this)}>
            Bathrooms
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='line' 
               onClick={this.onPrefClick.bind(this)}>
            Line
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='noise' 
               onClick={this.onPrefClick.bind(this)}>
            Noise
          </div>
          <div className={`${squareClass} unclicked`} 
               data-value='price' 
               onClick={this.onPrefClick.bind(this)}>
            Price
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    term: state.pref.term,
    pref: state.pref
  })
}
function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchCafeListByGeoloc, setPreferences, setNeighborhood, fetchCoordinates}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(PrefList);
