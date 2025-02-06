const gifts = [
  {
    "name": "Layered Clover Pendant Necklace",
    "price": "999",
    "link": "https://shopdew.com/product/layered-clover-pendant-necklace/",
    "index": 0
  },
  {
    "name": "Classic Diamond Pendant Necklace",
    "price": "499",
    "link": "https://shopdew.com/product/classic-diamond-pendant-necklace/",
    "index": 1
  },
  {
    "name": "Adjustable Mirror Ring and Trinket Dish Set",
    "price": "799",
    "link": "https://shopdew.com/product/adjustable-mirror-ring-and-trinket-dish-set/",
    "index": 2
  },
  {
    "name": "Twisted Gold Hoop Earrings",
    "price": "639",
    "link": "https://shopdew.com/product/twisted-gold-hoop-earrings/",
    "index": 3
  },
  {
    "name": "Unique Gold-Tone Hoop Earrings",
    "price": "719",
    "link": "https://shopdew.com/product/unique-gold-tone-hoop-earrings/",
    "index": 4
  },
  {
    "name": "Butterfly Chain Necklace",
    "price": "799",
    "link": "https://shopdew.com/product/butterfly-chain-necklace/",
    "index": 5
  },
  {
    "name": "Sunburst Statement Earrings",
    "price": "510",
    "link": "https://shopdew.com/product/sunburst-statement-earrings/",
    "index": 6
  },
  {
    "name": "Blue Crystal Evil Eye Necklace with Gold-Tone Detailing",
    "price": "799",
    "link": "https://shopdew.com/product/blue-crystal-evil-eye-necklace-with-gold-tone-detailing/",
    "index": 7
  },
  {
    "name": "Evil Eye Protection Necklace with Colorful Crystals",
    "price": "510",
    "link": "https://shopdew.com/product/evil-eye-protection-necklace-with-colorful-crystals/",
    "index": 8
  },
  {
    "name": "Vintage Rope-Twist Earrings",
    "price": "799",
    "link": "https://shopdew.com/product/vintage-rope-twist-earrings/",
    "index": 9
  },
  {
    "name": "Vibrant Woven Earrings",
    "price": "450",
    "link": "https://shopdew.com/product/vibrant-woven-earrings/",
    "index": 10
  },
  {
    "name": "Evil Eye Protection Necklace with Sparkling Crystals",
    "price": "699",
    "link": "https://shopdew.com/product/evil-eye-protection-necklace-with-sparkling-crystals/",
    "index": 11
  },
  {
    "name": "Sparkling Crystal Tiara",
    "price": "1200",
    "link": "https://shopdew.com/product/sparkling-crystal-tiara/",
    "index": 12
  },
  {
    "name": "Elegant Pearl Drop Earrings",
    "price": "550",
    "link": "https://shopdew.com/product/elegant-pearl-drop-earrings/",
    "index": 13
  },
  {
    "name": "Charming Star Pendant Necklace",
    "price": "650",
    "link": "https://shopdew.com/product/charming-star-pendant-necklace/",
    "index": 14
  },
  {
    "name": "Dainty Gold Anklet",
    "price": "400",
    "link": "https://shopdew.com/product/dainty-gold-anklet/",
    "index": 15
  },
  {
    "name": "Floral Hair Clip Set",
    "price": "300",
    "link": "https://shopdew.com/product/floral-hair-clip-set/",
    "index": 16
  },
  {
    "name": "Geometric Statement Ring",
    "price": "700",
    "link": "https://shopdew.com/product/geometric-statement-ring/",
    "index": 17
  },
  {
    "name": "Minimalist Bar Necklace",
    "price": "600",
    "link": "https://shopdew.com/product/minimalist-bar-necklace/",
    "index": 18
  },
  {
    "name": "Boho Beaded Bracelet",
    "price": "450",
    "link": "https://shopdew.com/product/boho-beaded-bracelet/",
    "index": 19
  },
  {
    "name": "Yellow Chimes Women’s Butterfly Designed Dangle Drop Earrings",
    "price": "899",
    "link": "https://shopdew.com/product/yellow-chimes-womens-butterfly-designed-dangle-drop-earrings/",
    "index": 20
  },
  {
    "name": "Elegant Pearl and Kundan Necklace",
    "price": "550",
    "link": "https://shopdew.com/product/elegant-pearl-and-kundan-necklace/",
    "index": 21
  },
  {
    "name": "11-Pair Gold-Tone Earrings Set: From Studs to Statement Pieces",
    "price": "560",
    "link": "https://shopdew.com/product/11-pair-gold-tone-earrings-set-from-studs-to-statement-pieces/",
    "index": 22
  },
  {
    "name": "Traditional Conch Shell Anklet",
    "price": "450",
    "link": "https://shopdew.com/product/traditional-conch-shell-anklet/",
    "index": 23
  },
  {
    "name": "Elegant Tassel Drop Earrings",
    "price": "899",
    "link": "https://shopdew.com/product/elegant-tassel-drop-earrings/",
    "index": 24
  },
  {
    "name": "Treble Clef Crystal Pendant Necklace",
    "price": "799",
    "link": "https://shopdew.com/product/treble-clef-crystal-pendant-necklace/",
    "index": 25
  },
  {
    "name": "Sparkling Crystal Tiara",
    "price": "639",
    "link": "https://shopdew.com/product-category/sparkling-crystal-tiara/",
    "index": 26
  },
  {
    "name": "Floral Elegance Long Drop Earrings",
    "price": "499",
    "link": "https://shopdew.com/product/floral-elegance-long-drop-earrings/",
    "index": 27
  },
  {
    "name": "Evil Eye Gold-Plated Stone-Studded Jewelry Set",
    "price": "799",
    "link": "https://shopdew.com/product/evil-eye-gold-plated-stone-studded-jewelry-set/",
    "index": 28
  },
  {
    "name": "Elegant Seashell Hoop Earrings",
    "price": "450",
    "link": "https://shopdew.com/product/elegant-seashell-hoop-earrings/",
    "index": 29
  },
  {
    "name": "Colorful Seashell Bracelets",
    "price": "450",
    "link": "https://shopdew.com/product/colorful-seashell-bracelets/",
    "index": 30
  },
  {
    "name": "Yellow Chimes Women’s Butterfly Designed Dangle Drop Earrings",
    "price": "899",
    "link": "https://shopdew.com/product/yellow-chimes-womens-butterfly-designed-dangle-drop-earrings/",
    "index": 31
  },
  {
    "name": "Shining Diva Fashion Latest Stylish Set of 4 Finger Rings",
    "price": "799",
    "link": "https://shopdew.com/product/shining-diva-fashion-latest-stylish-set-of-4-finger-rings/",
    "index": 32
  }
]  

  function predictGift() {
    const partnerName = document.querySelector('#partner-name').value.trim();
    const partnerAge = parseInt(document.querySelector('#partner-age').value);
    const budget = document.querySelector('#budget').value;
    const relationship = document.querySelector('#relationship').value;
    const interests = document.querySelector('#interests').value;
  
    // Validate inputs
    if (!partnerName || !partnerAge || partnerAge < 18 || partnerAge > 120) {
      alert('Please fill in all fields with valid information!');
      return;
    }
  
    // Filter gifts by budget
    let availableGifts = gifts.filter(gift => {
      if (budget === 'low' && gift.price <= 1000) return true;
      if (budget === 'medium' && gift.price > 1000 && gift.price <= 2000) return true;
      if (budget === 'high' && gift.price > 2000) return true;
      return false;
    });
  
    // If no gifts in budget, use all gifts
    if (availableGifts.length === 0) {
      availableGifts = gifts;
    }
  
    const getRandomIndex = (min,max)=>{
      return Math.floor(Math.random() * (max - min) + min)
    }

    console.log(getRandomIndex(0,availableGifts.length))
    // Prediction logic based on interests and relationship
    let selectedGift = availableGifts[getRandomIndex(0,availableGifts.length)];
    
    if (interests === 'art') {
      selectedGift = availableGifts.find(g => g.name.includes('Frame')) || selectedGift;
    } else if (interests === 'light') {
      selectedGift = availableGifts.find(g => g.name.includes('Lamp') || g.name.includes('Neon')) || selectedGift;
    } else if (interests === 'flowers') {
      selectedGift = availableGifts.find(g => g.name.includes('Rose')) || selectedGift;
    } else if (interests === 'comfort') {
      selectedGift = availableGifts.find(g => g.name.includes('Cushion')) || selectedGift;
    }
  
    const resultDiv = document.querySelector('#result');
    const giftDisplay = document.querySelector('#gift-display');
    
    giftDisplay.innerHTML = `
      <div class="gift-result">
        <h3>For ${partnerName}</h3>
        <h4>${selectedGift.name}</h4>
        <p class="price">Price: ₹${selectedGift.price}</p>
        <a href="${selectedGift.link}" target="_blank" class="buy-button">View on ShopDew</a>
      </div>
    `;
    
    resultDiv.classList.remove('hidden');
  }
  
  document.querySelector('#predict-btn').addEventListener('click', predictGift);