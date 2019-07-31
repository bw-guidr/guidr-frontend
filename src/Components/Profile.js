import React, { useState, useEffect } from "react";
// import ProfileForm from './ProfileForm'
import axios from "axios";

function Profile(props) {
  const [profile, setProfile] = useState([]);
  let id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://guidr-backend-justin-chen.herokuapp.com/user/${id}`)
      .then(res => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch(err => {
        console.log("API unavailable:", err);
      });
  }, [props.match.params.id]);

  return (
    <div className="profile">
      <div className="userProfile">
        <div className="profileImg">
          <img src={profile.image_url} alt="user" />
        </div>
        <h1>{profile.name}</h1>
        {profile.image_url ? <img src={profile.image_url} alt="user" /> : null}
        <p>Title: {profile.title}</p>
        <p>Tagline: {profile.tagline}</p>
        <p>Age: {profile.age}</p>
        <p>{profile.length_as_guide} Experience</p>
        <p>{profile.tagline}</p>
      </div>
    </div>
  );
}

export default Profile;
