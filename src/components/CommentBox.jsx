import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };
    // Our component just rendered
    componentDidMount() {
        this.shouldNavigateAway();
    }
    // Our component just updated
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if (!this.props.auth) {
            this.props.history.push('/');
        }
    }

    handleChange = e => {
        this.setState({ comment: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment)
        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(CommentBox);