import DisplayMusic from "@/components/display-music";
import GenreSelection from "../../../components/genre-selection";

const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col gap-2 mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover Music
        </h2>
        <GenreSelection />
      </div>
      <DisplayMusic />
    </div>
  );
};

export default Page;
