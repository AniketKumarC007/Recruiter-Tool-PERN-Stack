const pool = require("../database");
const getAllCandidadtes = async (req, res) => {
  try {
    const allCandidates = await pool.query("SELECT * FROM Candidate");
    return res.status(200).json(allCandidates.rows);
  } catch (err) {
    console.error(err.message);
  }
};
const getACandidadte = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await pool.query(
      "SELECT * FROM Candidate WHERE candidate_id = $1",
      [id]
    );

    return res.status(200).json(candidate.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};



const addCandidate = async (req, res) => {
  try {
    // console.log (req.body) ;
    const {
      name,
      email,
      phone,
      status,
      expected_salary,
      react_score,
      node_score,
      skills_qualifications,
    } = req.body;

    console.log (req.body) ;

    // const newCandidate = await pool.query(
    //   "INSERT INTO Candidate (name, email, phone, status, expected_salary, react_score, node_score, skills_qualifications) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    //   [
    //     name,
    //     email,
    //     phone,
    //     status,
    //     expected_salary,
    //     react_score,
    //     node_score,
    //     skills_qualifications,
    //   ]
    // );

    // return res.status(201).json(newCandidate.rows[0]);
    return res.send ("OK") ;
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Error adding candidate");
  }
};

const updateCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      status,
      expected_salary,
      react_score,
      node_score,
      skills_qualifications,
    } = req.body;

    const updateCandidate = await pool.query(
      "UPDATE Candidate SET name = $1, email = $2, phone = $3, status = $4, expected_salary = $5, react_score = $6, node_score = $7, skills_qualifications = $8 WHERE candidate_id = $9",
      [
        name,
        email,
        phone,
        status,
        expected_salary,
        react_score,
        node_score,
        skills_qualifications,
        id,
      ]
    );

    return res.status(200).json("Candidate was updated!");
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Error updating candidate");
  }
};

const deleteCandidate = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCandidate = await pool.query(
        "DELETE FROM Candidate WHERE candidate_id = $1",
        [id]
      );
  
      return res.status(200).json("Candidate was deleted!");
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Error deleting candidate");
    }
  };

module.exports = {
    getACandidadte,
    getAllCandidadtes,
    updateCandidate,
    addCandidate,
    deleteCandidate
};