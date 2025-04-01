import LiveMatch from "@/Components/Live";
import Matches from "@/Components/Matches";
import Navbar from "@/Components/Navbar.components";
import TopPlayers from "@/Components/PlayersStats";
import Standings from "@/Components/Standing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="px-1 py-1 md:px-10 md:py-10 bg-orange-50 min-h-screen">
        <LiveMatch />
      </div>
    </div>
  );
}
