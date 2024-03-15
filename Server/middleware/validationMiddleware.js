const validateRequestBody = (req, res, next) => {
    const { name, email, phone, status, expected_salary, react_score, node_score, skills_qualifications } = req.body;
  
    if (!name) {
        return res.status(400).json({ error: 'Missing name field' });
    }
    if (!email) {
        return res.status(400).json({ error: 'Missing email field' });
    }
    if (!phone) {
        return res.status(400).json({ error: 'Missing phone field' });
    }
    if (!status) {
        return res.status(400).json({error : 'Select a status'}) ;
    }
    if (!expected_salary) {
        return res.status(400).json({ error: 'Missing expected salary field' });
    }
    req.body.expected_salary = parseInt(expected_salary) ;
    if (!react_score) {
        return res.status(400).json({ error: 'Missing ReactJS experience' });
    }
    if (!node_score) {
        return res.status(400).json({ error: 'Missing NodeJS experience' });
    }
    if (skills_qualifications.length === 0) {
        return res.status(400).json({ error: 'Atleast one skill should be present' });
    }

    // if (!name || !email || !phone || !status || !expected_salary || !react_score || !node_score || !skills_qualifications) {
       
    // }

    if (expected_salary < 0) {
        return res.status(400).json({ error: 'Expected salary should be non-negative' });
    }
    
    if (phone.length !== 10 || isNaN(phone)) {
        return res.status(400).json({ error: 'Invalid phone number' });
    }

    // To check Skills Array should not have duplicate entries 

    const uniqueSkills = new Set(skills_qualifications);
    if (uniqueSkills.size !== skills_qualifications.length) {
        return res.status(400).json({ error: 'Skills qualifications should not contain duplicate entries' });
    }

    next();
  };

module.exports = validateRequestBody ;
  
 