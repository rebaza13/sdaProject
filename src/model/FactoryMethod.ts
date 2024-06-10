import { User } from './Models';

export interface UserConstructor {
    new (userData: any): User;
}

export class UserFactory {
    private static userTypes: { [role: string]: UserConstructor } = {};

    static registerUserType(role: string, userConstructor: UserConstructor): void {
        UserFactory.userTypes[role] = userConstructor;
    }

    static createUser(userData: any): User {
        const userConstructor = UserFactory.userTypes[userData.role];
        if (!userConstructor) {
            throw new Error(`User type ${userData.role} is not registered`);
        }
        return new userConstructor(userData);
    }
}

// Registering the user types
import { Teacher } from './teacher';
import { Student } from './student';

UserFactory.registerUserType('Teacher', Teacher);
UserFactory.registerUserType('Student', Student);
