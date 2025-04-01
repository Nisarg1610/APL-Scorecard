import Image from "next/image";
import React from "react";
import { FaTrophy } from "react-icons/fa";

// Sample Data for Team Standings
const teamStandings = [
  {
    id: 1,
    team: "India",
    played: 8,
    won: 6,
    lost: 2,
    points: 12,
    nrr: "+1.25",
    logo: "/india-logo.png",
  },
  {
    id: 2,
    team: "Australia",
    played: 8,
    won: 5,
    lost: 3,
    points: 10,
    nrr: "+0.85",
    logo: "/australia-logo.png",
  },
  {
    id: 3,
    team: "England",
    played: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: "+0.55",
    logo: "/england-logo.png",
  },
  {
    id: 4,
    team: "Pakistan",
    played: 8,
    won: 3,
    lost: 5,
    points: 6,
    nrr: "-0.25",
    logo: "/pakistan-logo.png",
  },
  {
    id: 5,
    team: "New Zealand",
    played: 8,
    won: 6,
    lost: 2,
    points: 12,
    nrr: "+1.50",
    logo: "/new-zealand-logo.png",
  },
  {
    id: 6,
    team: "South Africa",
    played: 8,
    won: 5,
    lost: 3,
    points: 10,
    nrr: "+0.95",
    logo: "/south-africa-logo.png",
  },
  {
    id: 7,
    team: "Sri Lanka",
    played: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: "+0.30",
    logo: "/sri-lanka-logo.png",
  },
  {
    id: 8,
    team: "Bangladesh",
    played: 8,
    won: 3,
    lost: 5,
    points: 6,
    nrr: "-0.10",
    logo: "/bangladesh-logo.png",
  },
  {
    id: 9,
    team: "West Indies",
    played: 8,
    won: 2,
    lost: 6,
    points: 4,
    nrr: "-0.50",
    logo: "/west-indies-logo.png",
  },
  {
    id: 10,
    team: "Afghanistan",
    played: 8,
    won: 1,
    lost: 7,
    points: 2,
    nrr: "-0.75",
    logo: "/afghanistan-logo.png",
  },
  {
    id: 11,
    team: "Zimbabwe",
    played: 8,
    won: 7,
    lost: 1,
    points: 14,
    nrr: "+2.00",
    logo: "/zimbabwe-logo.png",
  },
  {
    id: 12,
    team: "Nepal",
    played: 8,
    won: 6,
    lost: 2,
    points: 12,
    nrr: "+1.10",
    logo: "/nepal-logo.png",
  },
  {
    id: 13,
    team: "Ireland",
    played: 8,
    won: 5,
    lost: 3,
    points: 10,
    nrr: "+0.80",
    logo: "/ireland-logo.png",
  },
  {
    id: 14,
    team: "United States",
    played: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: "+0.45",
    logo: "/us-logo.png",
  },
  {
    id: 15,
    team: "Canada",
    played: 8,
    won: 3,
    lost: 5,
    points: 6,
    nrr: "-0.15",
    logo: "/canada-logo.png",
  },
  {
    id: 16,
    team: "Scotland",
    played: 8,
    won: 2,
    lost: 6,
    points: 4,
    nrr: "-0.35",
    logo: "/scotland-logo.png",
  },
  {
    id: 17,
    team: "UAE",
    played: 8,
    won: 1,
    lost: 7,
    points: 2,
    nrr: "-0.65",
    logo: "/uae-logo.png",
  },
  {
    id: 18,
    team: "Afghanistan",
    played: 8,
    won: 3,
    lost: 5,
    points: 6,
    nrr: "-0.20",
    logo: "/afghanistan-logo.png",
  },
  {
    id: 19,
    team: "Bangladesh",
    played: 8,
    won: 4,
    lost: 4,
    points: 8,
    nrr: "+0.40",
    logo: "/bangladesh-logo.png",
  },
  {
    id: 20,
    team: "Sri Lanka",
    played: 8,
    won: 5,
    lost: 3,
    points: 10,
    nrr: "+0.60",
    logo: "/sri-lanka-logo.png",
  },
];

const Standings = () => {
  return (
    <div className="px-2 md:pt-20 md:my-auto w-full pb-20 max-w-3xl mx-auto ">
    <div className="bg-white rounded-md shadow-lg">
      <h1 className="text-2xl font-semibold text-gray-800 p-5 border-b  border-gray-200 flex items-center gap-2">
        <FaTrophy className="text-orange-500" />
       2025 APL - Standings
      
      </h1>
      <table className="w-full text-sm md:text-base table-auto">
        <thead>
          <tr className="bg-black  text-white text-left">
            <th className="px-3 py-3">#</th>
            <th className="px-3 py-3">Team</th>
            <th className="px-3 py-3 text-center">M</th>
            <th className="px-3 py-3 text-center">W</th>
            <th className="px-3 py-3 text-center">L</th>
            <th className="px-3 py-3 text-center">Pts</th>
            <th className="px-3 py-3 text-center">NRR</th>
          </tr>
        </thead>
        <tbody>
          {teamStandings.map((team, index) => (
            <tr
              key={team.id}
              className={`border-t border-gray-200 text-gray-700 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
              } hover:bg-gray-200 transition-all duration-300`}
            >
              <td className="px-3 py-3">{index + 1}</td>
              <td className="px-3 py-3 flex items-center gap-2">
                <Image
                  src="/ddd.jpg"
                  alt={team.team}
                  height={20}
                  width={20}
                  className="rounded-full"
                />
                {team.team}
              </td>
              <td className="px-3 py-3 text-center">{team.played}</td>
              <td className="px-3 py-3 text-center text-green-600">{team.won}</td>
              <td className="px-3 py-3 text-center text-red-600">{team.lost}</td>
              <td className="px-3 py-3 text-center font-semibold">{team.points}</td>
              <td className="px-3 py-3 text-center">{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );  
};

export default Standings;
