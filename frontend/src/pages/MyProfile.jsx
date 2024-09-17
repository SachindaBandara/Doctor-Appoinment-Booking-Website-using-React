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
    {
    isEdit ? (
        <input
          type="text"
          value={userData.phone}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
      ) : (
        <p>{userData.phone}</p>
      )
      }
      <p>Address :</p>
      {
        isEdit
        ? <p>
          <input onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line1: e.target.value }}))} value={userData.address.line1} type="text" />
          <br/>
          <input  onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, line2: e.target.value }}))} value={userData.address.line2} type="text" />
        </p>
        : <p>
          {userData.address.line1}
          <br/>
          {userData.address.line2}
        </p>
      }
  </div>
</div>
<div>
  <p>Basic Information</p>
  <div>
    <p>Gender : </p>
    {isEdit ? 
    <select onChange={(e) => setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    : (
        <p>{userData.gender}</p>
      )}
  </div>
</div>
    </div>
  );
};

export default MyProfile;
