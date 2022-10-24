import React from 'react';

interface CardProps {
  rank:string;
  suit:string;
}
const CardView :React.FC<CardProps> = props => {
  const cardClass = 'card rank-'+ props.rank.toLowerCase() + ' ' + props.suit

 if(props.suit === 'diams'){
   return (
     <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">♦</span>
      </span>
     </div>
   )
} else if (props.suit ==='hearts'){
   return (
     <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">♥</span>
      </span>
     </div>
   )
} else if (props.suit ==='clubs'){
   return (
     <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">♣</span>
      </span>
     </div>
   )
} else if (props.suit ==='spades'){
   return (
     <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">♠</span>
      </span>
     </div>
   )
}
  return (
    <div className="playingCards faceImages">
      <span className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{props.suit}</span>
      </span>
    </div>

  );
};

export default CardView;

// CardView:React.FC<string>