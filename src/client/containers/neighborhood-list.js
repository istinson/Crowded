import React, {Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setNeighborhood} from '../actions/index';
import {fetchCafeListByGeoloc} from '../actions/cafe-api';

class NeighborhoodList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  
  onPrefRoute(){
    this.context.router.push('/');
  }
  
  onHoodSubmit({ target: { dataset: { value } } }) {
    this.props.setNeighborhood(value);
    this.props.fetchCafeListByGeoloc(value);
    this.context.router.push('/cafes');
  }
  
  render() {
    const squareClass = 'mdl-cell mdl-cell--4-col';

    return (
      <div className="NeighborhoodList">
        <div className="search-button-neighborhood">
              <button type="submit"
                      className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored"
                      onClick={this.onPrefRoute.bind(this)}>
                Back to Prefs
              </button>
        </div>
        <div className="mdl-grid">
          <div className={`${squareClass} unclicked`}
               data-value='37.759481,-122.414968'
               onClick={this.onHoodSubmit.bind(this)}>
            Mission
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.762462, -122.434905'
               onClick={this.onHoodSubmit.bind(this)}>
            Castro
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.750581, -122.486192'
               onClick={this.onHoodSubmit.bind(this)}>
            Sunset
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.778871, -122.478834'
               onClick={this.onHoodSubmit.bind(this)}>
            Richmond
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.803224, -122.437432'
               onClick={this.onHoodSubmit.bind(this)}>
            Marina
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.804101, -122.408153'
               onClick={this.onHoodSubmit.bind(this)}>
            North Beach
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.770061, -122.444712'
               onClick={this.onHoodSubmit.bind(this)}>
            Haight
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.778915, -122.398127'
               onClick={this.onHoodSubmit.bind(this)}>
            FiDi / Soma
          </div>
          <div className={`${squareClass} unclicked`}
               data-value='37.751860, -122.450125'
               onClick={this.onHoodSubmit.bind(this)}>
            Twin Peaks
          </div>
        </div>
      </div>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fetchCafeListByGeoloc, setNeighborhood}, dispatch);
}

export default connect(null, mapDispachToProps)(NeighborhoodList);