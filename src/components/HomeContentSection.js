import React from "react";
import "./HomeContentSection.css";
import bitcoin from "../bitcoin.jpg";
import house from "../house.jpg";

function HomeContentSection() {
  return (
    <div className="home-container">
      <div id="services">
        <h1>Main Heading (To be changed)</h1>
        <div id="service-section">
          <div id="columns">
            <div id="icon">
              <i className="fa-regular fa-arrow-up-right-dots"></i>
            </div>
            <h2>Heading (To be changed)</h2>
            <p>
              As a private investment firm, we work together to create long term
              value for our investors and shareholders.
            </p>
          </div>
          <div id="columns">
            <div id="icon">
              <i className="fa-regular fa-arrow-up-right-dots"></i>
            </div>
            <h2>Heading (To be changed)</h2>
            <p>
              As a private investment firm, we work together to create long term
              value for our investors and shareholders.
            </p>
          </div>
          <div id="columns">
            <div id="icon">
              <i className="fa-regular fa-arrow-up-right-dots"></i>
            </div>
            <h2>Heading (To be changed)</h2>
            <p>
              As a private investment firm, we work together to create long term
              value for our investors and shareholders.
            </p>
          </div>
          <div id="columns">
            <div id="icon">
              <i className="fa-regular fa-arrow-up-right-dots"></i>
            </div>
            <h2>Heading (To be changed)</h2>
            <p>
              As a private investment firm, we work together to create long term
              value for our investors and shareholders.
            </p>
          </div>
        </div>
      </div>
      <div id="investments">
        <h1>Main Heading (To be changed)</h1>
        <div className="homeContent">
          <div className="row1">
            <h1>Heading (To be changed)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
              lacus magna, eu sollicitudin quam posuere sed. Nam in condimentum
              tortor. Integer at aliquet sapien, vitae vulputate ante. Quisque
              nisl tortor, facilisis nec pellentesque eget, lobortis vitae
              augue. Maecenas et vehicula magna, eget sagittis mi. Suspendisse
              ut fringilla nisl. Aliquam scelerisque nunc id massa accumsan,
              vitae rhoncus leo consectetur. Curabitur vel justo massa. Ut
              elementum neque vel metus sollicitudin, non maximus tortor
              feugiat. Pellentesque ac lorem nec sapien convallis consectetur.
              Sed massa sem, egestas ac turpis non, placerat dignissim massa.
            </p>
          </div>
          <div className="row2">
            <p>Image by </p>
            <a href="https://www.freepik.com/free-vector/flat-design-nft-concept-illustration_13862491.htm#query=cryptocurrency&position=4&from_view=keyword">
              Freepik
            </a>
            <img src={bitcoin} />
          </div>
        </div>

        <div className="homeContent">
          <div>
            <img src={house} />
          </div>
          <div>
            <h1>Heading (To be changed)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
              lacus magna, eu sollicitudin quam posuere sed. Nam in condimentum
              tortor. Integer at aliquet sapien, vitae vulputate ante. Quisque
              nisl tortor, facilisis nec pellentesque eget, lobortis vitae
              augue. Maecenas et vehicula magna, eget sagittis mi. Suspendisse
              ut fringilla nisl. Aliquam scelerisque nunc id massa accumsan,
              vitae rhoncus leo consectetur. Curabitur vel justo massa. Ut
              elementum neque vel metus sollicitudin, non maximus tortor
              feugiat. Pellentesque ac lorem nec sapien convallis consectetur.
              Sed massa sem, egestas ac turpis non, placerat dignissim massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContentSection;
