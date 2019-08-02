import React, { useState, useEffect } from "react";
// import ProfileForm from './ProfileForm'
import axios from "axios";
import styled from 'styled-components';
import DefaultProfilePic from '../Assets/Trips/5Ste6Y8A.png'

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 70%;
`;

const ImgContainer = styled.div`
  width: 50%;
  overflow: hidden;
  
  img {
    max-width: 100%;
    height: auto;
    margin: -21.875% 0;
  }
`;

const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 10px;
`;

const TNAContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Profile(props) {
    const [ profile, setProfile ] = useState([]);
    let id = props.id;
    if(!id && props.match && props.match.params) id = props.match.params.id;

    useEffect(() => {

        axios.get(`https://guidr-backend-justin-chen.herokuapp.com/user/${id}`)
        .then(res => {
            console.log(res.data)
            setProfile(res.data)
        })
        .catch(err => {
            console.log("API unavailable:", err)
        })
    }, [id]);

    return(
        <ProfileContainer className="profile">
            <ImgContainer>
              {profile.image_url ? <img src={profile.image_url} alt="user" /> : <img src={DefaultProfilePic} alt="user" />}
            </ImgContainer>
            <InfoContainer className="userProfile">
                <div className="profileImg">
                </div>
                <h1>{profile.name}</h1>
                <TNAContainer>
                  <span>{profile.title}</span>
                  <span>Age: {profile.age}</span>
                </TNAContainer>
                <p>{profile.length_as_guide} Experience</p>
                <br />
                <p>{profile.tagline}</p>
            </InfoContainer>
        </ProfileContainer>
    );

}

export default Profile;
