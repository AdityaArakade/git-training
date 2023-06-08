var nameError = document.getElementById('name-error');
var commError = document.getElementById('comm-error');
var genderError = document.getElementById('gender-error')
var submitError = document.getElementById('submit-error');
function validateName() {
    var name = document.getElementById('name').value;

    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validateComm() {
    var comm = document.getElementById('comment').value;

    if(comm.length == 0) {
        commError.innerHTML = 'Please type your comment';
        return false;
    }

    commError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}

function validateGender(){
    var gender1=document.getElementById("male");
    var gender2=document.getElementById("female");
    if(gender1.checked==true)
    {
        genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    else if(gender2.checked==true)
    {
        genderError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
    genderError.innerHTML="Gender is required";
    return false;
}

function validateForm() {
    if(!validateName() || !validateComm() ||  !validateGender()) {
        
        submitError.innerHTML = "All fields are compulsory";
        form.find(":invalid").first().focus();
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}