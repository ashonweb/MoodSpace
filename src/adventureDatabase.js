import { Heart, Zap, Cloud, Smile, FireExtinguisher, Sun, ParkingCircleIcon, PauseCircle, EyeOff, Flame, Ban, Mountain, Flower, Flower2, Coffee, Crown, Camera, Wind, Music, MapPin, Clock, Star, Compass, Bed, Moon, Users, HeartCrack, Waves, TreePine, Frown, Menu, X, ChevronRight, Search, Loader2 } from 'lucide-react';

let adventureDatabaseData = {
  energetic: [
    {
      title: "Urban Parkour Trail",
      description: "Navigate the city like never before with guided parkour spots and safe practice areas",
      duration: "1-2 hours",
      intensity: 5,
      location: "Downtown District",
      type: "Active Adventure",
      vibe: "Adrenaline rush through urban exploration",
      keyword: "parkour",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "either",
        tone: "adventurous",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Sunrise Hill Sprint",
      description: "Beat the crowd with an early morning hike to catch golden hour views",
      duration: "2-3 hours",
      intensity: 4,
      location: "Nature Reserve",
      type: "Outdoor Challenge",
      vibe: "Fresh air and natural endorphins",
      keyword: "hiking",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "either",
        tone: "invigorating",
        nature: "general",
        location: "outside",
        time: "morning"
      }
    },
    {
      title: "Street Art Bike Tour",
      description: "High-energy cycling tour through the city's most vibrant murals and art districts",
      duration: "3-4 hours",
      intensity: 4,
      location: "Arts Quarter",
      type: "Cultural Sport",
      vibe: "Art meets adventure on two wheels",
      keyword: "cycling",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "either",
        tone: "creative",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Rock Climbing Gym Challenge",
      description: "Indoor bouldering with routes for every skill level, plus friendly climbing community",
      duration: "2-3 hours",
      intensity: 5,
      location: "Sports Complex",
      type: "Strength Challenge",
      vibe: "Conquer fears and build confidence vertically",
      keyword: "climbing",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "either",
        tone: "challenging",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Night Running Club",
      description: "Join energetic runners exploring lit city paths with safety in numbers",
      duration: "1-2 hours",
      intensity: 4,
      location: "City Center",
      type: "Cardio Adventure",
      vibe: "City lights become your running soundtrack",
      keyword: "running",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group",
        tone: "social",
        nature: "general",
        location: "outside",
        time: "evening"
      }
    },
    {
      title: "Axe Throwing Arena",
      description: "Release stress and channel warrior energy in a safe, supervised environment",
      duration: "1-2 hours",
      intensity: 3,
      location: "Entertainment District",
      type: "Skill Sport",
      vibe: "Medieval meets modern stress relief",
      keyword: "throwing",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "either",
        tone: "cathartic",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Dance Battle Workshop",
      description: "Learn street dance moves and join impromptu battles with local dancers",
      duration: "2-3 hours",
      intensity: 4,
      location: "Community Center",
      type: "Creative Movement",
      vibe: "Express your energy through rhythm and flow",
      keyword: "dancing",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group",
        tone: "expressive",
        nature: "general",
        location: "outside",
        time: "evening"
      }
    },
    {
      title: "Obstacle Course Racing",
      description: "Mud runs, rope climbs, and team challenges in outdoor adventure parks",
      duration: "3-5 hours",
      intensity: 5,
      location: "Adventure Park",
      type: "Extreme Challenge",
      vibe: "Transform into your strongest, muddiest self",
      keyword: "obstacles",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "group",
        tone: "challenging",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Skateboard Park Sessions",
      description: "Learn tricks or perfect your style at local skate spots with mentorship",
      duration: "2-4 hours",
      intensity: 4,
      location: "Skate Parks",
      type: "Board Sport",
      vibe: "Roll with the flow of street culture",
      keyword: "skating",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "either",
        tone: "creative",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "High-Intensity Hiking Circuits",
      description: "Power hiking with bodyweight exercises at scenic overlooks",
      duration: "2-3 hours",
      intensity: 5,
      location: "Hill Trails",
      type: "Fitness Adventure",
      vibe: "Nature's gym with breathtaking rewards",
      keyword: "circuits",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "either",
        tone: "challenging",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Martial Arts Bootcamp",
      description: "High-energy kickboxing and martial arts combinations in group classes",
      duration: "1-1.5 hours",
      intensity: 5,
      location: "Fitness Studio",
      type: "Combat Training",
      vibe: "Channel your inner warrior with precision and power",
      keyword: "martial arts",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group",
        tone: "empowering",
        nature: "general",
        location: "outside",
        time: "evening"
      }
    },
    {
      title: "Beach Volleyball Tournament",
      description: "Join pickup games or tournaments on sandy courts with ocean views",
      duration: "2-3 hours",
      intensity: 4,
      location: "Beach Courts",
      type: "Team Sport",
      vibe: "Spike your way to sandy victory",
      keyword: "volleyball",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group",
        tone: "competitive",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Trampoline Park Session",
      description: "Bounce, flip, and fly in a safe environment designed for aerial fun",
      duration: "1-2 hours",
      intensity: 4,
      location: "Trampoline Center",
      type: "Aerial Fun",
      vibe: "Defy gravity and embrace your inner child",
      keyword: "trampolines",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "either",
        tone: "playful",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Kayak Rapids Adventure",
      description: "Navigate flowing waters and gentle rapids with expert guides",
      duration: "3-4 hours",
      intensity: 4,
      location: "River Systems",
      type: "Water Sport",
      vibe: "Paddle through liquid adrenaline",
      keyword: "kayaking",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "group",
        tone: "adventurous",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "CrossFit Community WOD",
      description: "Join the 'Workout of the Day' with supportive fitness community",
      duration: "1 hour",
      intensity: 5,
      location: "CrossFit Box",
      type: "Functional Fitness",
      vibe: "Push limits with encouragement all around",
      keyword: "crossfit",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group",
        tone: "challenging",
        nature: "general",
        location: "outside",
        time: "morning"
      }
    },
    {
      title: "Stand-Up Paddleboard Yoga",
      description: "Balance yoga poses on floating SUP boards for an extra challenge",
      duration: "1.5-2 hours",
      intensity: 3,
      location: "Calm Lake or Bay",
      type: "Water Wellness",
      vibe: "Find zen while floating on liquid meditation",
      keyword: "paddleboard",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "either",
        tone: "balanced",
        nature: "general",
        location: "outside",
        time: "morning"
      }
    },
    {
      title: "Indoor Skydiving Experience",
      description: "Feel the rush of freefall in a controlled wind tunnel environment",
      duration: "1-2 hours",
      intensity: 4,
      location: "Flight Center",
      type: "Simulated Extreme",
      vibe: "Fly without leaving the ground",
      keyword: "skydiving",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "either",
        tone: "thrilling",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Mountain Bike Trail Blazing",
      description: "Navigate challenging single-track trails through forest terrain",
      duration: "2-4 hours",
      intensity: 5,
      location: "Mountain Trails",
      type: "Off-Road Adventure",
      vibe: "Conquer trails that test your mettle",
      keyword: "mountain biking",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "either",
        tone: "adventurous",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Spin Class Power Hour",
      description: "High-energy cycling class with motivating music and instructor guidance",
      duration: "45-60 mins",
      intensity: 5,
      location: "Fitness Studio",
      type: "Indoor Cycling",
      vibe: "Pedal to the beat of your breakthrough",
      keyword: "spin class",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group",
        tone: "motivating",
        nature: "general",
        location: "outside",
        time: "morning"
      }
    },
    {
      title: "Surfing Lesson Adventure",
      description: "Learn to ride waves with professional instruction on beginner-friendly breaks",
      duration: "2-3 hours",
      intensity: 4,
      location: "Surf Beach",
      type: "Ocean Sport",
      vibe: "Ride the ocean's energy to shore",
      keyword: "surfing",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "either",
        tone: "flowing",
        nature: "general",
        location: "outside",
        time: "morning"
      }
    },
    {
      title: "Laser Tag Arena Battle",
      description: "Strategic team combat in futuristic arenas with lights and obstacles",
      duration: "1-2 hours",
      intensity: 3,
      location: "Entertainment Center",
      type: "Tactical Game",
      vibe: "Stealth, strategy, and glowing victory",
      keyword: "laser tag",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group",
        tone: "strategic",
        nature: "general",
        location: "outside",
        time: "evening"
      }
    },
    {
      title: "Zip Line Canopy Tour",
      description: "Soar through treetops on multiple zip lines with scenic forest views",
      duration: "2-3 hours",
      intensity: 3,
      location: "Forest Adventure Park",
      type: "Aerial Adventure",
      vibe: "Fly through nature's cathedral",
      keyword: "zip lining",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "group",
        tone: "exhilarating",
        nature: "general",
        location: "outside",
        time: "daytime"
      }
    },
    {
      title: "Basketball Pickup Games",
      description: "Join community courts for competitive pickup basketball with local players",
      duration: "1-2 hours",
      intensity: 4,
      location: "Community Courts",
      type: "Court Sport",
      vibe: "Shoot your shot and make new connections",
      keyword: "basketball",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group",
        tone: "competitive",
        nature: "general",
        location: "outside",
        time: "evening"
      }
    },
    {
      title: "Escape Room Racing",
      description: "Solve puzzles and riddles under time pressure in themed escape scenarios",
      duration: "1-1.5 hours",
      intensity: 2,
      location: "Escape Room Venue",
      type: "Mental Challenge",
      vibe: "Race against time with your mind as the key",
      keyword: "escape room",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group",
        tone: "strategic",
        nature: "general",
        location: "outside",
        time: "evening"
      }
    }
  ],

