import UserModel from "../models/user.model";
import { User } from "../graphql/schemas/user.schema";

export class UserService {
    public username: string;
    public password: string;
    public email: string;
    public userId?: string;

    constructor(user: User) {
        this.username = user.username || "";
        this.password = user.password || "";
        this.email = user.email || "";
        this.userId = user.userId || "";
    }

    static async getUser(): Promise<UserService[]> {
        try {
            const users = await UserModel.find().select("-password");
            return users.map((user) => new UserService(user.toObject()));
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    static async createUser(user: User): Promise<String> {
        try {
            const newUser = new UserModel(user);
            await newUser.save();
            return "User created successfully!";
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
