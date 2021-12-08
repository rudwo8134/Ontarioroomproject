export const handleaddressdata = async (address) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLEAPI}`
    );
    const data = await response.json();
    const result = {
      Formattedaddress: data.results[0].formatted_address,
      lat: data.results[0].geometry.location.lat,
      lng: data.results[0].geometry.location.lng,
    };
    return result;
  } catch (err) {
    console.log(err);
  }
};
