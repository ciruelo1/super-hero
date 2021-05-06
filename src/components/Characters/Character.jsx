import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';

const Character = ({ characterData }) => (
    <Paper className="character-container">
        {characterData.results.map(character => {
            const {id, name, powerstats, biography, appearance, work, connections, image} = character;
            const {intelligence, strength, speed, durability, power, combat} = powerstats;
            const {"full-name": fullname, "alter-egos" : alteregos, "place-of-birth": placeofbirth, "first-appearance": firstappearance, publisher, alignment} = biography;
            const {gender, race, height, weight, "eye-color": eyecolor, "hair-color": haircolor} = appearance;
            const {occupation, base} = work;
            const {"group-affiliation": groupaffiliation, relatives} = connections;
            const {url} = image;
            return(
                <Fragment>
                    <div className='content'>
                        <div className='title-img'>
                            <h3>{`${name} #${id}`}</h3>
                            <img className='principal-img' src={url} alt={name} width='50' height='100'/>
                        </div>
                        <ul className="info">
                            <li><h4>Apariencia</h4></li>
                            <li><strong>Genero: </strong>{gender}</li>
                            <li><strong>Raza: </strong>{race}</li>
                            <li><strong>Altura: </strong>{height[1]}</li>
                            <li><strong>Peso: </strong>{weight[1]}</li>
                            <li><strong>Color de Ojos: </strong>{eyecolor}</li>
                            <li><strong>Color de Pelo: </strong>{haircolor}</li>
                        </ul>
                        <ul className="info">
                            <li><h4>Estadisticas</h4></li>
                            <li><strong>Inteligencia: </strong>{intelligence}</li>
                            <li><strong>Fuerza: </strong>{strength}</li>
                            <li><strong>Velocidad: </strong>{speed}</li>
                            <li><strong>Resistencia: </strong>{durability}</li>
                            <li><strong>Poder: </strong>{power}</li>
                            <li><strong>General: </strong>{combat}</li>
                        </ul>
                        <ul className="info">
                            <li><h4>Biografia</h4></li>
                            <li><strong>Nombre Completo: </strong>{fullname}</li>
                            <li><strong>Alterego: </strong>{alteregos}</li>
                            <li><strong>Lugar de Nacimiento: </strong>{placeofbirth}</li>
                            <li><strong>Primera Aparicion: </strong>{firstappearance}</li>
                            <li><strong>Editora: </strong>{publisher}</li>
                            <li><strong>Alineacion: </strong>{alignment}</li>
                        </ul>
                        <ul className="info">
                            <li><h4>Profesion</h4></li>
                            <li><strong>Ocupacion: </strong>{occupation}</li>
                            <li><strong>Base: </strong>{base}</li>
                        </ul>
                    </div>
                    <ul className="conexiones">
                        <li><h4>Conexiones</h4></li>
                        <li><strong>Afiliaciones: </strong>{groupaffiliation}</li>
                        <li><strong>Relaciones: </strong>{relatives}</li>
                    </ul><br/>
    
                    <span>///////////////////////////////////////////////////////////////
                        //////////////////////////////////////////////////////////////////
                        /////////////////////////////////////////////////////////////////
                    </span>
                </Fragment>
            )
        })}
    </Paper>
);

export default Character;
