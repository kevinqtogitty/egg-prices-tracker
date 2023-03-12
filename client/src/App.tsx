import { getInternationalEggPrices, getUsEggPrices } from './requests/requests';
import IntEggChart from './components/IntEggChart';
import UsEggChart from './components/UsEggChart';
import { useEffect, useState } from 'react';
import ThreeScene from './r3f/ThreeScene';

export interface INTERFACE_UsEggPrices {
  date: string;
  price: number;
}
export interface INTERFACE_IntEggPrices {
  country: string;
  price: number;
}

function App() {
  const [usEggPrices, setUsEggPrices] = useState<INTERFACE_UsEggPrices[]>();
  const [internationalEggPrices, setInternationalEggPrices] =
    useState<INTERFACE_IntEggPrices[]>();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await Promise.all([
          getUsEggPrices(),
          getInternationalEggPrices()
        ]);
        setUsEggPrices(data[0]);
        setInternationalEggPrices(data[1]);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAll();
    return;
  }, []);

  return (
    <div className="App">
      <h1 className="h1">How Much Is My Egg?</h1>
      {usEggPrices ? (
        <h2 className="h2">
          Average price in the US today: $
          {usEggPrices![usEggPrices!.length - 1].price}
        </h2>
      ) : null}

      {/* <div className="three-canvas">
        <ThreeScene />
      </div> */}
      <UsEggChart usEggPrices={usEggPrices!} />
      <IntEggChart internationalEggPrices={internationalEggPrices!} />
    </div>
  );
}

export default App;
