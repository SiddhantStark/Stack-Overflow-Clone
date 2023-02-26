
import React from 'react'
import {Link, useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from'./QuestionList'
const HomeMainbar = () => {
  const user=1;
  const navigate=useNavigate()
  
  var questionsList = [{ 
       _id: 1,
       votes:0,
   upVotes: 3,
   downVotes:2,
        noOfAnswers: 2,
       questionTitle: "What is a function?",
         questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
         userPosted: "mano",
         userId:1,
        askedon: "jan 1",
        answer:[{
          answerBody:"Answer",
          userAnswered:'manoj',
          answeredOn:"feb 23",
          userId:2,
        }]
  },
  {
    _id:2,
    votes:0,
    noOfAnswers:0,
    questionTitle:"what is a function?",
    userPosted:"mano",
    userId : 1,
    askedon:"jan1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'manoj',
      answeredOn:"feb 23",
      userId:2,
    }]

  },
  {
    _id:3,
    votes:0,
    noOfAnswers:0,
    questionTitle:"what is a function?",
    questionBody:"It mean to be?",
    questionTags:["javascript","R","python"],
    userPosted:"mano",
    userId :1,
    askedon:"jan1",
    answer:[{
      answerBody:"Answer",
      userAnswered:'manoj',
      answeredOn:"feb 23",
      userId:2,
    }]


  }
]
const location=useLocation()
const checkAuth=() =>{
  if (user === null)
  {
    alert("Log-in or sign-up to ask a question");
    navigate('/Auth')
  }
  else{
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      {
        location.pathname==='/' ? <h1> Top Questions</h1> :<h1>All Questions</h1>
      }
      <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      {/* <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link> */}
      
    </div>
    
    <div>
      {
        questionsList===null ? 
        <h1> Loadind....</h1>:
        <>
        <p>{ questionsList.length} questions</p>
        
      <QuestionList questionsList={questionsList}/>
        
        
        
        
        </>
      }
    </div>
    
  </div>
  )
}


export default HomeMainbar
