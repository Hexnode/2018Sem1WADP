//need to use backtick(`) else javascript will throw unexpected token as it is multiline string
function navtest(){
if (is_logged_in == true){
	document.getElementById("myNavbar").innerHTML=`
	<ul class="nav navbar-nav">
		<li class="active"><a href="index.html">Home</a></li>
		<li><a href="timeline.html">Timeline</a></li>
		<li><a href="#">Social</a></li>
		<li><a href="#">Information</a></li>
		<li><a href="#">Discussion</a></li>
		<li><a href="#">Shop</a></li>
	</ul>
	<ul class="nav navbar-nav navbar-right">
		<li>

		</li>
	  </ul>
	`;
}
else{
	document.getElementById("myNavbar").innerHTML=`
	<ul class="nav navbar-nav">
		<li class="active"><a href="#">Home</a></li>
		<li><a href="#">Information</a></li>
		<li><a href="#">Discussion</a></li>
		<li><a href="#">Shop</a></li>
	</ul>
	<ul class="nav navbar-nav navbar-right">
		<li>
			<form id="container_navbar_login" class="form-inline" onsubmit="store_login_data();return false;">
				<div class="form-group">
					<label for="email">Email address:</label>
					<input type="email" class="form-control" id="login_email">
					<label for="pwd">Password:</label>
					<input type="password" class="form-control" id="login_password">
				<div class="checkbox">
					<label><input type="checkbox"> Remember me</label>
				</div>
				<button type="submit" class="btn btn-default" >Submit</button>
				</div>
			</form>
		</li>
	  </ul>
	`;
}
}
window.onload = navtest;
