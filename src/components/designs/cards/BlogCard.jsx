import Link from "next/link";
import BackgroundImage from "../others/BackgroundImage";

function BlogCard({ data }) {
  return (
    <>
      <div
        className="flex-[1_1_225px] group p-2 bg-white h-fit border-2 border-green-700 
      md:border-transparent md:hover:border-green-700 shadow-lg"
      >
        <div className="bg-black w-full h-[130px] md:h-[150px] ">
          {data?.thumbnail && (
            <BackgroundImage
              src={data.thumbnail}
              alt={data.name}
              className="group-hover:scale-105"
            />
          )}
        </div>
        <div className="p-4">
          <p className="text-black text-sm mb-1">{data.tag}</p>
          <p className="font-bold mb-1 text-lg">{data.name}</p>
          <p className="text-[#a4a4a4] text-sm mb-1">
            by <i className="font-medium">{data.author}</i>
          </p>
          <p className="text-[#a4a4a4] text-sm font-medium ">
            {data.createdAt}
          </p>
        </div>
        <Link href={data.slug}>
          <a
            className="text-sm mb-1 px-5 py-2 font-medium block  text-white border-l-2 border-l-green-500 bg-green-500
             md:text-green-500 md:bg-slate-100 md:hover:bg-green-500 md:hover:text-white  hover:border-l-green-700 
            md:translate-x-[-10px]"
          >
            Read more
          </a>
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
