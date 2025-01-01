import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/app/utils/imports";
import { CategoryProps } from "@/app/utils/type";

const Category: React.FC<CategoryProps> = ({
  selectedCategory,
  isQuizCompleted,
  categories,
  setQuizzes,
  setCategoryName,
}) => {
  const [hover, setHover] = useState(null);
  return (
    <div>
<h2 className="text-4xl bg-[#B8FF9F] text-center border-b-2 py-4 border-black font-bold ">
        Select Your Battlefield!
      </h2>
      {!selectedCategory && !isQuizCompleted && (
        <ul className="flex justify-center  mt-16 items-center flex-wrap gap-10">
          {categories.map((category) => (
            <button
              onClick={() => {
                setQuizzes(category.id);
                setCategoryName(category.name);
              }}
              key={category.id}
              onMouseEnter={() => setHover(category.id)}
              onMouseLeave={() => setHover(null)}
              className={` ${
                hover === category.id ? "bg-[#F193DD] " : "bg-black"
              } inline-block rounded-sm text-center border-black border transition-all duration-300 text-lg font-semibold w-52 h-52`}
            >
              <span
                className={`rounded-sm block -translate-x-[0.2rem] -translate-y-[0.2rem] border border-black transition-all duration-300 h-52 ${
                  hover === category.id ? "bg-[#FFC8E6] border-black" : ""
                }`}
              >
                <span
                  className={`${
                    hover === category.id ? "-translate-x-[0.2rem] -translate-y-[0.2rem]" : ""
                  } px-5 py-3 border-2 text-2xl border-black capitalize transition-all duration-300 bg-[#FC9CE9] h-52 flex flex-col justify-center items-center gap-3 `}
                >
                  <Image src={IMAGES.DB} alt="db" className="w-20" />
                  {category.name}
                </span>
              </span>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;
