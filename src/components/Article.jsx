import { useState } from 'react';
import ArticleText from './ArticleText';
import ArticleTitle from './ArticleTitle';
import ArticleSubtitle from './ArticleSubtitle';
import ArticleList from './ArticleList';
import ArticleFigure from './ArticleFigure';

function Article({ data, handleSelect, disabledCard, isSelected }) {
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
      <ArticleText selectedHover={selectedHover} disabledCard={disabledCard} />
      <ArticleTitle disabledCard={disabledCard} />
      <ArticleSubtitle data={data} disabledCard={disabledCard} />
      <ArticleList data={data} disabledCard={disabledCard} />
      <ArticleFigure data={data} isSelected={isSelected} disabledCard={disabledCard} />
    </article>
  );
}

export default Article;
