import React from "react";
import "./team.css"

const Team = () => {
  return (
    <>
    <div class="form-container">
        <form class="register-form">
          <input id="case-report" class="form-field" type="text" placeholder="Enter your report" name="firstName"/>
        <input id="desc-rption" class="form-field" type="text" placeholder="Description" name="description" />
          <input id="loc-tion" class="form-field" type="text" placeholder="Location" name="location" />
          <input id="da-te" class="form-field" type="text" placeholder="Date" name="date" />
       <input id="image"class="form-field" type="text" placeholder="Image Url" name="image" />
          <button class="form-field" type="submit">SUBMIT</button>
        </form>
      </div>
     </> 
  );
};

export default Team;
