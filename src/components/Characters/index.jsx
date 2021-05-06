import React, { Fragment, useContext } from 'react';
import { CharactersContext } from '../../contexts/CharactersContext';
import SearchCharacters from './SearchCharacters';
import Character from './Character';
import Message from './../Common/Message';
import Loading from './../Common/Loading';

const Characters = () => {
    const { doneFetch, characterData, text, validateCharacter } = useContext(CharactersContext);
    return (
        <Fragment>
            <SearchCharacters validateCharacter={validateCharacter} />
            {doneFetch ? (
                characterData.response === "success" ? (
                    <Character characterData={characterData} />
                ) : (
                    <Message text={text} />
                )
            ) : (
                <Loading />
            )}
        </Fragment>
    )
};

export default Characters;
