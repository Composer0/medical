import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import './Card.scss';
import museImage from '../../assets/img/muse.jpg';

const Card = () => {
  return (
    <div id="card-group">
      <div className="card-wrapper">
        <a href="#" className="img-wrapper">
          <img src={museImage} alt="project image" />
        </a>
        <div className="desc-wrapper">
          <h3>Project 1</h3>
          <p>Here are a couple of works to describe this project that I have worked on. It is a highly interesting project and I believe you will see that it properly showcases my ability as a developer.</p>
          <a href="#" className="btn-link">Learn More</a>
          <div className="social-wrapper">
            <a href="#" className="outside-link github-link"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="" className="outside-link youtube-link"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="" className="outside-link demo-link"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
