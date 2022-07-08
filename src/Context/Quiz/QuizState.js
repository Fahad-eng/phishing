import React, { useReducer } from "react";
import QuizContext from "./QuizContext";
import QuizReducer from "./QuizReducer";
import {
  ADD_SURVEY_1,
  ADD_SURVEY_2,
  ADD_SURVEY_3,
  ADD_SURVEY_4,
  SURVERY_ERROR
} from "../types";

//initial state here
const QuizState = (props) => {
  const initialState = {
    survey1: [],
    survey2: [],
    survey3: [],
    survey4: [],
    error: null,



    // Randomly Generating the Question Here For Survey 1
    RWS_tech_queue: [3, 4, 5, 6, 7, 8, 9, 10].map((questions) => ({ sort: Math.random(), value: questions }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value),


    // Randomly Generating the Question Here For Survey 2
    RWS_non_tech_queue: [11, 12, 13, 14, 15, 16, 17, 18].map((questions) => ({ sort: Math.random(), value: questions }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value),


    // Randomly Generating the Question Here For Survey 3
    Epay_tech_queue: [19, 20, 21, 22, 23, 24, 25, 26].map((questions) => ({ sort: Math.random(), value: questions }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value),

    Epay_non_tech_queue: [27, 28, 29, 30, 31, 32, 33].map((questions) => ({ sort: Math.random(), value: questions }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value),
  };

  //pull out state and dispatch from our reducer
  const [state, dispatch] = useReducer(QuizReducer, initialState);

  // =========================== All actions here ==============================

  //add Survey Details
  const addSurvey1Data = (data) => {
    try {
      console.log(data);
      dispatch({ type: ADD_SURVEY_1, payload: data });
    } catch (error) {
      dispatch({ type: SURVERY_ERROR, payload: 'Something Went Wrong' });
    }
  };


  const addSurvey2Data = (data) => {
    try {
      dispatch({ type: ADD_SURVEY_2, payload: data });
    } catch (error) {
      dispatch({ type: SURVERY_ERROR, payload: 'Something Went Wrong' });
    }
  };


  const addSurvey3Data = (data) => {
    try {
      dispatch({ type: ADD_SURVEY_3, payload: data });
    } catch (error) {
      dispatch({ type: SURVERY_ERROR, payload: 'Something Went Wrong' });
    }
  };

  const addSurvey4Data = (data) => {
    try {
      dispatch({ type: ADD_SURVEY_4, payload: data });
    } catch (error) {
      dispatch({ type: SURVERY_ERROR, payload: 'Something Went Wrong' });
    }
  };

  //wrap our app with this context provider
  return (
    <QuizContext.Provider
      //this things will be access via value
      value={{
        survey1: state.survey1,
        survey2: state.survey2,
        survey3: state.survey3,
        survey4: state.survey4,
        survey1Queue: state.RWS_tech_queue,
        survey2Queue: state.RWS_non_tech_queue,
        survey3Queue: state.Epay_tech_queue,
        survey4Queue: state.Epay_non_tech_queue,
        addSurvey1Data,
        addSurvey2Data,
        addSurvey3Data,
        addSurvey4Data
      }}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
