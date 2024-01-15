import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { AddUserInput, User } from "../schemas/user.schema";
import { UserService } from "../../services/user.service";

@Resolver(User)
export class userResolver {
    @Query(() => [User])
    async users(): Promise<User[]> {
        return UserService.getUser();
    }

    @Mutation(() => String)
    async createUser(
        @Arg("data") { password, email, username }: AddUserInput
    ): Promise<String> {
        const user = new UserService({ password, email, username });
        const response = await UserService.createUser(user);
        return response;
    }
}
