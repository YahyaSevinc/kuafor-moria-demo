"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { use3DAnimation } from "../hooks/use3DAnimation";
import { animated } from "@react-spring/web";

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
  const { ref: badgeRef, springProps: badgeSpring } = use3DAnimation(200);
  const { ref: headingRef, springProps: headingSpring } = use3DAnimation(400);
  const { ref: descriptionRef, springProps: descriptionSpring } = use3DAnimation(600);
  const { ref: postsRef, springProps: postsSpring } = use3DAnimation(800);
  const { ref: buttonRef, springProps: buttonSpring } = use3DAnimation(1000);
  
  // Pre-generate animation hooks for blog posts
  const post1Animation = use3DAnimation(1200);
  const post2Animation = use3DAnimation(1400);
  const postAnimations = [post1Animation, post2Animation];

  return (
    <section className="flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
     <animated.div 
          ref={badgeRef}
          className="flex justify-center mb-6 sm:mb-8"
          style={badgeSpring}
        >
          <div 
            className="px-5 sm:px-7 py-2 sm:py-3 bg-[#F5F2FF] text-[#623EDF] rounded-full text-sm sm:text-base font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ fontFamily: 'var(--font-spectral), regular' }}
          >
            Haberlerimiz
          </div>
        </animated.div>
      
      <animated.h2 
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-2 sm:mb-4 px-4"
        style={headingSpring}
      >
        Yeni Haberlerimiz
      </animated.h2>
      
      <animated.p 
        ref={descriptionRef}
        className="text-gray-500 text-center max-w-2xl mb-6 sm:mb-10 text-sm sm:text-base px-4"
        style={descriptionSpring}
      >
        Sektörümüzle ilgili yeni haberleri keşfedebilir okuyabilir, bilgilenebilirsiniz<br className="hidden sm:block" />
        elimden geldiğince uzatmaya çalışıyorum.
      </animated.p>
      
      <animated.div 
        ref={postsRef}
        className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12 w-full max-w-4xl justify-center items-center"
        style={postsSpring}
      >
        {blogPosts.map((post, index) => {
          const { ref: postRef, springProps: postSpring } = postAnimations[index];
          
          return (
            <animated.div 
              key={post.id} 
              ref={postRef}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full md:w-[350px] max-w-full hover:scale-105 transition-all duration-300 transform perspective-1000 hover:shadow-2xl"
              style={{
                ...postSpring,
                transform: `${postSpring.transform} perspective(1000px)`,
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'perspective(1000px) rotateX(3deg) rotateY(3deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  width={350} 
                  height={200} 
                  className="object-cover w-full h-[150px] sm:h-[200px] transition-transform duration-300 ease-in-out hover:scale-110" 
                />
                {/* 3D Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-xs text-[#5D38DE] bg-[#F5F2FF] px-2 sm:px-3 py-1 rounded-2xl font-medium mb-2 inline-block">
                {post.category}
              </span>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-2">{post.date}</p>
            </animated.div>
          );
        })}
      </animated.div>
      
      <animated.div ref={buttonRef} style={buttonSpring}>
        <Link 
          href="/blog" 
          className="bg-[#5D38DE] hover:bg-[#5432CC] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-regular flex items-center gap-2 hover:scale-105 transition-all duration-300 transform perspective-1000 hover:shadow-xl"
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.05)';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
          }}
        >
          Tümünü Gör
          <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </animated.div>
    </section>
  );
};

export default BlogPreview;
