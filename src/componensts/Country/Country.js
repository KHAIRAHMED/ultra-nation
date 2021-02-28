import React from 'react';

const Country = (props) => {
    const {name,flag,population,region}=props.country;
    const handleAddedCountry=props.handleAddedCountry
    return (
        <div style={{border:"1px solid red"}}>
            <h1>Country:{name}</h1>
            <img style={{height:"100px"}} src={flag} alt=""/>
            <p><small>population :{population}</small></p>
            <p>Region : {region}</p>
            <button onClick={()=>handleAddedCountry(props.country)} >Added Country</button>

        </div>
    );
};

export default Country;