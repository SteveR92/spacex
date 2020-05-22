import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

export const clientFn = ({ initialState } = {}) =>
  new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    uri: "http://localhost:5000/graphql",
  });

export default withApollo(clientFn, {
  render: ({ Page, props }) => {
    return (
      <ApolloProvider client={props.uri}>
        <Page {...props.uri} />
      </ApolloProvider>
    );
  },
});
