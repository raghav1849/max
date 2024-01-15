import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/resolvers/index.ts";

const main = async () => {
    const app: Express = express();

    const apolloServer = new ApolloServer({
        schema,
        formatError(error): any {
            return error.message;
        },
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app } as any);

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
        `Server started listening on ${PORT}`;
    });
};

export { main };
