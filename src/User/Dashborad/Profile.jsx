import React from "react";
import UserMenu from "../../components/userMenu/UserMenu";

const Profile = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
