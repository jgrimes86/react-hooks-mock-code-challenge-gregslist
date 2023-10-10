import React, {useState} from "react";

function Search({searchListings}) {
  const [formData, setFormData] = useState("")

  function handleChange(event) {
    setFormData(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchListings(formData)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formData}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
