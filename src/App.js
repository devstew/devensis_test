import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import AddPost from './components/AddPost';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {

    state = {
        posts: [],
        comments: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data;
                this.setState({posts});
            });

        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                const comments = res.data;
                this.setState({comments});
            })
    }

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="container_content">
                        <AddPost/>
                        <ul className="posts">
                            {this.state.posts.map(post =>
                                (
                                    <div>
                                        <li
                                            key={post.id}
                                            className="post_item"
                                        >
                                            <h5>User ID: {post.id}</h5>
                                            <p>Post: {post.body}</p>
                                        </li>
                                        <div className="">
                                            <ul className="comments">
                                                {
                                                    this.state.comments.map(comment => (
                                                            <li
                                                                key={comment.id}
                                                                className="comment_item"
                                                            >
                                                                <p>User ID: {comment.id}</p>
                                                                <p>Post: {comment.body}</p>
                                                            </li>
                                                        )
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;