peaceful: [
  {
    title: "Secret Garden Meditation",
    description: "Hidden botanical spaces perfect for mindful moments and quiet reflection",
    duration: "1-2 hours",
    intensity: 1,
    location: "Botanical Gardens",
    type: "Mindful Escape",
    vibe: "Nature's embrace for inner peace",
    keyword: "meditation",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "solo",
      tone: "soothing",
      nature: "personal",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Lakeside Reading Nook",
    description: "Discover waterfront spots with perfect reading light and gentle sounds",
    duration: "2-4 hours",
    intensity: 1,
    location: "City Lake",
    type: "Contemplative Space",
    vibe: "Literary sanctuary by the water",
    keyword: "reading",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "either",
      tone: "calm",
      nature: "personal",
      location: "outside",
      time: "daytime"
    }
  },
  {
    title: "Temple Bell Walking Path",
    description: "Gentle walking meditation route past historic temples and peaceful courtyards",
    duration: "1-3 hours",
    intensity: 2,
    location: "Heritage District",
    type: "Spiritual Journey",
    vibe: "Ancient wisdom meets modern calm",
    keyword: "temple walk",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "solo",
      tone: "reflective",
      nature: "personal",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Forest Bathing Experience",
    description: "Japanese shinrin-yoku practice in local woodlands for stress relief",
    duration: "2-3 hours",
    intensity: 1,
    location: "Forest Reserve",
    type: "Nature Therapy",
    vibe: "Trees become your therapists",
    keyword: "forest bathing",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "solo",
      tone: "restorative",
      nature: "personal",
      location: "outside",
      time: "daytime"
    }
  },
  {
    title: "Sunrise Yoga on Rooftops",
    description: "Gentle flow sessions with city skyline views as the world awakens",
    duration: "1-2 hours",
    intensity: 2,
    location: "Home Rooftops",
    type: "Mindful Movement",
    vibe: "Greet the day with gratitude and grace",
    keyword: "yoga",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "either",
      tone: "grounding",
      nature: "personal",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Pottery Wheel Therapy",
    description: "Meditative clay work where imperfection becomes beautiful",
    duration: "2-3 hours",
    intensity: 1,
    location: "Art Studio",
    type: "Craft Meditation",
    vibe: "Shape clay, reshape your mind",
    keyword: "pottery",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "either",
      tone: "creative",
      nature: "personal",
      location: "inside",
      time: "daytime"
    }
  },
  {
    title: "Tea Ceremony Workshop",
    description: "Learn the art of mindful tea preparation and appreciation",
    duration: "1-2 hours",
    intensity: 1,
    location: "Cultural Center",
    type: "Ritual Practice",
    vibe: "Find peace in every sip and breath",
    keyword: "tea ceremony",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "ritualistic",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Stillness Session",
    description: "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
    duration: "15–30 mins",
    intensity: 1,
    location: "Home or Nature",
    type: "Meditation",
    vibe: "Calm mind, steady heart",
    keyword: "meditation",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "solo",
      tone: "calm",
      nature: "personal",
      location: "inside",
      time: "morning or evening"
    }
  },
  {
    title: "Floating Meditation Pools",
    description: "Sensory deprivation tanks for deep relaxation and introspection",
    duration: "1-2 hours",
    intensity: 1,
    location: "Wellness Center",
    type: "Sensory Retreat",
    vibe: "Float away from the world's weight",
    keyword: "float therapy",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "solo",
      tone: "restorative",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Bird Watching Sanctuary",
    description: "Quiet observation of local wildlife in protected natural habitats",
    duration: "2-4 hours",
    intensity: 1,
    location: "Wildlife Reserve",
    type: "Nature Observation",
    vibe: "Patience rewards with natural wonder",
    keyword: "bird watching",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "solo",
      tone: "attentive",
      nature: "general",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Gentle Watercolor Sessions",
    description: "Paint landscapes en plein air with soft, flowing techniques",
    duration: "2-3 hours",
    intensity: 1,
    location: "Scenic Overlooks",
    type: "Art Therapy",
    vibe: "Colors flow like emotions onto canvas",
    keyword: "painting",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "either",
      tone: "expressive",
      nature: "general",
      location: "outside",
      time: "daytime"
    }
  }
]

,
curious: [
  {
    title: "Underground Tunnel Network",
    description: "Explore the city's hidden passageways and forgotten infrastructure with expert guides",
    duration: "2-3 hours",
    intensity: 3,
    location: "Old Town",
    type: "Urban Exploration",
    vibe: "Uncover secrets beneath your feet",
    keyword: "underground tour",
    tags: {
      setting: "outdoor",
      cost: "paid",
      group: "group",
      tone: "mysterious",
      nature: "general",
      location: "outside",
      time: "daytime"
    }
  },
  {
    title: "Maker Space Drop-In",
    description: "Learn 3D printing, woodworking, or electronics from local artisans",
    duration: "2-4 hours",
    intensity: 2,
    location: "Innovation Hub",
    type: "Skill Discovery",
    vibe: "Create something you've never made before",
    keyword: "maker space",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "either",
      tone: "inventive",
      nature: "personal",
      location: "inside",
      time: "daytime"
    }
  },
  {
    title: "Night Market Food Quest",
    description: "Culinary adventure through authentic street food and local specialties",
    duration: "2-3 hours",
    intensity: 2,
    location: "Market District",
    type: "Cultural Immersion",
    vibe: "Taste your way through local culture",
    keyword: "night market",
    tags: {
      setting: "outdoor",
      cost: "paid",
      group: "either",
      tone: "adventurous",
      nature: "general",
      location: "outside",
      time: "evening"
    }
  },
  {
    title: "Abandoned Building Photography",
    description: "Safely explore urban decay with professional photographers and historians",
    duration: "3-4 hours",
    intensity: 3,
    location: "Industrial District",
    type: "Urban Archaeology",
    vibe: "Beauty emerges from forgotten places",
    keyword: "urban exploration",
    tags: {
      setting: "outdoor",
      cost: "paid",
      group: "group",
      tone: "explorative",
      nature: "general",
      location: "outside",
      time: "daytime"
    }
  },
  {
    title: "Mystery Escape Room Crawl",
    description: "Chain multiple themed escape rooms with increasing difficulty levels",
    duration: "3-5 hours",
    intensity: 3,
    location: "Entertainment Complex",
    type: "Puzzle Adventure",
    vibe: "Your mind becomes the ultimate tool",
    keyword: "escape room",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "strategic",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Scientific Lab Open House",
    description: "Behind-the-scenes access to research facilities and ongoing experiments",
    duration: "2-3 hours",
    intensity: 2,
    location: "University",
    type: "Science Exploration",
    vibe: "Peek into the future being created today",
    keyword: "science museum",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "curious",
      nature: "general",
      location: "inside",
      time: "daytime"
    }
  },
  {
    title: "Mushroom Foraging Expedition",
    description: "Learn to identify edible fungi with mycology experts in local forests",
    duration: "3-4 hours",
    intensity: 3,
    location: "Forest Areas",
    type: "Nature Discovery",
    vibe: "Uncover hidden treasures of the forest floor",
    keyword: "foraging tour",
    tags: {
      setting: "outdoor",
      cost: "paid",
      group: "group",
      tone: "educational",
      nature: "personal",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Architecture Walking Decoding",
    description: "Unravel building styles, hidden symbols, and urban planning secrets",
    duration: "2-3 hours",
    intensity: 2,
    location: "Historic Sites",
    type: "Visual Investigation",
    vibe: "Every building whispers its history",
    keyword: "architecture tour",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "either",
      tone: "investigative",
      nature: "general",
      location: "outside",
      time: "daytime"
    }
  }
],

