import React from "react";

function TouristInfoCards() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <img
            src="https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg"
            className="card-img-top"
            alt="Glasgow View"
          />
          <div className="card-body">
            <h1>Glasgow</h1>
            <p>
              Glasgow is famed for its culture, shopping and people. Spend your
              day exploring a wide range of fascinating free museums and
              galleries, and taking advantage of tips from friendly local people
              on the city’s hidden gems.
            </p>
            <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.britannica.com/42/116342-050-5AC41785/Manchester-Eng.jpg"
            className="card-img-top"
            alt="Manchester View"
          />
          <div className="card-body">
            <h1>Manchester</h1>
            <p>
              Manchester is a major city in the northwest of England with a rich
              industrial heritage. Famed for its soccer team and music scene,
              which has produced the likes of The Smiths and Oasis, this centre
              for sports and the arts is a down-to-earth and friendly city.
            </p>
            <a href="www.visitmanchester.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.signaturetownhousehydepark.co.uk/blog/wp-content/uploads/2023/02/Tower-Bridge.jpg"
            className="card-img-top"
            alt="London View"
          />
          <div className="card-body">
            <h1>London</h1>
            <p>
              London is layered with history, where medieval and Victorian
              complement a rich and vibrant modern world. The Tower of London
              and Westminster neighbour local pubs and markets, as commuters
              rush to catch the Tube.
            </p>
            <a href="www.visitlondon.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
