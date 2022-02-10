import React from 'react';
import Card from '../components/UI/Card';
import {Link} from 'react-router-dom';
const About = () => {
  return <Card>Contents of About Page
      <p> This is some content about us.</p>
<Link to='/'>Click here to return to the Home page</Link>
  </Card>;
};

export default About;
