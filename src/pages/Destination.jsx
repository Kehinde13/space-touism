import React, { useEffect, useState } from 'react';
import europa from '../assets/destination/image-europa.png';
import mars from '../assets/destination/image-mars.png';
import titan from '../assets/destination/image-titan.png';
import moon from '../assets/destination/image-moon.png'


function Destination() {
  const [planets, setPlanet] = useState([]) 
  const [value, setValue] = useState(0)

  const {name, description, distance, travel} = planets[value] || {};

  const images = [moon, mars, europa, titan] ;

  const fetchDestination = async () => {
    const res = await fetch('https://my-json-server.typicode.com/Kehinde13/demo.json/destinations')
    const data = await res.json()
    
     setPlanet(data);
  
  
  } 

  useEffect(() => {
    fetchDestination()
  }, []);


  return (
    <div>
      
      <section className='px-4 home destination'>
        <h1 className='pt-20 lg:ml-32 text-white md:text-2xl 
               lg:text-left text-xl uppercase mb-10 text-center'>
         <span className='text-gray-400'>01</span> pick  your destination
        </h1>

        <div className=' lg:grid grid-cols-2 gap-5
                        md:items-center lg:max-w-7xl 
                        lg:mx-auto '>
          <article>
             <img 
             src={images[value]} 
             alt={name} 
             title={name} 
             className="block mx-auto w-3/4 mb-10"
             /> 
          </article>

          <article className='text-center lg:text-left'>
            {planets.map((item, index) => (
              <button key={index} onClick={() => 
              setValue(index)} 
              className={`uppercase text-white text-2xl pb-2 mx-1 
                         ${index === value && "border-b border-white"}`}>
                {item.name}
              </button>
            ))}

            <h2 className='text-5xl font-bold text-white
                     mt-10 mb-5 uppercase tracking-widest'>
              {name}
            </h2>
            <p className='text-gray-400 pb-10'>
              {description}
            </p>
            <ul className='flex items-center justify-between flex-wrap 
                          border-t border-gray-400 py-10'>
              <li className='text-white md:text-4xl text-2xl'>
                 <span className='text-2xl block'>Avg. Distance</span> 
                {distance}
              </li>
              <li className='text-white md:text-4xl text-2xl'>
                <span className='text-2xl block'> Est. Travel Time </span>
                {travel}
              </li>
            </ul>
          </article>
        </div>
      </section>
      
    </div>
  )
}

export default Destination;
