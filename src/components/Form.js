import React, {useState} from "react";

const initialForm = {
    description: "",
    image: "",
    location: "",
}

function Form({addNewListing}) {
    const [formData, setFormData] = useState(initialForm)

    function handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        addNewListing(formData)
        setFormData(initialForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Add New Listing</h3>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Add Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="image" 
                    placeholder="Add Image" 
                    value={formData.image}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Add Location"
                    value={formData.location}
                    onChange={handleChange}
                />
                <input type="submit" 
                    name="submit"
                    value="Add Listing"/>
            </form>
        </div>
    )
}

export default Form;