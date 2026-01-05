import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="rounded-xl border border-gray-300 p-2 gap-2 max-w-60 sm:flex flex-col hidden">
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Bangla Newspapers
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        Bangladesh E-Paper
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Online Newspapers
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Local Newspapers
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        Bangladesh Division Newspapers
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Bangladeshi English Newspapers
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Bangla TV Channels News
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Bangladesh Share Bazer Newspapers
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All West Bangla Newspapers Kolkata
      </Link>
      <Link
        href="#"
        className="text-black bg-gray-100  rounded-md py-2 px-3 cursor-pointer focus:bg-indigo-500 focus:text-white hover:bg-gray-200"
      >
        All Assam Newspapers
      </Link>
    </div>
  );
};

export default Sidebar;
