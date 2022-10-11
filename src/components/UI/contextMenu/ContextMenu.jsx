import React from 'react';
import "./ContextMenu.scss"
import UserService from "../../../API/UserService";

const ContextMenu = ({visible, setVisible, direction, theme = "light", classes, user, fetchUsers, openEditForm}) => {

    const isOpen = visible ? `contextMenu_${theme}_show` : "";
    const cssClasses = [classes, "contextMenu", `contextMenu_${direction}`, `contextMenu_${theme}`, isOpen].join(" ").trim();

    const removeUser = async (user) => {
        await UserService.removeUser(user);
        fetchUsers();
        setVisible(false);
    }

    return (
        <div className={cssClasses}>
            <button
                className="contextMenu__edit"
                onClick={openEditForm}
            >Edit
            </button>
            <div className="contextMenu__line"></div>
            <button
                className="contextMenu__delete"
                onClick={() => removeUser(user)}
            >Delete
            </button>
        </div>
    );
};

export default ContextMenu;