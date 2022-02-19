const passwordSymbols = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
const passwordBigLetters = /[A-Z]/g;
const passwordSmallLetters = /[a-z]/g;
const passwordNumbers = /[0-9]/g;
const emailSyntax = /(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/;
const postalCodeSyntax = "^\\d{2}[- ]{0,1}\\d{3}$";

function check() {	
	var password = document.getElementById('password').value;
	var email = document.getElementById('email').value;
	var name = document.getElementById('name').value;
	var lastName = document.getElementById('lastName').value;
	var birthDate = document.getElementById('birthDate').value;
	var postalCode = document.getElementById('postalCode').value;

//Name

	if(name == "") {
		document.getElementById("nameError").innerHTML = "Nie podano imienia";
		document.getElementById("name").style.borderColor = "red";
		document.getElementById("nameError").style.color = "red";
	}

	else {
		document.getElementById("name").style.borderColor = "green";
		document.getElementById("nameError").style.color = "green";
		document.getElementById("nameError").innerHTML = "Ok";  
	}

//Last name

	if(lastName == "") {
		document.getElementById("lastNameError").innerHTML = "Nie podano nazwiska";
		document.getElementById("lastName").style.borderColor = "red";
		document.getElementById("lastNameError").style.color = "red";
	}

	else {
		document.getElementById("lastName").style.borderColor = "green";
		document.getElementById("lastNameError").style.color = "green";
		document.getElementById("lastNameError").innerHTML = "Ok";  
	}

//Birth date

	if(birthDate == "") {
		document.getElementById("birthDateError").innerHTML = "Nie podano daty urodzenia";
		document.getElementById("birthDate").style.borderColor = "red";
		document.getElementById("birthDateError").style.color = "red";
	}

	else {
		document.getElementById("birthDate").style.borderColor = "green";
		document.getElementById("birthDateError").style.color = "green";
		document.getElementById("birthDateError").innerHTML = "Ok";  
	}

//Postal Code

	if(!postalCode.match(postalCodeSyntax)){
		document.getElementById("postalCodeError").innerHTML = "Podano nieprawidłowy kod pocztowy";
		document.getElementById("postalCode").style.borderColor = "red";
		document.getElementById("postalCodeError").style.color = "red"; 
	}

	else {
		document.getElementById("postalCode").style.borderColor = "green";
		document.getElementById("postalCodeError").style.color = "green";
		document.getElementById("postalCodeError").innerHTML = "Ok";  
	}

//Email

	if(!email.match(emailSyntax)) {
		document.getElementById("emailError").innerHTML = "Podano nieprawidłowy adres e-mail";
		document.getElementById("email").style.borderColor = "red";
		document.getElementById("emailError").style.color = "red";
	}
	else {
		document.getElementById("email").style.borderColor = "green";
		document.getElementById("emailError").style.color = "green";
		document.getElementById("emailError").innerHTML = "Ok";  
	}

//Password

	if(password.length < 8) {
		document.getElementById("passwordError").innerHTML = "Hasło jest zbyt krótkie (musi zawierać min. 8 znaków)";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("passwordError").style.color = "red";
		return false;
	}

	if(!password.match(passwordSymbols)){
        document.getElementById("passwordError").innerHTML = "Hasło musi zawierać znak specjalny";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("passwordError").style.color = "red"; 
		return false;
    }
	
	if(!password.match(passwordBigLetters)) {
		document.getElementById("passwordError").innerHTML = "Hasło musi zawierać dużą literę";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("passwordError").style.color = "red"; 
		return false;
	}

	if(!password.match(passwordSmallLetters)){
        document.getElementById("passwordError").innerHTML = "Hasło musi zawierać małą literę";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("passwordError").style.color = "red"; 
		return false;
    }

    if(!password.match(passwordNumbers)){
        document.getElementById("passwordError").innerHTML = "Hasło musi zawierać cyfrę";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("passwordError").style.color = "red";
		return false;
    }

    if(password.match(' ')){
        document.getElementById("passwordError").innerHTML = "Hasło nie może zawierać spacji";
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("passwordError").style.color = "red";
		return false;
    }

	else {
		document.getElementById("password").style.borderColor = "green";
		document.getElementById("passwordError").style.color = "green";
		document.getElementById("passwordError").innerHTML = "Ok";  
	}
	var button = document.getElementById("button");
	button.value = 'Wyślij'; // will just add a hidden value
	button.innerHTML = 'Wyślij';
	var button = document.getElementById('button');
	button.onclick = send;
}

function send() {
	window.open('index2.html', "_self");
}