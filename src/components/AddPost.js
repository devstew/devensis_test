import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addPost, getPosts, getComments} from "../actions/postActions";


class AddPost extends Component {
    state = {
        name: ''
    }


    onSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            name: this.state.name
        }
        this.props.addPost(newPost);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentDidMount() {
        this.props.getPosts();
    }


    render() {
        const {post} = this.props.post;
        return (
            <div>
                <button
                    style={{margin: "2rem"}}>
                    Add Post
                </button>
                <form onSubmit={this.onSubmit}>
                    <label
                        for="item"
                    >Post
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="item"
                        placeholder="Add Post"
                        onChange={this.onChange}
                    />
                </form>
                <div>
                    {post.map(({name}) => (
                        <p>{name}</p>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, {addPost})(AddPost);