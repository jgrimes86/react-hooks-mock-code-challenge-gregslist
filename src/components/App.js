import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]);
  const [searchedListings, setSearchedListings] = useState([])
  const [locationSort, setLocationSort] = useState(false)
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
      if (listing.description.toLowerCase().includes(formData.toLowerCase())) {
        return true
      }
    }))
  }

  function sortByLocation() {
    setLocationSort(!locationSort)
  }

  function addNewListing(formData) {
    let newID = Math.random() * 1000
    let newListing = {...formData, "id": newID}
    setAllListings([...allListings, newListing])
  }
  
  const listingsShownAfterSearch = (searchedListings.length > 0) ? searchedListings : allListings;

  const displayedListings = locationSort ?
    [ ...listingsShownAfterSearch.sort((l1, l2) => {
      if (l1.location < l2.location) {
        return -1
      } else {return 1}
    })] :
    [...listingsShownAfterSearch.sort((l1, l2) => {
      if (l1.id < l2.id) {
        return -1
      } else {return 1}
    })];

  return (
    <div className="app">
      <Header searchListings={searchListings} sortByLocation={sortByLocation} addNewListing={addNewListing} />
      <ListingsContainer displayedListings={displayedListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
