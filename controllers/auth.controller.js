const login = (req, res) => {
    res.send("Log in successfully");
}

const register = (req, res) => {
    res.send("Registered successfully")
}

module.exports = {
    login,
    register
}