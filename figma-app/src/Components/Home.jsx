import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../Assets/S_logo.png";
import unplash from "../Assets/unplash_pic.png";
import earth from "../Assets/earth.png";

import "../Style/home.css";

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-black  main_nav">
        <img src={logoImg} height="80px" />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav Header">
            <li class="nav-item active">
              <h1 width="50%"></h1>
            </li>
            <li class="nav-item active ">
              <Link class="text-color" to="/about">
                ABOUT US
              </Link>
            </li>

            <li class="nav-item">
              <Link class=" text-color" to="/service">
                SERVICES
              </Link>
            </li>
            <li class="nav-item">
              <Link class=" text-color" to="/client">
                {" "}
                CLIENTS
              </Link>
            </li>
            <li class="nav-item">
              <Link class=" text-color" to="/network">
                OUR NETWORK
              </Link>
            </li>
            <li class="nav-item">
              <Link class="text-color" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <middle>
        <img src={unplash} width="100%" />
        <div className="our">
          OUR <br />
          NETWORK
        </div>
        <div className="middle-para">
          <p>
            With more than 20 offices in 14 countries and a footprint on 4
            continents, we transact in <br />
            most countries and global markets.
          </p>
          <p>
            We combine global scale with local expertise across key sectors. Our
            international presence
            <br /> positions us to work with clients at both ends of the
            transaction, providing local market
            <br />
            insights and on-the-ground support. The large international network
            we have built in various
            <br />
            industries is valuable to our customers who get assistance from
            local experts when entering
            <br />
            new markets.
          </p>
          Our international acumen and capabilities enable us to structure
          credit facilities for
          <br />
          companies based anywhere in the world and transacting in USD, EUR, GBP
          and other major <br /> currencies.
        </div>
        <div>
          <div className="middle-para2">
            OUR INTERNATIONAL PRESENCE
            <span className="under_score"> ___________________________</span>
          </div>
          <img src={earth} width="100%" />
        </div>
        <div className="middle-para">
          <div className="middle-para3">
            IMPORT COUNTRIES COVERED{" "}
            <span className="under_score"> ___________________________</span>
          </div>
          <div className="middle-para-3_1">
            <p>
              We recently opened new territories and can now facilitate
              financing on
              <br />
              open account terms in many new regional markets through our work
              with
              <br />
              local partners. In addition to the regions that we traditionally
              cover—North
              <br />
              America, Western Europe and the Middle East—we now provide credit
              <br />
              facilities to exporters selling to South America, Eastern Europe,
              Asia and
              <br />
              parts of Africa.
            </p>
          </div>
        </div>
      </middle>

      <footer></footer>
    </div>
  );
}

export default Home;
