import { mainTitle, optionsData } from '../utils/consts';
import '../styles/style.css';
import Card from './Card';

function App() {
  const cards = optionsData.map((data) => <Card key={data.taste} data={data} />);

  return (
    <main className='main'>
      <h1 className='main__title'>{mainTitle}</h1>
      <ul className='main__list'>{cards}</ul>
    </main>
  );
}

export default App;
