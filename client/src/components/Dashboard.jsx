import React from "react";

const Dashboard = () => {
  return (
    <div className="page-content">
      <h1>Dashboard</h1>
      <section aria-labelledby="topic-summary">
        <h2 id="topic-summary">Sustainable Energy: A Path Forward</h2>
        <p>
          Sustainable energy is derived from resources that can maintain current
          operations without jeopardizing the energy needs or climate of future
          generations. The most popular sources of sustainable energy, including
          wind, solar, and hydroelectric power, are renewable. Transitioning to
          these energy sources is critical for mitigating climate change,
          reducing pollution, and enhancing energy security.
        </p>
        <p>
          The global shift towards renewable energy has accelerated in recent
          years, driven by falling costs and supportive government policies.
          Solar photovoltaic (PV) and wind power are now the cheapest sources of
          new electricity generation in most countries. However, challenges
          remain, such as the intermittency of these sources and the need for
          improved energy storage solutions like advanced batteries and pumped
          hydro.
        </p>
        <p>
          Investing in sustainable energy not only protects the environment but
          also stimulates economic growth by creating millions of jobs in
          manufacturing, installation, and maintenance. As technology advances,
          we can expect even greater efficiencies and broader adoption across
          residential, commercial, and industrial sectors.
        </p>
        <p>
          <strong>Source:</strong>{" "}
          <a
            href="https://www.iea.org/topics/renewable-energy"
            target="_blank"
            rel="noopener noreferrer"
          >
            International Energy Agency (IEA)
          </a>
        </p>
      </section>

      <section aria-labelledby="tech-stack">
        <h2 id="tech-stack">Technical Overview</h2>
        <p>
          This application is a Single Page Application (SPA) built with{" "}
          <strong>React</strong> on the frontend and <strong>Express.js</strong>{" "}
          on the backend. It uses <strong>MongoDB</strong> as the database
          (simulated connection). Authentication is handled via{" "}
          <strong>JSON Web Tokens (JWT)</strong>, ensuring secure stateless
          communication between the client and server. The frontend communicates
          with the backend via RESTful HTTP calls using <strong>Axios</strong>.
          The application is designed to be deployed on <strong>Vercel</strong>,
          with the API running as serverless functions and the UI as a static
          site.
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
