import classes from "./Checkbox.module.scss";

const Checkbox = ({name, id, checked, onChange}) => {

    return (
        <div className={classes.wrapper}>
            <input
                type="checkbox"
                name={name}
                id={id}
                className={classes.checkbox}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Checkbox;