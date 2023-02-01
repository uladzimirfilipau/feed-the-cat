import { useContext } from 'react';
import { Context } from '../context/Сontext';
import { constantData } from '../utils/consts';

function ArticleText({ selectedHover }) {
  const { disabledCard } = useContext(Context);
  const { articleText, articleTextHover } = constantData;

  const text = selectedHover ? articleTextHover : articleText;

  const activeClassName = `article__text ${selectedHover && 'article__text_hover'}`;
  const disabledClassName = 'article__text article__text_disabled';

  return <p className={disabledCard ? disabledClassName : activeClassName}>{text}</p>;
}

export default ArticleText;
