const arr = [];


function signUp() {
    
    var email = document.getElementById('email').value
    
    var pass = document.getElementById('password').value
    var cpass = document.getElementById('cpassword').value
    var country = document.getElementById('country').value
    var firstname = document.getElementById('first-name').value
    var lastname = document.getElementById('last-name').value
    var address1 = document.getElementById('address1').value
    var address2 = document.getElementById('address2').value
    var companyname = document.getElementById('company-name').value
    var city = document.getElementById('city').value
    var zip = document.getElementById('zip').value
    var phonenumber = document.getElementById('phone-number').value
    if (email == "" || pass == "" || cpass == "" || firstname == "" || address1 == "" || city == "" || zip == "" || phonenumber == "") {
        alert("Fill all mandatory fields")
    }
    else {
        var obj = {
            email: email,
            pass: pass,
            cpass: cpassword,
            country: country,
            firstname: firstname,
            lastname: lastname,
            address1: address1,
            address2: address2,
            companyname: companyname,
            city: city,
            zip: zip,
            phonenumber: phonenumber,
        }
        arr.push(obj)
        localStorage.setItem('users', JSON.stringify(arr))
        alert('Sign UP Successful')
        window.location.href="login.html"
    }
}
/// login popup


const open = document.getElementById('login-popup')
const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')
function loginModal(){
    modal_container.classList.add('showModal');
}

function closeModal(){
    modal_container.classList.remove('showModal');
}
