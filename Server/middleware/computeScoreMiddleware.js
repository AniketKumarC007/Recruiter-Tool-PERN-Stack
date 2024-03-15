const computeScore = (req,res,next)=>{
    const {react_score, node_score} = req.body ;
    
    if (react_score === "Less than a year"){
        req.body.react_score = 1;
         
    }
    else if (react_score ==="1-2 years"){
        req.body.react_score = 2;
         
    }
    else {
        req.body.react_score = 3;
         
    }

    if (node_score === "Less than a year"){
        req.body.node_score= 1;
       
    }
    else if (node_score ==="1-2 years"){
        req.body.node_score = 2;
         
    }
    else {
        req.body.node_score = 3;
        
    }
    
    next();

}


module.exports = computeScore ;