import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as siteActions from '../../actions/siteActions';
import Submit from './Submit';
import {toastr} from 'react-redux-toastr';

const normalizeUrl = require('normalize-url');

class SubmitContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        // this.props.dispatch(newTodo(this.state.todo));

        this.state = {
            site: Object.assign({}, this.props.site),
            errors: {}
        };

        this.saveSite = this.saveSite.bind(this);
        this.updateSiteState = this.updateSiteState.bind(this);
    }

    updateSiteState(e) {
        const field = e.target.name;
        let site = this.state.site;

        // normalize url if this is url
        if (field == "href") {
            let normalized = normalizeUrl(e.target.value);
            site[field] = normalized;
            return this.setState({site});
        }

        site[field] = e.target.value;
        return this.setState({site});
    }

    redirect() {
        this.context.router.history.push('/');
    }

    saveSite(e) {
        e.preventDefault();

        if (!this.submitFormIsValid()) {
            return;
        }

        this.props.siteActions.saveSite(this.state.site)
            .then(() => {
                this.redirect();
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Error");
            });
    }

    submitFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if (this.state.site.name.length < 3) {
            errors.name = "Site Name must be at least 3 characters.";
            formIsValid = false;
        }
        if (this.state.site.href.length < 3) {
            errors.href = "Site Url must be at least 3 characters.";
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    render() {
        return (
            <Submit onSave={this.saveSite} onChange={this.updateSiteState} errors={this.state.errors}
                    site={this.state.site}/>
        );
    }
}

SubmitContainer.propTypes = {
    //actions: PropTypes.object.isRequired,
    //courses: PropTypes.array.isRequired
};

SubmitContainer.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {

    let site = {
        href: '',
        name: '',
        votes: 0,
        submittedByUser: state.user._id
    };

    return {
        site
    };
}

function mapDispatchToProps(dispatch) {
    return {
        siteActions: bindActionCreators(siteActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitContainer);
