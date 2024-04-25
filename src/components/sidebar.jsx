import { SIDEBAR_NAV } from "@/lib/constants";

const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col w-[300px] py-10 px-6 bg-gradient-to-br from-black via-black to-purple-800/50 backdrop-blur-lg">
      <h1 className="text-4xl font-bold text-purple-500">MUSEFI</h1>
      <div className="flex flex-col">
        {SIDEBAR_NAV.map((nav) => (
          <a
            key={nav.label}
            href={nav.href}
            className="text-white text-lg font-medium mt-8 hover:text-orange-500 transition-all"
          >
            {nav.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
