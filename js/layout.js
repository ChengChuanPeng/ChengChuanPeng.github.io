document.addEventListener("DOMContentLoaded", function() {
    let skillsets = {
        "Splunk": ["Go", "OpenTelemetry", "K8s"],
        "Advantech": ["C#", "ASP.NET"],
        "Titansoft": ["C#", ".NET CORE",],
        "Micron": ["SQL", "Snowflake", "Python", "NiFi", "Splunk"]
    };

    let jobs = document.querySelectorAll(".job");
    
    jobs.forEach(job => {
        let company = job.getAttribute("data-company");
        let skills = skillsets[company];
        
        let skillList = job.querySelector(".skills");
        skills.forEach(skill => {
            let listItem = document.createElement("li");
            listItem.textContent = skill;
            skillList.appendChild(listItem);
        });
    });
});