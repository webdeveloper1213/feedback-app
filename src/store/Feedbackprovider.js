import React  , {useState} from "react";
import FeedbackContext from "./FeedbackContext";
const Feedbackprovider = ({ children }) => {
  
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 10 },
  ]);

  const [feedbackEdit , setFeedbackEdit] = useState([{
      item : {},
      edit : false
  }]);

  const editFeedbackItem = (item) => {
      setFeedbackEdit({
          item,
          edit : true
      })
  }

  const deleteItemHandler = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id));
    
    }
    
      }
    
const addItemHandler = (newFeedback) => {
    setFeedback((prevFeed) => {
      return [newFeedback , ...prevFeed];
    })
  }

  //updating items

  const updateFeedbackItem = (id , updateItem) => {
setFeedback(feedback.map((item) => 
    (item.id === id ? {...updateItem , id} : item)
));

setFeedbackEdit({
    item : {},
    edit : false
})
  }
  return (
    <FeedbackContext.Provider value={{ 
        feedback,
        deleteItemHandler,
        addItemHandler,
        editFeedbackItem,
        feedbackEdit , // edit state
        updateFeedbackItem,
        }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default Feedbackprovider;
