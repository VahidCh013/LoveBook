import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { BaseUri } from "../../../../services/baseUri";
import { CredentialService } from "../../../../services/credentialServices";
import LInput from "../../../../shared/components/LInput";
import { Constants } from "../../../../shared/constants/constant";
interface ICreateServiceTypeProps {}
const UserProfile: React.FunctionComponent<ICreateServiceTypeProps> = () => {
  const [name, setName] = useState<string>();
  const [posts, setPosts] = useState("");

  const pushData =async () =>{
    let date = await axios.get(Constants.Email)
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
  }

  useEffect(() => {
    pushData();
  });
 
 
 
 
 
 
 
 
 
 
 
 
  const handleNameChange = (value: string) => {};
//   useEffect =async=> function () {
//        const handleNameChange = (value: string) => {
//        setName(value);
//       const email = Cookies.get(Constants.Email);
//       await CredentialService.getUserProfile(email)
//           .then((r) => console.log(r))
//           .catch((e) => console.log(e));
//   });
  return (
    <>
      <div className="container-fluid">
        <h3 className="mt-4 font-weight-bold" style={{ fontWeight: "bold" }}>
          User profile
        </h3>
        <div className="border mt-4 py-5">
          <div className="row px-4">
            <div className="col-md-6">
              <LInput
                handleChange={(e) => handleNameChange(e.target.value)}
                caption="email:"
                defaultValue={name}
              ></LInput>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
