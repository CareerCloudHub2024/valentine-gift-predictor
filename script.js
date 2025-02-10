const gifts = [
  //Necklace
  {
    "name": "Layered Clover Pendant Necklace",
    "price": "999",
    "category":"Necklace",
    "link": "https://shopdew.com/product/layered-clover-pendant-necklace/",
    "index": 0
  },
  {
    "name": "Classic Diamond Pendant Necklace",
    "price": "499",
    "category":"Necklace",
    "link": "https://shopdew.com/product/classic-diamond-pendant-necklace/",
    "index": 1
  },
  {
    "name": "Blue Crystal Evil Eye Necklace with Gold-Tone Detailing",
    "price": "799",
    "category":"Necklace",
    "link": "https://shopdew.com/product/blue-crystal-evil-eye-necklace-with-gold-tone-detailing/",
    "index": 2
  },
  {
    "name": "Butterfly Chain Necklace",
    "price": "799",
    "category":"Necklace",
    "link": "https://shopdew.com/product/butterfly-chain-necklace/",
    "index": 3
  },
  // {
  //   "name": "Crystal Blue Evil Eye Pendent Necklace",
  //   "price": "799",
  //   "category":"Necklace",
  //   "link": "https://shopdew.com/product/crystal-blue-evil-eye-pendent-necklace/",
  //   "index": 4
  // },
  {
    "name": "Elegant Pearl and Beaded Necklace",
    "price": "799",
    "category":"Necklace",
    "link": "https://shopdew.com/product/elegant-pearl-and-beaded-necklace-set/",
    "index": 5
  },
  {
    "name": "Elegant Pearl and Kundan Necklace",
    "price": "550",
    "category":"Necklace",
    "link": "https://shopdew.com/product/elegant-pearl-and-kundan-necklace/",
    "index": 6
  },
  // {
  //   "name": "Evil Eye Pendant Necklace",
  //   "price": "699",
  //   "category":"Necklace",
  //   "link": "https://shopdew.com/product/evil-eye-pendant-necklace/",
  //   "index": 7
  // },
  {
    "name": "Evil Eye Protection Necklace with Colorful Crystals",
    "price": "510",
    "category":"Necklace",
    "link": "https://shopdew.com/product/evil-eye-protection-necklace-with-colorful-crystals/",
    "index": 8
  },
  {
    "name": "Star-Studded Pendant Necklace",
    "price": "639",
    "category":"Necklace",
    "link": "https://shopdew.com/product/star-studded-pendant-necklace/",
    "index": 9
  },

  //Earings
  {
    "name": "Twisted Gold Hoop Earrings",
    "price": "639",
    "category":"Earings",
    "link": "https://shopdew.com/product/twisted-gold-hoop-earrings/",
    "index": 10
  },
  {
    "name": "Unique Gold-Tone Hoop Earrings",
    "price": "719",
    "category":"Earings",
    "link": "https://shopdew.com/product/unique-gold-tone-hoop-earrings/",
    "index": 11
  },
  {
    "name": "Sunburst Statement Earrings",
    "price": "510",
    "category":"Earings",
    "link": "https://shopdew.com/product/sunburst-statement-earrings/",
    "index": 12
  },
  {
    "name": "Vintage Rope-Twist Earrings",
    "price": "799",
    "category":"Earings",
    "link": "https://shopdew.com/product/vintage-rope-twist-earrings/",
    "index": 13
  },
  // {
  //   "name": "Vibrant Woven Earrings",
  //   "price": "450",
  //   "category":"Earings",
  //   "link": "https://shopdew.com/product/vibrant-woven-earrings/",
  //   "index": 14
  // },
  {
    "name": "11-Pair Gold-Tone Earrings Set: From Studs to Statement Pieces",
    "price": "560",
    "category":"Earings",
    "link": "https://shopdew.com/product/11-pair-gold-tone-earrings-set-from-studs-to-statement-pieces/",
    "index": 15
  },
  {
    "name": "Celestial Star Earrings",
    "price": "490",
    "category":"Earings",
    "link": "https://shopdew.com/product/celestial-star-earrings/",
    "index": 16
  },
  {
    "name": "Elegant Jhumka Earrings",
    "price": "525",
    "category":"Earings",
    "link": "https://shopdew.com/product/elegant-jhumka-earrings/",
    "index": 17
  },
  {
    "name": "Elegant Seashell Hoop Earrings",
    "price": "450",
    "category":"Earings",
    "link": "https://shopdew.com/product/elegant-seashell-hoop-earrings/",
    "index": 18
  },
  {
    "name": "Modern Geometric Dangle Earrings with Pearl Accent",
    "price": "480",
    "category":"Earings",
    "link": "https://shopdew.com/product/modern-geometric-dangle-earrings-with-pearl-accent/",
    "index": 19
  },
  //Rings
  {
    "name": "Adjustable Mirror Ring and Trinket Dish Set",
    "price": "799",
    "category":"Ring",
    "link": "https://shopdew.com/product/adjustable-mirror-ring-and-trinket-dish-set/",
    "index": 20
  },
  {
    "name": "Sparkling Crystal Tiara",
    "price": "1200",
    "category":"Ring",
    "link": "https://shopdew.com/product/sparkling-crystal-tiara/",
    "index": 21
  },
  {
    "name": "Clear Quartz Evil Eye Bracelet",
    "price": "639",
    "category":"Ring",
    "link": "https://shopdew.com/product/clear-quartz-evil-eye-bracelet/",
    "index": 22
  },
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
      if (budget === 'low' && gift?.price <= 1000 && gift?.category == interests) return true;
      if (budget === 'medium' && gift?.price > 1000 && gift.price <= 2000 && gift?.category == interests) return true;
      if (budget === 'high' && gift?.price > 2000 && gift?.category == interests) return true;
      return false;
    });
  
    // If no gifts in budget, use all gifts
    if (availableGifts.length === 0) {
      availableGifts = gifts.filter(gift => {
        if (gift?.category == interests) return true;
        return false;
      });
    }
  
    const getRandomIndex = (min,max)=>{
      return Math.floor(Math.random() * (max - min) + min)
    }

    // console.log(getRandomIndex(0,availableGifts.length))
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
  document.querySelector('#discover-btn').addEventListener('click', predictGift);