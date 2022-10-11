import React from 'react';
import Checkbox from "./UI/checkbox/Checkbox";
import MenuButton from "./UI/menuButton/MenuButton";
import HeaderColumnItem from "./HeaderColumnItem";
import ContextMenu from "./UI/contextMenu/ContextMenu";

const HeaderColumns = ({checkHeader, setCheckHeader}) => {

    return (
        <div className="table__headerColumns column">
            <div className="column__check">
                <Checkbox
                    name="header-checkbox"
                    id="header-checkbox"
                    checked={checkHeader}
                    onChange={setCheckHeader}
                />
            </div>
            <HeaderColumnItem className="column__name dFlexStart" name="Name" src="/img/icons/ascword.svg"/>
            <HeaderColumnItem className="column__userStatus dFlexStart" name="User status" src="/img/icons/default.svg"/>
            <HeaderColumnItem className="column__paymentStatus dFlexStart" name="Payment status" src="/img/icons/default.svg"/>
            <HeaderColumnItem className="column__amount dFlexStart" name="Amount" src="/img/icons/default.svg"/>
            <div className="column__control dFlexStart">
                <MenuButton
                    style={{backgroundColor: "transparent", cursor: "pointer"}}
                    // onClick={contextMenuBtn}
                />
                <ContextMenu
                    // state={visibilityContextMenu}
                    direction="row"
                    theme="light"
                    classes="table__headerContextMenu"
                    // user={user}
                    // openEditForm={openEditForm}
                    // remove={remove}
                />
            </div>
        </div>
    );
};

export default HeaderColumns;
