import React, { useEffect } from "react";
import "./vision-intelligence.css";

const VisionIntelligence = () => {
  useEffect(() => {
    const visionPoints = document.querySelectorAll(".vision-point");
    const visionVisual = document.querySelector(".vision-visual");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    visionPoints.forEach((point) => observer.observe(point));
    if (visionVisual) observer.observe(visionVisual);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision-intelligence-section">
      <div className="vision-container">
        <div className="vision-header">
          <h2 className="vision-title">
            Advanced 3D Vision Intelligence for Intersections
          </h2>
          {/* <div className="title-underline"></div> */}
        </div>

        <div className="vision-content">
          <div className="vision-text">
            <div className="vision-point">
              <div className="point-indicator">01</div>
              <div className="point-content">
                <h3>3D Spatial Modeling</h3>
                <p>
                 The e-con Systems™ Rugged AI Vision Box integrates advanced vision-tracking algorithms that construct a 3D spatial model of vehicles, pedestrians, and cyclists approaching an intersection.
                </p>
              </div>
            </div>

            <div className="vision-point">
              <div className="point-indicator">02</div>
              <div className="point-content">
                <h3>Precision Zone Tracking</h3>
                <p>
                  It tracks each object through custom-defined zones — such as crosswalks, stop lines, and turning lanes — ensuring precise detection and classification until they exit the frame.
                </p>
              </div>
            </div>

            <div className="vision-point">
              <div className="point-indicator">03</div>
              <div className="point-content">
                <h3>Real-time Analytics & Control</h3>
                <p>
                 This enables real-time trajectory analysis, incident prediction, and adaptive signal control, helping reduce congestion, near-miss events, and pedestrian risks at complex junctions.
                </p>
              </div>
            </div>
          </div>

          <div className="vision-visual">
            <div className="visual-card">
              <div className="visual-header">
                <div className="visual-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="visual-title">Live 3D Intersection Monitoring</div>
              </div>
              <div className="visual-content">
                <div className="intersection-scene">
                  {/* Roads */}
                  <div className="road horizontal-road"></div>
                  <div className="road vertical-road"></div>
                  
                  {/* Lane Markings */}
                  <div className="lane-markings">
                    <div className="lane-line center-line"></div>
                    <div className="lane-line left-lane"></div>
                    <div className="lane-line right-lane"></div>
                  </div>
                  
                  {/* Crosswalk */}
                  <div className="crosswalk north-crosswalk">
                    <div className="crosswalk-line"></div>
                    <div className="crosswalk-line"></div>
                    <div className="crosswalk-line"></div>
                    <div className="crosswalk-line"></div>
                  </div>
                  
                  {/* Stop Lines */}
                  <div className="stop-line north-stop"></div>
                  <div className="stop-line south-stop"></div>
                  <div className="stop-line east-stop"></div>
                  <div className="stop-line west-stop"></div>
                  
                  {/* Traffic Lights */}
                  <div className="traffic-light north-light">
                    <div className="light red active"></div>
                    <div className="light yellow"></div>
                    <div className="light green"></div>
                  </div>
                  <div className="traffic-light east-light">
                    <div className="light red"></div>
                    <div className="light yellow"></div>
                    <div className="light green active"></div>
                  </div>
                  <div className="traffic-light south-light">
                    <div className="light red active"></div>
                    <div className="light yellow"></div>
                    <div className="light green"></div>
                  </div>
                  <div className="traffic-light west-light">
                    <div className="light red"></div>
                    <div className="light yellow"></div>
                    <div className="light green active"></div>
                  </div>
                  
                  {/* Detection Zones */}
                  <div className="detection-zone crosswalk-zone"></div>
                  <div className="detection-zone intersection-zone"></div>
                  
                  {/* Moving Objects - Car 1 (West to East) */}
                  <div className="moving-object car-1">
                    <div className="vehicle car-west-east">
                      <div className="car-body"></div>
                      <div className="car-top"></div>
                    </div>
                    <div className="object-trail trail-1"></div>
                    {/* <div className="object-label">Car 1</div> */}
                  </div>
                  
                  {/* Moving Objects - Car 2 (East to West) */}
                  <div className="moving-object car-2">
                    <div className="vehicle car-east-west">
                      <div className="suv-body"></div>
                    </div>
                    <div className="object-trail trail-2"></div>
                    {/* <div className="object-label">Car 2</div> */}
                  </div>
                  
                  {/* Cyclist (South to North - STOPPED) */}
                  <div className="moving-object cyclist-1">
                    <div className="cyclist">
                      <div className="bike-frame"></div>
                      <div className="bike-wheels">
                        <div className="wheel"></div>
                        <div className="wheel"></div>
                      </div>
                    </div>
                    <div className="object-label">Cyclist</div>
                    <div className="stop-indicator">STOPPED</div>
                  </div>
                  
                  {/* Pedestrian (Crossing West to East) */}
                  <div className="moving-object pedestrian-1">
                    <div className="pedestrian">
                      <div className="person-head"></div>
                      <div className="person-body"></div>
                    </div>
                    <div className="object-trail trail-3"></div>
                    <div className="object-label">Pedestrian</div>
                  </div>
                  
                  {/* Analytics Overlay */}
                  <div className="analytics-overlay">
                    <div className="tracking-line scan-line-1"></div>
                    <div className="tracking-line scan-line-2"></div>
                    <div className="tracking-line scan-line-3"></div>
                    
                    {/* Prediction Paths */}
                    <div className="prediction-path car-1-path"></div>
                    <div className="prediction-path car-2-path"></div>
                    <div className="prediction-path pedestrian-path"></div>
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="status-indicators">
                    <div className="status-tag vehicles-tag">Vehicles: 2</div>
                    <div className="status-tag pedestrians-tag">Pedestrians: 1</div>
                    <div className="status-tag cyclists-tag">Cyclists: 1</div>
                    <div className="status-tag safety-tag">Safety: 98%</div>
                  </div>

                  {/* Traffic Flow Indicators */}
                  <div className="flow-indicator east-west-flow">
                    <div className="flow-arrow">→</div>
                    <span>GREEN LIGHT</span>
                  </div>
                  <div className="flow-indicator north-south-flow">
                    <div className="flow-arrow stop-arrow">⛔</div>
                    <span>RED LIGHT</span>
                  </div>
                </div>
              </div>
              <div className="visual-stats">
                <div className="stat-item">
                  <span className="stat-label">Tracking Accuracy</span>
                  <span className="stat-value">98.7%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Response Time</span>
                  <span className="stat-value">47ms</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Objects Tracked</span>
                  <span className="stat-value">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="scenario-explanation">
          <h3>Live Scenario: 4-Way Intersection</h3>
          <div className="scenario-points">
            <div className="scenario-point">
              <span className="scenario-icon">🚗</span>
              <span><strong>Car 1 & 2:</strong> East-West GREEN light - Moving freely</span>
            </div>
            <div className="scenario-point">
              <span className="scenario-icon">🚴</span>
              <span><strong>Cyclist:</strong> North-South RED light - Stopped at line</span>
            </div>
            <div className="scenario-point">
              <span className="scenario-icon">🚶</span>
              <span><strong>Pedestrian:</strong> Safe crossing with walk signal</span>
            </div>
            <div className="scenario-point">
              <span className="scenario-icon">🤖</span>
              <span><strong>AI System:</strong> Monitoring all objects, predicting paths, ensuring safety</span>
            </div>
          </div>
        </div> */}

        {/* <div className="vision-features">
          <div className="feature-tag">Real-time Tracking</div>
          <div className="feature-tag">3D Spatial Analysis</div>
          <div className="feature-tag">Adaptive Control</div>
          <div className="feature-tag">Risk Prediction</div>
        </div> */}
      </div>
    </section>
  );
};

export default VisionIntelligence;