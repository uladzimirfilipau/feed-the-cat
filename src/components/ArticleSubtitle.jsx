function ArticleSubtitle({ data, disabledCard }) {
  const { taste } = data;

  const subtitleClassName = `article__subtitle ${disabledCard && 'article__subtitle_disabled'}`;

  return <h3 className={subtitleClassName}>{taste}</h3>;
}

export default ArticleSubtitle;
