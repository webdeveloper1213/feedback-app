import Header from "./components/Header";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutLinkIcon from "./components/AboutLinkIcon";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feedbackprovider from './store/Feedbackprovider';

// const FeedbackData = [
//   {
//     id: 1,
//     rating: 10,
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
//   },
//   {
//     id: 2,
//     rating: 9,
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
//   },
//   {
//     id: 3,
//     rating: 8,
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
//   },
// ]

const App = () => {
  // const [feedback , setFeedback] = useState(FeedbackData);
  // if(!feedback || feedback.length === 0 ) {
  //   return <p>No feedbacks yet</p>
   
   
  // }

// const addItemHandler = (newFeedback) => {
//   setFeedback((prevFeed) => {
//     return [newFeedback , ...prevFeed];
//   })
// }

//   const deleteItemHandler = (id) => {
// if(window.confirm('Are you sure you want to delete?')){
//   setFeedback(feedback.filter((item) => item.id !== id));

// }

//   }


  return (
    <Feedbackprovider>
    <Router>
 <div className="App">

<Header />
<Routes>
  <Route exact path ='/' element = {
    <>
    {/* <FeedbackForm onSubmitHandler = {addItemHandler}/> */}
    <FeedbackForm />

{/* <FeedbackStats feedback = {feedback} /> */}
<FeedbackStats />


{/* {feedback.length > 0 && <FeedbackList feedback = {feedback} handleDelete = {deleteItemHandler} /> } without context */}

{/* {feedback.length > 0 && <FeedbackList  handleDelete = {deleteItemHandler} /> }  */}
{/* {feedback.length > 0 && <FeedbackList /> }  */}
{/* { feedback.length === 0 && <p style= {{textAlign :'center'}}>No Reviews Yet, Maybe add one ?</p>} */}
<FeedbackList />
    </>

  }>
  </Route>
<Route path= '/about' element = {<About/>}/>  

</Routes>
<AboutLinkIcon />
</div>
    </Router>
    </Feedbackprovider>
  );
}

export default App;
