import Breadcrumb from '@/components/Breadcrumb';
import AboutPageContent from '@/components/aboutUs/AboutPageContent';
import MissionVision from "@/components/aboutUs/MissionVision";
import OurServices from "@/components/aboutUs/ourServices";


export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
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
      
      {/* About Page Content */}
      <AboutPageContent />
      <MissionVision imageSrc="/1.png" />
      <OurServices backgroundImage="/1.png" />
    </div>
  );
}
