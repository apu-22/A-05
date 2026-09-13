import { use, useState } from "react";
import type { ItechType } from "../../types/techType";
import TechCard from "./TechCard";
import TechStack from "./TechStack";
import { toast } from "react-toastify";

interface TechProps {
  techData: Promise<ItechType[]>;
}

export default function TechnolyCard({ techData }: TechProps) {
  const tech = use(techData);
  const [selectedStack, setSelectedStack] = useState<ItechType[]>([]);

  // Add technology to stack
  const handleAddToStack = (item: ItechType) => {
    if (selectedStack.some(techItem => techItem.id === item.id)) {
      toast.warn(`${item.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, item]);
    toast.success(`${item.name} added to your stack!`);
  };

  // Remove single technolo from stack using filter method
  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedStack.find(techItem => techItem.id === id);
    setSelectedStack(selectedStack.filter(techItem => techItem.id !== id));
    toast.info(`${itemToRemove?.name || "Technology"} removed from your stack!`);
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("All technologies removed from your stack!");
  };

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
          Technologies
        </span>{" "}
      </h1>
      <p className="mt-4 mb-12 text-lg text-slate-600">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 items-start">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tech.map((item: ItechType) => (
            <TechCard
              key={item.id}
              item={item}
              onAddToStack={handleAddToStack}
              isAdded={selectedStack.some(techItem => techItem.id === item.id)}
            />
          ))}
        </div>

        <div className="lg:col-span-1 sticky top-6 rounded-3xl border border-slate-100 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
          <p className="mt-1 text-sm text-slate-400">
            {selectedStack.length === 0
              ? "No technologies selected yet."
              : `${selectedStack.length} Technology Selected`}
          </p>

          {selectedStack.length === 0 ? (
            <div className="mt-6 flex h-28 items-center justify-center rounded-2xl border border-dashed border-slate-200 p-4 text-center text-slate-400">
              Your stack is empty.
            </div>
          ) : (
            <TechStack
              selectedStack={selectedStack}
              onRemoveFromStack={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          )}
        </div>
      </div>

    </section>
  );
}
