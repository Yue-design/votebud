import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as siteActions from '../../actions/siteActions';

import SiteCard from './SiteCard';

class SiteCardContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

    // console.log('here1', props);
    this.state = {
      sites: Object.assign([], props.sites)
    };

  }

  componentWillReceiveProps(nextProps) {
    const sites = Object.assign([], nextProps.sites);
    this.setState({sites});
  }

  render() {
    return (
      <div>
        {
          this.state.sites.length > 0 && this.state.sites.map(site => {
            return <SiteCard key={site._id} site={site} onSave={this.props.siteActions.saveSite} authenticated={this.props.authenticated}/>;
          })
        }
      </div>
    );
  }
}

SiteCardContainer.propTypes = {
  //actions: PropTypes.object.isRequired,
  //courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

  let sorted = state.sites.sort((a, b) => {
    return a.votes < b.votes;
  });

  return {
    //courses: state.courses,
    sites: sorted,
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    siteActions: bindActionCreators(siteActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteCardContainer);
