import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.name} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Name(s): {props.name}</h3>
    </div>
  );
}

export default EmployeeDetail;
