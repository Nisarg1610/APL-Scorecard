import React from "react";
import { GiEgyptianProfile } from "react-icons/gi";

// Sample Data for Batsmen, Bowlers, and Highest Boundaries
const topBatsmen = [
  {
    id: 1,
    name: "Virat Kohli",
    team: "India",
    teamLogo: "/india.png",
    runs: 350,
    matches: 10,
    avg: 35.0,
  },
  {
    id: 2,
    name: "David Warner",
    team: "Australia",
    teamLogo: "/australia.png",
    runs: 400,
    matches: 12,
    avg: 33.33,
  },
  {
    id: 3,
    name: "Rohit Sharma",
    team: "India",
    teamLogo: "/india.png",
    runs: 280,
    matches: 8,
    avg: 35.0,
  },
  {
    id: 4,
    name: "Babar Azam",
    team: "Pakistan",
    teamLogo: "/pakistan.png",
    runs: 420,
    matches: 11,
    avg: 38.18,
  },
  {
    id: 5,
    name: "Joe Root",
    team: "England",
    teamLogo: "/england.png",
    runs: 365,
    matches: 9,
    avg: 40.56,
  },
  {
    id: 6,
    name: "Steve Smith",
    team: "Australia",
    teamLogo: "/australia.png",
    runs: 390,
    matches: 11,
    avg: 35.45,
  },
  {
    id: 7,
    name: "Kane Williamson",
    team: "New Zealand",
    teamLogo: "/newzealand.png",
    runs: 345,
    matches: 10,
    avg: 34.5,
  },
  {
    id: 8,
    name: "Quinton de Kock",
    team: "South Africa",
    teamLogo: "/southafrica.png",
    runs: 310,
    matches: 8,
    avg: 38.75,
  },
  {
    id: 9,
    name: "Shubman Gill",
    team: "India",
    teamLogo: "/india.png",
    runs: 375,
    matches: 10,
    avg: 37.5,
  },
  {
    id: 10,
    name: "Jos Buttler",
    team: "England",
    teamLogo: "/england.png",
    runs: 295,
    matches: 9,
    avg: 32.78,
  },
  {
    id: 11,
    name: "Glenn Maxwell",
    team: "Australia",
    teamLogo: "/australia.png",
    runs: 330,
    matches: 10,
    avg: 33.0,
  },
  {
    id: 12,
    name: "Fakhar Zaman",
    team: "Pakistan",
    teamLogo: "/pakistan.png",
    runs: 355,
    matches: 9,
    avg: 39.44,
  },
  {
    id: 13,
    name: "Devon Conway",
    team: "New Zealand",
    teamLogo: "/newzealand.png",
    runs: 290,
    matches: 8,
    avg: 36.25,
  },
];

const topBowlers = [
  {
    id: 1,
    name: "Jasprit Bumrah",
    team: "India",
    teamLogo: "/india.png",
    wickets: 20,
    economy: 5.4,
    matches: 10,
  },
  {
    id: 2,
    name: "Mitchell Starc",
    team: "Australia",
    teamLogo: "/australia.png",
    wickets: 22,
    economy: 4.8,
    matches: 11,
  },
  {
    id: 3,
    name: "Shaheen Afridi",
    team: "Pakistan",
    teamLogo: "/pakistan.png",
    wickets: 19,
    economy: 5.1,
    matches: 9,
  },
  {
    id: 4,
    name: "Jofra Archer",
    team: "England",
    teamLogo: "/england.png",
    wickets: 21,
    economy: 5.2,
    matches: 10,
  },
  {
    id: 5,
    name: "Trent Boult",
    team: "New Zealand",
    teamLogo: "/newzealand.png",
    wickets: 18,
    economy: 4.7,
    matches: 10,
  },
  {
    id: 6,
    name: "Pat Cummins",
    team: "Australia",
    teamLogo: "/australia.png",
    wickets: 17,
    economy: 5.0,
    matches: 9,
  },
  {
    id: 7,
    name: "Rashid Khan",
    team: "Afghanistan",
    teamLogo: "/afghanistan.png",
    wickets: 23,
    economy: 4.5,
    matches: 12,
  },
  {
    id: 8,
    name: "Anrich Nortje",
    team: "South Africa",
    teamLogo: "/southafrica.png",
    wickets: 16,
    economy: 5.3,
    matches: 8,
  },
  {
    id: 9,
    name: "Kuldeep Yadav",
    team: "India",
    teamLogo: "/india.png",
    wickets: 15,
    economy: 4.9,
    matches: 9,
  },
  {
    id: 10,
    name: "Mark Wood",
    team: "England",
    teamLogo: "/england.png",
    wickets: 20,
    economy: 5.1,
    matches: 11,
  },
  {
    id: 11,
    name: "Mohammad Shami",
    team: "India",
    teamLogo: "/india.png",
    wickets: 18,
    economy: 5.0,
    matches: 10,
  },
  {
    id: 12,
    name: "Lockie Ferguson",
    team: "New Zealand",
    teamLogo: "/newzealand.png",
    wickets: 14,
    economy: 4.6,
    matches: 9,
  },
];

