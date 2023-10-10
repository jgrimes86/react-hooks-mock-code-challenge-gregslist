import React from "react";
import Search from "./Search";
import Checkbox from "./Checkbox";
import Form from "./Form";

function Header({searchListings, sortByLocation, addNewListing}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListings={searchListings} />
      <Checkbox sortByLocation={sortByLocation} />
      <Form addNewListing={addNewListing} />
    </header>
  );
}

export default Header;
