import React, {useState} from 'react';
import Checkbox from "./UI/checkbox/Checkbox";
import Status from "./UI/status/Status";
import MenuButton from "./UI/menuButton/MenuButton";
import ContextMenu from "./UI/contextMenu/ContextMenu";
import {getPaymentDate} from "../helpers/date";

const UserInfo = ({user, fetchUsers, openEditForm, visibleContextMenu, setVisibleContextMenu, checkBoxHeader, visibleColumn}) => {

    const [checkBox, setCheckBox] = useState(false);

    const checkCheckBox = (checkHeader) => {
        if (checkHeader){
            return true;
        }
        return  checkBox;
    }

    const checkVisible = (className, visibility) => {
        if (!visibility){
            return `${className} column_hidden`;
        }
        return className;
    }

    return (
        <div className="user__info">
            <div className="column__check">
                <Checkbox
                    name="check-elem"
                    id={user.id}
                    checked={checkCheckBox(checkBoxHeader)}
                    onChange={() =>  setCheckBox(!checkBox)}
                />
            </div>
            <div className={checkVisible("column__name", visibleColumn.name)}>
                <div className="user__name name">{user.name}</div>
                <small className="user__email email mt-5">{user.email}</small>
            </div>
            <div className={checkVisible("column__userStatus", visibleColumn.userStatus)}>
                <Status status={user.userStatus ? "Active" : "Inactive"}/>
                <div className="user__lastLogin lastLogin mt-5">Last login: {user.lastLogin.toUpperCase()}</div>
            </div>
            <div className={checkVisible("column__paymentStatus", visibleColumn.paymentStatus)}>
                <Status status={user.paymentStatus}/>
                <div className="user__paymentStatusText paymentStatus mt-5">{getPaymentDate(user.paymentStatus, user.paymentDate)}</div>
            </div>
            <div className={checkVisible("column__amount", visibleColumn.amount)}>
                <div className="user__amount amount">${user.amount}</div>
                <small className="user__currency currency mt-5">{user.currency}</small>
            </div>
            <div className="column__control">
                <MenuButton
                    onClick={() => setVisibleContextMenu(!visibleContextMenu)}
                />
                <ContextMenu
                    visible={visibleContextMenu}
                    setVisible={setVisibleContextMenu}
                    direction="column"
                    theme="light"
                    classes="user__contextMenu"
                    user={user}
                    openEditForm={openEditForm}
                    fetchUsers={fetchUsers}
                />
            </div>
        </div>
    );
};

export default UserInfo;