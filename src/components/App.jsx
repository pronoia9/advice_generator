import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card/Card';
import Footer from './Footer/Footer';
const icon = require('../images/icon-dice.svg');
const data = require('../data/data.json');

function App() {
  const [card, setCard] = useState();
  // sets the state of card with a fetched id (number) + advice (string) object
  const setAdvice = async () => {
    try {
      const response = await axios.get(`${data.apiURL}?timestamp=${new Date().getTime()}`);
      setCard(response.data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { setAdvice(); }, []);

  return (
    <>
      <Card icon={icon} card={card} buttonClick={setAdvice} />
      <Footer data={data.footer} />
    </>
  );
}

export default App;