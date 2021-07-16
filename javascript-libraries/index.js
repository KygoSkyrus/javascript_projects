var arr=[
    ["url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)","React.js","React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook."],
    ["url(https://angular.io/assets/images/logos/angular/angular.png)","Angular.js","AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."],
    ["url(https://i.pinimg.com/originals/81/53/7d/81537d4d5b76f89d653db2bed33b85ed.png)","Vue.js","Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects."],
    ["url(https://i.pinimg.com/originals/99/49/77/994977c48fde58ac674a2d05ba5a5efb.png)","Node.js","Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."]
];
var i=0;
function fun(dir=1){ //passing direction, 1 here is the fallback value
    i=(i+dir+arr.length)%arr.length;
        document.getElementById('img').style.backgroundImage=arr[i][0];
        document.getElementById('name').innerHTML=arr[i][1];
        document.getElementById('para').innerHTML=arr[i][2];                
}
/* xxxxx--not needed--xxx
var pre=document.getElementById('pre');
pre.addEventListener("click",function pre(){
    i=i? --i : arr.length-1;
    document.getElementById('img').style.backgroundImage=arr[i][0];
        document.getElementById('name').innerHTML=arr[i][1];
        document.getElementById('para').innerHTML=arr[i][2];
});*/