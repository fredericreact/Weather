import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const WidgetMeteo = ({ city, code }) => {
  const temperature = Math.random() * 60 - 20;
  const getTemperatureHue = (percent) => {
    let min = 0;
    let max = 230;
    // produit en croix / attention au 'max -', sans ça on aurait bleu = chaud et rouge = froid 
    return max - (percent * (max - min) / 100);
  };
  
  const getTemperaturePercentage =(temperature) =>{
    let limitedTemperature = temperature;
    const min =-20;
    const max = 50;
    limitedTemperature = Math.max(min,temperature)
    limitedTemperature = Math.min(max, temperature);
    limitedTemperature = limitedTemperature - min;
    const result = limitedTemperature * 100 / (max - min);
    console.log(limitedTemperature)
    console.log(result)
    return result
  } 


  const percent = getTemperaturePercentage(temperature);
  const hue = getTemperaturePercentage(percent);

  return (
    <article className="meteo">
      <div className="meteo-container">
        <div className="meteo-infos">
          <h3 className="meteo-city">{city}</h3>
          <p className="meteo-code">{code}</p>
        </div>
        <p className="meteo-temperature">
          {Math.round(temperature)}°
        </p>
      </div>
      <div className="meteo-thermometer">
        <div
          className="meteo-thermometer-inside"
          style={{
            width: `${percent}%`,
            backgroundColor: `hsl(${hue}, 90%, 40%)`
          }}
        />
      </div>
    </article>
  );
};

WidgetMeteo.propTypes = {
  city: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
};

export default WidgetMeteo;