function viewCourse() {
    let tryIt = document.createElement('div')  
    tryIt.innerHTML = "Click to view course!";
    tryIt.className = "font-monospace fs-3 d-flex justify-content-center";
    document.getElementById("trythings").appendChild(tryIt);  
} 

function noView() {
    const element = document.getElementById("trythings");
    element.remove(); 
} 