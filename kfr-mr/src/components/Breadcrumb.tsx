'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  backgroundImageSrc?: string;
  title?: string;
  breadcrumbItems?: BreadcrumbItem[];
  description?: string;
}

export default function Breadcrumb({
  backgroundImageSrc = '/3.jpg',
  title = 'Hakkımızda',
  breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' }
  ],
  description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
}: BreadcrumbProps) {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[400px] overflow-hidden">
      {/* Background Image with Blur */}
      {backgroundImageSrc && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImageSrc}
            alt="Background"
            fill
            className="object-cover object-center"
            style={{
              filter: 'blur(2px)',
              transform: 'scale(1.1)'
            }}
            priority
            sizes="100vw"
          />
        </div>
      )}
     
      {/* Black Overlay (25-30% opacity) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
     
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Side - Title and Breadcrumb */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {/* Breadcrumb Navigation */}
            <nav className="text-white opacity-65">
              <ol className="flex items-center flex-wrap space-x-1 sm:space-x-2 text-xs sm:text-sm font-light">
                {breadcrumbItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-1 sm:mx-2 text-white/50">/</span>
                    )}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-white transition-colors duration-200 hover:underline"
                        style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span
                        className="text-white/70"
                        style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                      >
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
                     
            {/* Main Title */}
            <h1
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {title}
            </h1>
          </div>
                 
          {/* Right Side - Description */}
          <div className="lg:justify-self-end">
            <p className="pb-2 sm:pb-3 lg:pb-4 opacity-0">aciklama</p>
            <p
              className="text-white text-sm sm:text-base lg:text-lg max-w-full sm:max-w-md lg:max-w-lg leading-relaxed font-light"
              style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}