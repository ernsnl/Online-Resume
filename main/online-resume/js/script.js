'use strict';
// Bio/Info HTML
var htmlNameRole = "<h1>%data_n%</h1><span>%data_r%</span><hr/>";
var htmlContact = "<ul class='contact-list'></ul>";
var htmlContactGeneric = "<li><span class='contact-header'>%type% </span>%value%</li>";
var htmlQuoteGeneric = "<p class='quote'>%quote% <span class='who'>-%who%</span></p>";
var htmlSkill = "<h3 class='skill-header'>Skills at Glance</h3><hr/><ul class='skill-list'></ul>";
var htmlSkillGeneric = "<li>%data%</li>";
var htmlProfileImg = "<img class='img img-responsive profileImg' alt='myPicture' src='%data%'/>";
// Bio Data
var bio = {
    name: "Sinasi Eren Senel",
    role: "Junior Software Developer/Student",
    contacts: {
        Mobile: "+905324862675",
        Email: "ernsnl@gmail.com",
        Github: "ernsnl",
        Twitter: "ernsnl",
        Location: "Annapolis, MD",
    },
    welcomeMessage: "Live as if you were to die tommorrow. Learn as if you were to live forever.",
    welcomeMessageWho: 'Mahatma Gandhi',
    skills: ["C/C++", "C#", "SQL", "Javascript", "JQuery", "Java", "Python", "ASP.NET", "HTML", "Haskell"],
    biopic: "img/Profile.jpg",
    display: function(documentID) {
        var appendedSection = $("#" + documentID).find(".info-section");
        appendedSection.find('.info-name-role').append(htmlNameRole.replace('%data_n%', this.name).replace('%data_r%', this.name));
        appendedSection.find('.info-contact').append(htmlContact);
        $.each(this.contacts, function(index_c, value_c) {
            appendedSection.find('.info-contact .contact-list').append(htmlContactGeneric.replace('%type%', index_c).replace('%value%', value_c));
        });
        appendedSection.find('.info-quote').append(htmlQuoteGeneric.replace('%quote%', this.welcomeMessage).replace('%who%', this.welcomeMessageWho));
        appendedSection.find('.info-skill').append(htmlSkill);
        this.skills.forEach(function(val) {
            appendedSection.find('.skill-list').append(htmlSkillGeneric.replace('%data%', val));
        });
        appendedSection.find('.info-image').append(htmlProfileImg.replace('%data%', this.biopic));
        // Let's Connect
        appendedSection = $("#" + documentID).find('.connectList').append(htmlContact);
        $.each(this.contacts, function(index_c, value_c) {
            appendedSection.find('.contact-list').append(htmlContactGeneric.replace('%type%', index_c).replace('%value%', value_c));
        });
    }
};
// Education HTML
// None Needed
//Education Data
var education = {
    schools: [{
        name: "Istanbul Technical University",
        location: "Istanbul",
        degree: "Bachelor's Degree",
        majors: ["Computer Engineer"],
        dates: "2016",
        url: "http://www.bb.itu.edu.tr/"
    }],
    onlineCourses: [{
        title: "Java Summer Camp",
        school: "OBSS",
        date: "2015",
        url: "http://obss.com.tr/academic/"
    }],
    display: function(documentID) {
        // Education
        var appendedArea = $("#" + documentID).find('.education-duplicate').parent();
        var duplicate = $('#' + documentID).find('.education-duplicate');
        $('#' + documentID).find('.education-duplicate').remove();
        this.schools.forEach(function(val) {
            var duplicate_new = duplicate.clone();
            duplicate_new.find('.education-header .school-url').attr('href', val.url);
            duplicate_new.find('.education-header .school-url').append(val.name + " - " + val.degree);
            duplicate_new.find('.education-info .date').append(val.dates);
            duplicate_new.find('.education-info .location').append(val.location);
            val.majors.forEach(function(maj) {
                duplicate_new.find('.education-major').append(maj);
            });
            appendedArea.append(duplicate_new);
        });
        // Online Courses
        appendedArea = $("#" + documentID).find('.online-duplicate').parent();
        duplicate = $('#' + documentID).find('.online-duplicate');
        $('#' + documentID).find('.online-duplicate').remove();
        this.onlineCourses.forEach(function(val) {
            var duplicate_new = duplicate.clone();
            duplicate_new.find('.online-header .online-url').attr('href', val.url);
            duplicate_new.find('.online-header .online-url').append(val.title + " - " + val.school);
            duplicate_new.find('.online-info .date').append(val.date);
            appendedArea.append(duplicate_new);
        });
    }
};

