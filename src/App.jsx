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
  Activity,
  FileText,
  MessageCircle,
  ShoppingBag,
  ArrowLeft,
  Trash2,
  CreditCard,
  Banknote,
  ChevronDown,
  Heart,
  Info
} from 'lucide-react';

// --- DATA: LANDING PAGE ---
const heroSlides = [
  {
    id: 1,
    name: "Pure Ice",
    image: "https://i.imgur.com/sLLnGFB.png", 
    icon: null, 
    quote: "The cooling effect is sustained for over 50 minutes from a single application, my clients love it. ~Dr. Ralph J. Ghosn - Physiotherapist",
    color: "bg-white"
  },
  {
    id: 2,
    name: "Pure Ice",
    image: "https://i.imgur.com/sLLnGFB.png", 
    icon: null, 
    quote: "It provides exceptional relief. Most of my patients are asking to take tubes home for post-session recovery. ~Marie-Joe Eid - Physiotherapist",
    color: "bg-blue-50" 
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

// --- DATA: SHOP ITEMS WITH RETAIL PRICES & OPTIONS ---
const shopItems = [
  {
    id: 101,
    name: "Premium Massage Candle",
    description: "Natural Soy Wax Blend",
    icon: <Flame className="w-6 h-6 text-amber-500" />,
    hasOptions: true,
    scents: ["Vanilla", "Chamomile", "Oud", "Musk", "Unscented"],
    sizes: [
      { label: "Standard (80g)", price: 12 },
      { label: "Large (160g)", price: 17 }
    ],
    details: {
      ingredients: ["Natural Soy Wax", "Essential Oils", "Cotton Wick", "Shea Butter"],
      usage: "Light the wick and allow the wax to melt for 10-15 minutes. Blow out the flame and pour the warm, nourishing oil directly onto the skin for a soothing massage."
    }
  },
  {
    id: 102,
    name: "Targeted Massage Oil",
    price: 14, 
    description: "Deep tissue blend (250mL)",
    icon: <Droplets className="w-6 h-6 text-emerald-600" />,
    hasOptions: true,
    scents: ["Vanilla", "Chamomile", "Oud", "Musk", "Unscented"],
    sizes: null,
    details: {
      ingredients: ["Methyl Salicylate", "Rosemary Extract", "Carrier Oils Blend"],
      usage: "Warm a small amount in hands and massage gently until fully absorbed. Designed for deep tissue work."
    }
  },
  {
    id: 103,
    name: "Pure Ice Gel",
    price: 12, 
    description: "Cryo-Recovery Formula (100mL)",
    icon: <Wind className="w-6 h-6 text-blue-500" />,
    hasOptions: false,
    details: {
      ingredients: ["Menthol", "Eucalyptus Globulus Leaf Oil", "Cooling Agents"],
      usage: "Apply a thin layer 3–5 times daily to desired areas. Ideal for post-activity refreshment and cooling relief."
    }
  },
  {
    id: 104,
    name: "Actiflam Cream",
    price: 12,
    description: "Warming Rosemary Formula (100mL)",
    icon: <Flame className="w-6 h-6 text-orange-500" />,
    hasOptions: false,
    details: {
      ingredients: ["Methyl Salicylate", "Rosemary Essential Oil", "Warming Agents"],
      usage: "Gently massage a thin layer into the skin 2–3 times daily to provide soothing warmth."
    }
  },
  {
    id: 105,
    name: "Firmessence Cream",
    price: 14, 
    description: "Skin Toning with Cypress (100mL)",
    icon: <Leaf className="w-6 h-6 text-emerald-500" />,
    hasOptions: false,
    details: {
      ingredients: ["Cypress Essential Oil", "Shea Butter Base", "Skin Firming Complex"],
      usage: "Massage into targeted areas twice daily using circular motions to improve skin texture and elasticity."
    }
  },
  {
    id: 106,
    name: "Firmessence Oil",
    price: 14, 
    description: "Vitamin E Enriched (250mL)",
    icon: <Droplets className="w-6 h-6 text-teal-500" />,
    hasOptions: false,
    details: {
      ingredients: ["Cypress Essential Oil", "Vitamin E", "Nourishing Oil Base"],
      usage: "For professional use. Apply to dampened skin for maximum absorption during toning massage."
    }
  },
  {
    id: 107,
    name: "Hydrating Body Lotion",
    price: 15,
    description: "Aloe Vera Base (Pump Bottle)",
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    hasOptions: false,
    details: {
      ingredients: ["Aloe Barbadensis Leaf", "Vitamin E", "Botanical Extracts"],
      usage: "Apply generously to skin. Perfect for Swedish massage and clients requiring extra hydration without greasiness."
    }
  }
];

// --- COMPONENT: SHOP PAGE ---
const ShopPage = ({ onBack }) => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  
  // State for item selections (size/scent)
  const [selections, setSelections] = useState({}); 

  // State for viewing product details
  const [viewProduct, setViewProduct] = useState(null);

  // Initialize Order Counter from Local Storage or default to 1531
  const [orderCounter, setOrderCounter] = useState(() => {
    const saved = localStorage.getItem('to_order_counter');
    return saved ? parseInt(saved, 10) : 1531;
  });

  const DELIVERY_FEE = 3.00;

  useEffect(() => {
    localStorage.setItem('to_order_counter', orderCounter.toString());
  }, [orderCounter]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (viewProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [viewProduct]);

  const handleSelectionChange = (itemId, type, value) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], [type]: value }
    }));
  };

  const getPrice = (item) => {
    if (item.sizes) {
      const selectedSize = selections[item.id]?.size || item.sizes[0].label;
      return item.sizes.find(s => s.label === selectedSize).price;
    }
    return item.price;
  };

  const addToCart = (item) => {
    const selectedSize = item.sizes ? (selections[item.id]?.size || item.sizes[0].label) : null;
    const selectedScent = item.scents ? (selections[item.id]?.scent || item.scents[0]) : null;
    const finalPrice = getPrice(item);
    
    // Create a unique name including options
    let fullName = item.name;
    if (selectedSize) fullName += ` (${selectedSize})`;
    if (selectedScent) fullName += ` - ${selectedScent}`;

    setCart([...cart, { ...item, name: fullName, price: finalPrice }]);
    // Optionally close modal if open
    setViewProduct(null);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + (cart.length > 0 ? DELIVERY_FEE : 0);

  const sendOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in your delivery details.");
      return;
    }

    // Generate Order ID (Pad with zeros to 6 digits)
    const orderRef = `OrderID#${String(orderCounter).padStart(6, '0')}`;
    
    // Increment for next time
    setOrderCounter(prev => prev + 1);

    // Construct the WhatsApp Message safely with newlines
    let msg = `*New Order: Therapeutic Oils*\n\n` +
              `*Ref:* ${orderRef}\n\n` +
              `*Customer:* ${formData.name}\n` +
              `*Phone:* ${formData.phone}\n` +
              `*Address:* ${formData.address}\n\n` +
              `*Order:*\n${cart.map(i => "- " + i.name + " ($" + i.price + ")").join("\n")}\n` +
              `------------------\n` +
              `*Subtotal:* $${subtotal}\n` +
              `*Delivery:* $${DELIVERY_FEE}\n` +
              `*TOTAL:* $${total}\n` +
              `------------------\n` +
              `*Payment:* ${paymentMethod}`;

    if (paymentMethod === "Whish Transfer") {
      msg += `\n\n(Note: User will transfer via Whish. Please verify.)`;
    }

    // Open WhatsApp - encodeURIComponent is crucial for the # in OrderID
    window.open(`https://wa.me/9613203567?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 animate-in fade-in duration-300">
      {/* Shop Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-slate-900 font-bold text-sm">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
          </button>
          <span className="font-black text-lg tracking-tight">SHOP ONLINE</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        
        {/* Product List */}
        <div className="space-y-6 mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center"><ShoppingBag className="w-5 h-5 mr-2" /> Select Products</h2>
          
          {shopItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4 cursor-pointer" onClick={() => setViewProduct(item)}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-700">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg flex items-center">
                      {item.name}
                      <Info className="w-4 h-4 text-slate-400 ml-2" />
                    </h3>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  </div>
                </div>
                <span className="font-black text-xl text-emerald-600">${getPrice(item)}</span>
              </div>

              {/* Options Selectors */}
              <div className="space-y-3 mb-4">
                {item.sizes && (
                   <div className="flex items-center space-x-2">
                     <span className="text-xs font-bold uppercase text-slate-400 w-12">Size:</span>
                     <div className="flex space-x-2">
                       {item.sizes.map((size) => (
                         <button
                           key={size.label}
                           onClick={() => handleSelectionChange(item.id, 'size', size.label)}
                           className={`px-3 py-1 text-xs rounded-full border ${
                             (selections[item.id]?.size || item.sizes[0].label) === size.label 
                             ? 'bg-slate-900 text-white border-slate-900' 
                             : 'bg-white text-slate-600 border-slate-200'
                           }`}
                         >
                           {size.label}
                         </button>
                       ))}
                     </div>
                   </div>
                )}

                {item.scents && (
                   <div className="flex items-center space-x-2">
                     <span className="text-xs font-bold uppercase text-slate-400 w-12">Scent:</span>
                     <div className="relative">
                        <select 
                          className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 pr-8 outline-none appearance-none cursor-pointer"
                          onChange={(e) => handleSelectionChange(item.id, 'scent', e.target.value)}
                          value={selections[item.id]?.scent || item.scents[0]}
                        >
                          {item.scents.map(scent => <option key={scent} value={scent}>{scent}</option>)}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                     </div>
                   </div>
                )}
              </div>

              <button 
                onClick={() => addToCart(item)}
                className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-700 transition-colors flex items-center justify-center"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Product Details Modal */}
        {viewProduct && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-3xl p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setViewProduct(null)}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-6 bg-slate-50 rounded-full mb-4">
                  {React.cloneElement(viewProduct.icon, { className: "w-12 h-12 text-slate-900" })}
                </div>
                <h2 className="text-2xl font-bold mb-1">{viewProduct.name}</h2>
                <p className="text-emerald-600 font-bold text-xl">${getPrice(viewProduct)}</p>
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 mb-2">Description</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{viewProduct.description}. {viewProduct.details?.usage}</p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 mb-2">Key Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {viewProduct.details?.ingredients.map((ing, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => addToCart(viewProduct)}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors"
                  >
                    Add to Cart - ${getPrice(viewProduct)}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cart & Checkout Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ShoppingBag className="w-6 h-6 mr-3" /> Your Cart
          </h2>

          {/* Cart Items */}
          <div className="bg-slate-50 rounded-xl p-4 mb-6">
            {cart.length === 0 ? (
              <p className="text-slate-400 italic text-center py-4">Your cart is empty.</p>
            ) : (
              <div className="space-y-3">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm border-b border-slate-200 pb-2 last:border-0">
                    <span className="font-medium text-slate-700 w-2/3">{item.name}</span>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold">${item.price}</span>
                      <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Totals Section */}
            <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-sm text-slate-500">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-slate-500">
                <span>Delivery</span>
                <span>${cart.length > 0 ? DELIVERY_FEE : 0}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                <span className="font-bold text-lg">Total</span>
                <span className="font-black text-2xl text-emerald-600">${total}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 ring-slate-900/10"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">Phone Number</label>
              <input 
                type="text" 
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 ring-slate-900/10"
                placeholder="03 123 456"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500 ml-1">Delivery Address</label>
              <textarea 
                rows="2"
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 ring-slate-900/10 resize-none"
                placeholder="City, Street, Building, Floor"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>

            {/* Payment Method */}
            <div className="pt-4">
              <label className="text-xs font-bold uppercase text-slate-500 ml-1 mb-2 block">Payment Method</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setPaymentMethod('Cash on Delivery')}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center text-sm font-bold transition-all ${paymentMethod === 'Cash on Delivery' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                >
                  <Banknote className="w-6 h-6 mb-2" />
                  Cash on Delivery
                </button>
                <button 
                  onClick={() => setPaymentMethod('Whish Transfer')}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center text-sm font-bold transition-all ${paymentMethod === 'Whish Transfer' ? 'bg-red-600 text-white border-red-600' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                >
                  <CreditCard className="w-6 h-6 mb-2" />
                  Whish Transfer
                </button>
              </div>
              
              {paymentMethod === 'Whish Transfer' && (
                <div className="mt-4 p-4 bg-red-50 text-red-800 rounded-xl text-sm border border-red-100 leading-relaxed">
                  <strong>Transfer to: +961 03 203 567</strong><br/>
                  <span className="text-xs">
                    Please calculate at the daily rate if paying in LBP. 
                    <br/>
                    Important: Include your <strong>Full Name</strong> and <strong>Order Ref Number</strong> in the transfer description.
                  </span>
                </div>
              )}
            </div>

            <button 
              onClick={sendOrder}
              className="w-full py-5 bg-[#25D366] text-white rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center shadow-lg shadow-green-500/30 mt-6 text-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2 fill-current" />
              Order via WhatsApp
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedHeroSlide, setSelectedHeroSlide] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // NEW: State to toggle between Home and Shop views
  const [currentView, setCurrentView] = useState('home'); 

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
    
    // Lock scroll if any modal is open
    if (selectedProduct || selectedHeroSlide || showPrivacy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'unset';
    }
  }, [selectedProduct, selectedHeroSlide, showPrivacy]);

  // RENDER SHOP IF VIEW IS 'shop'
  if (currentView === 'shop') {
    return <ShopPage onBack={() => setCurrentView('home')} />;
  }

  // OTHERWISE RENDER HOME PAGE
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentView('home')}>
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Leaf className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">THERAPEUTIC OILS</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#benefits" className="hover:text-slate-900 transition-colors">Why Us</a>
            <a href="#products" className="hover:text-slate-900 transition-colors">Products</a>
            <button onClick={() => setCurrentView('shop')} className="text-slate-900 hover:text-emerald-600 transition-colors font-black flex items-center">
              <ShoppingBag className="w-4 h-4 mr-1" /> SHOP
            </button>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all">Wholesale Inquiry</a>
          </div>
          {/* Mobile Shop Button */}
          <button onClick={() => setCurrentView('shop')} className="md:hidden text-slate-900 font-bold flex items-center">
             <ShoppingBag className="w-5 h-5" />
          </button>
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
              <button onClick={() => setCurrentView('shop')} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center hover:shadow-2xl hover:bg-slate-800 transition-all group">
                Shop Online <ShoppingBag className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#contact" className="px-8 py-4 border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
                Wholesale
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
                      
                      {/* IMAGE AREA */}
                      <div className="flex-1 flex items-center justify-center w-full relative z-10 py-4">
                        {slide.image ? (
                          <div 
                            className="w-56 h-56 rounded-full border-[6px] border-white bg-white shadow-xl relative flex items-center justify-center overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300"
                            onClick={() => setSelectedHeroSlide(slide)}
                          >
                            <img 
                              src={slide.image} 
                              alt={slide.name} 
                              className="w-full h-full object-contain p-2 group-hover:opacity-90 transition-opacity" 
                            />
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

      {/* NEW SECTION: TRUST BADGES (Clean Formula Promise) */}
      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-pink-50 text-pink-500 rounded-full">
                {/* Changed to Heart/Wind to ensure no version conflicts */}
                <Heart className="w-6 h-6" /> 
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Cruelty Free</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-emerald-50 text-emerald-500 rounded-full">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Paraben Free</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-blue-50 text-blue-500 rounded-full">
                <Wind className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900">Silicone Free</p>
              </div>
            </div>
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

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2rem] relative shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowPrivacy(false)}
              className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-slate-100 rounded-xl">
                <FileText className="w-6 h-6 text-slate-900" />
              </div>
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
            </div>

            <div className="prose prose-slate text-slate-600 text-sm leading-relaxed space-y-6">
              <p><strong>Effective Date:</strong> January 2026</p>
              <p>Therapeutic Oils ("we", "us", "our") respects your privacy. This Privacy Policy describes how we collect, use, and protect your information when you use our website or contact us for business inquiries in Lebanon.</p>
              
              <h4 className="text-slate-900 font-bold text-lg">1. Information We Collect</h4>
              <p>We collect information you voluntarily provide via our wholesale inquiry forms, including your Name, Clinic Name, Email Address, and Message content. We use this solely for business-to-business (B2B) communication.</p>

              <h4 className="text-slate-900 font-bold text-lg">2. How We Use Your Information</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your wholesale and product inquiries.</li>
                <li>To send requested catalogues or price lists.</li>
                <li>To coordinate sample deliveries within Lebanon.</li>
              </ul>

              <h4 className="text-slate-900 font-bold text-lg">3. Data Sharing</h4>
              <p>We do not sell, trade, or rent your personal identification information to others. We may use third-party service providers (such as Web3Forms for email processing and Vercel for hosting) to help us operate our business.</p>

              <h4 className="text-slate-900 font-bold text-lg">4. Contact Us</h4>
              <p>If you have any questions about this Privacy Policy, please contact us at: <br/><strong>to.laboratories@gmail.com</strong></p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <button 
                onClick={() => setShowPrivacy(false)}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Close Policy
              </button>
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

      {/* Lead Capture Form - UPDATED WITH WEB3FORMS */}
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
                    <p className="font-bold">+961 03 203 567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Wholesale Dept</p>
                    <p className="font-bold">to.laboratories@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-black/50">
              {/* CONTACT FORM START */}
              <form 
                className="space-y-4" 
                action="https://api.web3forms.com/submit" 
                method="POST"
              >
                {/* Your Access Key */}
                <input type="hidden" name="access_key" value="f23546d0-7c35-4655-adee-b6af9841d1cd" />
                <input type="hidden" name="subject" value="New Wholesale Inquiry - Therapeutic Oils" />
                
                {/* The Bot Trap */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Clinic Name</label>
                    <input 
                      type="text" 
                      name="clinic" 
                      className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm" 
                      placeholder="Elite Physio" 
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Work Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm" 
                    placeholder="john@clinic.com" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-slate-400 ml-2">Message</label>
                  <textarea 
                    rows="3" 
                    name="message" 
                    required 
                    className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 ring-slate-900/5 transition-all text-sm resize-none" 
                    placeholder="How can we help?" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 mt-4"
                >
                  Request B2B Pricing
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">Sample requests are subject to availability. Regional delivery only.</p>
              </form>
              {/* CONTACT FORM END */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
               <Leaf className="w-6 h-6" />
               <span className="text-xl font-bold">THERAPEUTIC OILS</span>
            </div>
            <div className="flex space-x-12 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <button onClick={() => setShowPrivacy(true)} className="hover:text-slate-900 transition-colors">Privacy Policy</button>
            </div>
          </div>
          <div className="text-center text-slate-400 text-xs">
            © 2024 Therapeutic Oils. Formulated in Lebanon. Distributed Worldwide.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9613203567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[90] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
