import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field()
    userId?: string;

    @Field()
    username?: string;

    @Field()
    email?: string;

    @Field()
    password?: string;
}

@InputType({ description: "New user data" })
export class AddUserInput {
    @Field(() => String)
    password?: string;

    @Field(() => String)
    email?: string;

    @Field(() => String)
    username?: string;
}
