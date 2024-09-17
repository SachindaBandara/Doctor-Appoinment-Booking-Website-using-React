import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Sachinda Bandara",
    image: assets.profile_pic,
    email: "sachinda@gmail.com",
    phone: "077 896 3214",
    address: {
      line1: "123/A, Rathmalawinna",
      line2: "Balangoda",
    },
    gender: "Male",
    dob: "2003-01-04",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr/>
<div>
  <p>Contact Information</p>
  <div>
    <p>Email Id :</p>
    <p>{userData.email}</p>
    <p>Phone</p>
    {isEdit ? (
        <input
          type="text"
          value={userData.phone}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      ) : (
        <p>{userData.phone}</p>
      )}
      <p>Address :</p>
      {
        isEdit
        ? <p>
          <input type="text" />
          <br/>
          <input type="text" />
        </p>
        : <p>
          {userData.address.line1}
          <br/>
          {userData.address.line2}
        </p>
      }
  </div>
</div>

    </div>
  );
};

export default MyProfile;
