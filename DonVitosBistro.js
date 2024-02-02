function menuBar(event, menuItem) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "active";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(menuItem).style.display = "block";
    event.currentTarget.className += " active";
  }


let parts = ["info", "donvitosbistro", "com", "&#46;", "&#64;"];
let securedEmail = parts[0] + parts[4] + parts[1] + parts[3] + parts[2];
document.getElementById("securedEmail").innerHTML = securedEmail;


function myFunction() {
  let fname=document.getElementById('fname');
  let lname=document.getElementById('lname');
  let date=document.getElementById('date');
  let time=document.getElementById('time');
  let phone=document.getElementById('phone');
  let numberOfGuests=document.getElementById('numberOfGuests');
  //document.write("<h2>You're reservation has been approved!<p>Have a nice day!</p>/");"

}
  





