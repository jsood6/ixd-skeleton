'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
  //$('#signOutBtn').show();
  
	/*$('.friend a').click(function(e){
		e.preventDefault();
		$(this).find('h3').text(anagrammedName($(this).find('h3').text()));
	});*/
});


/* 
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*function signOut() {
  //var auth2 = gapi.auth2.getAuthInstance();
  //console.log(auth2);
  //alert("yo");
 /* auth2.signOut().then(function () {
    console.log('User signed out.');
          
  });
 
  userSignedIn = false;
  //window.location.href = "https://a7-beauti.herokuapp.com";
  $('#signOutBtn').hide();
  //$('#nextPageLoginBtn').hide();*/

      
//}

/*function hideSignOutBtn(){
  ('#signOutBtn').hide();
}*/

