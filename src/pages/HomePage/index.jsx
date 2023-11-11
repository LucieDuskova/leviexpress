import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  if (journey == '') console.log(journey);

  const handleBuy = (e) => {
    e.preventDefault()
    console.log('bla bla')
  }

  return (
    <main>
      <div className="controls container">
        <button className="btn btn--big" type="button">
          Rezervovat
        </button>
      </div>

      <JourneyPicker value={journey} onJourneyChange={handleJourneyChange} />

      {journey !== null ? (
        <>
          <JourneyDetail journey={journey} />{' '}
          <SelectedSeat number={journey.autoSeat} />
        </>
      ) : (
        ''
      )}

      <div class="controls container">
        <button onClick={handleBuy} class="btn btn--big" type="button">
          Rezervovat
        </button>
      </div>
    </main>
  );
};