const highestBoundaries = [
  {
    id: 1,
    name: "Shikhar Dhawan",
    team: "India",
    teamLogo: "/india.png",
    boundaries: 42,
    matches: 10,
  },
  {
    id: 2,
    name: "Chris Gayle",
    team: "West Indies",
    teamLogo: "/west_indies.png",
    boundaries: 39,
    matches: 12,
  },
  {
    id: 3,
    name: "AB de Villiers",
    team: "South Africa",
    teamLogo: "/south_africa.png",
    boundaries: 36,
    matches: 9,
  },
  {
    id: 4,
    name: "Rohit Sharma",
    team: "India",
    teamLogo: "/india.png",
    boundaries: 50,
    matches: 11,
  },
  {
    id: 5,
    name: "David Warner",
    team: "Australia",
    teamLogo: "/australia.png",
    boundaries: 45,
    matches: 10,
  },
  {
    id: 6,
    name: "Jos Buttler",
    team: "England",
    teamLogo: "/england.png",
    boundaries: 41,
    matches: 9,
  },
  {
    id: 7,
    name: "Babar Azam",
    team: "Pakistan",
    teamLogo: "/pakistan.png",
    boundaries: 38,
    matches: 10,
  },
  {
    id: 8,
    name: "Kane Williamson",
    team: "New Zealand",
    teamLogo: "/newzealand.png",
    boundaries: 34,
    matches: 8,
  },
  {
    id: 9,
    name: "Virat Kohli",
    team: "India",
    teamLogo: "/india.png",
    boundaries: 48,
    matches: 12,
  },
  {
    id: 10,
    name: "Steve Smith",
    team: "Australia",
    teamLogo: "/australia.png",
    boundaries: 37,
    matches: 10,
  },
  {
    id: 11,
    name: "Quinton de Kock",
    team: "South Africa",
    teamLogo: "/south_africa.png",
    boundaries: 35,
    matches: 9,
  },
  {
    id: 12,
    name: "Fakhar Zaman",
    team: "Pakistan",
    teamLogo: "/pakistan.png",
    boundaries: 32,
    matches: 8,
  },
];

const TopPlayers = () => {
  return (
    <div className="px-1 py-2 max-w-7xl h-full mx-auto pb-4 md:mt-15">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Players</h2>

      <div className="flex justify-around bg-gray-800 text-white p-4">
        {["Batsmen", "Bowlers", "Boundaries"].map((section) => (
          <button key={section} className="px-4 py-2 hover:bg-gray-600 rounded">
            {section}
          </button>
        ))}
      </div>

      {/* Top Batsmen Table */}
      <div className="bg-white rounded-lg shadow-lg mb-6 py-2">
        {/* <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">
          🏏 Top 10 Batsmen
        </h3> */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            {/* Table Header */}
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 text-left">Player</th>
                <th className="px-4 py-2 text-center">Runs</th>
                <th className="px-4 py-2 text-center">AVG</th>
                <th className="px-4 py-2 text-center">M</th>
              </tr>
            </thead>

            {/* Table Body with alternating row colors */}
            <tbody>
              {topBatsmen.map((player, index) => (
                <tr
                  key={player.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-3 flex items-center gap-3 text-gray-800">
                    <GiEgyptianProfile className="text-2xl text-gray-600" />
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <img
                          src={player.teamLogo}
                          alt={player.team}
                          className="w-5 h-5 rounded-full"
                        />
                        <span>{player.team}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-700">
                    {player.runs}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-700">
                    {player.avg}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-700">
                    {player.matches}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top 10 Bowlers Table */}
      <div className="bg-white rounded-lg shadow-lg mb-6 ">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center pt-4">
          🏏 Top 10 Bowlers
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            {/* Table Header */}
            <thead className="bg-black text-white">
              <tr>
                <th className="px-7 py-2 text-left">Player</th>
                <th className="px-4 py-2 text-center">Wickets</th>
                <th className="px-4 py-2 text-center">Eco</th>
                <th className="px-4 py-2 text-center">M</th>
              </tr>
            </thead>

            {/* Table Body with alternating row colors */}
            <tbody>
              {topBowlers.map((player, index) => (
                <tr
                  key={player.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-4 py-3 flex items-center gap-3 text-gray-800">
                    <GiEgyptianProfile className="text-2xl text-gray-600" />
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <img
                          src={player.teamLogo}
                          alt={player.team}
                          className="w-5 h-5 rounded-full"
                        />
                        <span>{player.team}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-700">
                    {player.wickets}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-700">
                    {player.economy}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-gray-700">
                    {player.matches}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Highest Boundaries Table */}
      {/* Highest Boundaries Table */}
      <div className="bg-white rounded-lg shadow-lg ">
        <h3 className="text-2xl text-center font-semibold text-gray-900 mb-3">
          🔥 Highest Boundaries
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-sm">
            {/* Table Header */}
            <thead className="bg-black text-white">
              <tr>
                <th className="px-7 py-2 text-left">Player</th>
                <th className="px-3 py-2 text-center"> Sixes</th>
                <th className="px-3 py-2 text-center"> Fours</th>
                <th className="px-3 py-2 text-center"> Matches</th>
              </tr>
            </thead>

            {/* Table Body with alternating row colors */}
            <tbody>
              {highestBoundaries.map((player, index) => (
                <tr
                  key={player.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="px-3 py-2 flex items-center gap-2 text-gray-800">
                    <GiEgyptianProfile className="text-lg text-gray-600" />
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <img
                          src={player.teamLogo}
                          alt={player.team}
                          className="w-4 h-4 rounded-full"
                        />
                        <span>{player.team}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 text-center font-semibold text-gray-700">
                    {Math.floor(player.boundaries * 0.4)}
                  </td>
                  <td className="px-3 py-2 text-center font-semibold text-gray-700">
                    {Math.floor(player.boundaries * 0.6)}
                  </td>
                  <td className="px-3 py-2 text-center font-semibold text-gray-700">
                    {player.matches}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopPlayers;
