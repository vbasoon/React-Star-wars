import React from 'react'

const Planets = ({data}) => {
   console.log(data);
   return (
      <div>
         <h1>Planets</h1>
         <div className="grid">
            {data.map((planet, i)=>{
               return(
                  <div className="col" key={i}>
                     <div className="card">
                        <div className="card__content">
                           <div className="card__header">
                              <h2>{planet.name}</h2>
                           </div>
                           <div className="card__desc">
                              <strong>Climate</strong>
                              <p>{planet.climate}</p>
                              <strong>Diameter</strong>
                              <p>{planet.diameter}</p>
                              <strong>Population</strong>
                              <p>{planet.population}</p>
                              <strong>Terrain</strong>
                              <p>{planet.terrain}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
            
         </div> 
      </div>
   )
}

export default Planets
