
CREATE DATABASE candidate;

\c candidate;

CREATE TABLE Candidate (
    candidate_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    status VARCHAR(50),
    expected_salary NUMERIC,
    react_score NUMERIC,
    node_score NUMERIC,
    skills_qualifications TEXT[]
);

INSERT INTO Candidate (name, email, phone, status, expected_salary, react_score, node_score, skills_qualifications)
VALUES ('Peter Parker', 'peterparker@gmail.com', '1234567890', 'Interview Scheduled', 75000, 2, 3, ARRAY[ 'HTML', 'CSS','JavaScript', 'React', 'Node.js', 'MongoDB', 'mySQL']);