// Work Html
// None Needed
// Work Date
var work = {
    jobs: [{
        employer: "Kartega",
        title: "Junior Software Engineer",
        location: "Istanbul, Turkey",
        dates: "August 2014 - August 2015",
        description: "Main responsibilities were creating dynamic programs and systems, establishing system integrity, and representing data to user in an appealing way. Working in a start-up environment, main challenge was to find the least expensive (most cost-effective) solution clients desired by venturing into new languages and environments such as Entity Framework and Amazon Web Services (AWS)."
    }, {
        employer: "Nillacra",
        title: "Intern Software Engineer",
        location: "Istanbul, Turkey",
        dates: "February 2014 - July 2014",
        description: "As Intern Software Engineer, participated in multiple projects with focus on the following areas: Showed requested results to users in appealing way (improving the User Interface), Created AJAX functions for both front and back ends, Wrote raw SQL functions for fetching and updating data"
    }],
    display: function(documentID) {
        var appendedArea = $("#" + documentID).find('.work-duplicate').parent();
        var duplicate = $("#" + documentID).find('.work-duplicate');
        $("#" + documentID).find('.work-duplicate').remove();
        this.jobs.forEach(function(val) {
            var duplicate_new = duplicate.clone();
            duplicate_new.find('.work-header').append(val.employer + " - " +
                val.title);
            duplicate_new.find('.work-info .date').append(val.dates);
            duplicate_new.find('.work-info .location').append(val.location);
            duplicate_new.find('.work-summary').append(val.description);
            appendedArea.append(duplicate_new);
        });
    }
};
// Project HTML
var htmlImg = "<img class='projectImg img img-responsive' src='%data%' alt='projectImage'/>";
// Project Data
var projects = {
    projects: [{
        title: "Personal Website",
        dates: "2015",
        description: "Using Entity Framework and MVC, Personal Website was created.",
        url: 'http://ernsnl.com',
        images: ["img/personalWebsite.png"]
    }, {
        title: "Fan Project",
        dates: "2016",
        description: "Fan Project that focuses on Youtube API and Twitter API",
        url: 'http://jacksfilms.ernsnl.com',
        images: ["img/GetPaid.png"]
    }],
    display: function(documentID) {
        var appendedArea = $("#" + documentID).find('.project-duplicate').parent();
        var duplicate = $("#" + documentID).find('.project-duplicate');
        $("#" + documentID).find('.project-duplicate').remove();
        this.projects.forEach(function(proj) {
            var duplicate_new = duplicate.clone();
            duplicate_new.find('.project-header .project-url').attr('href', proj.url);
            duplicate_new.find('.project-header .project-url').append(proj.title);
            duplicate_new.find('.project-info .date').append(proj.dates);
            duplicate_new.find('.project-summary').append(proj.description);
            proj.images.forEach(function(val) {
                duplicate_new.find('.project-images').append(htmlImg.replace('%data%', val));;
            });
            appendedArea.append(duplicate_new);
        });
    }
};
// Cities I visited
var cities = ["San Antonio, TX", "Miami,FL", "Orlando,FL", "Chicago, IL", "Annapolis, MD", "Istanbul, Turkey", "Washington, DC", "Prague, Czech Republic", "Nurnberg, Germany", "Bern, Switzerland"];
// Main Build Resume Funtion
function buildResume(documentID, bio, education, work, projects) {
    if (!jQuery.isEmptyObject(bio)) {
        bio.display(documentID);
    }
    if (!jQuery.isEmptyObject(work)) {
        work.display(documentID);
    }
    if (!jQuery.isEmptyObject(education)) {
        education.display(documentID);
    }
    if (!jQuery.isEmptyObject(projects)) {
        projects.display(documentID);
    }
}
