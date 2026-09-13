import type { ItechType } from "../../types/techType";

interface TechStackProps {
  selectedStack: ItechType[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

export default function TechStack({
  selectedStack,
  onRemoveFromStack,
  onRemoveAll,
}: TechStackProps) {
  return (
    <>
      <div className="mt-5 space-y-3">
        {selectedStack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 p-3.5 shadow-xs"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.icon}
                alt={item.name}
                className="h-9 w-9 object-contain"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">
                  {item.name}
                </h4>
                <span className="text-xs text-slate-400 capitalize">
                  {item.category}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onRemoveFromStack(item.id)}
              className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onRemoveAll}
        className="mt-6 w-full rounded-xl border border-red-200 bg-white py-2.5 text-center text-sm font-semibold text-red-500 transition-colors hover:bg-red-50 cursor-pointer"
      >
        Remove All
      </button>
    </>
  );
}
