import mysql from 'mysql'

const con = mysql .createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

con.connect(function(err){
    if(err){
        console.log("Failed to connect!")
    } else{
        console.log("Connect Successfully!")
    }
});

export default con;