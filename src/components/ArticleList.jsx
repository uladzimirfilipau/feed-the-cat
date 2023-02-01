import { useContext } from 'react';
import { Context } from '../context/Сontext';

function ArticleList() {
  const { data, disabledCard } = useContext(Context);

  const itemsText = data.description;

  const itemClassName = `article__list-item ${disabledCard && 'article__list-item_disabled'}`;

  const listItems = itemsText.map((item, index) => {
    const { amount, text } = item;

    const amountSpan = !!amount && <span className='article__list-item_span'>{amount}&nbsp;</span>;

    return (
      <li className={itemClassName} key={index}>
        {amountSpan}
        {text}
      </li>
    );
  });

  return <ul className='article__list'>{listItems}</ul>;
}

export default ArticleList;
