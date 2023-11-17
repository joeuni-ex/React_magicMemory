import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

//img폴더안에 이미지 사용
//src의 key 값으로 이미지의 주소 값
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

function App() {
  // 카드와 턴수 useState 만들기
  // useState 사용
  const [cards, setCards] = useState([]); //카드는 배열로 시작함
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null); //첫 번째 카드 선택
  const [choiceTwo, setChoiceTwo] = useState(null); //두 번째 카드 선택
  const [disabled, setDisabled] = useState(false); //선택 불가능 시 true

  const shuffleCards = () => {
    //카드 섞기
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards); //섞은 카드를 저장
    setTurns(0); // 턴 수를 0으로
  };

  //카드 선택 시 기억하기
  function handleChoice(card) {
    //console.log(cards, turns);
    //첫 번째 카드를 선택했으면, 두 번째 카드에 넣고 없으면 첫 번째에 입력하기
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //선택들을 비교하기 (useEffect)
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true); //다른 선택을 할 수 없도록 true
      if (choiceOne.src === choiceTwo.src) {
        //같은 이미지의 카드들만 matched를 true로 업데이트된다.
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTrun();
      } else {
        console.log("틀렸습니다!");
        setTimeout(resetTrun, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //맞추거나 틀렸을 때 선택들을 모두 초기화 (턴 수는 증가함)
  const resetTrun = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false); // 선택가능
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <></>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            handleChoice={handleChoice}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>턴수: {turns}</p>
    </div>
  );
}

export default App;
