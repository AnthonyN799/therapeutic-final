import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Wind, 
  Flame, 
  Sparkles, 
  ShieldCheck, 
  Mail, 
  Phone, 
  Leaf, 
  Maximize2,
  X,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Activity
} from 'lucide-react';

// --- DATA ---
const heroSlides = [
  {
    id: 1,
    name: "Pure Ice",
    // Keep using the direct link that works
    image: "https://i.imgur.com/sLLnGFB.png", 
    icon: null, 
    quote: "The cooling effect is sustained for over 50 minutes from a single application, my clients love it. ~Dr. Ralph J. Ghosn - Physiotherapist",
    color: "bg-white"
  },
  {
    id: 2,
    name: "Massage Lotion",
    image: null, 
    icon: <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-purple-600 mb-4 md:mb-6" />,
    quote: "Hydrates without sticky residue. Perfect for Swedish massage.",
    color: "bg-purple-50"
  }
];

const products = [
  {
    id: 1,
    name: "PURE ICE Gel",
    category: "Cryo-Recovery",
    tagline: "Instant Cooling Revitalization",
    description: "A fast-absorbing cooling gel designed to provide an immediate refreshing sensation. Perfect for post-session application to revitalize tired skin and muscles.",
    keyFeatures: ["Long-lasting cooling", "Natural Eucalyptus essential oil", "Quick-dry formula"],
    activeIngredients: ["Menthol", "Eucalyptus Globulus Leaf Oil"],
    usage: "Apply a thin layer 3–5 times daily to desired areas. Ideal for post-activity refreshment.",
    packaging: "100 mL Professional Tube",
    color: "bg-blue-50",
    accent: "text-blue-600",
    border: "border-blue-200",
    icon: <Wind className="w-6 h-6" />
  },
  {
    id: 2,
    name: "ACTIFLAM Cream",
    category: "Thermal Comfort",
    tagline: "Advanced Warming Sensation",
    description: "A specialized cream that provides a gentle, soothing warmth. Formulated with rosemary to help prepare the skin and muscles for manual therapy.",
    keyFeatures: ["Sustained warming effect", "Non-greasy professional texture", "Botanical Rosemary infusion"],
    activeIngredients: ["Methyl Salicylate", "Rosemary Essential Oil"],
    usage: "Gently massage a thin layer into the skin 2–3 times daily.",
    packaging: "100 mL Professional Tube",
    color: "bg-orange-50",
    accent: "text-orange-600",
    border: "border-orange-200",
    icon: <Flame className="w-6 h-6" />
  },
  {
    id: 3,
    name: "Targeted Comfort Massage Oil",
    category: "Professional Massage",
    tagline: "Smooth Glide & Thermal Support",
    description: "A high-performance massage oil that balances superior glide with a comforting warming effect. Designed for deep tissue work and muscle preparation.",
    keyFeatures: ["Enhanced tactile feedback", "Soothing thermal support", "Available in Vanilla, Chamomile, Coconut, Oud, Musk and Unscented"],
    activeIngredients: ["Methyl Salicylate", "Rosemary Extract"],
    usage: "Warm a small amount in hands and massage gently until fully absorbed.",
    packaging: "250 mL Professional Bottle",
    color: "bg-amber-50",
    accent: "text-amber-600",
    border: "border-amber-200",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    id: 4,
    name: "Professional Massage Lotion",
    category: "Hydrating Therapy",
    tagline: "Velvety Glide & Deep Hydration",
    description: "A rich, non-greasy lotion formulated for extended massage sessions. Enriched with an Aloe Vera base to soothe the skin while providing superior drag and moisture control.",
    keyFeatures: ["Aloe Vera enriched base", "Non-greasy finish", "Available in Aloe, Chamomile, Lavender, Vanilla"],
    activeIngredients: ["Aloe Barbadensis Leaf", "Vitamin E", "Botanical Extracts"],
    usage: "Apply generously to skin. Perfect for Swedish massage and clients requiring extra hydration.",
    packaging: "Professional Pump Bottle",
    color: "bg-purple-50",
    accent: "text-purple-600",
    border: "border-purple-200",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 5,
    name: "Firmessence Cream",
    category: "Skin Toning",
    tagline: "Natural Firming & Elasticity",
    description: "A specialized cosmetic cream formulated with Cypress oil to improve skin texture and elasticity. Promotes a smoother, more toned skin appearance.",
    keyFeatures: ["Skin-firming Cypress oil", "Improves skin smoothness", "Hydrating formula"],
    activeIngredients: ["Cypress Essential Oil", "Shea Butter Base"],
    usage: "Massage into targeted areas twice daily using circular motions.",
    packaging: "100 mL Professional Tube",
    color: "bg-emerald-50",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    icon: <Leaf className="w-6 h-6" />
  },
  {
    id: 6,
    name: "Firmessence Oil",
    category: "Skin Toning",
    tagline: "Intensive Smoothing Oil",
    description: "A potent blend of cypress and vitamin E designed for professional massage. Focuses on improving skin tone and reducing the appearance of uneven texture.",
    keyFeatures: ["Antioxidant Vitamin E", "High-glide toning formula", "Absorbs without heavy residue"],
    activeIngredients: ["Cypress Essential Oil", "Vitamin E"],
    usage: "For professional use. Apply to dampened skin for maximum absorption during massage.",
    packaging: "250 mL Professional Bottle",
    color: "bg-teal-50",
    accent: "text-teal-600",
    border: "border-teal-200",
    icon: <Droplets className="w-6 h-6" />
  }
];

