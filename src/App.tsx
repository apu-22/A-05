import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnolyCard from "./components/tech/TechnolyCard";
import { Suspense } from "react";
import type { ItechType } from "./types/techType";
import Footer from "./components/Footer";

const techDataFetch = async (): Promise<ItechType[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
}

function App() {
  const techData = techDataFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <TechnolyCard techData={techData} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

