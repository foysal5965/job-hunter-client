import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const JobsCard = ({ job }) => {
    const { name, location, img,details,comapany } = job
    const{user}= useContext(AuthContext)
    return (
        <div>
            
                <div className="card w-58 lg:card-side bg-base-100 mb-6 shadow-xl p-6">
                <figure><img src={img} alt="Album" className='w-44 h-32 rounded-md' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="w-full text-sm">{details}</h2>
                    <h2 className="card-title">{comapany}</h2>
                    <p>{location}</p>
                    <div className="card-actions justify-end">
                        {
                            user?.uid ?
                            <Link to={job._id}><button className="btn bg-gradient-to-r from-emerald-500 to-lime-500 rounded">Apply Now</button></Link>
                            :
                            <Link to='/login'><button className="btn bg-gradient-to-r from-emerald-500 to-lime-500 rounded">Apply Now</button></Link>
                        }
                        
                    </div>
                </div>
            </div>
                
           
            
        </div>
    );
};

export default JobsCard;