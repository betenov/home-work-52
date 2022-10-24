import React from 'react';
import './App.css';
import CardView from "./cards/CardView";
import Card from "./lib/Card";

function App() {
const card = new Card('spades', '4');
console.log(card.suit)
  return (
    <div className="App">
      <CardView rank='Q' suit='clubs'/>
    </div>
  );
}

export default App;
