import React from "react";
import Search from "./Search";
import Radio from "./Radio";

function Header({searchListings, sortByLocation}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListings={searchListings} />
      <Radio sortByLocation={sortByLocation} />
    </header>
  );
}

export default Header;
