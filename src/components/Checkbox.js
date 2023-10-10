import React, {useState} from "react";

function Checkbox({sortByLocation}) {
    const [radioChecked, setRadioChecked] = useState(false)

    function handleChange() {
        sortByLocation(radioChecked)
        setRadioChecked(!radioChecked)
    }

    return (
        <form className="" >
            <label htmlFor="location" >
                <input
                    type="checkbox"
                    id="location"
                    checked={radioChecked ? true : false}
                    onChange={handleChange}
                />
            Sort by Location </label>
        </form>
      );
}

export default Checkbox;