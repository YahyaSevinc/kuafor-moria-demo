import Breadcrumb from '@/components/Breadcrumb';
import ServiceSection from '@/components/services/ourServices';
import TestimonialsComponent from '@/components/services/Comments';


export default function AboutUsPage() {
  return (
<div className="min-h-screen">
      {/* Breadcrumb Component */}
      <Breadcrumb 
        backgroundImageSrc="/3.jpg" // You can add your background image path here
        title="Hizmetlerimiz"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Hizmetlerimiz', href: '/services' }
        ]}
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
      />
      <ServiceSection
  leftTag="Saç Kesim"
  leftTitle="Kadınlara Özel Saç Kesimi ve Şekillendirme Hizmeti"
  leftSubtitle="Kadınlar için özel tasarlanmış saç kesim hizmetimizle tarzınızı yansıtın."  // ekledim
  leftDescription="Yüz hatlarınıza, saç tipinize ve stilinize uygun özel kesim teknikleriyle, tarzınızı en iyi şekilde yansıtmanıza yardımcı oluyoruz."
  leftButtonText="Randevu Al"
  leftImageSrc="/1.png"
  
  rightTag="Saç Bakım"
  rightTitle="Herkese Özel Saç Bakımı ve Şekillendirme Hizmeti"
  rightSubtitle="Saç bakımında uzmanlaşmış ekibimizle sağlıklı ve parlak saçlara kavuşun."  // ekledim
  rightDescription="Yüz hatlarınıza, saç tipinize ve stilinize uygun özel kesim teknikleriyle, tarzınızı en iyi şekilde yansıtmanıza yardımcı oluyoruz."
  rightButtonText="Randevu Al"
  rightImageSrc="/1.png"
/>
      <TestimonialsComponent />

    </div>
  )
}