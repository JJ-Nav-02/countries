import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Search from './componentes/search';
import Countries from './componentes/countries';



const App = () => {
  const [countries, SetCountries] = useState([])
  const [show, SetShow] = useState('')
  const [newCountrie, SetNewCountrie] = useState('')

  useEffect(() => {
    console.log('Effect');
    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        console.log('Then');
        SetCountries(response.data)
      })
  }, [])

  const handleInputCountrie = (event) => SetNewCountrie(event.target.value)
  const handleButton = (countrieState) => SetShow(countrieState)

  const countriesToShow = newCountrie === '' ? countries : countries.filter(
    (countrie) =>
      countrie.name.toLocaleLowerCase()
        .indexOf(newCountrie.toLocaleLowerCase()) > -1
  )


  return (
    <div>
      <Search newCountrie={newCountrie} handle={handleInputCountrie} />
      <Countries countries={countriesToShow} handle={handleButton} show={show} />
    </div>
  )

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

