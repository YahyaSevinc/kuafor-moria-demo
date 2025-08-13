import Breadcrumb from '@/components/Breadcrumb';
import Gallery from '@/components/gallery/gallery';



export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Component */}
      <Breadcrumb 
        backgroundImageSrc="/3.jpg" // You can add your background image path here
        title="Galeri"
        breadcrumbItems={[
          { label: 'Anasayfa', href: '/' },
          { label: 'Galeri', href: '/gallery' }
        ]}
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
      />
      
      <Gallery />
    </div>
  );
}