const faqs = [
  {
    q: "Are these products professional-grade?",
    a: "Yes. Our formulations are specifically designed for physiotherapists, osteopaths, and massage therapists, focusing on the correct glide-to-absorption ratio for clinical manual therapy."
  },
  {
    q: "Do you offer wholesale pricing for clinics?",
    a: "Absolutely. We provide tiered wholesale pricing for physical therapy clinics, gyms, and sports clubs. Use our inquiry form below to receive our B2B price list."
  },
  {
    q: "Are the products safe for sensitive skin?",
    a: "Our products use cosmetic-grade botanical oils. However, as with any professional topical, we recommend a small patch test for clients with known hypersensitivity to essential oils."
  }
];

export default function App() {
  // New state for holding the clicked hero image details
  const [selectedHeroSlide, setSelectedHeroSlide] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- SWIPE LOGIC ---
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null) 
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Lock body scroll when a modal is open
    if (selectedProduct || selectedHeroSlide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'unset';
    }
  }, [selectedProduct, selectedHeroSlide]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Leaf className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">THERAPEUTIC OILS</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Why Us</a>
            <a href="#products" className="hover:text-slate-900 transition-colors">Products</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all">Wholesale Inquiry</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 rounded-full text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-6 w-fit">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Professional Physiotherapy Solutions</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.95] mb-6 tracking-tighter">
              Performance <br />Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500 italic font-light">Botanicals.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              The professional choice for manual therapy. Our high-performance gels and oils bridge the gap between clinical efficacy and natural skin care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center hover:shadow-2xl hover:bg-slate-800 transition-all group">
                Browse Solutions <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
                Request Samples
              </a>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                     <Users className="w-5 h-5 text-slate-400" />
                   </div>
                 ))}
               </div>
               <p className="text-sm font-medium text-slate-500">Trusted by <span className="text-slate-900 font-bold"> professionals </span> across Lebanon</p>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Swipable Card */}
          <div 
            className="relative h-[500px] w-full max-w-md mx-auto mt-8 lg:mt-0"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {heroSlides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === currentSlide ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0'
                }`}
              >
                <div className="relative w-full h-full">
                   {/* Background Blob */}
                   <div className={`absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 rounded-[3rem] rotate-6 transform transition-transform duration-700 ${index === currentSlide ? 'rotate-6' : 'rotate-0'}`} />
                   
                   {/* The Card Content */}
                   <div className={`absolute inset-0 ${slide.color} border border-slate-100 rounded-[3rem] flex flex-col items-center justify-center p-6 text-center shadow-2xl`}>
                      
                      {/* IMAGE AREA - UPDATED: Circular, smaller frame, clickable */}
                      <div className="flex-1 flex items-center justify-center w-full relative z-10 py-4">
                        {slide.image ? (
                          // Circular Frame Container with click handler
                          <div 
                            className="w-56 h-56 rounded-full border-[6px] border-white bg-white shadow-xl relative flex items-center justify-center overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                            onClick={() => setSelectedHeroSlide(slide)}
                          >
                            <img 
                              src={slide.image} 
                              alt={slide.name} 
                              className="w-full h-full object-contain p-2 group-hover:opacity-90 transition-opacity" 
                            />
                            {/* Expand Icon overlay on hover */}
                            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                               <Maximize2 className="text-white w-8 h-8 drop-shadow-lg"/>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">{slide.icon}</div>
                        )}
                      </div>

                      <div className="pb-6 relative z-20 pointer-events-none">
                        <h3 className="text-2xl font-bold mb-3">{slide.name}</h3>
                        <div className="flex items-center space-x-1 mb-4 justify-center">
                          {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                        </div>
                        <p className="text-slate-500 text-sm italic px-4 leading-relaxed">"{slide.quote}"</p>
                        
                        <div className="mt-6 pt-6 border-t border-slate-100 w-full">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Featured Product</span>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
            
            {/* Dots */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-4 z-20">
              {heroSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-slate-900 w-10' : 'bg-slate-300 w-3'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Hint for mobile users */}
            <div className="absolute bottom-4 right-8 lg:hidden animate-pulse">
               <ArrowRight className="w-5 h-5 text-slate-300" />
            </div>
          </div>
        </div>
      </header>

      {/* NEW: Hero Slide Reveal Modal */}
      {selectedHeroSlide && (
        <div 
          className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300 cursor-zoom-out"
          onClick={() => setSelectedHeroSlide(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 cursor-default"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside the box
          >
            <button 
              onClick={() => setSelectedHeroSlide(null)}
              className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center text-center">
                {/* Full Size Image */}
                {selectedHeroSlide.image && (
                <div className="w-full h-80 md:h-96 relative flex items-center justify-center mb-8">
                    <img 
                        src={selectedHeroSlide.image} 
                        alt={selectedHeroSlide.name} 
                        className="w-full h-full object-contain drop-shadow-2xl" 
                    />
                </div>
                )}
                
                {/* Text Content */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{selectedHeroSlide.name}</h3>
                <div className="flex items-center space-x-1 mb-6 justify-center">
                {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
                </div>
                <blockquote className="text-slate-600 text-xl italic leading-relaxed max-w-lg">
                "{selectedHeroSlide.quote}"
                </blockquote>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Bar */}
      <section className="bg-slate-50 py-12 border-y border-slate-100 overflow-hidden relative">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}</style>
        
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {[1, 2].map((i) => (
            <div key={i} className="flex space-x-24 px-12 shrink-0">
              {["PHYSIOTHERAPY CENTERS", "ELITE RECOVERY", "SPORTS CENTERS", "CLINICS AND MORE", "WELLNESS LABS", "MANUAL THERAPY"].map((name, index) => (
                 <span key={index} className="text-xl md:text-2xl font-black tracking-tighter italic opacity-40 text-slate-900">
                   {name}
                 </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Engineered for the Professional Hand</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We aim to build strategic partnerships with local practitioners through comprehensive packages and high-performance formulations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
             <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
               <Activity className="w-8 h-8" />
             </div>
             <h4 className="text-xl font-bold mb-4">Precision Glide</h4>
             <p className="text-slate-500 leading-relaxed">Perfectly calibrated viscosity allows for deep tissue work without excessive slipperiness or early drying.</p>
          </div>
          <div className="group">
             <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
               <Leaf className="w-8 h-8" />
             </div>
             <h4 className="text-xl font-bold mb-4">Non-Sensitizing</h4>
             <p className="text-slate-500 leading-relaxed">Tested formulations that minimize skin irritation for therapists who apply product 20+ times a day.</p>
          </div>
          <div className="group">
             <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
               <ShieldCheck className="w-8 h-8" />
             </div>
             <h4 className="text-xl font-bold mb-4">Cosmetic Compliance</h4>
             <p className="text-slate-500 leading-relaxed">Pure botanical extracts that meet strict safety standards, ensuring a premium experience for your clients.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-24 md:py-32 bg-slate-900 text-white rounded-[3rem] md:rounded-[4rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none">
          <Droplets className="w-96 h-96" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4 block">Our Formulations</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Tailored solutions for every therapy style.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-white/10 ${product.accent}`}>
                    {product.icon}
                  </div>
                  <Maximize2 className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 block">{product.category}</span>
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">{product.tagline}</p>
                <div className="flex items-center text-xs font-bold text-slate-500 border-t border-white/5 pt-6">
                   {product.packaging}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className={`p-12 ${selectedProduct.color} flex flex-col justify-center`}>
                <div className={`p-8 rounded-[2rem] bg-white shadow-xl mb-8 w-fit ${selectedProduct.accent}`}>
                   {React.cloneElement(selectedProduct.icon, { className: "w-24 h-24" })}
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Professional Overview</h4>
                <p className="text-slate-600 text-xl leading-relaxed font-medium">
                  "{selectedProduct.description}"
                </p>
              </div>

              <div className="p-12">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">{selectedProduct.category}</span>
                <h2 className="text-4xl font-bold mb-4">{selectedProduct.name}</h2>
                <p className={`text-lg font-bold ${selectedProduct.accent} mb-8`}>{selectedProduct.tagline}</p>

                <div className="space-y-8">
                  <div>
                    <h5 className="text-xs font-black uppercase text-slate-900 mb-4 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" /> Key Benefits
                    </h5>
                    <ul className="space-y-3">
                      {selectedProduct.keyFeatures.map((f, i) => (
                        <li key={i} className="flex items-center text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mr-3" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                    <h5 className="text-xs font-black uppercase text-slate-900 mb-2">Usage Guide</h5>
                    <p className="text-slate-500 text-sm leading-relaxed">{selectedProduct.usage}</p>
                  </div>

                  <button 
                    onClick={() => { setSelectedProduct(null); window.location.href = "#contact"; }}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
                  >
                    Wholesale Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-white max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
          <p className="text-slate-500">Everything you need to know about our partnership.</p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <h4 className="text-lg font-bold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-3 text-slate-400" />
                {faq.q}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm ml-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="contact" className="py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] md:rounded-[4rem] p-8 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none">Elevate your practice <span className="text-slate-600">today.</span></h2>
              <p className="text-slate-400 text-lg mb-12">
                Join our network of elite physiotherapy clinics. Leave your details to receive our professional catalogue and a complimentary sample pack.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Direct Line</p>
                    <p className="font-bold">+961 03 867 273</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Wholesale Dept</p>
                    <p className="font-bold">info@therapeuticoils.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-black/50">
              <form 
                className="space-y-4" 
                action="https://api.web3forms.com/submit" 
                method="POST"
              >
                <input type="hidden" name="access_key" value="f23546d0-7c35-4655-adee-b6af9841d1cd" />
                <input type="hidden" name="subject" value="New Wholesale Inquiry - Therapeutic Oils" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Your Name</label>
                    <input type="text" name="name" required className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Clinic Name</label>
                    <input type="text" name="clinic" className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm" placeholder="Elite Physio" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Work Email</label>
                  <input type="email" name="email" required className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm" placeholder="john@clinic.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Message</label>
                  <textarea rows="3" name="message" required className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm resize-none" placeholder="How can we help?" />
                </div>
                <button type="submit" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 mt-4">
                  Request B2B Pricing
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">Sample requests are subject to availability. Regional delivery only.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
               <Leaf className="w-6 h-6" />
               <span className="text-xl font-bold">THERAPEUTIC OILS</span>
            </div>
            <div className="flex space-x-12 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Safety Data</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Compliance</a>
            </div>
          </div>
          <div className="text-center text-slate-400 text-xs">
            © 2024 Therapeutic Oils. Formulated in Lebanon. Distributed Worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
}
