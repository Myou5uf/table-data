import FilterButton from "./UI/filterButton/FilterButton";
import InputSearch from "./UI/inputSearch/InputSearch";
import Button from "./UI/button/Button";

const TableHeader = ({filterBtn, orderColumnsBtn, openModal, searchQuery, setSearchQuery}) => {

    return (
        <div className="table__header">
            <div className="table__header-body">
                <div className="table__header-left">
                    <FilterButton
                        style={{marginRight: "20px", backgroundColor: filterBtn.visibleFilter ? "#F4F2FF" : "#fff"}}
                        onClick={filterBtn.onClick}
                    >Filter
                    </FilterButton>
                    <InputSearch
                        value={searchQuery.query}
                        onChange={(e) => setSearchQuery({...searchQuery, query: e.target.value})}
                        className="table__inputSearch"
                        placeholder="Search Users by Name, Email or Date"
                    />
                </div>
                <div className="table__header-right">
                    <Button
                        style={{
                            marginRight: "10px",
                            backgroundColor: orderColumnsBtn.visibleOrderColumns ? "#F4F2FF" : "#fff"
                        }}
                        onClick={orderColumnsBtn.onClick}
                    >Order columns
                    </Button>
                    <Button type="button" onClick={openModal}>+</Button>
                </div>
            </div>
        </div>
    );
};

export default TableHeader;