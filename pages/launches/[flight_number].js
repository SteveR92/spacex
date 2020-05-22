import gql from "graphql-tag";
import { Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
export default ({ flightNumber }) => {
  let flight_number = parseInt(flightNumber);

  return (
    <ApolloProvider client={client}>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);

          const {
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            details,
            rocket: { rocket_id, rocket_name, rocket_type },
          } = data.launch;
          return (
            <div>
              Flight Number: {flight_number}
              <br />
              Mission Name: {mission_name}
            </div>
          );
        }}
      </Query>
      <div>
        <h2>Flight</h2>
      </div>
    </ApolloProvider>
  );
};

export const getServerSideProps = async (req) => {
  const res = req.params.flight_number;
  return { props: { flightNumber: res } };
};
