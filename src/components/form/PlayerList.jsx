import { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const PlayerList = ({ handleSubmit }) => {
  const [players, setPlayers] = useState(['']);

  const updatePlayerName = (name, index = null) => {
    const copy = [...players];

    copy[index] = name;
    if (index === players.length - 1) {
      copy.push('');
    }
    setPlayers(copy);
  };

  const deletePlayer = (index) => {
    const copy = _.cloneDeep(players);
    copy.splice(index, 1);
    setPlayers(copy);
  };

  return (
    <div>
      {players.map((p, index) => (
        <div>
          <input
            placeholder="Ajoutez un joueur"
            value={p}
            onChange={(e) => updatePlayerName(e.target.value, index)}
          />
          {p !== '' && (
            <button
              type="button"
              onClick={() => deletePlayer(index)}
            >
              Supprimer
            </button>
          )}
        </div>
      ))}
      {players.length >= 2 && <button type="submit" onClick={() => handleSubmit(players.slice(0, -1))}>Valider les joueurs</button>}
    </div>
  );
};

PlayerList.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default PlayerList;
