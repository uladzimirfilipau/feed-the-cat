import { useState } from 'react';
import Article from './Article';
import Text from './Text';

function Card({ data }) {
  const disabledCard = false;

  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => !disabledCard && setIsSelected(!isSelected);

  return (
    <li className='item'>
      <Article
        data={data}
        handleSelect={handleSelect}
        isSelected={isSelected}
        disabledCard={disabledCard}
      />
      <Text
        data={data}
        isSelected={isSelected}
        handleSelect={handleSelect}
        disabledCard={disabledCard}
      />
    </li>
  );
}

export default Card;
