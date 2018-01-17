import React from 'react';

const InfoItem = ({ character, id, selectedId, updateId }) => {
  let content;
  if (id === selectedId) {
    content = (
      <div>
        <p>{character.name}</p>
        <p>Height: {character.height}</p>
        <p>Birth Year: {character.birth_year}</p>
      </div>
    );
  } else {
      content = (
        <div onClick={updateId(id)}>
          <p>{character.name}</p>
        </div>)
    }

    return (
      <li>
        {content}
      </li>
    )
};

export default InfoItem;
