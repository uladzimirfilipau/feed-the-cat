import { useState } from 'react';
import { Context } from '../context/Сontext';
import Article from './Article';
import Text from './Text';

function Card({ data }) {
  const disabledCard = false;

  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => !disabledCard && setIsSelected(!isSelected);

  const value = { data, disabledCard, isSelected, handleSelect };

  return (
    <Context.Provider value={value}>
      <li className='item'>
        <Article />
        <Text />
      </li>
    </Context.Provider>
  );
}

export default Card;
