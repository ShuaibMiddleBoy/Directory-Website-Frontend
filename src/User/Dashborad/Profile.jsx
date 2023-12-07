import React from "react";
import UserMenu from "../../components/userMenu/UserMenu";
import style from './profile.module.css';

const Profile = () => {
  return (
    <>
      <div className={style.mainContainer}>
       
          <div className={style.sidebar}>
            <UserMenu />
       </div>
          <div className={style.mainContent}>
            <h1>Your Profile</h1>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              <tr>
                <td>Shuaib Khan</td>
                <td>Email</td>
                <td>+923481921010</td>
              </tr>
            </table>
          </div>
        </div>
    </>
  );
};

export default Profile;
