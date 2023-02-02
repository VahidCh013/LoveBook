import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { CredentialService } from "../../../../services/credentialServices";
import LButton from "../../../../shared/components/LButton";
import LInput from "../../../../shared/components/LInput";
import { Constants } from "../../../../shared/constants/constant";
import {
  IUserProfile,
  UserProfileDto,
} from "../../../../shared/models/IUserProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USERPROFILEVALIDATION } from "../../Validations/validation";
interface ICreateServiceTypeProps {}
const UserProfile: React.FunctionComponent<ICreateServiceTypeProps> = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile>();

  useEffect(() => {
    getUserProfile();
  }, []);

  const notify = () =>
    toast.success("User updated successfuly", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifyError = () =>
    toast.error("Ooops! Something went wrong", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleFirstNameChange = (value: string) => {
    let updatedUser = userProfile;
    if (updatedUser) {
      updatedUser.firstName = value;
      setUserProfile(updatedUser);
    }
  };
  const handleLastNameChange = (value: string) => {
    let updatedUser = userProfile;
    if (updatedUser) {
      updatedUser.lastName = value;
      setUserProfile(updatedUser);
    }
  };
  const handlePhonChange = (value: string) => {
    let updatedUser = userProfile;
    if (updatedUser) {
      updatedUser.phoneNumber = value;
      console.log(updatedUser);
      setUserProfile(updatedUser);
    }
  };
  const handleSubmit = async () => {
    console.log(userProfile);
    USERPROFILEVALIDATION.validate(userProfile)
      .then(() => {
        if (userProfile) {
          let updatedUser: UserProfileDto = {
            userId: userProfile?.id,
            firstName: userProfile?.firstName,
            lastName: userProfile?.lastName,
            phoneNumber: userProfile?.phoneNumber,
          };
          CredentialService.editUser(updatedUser)
            .then((response) => {
              notify();
            })
            .catch((e) => {
              notifyError();
            });
        }
      })
      .catch((e) => {
        console.log(e.errors);
      });
  };

  const getUserProfile = async () => {
    const email = Cookies.get(Constants.Email);
    await CredentialService.getUserProfile(email)
      .then((response) => {
        console.log(response.data);
        setUserProfile(response.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          User profile
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-1">
              <h6>User Name:</h6>
            </div>
            <div className="col-md-5 px-5">
              <h6>{userProfile?.userName}</h6>
            </div>
            <div className="col-md-1">
              <h6>Email:</h6>
            </div>
            <div className="col-md-5 px-5">
              <h6>{userProfile?.email}</h6>
            </div>
          </div>
          <div className="row mt-5 pt-1 px-4">
            <div className="col-md-6">
              <LInput
                handleChange={(e) => handleFirstNameChange(e.target.value)}
                caption="First Name:"
                value={userProfile?.firstName}
              ></LInput>
            </div>
            <div className="col-md-6">
              <LInput
                handleChange={(e) => handleLastNameChange(e.target.value)}
                caption="Last Name:"
                value={userProfile?.lastName}
              ></LInput>
            </div>
          </div>
          <div className="row mt-4 px-4">
            <div className="col md-6">
              <LInput
                handleChange={(e) => handlePhonChange(e.target.value)}
                caption="Phon Number:"
                value={userProfile?.phoneNumber}
              ></LInput>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="row">
            <div className="col-md-11 d-flex justify-content-end">
              <LButton
                label="Save"
                onClick={handleSubmit}
                color="inherit"
              ></LButton>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default UserProfile;
