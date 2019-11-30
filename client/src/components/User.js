import React from "react";

export const User = ({ user }) => {
  const { firstName, age, company } = user;
  return (
    <div>
      <h3>
        {firstName} | {age}
      </h3>
      <p>{company.name}</p>
    </div>
  );
};
