import React, { useState, useEffect } from 'react'
// import ProfileForm from './ProfileForm'
import Header from './Header'
import axios from 'axios';

function Profile() {

    const [ profile, setProfile ] = useState([]);

    useEffect(() => {

        axios.get(`https://guidr-backend-justin-chen.herokuapp.com/user/1`)
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
                <h1>{profile.name}</h1>
                <p>Title: {profile.title}</p>
                <p>Tagline: {profile.tagline}</p>
                <p>Age: {profile.age}</p>
                <p>Years of Guide Experience:{profile.length_as_guide}</p>
            </div>

        </div>
    )
}

export default Profile;