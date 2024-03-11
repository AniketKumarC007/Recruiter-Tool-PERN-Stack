import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const URL = "http://localhost:5000/candidates";
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

return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">List of Candidates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.candidate_id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">{candidate.name}</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span>{" "}
              {candidate.email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span>{" "}
              {candidate.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Status:</span>{" "}
              {candidate.status}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Expected Salary:</span>{" "}
              ${candidate.expected_salary}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Computed Score:</span>{" "}
              {parseFloat(candidate.react_score) + parseFloat(candidate.node_score)}
            </p>
            <div className="flex justify-between items-center">
            
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Skills/Qualifications:</span>{" "}
                  {candidate.skills_qualifications.join(", ")}
                </p>
              </div>
            </div>
            <Link
              to={`/candidates/${candidate.candidate_id}`}
              className="block text-center mt-4"
            >
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-0">
                Manage Status
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

};

export default Candidates ;





//   // Here you can use the candidates state in your component
//   console.log("Candidates:", candidates);

//   return (
//     <>
//       {/* Display your candidates or other UI components */}
//       <div className="container">
//         {candidates.map((candidate) => (
//           <div key={candidate.candidate_id}>
//             <h2>{candidate.name}</h2>
//             <p>{candidate.email}</p>
//             {/* Add more candidate details here */}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Candidates;
