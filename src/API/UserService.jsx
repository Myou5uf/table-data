import axios from "axios";

export default class UserService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get(" http://localhost:5000/users", {
            params: {
                _limit: limit,
                _page: page
            }
        });

        return response;
    }

    static async postUser(newUser) {
        return await axios.post("http://localhost:5000/users", {
            ...newUser
        });
    }

    static async putUser(editedUser) {
        return await axios.put(`http://localhost:5000/users/${editedUser.id}`, editedUser);
    }

    static async removeUser(removedUser) {
        console.log("Идет удаление...");
        return await axios.delete(`http://localhost:5000/users/${removedUser.id}`);
    }
}