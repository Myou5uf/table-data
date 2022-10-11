import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import Table from "./components/UI/table/Table";
import {useUsers} from "./hooks/useUsers";
import UserService from "./API/UserService";
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./helpers/pages";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filterParams, setFilterParams] = useState({
        userStatus: "",
        paymentStatus: "",
        query: ""
    })
    const [totalPages, setTotalPages] = useState(0);    // общее количество страниц
    const [limit, , setLimit] = useState(10);             // кол-во users на 1 странице
    const [currentPage, setCurrentPage] = useState(1);  // текущая страница

    const [fetchUsers, isUsersLoading, userError] = useFetching(async (limit = 10, currentPage = 1) => {
        const response = await UserService.getAll(limit, currentPage);
        setUsers(response.data);
        const tCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(tCount, limit));
        setCurrentPage(currentPage);
    })

    useEffect(() => {
        fetchUsers(limit, currentPage);
    }, [])

    const filteredAndSearchedUsers = useUsers(users, filterParams);

    if (userError) {
        return (
            <div className="error__app">
                <h1>Произошла ошибка!</h1>
                <h2>{userError}</h2>
            </div>
        )
    }

    return (
        <div className="App">
            <Table
                users={filteredAndSearchedUsers}
                setUsers={setUsers}
                fetchUsers={fetchUsers}
                title="Table heading"
                filterParams={filterParams}
                setFilterParams={setFilterParams}
                isUsersLoading={isUsersLoading}
                pagination={{
                    limit: limit,
                    totalPages: totalPages,
                    currentPage: currentPage,
                    setCurrentPage: setCurrentPage,
                    fetchUsers: fetchUsers,
                }}
            />
        </div>
    );
};

export default App;