import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobsCategory from './JobsCategory';


const Home = () => {
    const jobscategory= useLoaderData()
    return (
      <>
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://preview.colorlib.com/theme/joblab/assets/img/hero/hero-man.png.webp" className=" rounded-lg" />
    <div className=''>
      <h1 className="text-5xl font-bold">Searching For a Job!</h1><br />
      <h1 className="text-5xl font-bold text-">Find the <span className='text-blue-300'>Best StartUp</span> That You Feet You</h1><br />
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mt-12 mb-12'>
           
           {
             jobscategory.map(job=><JobsCategory
             key={jobscategory._id}
             job={job}
             ></JobsCategory>)
           }
         </div>
      </>
        
    );
};

export default Home;