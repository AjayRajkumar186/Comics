import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CharacterComponents.css'
import CardComponents from '../CardComponents/CardComponents'

const CharacterComponents = () => {

  const [characters, setCharacters] = useState({})
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    fetchcharacterfromApl()
  }, [pageNumber])

  const fetchcharacterfromApl = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    setCharacters(response.data)
    console.log(response.data.results);
  }

  const renderNextPage = () => {
    setPageNumber((oldpageNumber) => oldpageNumber + 1)
  }

  const renderPrevPage = () => {
    setPageNumber((oldpageNumber) => oldpageNumber - 1)
  }

  //ajayRajkumar

  return (
    <div className="characters">
      {characters.results && characters.results.map(character => (
        <CardComponents character={character} key={character.id} />
      ))}
      <div className="btns">
        <div><button onClick={renderPrevPage} disabled={pageNumber === 1}>Prev</button></div>
        <div><button onClick={renderNextPage} disabled={!characters.info || !characters.info.next}>Next</button></div>
      </div>

    </div>

  )
}

export default CharacterComponents