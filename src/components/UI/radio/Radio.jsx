import classes from "./Radio.module.scss";

const Radio = ({className, id, name, checked, value, onChange}) => {

    return (
        <div className={className}>
            <input
                type="radio"
                name={name}
                id={id}
                className={classes.radio}
                checked={checked}
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id}>{value}</label>
        </div>
    );
};

export default Radio;