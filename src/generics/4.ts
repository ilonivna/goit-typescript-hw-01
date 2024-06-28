type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(data: Partial<User>): User {
    const defaultUser: User = {
        name: "",
        email: "",
        password: "",
        surname: "",
    }

    return { ...defaultUser, ...data };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
