export const getCurrentDate = () => {
    const months = {
        "0": "JAN",
        "1": "FEB",
        "2": "MAR",
        '3': 'APR',
        '4': 'MAY',
        '5': 'JUN',
        '6': 'JUL',
        '7': 'AUG',
        '8': 'SEP',
        '9': 'OCT',
        '10': 'NOV',
        '11': 'DEC',
    }

    const date = new Date();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = date.getDate();

    return `${day}/${months[monthIndex]}/${year}`;
}

export const getPaymentDate = (paymentStatus, paymentDate) => {
    switch (paymentStatus) {
        case "Paid":
            return `Paid on ${paymentDate.toUpperCase()}`;
        case "Unpaid":
            return `Dues on ${paymentDate.toUpperCase()}`;
        case "Overdue":
            return `Dued on ${paymentDate.toUpperCase()}`;
        default:
            return "not information"
    }
}