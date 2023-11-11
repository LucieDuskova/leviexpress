import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';



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


      {journey !== null ? <><JourneyDetail journey={journey} /> <SelectedSeat number={journey.autoSeat}/></> : ''}
    </main>
  );
};
