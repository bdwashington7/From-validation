var  firstname=getElementById('firstName');
var lastname=getElementById('lastName');
var password=getElementById('password');
var email=getElementById('emailAddress');
var  submit=getElementById('sendEmail');
function firstName(){
	if(firstname.length!=0 && firstname.length<=50){
		document.write.getElementById('name').innerText= firstname+"  "+lastname;
	}else
	{ 
		document.write.getElementById('name').innerText="Invalate input";
	}
}
