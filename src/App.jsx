import Challenge from './components/Challenge.jsx';
import Player from './components/Player.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title={'Easy'} targetTime={2}/>
        <Challenge title={'Intermediate'} targetTime={4}/>
        <Challenge title={'Hard'} targetTime={10}/>
        <Challenge title={'Pro'} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
