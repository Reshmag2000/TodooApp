// function checkLogin()
// {
//     const form = document.getElementById('form');
//     const username=document.getElementById("username");
//     const password=document.getElementById("password");
//     if(username ==="admin" && password === "12345")
//     {
//         document.getElementById("message").innerHTML = "Login successfully!";
//         message.style.color='green';
//         window.location.href = "home.html";

//     }
//     else
//     {
//         document.getElementById("message").innerHTML = "Login failed.please try again.";
//         message.style.color='red';
//     }
// }




const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateInputs()) {
        // If inputs are valid, navigate to another page
        window.location.href = "home.html";
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "admin" && passwordValue === "12345") {
        // Validation passed
        return true;
    } else {
        // Validation failed
        setError(username, 'Invalid credentials');
        setError(password, 'Invalid credentials');
        return false;
    }
};
