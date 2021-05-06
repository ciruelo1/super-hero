import React, { createContext, useState } from "react";
import { getCharacterData } from "./../constants/Api";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [currentCharacter, setCurrentCharacter] = useState("");
  const [characterData, setCharacterData] = useState({});
  const [text, setText] = useState("");
  
  const getCharacter = character_name => {
    fetch(getCharacterData(character_name))
      .then(res => res.json())
      .then(data => {
        const { response } = data;
        setDoneFetch(true);
        setCharacterData(data);
        setText(response === "success" ? "Results" : "No Results");
      })
      .catch(err => console.log(err));
  };

  const validateCharacter = (
    e,
    character_name = document.querySelector("#character_name").value.toLowerCase().trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    const words = character_name.match(/\w+/g);
    character_name = words && words.join(" ");
    if (character_name && character_name !== currentCharacter) {
      setCurrentCharacter(character_name);
      setDoneFetch(false);
      getCharacter(character_name);
    }
  };

  return (
    <CharactersContext.Provider value={{ doneFetch, characterData, text, validateCharacter }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
