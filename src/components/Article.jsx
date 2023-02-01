import { useContext, useState } from 'react';
import ArticleText from './ArticleText';
import ArticleTitle from './ArticleTitle';
import ArticleSubtitle from './ArticleSubtitle';
import ArticleList from './ArticleList';
import ArticleFigure from './ArticleFigure';
import { Context } from '../context/Сontext';

function Article() {
  const { isSelected, disabledCard, handleSelect } = useContext(Context);
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => isSelected && setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const selectedHover = isSelected && isHovering;

  const activeClassName = `article
    ${isSelected ? 'article_select' : 'article_not-select'}
    ${selectedHover && 'article_select-hover'}`;

  const disabledClassName = 'article article_disabled';

  return (
    <article
      className={disabledCard ? disabledClassName : activeClassName}
      onClick={handleSelect}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ArticleText selectedHover={selectedHover} />
      <ArticleTitle />
      <ArticleSubtitle />
      <ArticleList />
      <ArticleFigure />
    </article>
  );
}

export default Article;
