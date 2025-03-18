require('dotenv').config();
const sendLogin = (req, res) => {
    if(req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('login');
}
const sendDashboard = (req, res) => {
    res.render('dashboard', { user: req.session.user });
}
const sendRegister = (req, res) => {
    res.render('register');
}
const sendQuiz = (req, res) => {   
    res.render('quiz');
}
// console.log(process.env.API_BASE_URL);
module.exports = {sendDashboard,sendLogin,sendRegister,sendQuiz};