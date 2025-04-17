import { useContext } from "react";
import { ChampionsContext } from "./ContextAPI/ChampionsContext";

function App() {
  
  const {players, data} = useContext(ChampionsContext)



  return (
    <>
      {players.map((player, index) => (
        <p key={index}>{player.name}</p>  
      ))}
      <input type="text" />
    </>
  );
}

export default App;
