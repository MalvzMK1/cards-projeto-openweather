const apiKey = '9e87600c19b11eb3527460c681b3c645';

export const getCloseCities = async (lat, long) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt_br&units=metric&appid=${apiKey}`);
  const data = response.json();

  return data;
}