import {useMemo} from "react";

export const useFilteredUsers = (users, filterParams) => {
    const filteredUsers = useMemo(() => {
        if (filterParams.userStatus !== "" || filterParams.paymentStatus) {
            if (filterParams.paymentStatus === "All" && filterParams.userStatus !== "") {
                return [...users].filter(user => user.userStatus === filterParams.userStatus)
            } else if (filterParams.paymentStatus === "All") {
                return users;
            } else if (filterParams.paymentStatus && filterParams.userStatus !== "") {
                return [...users].filter(user =>
                    (user.paymentStatus === filterParams.paymentStatus && user.userStatus === filterParams.userStatus))
            }
            return [...users].filter(user =>
                (user.paymentStatus === filterParams.paymentStatus || user.userStatus === filterParams.userStatus))
        }
        return users;
    }, [filterParams.paymentStatus, filterParams.userStatus, users])

    return filteredUsers;
}

export const useUsers = (users, filterParams) => {
    const filteredUsers = useFilteredUsers(users, filterParams);

    const filteredAndSearchedUsers = useMemo(() => {
        const query = filterParams.query.toLowerCase()
        return filteredUsers.filter(user =>
            (user.name.toLowerCase().includes(query)) ||
            (user.email.toLowerCase().includes(query)) ||
            (user.lastLogin.toLowerCase().includes(query)))
    }, [filterParams.query, filteredUsers])

    return filteredAndSearchedUsers;
}