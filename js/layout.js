document.addEventListener("DOMContentLoaded", function () {
    // Call the populateSkills function when the DOM is fully loaded
    populateSkills();
});

function populateSkills() {
    // Define a dictionary of skills for different companies
    let skillsets = {
        "Splunk": ["Go", "OpenTelemetry", "Kubernetes", "GitHub Actions"],
        "Advantech": ["C#", ".NET MVC", "Azure Pipelines", "Azure Blob", "Azure Cosmos DB"],
        "Titansoft": ["C#", ".NET CORE", "Redis", "GRPC", "GCP Spanner", "GCP Pub/Sub"],
        "Micron": ["SQL", "Snowflake", "Python", "Flask", "Airflow", "Shell Script", "NiFi", "Splunk", "Docker", "Openshift", "Hadoop", "Hive", "Hbase"]
    };

    // Select all elements with the class "job"
    let jobs = document.querySelectorAll(".job");

    // Iterate through each job element
    jobs.forEach(job => {
        // Get the company name from the data-company attribute
        let company = job.getAttribute("data-company");

        // Get the skills associated with the company from the skillsets dictionary
        let skills = skillsets[company];

        // Find the paragraph element within the job element
        let jobPara = job.querySelector("p");

        // Create a string to display the skills
        let skillText = "<strong>Skillset: </strong> " + skills.join(", ");

        // Append the skills string to the existing job text using innerHTML
        jobPara.innerHTML += skillText;
    });
}

// Get a reference to the "topBtn" element
let topButton = document.getElementById("topBtn");

// Add a scroll event listener
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    // Show or hide the "topBtn" based on scroll position
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// Scroll to the top of the page when the "topBtn" is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}