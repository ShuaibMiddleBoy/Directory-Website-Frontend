import React from "react";
import UserMenu from "../../components/userMenu/UserMenu";
import style from './profile.module.css';

const Profile = () => {
  return (
    <>
      <div className={style.mainContainer}>
       
          <div className={style.sidebar}>
            <UserMenu />
       
          <div className={style.mainContent}></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
