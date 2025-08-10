"use client";

import { useState } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Misyonumuz",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    id: 2,
    title: "Vizyonumuz",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  // İstersen buraya ek başlıklar ekleyebilirsin.
];

export default function AccordionWithImage({ imageSrc = "https://images.unsplash.com/photo-1497436072909-f5e4be06d9c6?w=800&h=600&fit=crop" }: { imageSrc?: string }) {
  const [activeId, setActiveId] = useState(data[1].id); // Başlangıçta "Vizyonumuz" aktif

  const toggle = (id: number) => {
    setActiveId((prev: number) => (prev === id ? 0 : id));
  };

  return (
    <div className="flex flex-col md:flex-row w-full border border-gray-300 transition-all duration-300 pb-12" style={{ minHeight: "80vh" }}>
      {/* Sol Görsel Alanı - Mobile: üstte, Desktop: solda */}
      <div className="w-full md:w-11/20 h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt="Left Visual"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Sağ Accordion Alanı - Mobile: altta, Desktop: sağda */}
      <div className="w-full md:w-9/20 h-full border-l-0 md:border-l border-t md:border-t-0 border-gray-300 bg-white p-5 md:p-10 overflow-y-auto transition-all duration-300">
        {data.map(({ id, title, description }) => {
          const isActive = id === activeId;
          return (
            <div key={id} className="border-b border-gray-200">
              <button
                onClick={() => toggle(id)}
                className={`flex justify-between items-center w-full text-left transition-all duration-300 py-4 md:py-6 focus:outline-none
                  ${isActive ? "text-indigo-600 font-semibold" : "text-gray-400 font-normal"}
                  `}
                style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "1.25rem" }} // Mobile için küçültüldü
              >
                <span className="text-lg md:text-2xl">{title}</span>
                <span className="transform transition-all duration-300 flex-shrink-0 ml-2">
                  {isActive ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-7 md:w-7 rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-7 md:w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>

              {isActive && (
                <div
                  className="pb-6 md:pb-10 text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Spectral', serif", fontSize: "1rem" }} // Mobile için küçültüldü
                >
                  {description.split("\n\n").map((p, i) => (
                    <p key={i} className="mb-3 md:mb-5 text-sm md:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}