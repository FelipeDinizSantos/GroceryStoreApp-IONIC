import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();

  const handleStartClick = () => {
    history.push('/shop'); 
  };

  return (
    <div className="home-container">
      <img src="/assets/img/home-image.png" />
      <h1>Entregamos Mantimentos à Sua Porta</h1>
      <p>A mercearia oferece vegetais e frutas frescas. Encomende itens frescos da mercearia</p>
      <button onClick={handleStartClick}> INICIAR <img src="/assets/img/arrow-right.png" /></button>
    </div>
  );
};

export default Home;
