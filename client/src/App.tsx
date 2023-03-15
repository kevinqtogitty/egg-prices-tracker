import { getInternationalEggPrices, getUsEggPrices } from './requests/requests';
import IntEggChart from './components/IntEggChart';
import UsEggChart from './components/UsEggChart';
import { useEffect, useState } from 'react';
import ThreeScene from './r3f/ThreeScene';
import { a, useSpring } from '@react-spring/web';

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [finishedFetching, setFinishedFetching] = useState(false);
  const [showCharts, setShowCharts] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    addEventListener('resize', (event) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await Promise.all([
          getUsEggPrices(),
          getInternationalEggPrices()
        ]);
        setUsEggPrices(data[0]);
        setInternationalEggPrices(data[1]);
        (() => {
          setTimeout(() => {
            setFinishedFetching(true);
          }, 1000);
          setTimeout(() => {
            setShowCharts(true);
          }, 2000);
        })();
      } catch (e) {
        console.log(e);
      }
    };
    fetchAll();
    return;
  }, []);

  const spring = useSpring({
    top: finishedFetching ? 'calc(0$ - 0rem)' : 'calc(50% - 10rem)',
    right: finishedFetching ? 'calc(0$ - 0rem)' : 'calc(50% - 10rem)'
  });

  const buttonSpring = useSpring({
    transform: toggle ? 'translateX(100%)' : 'translateX(0%)'
  });

  return (
    <div className="App">
      <div>
        <h1 className="h1">How Much Is My Egg?</h1>
        <h2 className="h2">
          Avg. price per dozen in the US today:
          {showCharts ? (
            <span style={{ color: 'green' }}>
              {' '}
              ${usEggPrices![usEggPrices!.length - 1].price}
            </span>
          ) : (
            <span> ...</span>
          )}
        </h2>
      </div>
      <button
        className={`toggle-button`}
        onClick={() => setToggle((state) => !state)}
      >
        <span className={`${toggle ? 'null' : 'toggle-text-active'}`}>
          US Prices
        </span>
        <span className={`${toggle ? 'toggle-text-active' : 'null'}`}>
          INT. Prices
        </span>
        <a.div style={buttonSpring} />
      </button>
      <a.div style={spring} className="three-canvas">
        <ThreeScene />
        {finishedFetching ? null : <h2 className="h2-loading">Loading...</h2>}
      </a.div>

      {showCharts ? (
        toggle ? (
          <IntEggChart
            internationalEggPrices={internationalEggPrices!}
            windowWidth={windowWidth}
          />
        ) : (
          <UsEggChart usEggPrices={usEggPrices!} windowWidth={windowWidth} />
        )
      ) : null}
    </div>
  );
}

export default App;
