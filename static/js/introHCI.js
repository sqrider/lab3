'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
        $("#testjs").text("Please wait..");
        $(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);

    $("#submitBtn").click(updateProject);
}

function updateProject(e){
    var projectNm = $("#project").val(); //project is the form id
    //update width
    $(projectNm).animate({
        width: $("#width").val()
    });
    //update text
    var newText = $('#description').val();
    $(projectNm + " .project-description").text(newText);
}

function projectClick(e){
    // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the element that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    //add project descriptions
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div style='display: none;' class='project-description'><p>Description of the project.</p></div>");
       $(containingProject).find(".project-description").fadeIn();
    } 
    else {
        $(containingProject).find(".project-description").fadeToggle();
       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }   
}