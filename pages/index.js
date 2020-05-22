import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "../components/Launches";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hi we are here we are live</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
};

export default Index;
