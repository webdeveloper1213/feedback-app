import React from 'react';
import './FeedbackItem.css';
import Card from './UI/Card';
import {FaTimes , FaEdit} from 'react-icons/fa';
import FeedbackContext from '../store/FeedbackContext';
import { useContext } from 'react';


const FeedBackItem = ({item , handleDelete}) => {
    const { editFeedbackItem ,deleteItemHandler} = useContext(FeedbackContext);

const deleteHandler = () => {
    // handleDelete(item.id);
   deleteItemHandler(item.id);
}

const editHandler = () => {
    editFeedbackItem(item);
}

  return (
      <>
   
      <li className='feedbackItem'>
          <Card>   
      <div className='ratingItem'>{item.rating}</div>

   
      <button className='close' >
          <FaTimes color='purple' onClick={(deleteHandler)}></FaTimes>
      </button>
      <button className='edit'>
          <FaEdit color = 'purple' onClick= {editHandler} />
      </button>
      
     
      <div className='text'>{item.text}</div>
      </Card>
      </li>
      </>
    
  )
};

export default FeedBackItem;
