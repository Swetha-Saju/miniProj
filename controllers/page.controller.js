require('dotenv').config();
const sendLogin = (req, res) => {
    if(req.session.user && req.session.user.role === 'user') {
        return res.redirect('/dashboard');
    }
    if(req.session.user && req.session.user.role === 'admin') {
        return res.redirect('/admin');
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
const sendAdmin = (req, res) => {
    res.render('admin',{user: req.session.user });
}
// console.log(process.env.API_BASE_URL);
module.exports = {sendDashboard,sendLogin,sendRegister,sendQuiz,sendAdmin};