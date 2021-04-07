import React from 'react'

const Home = ({data}) => {
   console.log(data);
   return (
      <div>
         <h1>Films</h1>
         <div className="grid">
            {data.map((film, i)=>{
               return(
                  <div className="col" key={i}>
                     <div className="card">
                        <div className="card__content">
                           <div className="card__header">
                              <h2>{film.title}</h2>
                              <h3>{film.director}</h3>
                              <strong>
                                 <p>{film.release_date}</p>
                              </strong>
                           </div>
                           <div className="card__desc">
                              <strong>Description</strong>
                              <p>{film.opening_crawl}</p>
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

export default Home