social: [
  {
    title: "Community Garden Volunteering",
    description: "Join locals in tending shared green spaces while making meaningful connections",
    duration: "2-4 hours",
    intensity: 2,
    location: "Neighborhood Gardens",
    type: "Community Service",
    vibe: "Grow friendships while growing food",
    keyword: "community garden",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "group",
      tone: "inclusive",
      nature: "general",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Board Game Café Circuit",
    description: "Hop between cozy spots where strangers become friends over strategic fun",
    duration: "3-5 hours",
    intensity: 1,
    location: "Café District",
    type: "Social Gaming",
    vibe: "Laughter and friendly competition",
    keyword: "board game",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "playful",
      nature: "general",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Local Language Exchange",
    description: "Practice languages with native speakers in casual, welcoming environments",
    duration: "1-2 hours",
    intensity: 2,
    location: "Cultural Center",
    type: "Language Learning",
    vibe: "Bridge cultures through conversation",
    keyword: "language exchange",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "curious",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Cooking Class Collaborations",
    description: "Team up with strangers to create meals from different cultural traditions",
    duration: "2-3 hours",
    intensity: 2,
    location: "Culinary Schools",
    type: "Collaborative Learning",
    vibe: "Friendship seasoned with shared flavors",
    keyword: "cooking class",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "collaborative",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Improv Comedy Drop-In",
    description: "Join supportive groups where mistakes become hilarious moments",
    duration: "2-3 hours",
    intensity: 3,
    location: "Comedy Studios",
    type: "Performance Play",
    vibe: "Laughter breaks down all social barriers",
    keyword: "improv theater",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "expressive",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Community Choir Rehearsals",
    description: "Sing with locals in welcoming choirs that accept all skill levels",
    duration: "1-2 hours",
    intensity: 2,
    location: "Community Centers",
    type: "Musical Community",
    vibe: "Voices unite in beautiful harmony",
    keyword: "choir",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "harmonious",
      nature: "general",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Group Hiking Adventures",
    description: "Join organized hikes with built-in social activities and shared meals",
    duration: "4-6 hours",
    intensity: 3,
    location: "Nature Trails",
    type: "Active Socializing",
    vibe: "Nature bonds strangers into friends",
    keyword: "hiking group",
    tags: {
      setting: "outdoor",
      cost: "paid",
      group: "group",
      tone: "energizing",
      nature: "general",
      location: "outside",
      time: "morning"
    }
  },
  {
    title: "Volunteer Meal Service",
    description: "Serve meals to community members while connecting with like-minded helpers",
    duration: "2-4 hours",
    intensity: 2,
    location: "Community Kitchens",
    type: "Service Connection",
    vibe: "Hearts warm while feeding others",
    keyword: "volunteer kitchen",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "compassionate",
      nature: "personal",
      location: "inside",
      time: "daytime"
    }
  },
  {
    title: "Dance Social Evenings",
    description: "Learn partner dances in welcoming environments with rotation systems",
    duration: "2-3 hours",
    intensity: 3,
    location: "Dance Studios",
    type: "Movement Connection",
    vibe: "Bodies communicate what words cannot",
    keyword: "social dance",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "flirtatious",
      nature: "personal",
      location: "inside",
      time: "evening"
    }
  },
  {
    title: "Book Club Café Meetings",
    description: "Join passionate readers discussing literature in cozy, intellectual spaces",
    duration: "1-2 hours",
    intensity: 1,
    location: "Literary Cafés",
    type: "Intellectual Exchange",
    vibe: "Stories spark real human connections",
    keyword: "book club",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "thoughtful",
      nature: "general",
      location: "inside",
      time: "evening"
    }
  }
]
,
"reflective": [
  {
    "title": "Rooftop Philosophy Walk",
    "description": "Elevated spaces perfect for contemplation with panoramic city views",
    "duration": "1-3 hours",
    "intensity": 2,
    "location": "City Heights",
    "type": "Contemplative Journey",
    "vibe": "Rise above for perspective and clarity",
    "keyword": "rooftop",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "solo",
      "tone": "reflective",
      "nature": "personal",
      "location": "outside"
    }
  },
  {
    "title": "Historic Cemetery Stroll",
    "description": "Peaceful walks through stories of the past in beautiful, quiet settings",
    "duration": "1-2 hours",
    "intensity": 1,
    "location": "Historic District",
    "type": "Reflective Exploration",
    "vibe": "Connect with history and mortality",
    "keyword": "cemetery",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "solo",
      "tone": "reflective",
      "nature": "general",
      "location": "outside"
    }
  },
  {
    "title": "Solo Artist Studio Tour",
    "description": "Self-guided exploration of open studios where creators work in solitude",
    "duration": "2-4 hours",
    "intensity": 2,
    "location": "Artist Quarter",
    "type": "Artistic Reflection",
    "vibe": "Witness the creative process in action",
    "keyword": "art studio",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "solo",
      "tone": "reflective",
      "nature": "personal",
      "location": "outside"
    }
  },
  {
    "title": "Ancient Tree Meditation",
    "description": "Sit with centuries-old trees and contemplate the passage of time",
    "duration": "1-3 hours",
    "intensity": 1,
    "location": "Old Growth Forests",
    "type": "Temporal Reflection",
    "vibe": "Wisdom grows with patient stillness",
    "keyword": "old trees",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "solo",
      "tone": "reflective",
      "nature": "personal",
      "location": "outside"
    }
  },
  {
    "title": "Observatory Night Sessions",
    "description": "Contemplate cosmic scales while stargazing through powerful telescopes",
    "duration": "2-4 hours",
    "intensity": 2,
    "location": "Observatories",
    "type": "Cosmic Reflection",
    "vibe": "Stars put earthly problems in perspective",
    "keyword": "observatory",
    "tags": {
      "setting": "outdoor",
      "cost": "paid",
      "group": "either",
      "tone": "reflective",
      "nature": "general",
      "location": "outside"
    }
  },
  {
    "title": "Labyrinth Walking Meditation",
    "description": "Ancient walking patterns designed for contemplative prayer and thought",
    "duration": "1-2 hours",
    "intensity": 1,
    "location": "Spiritual Centers",
    "type": "Moving Meditation",
    "vibe": "Each step spirals deeper into wisdom",
    "keyword": "labyrinth",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "solo",
      "tone": "reflective",
      "nature": "personal",
      "location": "outside"
    }
  },
  {
    "title": "Solo Kayaking Silence",
    "description": "Peaceful paddling in calm waters with only nature sounds as company",
    "duration": "2-3 hours",
    "intensity": 2,
    "location": "Quiet Lakes",
    "type": "Water Meditation",
    "vibe": "Ripples carry thoughts to deeper places",
    "keyword": "kayak rental",
    "tags": {
      "setting": "outdoor",
      "cost": "paid",
      "group": "solo",
      "tone": "reflective",
      "nature": "personal",
      "location": "outside"
    }
  },
  {
    "title": "Philosophy Café Discussions",
    "description": "Deep conversations about life's big questions with thoughtful strangers",
    "duration": "2-3 hours",
    "intensity": 2,
    "location": "Intellectual Cafés",
    "type": "Mind Exploration",
    "vibe": "Questions matter more than answers",
    "keyword": "philosophy cafe",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "group",
      "tone": "reflective",
      "nature": "general",
      "location": "outside"
    }
  },
  {
    "title": "Quiet Library Archives",
    "description": "Explore rare books and historical documents in hushed reading rooms",
    "duration": "2-4 hours",
    "intensity": 1,
    "location": "Research Libraries",
    "type": "Knowledge Archaeology",
    "vibe": "Centuries of thought await patient discovery",
    "keyword": "library",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "solo",
      "tone": "reflective",
      "nature": "general",
      "location": "outside"
    }
  }
]
,
creative: [
  {
    title: "Guerrilla Art Workshop",
    description: "Create temporary installations in public spaces (with permission!)",
    duration: "3-4 hours",
    intensity: 3,
    location: "Public Spaces",
    type: "Artistic Expression",
    vibe: "Leave your mark on the world",
    keyword: "art workshop",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "group",
      tone: "creative",
      nature: "general",
      location: "outside"
    }
  },
  {
    title: "Photography Scavenger Hunt",
    description: "Capture the city through themed challenges that push creative boundaries",
    duration: "2-5 hours",
    intensity: 3,
    location: "Citywide",
    type: "Visual Adventure",
    vibe: "See familiar places with fresh eyes",
    keyword: "photography",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "either",
      tone: "creative",
      nature: "personal",
      location: "outside"
    }
  },
  {
    title: "Open Mic Circuit",
    description: "Share your voice at welcoming venues that celebrate artistic expression",
    duration: "2-4 hours",
    intensity: 4,
    location: "Entertainment",
    type: "Performance Art",
    vibe: "Transform nerves into creative energy",
    keyword: "performance",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "creative",
      nature: "general",
      location: "outside"
    }
  },
  {
    title: "Collaborative Mural Painting",
    description: "Join community art projects creating large-scale public artworks",
    duration: "3-6 hours",
    intensity: 3,
    location: "Community",
    type: "Public Art",
    vibe: "Individual brushstrokes become collective vision",
    keyword: "mural painting",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "group",
      tone: "creative",
      nature: "general",
      location: "outside"
    }
  },
  {
    title: "Street Performance Bootcamp",
    description: "Learn busking skills from experienced street performers",
    duration: "2-3 hours",
    intensity: 4,
    location: "Public Squares",
    type: "Performance Training",
    vibe: "Turn the city into your stage",
    keyword: "street performance",
    tags: {
      setting: "outdoor",
      cost: "free",
      group: "group",
      tone: "creative",
      nature: "general",
      location: "outside"
    }
  },
  {
    title: "Experimental Music Sessions",
    description: "Jam with strangers using unconventional instruments and found sounds",
    duration: "2-4 hours",
    intensity: 3,
    location: "Music Studios",
    type: "Sound Exploration",
    vibe: "Noise becomes music through creative chaos",
    keyword: "music studio",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "group",
      tone: "creative",
      nature: "general",
      location: "home"
    }
  },
  {
    title: "Storytelling Performance Lab",
    description: "Craft and perform personal narratives in supportive creative spaces",
    duration: "2-3 hours",
    intensity: 3,
    location: "Theater Spaces",
    type: "Narrative Arts",
    vibe: "Your life becomes compelling performance",
    keyword: "storytelling",
    tags: {
      setting: "indoor",
      cost: "free",
      group: "group",
      tone: "creative",
      nature: "general",
      location: "home"
    }
  },
  {
    title: "Clay Sculpture Speed Sessions",
    description: "Rapid-fire ceramics where spontaneity creates unexpected beauty",
    duration: "1-2 hours",
    intensity: 2,
    location: "Pottery Studios",
    type: "Sculptural Play",
    vibe: "Hands know what minds cannot plan",
    keyword: "pottery studio",
    tags: {
      setting: "indoor",
      cost: "paid",
      group: "solo",
      tone: "creative",
      nature: "personal",
      location: "home"
    }
  }
],


  adventurous: [
    {
      title: "Paragliding Over Valleys",
      description: "Launch off cliffs and soar with instructors over scenic valleys",
      duration: "3-4 hours",
      intensity: 5,
      location: "Mountain Edge",
      type: "Aerial Adventure",
      vibe: "Fly above fears and feel breathtaking freedom",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided"
      },
      keyword: "paragliding"
    },
    {
      title: "Whitewater Rafting Trip",
      description: "Team‑powered rafting through class III–IV rapids",
      duration: "4-6 hours",
      intensity: 5,
      location: "River Gorge",
      type: "Water Thrill",
      vibe: "Your heartbeat syncs with roaring water",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "group",
         location: "outside"
      },
      keyword: "rafting"
    },
    {
      title: "Cave Spelunking Expedition",
      description: "Explore underground caverns with ropes, awe‑inspiring formations",
      duration: "3-5 hours",
      intensity: 4,
      location: "Limestone Caves",
      type: "Underground Adventure",
      vibe: "Ancient stone, echoing your adventurous spirit",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
         location: "outside"
      },
      keyword: "spelunking"
    },
    {
      title: "Sandboarding Dunes",
      description: "Hill‑scale your adrenaline sliding down golden desert dunes",
      duration: "2-3 hours",
      intensity: 4,
      location: "Sand Dunes",
      type: "Desert Sport",
      vibe: "Ride wind‑shaped mountains of sand",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "solo",
         location: "outside"
      },
      keyword: "sandboarding"
    },
    {
      title: "Zip‑Line Forest Canopy",
      description: "Shoot through treetops at high speed on forest zip‑lines",
      duration: "1-2 hours",
      intensity: 4,
      location: "Jungle Canopy",
      type: "Aerial Sport",
      vibe: "Bird's-eye nature rush with every zip",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
         location: "outside"
      },
      keyword: "zipline"
    },
    {
      title: "Deep‑Sea Night Dive",
      description: "Explore nocturnal marine life under bio‑lume on guided scuba dive",
      duration: "2-4 hours",
      intensity: 5,
      location: "Coastal Reef",
      type: "Night Diving",
      vibe: "The ocean reveals its hidden nighttime secrets",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided"
      },
      keyword: "diving"
    },
    {
      title: "Hidden Cave Exploration",
      description: "Venture into lesser-known caves with guided safety briefings",
      duration: "3-4 hours",
      intensity: 4,
      location: "Nearby Hills",
      type: "Nature Adventure",
      vibe: "Discover darkness and ancient secrets",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "guided"
      },
      keyword: "caving"
    },
    {
      title: "Solo Cliffside Trail",
      description: "Hike rugged paths with stunning vistas, perfect for solo thrill-seekers",
      duration: "2-3 hours",
      intensity: 4,
      location: "Coastal Cliffs",
      type: "Outdoor Trek",
      vibe: "Feel alive on the edge of nature",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
         location: "outside"
      },
      keyword: "hiking"
    },
    {
      title: "Urban Rooftop Climbing",
      description: "Scale city buildings (safely) with professional gear and guides",
      duration: "2-3 hours",
      intensity: 5,
      location: "City Skyline",
      type: "Urban Adventure",
      vibe: "City heights fuel your daring spirit",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
         location: "outside"
      },
      keyword: "climbing"
    },
    {
      title: "Whitewater Kayaking Intro",
      description: "Learn to paddle in gentle rapids with expert instruction",
      duration: "3-4 hours",
      intensity: 4,
      location: "River Rapids",
      type: "Water Sport",
      vibe: "Ride the waves, conquer the current",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
         location: "outside"
      },
      keyword: "kayaking"
    },
    {
      title: "Nighttime Zip Line Course",
      description: "Soar through treetops under the stars with minimal crowds",
      duration: "1-2 hours",
      intensity: 4,
      location: "Adventure Park",
      type: "Aerial Adventure",
      vibe: "Fly free in the quiet night",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
         location: "outside"
      },
      keyword: "zipline"
    },
    {
      title: "Solo Wilderness Campout",
      description: "Set up a one-night camp in a safe, designated forest area",
      duration: "4-6 hours",
      intensity: 3,
      location: "Forest Reserve",
      type: "Survival Experience",
      vibe: "Embrace solitude under the stars",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
         location: "outside"
      },
      keyword: "camping"
    },
    {
      title: "Paragliding Taster Session",
      description: "Glide over hills with an instructor for a safe, thrilling ride",
      duration: "1-2 hours",
      intensity: 5,
      location: "Hilltops",
      type: "Aerial Sport",
      vibe: "Soar above your everyday limits",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
        location: "outside",
      },
      keyword: "paragliding"
    },
    {
      title: "Mountain Biking Trails",
      description: "Tackle beginner-friendly trails with stunning natural scenery",
      duration: "2-3 hours",
      intensity: 4,
      location: "Mountain Paths",
      type: "Cycling Adventure",
      vibe: "Speed through nature's playground",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        location:"outside"
      },
      keyword: "biking"
    },
    {
      title: "Canyon Rappelling Intro",
      description: "Learn to descend cliffs with expert guides in a solo-friendly setting",
      duration: "2-3 hours",
      intensity: 4,
      location: "Canyon Area",
      type: "Vertical Adventure",
      vibe: "Descend into your own courage",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided",
        location: "outside"
      },
      keyword: "rappelling"
    },
    {
      title: "Off-Road ATV Exploration",
      description: "Drive through rugged terrain in a solo or small-group setting",
      duration: "2-3 hours",
      intensity: 4,
      location: "Outskirts",
      type: "Motorized Adventure",
      vibe: "Power through the wild unknown",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "either",
        location: "outside"
      },
      keyword: "atv"
    }
  ],


  love: [
    {
      title: "Stargazing Picnic for Two",
      description: "Lay on a blanket under the stars with warm drinks and whispered dreams",
      duration: "2-3 hours",
      intensity: 1,
      location: "Hilltop Meadow",
      type: "Romantic Escape",
      vibe: "Love written in constellations",
      keyword: "stargazing",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "evening",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Couple's Pottery Class",
      description: "Shape clay together and get delightfully messy while creating something meaningful",
      duration: "2 hours",
      intensity: 2,
      location: "Art Studio",
      type: "Creative Bonding",
      vibe: "Spin love into every sculpted swirl",
      keyword: "pottery",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "paid",
        time: "creative",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Love Letter Café Date",
      description: "Write heartfelt notes to each other over warm drinks in a quiet café",
      duration: "1-2 hours",
      intensity: 1,
      location: "Quiet Café",
      type: "Written Connection",
      vibe: "Ink spills where words touch the heart",
      keyword: "letters",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "low-cost",
        time: "reflective",
        nature: "personal",
        location: "both"
      }
    },
    {
      title: "Sunrise Beach Walk",
      description: "Walk hand-in-hand as the sun rises over gentle waves",
      duration: "1-2 hours",
      intensity: 2,
      location: "Coastal Shoreline",
      type: "Early Bonding",
      vibe: "New day, renewed love",
      keyword: "sunrise",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "morning",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "DIY Candle-Making Date",
      description: "Make scented candles together and take home the warmth",
      duration: "1.5-2 hours",
      intensity: 1,
      location: "Home Workshop",
      type: "Sensory Connection",
      vibe: "Love in every flickering flame",
      keyword: "candles",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "paid",
        time: "creative",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "Memory Jar Workshop",
      description: "Write little memories or wishes to place into a shared keepsake jar",
      duration: "1-2 hours",
      intensity: 1,
      location: "Home or Craft Store",
      type: "Sentimental Creation",
      vibe: "Tiny notes, big feelings",
      keyword: "memories",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "free",
        time: "reflective",
        nature: "personal",
        location: "both"
      }
    },
    {
      title: "Tandem Bike Ride",
      description: "Cycle scenic paths together on a two-person bike",
      duration: "1-2 hours",
      intensity: 2,
      location: "Nature Trail",
      type: "Playful Ride",
      vibe: "In sync, on wheels and in hearts",
      keyword: "cycling",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "paid",
        time: "active",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Slow Dance Under Fairy Lights",
      description: "A quiet evening with music, soft lighting, and your favorite slow songs",
      duration: "1-2 hours",
      intensity: 1,
      location: "Garden Patio",
      type: "Intimate Moment",
      vibe: "Every sway says 'I'm here with you'",
      keyword: "dancing",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "evening",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "Cooking Together Night",
      description: "Prepare a recipe together and share it with candlelight",
      duration: "2-3 hours",
      intensity: 2,
      location: "Home Kitchen",
      type: "Culinary Connection",
      vibe: "Chop, laugh, taste—fall in love again",
      keyword: "cooking",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "low-cost",
        time: "creative",
        nature: "general",
        location: "home"
      }
    },
    {
      title: "Love-Theme Polaroid Walk",
      description: "Wander with a Polaroid camera capturing moments of affection",
      duration: "1-2 hours",
      intensity: 2,
      location: "Scenic Neighborhood",
      type: "Visual Keepsake",
      vibe: "Freeze-frame every little spark",
      keyword: "photography",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "low-cost",
        time: "creative",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Rooftop Storytelling Night",
      description: "Share personal stories or dreams under a city skyline with cozy blankets",
      duration: "1-2 hours",
      intensity: 1,
      location: "Rooftop or Balcony",
      type: "Intimate Sharing",
      vibe: "Words weave your hearts closer",
      keyword: "storytelling",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "evening",
        nature: "personal",
        location: "both"
      }
    },
    {
      title: "Garden Planting Date",
      description: "Plant seeds or flowers together in a small garden or pots, nurturing growth side by side",
      duration: "1-2 hours",
      intensity: 2,
      location: "Backyard or Community Garden",
      type: "Nurturing Bond",
      vibe: "Grow love with every seed you sow",
      keyword: "gardening",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "low-cost",
        time: "daytime",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "Moonlit Rowboat Ride",
      description: "Row gently across a calm lake under moonlight, sharing quiet moments",
      duration: "1-2 hours",
      intensity: 2,
      location: "Local Lake or River",
      type: "Romantic Adventure",
      vibe: "Glide together in the moon's soft glow",
      keyword: "rowing",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "paid",
        time: "evening",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Partner Yoga Session",
      description: "Flow through gentle yoga poses together, syncing breath and movement",
      duration: "1-1.5 hours",
      intensity: 2,
      location: "Yoga Studio or Park",
      type: "Physical Connection",
      vibe: "Breathe as one, move as one",
      keyword: "yoga",
      tags: {
        setting: "both",
        group: "couple",
        cost: "paid",
        time: "daytime",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "Vinyl Record Evening",
      description: "Pick vintage records and listen together, curled up with a cozy blanket",
      duration: "1-2 hours",
      intensity: 1,
      location: "Home Living Room",
      type: "Auditory Bonding",
      vibe: "Let music spin your hearts closer",
      keyword: "music",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "free",
        time: "evening",
        nature: "general",
        location: "home"
      }
    },
    {
      title: "Scenic Train Journey",
      description: "Take a short train ride through beautiful landscapes, sharing stories by the window",
      duration: "2-3 hours",
      intensity: 1,
      location: "Regional Railway",
      type: "Shared Journey",
      vibe: "Love moves with the rhythm of the rails",
      keyword: "travel",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "paid",
        time: "daytime",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Handwritten Recipe Swap",
      description: "Exchange and cook each other's favorite childhood recipes, sharing their stories",
      duration: "2-3 hours",
      intensity: 2,
      location: "Home Kitchen",
      type: "Culinary Storytelling",
      vibe: "Taste the love in every shared bite",
      keyword: "recipes",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "low-cost",
        time: "evening",
        nature: "personal",
        location: "home"
      }
    }
  ],
  heartbreak: [
    {
      title: "Grief Walk in Nature",
      description: "Walk quietly through forests or gardens, letting nature absorb your feelings",
      duration: "1-2 hours",
      intensity: 1,
      location: "Nature Reserve",
      type: "Nature Therapy",
      vibe: "Let trees hold your sorrow",
      keyword: "walking",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "reflective",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Letter Burning Ritual",
      description: "Write letters to the person or past version of you, then burn them in release",
      duration: "30-60 mins",
      intensity: 1,
      location: "Fire Circle",
      type: "Symbolic Healing",
      vibe: "Let go of what never apologized",
      keyword: "letters",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "symbolic",
        nature: "personal",
        location: "outside"
      }
    },
    {
      title: "Anger Release Smash Room",
      description: "Break plates, glass, or electronics safely in a smash room",
      duration: "30-45 mins",
      intensity: 3,
      location: "Smash Studio",
      type: "Physical Catharsis",
      vibe: "Smash what you couldn't say out loud",
      keyword: "breaking",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "cathartic",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Scream Therapy Hilltop",
      description: "Find a private hilltop or cliff and scream into the open air",
      duration: "15-30 mins",
      intensity: 2,
      location: "Secluded Nature Spot",
      type: "Emotional Release",
      vibe: "Let it out — loudly, freely",
      keyword: "screaming",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "raw",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Guided Breakup Journaling",
      description: "Use prompts designed for processing betrayal and reclaiming self",
      duration: "1-2 hours",
      intensity: 1,
      location: "Café or Home",
      type: "Reflective Writing",
      vibe: "Write your way to truth and closure",
      keyword: "journaling",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "reflective",
        nature: "personal",
        location: "both"
      }
    },
    {
      title: "Boxing for Boundaries",
      description: "Take a solo or intro class in boxing/kickboxing to feel strong again",
      duration: "1 hour",
      intensity: 4,
      location: "Boxing Gym",
      type: "Physical Empowerment",
      vibe: "Every punch says: I'm reclaiming myself",
      keyword: "boxing",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "empowering",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Self-Worth Makeover",
      description: "Haircut, spa, nails—any glow-up activity just for YOU",
      duration: "1-2 hours",
      intensity: 1,
      location: "Salon or Spa",
      type: "Rebirth Ritual",
      vibe: "Rebuild from the outside in",
      keyword: "makeover",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "restorative",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Friendship Sanctuary Night",
      description: "Spend time with a trusted friend—no advice, just presence",
      duration: "2-3 hours",
      intensity: 1,
      location: "Home or Café",
      type: "Emotional Safety",
      vibe: "Healing happens when you're held",
      keyword: "friendship",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "group",
        tone: "supportive",
        nature: "personal",
        location: "both"
      }
    },
    {
      title: "Symbolic Jewelry Burial",
      description: "Bury old rings, notes, or items with meaning in a symbolic farewell",
      duration: "30 mins",
      intensity: 2,
      location: "Quiet Outdoor Spot",
      type: "Letting Go Ritual",
      vibe: "What's buried doesn't carry you anymore",
      keyword: "burial",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "symbolic",
        nature: "personal",
        location: "outside"
      }
    },
    {
      title: "Reclaim-Your-Space Cleaning Ritual",
      description: "Deep clean, rearrange, and sage spaces they once touched",
      duration: "1-3 hours",
      intensity: 2,
      location: "Home",
      type: "Energetic Reset",
      vibe: "Clear your space, clear your soul",
      keyword: "cleaning",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "cleansing",
        nature: "general",
        location: "home"
      }
    },
    {
      title: "Silent Beach Sketch",
      description: "Sit by the ocean and sketch or doodle your emotions on paper, letting the waves guide your hand",
      duration: "1-2 hours",
      intensity: 1,
      location: "Nearby Beach or Coast",
      type: "Creative Expression",
      vibe: "Let the sea carry your lines to peace",
      keyword: "sketching",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "reflective",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Stillness Session",
      description: "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      duration: "15–30 mins",
      intensity: 1,
      location: "Home or Nature",
      type: "Meditation",
      vibe: "Calm mind, steady heart",
      keyword: "meditation",
      tags: {
        setting: "both",
        cost: "free",
        group: "solo",
        time: "morning or evening",
        tone: "calm",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "River Stone Release",
      description: "Collect smooth stones, whisper your pain into them, and toss them into a flowing river",
      duration: "30-60 mins",
      intensity: 1,
      location: "Nearby River or Stream",
      type: "Symbolic Letting Go",
      vibe: "Let the current carry your hurt away",
      keyword: "stones",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "symbolic",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Candlelit Bath Ritual",
      description: "Soak in a warm bath with candles, letting water and light soothe your soul",
      duration: "30-60 mins",
      intensity: 1,
      location: "Home Bathroom",
      type: "Self-Care Reset",
      vibe: "Wash away the weight of yesterday",
      keyword: "bathing",
      tags: {
        setting: "indoor",
        cost: "low-cost",
        group: "solo",
        tone: "restorative",
        nature: "general",
        location: "home"
      }
    },
    {
      title: "Collage of Closure",
      description: "Create a collage from old magazines to visualize your healing journey",
      duration: "1-2 hours",
      intensity: 1,
      location: "Home Table",
      type: "Creative Expression",
      vibe: "Piece together a new version of you",
      keyword: "collage",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "reflective",
        nature: "personal",
        location: "home"
      }
    },
    {
      title: "Solo Dance Release",
      description: "Move freely to music in a private space, letting your body express what words can't",
      duration: "30-60 mins",
      intensity: 2,
      location: "Home or Studio",
      type: "Physical Catharsis",
      vibe: "Dance until the pain feels lighter",
      keyword: "dancing",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "cathartic",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "Sunset Gratitude Walk",
      description: "Walk at dusk, reflecting on small things you're grateful for amidst the pain",
      duration: "30-60 mins",
      intensity: 1,
      location: "Local Park or Trail",
      type: "Grounding Reflection",
      vibe: "Find light in the fading day",
      keyword: "gratitude",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "reflective",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Solo Pottery Healing",
      description: "Shape clay into forms that represent your emotions, then reshape them into something beautiful",
      duration: "1-2 hours",
      intensity: 2,
      location: "Art Studio or Home",
      type: "Creative Transformation",
      vibe: "Mold your pain into something new",
      keyword: "pottery",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "transformative",
        nature: "general",
        location: "both"
      }
    },
    {
      title: "Memory Box Creation",
      description: "Create a beautiful box to hold mementos, then decide what stays and what goes",
      duration: "1-2 hours",
      intensity: 1,
      location: "Home Workspace",
      type: "Keepsake Curation",
      vibe: "Keep the love, release the hurt",
      keyword: "memories",
      tags: {
        setting: "indoor",
        cost: "low-cost",
        group: "solo",
        tone: "reflective",
        nature: "personal",
        location: "home"
      }
    },
    {
      title: "Sunrise Power Hike",
      description: "Challenge yourself with an early morning hike, greeting the new day with strength",
      duration: "2-3 hours",
      intensity: 3,
      location: "Mountain Trail",
      type: "Physical Empowerment",
      vibe: "Rise with the sun, rise from the ashes",
      keyword: "hiking",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        time: "morning",
        tone: "empowering",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Therapeutic Baking Session",
      description: "Bake something nurturing for yourself, focusing on the healing process of creation",
      duration: "2-3 hours",
      intensity: 2,
      location: "Home Kitchen",
      type: "Nurturing Creation",
      vibe: "Knead your worries into sweetness",
      keyword: "baking",
      tags: {
        setting: "indoor",
        cost: "low-cost",
        group: "solo",
        tone: "nurturing",
        nature: "general",
        location: "home"
      }
    },
    {
      title: "Stargazing Solo Reflection",
      description: "Lie under the stars and contemplate your place in the vast universe",
      duration: "1-2 hours",
      intensity: 1,
      location: "Open Field or Rooftop",
      type: "Cosmic Perspective",
      vibe: "You are stardust healing under starlight",
      keyword: "stargazing",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        time: "evening",
        tone: "contemplative",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Healing Playlist Creation",
      description: "Curate the perfect soundtrack for your healing journey, from raw to renewed",
      duration: "1-2 hours",
      intensity: 1,
      location: "Home or Café",
      type: "Musical Therapy",
      vibe: "Let music be your companion through the journey",
      keyword: "music",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "reflective",
        nature: "personal",
        location: "both"
      }
    },
    {
      title: "Solo Photography Walk",
      description: "Capture moments of beauty and resilience through your camera lens",
      duration: "1-2 hours",
      intensity: 2,
      location: "Urban Streets or Nature",
      type: "Visual Storytelling",
      vibe: "Frame your world through healing eyes",
      keyword: "photography",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "creative",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Bookstore Sanctuary Visit",
      description: "Wander through a cozy bookstore, finding stories that speak to your soul",
      duration: "1-2 hours",
      intensity: 1,
      location: "Independent Bookstore",
      type: "Literary Healing",
      vibe: "Find yourself in someone else's words",
      keyword: "reading",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "contemplative",
        nature: "general",
        location: "outside"
      }
    },
    {
      title: "Plant Rescue Mission",
      description: "Adopt and nurture a plant, focusing on growth and renewal",
      duration: "1-2 hours",
      intensity: 1,
      location: "Garden Center or Home",
      type: "Nurturing Growth",
      vibe: "Grow something beautiful from broken soil",
      keyword: "gardening",
      tags: {
        setting: "both",
        cost: "low-cost",
        group: "solo",
        tone: "nurturing",
        nature: "general",
        location: "both"
      }
    }
  ]
};


