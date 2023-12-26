import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerNameInput = useRef();
  const [playerName, setPlayerName] = useState(null);
  function setName() {
    setPlayerName(playerNameInput.current.value);
    playerNameInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown user"}</h2>
      <p>
        <input
          ref={playerNameInput}
          type="text"
          placeholder="enter Your name"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setName(e.target.value);
            }
          }}
        />
        <button onClick={setName}>Set Name</button>
      </p>
    </section>
  );
}
