import React, { useEffect } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import './FeedbackForm.css';
import { useState } from 'react';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../store/FeedbackContext';
import { useContext } from 'react';
import FeedBackItem from './FeedBackItem';

const FeedbackForm = ({onSubmitHandler}) => {
    const {addItemHandler , feedbackEdit , updateFeedbackItem} = useContext(FeedbackContext);// feedbackEdit contains item and edit as in an object

    const [text , setText] = useState('');
    const [ btnDisabled , setButtonDisabled] = useState(true);
    const [ message , setMessage] = useState('');
    const [rating , setRating] = useState('');




      //for editing the item. The form gets loaded everytime we click on submit after editing
      useEffect(() => {
        if(feedbackEdit.edit === true) {
            setButtonDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
            
        }
        
              } , [feedbackEdit])
            

// when the input is changed

    const inputChangeHandler = ({target : {value}}) => {
console.log(value);
if(value === '') {
    setButtonDisabled(true);
    setMessage(null);
}else if (/\d/.test(value)) { //check if numbers in input
setMessage('Text must not include numbers!');
setButtonDisabled(true);
}else if(value.trim().length < 10) { // text < 10 characters
setMessage('Text must be at least 10 characters long!');
setButtonDisabled(true);
}else {
    setMessage(null);
    setButtonDisabled(false);
}
setText(value);    
    }

    // select the rating
    const selectHandler = (rating) => {
        console.log(rating);
setRating(rating);
    }

    // submitting the form

    const submitHandler = (e) => {
        e.preventDefault();

        const newFeedback = {
        text,
        rating,
        id: Math.random().toString()
        }
    //     onSubmitHandler(newFeedback);
  
// logic for updating. If editing the item then edit it otherwise add a new item

if(feedbackEdit.edit === true) {
updateFeedbackItem(feedbackEdit.item.id , newFeedback);
}else {
    addItemHandler(newFeedback);
}
    // addItemHandler(newFeedback);
     setText('');
    }


  return <Card>
      <form className='feedback-form' onSubmit = {submitHandler}>
      <h3>How would you rate your service with us ? </h3>
      <div className='ratingSelect'>
      <RatingSelect onSelect = {selectHandler}  />
      </div>
    
      <div className='input-group'>
          <input type="text" placeholder = "Write a review" onChange = {inputChangeHandler} value={text} />
<Button type = "submit" isDisabled={btnDisabled} >Send</Button>      
{/* {feedbackEdit.edit ? <Button type = "submit" isDisabled={btnDisabled} >Update</Button> :
<Button type = "submit" isDisabled={btnDisabled} >Send</Button>  
}      */}
   

      </div>
      {message && <p className='message'>{message}</p>}
      </form>
   

  </Card>;
};

export default FeedbackForm;
