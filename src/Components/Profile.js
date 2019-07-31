import React, { useState, useEffect } from 'react'
// import ProfileForm from './ProfileForm'
import Header from './Header'
import axios from 'axios';

function Profile() {

    const [ profile, setProfile ] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {

        axios.get(`https://guidr-backend-justin-chen.herokuapp.com/user/${id}`)
        .then(res => {
            console.log(res.data)
            setProfile(res.data)
        })
        .catch(err => {
            console.log("API unavailable:", err)
        })
    }, []);

    return(
        <div className="profile">
            <Header />
            <div className="userProfile">
                <div className="profileImg">
                    <img src={profile.image_url} alt="user" />
                </div>
                <h1>{profile.name}</h1>
                <p>{profile.title}</p>
                <p>Age: {profile.age}</p>
                <p>{profile.length_as_guide} Experience</p>
                <p>{profile.tagline}</p>
            </div>

        </div>
    )
}

export default Profile;