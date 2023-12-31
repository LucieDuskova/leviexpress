import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  console.log(journey);

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.name}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
      
    </div>
  );
};
