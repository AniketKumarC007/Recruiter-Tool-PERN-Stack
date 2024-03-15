import {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AddCandidate = () =>{
    const navigate = useNavigate();
    const [formData , setFormData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            status: "",
            expected_salary: "",
            react_score: "",
            node_score: "",
            skills_qualifications: [],
            newSkill :"",
        }
    )

    const [errMsg , setErrMsg] = useState(null) ;
    
    // Final Submission Handler 

    const submitFormData = async () => {
        try {
          const response = await axios.post('http://localhost:5000/candidates', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          setErrMsg(null) ;
          console.log('Form data submitted successfully:', response.data);
          navigate('/candidates');
        } catch (err) {
          // console.log ( "In Here") ;
          // console.log (err.response.data.error) ;
          setErrMsg(err.response.data.error) ;
          // console.error('Error submitting form data:', err.message);
        }
    };
    
    


    // Form Update Handlers

    const handleChange = (event)=>{

        
        const { name, value } = event.target;

        // console.log ({name ,value})

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }
    const handleAddSkill = () => {


        if (formData.newSkill.trim() !== "") {
            setFormData((prevData) => ({
                ...prevData,
                skills_qualifications: [...prevData.skills_qualifications, prevData.newSkill],
                newSkill: "", 
            }));
        }


    };
    
    const handleDeleteSkill = (index) => {


        const updatedSkills = formData.skills_qualifications.filter((_, i) => i !== index);
        setFormData((prevData) => ({
            ...prevData,
            skills_qualifications: updatedSkills,
        }));

        
    };
    


    // Submit Handlers 

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData); 
        submitFormData();
    }

    // jsx form component 

    return (
    
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* form component begins from here */}
                <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
             Name
           </label>
           <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
             Email
           </label>
           <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
             Phone
           </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Current Status 
           </label>
           <select
            id="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">Select Current Status</option>
            <option value="Contacted">Contacted</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Offer Extended">Offer Extended</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expected_salary">
           Expected Salary
           </label>
           <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="expected_salary"
            type="number"
            placeholder="Expected Salary"
            name="expected_salary"
            value={formData.expected_salary}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="node_score">
          Node Score
         </label>
           <select
            id="node_score"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="node_score"
            value={formData.node_score}
            onChange={handleChange}
          >
            <option value="">Select NodeJS Experience</option>
            <option value="Less than a year">Less than a year experience</option>
            <option value="1-2 years">1-2 years experience</option>
            <option value="Over 2 years">Over 2 years experience</option>
          </select>
        </div>

        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="react_score">
             React Score
           </label>
           <select
             id="react_score"
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             name="react_score"
             value={formData.react_score}
             onChange={handleChange}
           >
             <option value="">Select ReactJS Experience</option>
             <option value="Less than a year">Less than a year experience</option>
             <option value="1-2 years">1-2 years experience</option>
             <option value="Over 2 years">Over 2 years experience</option>
           </select>
        </div>

    

       {/* Add Skills Entry  */}
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills_qualifications">
            Skills/Qualifications
          </label>
          <div className="flex items-center mb-2">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="skills_qualifications"
              type="text"
              placeholder="Add skill"
              name="newSkill"
              value={formData.newSkill}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
            >
              Add
            </button>
          </div>
          <div>
            <div className="mr-10">
            {formData.skills_qualifications.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteSkill(index)}
                  className="ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500 hover:text-red-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
             
            ))}
             </div>
          </div>
        </div>

        {/* Error Message from Backend if any */}
        
        {errMsg && (
          <p className="text-sm text-red-500 mt-1">{errMsg}</p>
        )}


        {/* Submission Button */}

        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
            

        </form>

        <button
      className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      <Link to="/candidates" className="text-white">
        &lt; Back
      </Link>
    </button>
        
        </div>
    )

};
export default AddCandidate ;

  
        