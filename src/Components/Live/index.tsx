'use client';
import React from "react";
import { FaBowlingBall, FaFlag } from "react-icons/fa";
import { MdOutlineSportsCricket } from "react-icons/md";
import LiveScoreboard from "./ComponentLive/LiveScoreBord";

// Sample Match Data
const matchData = {
  teamA: {
    name: "India",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    score: "250/4 (40.2)",
    striker: { name: "Virat Kohli", runs: 85, balls: 60 },
    nonStriker: { name: "Rohit Sharma", runs: 75, balls: 55 },
  },
  teamB: {
    name: "Australia",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/Flag_of_Australia.svg",
    score: "220/5 (38.0)",
    bowlers: [
      { name: "Pat Cummins", overs: "8.0", runs: 45, balls: 6 },
      { name: "Josh Hazlewood", overs: "7.0", runs: 40, balls: 6 },
    ],
  },
  lastTwentyBalls: [
    "1", "4", "W", "0", "6", "2", "0", "1", "4", "Wd", "W", "1", "2", "4", "0", "6", "1", "W", "4", "6",
  ],
};

const LiveMatchHeader = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white md:mt-10 md:rounded-lg ">
      <div className="bg-white rounded-t-lg py-3">
        {/* Team Names & Scores */}
        <div className="flex items-center justify-between bg-white p-4 rounded-t-lg ">
          {/* Team A */}
          <div className="flex items-center gap-3">
            <img
              src={matchData.teamA.logo}
              alt="Team A"
              className="w-12 h-12 rounded-full shadow-sm"
            />
            <div>
              <div className="text-2xl font-semibold text-gray-800">{matchData.teamA.name}</div>
              <div className="text-green-600 text-lg">{matchData.teamA.score}</div>
            </div>
          </div>

          <div className="text-4xl font-bold text-gray-700">VS</div>

          {/* Team B */}
          <div className="flex items-center gap-3">
            <FaFlag className="w-12 h-12 text-gray-600" />
            <div>
              <div className="text-2xl font-semibold text-gray-800">{matchData.teamB.name}</div>
              <div className="text-green-600 text-lg">{matchData.teamB.score}</div>
            </div>
          </div>
        </div>

        {/* Batting & Bowling Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* Batting Team */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <MdOutlineSportsCricket /> Batting: {matchData.teamA.name}
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>* {matchData.teamA.striker.name} *</span>
                <span>
                  {matchData.teamA.striker.runs} ({matchData.teamA.striker.balls})
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{matchData.teamA.nonStriker.name}</span>
                <span>
                  {matchData.teamA.nonStriker.runs} ({matchData.teamA.nonStriker.balls})
                </span>
              </div>
            </div>
          </div>

          {/* Bowling Team */}
          <div className="p-4 bg-gray-50 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <FaBowlingBall /> Bowling: {matchData.teamB.name}
            </h3>
            <div className="mt-2 space-y-2">
              {matchData.teamB.bowlers.map((bowler, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-600">
                  <span>{bowler.name}</span>
                  <span>{bowler.balls} B</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Last 20 Balls */}
        <div className="my-3 flex overflow-x-auto gap-4 scrollbar-hidden bg-white p-3 rounded-md ">
          {matchData.lastTwentyBalls.map((ball, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getBallColor(ball)} transition-all duration-300 hover:scale-105`}
            >
              {ball}
            </span>
          ))}
        </div>
      </div>

      <LiveScoreboard />
    </div>
  );
};

const getBallColor = (ball: string) => {
  switch (ball) {
    case "W":
      return "bg-red-500 text-white";
    case "6":
      return "bg-green-500 text-white";
    case "4":
      return "bg-blue-500 text-white";
    case "Wd":
      return "bg-yellow-500 text-black";
    default:
      return "bg-gray-300 text-black";
  }
};

export default LiveMatchHeader;
