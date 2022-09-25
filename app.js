// Your web app's Firebase configuration (ENTER YOUR FIREBASE CONFIGURATION DETAILS)
 const firebaseConfig = {
    apiKey: "AIzaSyDXLcxe9TYHNvyx-6hewPQe_4AY8apu2Ac",
    authDomain: "e-guide-f99cd.firebaseapp.com",
    projectId: "e-guide-f99cd",
    storageBucket: "e-guide-f99cd.appspot.com",
    messagingSenderId: "281671670860",
    appId: "1:281671670860:web:b490689d3999be26c968e9"
  };




// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var form = document.querySelector('#loginForm');
var r_form = document.querySelector('#registerForm');
var reset_form = document.querySelector('#resetForm');
var message = document.querySelector('#messageDiv');
var message_value = document.querySelector('.message');
var sign_out = document.querySelector("#signOut");

// check if user is logged in or not
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if(window.location.pathname != '/home.html'){
            window.location = 'home.html';
        }
    } else {
        if(window.location.pathname === '/home.html'){
            window.location = 'index.html';
        }
    }
});

// user login
if(form){
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = form.email.value;
        let password = form.password.value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location = 'home.html';
        })
        .catch((error) => {
            message.style.display = 'block';
            message_value.innerText = error.message;
            setTimeout(function(){
                message.style.display = 'none';
            }, 3000);
        });
    })
}

// user register
if(r_form){
    r_form.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = r_form.email.value;
        let password = r_form.password.value;
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location = 'home.html';
        })
        .catch((error) => {
            message.style.display = 'block';
            message_value.innerText = error.message;
            setTimeout(function(){
                message.style.display = 'none';
            }, 3000);
        });
    })
}

// password reset 
if(reset_form){
    reset_form.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = reset_form.email.value;
    
        firebase.auth().sendPasswordResetEmail(email)
        .then((userCredential) => {
            message.style.display = 'block';
            message_value.innerText = 'Email has been send!';
            window.location = 'index.html';
        })
        .catch((error) => {
            message.style.display = 'block';
            message_value.innerText = error.message;
            setTimeout(function(){
                message.style.display = 'none';
            }, 3000);
        });
    })
}

// sign out  
if(sign_out){
    sign_out.addEventListener('click', function(e) {
        firebase.auth().signOut().then(() => {
            window.location = 'index.html';
        }).catch((error) => {
        // An error happened.
        });
    })
}

//Courses list {Dynamic Adding}

const courses = ["Engineering Chemistry",
    "Engineering Mechanics",
    "Engineering Graphics",
    "Computer Programming",
    "MA101 Calculus",
    "MA102 Differential Equations",
    "Basics of Civil Engineering",
    "Basics of Mechanical Engineering",
    "Basics of Electrical Engineering",
    "Basics of Electronics Engineering"]

const Links = ["work.html","work.html","work.html","work.html","work.html","work.html","work.html","work.html","work.html","work.html"];

const IMG_URL = ["https://media.istockphoto.com/photos/one-small-adjustment-picture-id887365772?b=1&k=20&m=887365772&s=170667a&w=0&h=X-0GiZsROlQ5pW0XdhVwrAx0VKRWHhpSYNZVCXwVD1s=","https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lY2hhbmljYWx8ZW58MHx8MHx8&w=1000&q=80","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg","assets/images/5-1200x500.jpg",]

const main = document.getElementById('main');
const bgDiv = document.querySelectorAll('#course');



// Courses adding to html

console.log(main);
var i;
main.innerHTML='';

for(i=0;i<courses.length;i++){
    maincourse(courses);
}

function maincourse(pars){
    
    const courseEl = document.createElement('div');
    courseEl.classList.add('course');
    courseEl.setAttribute('id','course');
    courseEl.innerHTML = `
    <a href="./${Links[i]}">
    <div class="course" style="background-image: url(${IMG_URL[i]}) ;"
    <div >
    <h3 class="course-Name">${pars[i]}</h3>
    </div>
    </div>
    </a>        
    `
    main.appendChild(courseEl);  
};

console.log(bgDiv);




   
