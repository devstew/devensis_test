import axios from 'axios';

import {
    ADD_POST,
    GET_COMMENTS,
    GET_POSTS
} from './actiontypes';

export const getPosts = postData => dispatch => {

    axios
        .get('https://jsonplaceholder.typicode.com/posts',postData)
        .then(res=>
        dispatch({
            type:GET_POSTS,
            payload: res.data
        }))
}

export const getComments = postData => dispatch =>{

    axios
        .get('https://jsonplaceholder.typicode.com/comments',postData)
        .then(res=>
            dispatch({
                type:GET_POSTS,
                payload: res.data
            }))
}

export const addPost = (post)  => {
    return {
        type: ADD_POST,
        payload: post
    }
}