const moods = [
  {
      id: 'energetic',
      name: 'Energetic',
      icon: Zap,
      color: 'from-yellow-400 to-red-600',
      bgColor: 'bg-yellow-100',
      description: 'Ready to conquer the world!',
      category: 'positive'
  },
  {
      id: 'peaceful',
      name: 'Peaceful',
      icon: Cloud,
      color: 'from-teal-300 to-blue-400',
      bgColor: 'bg-teal-50',
      description: 'Seeking calm and tranquility',
      category: 'calm'
  },
  {
      id: 'happy',
      name: 'Happy',
      icon: Smile,
      color: 'from-yellow-300 to-orange-400',
      bgColor: 'bg-yellow-50',
      description: 'Feeling joyful and upbeat',
      category: 'positive'
  },
  {
      id: 'curious',
      name: 'Curious',
      icon: Compass,
      color: 'from-violet-400 to-fuchsia-500',
      bgColor: 'bg-violet-50',
      description: 'Want to discover something new',
      category: 'explore'
  },
  {
      id: 'social',
      name: 'Social',
      icon: Coffee,
      color: 'from-red-100 to-pink-300',
      bgColor: 'bg-rose-50',
      description: 'Craving human connection',
      category: 'popular'
  },
  {
      id: 'calm',
      name: 'Calm',
      icon: Waves,
      color: 'from-blue-100 to-teal-300',
      bgColor: 'bg-blue-50',
      description: 'At peace and relaxed',
      category: 'calm'
  },
  {
      id: 'creative',
      name: 'Creative',
      icon: Camera,
      color: 'from-orange-300 to-yellow-400',
      bgColor: 'bg-orange-50',
      description: 'Inspiration is calling',
      category: 'explore'
  },
  {
      id: 'adventurous',
      name: 'Adventurous',
      icon: MapPin,
      color: 'from-blue-400 to-orange-400',
      bgColor: 'bg-orange-50',
      description: 'Craving excitement and new places',
      category: 'explore'
  },
  {
      id: 'love',
      name: 'Love',
      icon: Heart,
      color: 'from-pink-400 to-rose-600',
      bgColor: 'bg-pink-50',
      description: 'Feeling affectionate and warm',
      category: 'positive'
  },
  {
      id: 'reflective',
      name: 'Reflective',
      icon: Mountain,
      color: 'from-green-300 to-emerald-500',
      bgColor: 'bg-emerald-50',
      description: 'Need space to think and feel',
      category: 'calm'
  },
  {
      id: 'playful',
      name: 'Playful',
      icon: Music,
      color: 'from-pink-300 to-yellow-300',
      bgColor: 'bg-yellow-50',
      description: 'Ready for fun and games',
      category: 'positive'
  },
  {
      id: 'focused',
      name: 'Focused',
      icon: Clock,
      color: 'from-indigo-400 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'In the zone and productive',
      category: 'explore'
  },
  {
      id: 'stressed',
      name: 'Stressed',
      icon: Wind,
      color: 'from-red-200 to-pink-300',
      bgColor: 'bg-pink-50',
      description: 'Need to unwind and release tension',
      category: 'challenging'
  },
  {
      id: 'tired',
      name: 'Tired',
      icon: Moon,
      color: 'from-indigo-100 to-purple-300',
      bgColor: 'bg-purple-50',
      description: 'Running low on energy',
      category: 'calm'
  },
  {
      id: 'angry',
      name: 'Angry',
      icon: Flame,
      color: 'from-red-400 to-gray-700',
      bgColor: 'bg-red-50',
      description: 'Need to let off some steam',
      category: 'challenging'
  },
  {
      id: 'sad',
      name: 'Sad',
      icon: Frown,
      color: 'from-blue-200 to-gray-400',
      bgColor: 'bg-blue-50',
      description: 'Feeling down or blue',
      category: 'challenging'
  },
  {
      id: 'heartbreak',
      name: 'Heartbreak',
      icon: HeartCrack,
      color: 'from-blue-300 to-indigo-500',
      bgColor: 'bg-blue-50',
      description: 'Mending a broken heart',
      category: 'challenging'
  },
  {
      id: 'cozy',
      name: 'Cozy',
      icon: Bed,
      color: 'from-orange-200 to-pink-300',
      bgColor: 'bg-pink-50',
      description: 'Wanting warmth and comfort',
      category: 'calm'
  }
];

