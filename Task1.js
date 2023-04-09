fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country.flags.svg);
    });
  })
  .catch((error) => console.log(error));