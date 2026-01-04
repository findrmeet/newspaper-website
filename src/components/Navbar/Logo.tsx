import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <Image src="/logo.svg" alt="Logo" width={56} height={56} />
      <div>
        <h1 className="uppercase font-bold text-2xl text-white sm:text-black">
          All Bangla
        </h1>
        <span className="px-3 space-x-2.5 uppercase font-normal text-xs text-white bg-[#505EFF]">
          <span>n</span>
          <span>e</span>
          <span>w</span>
          <span>s</span>
          <span>p</span>
          <span>a</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
