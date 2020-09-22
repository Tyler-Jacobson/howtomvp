import React from "react";

export default function DisplayUser(props) {
  const { user, userImage } = props;
  const { email, username } = user;
  return (
    <div className="card-container">
        <section className="user-card">
        <img src={userImage} alt="Randomly Generated Profile Icon" />
        <div className="card-text">
            <p>Currently Logged In As: {username} </p>
            <p>Email: {email} </p>
        </div>
        </section>
    </div>
  );
}
