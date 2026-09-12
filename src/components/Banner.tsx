import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-2 mt-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-[30px] p-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-30 flex gap-4">
            <button className="rounded-[12px] bg-gradient-to-r from-[#FF5722] to-[#D81B7E] px-5 py-2 text-white">
              Explore Technologies
            </button>
            <button className="rounded-[12px] border border-slate-300 bg-white px-15 py-2 text-slate-700">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Banner illustration"
            className="h-auto max-h-[400px] w-full max-w-[520px] object-contain mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
