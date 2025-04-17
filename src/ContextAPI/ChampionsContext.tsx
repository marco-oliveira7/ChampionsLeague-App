import { createContext, ReactNode, useEffect, useState } from "react";
import { PlayerModel } from "../model/Player";

interface ChampionsInterface {
  players: PlayerModel[];
  data: PlayerModel;
}

export const ChampionsContext = createContext<ChampionsInterface>({
  players: [],
  data: { id: 0, club: "",  },
});

type Props = {
  children: ReactNode;
};

const ChampionsContextProvider = (props: Props) => {
  const [players, setPlayers] = useState<PlayerModel[]>([]);

  const [data, setData] = useState<PlayerModel[]>([]);

  // const [player, setPlayer] = useState<PlayerModel>();

  const getPlayers = async () => {
    fetch("http://localhost:3333/api/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Erro na requisição:", err));
  };

  const postPlayers = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        // data
      }),
    };

    fetch("http://localhost:3333/api/players", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Erro na requisição:", err));
  };

  useEffect(() => {
    getPlayers();
    // postPlayers();
  }, []);

  return (
    <ChampionsContext.Provider value={{ players, data }}>
      {props.children}
    </ChampionsContext.Provider>
  );
};

export default ChampionsContextProvider;
