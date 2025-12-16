const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-btn");

const content = {
    skill1: "<h2>Data Engineering</h2><p>ETL pipelines, Glue jobs, Redshift models, SQL optimization.</p>",
    skill2: "<h2>Cloud Engineering</h2><p>AWS Lambda, S3, IAM, CloudWatch, serverless pipelines.</p>",
    skill3: "<h2>Programming</h2><p>Python ETL, SQL queries, automation scripting, Dockerization.</p>",
    skill4: "<h2>NLP & ML</h2><p>BERT, HuggingFace, SageMaker deployments, preprocessing pipelines.</p>",
    skill5: "<h2>Analytics</h2><p>Tableau dashboards, Power BI, KPI visualization.</p>",

    proj1: "<h2>AWS Data Engineering Pipeline</h2><p>S3 → Glue → Redshift automated ETL with schema evolution and monitoring.</p>",
    proj2: "<h2>NLP Microservice Pipeline</h2><p>BERT inference deployed on SageMaker with Docker and observability.</p>",
    proj3: "<h2>Hotel Booking Dashboard</h2><p>Tableau dashboard analyzing 20K+ bookings for KPIs and patterns.</p>",

    cert1: `
        <h2>AWS Certified Data Engineer – Associate</h2>
        <img src="images/aws_data_engineer_badge.png" style="width:150px;">
        <p>Credential ID: 6a941de10cb9418d998bb36d08c5e1d5</p>
        <a href="https://www.credly.com/badges/7939a6bd-83b1-4307-904d-e0b413b0105b" target="_blank">View on Credly</a>
    `,
    cert2: `
        <h2>AWS Certified ML Engineer – Associate</h2>
        <img src="images/aws_ml_engineer_badge.png" style="width:150px;">
        <p>Credential ID: c3f96c2a66a347ce83bec4c5d2cb38c1</p>
        <a href="https://www.credly.com/badges/59be7c61-b210-40a6-ad8f-29861f5470ae" target="_blank">View on Credly</a>
    `
};

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.modal;
        modalBody.innerHTML = content[key] || "<p>No details available.</p>";
        modal.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});
