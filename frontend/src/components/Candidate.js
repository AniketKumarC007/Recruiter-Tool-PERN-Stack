import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import img1 from "./image.png";
const Candidate = () => {
  const [candidate, setCandidate] = useState(null);
  const id = useParams().id;
  console.log(id);
  const URL = `http://localhost:5000/candidates/${id}`;
  const fetchHandler = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error while fectching Candidate ", error);
    }
  };

  useEffect(() => {
    fetchHandler().then((result) => setCandidate(result));
  }, []);

  const handleUpdateDetails = () => {
    // Implement your logic to update candidate details
    console.log("Updating candidate details...");
  };

  const handleUpdateStatus = () => {
    // Implement your logic to update candidate status
    console.log("Updating candidate status...");
  };

  return (
    <div className="container mx-auto py-8  flex" >
      {candidate && (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md  ">
          <div className="relative overflow-hidden">
            <img
              className=" w-half h-32 "
              src={img1}
              alt="Candidate"
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-3xl font-bold text-black">
                {candidate.name}
              </h1>
              <p className="text-black-200">{candidate.email}</p>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Candidate Details</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> {candidate.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Status:</span> {candidate.status}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Expected Salary:</span> $
              {candidate.expected_salary}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">React Score:</span>{" "}
              {candidate.react_score}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Node Score:</span>{" "}
              {candidate.node_score}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Skills/Qualifications:</span>{" "}
              {candidate.skills_qualifications.join(", ")}
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleUpdateDetails}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Update Details
              </button>
              <button
                onClick={handleUpdateStatus}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidate;
