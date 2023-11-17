import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

//img폴더안에 이미지 사용
//src의 key 값으로 이미지의 주소 값
const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  // 카드와 턴수 useState 만들기
  // useState 사용
  const [cards, setCards] = useState([]); //카드는 배열로 시작함
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    //카드 섞기
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards); //섞은 카드를 저장
    setTurns(0); // 턴 수를 0으로
  };
  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <></>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
