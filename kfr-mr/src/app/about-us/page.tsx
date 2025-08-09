import Breadcrumb from '@/components/Breadcrumb';

export default function AboutUsPage() {
  return (
    <div className="h-[300px] lg:h-[400px]">
      {/* Breadcrumb Component */}
      <Breadcrumb 
        backgroundImageSrc="/3.jpg" // You can add your background image path here
        title="Hakkımızda"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about-us' }
        ]}
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
      />
      
      
    </div>
  );
}
