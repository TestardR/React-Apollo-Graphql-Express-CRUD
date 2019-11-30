import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { User } from "./User";

export const UsersList = () => {
  const { error, loading, data } = useQuery(gql`
    {
      users {
        id
        firstName
        age
        company {
          name
        }
      }
    }
  `);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {data.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
