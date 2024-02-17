const $geolocationContainer = document.getElementById("geolocation-info");

const getGeolocation = async () => {
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
  
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        const country = data.address.country;
        const state = data.address.state;
  
        console.log(data.address);
        const formattedCountry = country.toUpperCase().slice(0, 3);
        $geolocationContainer.innerText = `${formattedCountry} ${state}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      $geolocationContainer.innerText = "geolocation locked";
    }
};
  
export {
  getGeolocation
}