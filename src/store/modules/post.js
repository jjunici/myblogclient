import {createAction, handleActions} from 'redux-actions';

import {Map, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';
//action types
const GET_POST='post/GET_POST';
const REMOVE_POST='post/REMOVE_POST';
//action creators
export const getPost=createAction(GET_POST,api.getPost);
export const removePost=createAction(REMOVE_POST,api.removePost);
//initial state

const initialState=Map({
    post:Map({})
});

//reducer
export default handleActions({
    ...pender({
        type:GET_POST,
        onSuccess:(state,action)=>{

            //REST API 호출해서 성공적으로 데이터를 받아오면 action.payload 에 
            //값이 담기고 그걸 객체에 넣어서 스토어의 state 를 셋팅 해준다 
            const {data:post}=action.payload;
            return state.set('post',fromJS(post));
        }
    })

},initialState);