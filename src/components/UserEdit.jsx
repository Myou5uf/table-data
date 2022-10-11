import React, {useState} from 'react';
import Edit from "./UI/icons/Edit";
import Input from "./UI/input/Input";
import Radio from "./UI/radio/Radio";
import Select from "./UI/select/Select";
import Button from "./UI/button/Button";
import Check from "./UI/icons/Check";
import UserService from "../API/UserService";

const UserEdit = ({user, fetchUsers, pagination, visible, setVisible}) => {

    const [editedUser, setEditedUser] = useState({
        ...user
    })

    const [error, setError] = useState("");

    const editUser = (e) => {
        e.preventDefault();

        if (editedUser.name !== "" && editedUser.userStatus !== "" && editedUser.paymentStatus !== "") {
            UserService.putUser(editedUser)
                .then(() => {
                    fetchUsers(pagination.limit, pagination.currentPage);
                    setVisible(false);
                })
                .catch(error => {
                    setError(error.message);
                });

        } else {
            setError("Заполните все поля");
        }
    }

    const isOpen = visible ? "user__edit_active" : "hidden";
    const classes = ["user__edit", isOpen].join(" ").trim();

    return (
        <div className={classes}>
            <form action="#" className="user__editForm column">
                <div className="user__icon column__check">
                    <Edit/>
                </div>
                <div className="user__name column__name">
                    <Input
                        type="text"
                        name="user-name"
                        className="user__input"
                        value={editedUser.name}
                        onChange={e => setEditedUser({...editedUser, name: e.target.value})}
                        required
                    />
                </div>
                <div className="user__status column__userStatus dFlexStart">
                    <Radio
                        className="user__radio_active"
                        name={`user-${user.id}`}
                        id={`user-active-${user.id}`}
                        checked={editedUser.userStatus === true}
                        value="Active"
                        onChange={() => setEditedUser({...editedUser, userStatus: true})}
                    />
                    <Radio
                        className="user__radio_inactive"
                        id={`user-inactive-${user.id}`}
                        name={`user-${user.id}`}
                        checked={editedUser.userStatus === false}
                        value="Inactive"
                        onChange={() => setEditedUser({...editedUser, userStatus: false})}
                    />
                </div>
                <div className="user__paymentStatus column__paymentStatus">
                    <Select
                        className="user__select"
                        value={editedUser.paymentStatus}
                        onChange={paymentStatus => setEditedUser({...editedUser, paymentStatus: paymentStatus})}
                        defaultValue={{value: editedUser.paymentStatus, text: editedUser.paymentStatus}}
                        options={[ "Paid", "Unpaid", "Overdue"]}
                    />
                </div>
                <div className="column__amount"></div>
                <div className="user__btn column__control">
                    <Button
                        type="submit"
                        onClick={editUser}
                        style={{padding: "15px 8px", backgroundColor: "#6D5BD0"}}
                    >
                        <Check/>
                    </Button>
                </div>
            </form>
            <div className="error__user">
                {error}
            </div>
        </div>
    );
};

export default UserEdit;