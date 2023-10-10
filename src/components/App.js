import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]);
  const [searchedListings, setSearchedListings] = useState([])
  const listingDatabase = "http://localhost:6001/listings";

  useEffect(dataFetcher, [])

  function dataFetcher() {
    fetch(listingDatabase)
    .then(response => response.json())
    .then(data => setAllListings(data))
  }

  function deleteListing(listing) {
    fetch(listingDatabase+"/"+listing.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => dataFetcher())
  }

  function searchListings(formData) {
    setSearchedListings(allListings.filter((listing) => {
      if (listing.description.includes(formData)) {
        return true
      }
    }))
  }

  const displayedListings = (searchedListings.length > 0) ? searchedListings : allListings;

  return (
    <div className="app">
      <Header searchListings={searchListings} />
      <ListingsContainer displayedListings={displayedListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
