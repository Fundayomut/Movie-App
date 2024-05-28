import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ search }) {
  const [filmName, setFilmName] = useState("");
  const [rating, setRating] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const filmSearch = () => {
    const filterSearch = search.filter((item) =>
        item.title.toLowerCase()=== filmName.toLowerCase() ||
        parseFloat(item.rating)=== parseFloat(rating)
    );
    setSearchResult(filterSearch);
};

  return (
    <div className="searchmaindiv">
      <div className="searchinputdiv">
        <input
          value={filmName}
          onChange={(e) => {setFilmName(e.target.value); filmSearch()}}
          className="searchinput"
          type="text"
          placeholder="Filmname suchen z.B(4 Kings 2)"
        />
        <input
          value={rating}
          onChange={(e) => {setRating(e.target.value); filmSearch()}}
          className="searchinput"
          type="number"
          placeholder="Suchbewertung z.B (3.7)"
        />
        <button onClick={filmSearch} className="searchbutton">
          <img
            src="https://cdn2.iconfinder.com/data/icons/search-color/32/Movie-64.png"
            width={28}
          />
        </button>
      </div>
      <div className="searchcarddiv">
        {searchResult.map((item, index) => (
          <div key={index}>
            <div className="card">
              <div>
                <img src={item.large_cover_image} width={180} />
              </div>
              <div className="cardunderdiv">
                <h7>{item.title_long}</h7>
                <p>
                  <b>{item.genres.join(", ")} </b>
                </p>
                <p>Rating : {item.rating}</p>
              </div>
              <Link to={`/Filmdetails/${item.id}`}>
                <button className="cardbutton">Filmdetails</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
