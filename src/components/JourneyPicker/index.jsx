import React, { useEffect, useState } from 'react';
import './style.css';
//------------------------------
//-----  KOMPONENTA DATA   -----
//------------------------------
export const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateCs}
        </option>
      ))}
    </>
  );
};
//------------------------------
//-----  KOMPONENTA CITY   -----
//------------------------------
export const CityOption = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};
//------------------------------
//-- KOMPONENTA NA VYHLEDÁVÁNÍ -
//------------------------------
export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  useEffect(() => {
    const fetchCity = async () => {
      const cityResponse = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const cities = await cityResponse.json();
      setCities(cities.results);
    };
    const fetchDate = async () => {
      const dateResponse = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const dates = await dateResponse.json();
      setDates(dates.results);
    };
    fetchCity();
    fetchDate();
  }, []);
  //------------------------------
  //----- TLAČÍTKO FORMULÁŘE -----
  //------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchSubmit = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
      );
      const datas = await response.json();
      // console.log(datas.results);
      onJourneyChange(datas.results)
    };
    fetchSubmit();
  };
  //----------- DISABLE NA SUBMIT -----------
  const isDisabled = !fromCity || !toCity || !date;
  //------------------------------
  //----------- RETURN -----------
  //------------------------------
  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(e) => {
                setFromCity(e.target.value);
              }}
              value={fromCity}
            >
              <CityOption cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(e) => {
                setToCity(e.target.value);
              }}
              value={toCity}
            >
              <CityOption cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={(e) => setDate(e.target.value)} value={date}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isDisabled}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
