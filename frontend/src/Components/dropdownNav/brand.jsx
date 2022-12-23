import React from "react";
import {
  DropdownContent1,
  DropdownContent2,
  DropdownContent3,
  DropdownContent4,
  DropdownContent5,
  DropdownContent6,
} from "./dropdown-content";

import "./brand.css";

function Brand() {
  return (
    <div className="web">
      <div className="web-option">
        <a class="dropbtn">NEW ARRIVALS</a>
      </div>
      <div className="web-option">
        <a class="dropbtn">DESIGNERS</a>
        <div class="dropdown-content">
          <DropdownContent5 />
        </div>
      </div>
      <div className="web-option">
        <a class="dropbtn">CLOTHING</a>
        <div class="dropdown-content">
          <DropdownContent1 />
        </div>
      </div>
      <div className="web-option">
        <a class="dropbtn">SHOES</a>
        <div class="dropdown-content">
          <DropdownContent2 />
        </div>
      </div>
      <div className="web-option">
        <a class="dropbtn">BAGS</a>
        <div class="dropdown-content">
          <DropdownContent3 />
        </div>
      </div>
      <div className="web-option">
        <a class="dropbtn">ACCESSORIES</a>
        <div class="dropdown-content">
          <DropdownContent4 />
        </div>
      </div>
      <div className="web-option">
        <a class="dropbtn">JEWELRY</a>
        <div class="dropdown-content">
          <DropdownContent6 />
        </div>
      </div>
      <div className="web-option">
        <a class="dropbtn">VACATION</a>
      </div>
      <div className="web-option">
        <a class="dropbtn">Sale</a>
      </div>
    </div>
  );
}

export default Brand;
