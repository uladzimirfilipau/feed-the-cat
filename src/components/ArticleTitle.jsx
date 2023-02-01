import { useContext } from 'react';
import { Context } from '../context/Сontext';
import { constantData } from '../utils/consts';

function ArticleTitle() {
  const { disabledCard } = useContext(Context);

  const { articleTitle } = constantData;

  const titleClassName = `article__title ${disabledCard && 'article__title_disabled'}`;

  return <h2 className={titleClassName}>{articleTitle}</h2>;
}

export default ArticleTitle;
