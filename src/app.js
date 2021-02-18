// const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
// const schema = require("./schema");

import express from "express";
import graphqlHTTP from "express-graphql";
import { resolvers } from "./resolvers";
import { schema } from "./schema";

const app = express();
const port = 3000;

const root = resolvers;

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});