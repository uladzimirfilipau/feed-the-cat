import { basicData } from '../utils/consts';

function ArticleText({ selectedHover, disabledCard }) {
  const { articleText, articleTextHover } = basicData;
  const text = selectedHover ? articleTextHover : articleText;
  const activeClassName = `article__text ${selectedHover && 'article__text_hover'}`;
  const disabledClassName = 'article__text article__text_disabled';

  return <p className={disabledCard ? disabledClassName : activeClassName}>{text}</p>;
}

export default ArticleText;
