import React from 'react';
import './FeedbackStats.css';
import FeedbackContext from '../store/FeedbackContext';
import { useContext } from 'react';
// const FeedbackStats = ({feedback}) => { // without context
const FeedbackStats = () => {

  const {feedback} = useContext(FeedbackContext);
let average = feedback.reduce((acc , curr) => {
    return acc + curr.rating
},0) / feedback.length;

average = average.toFixed(1).replace(/[.,]0$/,''); // replace will remove any trailing 0's eg from 9.0 it gives 9

  return <div className='feedback-stats'>
<h3>{feedback.length} reviews</h3>
<h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
  </div>;
};

export default FeedbackStats;
