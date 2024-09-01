import React from "react";
import { discordIcon, telegramIcon } from "./SVG";

export default function Social() {
  return (
    <div className="social">
      <a href="#">Contact</a>
      <a href="#" className="socialLink">
        {telegramIcon}
      </a>
      <a href="#" className="socialLink">
        {discordIcon}
      </a>
    </div>
  );
}
