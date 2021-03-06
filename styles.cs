@import url("https://fonts.googleapis.com/css2?family=Marcellus&family=Poppins&family=Fuggles&family=Space+Mono&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2, h3, p {
  color: #2d2d2d;
}

html {
  font-size: 16px;
  background-color: #ecf0f1;
}

h1, h2, p {
  font-weight: normal;
}

h3, p {
  font-family: "Poppins";
}

h2 {
  font-family: "Marcellus";
  font-size: 2.5rem;
}

h3 {
  font-size: 1rem;
}

p {
  font-size: 0.75rem;
}

#header {
  position: relative;
  background-color: #000;
  color: #ecf0f1;
  padding-top: 0.5vh;
  text-align: center;
  z-index: 100;
  font-family: "Fuggles", cursive;
  font-size: 2rem;
}

#navLinks {
  position: sticky;
  top: 0;
  background-color: #000;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.7);
  border: 1.5px solid #000;
  z-index: 90;
}
#navLinks > ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
}
#navLinks > ul li {
  width: 33.3%;
}
#navLinks > ul li button {
  width: 100%;
  height: 100%;
  font-family: "Space Mono";
  background-color: #000;
  color: #ecf0f1;
  font-weight: 550;
  font-size: 1rem;
  padding: 0.5vh 0 1vh 0;
  border: 0;
}
#navLinks > ul li button:active {
  background-color: #9E2A2B;
  transform: scale(0.96);
}

#content {
  margin: 0 auto;
  padding-top: 5vh;
}
#content #menu {
  padding: 0 15%;
}
#content #menu #categories {
  position: relative;
  padding-bottom: 7vh;
}
#content #menu #categories h2 {
  text-transform: uppercase;
  text-align: center;
  position: relative;
}
#content #menu #categories h2 span {
  background-color: #ecf0f1;
  padding: 0 1vh;
}
#content #menu #categories h2::before {
  content: "";
  height: 1px;
  width: 100%;
  background-color: #2d2d2d;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: -1;
}
#content #menu #categories #item {
  padding: 2vh 0 3vh 0;
}
#content #menu #categories #item img {
  padding: 2.5vh 0 1vh 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
#content #menu #categories #item #itemInfo {
  display: flex;
}
#content #menu #categories #item #itemInfo #infoBox {
  flex: 0.7;
}
#content #menu #categories #item #itemInfo #infoBox h3 {
  padding-bottom: 0.3vh;
}
#content #menu #categories #item #itemInfo button {
  flex: 0.3;
}
#content #contact #address {
  padding: 0% 7% 7% 5%;
  text-align: center;
}
#content #contact #address h3 {
  font-weight: normal;
}
#content #contact #mapContainer {
  height: 100vw;
  width: 100vw;
}
#content #about {
  padding: 0 13%;
}
#content #about img {
  padding: 2vh 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

#footer {
  z-index: 100;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #000;
  width: 100vw;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.7);
}
#footer a {
  flex: 1;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 2vh 0;
}

a:active {
  background-color: #9E2A2B;
  transform: scale(0.96);
}

#map {
  border: none;
}

.hide {
  display: none;
}

.animate {
  animation-name: eyeBlink;
  animation-duration: 0.4s;
  animation-iteration-count: 1;
}

@keyframes eyeBlink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
#snipcart {
  position: relative;
  z-index: 101;
}

/*# sourceMappingURL=styles.cs.map */
