import React, { useState } from "react";

function ProfileForm(props) {
  console.log(props);

  const [userProfile, setUserProfile] = useState({
    title: "",
    tagline: "",
    age: "",
    guideXP: ""
  });

  function handleChange(event) {
    const updatedUserProfile = {
      ...userProfile,
      [event.target.name]: event.target.value
    };

    setUserProfile(updatedUserProfile);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>User Profile</legend>
        <div className="inputField">
          <label for="title">
            Title
            <div>
              <input
                type="text"
                name="title"
                placeholder="Your job title here"
                value={userProfile.title}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="inputField-tagline">
          <label for="tagline">
            Tagline
            <div>
              <input
                type="text"
                name="tagline"
                placeholder="Add a short description of the type of guide you specialize in"
                value={userProfile.tagline}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="inputField">
          <label for="age">
            Age
            <div>
              <input
                type="text"
                name="age"
                placeholder="Enter age here"
                value={userProfile.age}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="inputField">
          <label for="guideXP">
            Years of Guide experience
            <div>
              <input
                type="text"
                name="guideXP"
                placeholder="Enter guide experience here e.g. 4 years"
                value={userProfile.guideXP}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default ProfileForm;
