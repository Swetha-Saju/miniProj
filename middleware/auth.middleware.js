const isAuthenticated = (req, res, next) => {
    if(req.session.user) {
        return next();
    }
    res.redirect('/');
}

const isAdmin=(req,res,next)=>{
    if(req.session.user.role==='admin'){
        // console.log('admin');
        return next();
    }
    res.redirect('/dashboard');
}

module.exports = {isAuthenticated,isAdmin};