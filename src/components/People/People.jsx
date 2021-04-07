import React from 'react'

const People = ({data}) => {
   console.log(data)
   return (
      <div>
         <h1>People</h1>
         <div className="grid">
            {data.map((people, i)=>{
               return(
                  <div className="col" key={i}>
                     <div className="card">
                        <div className="card__content">
                           <div className="card__header">
                              <h2>{people.name}</h2>
                           </div>
                           <div className="card__desc">
                              <strong>Gender</strong>
                              <p>{people.gender}</p>
                              <strong>Height</strong>
                              <p>{people.height}</p>
                              <strong>Mass</strong>
                              <p>{people.mass}</p>
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

export default People
