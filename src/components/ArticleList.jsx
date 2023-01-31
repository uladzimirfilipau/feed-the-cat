function ArticleList({ data, disabledCard }) {
  const itemsText = data.description;

  const itemClassName = `article__list-item ${disabledCard && 'article__list-item_disabled'}`;

  const listItems = itemsText.map((text) => (
    <li className={itemClassName} key={text}>
      {text}
    </li>
  ));

  return <ul className='article__list'>{listItems}</ul>;
}

export default ArticleList;
