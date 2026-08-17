import React from "react";
import "./AccessControlChallenges.css";

import accessControlLarge from "../../../assets/access-control-large.png";
import accessControlSmall from "../../../assets/acess-control-small.png";

const challenges = [
  {
    number: "01",
    title: "Tailgating Drains Revenue",
    description:
      "Vehicles that slip through behind an authorized entry never pay. Without ANPR at the barrier, there's no record of who entered and no way to recover the revenue or identify the vehicle.",
    image: accessControlLarge,
    imageType: "large",
  },
  {
    number: "02",
    title: "Lost Tickets, Disputed Exits",
    description:
      "Paper tickets create predictable operational problems — lost tickets, swapped tickets, exit disputes that need manual resolution. A dispute causes a queue, and a queue loses customers.",
    image: accessControlSmall,
    imageType: "small",
  },
  {
    number: "03",
    title: "Manual Permit Management at Scale",
    description:
      "Monthly parkers, visitor access, and event credentials managed through spreadsheets or manual lists create daily errors. A plate not on the list means a blocked entry; a removed plate still on the list means unauthorized access.",
    image: accessControlSmall,
    imageType: "small",
  },
  {
    number: "04",
    title: "Closed PARCS Ecosystems",
    description:
      "Proprietary Parking Access and Revenue Control Systems (PARCS) make third-party integration difficult. Camera data, payment platforms, and operator dashboards sit in separate systems with no real-time data flow between them.",
    image: accessControlLarge,
    imageType: "large",
  },
  {
    number: "05",
    title: "Entry Queue at Peak Hours",
    description:
      "Ticket dispensers and manual gates create bottlenecks when volume spikes. A two-second plate read and automatic barrier lift eliminates the queue entirely — no ticket to collect, no credential to validate manually.",
    image: accessControlSmall,
    imageType: "small",
  },
  {
    number: "06",
    title: "Poor Read Quality in Low Light",
    description:
      "Underground garages, covered car parks, and early-morning entry points have no natural light. Standard cameras fail here. An ANPR camera without the right IR illumination produces unreadable plates exactly where access control matters most.",
    image: accessControlSmall,
    imageType: "small",
  },
];

const AccessControlChallenges = () => {
  return (
    <section className="access-control-challenges">
      <div className="access-control-challenges-container">

        <div className="access-control-challenges-header">
          <span>ACCESS CONTROL CHALLENGES</span>

          <h2>Challenges of Traditional Access Control</h2>

          <p>
            From revenue loss to security gaps, traditional systems create
            daily challenges for parking operators and users.
          </p>
        </div>

        <div className="access-control-challenges-grid">
          {challenges.map((challenge) => (
            <article
              className={`access-control-challenge-card challenge-${challenge.number}`}
              key={challenge.number}
            >
              <div className="access-control-challenge-number">
                {challenge.number}
              </div>

              <div className="access-control-challenge-content">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>

              <div
                className={`access-control-challenge-image ${challenge.imageType}`}
              >
                <img src={challenge.image} alt="" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccessControlChallenges;