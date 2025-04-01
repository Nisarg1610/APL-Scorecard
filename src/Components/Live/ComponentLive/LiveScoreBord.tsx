"use client";
import React, { useState } from "react";
import { DiVim } from "react-icons/di";

// Sample match data
const matchData = {
  teamA: {
    name: "India",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    players: [
      {
        name: "Virat Kohli",
        runs: 85,
        fours: 6,
        sixes: 4,
        balls: 60,
        out: false,
      },
      {
        name: "Rohit Sharma",
        runs: 75,
        fours: 7,
        sixes: 3,
        balls: 55,
        out: false,
      },
      { name: "KL Rahul", runs: 50, fours: 4, sixes: 2, balls: 40, out: true },
    ],
  },
  teamB: {
    name: "Australia",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bc/Flag_of_Australia.svg",
    players: [
      {
        name: "David Warner",
        runs: 65,
        fours: 5,
        sixes: 3,
        balls: 45,
        out: false,
      },
      {
        name: "Steve Smith",
        runs: 70,
        fours: 6,
        sixes: 2,
        balls: 50,
        out: false,
      },
      {
        name: "Glenn Maxwell",
        runs: 25,
        fours: 3,
        sixes: 1,
        balls: 30,
        out: true,
      },
    ],
  },
};

const LiveScoreboard = () => {
  const [selectedTeam, setSelectedTeam] = useState<"teamA" | "teamB">("teamA");

  const handleTeamChange = (team: "teamA" | "teamB") => {
    setSelectedTeam(team);
  };

  const calculateStrikeRate = (runs: number, balls: number) => {
    return ((runs / balls) * 100).toFixed(2);
  };

  const selectedTeamData = matchData[selectedTeam];

  return (
    
      
      
      
      <h1>Hello</h1>
      

      
      // <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      //   {/* Navbar to select Team */}
      //   <div className="flex justify-between items-center gap-2 bg-gray-200">
      //     <button
      //       className={`w-full py-2 ${
      //         selectedTeam === "teamA"
      //           ? "border-b-2 border-black bg-gray-300"
      //           : ""
      //       }`}
      //       onClick={() => handleTeamChange("teamA")}
      //     >
      //       {matchData.teamA.name}
      //     </button>
      //     <button
      //       className={`w-full py-2 ${
      //         selectedTeam === "teamB"
      //           ? "border-b-2 border-black bg-gray-300"
      //           : ""
      //       }`}
      //       onClick={() => handleTeamChange("teamB")}
      //     >
      //       {matchData.teamB.name}
      //     </button>
      //   </div>

      //   {/* Player Stats */}
      //   <div className="bg-gray-100 py-3 rounded-md shadow-sm">
      //     {/* Table Structure for Player Stats */}
      //     <div className="overflow-x-auto">
      //       <table className="min-w-full table-auto text-sm">
      //         <thead>
      //           <tr className="bg-gray-200 text-gray-700">
      //             <th className="px-4 py-2 text-left">Player</th>
      //             <th className="px-4 py-2 text-left">Runs</th>
      //             <th className="px-4 py-2 text-left">Balls</th>
      //             <th className="px-4 py-2 text-left">SR</th>
      //             <th className="px-4 py-2 text-left">Status</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {selectedTeamData.players.map((player, index) => (
      //             <tr key={index} className="border-t hover:bg-gray-50">
      //               <td className="px-4 py-2">{player.name}</td>
      //               <td className="px-4 py-2">{player.runs}</td>
      //               <td className="px-4 py-2">{player.balls}</td>
      //               <td className="px-4 py-2">
      //                 {calculateStrikeRate(player.runs, player.balls)}
      //               </td>
      //               <td className="px-4 py-2">
      //                 {player.out ? (
      //                   <span className="text-red-600 text-sm">(Out)</span>
      //                 ) : (
      //                   <span className="text-green-600 text-sm">
      //                     (Playing)
      //                   </span>
      //                 )}
      //               </td>
      //             </tr>
      //           ))}
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      // </div>
    
      
    
    
  );
};

export default LiveScoreboard;
