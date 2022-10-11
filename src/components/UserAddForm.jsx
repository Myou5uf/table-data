import React, {useState} from 'react';
import InputLabel from "./UI/inputLabel/InputLabel";
import UserService from "../API/UserService";
import {getCurrentDate} from "../helpers/date";

const UserAddForm = ({fetchUsers, setVisible}) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        amount: ""
    });
    const [error, setError] = useState("");

    const addNewUser = (e) => {
        e.preventDefault();
        const currentDate = getCurrentDate();
        if (user.name !== "" && user.email !== "" && user.amount !== "") {
            const newUser = {
                ...user,
                id: Date.now(),
                userStatus: false,
                paymentStatus: "Unpaid",
                lastLogin: currentDate,
                paymentDate: currentDate,
                currency: "USD",
            };

            UserService.postUser(newUser)
                .then((response) => {
                    fetchUsers();
                    setUser({name: "", email: "", amount: ""});
                    setVisible(false);
                })
                .catch(error => {
                    setError(error.message);
                });

        } else {
            setError("Заполните все поля");
        }


    }

    return (
        <form action="#" className="form">
            <InputLabel
                type="text"
                name="user-name"
                className="modal__inputLabel"
                placeholder="Enter name"
                label="Name"
                value={user.name}
                onChange={e => setUser({...user, name: e.target.value})}
                required
            />
            <InputLabel
                type="email"
                name="user-email"
                className="modal__inputLabel"
                placeholder="Mail@mail.com"
                label="E-mail"
                value={user.email}
                onChange={e => setUser({...user, email: e.target.value})}
                required
            />
            <InputLabel
                type="text"
                name="user-amount"
                className="modal__inputLabel"
                placeholder="0 $"
                label="Amount"
                value={user.amount}
                onChange={e => setUser({...user, amount: e.target.value})}
                required
            />
            <button
                type="submit"
                className="modal__btn"
                onClick={addNewUser}
            >Add
            </button>
            <div className="error">
                {error}
            </div>
        </form>
    );
};

export default UserAddForm;