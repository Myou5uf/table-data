import "./Status.scss";

const Status = ({status}) => {

    const classes = ["status", status.toLowerCase()].join(" ").trim();

    return (
        <div className={classes}>
            <div className="status__circle"></div>
            <div className="status__text">{status}</div>
        </div>
    );
};

export default Status;