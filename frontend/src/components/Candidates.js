import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image1 from "./image1.jpg" ;
// const URL = "http://localhost:5000/candidates";
const URL = "https://recruiter-tool-pern-stack.vercel.app/candidates";
const fetchHandler = async() =>{
    try{
        const response = await axios.get(URL);
        return response.data;
    }catch(error){
        console.error("Error fetching candidates:", error);
        return [];
    }
}
// return: Finally, the return statement is used to return the 
// result of the entire expression, which is the data extracted 
// from the response of the HTTP GET request made using Axios.



const Candidates = ()=>{
    const [candidates , setCandidates] = useState([]) ;

      useEffect(() => {
    // fetchHandler().then( (result) => console.log (result)) ;
    fetchHandler().then((result) => {
      setCandidates(result);
    });
  }, []);

  const getStatusColor = (status) => {
    if (status === "Contacted") {
      return "bg-purple-300";
    } else if (status === "Interview Scheduled") {
      return "bg-blue-300";
    } else if (status === "Offer Extended") {
      return "bg-yellow-300";
    } else if (status === "Hired") {
      return "bg-green-300";
    } else if (status === "Rejected") {
      return "bg-red-300";
    } else {
      return "bg-gray-200";
    }
  };
  
return (
    <div className="container mx-auto py-8">
      
      <h1 className="text-3xl font-bold mb-6">List of Candidates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div key={candidate.candidate_id} className="">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img className="h-24 w-24 rounded-full border-4 border-indigo-500" src={image1} alt="Profile face" />
          <div>
            <p className="text-xl text-gray-800 font-semibold">{candidate.name}</p>
            <p className="text-sm text-gray-600">Developer</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Details</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
        </div>
        <div className="mt-5 border-t border-gray-200">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">{candidate.name}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">{candidate.email}</dd>
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">{candidate.phone}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Computed Score</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">{ parseInt(candidate.react_score) + parseInt(candidate.node_score)}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Expected Salary</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">${candidate.expected_salary}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Current Status</dt>
              <div className={` ${getStatusColor(candidate.status)}`}>
              <p className="text-xs text-gray-800 px-2 py-1 font-semibold">{candidate.status}</p>
            </div>
            </div>
            <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">Skills & Qualifications</dt>
                  <dd className="mt-1 text-sm text-gray-900 font-semibold">
                    {candidate.skills_qualifications.map((skill, index) => (
                      <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </dd>
                </div>
          </dl>
          
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <Link to ={`/candidates/${candidate.candidate_id}`}>
            
            <button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Manage</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
        ))}
      </div>
    </div>
  );

};


export default Candidates ;


