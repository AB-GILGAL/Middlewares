 const welcome = (req, res) => {
     res.send("Hello Kibtiya")
 };

 const greet = (req, res) => {
     res.send("Have a wonderful day")
 };
 const protected = (req,res) => {
     res.send("You can see this because you are authenticated.")
 }

 module.exports = {
     welcome,
     greet,
     protected
 }