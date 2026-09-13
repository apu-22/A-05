import type { ItechType } from "../../types/techType";
import starIcon from "../../assets/star.png";

interface TechCardProps {
  item: ItechType;
  onAddToStack: (item: ItechType) => void;
  isAdded: boolean;
}

const badgeColors: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-500 border-sky-200/70",
  Standard: "bg-emerald-50 text-emerald-600 border-emerald-200/70",
  "Top SQL": "bg-blue-50 text-blue-600 border-blue-200/70",
  Cache: "bg-rose-50 text-rose-600 border-rose-200/70",
  Ubiquitous: "bg-amber-50 text-amber-600 border-amber-200/70",
  Essential: "bg-sky-50 text-sky-600 border-sky-200/70",
  Fast: "bg-orange-50 text-orange-600 border-orange-200/70",
  Flexible: "bg-purple-50 text-purple-600 border-purple-200/70",
  Lightweight: "bg-teal-50 text-teal-600 border-teal-200/70",
  Containers: "bg-cyan-50 text-cyan-600 border-cyan-200/70",
  Deploy: "bg-violet-50 text-violet-600 border-violet-200/70",
  "Developer Friendly": "bg-indigo-50 text-indigo-600 border-indigo-200/70",
  "Quick Start": "bg-amber-50 text-amber-600 border-amber-200/70",
  Testing: "bg-emerald-50 text-emerald-600 border-emerald-200/70",
};

export default function TechCard({ item, onAddToStack, isAdded }: TechCardProps) {
  return (
    <div className="group grid content-between gap-6 rounded-2xl border border-slate-100 p-6 hover:shadow-md cursor-pointer transition-all duration-300">
      <div>

        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center">
            <img
              src={item.icon}
              alt={item.name}
              className="h-10 w-10 object-contain"
              loading="lazy"
            />
          </div>
          {item.badge && (
            <span
              className={`rounded-full border px-3.5 py-1 text-xs font-semibold ${badgeColors[item.badge] || "bg-sky-50 text-sky-600 border-sky-200/70"
                }`}
            >
              {item.badge}
            </span>
          )}
        </div>

        <h2 className="mt-5 text-2xl font-bold text-slate-900">
          {item.name}
        </h2>


        <p className="mt-3 text-sm text-slate-500">
          {item.description}
        </p>
      </div>

      <div>

        <div className="mt-5 flex items-center justify-between text-xs">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5 font-medium text-slate-600">
            {item.category}
          </span>
          <span className="font-medium text-slate-500">
            {item.difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-slate-700">
            <img src={starIcon} alt="rating star" className="h-4 w-4 object-contain" />
            <span>{item.rating}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onAddToStack(item)}
          className={`mt-6 w-full rounded-2xl py-3.5 text-center text-sm font-semibold transition-all duration-200 ${
            isAdded
              ? "bg-slate-100 text-slate-400 cursor-not-allowed"
              : "bg-[#0B1120] text-white hover:bg-slate-800 cursor-pointer"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
