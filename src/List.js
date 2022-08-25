

import React from 'react';

const List = ({people}) => {
  return (
    <>
     {people.map((val)=>{
      const{name,age,image,id}=val;
      return <div key={id}>
        <div className='person'>
        <img src={image}></img>
        <ul>
        <li><h4>{name}</h4></li>
        <li><p>{age} years</p></li>
        </ul>
        </div>

      </div>
     })}
    </>
  );
};

export default List;
