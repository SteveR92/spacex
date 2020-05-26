import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Past_Launch from "../components/past_launches/Past_Launch.js";
import withApollo, { clientFn } from "../libs/withApollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
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

// export const getServerSideProps = async () => {
//   const apolloClient = clientFn();
//   // apolloClient.* https://www.apollographql.com/docs/react/api/apollo-client/#apolloclient-functions
//   // You do not use hooks like useQuery, useMutation in here
//   return {
//     props: {
//       apollo: apolloClient,
//       apolloState: {
//         data: apolloClient.cache.extract(),
//       },
//     },
//   };
// };

// export default withApollo(Past_Launches);
