import React from "react";

export default function Nav() {
  return (
    <nav>
      <h4>Solodke Coffee</h4>
      <ul>
        <a href="#home" role="button">
          <li>Home</li>
        </a>
        <a href="#about" role="button">
          <li>About</li>
        </a>
        <a href="#menu" role="button">
          <li>Menu</li>
        </a>
        <a href="#reservation" role="button">
          <li>Reservations</li>
        </a>
        <a href="#order" role="button">
          <li>Order online</li>
        </a>
        <a href="#login" role="button">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
}
