const Loader = () => {
  return (
    <div className="fixed inset-0 z-100 flex justify-center items-center bg-white dark:bg-darkNavy">
      <div
        className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full"
      >
        <div
          className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 backdrop-blur-md"
        > </div>
      </div>
    </div>
  );
};

export default Loader;
