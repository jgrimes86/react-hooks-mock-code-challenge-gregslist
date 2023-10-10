import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({displayedListings, deleteListing}) {

  const listings = displayedListings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing} />
  })

  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
