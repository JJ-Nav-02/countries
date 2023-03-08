
const Countrie = ({ name, capital, populat, languages, flag }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Capital {capital} </p>
      <p>Population {populat} </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(languages).map((language) => (
          <li key={language}> {language.common} </li>
        ))}
      </ul>
      <img src={flag} alt={`${name}`} />
    </div>
  )
}

export default Countrie