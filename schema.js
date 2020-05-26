const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

//Launch Type

const LaunchType = new GraphQLObjectType({
  name: "Launch",
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    tentative_max_precision: { type: GraphQLString },
    details: { type: GraphQLString },
    rocket: { type: RocketType },
    launch_site: { type: LaunchSite },
    links: { type: Links },
    payload: { type: PayloadType },
  }),
});

const RocketType = new GraphQLObjectType({
  name: "Rocket",
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_stage: { type: FirstStage },
    second_stage: { type: SecondStage },
  }),
});

const LaunchSite = new GraphQLObjectType({
  name: "launch_site",
  fields: () => ({
    site_name: { type: GraphQLString },
    site_name_long: { type: GraphQLString },
  }),
});

const Links = new GraphQLObjectType({
  name: "links",
  fields: () => ({
    flickr_images: { type: new GraphQLList(GraphQLString) },
  }),
});

const FirstStage = new GraphQLObjectType({
  name: "first_stage",
  fields: () => ({
    cores: { type: new GraphQLList(coresType) },
  }),
});

const coresType = new GraphQLObjectType({
  name: "cores",
  fields: () => ({
    flight: { type: GraphQLInt },
    block: { type: GraphQLInt },
    gridfins: { type: GraphQLBoolean },
    legs: { type: GraphQLBoolean },
    reused: { type: GraphQLBoolean },
    land_success: { type: GraphQLBoolean },
    landing_intent: { type: GraphQLBoolean },
    landing_type: { type: GraphQLString },
    landing_vehicle: { type: GraphQLBoolean },
  }),
});

const SecondStage = new GraphQLObjectType({
  name: "second_stage",
  fields: () => ({
    block: { type: GraphQLInt },
    payloads: { type: new GraphQLList(PayloadType) },
  }),
});

const PayloadType = new GraphQLObjectType({
  name: "payloads",
  fields: () => ({
    nationality: { type: GraphQLString },
    manufacturer: { type: GraphQLString },
    payload_type: { type: GraphQLString },
    payload_mass_kg: { type: GraphQLInt },
    customers: { type: new GraphQLList(GraphQLString) },
    orbit_params: { type: new GraphQLList(OrbitParamsType) },
  }),
});

const OrbitParamsType = new GraphQLObjectType({
  name: "orbit_params",
  fields: () => ({
    reference_system: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/launches")
          .then((result) => result.data);
      },
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
          .then((result) => result.data);
      },
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios
          .get("https://api.spacexdata.com/v3/rockets")
          .then((result) => result.data);
      },
    },
    rocket: {
      type: RocketType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
          .then((result) => result.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
