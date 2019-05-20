/*
    Author: Lindsey Maddox
    Name: nav.js
    Purpose: create nav component and print to dom
*/

function createNav() {
  const navOutput = document.getElementById("main-nav");

  const navDetails = `
    <ul>
      <li><a href="/">Categories</a></li>
      <li><a href="/">Orders</a></li>
      <li><a href="/">Logout</a></li>
    </ul>
  `
  navOutput.innerHTML = navDetails;
}

createNav();

export default createNav