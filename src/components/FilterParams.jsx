import Select from "./UI/select/Select";
import Radio from "./UI/radio/Radio";

const FilterParams = ({visibleFilter, filterParams, setFilterParams}) => {

    const isOpen = visibleFilter ? "show" : "hidden";
    const classes = ["table__filterParams", isOpen].join(" ").trim();

    return (
        <div className={classes}>
            <Select
                value={filterParams.paymentStatus}
                onChange={paymentStatus => setFilterParams({...filterParams, paymentStatus: paymentStatus})}
                className="table__select"
                defaultValue={{value: "default", text: "Select Payment status"}}
                options={["All", "Paid", "Unpaid", "Overdue"]}
            />
            <div className="table__status">
                <span className="table__text">Select User status:</span>
                <div className="table__radios">
                    <Radio
                        className="table__radio_active table__radio_mr"
                        id="radio-active"
                        name="radio-filter"
                        checked={filterParams.userStatus === true}
                        value="Active"
                        onChange={() => setFilterParams({...filterParams, userStatus: true})}
                    />
                    <Radio
                        className="table__radio_inactive"
                        id="radio-inactive"
                        name="radio-filter"
                        checked={filterParams.userStatus === false}
                        value="Inactive"
                        onChange={() => setFilterParams({...filterParams, userStatus: false})}
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterParams;