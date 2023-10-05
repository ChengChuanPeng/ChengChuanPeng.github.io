document.addEventListener("DOMContentLoaded", function() {
    populateSkills();

});


function populateSkills() {
        let skillsets = {
        "Splunk": ["Go", "OpenTelemetry", "Kubernetes", "GitHub Actions"],
        "Advantech": ["C#", ".NET MVC", "Azure Pipelines", "Azure Blob", "Azure Cosmos DB"],
        "Titansoft": ["C#", ".NET CORE", "Redis", "GRPC", "GCP Spanner", "GCP Pub/Sub"],
        "Micron": ["SQL", "Snowflake", "Python", "Flask", "Airflow", "Shell Script", "NiFi", "Splunk", "Docker", "Openshift", "Hadoop", "Hive", "Hbase"]
    };

    let jobs = document.querySelectorAll(".job");
    
    jobs.forEach(job => {
        let company = job.getAttribute("data-company");
        let skills = skillsets[company];

        let jobPara = job.querySelector("p");
        let skillText = "<strong>Skillset: </strong> " + skills.join(", "); 
        jobPara.innerHTML += skillText; // Append the skills to the existing job text using innerHTML since we're adding HTML content
    });
}


let topButton = document.getElementById("topBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}