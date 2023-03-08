import Weather from "./weather"
import Countrie from "./countrie"

const Countries = ({ countries, handle, show }) => {
  return (
    <div>
      {countries.length >1 &&
      (countries.length > 10 ? (
        <div> Too many matches, specify another filter </div>
      ):(
        countries.map(({name, capital, population, languages, flags}) => (
          <div key={name} >
            {name}{' '}
            <button onClick={() =>handle(name)}>show</button>
            {show === name && 
              <Countrie 
              name = {name}
              capital = {capital}
              populat = {population}
              languages = {languages}
              flag = {flags.png}
              handle = {handle}
              show = {show}
              />
            }
            {show === name && <Weather capital={capital} />}
          </div>
        ))
      ))}
      {countries.length === 1 && (
        <Countrie 
        name={countries['0'].name}
        capital={countries['0'].capital}
        populat={countries['0'].population}
        languages={countries['0'].languages}
        flag={countries['0'].flags.png}
        handle={handle}
        show={show}
        />
      )}
    </div>
  )
}



export default Countries