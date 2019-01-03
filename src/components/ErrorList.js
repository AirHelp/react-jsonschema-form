import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="card bg-danger text-white errors mb-4">
      <div className="card-header">
        <h5 className="card-title m-0">Errors</h5>
      </div>
      <ul className="list-group ">
        {errors.map((error, i) => {
          return (
            <li key={i} className="list-group-item bg-white text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
