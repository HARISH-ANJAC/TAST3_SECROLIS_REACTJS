import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './Components/ProfileCard';
import ProfileDetails from './Components/ProfileDetails';
import"./App.css";

const profiles = [
  {
    id: 1,
    Name: "HARISH PRABHU",
    Designation: "Mobile App Developer",
    Description: "I am Developing User-Friendly Mobile Applications using React Native and Flutter Frameworks.",
    DetailDescriptions:
      "To contribute effectively to a company’s goals by leveraging my passion for software development and my positive attitude toward continuous learning and improvement. I am eager to face new challenges and apply my skills in mobile app development to drive innovation and success. I seek an opportunity to gain hands-on experience, utilize my knowledge, and grow alongside an organization committed to excellence.",
    ImageUrl: "/assets/MyProfile.jpg",
    LinkinUrl: "https://www.linkedin.com/in/harish-prabhu-bb33bb233",
    GitHubUrl: "https://github.com/Harishprabhu3009",
    InstagramUrl: "https://github.com/HARISH-ANJAC",
  },
];

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ margin: '40px' }}>
          <h1 style={{ color: 'aqua', }}>My Custom Profile Card</h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '50px' }}>
                {profiles.map((data) => (
                  <ProfileCard
                    key={data.id}
                    ProfileId={data.id}
                    ProfileName={data.Name}
                    ProfileButtonName="About More"
                    ProfileImg={data.ImageUrl}
                    ProfileDesignation={data.Designation}
                    ProfileDescriptions={data.Description}
                    LinkinUrl={data.LinkinUrl}
                    GithupUrl={data.GitHubUrl}
                    InstagramURl={data.InstagramUrl}
                  />
                ))}
              </div>
            }
          />
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
