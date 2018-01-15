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
        <li onClick={updateId(id)}>
          {character.name}
        </li>)
    }

    return (
      <li>
        {content}
        <style jsx>{`
          li {
            font-size: 44px;
            padding: 40px;
            border-bottom: 1px solid yellow;
          }
        `}</style>
      </li>
    )
};

export default InfoItem;
