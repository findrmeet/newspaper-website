import Link from "next/link";

const sidebarLinks = [
  "All Bangla Newspapers",
  "Bangladesh E-Paper",
  "All Online Newspapers",
  "All Local Newspapers",
  "Bangladesh Division Newspapers",
  "All Bangladeshi English Newspapers",
  "All Bangla TV Channels News",
  "All Bangladesh Share Bazer Newspapers",
  "All West Bangla Newspapers Kolkata",
  "All Assam Newspapers",
];

const Sidebar = () => {
  return (
    <div className="max-w-60 hidden flex-col gap-2 rounded-xl border border-gray-300 p-2 sm:flex">
      {sidebarLinks.map((label) => (
        <Link
          key={label}
          href="#"
          className="cursor-pointer rounded-md bg-gray-100 px-3 py-2 text-black transition-colors hover:bg-gray-200 focus:bg-indigo-500 focus:text-white"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
