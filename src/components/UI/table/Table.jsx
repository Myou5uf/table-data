import React, {useState} from 'react';
import "./Table.scss";
import TableHeader from "../../TableHeader";
import FilterParams from "../../FilterParams";
import OrderParams from "../../OrderParams";
import HeaderColumns from "../../HeaderColumns";
import User from "../../User";
import TableFooter from "../../TableFooter";
import Modal from "../modal/Modal";
import UserAddForm from "../../UserAddForm";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {InfinitySpin} from "react-loader-spinner";

const Table = ({users, fetchUsers, title, filterParams, setFilterParams, isUsersLoading, pagination}) => {

    const [visibleFilter, setVisibleFilter] = useState(false);
    const [visibleOrderColumns, setVisibleOrderColumns] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [checkHeader, setCheckHeader] = useState(false);
    const [visibleColumn, setVisibleColumn] = useState({
        name: true,
        userStatus: true,
        paymentStatus: true,
        amount: true
    });
    const visibleFilterParams = () => {
        setVisibleFilter(!visibleFilter)
        setFilterParams({...filterParams, paymentStatus: "", userStatus: ""})
    };

    return (
        <div className="table">
            <h1 className="table__title title">{title}</h1>
            <div className="table__content">
                <TableHeader
                    users={users}
                    filterBtn={{
                        visibleFilter: visibleFilter,
                        onClick: visibleFilterParams
                    }}
                    orderColumnsBtn={{
                        visibleOrderColumns: visibleOrderColumns,
                        onClick: () => setVisibleOrderColumns(!visibleOrderColumns)
                    }}
                    openModal={() => setVisibleModal(true)}
                    searchQuery={filterParams}
                    setSearchQuery={setFilterParams}
                />
                <FilterParams
                    visibleFilter={visibleFilter}
                    filterParams={filterParams}
                    setFilterParams={setFilterParams}
                />
                <OrderParams
                    visibleOrderColumns={visibleOrderColumns}
                    visibleColumn={visibleColumn}
                    setVisibleColumn={setVisibleColumn}
                />
                <HeaderColumns
                    checkHeader={checkHeader}
                    setCheckHeader={() => setCheckHeader(!checkHeader)}
                    visibleColumn={visibleColumn}
                />
                <div className="table__users">
                    {isUsersLoading
                        ? <div className="table__loader">
                            <InfinitySpin width='200' color="#6D5BD0"/>
                        </div>
                        : <TransitionGroup>
                            {users.map(user =>
                                <CSSTransition
                                    key={user.id}
                                    timeout={500}
                                    classNames="user"
                                >
                                    <User
                                        user={user}
                                        fetchUsers={fetchUsers}
                                        pagination={pagination}
                                        checkBoxHeader={checkHeader}
                                        visibleColumn={visibleColumn}
                                    />
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    }
                </div>
                <TableFooter users={users} pagination={pagination}/>
            </div>
            <Modal title="New user" visible={visibleModal} setVisible={setVisibleModal}>
                <UserAddForm fetchUsers={fetchUsers} setVisible={setVisibleModal}/>
            </Modal>
        </div>
    );
};

export default Table;