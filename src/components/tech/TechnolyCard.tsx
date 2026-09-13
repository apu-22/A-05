import { use } from "react";
import type { ItechType } from "../../types/techType";
import TechCard from "./TechCard";

interface TechProps {
  techData: Promise<ItechType[]>;
}

export default function TechnolyCard({ techData }: TechProps) {
  const tech = use(techData);

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>{" "}
      </h1>
      <p className="mt-4 mb-12 text-lg text-slate-600">
        Pick one technology per category to build your ideal stack.
      </p>

      {/* 4 equal parts layout: 3 parts for cards, 1 part for Your Stack */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 items-start">
        {/* 3 parts: Tech Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tech.map((item: ItechType) => (
            <TechCard key={item.id} item={item} />
          ))}
        </div>

        {/* 4th part: Your Stack */}
        <div className="lg:col-span-1 sticky top-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-sm text-slate-400">
            No technologies selected yet.
          </p>

          <div className="mt-6 flex h-28 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/40 p-4 text-center text-xs font-medium text-slate-400">
            Your stack is empty.
          </div>
        </div>
      </div>

    </section>
  );
}
