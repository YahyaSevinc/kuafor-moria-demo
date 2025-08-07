import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    image: "/1.png",
    category: "Eğitim",
    title: "Nasıl Daha İyi Saç Kesimi Yapabilirsiniz Kendinizi Geliştirmeniz İçin Tüyolar",
    date: "31 Temmuz 2025",
    href: "/blog/1"
  },
  {
    id: 2,
    image: "/1.png",
    category: "Eğitim",
    title: "Nasıl Daha İyi Saç Kesimi Yapabilirsiniz Kendinizi Geliştirmeniz İçin Tüyolar",
    date: "31 Temmuz 2025",
    href: "/blog/2"
  }
];

const BlogPreview = () => {
  return (
    <section className="flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-4 sm:mb-6">
        <span className="bg-[#F5F2FF] text-[#623EDF] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-medium">Haberlerimiz</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-2 sm:mb-4 px-4">Yeni Haberlerimiz</h2>
      <p className="text-gray-500 text-center max-w-2xl mb-6 sm:mb-10 text-sm sm:text-base px-4">
        Sektörümüzle ilgili yeni haberleri keşfedebilir okuyabilir, bilgilenebilirsiniz<br className="hidden sm:block" />
        elimden geldiğince uzatmaya çalışıyorum.
      </p>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12 w-full max-w-4xl justify-center items-center">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full md:w-[350px] max-w-full hover:scale-105 transition-all duration-300">
            <div className="overflow-hidden rounded-xl mb-4">
              <Image src={post.image} alt={post.title} width={350} height={200} className="object-cover w-full h-[150px] sm:h-[200px]" />
            </div>
            <span className="text-xs text-[#5D38DE] bg-[#F5F2FF] px-2 sm:px-3 py-1 rounded-2xl font-medium mb-2 inline-block">{post.category}</span>
            <h3 className="text-base sm:text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2">{post.date}</p>
          </div>
        ))}
      </div>
      <Link href="/blog" className="bg-[#5D38DE] hover:bg-[#5432CC] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-regular flex items-center gap-2 hover:scale-105 transition-all duration-300">
        Tümünü Gör
        <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </section>
  );
};

export default BlogPreview;
