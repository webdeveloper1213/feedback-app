import React from "react";
import FeedBackItem from "./FeedBackItem";
import FeedbackContext from '../store/FeedbackContext';
import  {useContext} from 'react';
// const FeedbackList = ({ feedback , handleDelete }) => {
const FeedbackList = ({ handleDelete }) => { // for context

  const {feedback}  = useContext(FeedbackContext);
  if(feedback.length === 0) {
    return (
      <p style ={{textAlign:'center'}}>No feedback yet.Maybe add one?</p>
    )
  }
  return (
    <>
 <ul style={{ listStyle: "none" }}>
        {feedback.map((item) => (
   <FeedBackItem 
          key={item.id} 
        //   rating={item.rating} 
        //   text={item.text} 
         item = {item}
        //  handleDelete = {handleDelete}
          />
        ))}
      </ul>     
    

    </>
  );
};

export default FeedbackList;
