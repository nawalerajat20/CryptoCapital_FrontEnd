import React, { useState } from "react";
import {UserInput} from '../API/CryptocapitalAPI';

const Reportabug = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [bug, setBug] = useState("");
  const [bugDetails, setBugDetails] = useState("");
  const [deviceUsed, setDeviceUsed] = useState("");
  const [browser, setBrowser] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");

  const postUserInput = async (e) => {
    e.preventDefault();
    const userObject = {
      name,
      email,
      bug,
      bugDetails,
      deviceUsed,
      browser,
      operatingSystem,
    };
    
    const response = await UserInput(userObject);
    if (response.status === 201) {
      console.log(response);
    } else {
      console.log("failed ");
    }
  };

  return (
    <div>
      <div className="report">
        <h1>Report &nbsp;&nbsp;&nbsp;a &nbsp;&nbsp;&nbsp;Bug</h1>
      </div>
      <div className="Form">
        <div className="row1">
          <div className="component1">
            <span>Full Name :</span>
            <br />
            <input onChange={e=>{setname(e.target.value)}} type="text" placeholder="Your  Name" />
          </div>
        </div>
        <div>
          <span>Email :</span>
          <br />
          <input onChange={e=>{setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <span>What was the Bug Found?</span>
          <br />
          <input onChange={e=>{setBug(e.target.value)}} type="text" placeholder="Enter your Message here" />
        </div>
        <div>
          <span>Details :</span>
          <br />
          <input onChange={e=>{setBugDetails(e.target.value)}} className="details" type="text" />
        </div>
        <div>
          <span>Device Used :</span>
          <br />
          <input onChange={e=>{setDeviceUsed(e.target.value)}} type="text" />
        </div>
        <div>
          <span>Browser :</span>
          <input onChange={e=>{setBrowser(e.target.value)}} type="text" />
        </div>
        <div>
          <span>Operating System :</span>
          <br />
          <input onChange={e=>{setOperatingSystem(e.target.value)}} type="text" />
        </div>
        <div className="btn">
          <button onClick={postUserInput} className="button1">Send</button>
          <button className="button2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Reportabug;