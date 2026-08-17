import React from "react";
import "./OccupancyChallenges.css";

const challenges = [
  {
    number: "01",
    title: "Operators Run on Guesswork",
    description:
      "Most parking operators track occupancy through entry/exit counts at the lot level, not at the space level. A lot can show 40 spaces available, while every space in the accessible row is taken. So, the count is right, but the guidance is wrong.",
  },
  {
    number: "02",
    title: "Loop Detectors and Sensors Break",
    description:
      "In-ground sensors require road cutting, installation, and ongoing maintenance. A failed loop detector produces a permanently vacant space in the system, inflating availability counts and sending drivers into full lots.",
  },
  {
    number: "03",
    title: "Stale Data Makes Guidance Unreliable",
    description:
      "Parking guidance systems are fed by slow polling cycles broadcast availability that’s minutes behind reality. During peak arrival windows, a two-minute lag means drivers follow guidance to a space that was taken before they park.",
  },
  {
    number: "04",
    title: "Lack of Visibility in Open Surface Lots",
    description:
      "Zone-level counts tell an operator how many spaces are available, not which row, bay, or section. Without space-level detection, guidance stops at the lot entrance.",
  },
  {
    number: "05",
    title: "High Per-Space Sensor Cost",
    description:
      "Deploying individual sensors per bay, such as ultrasonic, magnetic, or infrared, multiplies cost linearly with the number of spaces. A single camera covering multiple bays reduces per-space cost by an order of magnitude.",
  },
  {
    number: "06",
    title: "No Data for Dynamic Pricing or Utilization",
    description:
      "Without reliable, real-time occupancy data, operators can’t set dynamic rates or generate accurate utilization reports. Inaccurate counts mean pricing decisions and capacity planning are both built on the wrong inputs.",
  },
];

const OccupancyChallenges = () => {
  return (
    <section className="occupancy-challenges">
      <div className="occupancy-challenges-container">

        <div className="occupancy-challenges-header">
          <span>OCCUPANCY CHALLENGES</span>

          <h2>
            How Occupancy Data Often Fails Operators and Drivers
          </h2>
        </div>

        <div className="occupancy-challenges-list">
          {challenges.map((challenge) => (
            <article
              className="occupancy-challenge-item"
              key={challenge.number}
            >
              <div className="occupancy-challenge-number">
                {challenge.number}
              </div>

              <div className="occupancy-challenge-content">
                <h3>{challenge.title}</h3>

                <p>{challenge.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OccupancyChallenges;