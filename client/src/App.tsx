import { useState } from 'react';
import { getInternationalEggPrices, getUsEggPrices } from './requests/requests';

function App() {
  const [usEggPrices, setUsEggPrices] = useState();
  const [internationalEggPrices, setInternationalEggPrices] = useState();

  const fetchUsEggs = async () => {
    try {
      const data = await getUsEggPrices();
      setUsEggPrices(data);
    } catch (e) {
      console.log('error here');
    }
  };

  const fetchInternationalEggs = async () => {
    try {
      const data = await getInternationalEggPrices();
      setInternationalEggPrices(data);
    } catch (e) {
      console.log('error here');
    }
  };
  return (
    <div className="App">
      <button onClick={fetchUsEggs}>Get US Eggs</button>
      <button onClick={fetchInternationalEggs}>Get Int Eggs</button>
    </div>
  );
}

export default App;
