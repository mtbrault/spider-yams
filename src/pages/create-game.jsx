import { useState } from 'react';
import PlayerList from 'components/form/PlayerList';

const CreateGame = () => {
  const [players, setPlayers] = useState([]);

  const handlePlayerList = (playerList) => {
    setPlayers(playerList);
  };

  return (
    <div>
      <PlayerList players={players} setPlayers={setPlayers} handleSubmit={handlePlayerList} />
    </div>
  );
};

export default CreateGame;
