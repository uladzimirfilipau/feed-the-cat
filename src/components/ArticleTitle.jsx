import { basicData } from '../utils/consts';

function ArticleTitle({ disabledCard }) {
  const { articleTitle } = basicData;

  const titleClassName = `article__title ${disabledCard && 'article__title_disabled'}`;

  return <h2 className={titleClassName}>{articleTitle}</h2>;
}

export default ArticleTitle;
