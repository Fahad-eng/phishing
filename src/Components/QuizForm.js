import React, { useState, useContext } from 'react'
import MainPage from './MainPage'
import RegsiterPage from './RegisterPage'
import Quiz_1 from './RemoteSecurityQuiz/Technical/Quiz_4'
import Quiz_2 from './RemoteSecurityQuiz/Technical/Quiz_5'
import Quiz_3 from './RemoteSecurityQuiz/Technical/Quiz_7'
import Quiz_4 from './RemoteSecurityQuiz/Technical/Quiz_8'
import Quiz_5 from './RemoteSecurityQuiz/Technical/Quiz_9'
import Quiz_6 from './RemoteSecurityQuiz/Technical/Quiz_10'
import Quiz_7 from './RemoteSecurityQuiz/Technical/Quiz_14'
import Quiz_8 from './RemoteSecurityQuiz/Technical/Quiz_15'
import Quiz_9 from './RemoteSecurityQuiz/Non-technical/Quiz_1'
import Quiz_10 from './RemoteSecurityQuiz/Non-technical/Quiz_2'
import Quiz_11 from './RemoteSecurityQuiz/Non-technical/Quiz_3'
import Quiz_12 from './RemoteSecurityQuiz/Non-technical/Quiz_6'
import Quiz_13 from './RemoteSecurityQuiz/Non-technical/Quiz_11'
import Quiz_14 from './RemoteSecurityQuiz/Non-technical/Quiz_12'
import Quiz_15 from './RemoteSecurityQuiz/Non-technical/Quiz_13'
import Quiz_16 from './RemoteSecurityQuiz/Non-technical/Quiz_16'
import Quiz_17 from './EPaymentSecurityQuiz/Technical/Quiz_2'
import Quiz_18 from './EPaymentSecurityQuiz/Technical/Quiz_4'
import Quiz_19 from './EPaymentSecurityQuiz/Technical/Quiz_5'
import Quiz_20 from './EPaymentSecurityQuiz/Technical/Quiz_7'
import Quiz_21 from './EPaymentSecurityQuiz/Technical/Quiz_8'
import Quiz_22 from './EPaymentSecurityQuiz/Technical/Quiz_10'
import Quiz_23 from './EPaymentSecurityQuiz/Technical/Quiz_12'
import Quiz_24 from './EPaymentSecurityQuiz/Technical/Quiz_13'
import Quiz_25 from './EPaymentSecurityQuiz/Non-technical/Quiz_1'
import Quiz_26 from './EPaymentSecurityQuiz/Non-technical/Quiz_3'
import Quiz_27 from './EPaymentSecurityQuiz/Non-technical/Quiz_6'
import Quiz_28 from './EPaymentSecurityQuiz/Non-technical/Quiz_9'
import Quiz_29 from './EPaymentSecurityQuiz/Non-technical/Quiz_11'
import Quiz_30 from './EPaymentSecurityQuiz/Non-technical/Quiz_14'
import Quiz_31 from './EPaymentSecurityQuiz/Non-technical/Quiz_15'
import ResultPage from './ResultPage_1'
import ResultPage_2 from './ResultPage_2'
import ResultPage_3 from './ResultPage_3'
import ResultPage_4 from './ResultPage_4'
import PhishingMethod from './PhishingMethod'
import PhishingEmails from './PhishingEmails'
import PhishingWebsites from './PhishingWebsites'
import PhishingSMS from './PhishingSMS'
import PhishingEmailsText from './PhishingEmailsText'
import PhishingSMSText from './PhishingSMSText'
import PhishingWebsitesText from './PhishingWebsitesText'



import Retention from './Retention'
import QuizContext from "../Context/Quiz/QuizContext";
import UserContext from "../Context/User/UserContext";


