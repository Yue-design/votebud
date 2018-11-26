import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import UserApi from '../../api/UserApi';

import {toastr} from 'react-redux-toastr';

class SiteCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            site: Object.assign({}, props.site),
            submittedByUsername: ""
        };

        this.upvoteClicked = this.upvoteClicked.bind(this);
        this.getSubmittedByUsername(props.site.submittedByUser);
    }

    async getSubmittedByUsername(id) {
        if (!id) return;
        const submittedByUsername = await UserApi.getUsernameById(id);
        console.log(submittedByUsername);
        this.setState({
            submittedByUsername
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({site: nextProps.site});
    }

    upvoteClicked(e) {
        e.preventDefault();

        if (!this.props.authenticated) {
            toastr.error("Login Required", "Please log in");
            return;
        }

        const site = Object.assign({}, this.state.site);
        site.votes += 1;
        this.props.onSave(site).then(() => {
            toastr.success("Success", "Upvoted");
        });

    }

    render() {
        let site = this.state.site;
        const submitBy = this.state.submittedByUsername &&
            <span className={"submittedBy"}>Submitted By {this.state.submittedByUsername}</span>;


        return (
            <div className="cell">
                <div className="card">
                    <div className="card-section">
                        <h4>{site.name}</h4>
                        <p><a href={site.href} target="_blank">{site.href}</a></p>
                        <div className="vote-container">
                            <span className="badge">{site.votes}</span>
                            <a className="button small" href="#" onClick={this.upvoteClicked}>Upvote</a>
                        </div>
                        {submitBy}
                    </div>
                </div>
            </div>
        );
    }
}

SiteCard.propTypes = {
    //course: PropTypes.object.isRequired
};

export default SiteCard;
