import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {
  GET_USER_INFO,
  USER_ERROR,
  GET_RETENTION_INFO
} from "../types";

//initial state here
const UserState = (props) => {
  const initialState = {
    user: [],
    error: null,
    retentionUser: []
  };

  //pull out state and dispatch from our reducer
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //all actions here

  //add user
  const addUser = (user) => {

    try {
      dispatch({ type: GET_USER_INFO, payload: user });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: 'Error while Registering User' });
    }
  };

  const addRetentionUser = (user) => {

    try {
      dispatch({ type: GET_RETENTION_INFO, payload: user });
    } catch (error) {
      dispatch({ type: USER_ERROR, payload: 'Error while Registering User' });
    }
  };


  //wrap our app with this context provider
  return (
    <UserContext.Provider
      //this things will be access via value
      value={{
        user: state.user,
        retentionUser: state.retentionUser,
        error: state.error,
        addUser,
        addRetentionUser
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
