/* =========================
   MODAL SETUP
========================= */

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-btn");

/* =========================
   MODAL CONTENT
========================= */

const content = {

    /* ===== SKILLS ===== */

    skill1: `
        <h2>Data Engineering</h2>
        <p>
            Strong experience designing ETL workflows, automating pipelines,
            creating Redshift schemas, optimizing SQL queries,
            and building Glue jobs with schema evolution.
        </p>
        <p>Skills include: Redshift, Glue, ETL, S3, Lambda triggers, SQL optimization.</p>
    `,

    skill2: `
        <h2>Cloud Engineering</h2>
        <p>
            Hands-on experience building cloud-native systems using AWS services.
            Designed event-driven architectures with Lambda, S3, IAM,
            Redshift, Glue, and CloudWatch.
        </p>
        <p>Skills include: IAM, Lambda, Serverless, CloudWatch logging & monitoring.</p>
    `,

    skill3: `
        <h2>Programming</h2>
        <p>
            Python for ETL automation, API integrations,
            NLP preprocessing, data modeling, and Dockerized deployments.
        </p>
        <p>Skills include: Python ETL, SQL queries, Docker containerization.</p>
    `,

    skill4: `
        <h2>NLP & Machine Learning</h2>
        <p>
            Built NLP pipelines using BERT, HuggingFace models,
            and deployed inference using Amazon SageMaker.
        </p>
        <p>Skills include: Tokenization, preprocessing, embeddings, BERT inference, MLOps.</p>
    `,

    skill5: `
        <h2>Analytics</h2>
        <p>
            Designed dashboards using Tableau and Power BI,
            revealing trends and KPIs from 20K+ booking records.
        </p>
        <p>Skills include: KPI design, visualization, dashboard automation.</p>
    `,


    /* ===== PROJECTS ===== */

    proj1: `
        <h2>AWS Data Engineering Pipeline</h2>
        <p>
            Full ETL pipeline built using AWS S3 → Glue → Redshift.
            Included schema evolution, partitioning, automation via Lambda + EventBridge,
            and full CloudWatch monitoring.
        </p>
        <p>This project is directly aligned with my AWS Data Engineer Associate certification.</p>
    `,

    proj2: `
        <h2>NLP Microservice Pipeline</h2>
        <p>
            Designed a BERT-based inference microservice deployed using Amazon SageMaker.
            System included Dockerized containers, spaCy/NLTK preprocessing,
            fallback logic, and observability.
        </p>
        <p>This project aligns with my AWS Machine Learning Engineer certification.</p>
    `,

    proj3: `
        <h2>Hotel Booking Dashboard</h2>
        <p>
            Built Tableau dashboards analyzing 20,000+ booking records to uncover trends,
            seasonality, cancellations, and revenue patterns.
        </p>
        <p>Skills: Tableau, KPI modeling, segmentation, visualization.</p>
    `,


    /* ===== CERTIFICATIONS ===== */

    cert1: `
        <h2>AWS Certified Data Engineer – Associate</h2>
        <img src="images/aws_data_engineer_badge.png" class="cert-full">
        <p><strong>Credential ID:</strong> 6a941de10cb9418d998bb36d08c5e1d5</p>
        <p><strong>Issued:</strong> June 4, 2025<br>
           <strong>Expires:</strong> June 4, 2028</p>

        <p>
            This certification validates my Data Engineering Capstone where I built
            automated ETL flows using AWS Glue, Redshift, and Lambda.
        </p>

        <a class="credly-btn"
           href="https://www.credly.com/badges/7939a6bd-83b1-4307-904d-e0b413b0105b/linked_in_profile"
           target="_blank">View on Credly</a>
    `,

    cert2: `
        <h2>AWS Certified ML Engineer – Associate</h2>
        <img src="images/aws_ml_engineer_badge.png" class="cert-full">
        <p><strong>Credential ID:</strong> c3f96c2a66a347ce83bec4c5d2cb38c1</p>
        <p><strong>Issued:</strong> June 19, 2025<br>
           <strong>Expires:</strong> June 19, 2028</p>

        <p>
            This certification validates my NLP Microservice Capstone,
            including BERT inference pipelines, SageMaker deployment,
            monitoring, and MLOps practices.
        </p>

        <a class="credly-btn"
           href="https://www.credly.com/badges/59be7c61-b210-40a6-ad8f-29861f5470ae/linked_in_profile"
           target="_blank">View on Credly</a>
    `
};


/* =========================
   OPEN / CLOSE MODALS
========================= */

document.querySelectorAll(".card, .cert-card").forEach(card => {
    card.addEventListener("click", () => {
        const key = card.dataset.modal;
        modalBody.innerHTML = content[key] || "<p>No content available.</p>";
        modal.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});
