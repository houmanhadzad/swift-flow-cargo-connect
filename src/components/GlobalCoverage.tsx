import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Globe } from 'lucide-react';

const GlobalCoverage = () => {
  const { t } = useLanguage();
  
  const images = [
    {
      src: "/lovable-uploads/0ab00249-b347-426f-8937-e8ffc7f6e837.png",
      alt: "Forklift loading container"
    },
    {
      src: "/lovable-uploads/0b0ccfce-aa74-4f9a-b6ba-be923dcbac72.png",
      alt: "Container yard with colorful containers"
    },
    {
      src: "/lovable-uploads/72382e84-2307-4e84-802f-188acfc416e7.png",
      alt: "Container stacking operations"
    },
    {
      src: "/lovable-uploads/84e0f91d-1c1c-4177-9c4a-47f0830cb0f9.png",
      alt: "Container with blue cargo bags"
    },
    {
      src: "/lovable-uploads/40fb6d45-5be2-427d-a269-0cf2a67570f3.png",
      alt: "Oil barrels arranged in rows"
    },
    {
      src: "/lovable-uploads/ade97297-ec2e-4a6f-b9ed-815de22edcce.png",
      alt: "Large container yard with stacked shipping containers"
    },
  ];
  
  return (
    <div id="coverage" className="py-20 bg-ocean-DEFAULT text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Carousel className="w-full max-w-xl mx-auto" opts={{ loop: true }}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="border-0 shadow-xl overflow-hidden">
                          <CardContent className="p-0">
                            <AspectRatio ratio={4/3} className="bg-muted">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full rounded-md"
                                loading="lazy"
                              />
                            </AspectRatio>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="lg:-left-4 left-2 bg-white/80 hover:bg-white border-none" />
                <CarouselNext className="lg:-right-4 right-2 bg-white/80 hover:bg-white border-none" />
              </Carousel>
              <div className="absolute -bottom-5 -right-5 hidden lg:flex">
                <div className="bg-ocean-dark p-3 rounded-lg shadow-lg flex items-center gap-2">
                  <Globe className="h-5 w-5 text-white" />
                  <span className="text-white font-bold">{t('coverage.globalPresence')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCoverage;
