import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchCharacters = ({ validateCharacter }) => (
    <Paper className='buscador'>
        <TextField 
            id="character_name"
            label="Buscar un Personaje"
            margin="normal"
            variant="outlined"
            onKeyPress={ e => validateCharacter(e)}
        />
        <IconButton onClick={e => validateCharacter(e)} className='iconbutton'>
            <SearchIcon />
        </IconButton>
        <div className="sugerencias">
            <ul className="opciones">
                <li><strong>Ej: </strong></li>
                <li>Batman</li>
                <li>Hulk</li>
                <li>Wolverine</li>
                <li>Flash</li>
                <li>Superman</li>
            </ul>
        </div>
    </Paper>
);

export default SearchCharacters;
