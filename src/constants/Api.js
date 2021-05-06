const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = "https://superheroapi.com/api/";
const api_token = "787793825508475/";
const searchName = "search/"

export const getCharacterData = character_name => `${cors_anywhere}${base_url}${api_token}${searchName}${character_name}`;

/*
export const characterSelected = [
    {_id: 1, name: 'A-Bomb', selected: false},
    {_id: 2, name: 'Abe Sapien', selected: false},
    {_id: 3, name: 'Abin Sur', selected: false},
    {_id: 4, name: 'Abomination', selected: false},
    {_id: 5, name: 'Abraxas', selected: false},
    {_id: 6, name: 'Absorbing Man', selected: false},
    {_id: 7, name: 'Adam Monroe', selected: false},
    {_id: 8, name: 'Adam Strange', selected: false},
    {_id: 9, name: 'Agent 13', selected: false},
    {_id: 10, name: 'Agent Bob', selected: false},
    {_id: 11, name: 'Agent Zero', selected: false},
    {_id: 12, name: 'Air-Walker', selected: false},
    {_id: 13, name: 'Ajax', selected: false},
    {_id: 14, name: 'Alan Scott', selected: false},
    {_id: 15, name: 'Alex Mercer', selected: false},
    {_id: 16, name: 'Alex Woolsly', selected: false},
    {_id: 17, name: 'Alfred Pennyworth', selected: false},
    {_id: 18, name: 'Alien', selected: false},
    {_id: 19, name: 'Allan Quatermain', selected: false},
    {_id: 20, name: 'Amazo', selected: false}
];
*/