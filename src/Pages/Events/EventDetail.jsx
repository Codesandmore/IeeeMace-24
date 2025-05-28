import { useParams } from "react-router-dom";
import { useState } from "react";

const eventList = [
  {
    eventName: "Cybosium",
    eventImage: "/images/events/cybosium.jpg",
    additionalImages: ["/images/events/cybosium/c1.JPG", "/images/events/cybosium/c2.JPG", "/images/events/cybosium/c3.JPG", "/images/events/cybosium/c4.JPG", "/images/events/cybosium/c5.JPG", "/images/events/cybosium/c6.JPG", "/images/events/cybosium/c7.JPG", "/images/events/cybosium/c8.JPG", "/images/events/cybosium/c9.JPG"],
    details: "India’s inaugural Robotic Seasonal School, organized by IEEE RAS SBC MACE, featured hybrid sessions and a three-day offline event, focusing on bridging theory and practice in robotics and automation.",
  },
  {
    eventName: "SIGMA",
    eventImage: "/images/events/sigma.jpg",
    additionalImages: ["/images/events/sigma/s1.JPG","/images/events/sigma/s2.JPG","/images/events/sigma/s3.JPG","/images/events/sigma/s4.JPG","/images/events/sigma/s11.JPG","/images/events/sigma/s5.JPG","/images/events/sigma/s6.JPG","/images/events/sigma/s10.JPG","/images/events/sigma/s7.JPG","/images/events/sigma/s9.JPG","/images/events/sigma/s8.JPG" ],
    details: "The IEEE SPS Student Branch Chapter MACE and the IEEE SPS Kerala Chapter hosted a two-day event for students in Kerala to explore signal processing through talks, workshops, and interactions.",
  },
  {
    eventName: ".hack();",
    eventImage: "/images/events/hack23.jpg",
    additionalImages: ["/images/events/hack/h1.JPG","/images/events/hack/h2.JPG","/images/events/hack/h3.JPG","/images/events/hack/h4.JPG","/images/events/hack/h6.JPG","/images/events/hack/h7.JPG","/images/events/hack/h8.JPG","/images/events/hack/h9.JPG","/images/events/hack/h10.JPG" ],
    details: "The 5th edition of IEEE MACE SB's flagship event, .hack24, was a 36-hour coding marathon held from August 30 to September 1, 2024. Sponsored by IEEE HTB  and Accelerate X, the event aimed to foster innovation and address pressing social issues through technology.",
  },
  {
    eventName: "AKComSocSC 2024",
    eventImage: "/images/events/akcomsoc.JPG",
    additionalImages: ["/images/events/akcomsoc/a1.JPG","/images/events/akcomsoc/a2.JPG","/images/events/akcomsoc/a3.JPG","/images/events/akcomsoc/a6.JPG","/images/events/akcomsoc/a5.JPG","/images/events/akcomsoc/a4.JPG","/images/events/akcomsoc/a7.JPG","/images/events/akcomsoc/a8.JPG","/images/events/akcomsoc/a9.JPG","/images/events/akcomsoc/a10.JPG","/images/events/akcomsoc/a11.JPG","/images/events/akcomsoc/a12.JPG"],
    details: "IEEE MACE SB hosted the All Kerala Communication Society Student Conclave that brought together students, professionals, and tech enthusiasts for two days of learning, networking, and innovation through diverse sessions and workshops.",
  },
  {
    eventName: "HACK-A-ADDICT",
    eventImage: "/images/events/hackaddict.JPG",
    additionalImages: ["/images/events/hackaddict/h1.JPG","/images/events/hackaddict/h2.JPG","/images/events/hackaddict/h3.JPG","/images/events/hackaddict/h4.JPG","/images/events/hackaddict/h5.JPG","/images/events/hackaddict/h6.JPG","/images/events/hackaddict/h8.JPG","/images/events/hackaddict/h9.JPG","/images/events/hackaddict/h10.JPG"],
    details: "The Hack-A-Addict hackathon was organized by IEEE MACE SB and Model Lions Club Adoor Emirates, was a 24-hour innovation marathon tackling drug addiction. The event had a prize pool of Rs.1,75,000 with additional support of Rs.50,000 for App Development.",
  },
  {
    eventName: "FUSION",
    eventImage: "/images/events/fusion.JPG",
    additionalImages: ["/images/events/fusion/f1.JPG","/images/events/fusion/f2.JPG","/images/events/fusion/f3.JPG","/images/events/fusion/f4.JPG","/images/events/fusion/f5.JPG","/images/events/fusion/f6.JPG","/images/events/fusion/f7.jpg","/images/events/fusion/f8.JPG","/images/events/fusion/f9.JPG", ],
    details: " IEEE SPS SBC MACE with IEEE SPS Kerala Chapter conducted  FUSION-Future of Signal Understanding through Innovation and Organized Networks. The event featured workshops, seminars, and keynote speeches from experts in the field which propelled the future of signal processing research and its real-world applications.",
  },
  {
    eventName: "Industrial Visit",
    eventImage: "/images/events/iv.JPG",
    additionalImages: ["/images/events/iv/i1.JPG","/images/events/iv/i2.JPG","/images/events/iv/i3.jpg","/images/events/iv/i4.jpg","/images/events/iv/i5.JPG","/images/events/iv/i8.JPG","/images/events/iv/i7.jpg","/images/events/iv/i6.JPG"],
    details: "IEEE PES SBC MACE, IEEE IE/PELS Jt. Chapter MACE and IEEE IAS SBC MACE jointly organized an industrial visit to the Lower Periyar KSEB Substation, Karimanal. The visit provided students with practical exposure and enhanced their understanding of power distribution and grid operations.",
  },
  {
    eventName: "Light the Lives",
    eventImage: "/images/events/LightTheLives.jpg",
    additionalImages: ["/images/events/light1.jpg", "/images/events/light2.jpg"],
    details: "IEEE SIGHT Group MACE volunteers, backed by the IEEE Humanities Technological Board, electrified disadvantaged communities in Kuttampuzha, earning the Amarnath Raja Award.",
  },
  {
    eventName: "ELLENOVE",
    eventImage: "/images/events/ellenove.jpg",
    additionalImages: ["/images/events/ellenove1.jpg", "/images/events/ellenove2.jpg"],
    details: "IEEE WIE AG MACE hosted ELLENOVE , a two-session event combining technical and soft skills training. Supported by  the R10 DEI Grant, the event featured expert-led sessions on front-end development and personal development.",
  },
  {
    eventName: "SPARC",
    eventImage: "/images/events/sparc.jpg",
    additionalImages: ["/images/events/sparc/s1.JPG","/images/events/sparc/s2.JPG","/images/events/sparc/s3.JPG","/images/events/sparc/s4.JPG","/images/events/sparc/s5.JPG","/images/events/sparc/s6.JPG","/images/events/sparc/s7.JPG","/images/events/sparc/s8.JPG","/images/events/sparc/s9.JPG"],
    details: "The Student Professional Activities Regional Conclave aimed to bridge the academic-professional gap, allowing students to enhance their expertise and prepare for a brighter future.",
  },
  ];

  export default function EventDetail() {
    const { eventName } = useParams();
    const event = eventList.find(
      (e) => e.eventName.replace(/\s+/g, "-").toLowerCase() === eventName
    );
    const [selectedImage, setSelectedImage] = useState(null);
  
    if (!event) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#001D3E]">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
            <div className="text-[#001D3E] text-6xl mb-4">404</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <a href="/events" className="inline-block bg-[#001D3E] hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200">
              Back to Events
            </a>
          </div>
        </div>
      );
    }
  
    // Use additional images for the gallery
    const galleryImages = [...event.additionalImages];
  
    // Open modal with selected image
    const openModal = (imgSrc) => {
      setSelectedImage(imgSrc);
    };
  
    // Close modal
    const closeModal = () => {
      setSelectedImage(null);
    };
  
    return (
      <div className="bg-[#001D3E] min-h-screen pb-16">
        {/* Hero section with main image */}
        <div 
          className="w-full h-96 relative bg-cover bg-center" 
          style={{ backgroundImage: `url(${event.eventImage})` }}
        >
          <div className="absolute inset-0 bg-[#001D3E] bg-opacity-65 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-4xl">
              <h1 className="text-5xl font-bold mb-2 tracking-tight">{event.eventName}</h1>
              <div className="w-24 h-1 bg-blue-400 mx-auto my-4"></div>
            </div>
          </div>
        </div>
  
        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4 -mt-16">
          <div className="bg-[#CFE6EC] rounded-xl shadow-xl p-8 mt-32">
            {/* Event details */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-black">About the Event</h2>
              <p className="text-lg text-black leading-relaxed">{event.details}</p>
            </div>
            
            {/* Gallery Section - New Staggered Design */}
            <div className="4">
              <h2 className="text-3xl font-bold mb-6 text-black">Gallery</h2>
              
              {galleryImages.length > 0 && (
                <div className="relative">
                  {/* Dynamic Gallery Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* First Column */}
                    <div className="space-y-4">
                      {galleryImages.filter((_, i) => i % 3 === 0).map((img, index) => (
                        <div 
                          key={`col1-${index}`} 
                          className="relative group rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                          onClick={() => openModal(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${event.eventName} image`}
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                        </div>
                      ))}
                    </div>
                    
                    {/* Second Column */}
                    <div className="space-y-4">
                      {galleryImages.filter((_, i) => i % 3 === 1).map((img, index) => (
                        <div 
                          key={`col2-${index}`} 
                          className="relative group rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                          onClick={() => openModal(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${event.eventName} image`}
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                        </div>
                      ))}
                    </div>
                    
                    {/* Third Column */}
                    <div className="space-y-4">
                      {galleryImages.filter((_, i) => i % 3 === 2).map((img, index) => (
                        <div 
                          key={`col3-${index}`} 
                          className="relative group rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                          onClick={() => openModal(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${event.eventName} image`}
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
  
        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-[#001D3E] bg-opacity-95 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-6xl max-h-screen">
              <button 
                className="absolute top-4 right-4 text-white bg-[#001D3E] bg-opacity-75 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90"
                onClick={closeModal}
              >
                ✕
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-h-screen max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    );
  }