const express = require("express");
const expressGraphQL = require("express-graphql");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();

app.use(cors());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("I am listening");
});