const moodCategories = {
  popular: { name: 'Popular', moods: moods.filter(m => m.category === 'popular') },
  positive: { name: 'Positive Vibes', moods: moods.filter(m => m.category === 'positive') },
  calm: { name: 'Find Peace', moods: moods.filter(m => m.category === 'calm') },
  explore: { name: 'Explore & Create', moods: moods.filter(m => m.category === 'explore') },
  challenging: { name: 'Working Through It', moods: moods.filter(m => m.category === 'challenging') }
};

const keywordMappings = {
  skating: ['skating', 'rollerblading', 'inline skating', 'skateboarding'],
  game: ['games', 'puzzles', 'competitions', 'challenges'],
  outdoor: ['outdoor', 'nature', 'wilderness'],
  water: ['water', 'lake', 'river', 'beach', 'kayaking'],
  garden: ['garden', 'botanical', 'flowers', 'plants'],
  elevation: ['hill', 'mountain', 'hiking', 'trekking'],
  language: ['language', 'speaking', 'communication', 'conversation'],
  comedy: ['comedy', 'humor', 'stand-up', 'jokes'],
  gratitude: ['gratitude', 'thankful', 'journaling', 'mindfulness'],
  park: ['park', 'playground', 'recreation'],
  fitness: ['fitness', 'exercise', 'workout', 'gym'],
  cultural: ['culture', 'museum', 'history', 'heritage'],
  quiet: ['quiet', 'reading', 'meditation', 'library'],
  food: ['food', 'dining', 'restaurant', 'cuisine'],
  shopping: ['shopping', 'market', 'store', 'bazaar'],
  entertainment: ['entertainment', 'cinema', 'theater', 'concert'],
  adventure: ['adventure', 'thrill', 'extreme sports'],
  urban: ['urban', 'city', 'downtown', 'metropolitan'],
  wellness: ['wellness', 'health', 'spa', 'relaxation'],
  cozy: ['cozy', 'comfort', 'snug', 'homey'],
  love: ['love', 'romance', 'connection', 'relationship'],
  creative: ['creative', 'art', 'craft', 'painting'],
  social: ['social', 'community', 'gathering', 'friends'],
  romantic: ['romantic', 'candlelight', 'date', 'couple'],
  energetic: ['energetic', 'active', 'lively', 'vibrant'],
  stressRelief: ['stress', 'relief', 'calm', 'unwind'],
  healing: ['healing', 'recovery', 'restore', 'comfort'],
  focus: ['focus', 'productivity', 'study', 'concentration'],
  music: ['music', 'melody', 'song', 'performance'],
  nightlife: ['nightlife', 'evening', 'lights', 'late night']
};


