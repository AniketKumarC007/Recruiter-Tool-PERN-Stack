import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import image1 from "./image1.jpg";
import { useNavigate } from "react-router-dom";

const Candidate = () => {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const id = useParams().id;
   // console.log(id);
  const URL = `http://localhost:5000/candidates/${id}`;

  const fetchHandler = async () => {
    try {
      const response = await axios.get(URL);
       // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error while fetching Candidate ", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(URL);
      navigate('/candidates');
    } catch (error) {
      console.error("Error while deleting Candidate ", error);
    }
  };

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
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow rounded-lg p-6">
        {candidate && (
          <>
            <div className="flex items-center space-x-6 mb-4">
              <img
                className="h-24 w-24 rounded-full border-4 border-indigo-500"
                src={image1}
                alt="Profile face"
              />
              <div>
                <p className="text-xl text-gray-800 font-semibold">
                  {candidate.name}
                </p>
                <p className="text-sm text-gray-600">Developer</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Details
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="mt-5 border-t border-gray-200">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                    {candidate.name}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                    {candidate.email}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                    {candidate.phone}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Computed Score
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                    {parseInt(candidate.react_score) +
                      parseInt(candidate.node_score)}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Expected Salary
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
                    ${candidate.expected_salary}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Current Status
                  </dt>
                  <div className={` ${getStatusColor(candidate.status)}`}>
                    <p className="text-xs text-gray-800 px-2 py-1 font-semibold">
                      {candidate.status}
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Skills & Qualifications
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 font-semibold">
                    {candidate.skills_qualifications.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="pt-5 flex justify-between items-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <Link to="/candidates">
                    <button className="text-white bg-black hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex">
              <button
                  onClick={() => setShowOverlay(true)}
                  className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
                >
                  Delete
                </button>
                <Link to={`/candidates/update/${candidate.candidate_id}`}>
                  <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">
                    Edit
                  </button>
                </Link>
                
              </div>
            </div>
            {showOverlay && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-lg">
                  <p className="text-lg font-semibold mb-4">
                    Are you sure you want to delete this candidate?
                  </p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowOverlay(false)} 
                      className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-4"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete} 
                      className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Candidate;
