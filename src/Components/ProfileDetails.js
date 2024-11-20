import React from 'react';
import { useParams } from 'react-router-dom';
import"./ProfileDetails.css";

const ProfileDetails = ({ profiles }) => {
    const { id } = useParams();
    const profile = profiles.find((profile) => profile.id === parseInt(id));

    if (!profile) {
        return <h2 style={{ color: 'red', textAlign: 'center' }}>Profile Not Found</h2>;
    }

    return (
        <div className='Profile-Detail-card' style={{borderRadius:"40px"}}>
            <img
                src={profile.ImageUrl}
                alt={profile.Name}
                style={{ width: '150px', 
                         height: '150px', 
                         borderRadius: '50%', 
                         margin: '20px 0' }}
            />
            <h2 style={{ color: 'yellow' }}>{profile.Name}</h2>
            <h4 style={{ color: "rgb(0, 191, 255)" }}>{profile.Designation}</h4>
            <p style={{ maxWidth: '600px', 
                        color: "white", margin: '0 auto', 
                        fontSize: '16px', lineHeight: '1.6', 
                        textAlign: "justify", 
                        textIndent: "40px", 
                        fontWeight: "900" }}>
                {profile.DetailDescriptions}
            </p>
        </div>
    );
};

export default ProfileDetails;
