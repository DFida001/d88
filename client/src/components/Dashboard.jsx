import React from "react";

const Dashboard = () => {
  return (
    <div className="page-content">
      <h1>Dashboard</h1>
      <section aria-labelledby="topic-summary">
        <h2 id="topic-summary">UNC Charlotte Sustainability Dashboard</h2>
        <p>
          Welcome to the UNC Charlotte Sustainability Dashboard! This
          application showcases the University's recent achievement of earning
          its first STARS Gold rating from the Association for the Advancement
          of Sustainability in Higher Education (AASHE) in December 2025.
        </p>

        <h3>STARS Gold Achievement</h3>
        <p>
          UNC Charlotte received a score of <strong>66.23</strong>, marking a
          significant milestone in the University's strategic plan to become a
          national leader in sustainability. The STARS (Sustainability Tracking,
          Assessment and Rating System) is the world's most widely recognized
          framework for measuring sustainability performance in higher
          education, with more than 1,200 participating institutions across 52
          countries. Ratings range from Bronze to Platinum, with Gold requiring
          a score above 65.
        </p>
        <p>
          "Earning our first STARS Gold rating highlights UNC Charlotte's
          commitment to sustainability and academic excellence," said Chancellor
          Sharon L. Gaber. "This achievement reflects the collective efforts of
          our campus community to lead responsibly and innovatively."
        </p>

        <h3>Key Achievements</h3>
        <p>
          Over the past decade since first entering the program in 2016 with a
          Silver rating, UNC Charlotte has made remarkable progress across
          multiple categories. STARS evaluates achievements in five key areas:
          academics, engagement, operations, planning and administration, and
          innovation and leadership.
        </p>

        <h4>Curriculum and Research Excellence</h4>
        <p>
          <strong>90%</strong> of academic departments now offer
          sustainability-related courses, and <strong>37%</strong> of active
          researchers contribute to sustainability scholarship. The University
          scored particularly strong in curriculum and research, with{" "}
          <strong>97%</strong> of departments that conduct research having at
          least one sustainability researcher. Additionally,{" "}
          <strong>18%</strong> of graduates come from degree programs that
          require an understanding of sustainability as a learning outcome, and{" "}
          <strong>15%</strong> of courses were identified as having
          sustainability content.
        </p>

        <h4>Operational Improvements</h4>
        <p>
          The campus has achieved significant reductions in environmental
          impact:
        </p>
        <ul>
          <li>
            <strong>47% reduction</strong> in source energy consumption per unit
            floor area compared to earlier benchmarks
          </li>
          <li>
            <strong>68% reduction</strong> in water usage per unit floor area
          </li>
          <li>
            <strong>37% reduction</strong> in greenhouse gas emissions per
            campus user
          </li>
        </ul>

        <h4>Sustainable Practices</h4>
        <p>
          <strong>92%</strong> of electronics purchased meet the highest levels
          of sustainable product certifications, demonstrating UNC Charlotte's
          commitment to responsible procurement. Sustainability is now embedded
          in student and staff orientation, and new programs like the
          sustainability ambassadors have expanded staff involvement across
          campus.
        </p>

        <h3>National Recognition</h3>
        <p>
          UNC Charlotte scored average or above in nine of 13 categories
          compared to 668 institutions on AASHE's Sustainable Campus Index. "Our
          faculty, staff and students have worked hard to earn this global
          recognition," said Mike Lizotte, university sustainability officer.
          "UNC Charlotte is well-positioned to achieve the strategic vision of
          becoming a national leader in sustainability."
        </p>
        <p>
          "UNC Charlotte has demonstrated a substantial commitment to
          sustainability by achieving a STARS Gold Rating and is to be
          congratulated for their efforts," said Meghan Fay Zahniser, AASHE
          executive director.
        </p>

        <p style={{ marginTop: "2rem" }}>
          <strong>Source:</strong>{" "}
          <a
            href="https://inside.charlotte.edu/2025/12/04/unc-charlotte-earns-first-stars-gold-rating-for-sustainability-achievements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNC Charlotte STARS Gold Rating Announcement (December 4, 2025)
          </a>
          {" | "}
          <a
            href="https://reports.aashe.org/institutions/university-of-north-carolina-charlotte-nc/report/2025-10-09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full STARS Report
          </a>
          {" | "}
          <a
            href="https://sustainability.charlotte.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNC Charlotte Sustainability Website
          </a>
        </p>
      </section>

      <section aria-labelledby="tech-stack">
        <h2 id="tech-stack">Technical Overview</h2>
        <p>
          This application is a full-stack Single Page Application (SPA) built
          with <strong>React</strong> on the frontend and{" "}
          <strong>Express.js</strong> on the backend. It uses{" "}
          <strong>MongoDB Atlas</strong> for secure cloud database storage with
          user authentication and chart data. User passwords are hashed using{" "}
          <strong>bcryptjs</strong> for security. Authentication is handled via{" "}
          <strong>JSON Web Tokens (JWT)</strong> with 1-hour expiration,
          ensuring secure stateless communication between the client and server.
          The frontend communicates with the backend via RESTful HTTP calls
          using <strong>Axios</strong>. The application is deployed on{" "}
          <strong>Vercel</strong>.
        </p>
        <p>
          <strong>Key Technologies:</strong>
        </p>
        <ul>
          <li>React Router for client-side routing and protected routes</li>
          <li>Recharts for interactive data visualizations</li>
          <li>Mongoose ODM for MongoDB data modeling</li>
          <li>Environment variables for secure configuration</li>
          <li>CORS enabled for cross-origin requests</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