const moodCategoryMappings = {
  energetic: ['fitness', 'adventure', 'outdoor', 'energetic', 'elevation', 'urban'],
  peaceful: ['quiet', 'garden', 'water', 'wellness', 'cozy', 'healing'],
  happy: ['entertainment', 'social', 'food', 'park', 'creative', 'music'],
  curious: ['cultural', 'creative', 'urban', 'adventure', 'focus', 'outdoor'],
  social: ['social', 'food', 'entertainment', 'shopping', 'music', 'urban'],
  calm: ['wellness', 'quiet', 'water', 'garden', 'healing', 'cozy'],
  creative: ['creative', 'cultural', 'music', 'urban', 'garden', 'nightlife'],
  adventurous: ['adventure', 'elevation', 'outdoor', 'energetic', 'urban', 'fitness'],
  love: ['romantic', 'garden', 'water', 'cozy', 'food', 'nightlife'],
  reflective: ['quiet', 'elevation', 'water', 'cultural', 'healing', 'focus'],
  playful: ['entertainment', 'music', 'social', 'park', 'creative', 'energetic'],
  focused: ['focus', 'quiet', 'cultural', 'urban', 'fitness', 'elevation'],
  stressed: ['stressRelief', 'wellness', 'fitness', 'water', 'quiet', 'healing'],
  tired: ['cozy', 'wellness', 'quiet', 'healing', 'water', 'food'],
  angry: ['fitness', 'adventure', 'stressRelief', 'outdoor', 'energetic', 'elevation'],
  sad: ['healing', 'quiet', 'wellness', 'cozy', 'water', 'garden'],
  heartbreak: ['healing', 'quiet', 'wellness', 'water', 'cozy', 'romantic'],
  cozy: ['cozy', 'food', 'wellness', 'romantic', 'quiet', 'nightlife']
};


 const getStandardizedCityName = (normalizedCity) => {
        if (
            normalizedCity.includes('bangalore') ||
            normalizedCity.includes('bengaluru') ||
            normalizedCity.includes('bangaloreurban') ||
            normalizedCity.includes('bangaloreeast') ||
            normalizedCity.includes('bangalorewest')
        ) {
            return "Bangalore";
        } else if (
            normalizedCity.includes('delhi') ||
            normalizedCity.includes('newdelhi')
        ) {
            return "Delhi";
        } else if (
            normalizedCity.includes('mumbai') ||
            normalizedCity.includes('bombay') ||
            normalizedCity.includes('greatermumbai')
        ) {
            return "Mumbai";
        } else if (
            normalizedCity.includes('chennai') ||
            normalizedCity.includes('madras')
        ) {
            return "Chennai";
        } else if (
            normalizedCity.includes('kolkata') ||
            normalizedCity.includes('calcutta')
        ) {
            return "Kolkata";
        } else if (
            normalizedCity.includes('hyderabad')
        ) {
            return "Hyderabad";
        } else if (
            normalizedCity.includes('pune') ||
            normalizedCity.includes('poona')
        ) {
            return "Pune";
        } else if (
            normalizedCity.includes('ahmedabad') ||
            normalizedCity.includes('amdavad')
        ) {
            return "Ahmedabad";
        } else if (
            normalizedCity.includes('gurgaon') ||
            normalizedCity.includes('gurugram')
        ) {
            return "Gurgaon";
        } else if (
            normalizedCity.includes('noida')
        ) {
            return "Noida";
        } else if (
            normalizedCity.includes('jaipur') ||
            normalizedCity.includes('pinkcity')
        ) {
            return "Jaipur";
        } else if (
            normalizedCity.includes('lucknow')
        ) {
            return "Lucknow";
        } else if (
            normalizedCity.includes('kochi') ||
            normalizedCity.includes('cochin')
        ) {
            return "Kochi";
        } else if (
            normalizedCity.includes('trivandrum') ||
            normalizedCity.includes('thiruvananthapuram')
        ) {
            return "Trivandrum";
        } else if (
            normalizedCity.includes('bhopal')
        ) {
            return "Bhopal";
        } else if (
            normalizedCity.includes('indore')
        ) {
            return "Indore";
        } else if (
            normalizedCity.includes('patna')
        ) {
            return "Patna";
        } else if (
            normalizedCity.includes('nagpur')
        ) {
            return "Nagpur";
        } else if (
            normalizedCity.includes('surat') ||
            normalizedCity.includes('suratcity')
        ) {
            return "Surat";
        } else if (
            normalizedCity.includes('kanpur') ||
            normalizedCity.includes('cawnpore')
        ) {
            return "Kanpur";
        } else if (
            normalizedCity.includes('bhubaneswar')
        ) {
            return "Bhubaneswar";
        } else if (
            normalizedCity.includes('visakhapatnam') ||
            normalizedCity.includes('vizag')
        ) {
            return "Visakhapatnam";
        } else if (
            normalizedCity.includes('coimbatore')
        ) {
            return "Coimbatore";
        } else if (
            normalizedCity.includes('chandigarh')
        ) {
            return "Chandigarh";
        } else if (
            normalizedCity.includes('goa') ||
            normalizedCity.includes('panaji') ||
            normalizedCity.includes('panjim')
        ) {
            return "Goa";
        } else if (
            normalizedCity.includes('mysore') ||
            normalizedCity.includes('mysuru')
        ) {
            return "Mysore";
        } else if (
            normalizedCity.includes('madurai')
        ) {
            return "Madurai";
        } else if (
            normalizedCity.includes('varanasi') ||
            normalizedCity.includes('benaras') ||
            normalizedCity.includes('banaras')
        ) {
            return "Varanasi";
        } else if (
            normalizedCity.includes('amritsar')
        ) {
            return "Amritsar";
        } else if (
            normalizedCity.includes('dehradun')
        ) {
            return "Dehradun";
        } else if (
            normalizedCity.includes('guwahati')
        ) {
            return "Guwahati";
        } else if (
            normalizedCity.includes('ranchi')
        ) {
            return "Ranchi";
        } else if (
            normalizedCity.includes('raipur')
        ) {
            return "Raipur";
        } else if (
            normalizedCity.includes('jodhpur')
        ) {
            return "Jodhpur";
        } else if (
            normalizedCity.includes('udaipur')
        ) {
            return "Udaipur";
        } else if (
            normalizedCity.includes('pondicherry') ||
            normalizedCity.includes('puducherry')
        ) {
            return "Puducherry";
        } else if (
            normalizedCity.includes('shimla')
        ) {
            return "Shimla";
        } else if (
            normalizedCity.includes('manali')
        ) {
            return "Manali";
        } else if (
            normalizedCity.includes('darjeeling')
        ) {
            return "Darjeeling";
        } else if (
            normalizedCity.includes('gangtok')
        ) {
            return "Gangtok";
        } else if (
            normalizedCity.includes('srinagar')
        ) {
            return "Srinagar";
        } else if (
            normalizedCity.includes('leh')
        ) {
            return "Leh";
        } else if (
            normalizedCity.includes('agra')
        ) {
            return "Agra";
        } else if (
            normalizedCity.includes('meerut')
        ) {
            return "Meerut";
        } else if (
            normalizedCity.includes('ludhiana')
        ) {
            return "Ludhiana";
        } else if (
            normalizedCity.includes('nashik')
        ) {
            return "Nashik";
        } else if (
            normalizedCity.includes('aurangabad')
        ) {
            return "Aurangabad";
        } else if (
            normalizedCity.includes('vadodara') ||
            normalizedCity.includes('baroda')
        ) {
            return "Vadodara";
        } else if (
            normalizedCity.includes('rajkot')
        ) {
            return "Rajkot";
        } else if (
            normalizedCity.includes('allahabad') ||
            normalizedCity.includes('prayagraj')
        ) {
            return "Prayagraj";
        } else if (
            normalizedCity.includes('faridabad')
        ) {
            return "Faridabad";
        } else if (
            normalizedCity.includes('ghaziabad')
        ) {
            return "Ghaziabad";
        } else if (
            normalizedCity.includes('howrah')
        ) {
            return "Howrah";
        } else if (
            normalizedCity.includes('jamshedpur')
        ) {
            return "Jamshedpur";
        } else if (
            normalizedCity.includes('dhanbad')
        ) {
            return "Dhanbad";
        } else if (
            normalizedCity.includes('asansol')
        ) {
            return "Asansol";
        } else if (
            normalizedCity.includes('siliguri')
        ) {
            return "Siliguri";
        } else if (
            normalizedCity.includes('gwalior')
        ) {
            return "Gwalior";
        } else if (
            normalizedCity.includes('bareilly')
        ) {
            return "Bareilly";
        } else if (
            normalizedCity.includes('moradabad')
        ) {
            return "Moradabad";
        } else if (
            normalizedCity.includes('tiruchirappalli') ||
            normalizedCity.includes('trichy')
        ) {
            return "Tiruchirappalli";
        } else if (
            normalizedCity.includes('solapur')
        ) {
            return "Solapur";
        } else if (
            normalizedCity.includes('salem')
        ) {
            return "Salem";
        } else if (
            normalizedCity.includes('warangal')
        ) {
            return "Warangal";
        } else if (
            normalizedCity.includes('mangalore') ||
            normalizedCity.includes('mangaluru')
        ) {
            return "Mangalore";
        } else if (
            normalizedCity.includes('nellore')
        ) {
            return "Nellore";
        } else if (
            normalizedCity.includes('jabalpur')
        ) {
            return "Jabalpur";
        } else if (
            normalizedCity.includes('ajmer')
        ) {
            return "Ajmer";
        } else if (
            normalizedCity.includes('kolhapur')
        ) {
            return "Kolhapur";
        } else if (
            normalizedCity.includes('akola')
        ) {
            return "Akola";
        } else if (
            normalizedCity.includes('guntur')
        ) {
            return "Guntur";
        } else if (
            normalizedCity.includes('bikaner')
        ) {
            return "Bikaner";
        } else if (
            normalizedCity.includes('agartala')
        ) {
            return "Agartala";
        } else if (
            normalizedCity.includes('bhavnagar')
        ) {
            return "Bhavnagar";
        } else if (
            normalizedCity.includes('cuttack')
        ) {
            return "Cuttack";
        } else if (
            normalizedCity.includes('amravati')
        ) {
            return "Amravati";
        } else if (
            normalizedCity.includes('bhiwandi')
        ) {
            return "Bhiwandi";
        } else if (
            normalizedCity.includes('saharanpur')
        ) {
            return "Saharanpur";
        } else if (
            normalizedCity.includes('gorakhpur')
        ) {
            return "Gorakhpur";
        } else if (
            normalizedCity.includes('bhiwadi')
        ) {
            return "Bhiwadi";
        } else if (
            normalizedCity.includes('panipat')
        ) {
            return "Panipat";
        } else if (
            normalizedCity.includes('bilaspur')
        ) {
            return "Bilaspur";
        } else if (
            normalizedCity.includes('muzaffarnagar')
        ) {
            return "Muzaffarnagar";
        } else if (
            normalizedCity.includes('mathura')
        ) {
            return "Mathura";
        } else if (
            normalizedCity.includes('kota')
        ) {
            return "Kota";
        } else if (
            normalizedCity.includes('aligarh')
        ) {
            return "Aligarh";
        } else if (
            normalizedCity.includes('ambala')
        ) {
            return "Ambala";
        } else if (
            normalizedCity.includes('rohtak')
        ) {
            return "Rohtak";
        } else if (
            normalizedCity.includes('rewa')
        ) {
            return "Rewa";
        } else if (
            normalizedCity.includes('patiala')
        ) {
            return "Patiala";
        } else if (
            normalizedCity.includes('alwar')
        ) {
            return "Alwar";
        } else if (
            normalizedCity.includes('muzaffarpur')
        ) {
            return "Muzaffarpur";
        } else if (
            normalizedCity.includes('bokaro')
        ) {
            return "Bokaro";
        } else if (
            normalizedCity.includes('bhilai')
        ) {
            return "Bhilai";
        } else if (
            normalizedCity.includes('tirupati')
        ) {
            return "Tirupati";
        } else if (
            normalizedCity.includes('vellore')
        ) {
            return "Vellore";
        } else if (
            normalizedCity.includes('tirunelveli')
        ) {
            return "Tirunelveli";
        } else if (
            normalizedCity.includes('durgapur')
        ) {
            return "Durgapur";
        } else if (
            normalizedCity.includes('kozhikode') ||
            normalizedCity.includes('calicut')
        ) {
            return "Kozhikode";
        } else if (
            normalizedCity.includes('thrissur')
        ) {
            return "Thrissur";
        } else if (
            normalizedCity.includes('alappuzha') ||
            normalizedCity.includes('alleppey')
        ) {
            return "Alappuzha";
        } else if (
            normalizedCity.includes('ernakulam')
        ) {
            return "Ernakulam";
        } else if (
            normalizedCity.includes('kollam') ||
            normalizedCity.includes('quilon')
        ) {
            return "Kollam";
        } else if (
            normalizedCity.includes('vasaivirar') ||
            normalizedCity.includes('vasai') ||
            normalizedCity.includes('virar')
        ) {
            return "Vasai-Virar";
        } else if (
            normalizedCity.includes('thane')
        ) {
            return "Thane";
        } else if (
            normalizedCity.includes('navimumbai') ||
            normalizedCity.includes('newmumbai')
        ) {
            return "Navi Mumbai";
        } else if (
            normalizedCity.includes('rishikesh')
        ) {
            return "Rishikesh";
        } else if (
            normalizedCity.includes('haridwar')
        ) {
            return "Haridwar";
        } else if (
            normalizedCity.includes('ooty') ||
            normalizedCity.includes('udhagamandalam')
        ) {
            return "Ooty";
        } else if (
            normalizedCity.includes('kodaikanal')
        ) {
            return "Kodaikanal";
        } else if (
            normalizedCity.includes('munnar')
        ) {
            return "Munnar";
        } else if (
            normalizedCity.includes('vapi')
        ) {
            return "Vapi";
        } else if (
            normalizedCity.includes('gandhinagar')
        ) {
            return "Gandhinagar";
        } else if (
            normalizedCity.includes('dispur')
        ) {
            return "Dispur";
        } else if (
            normalizedCity.includes('itanagar')
        ) {
            return "Itanagar";
        } else if (
            normalizedCity.includes('kohima')
        ) {
            return "Kohima";
        } else if (
            normalizedCity.includes('imphal')
        ) {
            return "Imphal";
        } else if (
            normalizedCity.includes('aizawl')
        ) {
            return "Aizawl";
        }
        // Add more mappings as needed
        return null;
    }
export  {
  adventureDatabaseData,
  moods,
  moodCategories,
  keywordMappings,
  moodCategoryMappings,
  getStandardizedCityName
};

export default adventureDatabaseData;

