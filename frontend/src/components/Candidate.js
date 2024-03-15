import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import image1 from "./image1.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Candidate = () => {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);
  const id = useParams().id;
  console.log(id);
  const URL = `http://localhost:5000/candidates/${id}`;
  const fetchHandler = async () => {
    try {
      const response = await axios.get(URL);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error while fectching Candidate ", error);
    }
  };

  const handleDelete = async()=>{

    try {
      await axios.delete(URL);
      navigate('/candidates');
    } catch (error) {
      console.error("Error while deleting Candidate ", error);
    }

  }

  useEffect(() => {
    fetchHandler().then((result) => setCandidate(result));
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
    <div  className="flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow rounded-lg p-6">
      {candidate && <>
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
            
            <button type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Edit</button>
            </Link>
            <button type="button" onClick= {handleDelete} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
          </div>
         
          
        </div>
        </>}
      </div>
    </div>
  )

}
export default Candidate;