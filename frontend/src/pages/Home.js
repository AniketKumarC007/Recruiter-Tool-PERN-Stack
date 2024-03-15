import { Link } from "react-router-dom";
const Home = ()=>{
    return(
        <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Welcome to Candidate Management System</h1>
          <div className="mb-8">
            <p className="text-lg mb-2">What would you like to do?</p>
            <div className="flex justify-center">
              <Link to="/candidates">
                <button className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-lg px-8 py-4 mr-4">
                  View All Candidates
                </button>
              </Link>
              <Link to="/add">
                <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-8 py-4">
                  Add Candidate
                </button>
              </Link>
            </div>
          </div>
          <p className="text-sm text-gray-500">Developed by Aniket</p>
        </div>
      </div>
    )

}
export default Home ;