import React, { useState, useEffect } from 'react';
import axios from "axios";
import './style.css'
const ThronesAPI = "https://thronesapi.com/api/v2/characters";




const Search = () => {
  const Character = ({ character }) => {
    return (
      <div className="player">
        <div className="card-bg"></div>
        <img src={character.imageUrl} alt={character.name} />
        <div>
          <div>{character.fullName}</div>
        </div>
      </div>
    );
  };
  const [Param, setParam] = useState('');
  const [chars, setChar] = useState([]);
  const [error, setErrorMessage] = useState('');
  const onSearch = async () => {
    try {
      const response = await axios.get(
        `https://thronesapi.com/api/v2/characters`,
      );

      const data = response.data;
      const finder = data.filter((character) =>
          character.fullName.toLowerCase().includes(Param.toLowerCase()),
        );
        setChar(finder);
        if (finder.length === 0) {
          setErrorMessage('Character does not exist');
        }
      } catch (error) {
        setChar([]);
        setErrorMessage('Problem loading');
      }
    };
    return (
      <>
        <div className="Search_head">Search Characters By Name</div>
        <div className="user_in">
          <input
            type="text"
            value={Param}
            onChange={(e) => setParam(e.target.value)}
            placeholder="Character Name"
          />
          <button onClick={onSearch}>
            Search
          </button>
        </div>
        <div>
          {chars.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </>
    );
  };
  

  export default Search;