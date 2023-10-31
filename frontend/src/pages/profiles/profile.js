import React from "react";
import styles from "../../styles/Profile.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";


const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, image, owner } = profile;

 
  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <h3 className="m-2">{profile?.owner} <Avatar src={profile_image} /></h3>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      
    </div>
  );
};

export default Profile;