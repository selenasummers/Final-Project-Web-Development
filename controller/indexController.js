const Job = require('../models/jobModel');


const homeRetrieve = async(req, res) => {
    const job = await Job.find();
   
     res.render('welcome', {
       job : job
     })

}

const customerHome = async(req, res) => {
  const job = await Job.find();
  console.log(job);
  console.log(req.user);
   res.render('customerviews/home', {
     job : job,
     user : req.user
   })

}

module.exports = {
    homeRetrieve,
    customerHome
}