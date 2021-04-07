import React from 'react'

const Planets = ({data}) => {
   return (
      <div>
         <h1>Planets</h1>
         <div className="grid">
            {data.map((planet, i)=>{
               return(
                  <div className="col" key={i}>
                     <div className="card">
                        <div className="card__content">
                           <div className="card__header">{planet.name}</div>
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
