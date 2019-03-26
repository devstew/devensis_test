import {
    GET_POSTS,
    GET_COMMENTS,
    ADD_POST
} from "../actions/actiontypes";


const initialState = {
    posts:[]
}

export default function(state = initialState, action){
    switch (action.type) {
        case GET_POSTS:
            return{
                ...state,
                posts: action.payload
            };
        case GET_COMMENTS:
            return{
                ...state,
                comments: action.payload
            };
        case ADD_POST:
            return{
                ...state,
                posts: [action.payload, ...state.posts]
            }
    }
}