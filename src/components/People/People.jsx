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
                           <div className="card__header">{people.name}</div>
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
