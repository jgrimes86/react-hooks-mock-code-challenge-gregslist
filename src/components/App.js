import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]);
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


  return (
    <div className="app">
      <Header />
      <ListingsContainer allListings={allListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
