import React from "react";
import "./Videostab.css";

const videoData = [
  {
    title: "Camera Solution for Smart Parking | License Plate Recognition | Intelligent Transport Systems",
    hashtags: ["smartparking", "anpr", "alpr", "IntelligentTransportSystems"],
    image: "https://placehold.jp/250x250.png",
  },
  {
    title: "Smart Parking Lot Management with 4K HDR GigE Camera | Real-Time Vehicle Detection & Slot Mapping",
    hashtags: ["SmartSurveillance", "ParkingLotManagement", "Parking", "4K", "HDR", "GigE", "Camera"],
    image: "https://placehold.jp/250x250.png",
  },
  {
    title: "ANPR / ALPR demo using Full HD Global Shutter USB Camera | AR0234CS sensor | e-con Systems",
    hashtags: ["smartparking", "anpr", "alpr", "IntelligentTransportSystems"],
    image: "https://placehold.jp/250x250.png",
  },
  {
    title: "Stop-Arm Camera Solution for School Buses | IP67 Global Shutter GigE Camera | e-con Systems",
    hashtags: ["schoolbus", "OutdoorCamera", "GigE"],
    image: "https://placehold.jp/250x250.png",
  },
  {
    title: "Camera Solution for Smart Parking | Parking Violation",
    hashtags: ["smartparking", "anpr", "alpr", "IntelligentTransportSystems"],
    image: "https://placehold.jp/250x250.png",
  },
  {
    title: "Camera Solution for Smart Parking | License Plate Recognition",
    hashtags: ["smartparking", "anpr", "alpr", "IntelligentTransportSystems"],
    image: "https://placehold.jp/250x250.png",
  },
];
const VideoStab = () => {
  return (
    <div className="VideoStab-container">
      <div className="VideoStab-grid">
        {videoData.map((video, index) => (
          <div className="VideoStab-card" key={index}>
            <img src={video.image} alt="placeholder" className="VideoStab-image" />
            <div className="VideoStab-content">
              <h3 className="VideoStab-cardTitle">{video.title}</h3>
              <div className="VideoStab-hashtags">
                {video.hashtags.map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoStab;