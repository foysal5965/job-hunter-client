import React from 'react';
import { Link } from 'react-router-dom';

const JobsCategory = ({job}) => {
    const{name,img,id}=job
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" className='rounded h-44' /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions justify-end">
      <Link to={`/alljobs/${id}`}><button className="btn bg-gradient-to-r from-emerald-500 to-lime-500 rounded">See All Jobs</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobsCategory;