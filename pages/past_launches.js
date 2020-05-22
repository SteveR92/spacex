import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Past_Launch from "../components/past_launches/Past_Launch.js";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});
// import LaunchItem from "./LaunchItem";
// import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
    }
  }
`;

const Past_Launches = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>launches</h2>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data.launches.mission_name);
            return (
              <div>
                <h2>Test</h2>

                {data.launches.map((launch) => {
                  return (
                    <Past_Launch key={launch.flight_number} launch={launch} />
                  );
                })}
              </div>
            );
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
};
export default Past_Launches;
