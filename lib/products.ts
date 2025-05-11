import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "cleanser-gentle",
    name: "Gentle Cleansing Foam",
    description: "A gentle foaming cleanser that removes impurities without stripping the skin.",
    fullDescription:
      "Our Gentle Cleansing Foam is formulated with soothing aloe vera and cucumber extract to cleanse your skin without disrupting its natural balance. This pH-balanced formula effectively removes dirt, oil, and makeup while leaving your skin feeling refreshed and hydrated, never tight or dry.",
    price: 91.99,
    // Use direct URLs to images that exist online
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Cleansers",
    rating: 4,
    reviewCount: 128,
    benefits: [
      "Removes impurities without stripping the skin",
      "pH-balanced formula",
      "Suitable for all skin types",
      "Fragrance-free",
    ],
    ingredients:
      "Water, Glycerin, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Cucumber Extract, Panthenol, Allantoin, Sodium Hyaluronate, Citric Acid, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Morning and evening, massage a small amount onto damp skin in circular motions. Rinse thoroughly with lukewarm water and pat dry.",
  },
  {
    id: "serum-vitamin-c",
    name: "Vitamin C Brightening Serum",
    description: "A potent serum that brightens skin tone and reduces the appearance of dark spots.",
    fullDescription:
      "Our Vitamin C Brightening Serum is formulated with 15% stable vitamin C (sodium ascorbyl phosphate) to brighten your complexion and fade dark spots. Enhanced with vitamin E and ferulic acid for added antioxidant protection, this lightweight serum helps defend against environmental damage while improving skin tone and texture.",
    price: 183.99,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Serums",
    rating: 5,
    reviewCount: 94,
    benefits: [
      "Brightens skin tone",
      "Reduces the appearance of dark spots",
      "Provides antioxidant protection",
      "Improves skin texture",
    ],
    ingredients:
      "Water, Sodium Ascorbyl Phosphate (15%), Glycerin, Propanediol, Tocopherol (Vitamin E), Ferulic Acid, Hyaluronic Acid, Panthenol, Niacinamide, Citrus Aurantium Dulcis (Orange) Peel Oil, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply 3-4 drops to clean, dry skin in the morning before moisturizer and sunscreen. Allow to fully absorb before applying other products.",
  },
  {
    id: "moisturizer-hydrating",
    name: "Hydrating Gel Cream",
    description: "A lightweight gel-cream that provides long-lasting hydration without feeling heavy.",
    fullDescription:
      "Our Hydrating Gel Cream combines the lightweight feel of a gel with the nourishing benefits of a cream. Formulated with three types of hyaluronic acid and ceramides, it delivers deep, long-lasting hydration while strengthening the skin barrier. The oil-free formula absorbs quickly, leaving skin plump, smooth, and balanced.",
    price: 143.99,
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Moisturizers",
    rating: 4,
    reviewCount: 156,
    benefits: [
      "Provides 72-hour hydration",
      "Strengthens the skin barrier",
      "Oil-free and non-comedogenic",
      "Suitable for all skin types",
    ],
    ingredients:
      "Water, Glycerin, Dimethicone, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate Crosspolymer, Ceramide NP, Ceramide AP, Ceramide EOP, Niacinamide, Panthenol, Allantoin, Tocopherol, Caprylyl Glycol, Hexylene Glycol, Phenoxyethanol, Carbomer, Sodium Hydroxide.",
    howToUse: "Apply morning and evening to clean skin after serums. Can be used alone or under makeup.",
  },
  {
    id: "mask-clay",
    name: "Purifying Clay Mask",
    description: "A detoxifying mask that draws out impurities and excess oil for clearer skin.",
    fullDescription:
      "Our Purifying Clay Mask combines kaolin and bentonite clays to draw out impurities and excess oil from deep within the pores. Enhanced with tea tree oil and zinc PCA to help control sebum production and soothe inflammation, this mask leaves skin looking clearer and feeling refreshed without over-drying.",
    price: 121.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Masks",
    rating: 4,
    reviewCount: 87,
    benefits: [
      "Draws out impurities",
      "Reduces excess oil",
      "Minimizes the appearance of pores",
      "Soothes inflammation",
    ],
    ingredients:
      "Water, Kaolin, Bentonite, Glycerin, Zinc PCA, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Salicylic Acid, Niacinamide, Allantoin, Panthenol, Tocopherol, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply an even layer to clean, dry skin, avoiding the eye and lip areas. Leave on for 10-15 minutes until dry. Rinse thoroughly with warm water and pat dry. Use 1-2 times per week.",
  },
  {
    id: "sunscreen-daily",
    name: "Daily Defense SPF 50",
    description: "A lightweight, broad-spectrum sunscreen that protects against UVA and UVB rays.",
    fullDescription:
      "Our Daily Defense SPF 50 provides powerful broad-spectrum protection against harmful UVA and UVB rays. This lightweight, non-greasy formula absorbs quickly and leaves no white cast, making it perfect for daily use. Enriched with antioxidants and niacinamide, it not only protects your skin but also helps improve its appearance over time.",
    price: 106.99,
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Sun Care",
    rating: 5,
    reviewCount: 112,
    benefits: [
      "Broad-spectrum SPF 50 protection",
      "Lightweight, non-greasy formula",
      "No white cast",
      "Water-resistant for 80 minutes",
    ],
    ingredients:
      "Active Ingredients: Avobenzone (3%), Homosalate (10%), Octisalate (5%), Octocrylene (7%). Inactive Ingredients: Water, Glycerin, Silica, Niacinamide, Tocopherol, Green Tea Extract, Aloe Barbadensis Leaf Juice, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Apply generously to face and neck 15 minutes before sun exposure. Reapply every 2 hours or after swimming, sweating, or towel drying.",
  },
  {
    id: "toner-exfoliating",
    name: "Exfoliating Toner",
    description: "A gentle exfoliating toner that removes dead skin cells for a smoother complexion.",
    fullDescription:
      "Our Exfoliating Toner combines AHAs (glycolic and lactic acids) and BHA (salicylic acid) to gently remove dead skin cells and unclog pores. This alcohol-free formula helps improve skin texture, reduce the appearance of fine lines, and prepare your skin to better absorb subsequent products. With regular use, you'll notice a smoother, brighter complexion.",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Toners",
    rating: 4,
    reviewCount: 78,
    benefits: ["Removes dead skin cells", "Unclogs pores", "Improves skin texture", "Alcohol-free formula"],
    ingredients:
      "Water, Glycolic Acid (5%), Lactic Acid (2%), Salicylic Acid (1%), Glycerin, Propanediol, Panthenol, Allantoin, Niacinamide, Sodium Hyaluronate, Chamomilla Recutita (Matricaria) Flower Extract, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "After cleansing, apply to a cotton pad and sweep across face and neck, avoiding the eye area. Use in the evening 2-3 times per week, gradually increasing frequency as tolerated. Always follow with moisturizer and use sunscreen during the day.",
  },
  {
    id: "oil-facial",
    name: "Nourishing Facial Oil",
    description: "A luxurious blend of plant oils that deeply nourishes and restores the skin.",
    fullDescription:
      "Our Nourishing Facial Oil is a carefully crafted blend of plant oils rich in essential fatty acids and antioxidants. Featuring rosehip, jojoba, and squalane oils, this lightweight formula absorbs quickly to deeply nourish and restore the skin's natural barrier. It helps improve elasticity, reduce the appearance of fine lines, and impart a healthy, radiant glow without feeling greasy.",
    price: 168.99,
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Oils",
    rating: 5,
    reviewCount: 64,
    benefits: [
      "Deeply nourishes the skin",
      "Improves elasticity",
      "Reduces the appearance of fine lines",
      "Non-greasy formula",
    ],
    ingredients:
      "Rosa Canina (Rosehip) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Argania Spinosa (Argan) Kernel Oil, Oenothera Biennis (Evening Primrose) Oil, Tocopherol, Lavandula Angustifolia (Lavender) Oil, Pelargonium Graveolens (Geranium) Oil.",
    howToUse:
      "Apply 3-5 drops to clean skin in the evening, either alone or mixed with your moisturizer. Gently press into skin rather than rubbing. Can be used morning and night, but if used in the morning, follow with sunscreen.",
  },
  {
    id: "eye-cream",
    name: "Revitalizing Eye Cream",
    description: "A targeted treatment that reduces puffiness, dark circles, and fine lines around the eyes.",
    fullDescription:
      "Our Revitalizing Eye Cream is specifically formulated for the delicate skin around the eyes. Featuring caffeine to reduce puffiness, vitamin C to brighten dark circles, and peptides to improve elasticity and reduce the appearance of fine lines. This lightweight yet nourishing formula absorbs quickly and provides both immediate and long-term benefits for a more refreshed, youthful eye area.",
    price: 157.99,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Eye Care",
    rating: 4,
    reviewCount: 92,
    benefits: [
      "Reduces puffiness",
      "Brightens dark circles",
      "Minimizes fine lines and wrinkles",
      "Suitable for sensitive eyes",
    ],
    ingredients:
      "Water, Glycerin, Caprylic/Capric Triglyceride, Caffeine, Sodium Ascorbyl Phosphate, Acetyl Hexapeptide-8, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Ceramide NP, Niacinamide, Panthenol, Allantoin, Tocopherol, Phenoxyethanol, Ethylhexylglycerin.",
    howToUse:
      "Morning and evening, use ring finger to gently pat a small amount around the orbital bone, avoiding direct contact with eyes. Allow to fully absorb before applying makeup.",
  },
]

export const featuredProducts = products.slice(0, 4)
