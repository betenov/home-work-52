import Card from "./Card";


let cards: Card[] = [];
class CardDeck {

  constructor() {

    const suits = ['diams', 'hearts', 'spades', 'clubs'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        const newCard = new Card(suits[i], ranks[j]);
        cards.push(newCard)
      }
    }
  }


  getCard():Card {
    const randomCards = Math.floor(Math.random() * cards.length) - 1
    const cardRandom = cards[randomCards]
    cards.splice( randomCards , 1)
    return cardRandom

  }
  getCards(howMany:number){
    let cards = []
  for (let i = 0; i < (howMany); i++ ){
    cards.push(this.getCard())
  }
    console.log(cards)
  }
}
const  cardDeck = new CardDeck();
cardDeck.getCards(20)

export default CardDeck