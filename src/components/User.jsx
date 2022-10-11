import React, {useState} from 'react';
import UserEdit from "./UserEdit";
import UserInfo from "./UserInfo";

const User = ({user, fetchUsers, pagination, checkBoxHeader}) => {

    const [visibleUserEdit, setVisibleUserEdit] = useState(false);
    const [visibleContextMenu, setVisibleContextMenu] = useState(false);

    const openEditForm = () => {
        setVisibleUserEdit((!visibleUserEdit));
        setVisibleContextMenu(!visibleContextMenu);
    }

    return (
        <div className="user">
            <UserInfo
                user={user}
                openEditForm={openEditForm}
                visibleContextMenu={visibleContextMenu}
                setVisibleContextMenu={setVisibleContextMenu}
                checkBoxHeader={checkBoxHeader}
                fetchUsers={fetchUsers}
            />
            <UserEdit
                user={user}
                fetchUsers={fetchUsers}
                pagination={pagination}
                visible={visibleUserEdit}
                setVisible={setVisibleUserEdit}
            />
        </div>
    );
};

export default User;