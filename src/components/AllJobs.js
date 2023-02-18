import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import JobsCard from './JobsCard';

const AllJobs = () => {
    const jobs= useLoaderData()
    const{loading}= useContext(AuthContext)
    if(loading){
        // return <h2>loading</h2>
    }
    return (
    
        <div className='mt-12'>
            {
                jobs.map(job=><JobsCard
                key={jobs._id}
                job={job}
                ></JobsCard>)
            }
        </div>
    );
};

export default AllJobs;