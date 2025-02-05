import React, { useState } from "react";

import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  LockIcon,
  InputContainer,
  Select,
} from "./MyAccount.styles";

export const MyProfile = () => {
  const [editable, setEditable] = useState(true);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <ProfileContainer>
      <ProfileHeader>
        <div className="text-left font-bold">My Profile</div>
        <ProfileImage>
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile"
          />
          <LockIcon />
        </ProfileImage>
      </ProfileHeader>
      <div className="grid grid-cols-2 gap-4">
        <Input inputId="fullname" text="Full Name" readOnly={editable} />
        <Input
          inputId="email"
          text="Email Address"
          type="email"
          readOnly={editable}
        />
        <Input
          inputId="dateofbirth"
          text="Date of Birth"
          readOnly={editable}
          type="date"
        />
        <InputContainer>
          <label>Gender</label>
          <Select disabled={editable}>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </InputContainer>
        <Input inputId="phonenumber" text="Phone Number" readOnly={editable} />
      </div>
      <Button
        btnText="Edit Profile"
        btnId="profile-button"
        btnClassName="secondary-btn max-w-[30%] flex justify-around ml-[15px] mt-5"
        handleClick={handleClick}
      />
    </ProfileContainer>
  );
};
