import { basicData } from '../utils/consts';
import image from '../image/Photo.png';

function ArticleFigure({ data, isSelected, disabledCard }) {
  const { weightSpan } = basicData;
  const { weight } = data;

  const figcaptionClassName = `figcaption ${isSelected && 'figcaption_select'} ${
    disabledCard && 'figcaption_disabled'
  }`;

  const imageClassName = `figure__image ${disabledCard && 'figure__image_disabled'}`;

  return (
    <figure className='figure'>
      <img src={image} className={imageClassName} alt='Кот' />
      <figcaption className={figcaptionClassName}>
        <p className='figcaption__text'>{weight}</p>
        <span className='figcaption__text-span'>{weightSpan}</span>
      </figcaption>
    </figure>
  );
}

export default ArticleFigure;
