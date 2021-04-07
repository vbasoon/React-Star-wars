import React from 'react'

const Home = ({data}) => {
   console.log(data);
   return (
      <div>
         <h1>Home</h1>
         <div className="grid">
            {data.map((film, i)=>{
               return(
                  <div className="col" key={i}>
                     <div className="card">
                        <div className="card__content">
                           <div className="card__header">{film.title}</div>
                        </div>
                     </div>
                  </div>
               )
            })}
            
         </div> 
      </div>
   )
}

export default Home