const QuizForm = () => {

  const quizContext = useContext(QuizContext);
  const userContext = useContext(UserContext);

  

  const { survey1Queue, survey2Queue,
    survey3Queue, survey4Queue, survey2 } = quizContext;
  
    console.log(survey2)
  if (userContext.user.length) {
    var { userType, phishingType } = userContext.user[0];
  } else {
    const userType=undefined;
    const phishingType=undefined;
  } 

  console.log(survey1Queue, survey2Queue, survey3Queue, survey4Queue);

  const [step, setStep] = useState(1)
  const [index, setIndex] = useState(0)

  // Proceed to next step
  const nextStep = retention => {

    //  =============== Starting Survey 1
    if (step === 1) {
      setStep(previousStep => previousStep + 1);
    }


    //  =============== Starting Survey 1 Randomly
    if(userType === 'technical' && phishingType === 'RWS') {
      if (step >= 2 && step <= 10) {
        console.log(step, index)
        if (survey1Queue.findIndex(x => x === step) === (survey1Queue.length - 1)) {
          setIndex(0);
          setStep(34);
        }
        else {
          setIndex(previousStep => previousStep + 1)
          setStep(survey1Queue[index]);
        }
      }
    } 

    //  =============== Starting Survey 2 Randomly
    if(userType === 'non-technical' && phishingType === 'RWS') {
      console.log(step, index)
      if (step === 2) {
        setStep(survey2Queue[index]);
      }
      console.log(step,index)
      if (step >= 10 && step <= 18) {
        if (survey2Queue.findIndex(x => x === step) === (survey2Queue.length - 1)) {
          setIndex(0);
          setStep(35);
        }
        else {
          setIndex(previousStep => previousStep + 1)
          setStep(survey2Queue[index]);
        }
      }
    }


    //  =============== Starting Survey 3 Randomly ( Retention Survey )
    if(userType === 'technical' && phishingType === 'EPayS') {
      if (step === 2) {
        setStep(survey3Queue[index])
      }
      if (step >= 18 && step <= 26) {
        console.log(step, index)
        if (survey3Queue.findIndex(x => x === step) === (survey3Queue.length - 1)) {

          setIndex(0);
          setStep(36);
        }
        else {
          setIndex(previousStep => previousStep + 1)
          setStep(survey3Queue[index]);
        }
      }
    }

    if(userType === 'non-technical' && phishingType === 'EPayS') {
      console.log(step, index)
      if (step === 2) {
        setStep(survey4Queue[index]);
      }
      if (step >= 27 && step <= 33) {

        if (survey4Queue.findIndex(x => x === step) === (survey4Queue.length - 1)) {

          setIndex(0);
          setStep(37);
        }
        else {
          setIndex(previousStep => previousStep + 1)
          setStep(survey4Queue[index]);
        }
      }
    }
  };


  switch (step) {
    case 1:
      return (
        <MainPage
          nextStep={nextStep}
          step={setStep}
        />
      );
    case 2:
      return (
        <RegsiterPage
          nextStep={nextStep}
          step={step}
        />
      );
    case 3:
      return (
        <Quiz_1
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 4:
      return (
        <Quiz_2
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 5:
      return (
        <Quiz_3
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 6:
      return (
        <Quiz_4
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 7:
      return (
        <Quiz_5
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 8:
      return (
        <Quiz_6
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 9:
      return (
        <Quiz_7
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 10:
      return (
        <Quiz_8
          nextStep={nextStep}
          step={step - 2}
          index={index}
        />
      )
    case 11:
      return (
        <Quiz_9
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 12:
      return (
        <Quiz_10
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 13:
      return (
        <Quiz_11
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 14:
      return (
        <Quiz_12
          nextStep={nextStep}
          step={step-10}
          index={index}
          setStep={setStep}
        />
      )
    case 15:
      return (
        <Quiz_13
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 16:
      return (
        <Quiz_14
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 17:
      return (
        <Quiz_15
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 18:
      return (
        <Quiz_16
          nextStep={nextStep}
          step={step-10}
          index={index}
        />
      )
    case 19:
      return (
        <Quiz_17
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 20:
      return (
        <Quiz_18
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 21:
      return (
        <Quiz_19
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 22:
      return (
        <Quiz_20
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 23:
      return (
        <Quiz_21
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 24:
      return (
        <Quiz_22
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 25:
      return (
        <Quiz_23
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    case 26:
      return (
        <Quiz_24
          nextStep={nextStep}
          step={step-18}
          index={index}
        />
      )
    // case 35:
    //   return (
    //     <ResultPage_2
    //       nextStep={nextStep}
    //       setStep={setStep}
    //     />
    //   )
    case 27:
      return (
        <Quiz_25
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 28:
      return (
        <Quiz_26
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 29:
      return (
        <Quiz_27
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 30:
      return (
        <Quiz_28
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 31:
      return (
        <Quiz_29
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 32:
      return (
        <Quiz_30
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 33:
      return (
        <Quiz_31
          nextStep={nextStep}
          step={step-26}
          index={index}
        />
      )
    case 34:
      return (
        <ResultPage
          nextStep={nextStep}
          setStep={setStep}
        />
      )
    case 35:
      return (
        <ResultPage_2
          nextStep={nextStep}
          setStep={setStep}
        />
      )
      case 36:
        return (
          <ResultPage_3
            nextStep={nextStep}
            setStep={setStep}
          />
        )
        case 37:
          return (
            <ResultPage_4
              nextStep={nextStep}
              setStep={setStep}
            />
          )
          case 38:
            return (
              <PhishingMethod
              step={setStep}
              />
            )
            case 39:
              return (
                <PhishingEmailsText
                nextStep={nextStep}
                />
              )
              
            case 40:
              return (
                <PhishingEmails
                  nextStep={nextStep}
                />
              )
              case 41:
                return (
                  <PhishingWebsitesText
                  nextStep={nextStep}
                  />
                )
            case 42:
              return (
                <PhishingWebsites
                  nextStep={nextStep}
                />
              )
              case 43:
                return (
                  <PhishingSMSText
                  nextStep={nextStep}
                  />
                )
            case 44:
              return (
                <PhishingSMS
                  nextStep={nextStep}
                />
              )
    case 48:
      return (
        <Retention
          setStep={setStep}
          nextStep={nextStep}
        />
      )
    default:
      console.log('=================================')
  }
}

export default QuizForm
