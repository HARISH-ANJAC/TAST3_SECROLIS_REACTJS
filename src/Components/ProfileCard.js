import React from 'react';
import './ProfileCard.css';
import { useNavigate } from 'react-router-dom';



//Custom Profile Card
const ProfileCard = ({ ProfileId,ProfileImg, ProfileName, ProfileDesignation, ProfileDescriptions, ProfileButtonName,LinkinUrl,GithupUrl,InstagramURl }) => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate(`/profile/${ProfileId}`);
    };
  
  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src={ProfileImg}
          alt={ProfileName + " IMAGE"}
        />
      </div>
      <h2 className="profile-name">{ProfileName}</h2>
      <h4 className="profile-title">{ProfileDesignation}</h4>
      <p className="profile-description">
        {ProfileDescriptions}
      </p>
      <button className="profile-button" onClick={handleButtonClick}>
        {ProfileButtonName}
      </button>


      {/* Social Media Icons using font-awesome css icons */}
      <div className="social-icons">
        <a
          href={LinkinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href={GithupUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href={InstagramURl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
