import { useContext } from 'react';
import { Context } from '../context/Сontext';
import { constantData } from '../utils/consts';

function Text() {
  const { data, disabledCard, isSelected, handleSelect } = useContext(Context);

  const { itemText, itemButtonText, itemTextSpan } = constantData;
  const { textSelected, textDisabled } = data;

  if (disabledCard) {
    return <p className='item__text item__text_disabled'>{textDisabled}</p>;
  }

  if (isSelected) {
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
