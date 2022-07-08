import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Quiz from './Components/QuizForm';
import QuizState from "./Context/Quiz/QuizState";
import UserState from "./Context/User/UserState";

// ============= This is the Main Component ================//
const App = () => {
  return (
    <UserState>
      <QuizState>
        <Router>
          <div>
            <Route exact path="/" component={Quiz}/>
          </div>
        </Router>
      </QuizState>
    </UserState>
  );
}

export default App;