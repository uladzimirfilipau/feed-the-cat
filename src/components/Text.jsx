import { useContext } from 'react';
import { Context } from '../context/Сontext';
import { constantData } from '../utils/consts';

function Text() {
  const { data, disabledCard, isSelected, handleSelect } = useContext(Context);

  const { itemText, itemButtonText, itemTextSpan } = constantData;
  const { textSelected, textDisabled } = data;

  const textClassName = `item__text ${disabledCard && 'item__text_disabled'}`;

  if (disabledCard) {
    return <p className={textClassName}>{textDisabled}</p>;
  } else if (isSelected) {
    return <p className='item__text'>{textSelected}</p>;
  }

  return (
    <p className='item__text'>
      {itemText}
      <button type='button' className='item__text-button' onClick={handleSelect}>
        {itemButtonText}
      </button>
      <span className='item__text-span'>{itemTextSpan}</span>
    </p>
  );
}

export default Text;
