import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';



export const HomePage = () => {
  const [journey, setJourney] = useState(null)

  const handleJourneyChange = (journey) =>{
    setJourney(journey)
    }
    
    if(journey=='')
    console.log(journey)

  return (
    <main>
      <JourneyPicker value={journey} onJourneyChange={handleJourneyChange} />
      {journey !== null ? <div> Nalezeno spojení s id {journey.journeyId}</div> : ''}
    </main>
  );
};
