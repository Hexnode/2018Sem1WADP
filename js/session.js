//check if current user is in session or local storage 
if ("current_user" in (sessionStorage || localStorage)){
	var is_logged_in = true;
}
else{
	var is_logged_in = false;
}
console.log(is_logged_in);

//storing login
function store_login_data() {
	var obj={};
	obj["user_email"]=document.getElementById("login_email").value;
	obj["user_password"]=document.getElementById("login_password").value;
	sessionStorage["current_user"]=JSON.stringify(obj);
	location.href="index.html";
}
