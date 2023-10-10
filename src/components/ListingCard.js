import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {
  const {description, image = "https://via.placeholder.com/300x300", location} = listing
  const [like, setLike] = useState(false)

  function handleLike() {
    setLike(!like)
  }

  function handleDelete() {
    deleteListing(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
