const express = require("express");
const router = express.Router();
const pool = require('../database');
const {getACandidadte,
    getAllCandidadtes,
    updateCandidate,
    addCandidate,
    deleteCandidate} = require("../controllers/candidateControllers") ;
const validateRequestBody = require("../middleware/validationMiddleware") ;
const computeScore = require("../middleware/computeScoreMiddleware");
// All Required CRUD Operations 

router.get("/",getAllCandidadtes );
router.post("/",validateRequestBody,computeScore, addCandidate);  
router.get("/:id",getACandidadte);
router.put("/:id",updateCandidate);
router.delete("/:id", deleteCandidate);

module.exports = router ; 