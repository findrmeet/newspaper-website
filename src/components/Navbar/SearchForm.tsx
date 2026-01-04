import Image from "next/image";

const SearchForm = () => {
  return (
    <div className="mt-4 sm:mt-0 w-full flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-400 border border-gray-400">
      <Image src="/search.svg" alt="Search Icon" width={16} height={16} />
      <input
        id="newspaper"
        type="text"
        name="newspaper"
        placeholder="Search Here..."
        className=" block min-w-0 grow bg-transparent py-1.5 pr-3 pl-2 text-base  placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
      />
    </div>
  );
};

export default SearchForm;
