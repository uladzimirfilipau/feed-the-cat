import { useContext } from 'react';
import { Context } from '../context/Сontext';

function ArticleSubtitle() {
  const { data, disabledCard } = useContext(Context);

  const { taste } = data;

  const subtitleClassName = `article__subtitle ${disabledCard && 'article__subtitle_disabled'}`;

  return <h3 className={subtitleClassName}>{taste}</h3>;
}

export default ArticleSubtitle;
