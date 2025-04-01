import React from "react";
import Image from "next/image";
import { FaTrophy, FaBroadcastTower } from "react-icons/fa";

// Sample Data
const matches = [
  {
    id: 1,
    team1: {
      name: "India",
      initials: "IN",
      logo: "/india.png",
      score: "210/3 (18.4)",
    },
    team2: {
      name: "Australia",
      initials: "AU",
      logo: "/australia.png",
      score: "205/7 (20)",
    },
    win: "India",
    status: "Live",
    dateTime: "2025-03-31 16:00",
  },
  {
    id: 2,
    team1: {
      name: "England",
      initials: "EN",
      logo: "/england.png",
      score: "178/5 (20)",
    },
    team2: {
      name: "Pakistan",
      initials: "PK",
      logo: "/pakistan.png",
      score: "180/4 (19.3)",
    },
    status: "Completed",
    win: "Pakistan",
    dateTime: "2025-03-30 18:30",
  },
  {
    id: 3,
    team1: {
      name: "South Africa",
      initials: "ZA",
      logo: "/southafrica.png",
      score: "200/4 (20)",
    },
    team2: {
      name: "Sri Lanka",
      initials: "LK",
      logo: "/srilanka.png",
      score: "190/5 (20)",
    },
    status: "Upcoming",
    win: "N/A",
    dateTime: "2025-04-01 14:00",
  },
  {
    id: 4,
    team1: {
      name: "New Zealand",
      initials: "NZ",
      logo: "/newzealand.png",
      score: "170/6 (20)",
    },
    team2: {
      name: "West Indies",
      initials: "WI",
      logo: "/westindies.png",
      score: "175/4 (19.5)",
    },
    status: "Live",
    win: "West Indies",
    dateTime: "2025-04-02 18:00",
  },
  {
    id: 5,
    team1: {
      name: "Bangladesh",
      initials: "BD",
      logo: "/bangladesh.png",
      score: "180/7 (20)",
    },
    team2: {
      name: "Afghanistan",
      initials: "AF",
      logo: "/afghanistan.png",
      score: "185/5 (20)",
    },
    status: "Completed",
    win: "Afghanistan",
    dateTime: "2025-04-03 19:30",
  },
  {
    id: 6,
    team1: {
      name: "Zimbabwe",
      initials: "ZW",
      logo: "/zimbabwe.png",
      score: "160/6 (20)",
    },
    team2: {
      name: "Nepal",
      initials: "NP",
      logo: "/nepal.png",
      score: "150/8 (20)",
    },
    status: "Upcoming",
    win: "N/A",
    dateTime: "2025-04-04 15:00",
  },
  {
    id: 7,
    team1: {
      name: "Afghanistan",
      initials: "AF",
      logo: "/afghanistan.png",
      score: "190/5 (20)",
    },
    team2: {
      name: "India",
      initials: "IN",
      logo: "/india.png",
      score: "195/3 (20)",
    },
    status: "Upcoming",
    win: "N/A",
    dateTime: "2025-04-05 17:00",
  },
  {
    id: 8,
    team1: {
      name: "Australia",
      initials: "AU",
      logo: "/australia.png",
      score: "220/4 (20)",
    },
    team2: {
      name: "England",
      initials: "EN",
      logo: "/england.png",
      score: "210/5 (20)",
    },
    status: "Live",
    win: "Australia",
    dateTime: "2025-04-06 20:00",
  },
  {
    id: 9,
    team1: {
      name: "Sri Lanka",
      initials: "LK",
      logo: "/srilanka.png",
      score: "170/5 (20)",
    },
    team2: {
      name: "South Africa",
      initials: "ZA",
      logo: "/southafrica.png",
      score: "175/4 (19.4)",
    },
    status: "Completed",
    win: "South Africa",
    dateTime: "2025-04-07 12:00",
  },
  {
    id: 10,
    team1: {
      name: "New Zealand",
      initials: "NZ",
      logo: "/newzealand.png",
      score: "160/6 (20)",
    },
    team2: {
      name: "Pakistan",
      initials: "PK",
      logo: "/pakistan.png",
      score: "150/8 (20)",
    },
    status: "Upcoming",
    win: "N/A",
    dateTime: "2025-04-08 16:30",
  },
];


const Matches = () => {
  return (
    <div className="pt-5 mb-20 md:mb-0 md:mt-10 px-3 md:px-10 md:py-10 bg-orange-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">2025 APL - Matches</h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-8">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between border border-gray-200"
          >
            <div className="flex justify-between text-gray-700 text-sm mb-1">
              <p
                className={`font-medium flex items-center space-x-1 ${
                  match.status === "Live" ? "text-red-600" : "text-green-600"
                }`}
              >
                <FaBroadcastTower />
                <span>{match.status}</span>
              </p>
              <p>{match.dateTime}</p>
            </div>

            <div>
              {/* Team 1 */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <Image
                    src={match.team1.logo}
                    alt={match.team1.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-gray-900 font-semibold">{match.team1.name}</span>
                </div>
                <p className="text-gray-900 font-bold">{match.team1.score}</p>
              </div>

              <p className="text-center text-gray-600 font-medium">vs</p>

              {/* Team 2 */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center space-x-2">
                  <Image
                    src={match.team2.logo}
                    alt={match.team2.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-gray-900 font-semibold ">{match.team2.name}</span>
                </div>
                <p className="text-gray-900 font-bold">{match.team2.score}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 text-gray-700 font-medium">
              <div className="flex items-center">
                <FaTrophy className="text-yellow-500 text-lg mr-1" />
                <span>{match.win}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default Matches;
