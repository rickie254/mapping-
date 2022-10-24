import React from "react";
import "./dashboard.css"

const Redflags = () => {
  return(
    <>
<div className="redflags">
<h3>Red flags</h3>
</div>
</>
  );
}
const Interventions = () => {
  return(
<>
<div className="intervene">
<h3>Interventions</h3>
</div>
</>
  );
}
const Dashboard = () => {
  
  return (
   <div>
<h2>Your Records</h2>
      <Redflags />
      <Interventions />
    </div>         
  );
};

export default Dashboard;
