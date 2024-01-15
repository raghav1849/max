import { buildSchemaSync } from "type-graphql";
import { userResolver } from "./user.resolver.ts";

const schema = buildSchemaSync({
    resolvers: [userResolver],
    validate: {
        forbidUnknownValues: false,
    },
});

export default schema;
