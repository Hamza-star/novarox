import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">N</span>
      </div> */}
      <span className="text-2xl font-bold text-midnight_text dark:text-white">
        Nova<span className="text-blue-600">rox</span>e
      </span>
    </Link>
  );
};

export default Logo;
