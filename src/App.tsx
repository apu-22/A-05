import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnolyCard from "./components/tech/TechnolyCard";
import { Suspense } from "react";
import type { ItechType } from "./types/techType";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={false} />
    </>
  );
}

export default App;

