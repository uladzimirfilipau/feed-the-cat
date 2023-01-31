import { basicData } from '../utils/consts';

function Text({ data, isSelected, handleSelect, disabledCard }) {
  const { itemText, itemButtonText, itemTextSpan } = basicData;
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
