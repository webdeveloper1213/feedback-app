import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './AboutLinkIcon.css';
const AboutLinkIcon = () => {
  return <div className='about-link'>
<Link to='/about'>
    <FaQuestion size = {20} />
</Link>

  </div>;
};

export default AboutLinkIcon;
