const adventureDatabaseData = {
  energetic: [{
    title: "Urban Parkour Trail",
    description: "Navigate the city like never before with guided parkour spots and safe practice areas",
    duration: "1-2 hours",
    intensity: 5,
    location: "Downtown District",
    type: "Active Adventure",
    vibe: "Adrenaline rush through urban exploration",
    tags: { setting: "outdoor", cost: "free", group: "either" }
  },
  {
    title: "Sunrise Hill Sprint",
    description: "Beat the crowd with an early morning hike to catch golden hour views",
    duration: "2-3 hours",
    intensity: 4,
    location: "Nature Reserve",
    type: "Outdoor Challenge",
    vibe: "Fresh air and natural endorphins",
    tags: { setting: "outdoor", cost: "free", group: "either" }
  },
  {
    title: "Street Art Bike Tour",
    description: "High-energy cycling tour through the city's most vibrant murals and art districts",
    duration: "3-4 hours",
    intensity: 4,
    location: "Arts Quarter",
    type: "Cultural Sport",
    vibe: "Art meets adventure on two wheels",
    tags: { setting: "outdoor", cost: "free", group: "either" }
  },
  {
    title: "Rock Climbing Gym Challenge",
    description: "Indoor bouldering with routes for every skill level, plus friendly climbing community",
    duration: "2-3 hours",
    intensity: 5,
    location: "Sports Complex",
    type: "Strength Challenge",
    vibe: "Conquer fears and build confidence vertically",
    tags: { setting: "indoor", cost: "paid", group: "either" }
  },
  {
    title: "Night Running Club",
    description: "Join energetic runners exploring lit city paths with safety in numbers",
    duration: "1-2 hours",
    intensity: 4,
    location: "City Center",
    type: "Cardio Adventure",
    vibe: "City lights become your running soundtrack",
    tags: { setting: "outdoor", cost: "free", group: "group" }
  },
  {
    title: "Axe Throwing Arena",
    description: "Release stress and channel warrior energy in a safe, supervised environment",
    duration: "1-2 hours",
    intensity: 3,
    location: "Entertainment District",
    type: "Skill Sport",
    vibe: "Medieval meets modern stress relief",
    tags: { setting: "indoor", cost: "paid", group: "either" }
  },
  {
    title: "Dance Battle Workshop",
    description: "Learn street dance moves and join impromptu battles with local dancers",
    duration: "2-3 hours",
    intensity: 4,
    location: "Community Center",
    type: "Creative Movement",
    vibe: "Express your energy through rhythm and flow",
    tags: { setting: "indoor", cost: "paid", group: "group" }
  },
  {
    title: "Obstacle Course Racing",
    description: "Mud runs, rope climbs, and team challenges in outdoor adventure parks",
    duration: "3-5 hours",
    intensity: 5,
    location: "Adventure Park",
    type: "Extreme Challenge",
    vibe: "Transform into your strongest, muddiest self",
    tags: { setting: "outdoor", cost: "paid", group: "group" }
  },
  {
    title: "Skateboard Park Sessions",
    description: "Learn tricks or perfect your style at local skate spots with mentorship",
    duration: "2-4 hours",
    intensity: 4,
    location: "Skate Parks",
    type: "Board Sport",
    vibe: "Roll with the flow of street culture",
    tags: { setting: "outdoor", cost: "free", group: "either" }
  },
  {
    title: "High-Intensity Hiking Circuits",
    description: "Power hiking with bodyweight exercises at scenic overlooks",
    duration: "2-3 hours",
    intensity: 5,
    location: "Hill Trails",
    type: "Fitness Adventure",
    vibe: "Nature's gym with breathtaking rewards",
    tags: { setting: "outdoor", cost: "free", group: "either" }
  }],

  peaceful: [
    {
      title: "Secret Garden Meditation",
      description: "Hidden botanical spaces perfect for mindful moments and quiet reflection",
      duration: "1-2 hours",
      intensity: 1,
      location: "Botanical Gardens",
      type: "Mindful Escape",
      vibe: "Nature's embrace for inner peace",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Lakeside Reading Nook",
      description: "Discover waterfront spots with perfect reading light and gentle sounds",
      duration: "2-4 hours",
      intensity: 1,
      location: "City Lake",
      type: "Contemplative Space",
      vibe: "Literary sanctuary by the water",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Temple Bell Walking Path",
      description: "Gentle walking meditation route past historic temples and peaceful courtyards",
      duration: "1-3 hours",
      intensity: 2,
      location: "Heritage District",
      type: "Spiritual Journey",
      vibe: "Ancient wisdom meets modern calm",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Forest Bathing Experience",
      description: "Japanese shinrin-yoku practice in local woodlands for stress relief",
      duration: "2-3 hours",
      intensity: 1,
      location: "Forest Reserve",
      type: "Nature Therapy",
      vibe: "Trees become your therapists",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Sunrise Yoga on Rooftops",
      description: "Gentle flow sessions with city skyline views as the world awakens",
      duration: "1-2 hours",
      intensity: 2,
      location: "Rooftop Studios",
      type: "Mindful Movement",
      vibe: "Greet the day with gratitude and grace",
      tags: { setting: "mixed", cost: "paid", group: "group" }
    },
    {
      title: "Pottery Wheel Therapy",
      description: "Meditative clay work where imperfection becomes beautiful",
      duration: "2-3 hours",
      intensity: 1,
      location: "Art Studios",
      type: "Craft Meditation",
      vibe: "Shape clay, reshape your mind",
      tags: { setting: "indoor", cost: "paid", group: "either" }
    },
    {
      title: "Tea Ceremony Workshop",
      description: "Learn the art of mindful tea preparation and appreciation",
      duration: "1-2 hours",
      intensity: 1,
      location: "Cultural Center",
      type: "Ritual Practice",
      vibe: "Find peace in every sip and breath",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
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
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Bird Watching Sanctuary",
      description: "Quiet observation of local wildlife in protected natural habitats",
      duration: "2-4 hours",
      intensity: 1,
      location: "Wildlife Reserve",
      type: "Nature Observation",
      vibe: "Patience rewards with natural wonder",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Gentle Watercolor Sessions",
      description: "Paint landscapes en plein air with soft, flowing techniques",
      duration: "2-3 hours",
      intensity: 1,
      location: "Scenic Overlooks",
      type: "Art Therapy",
      vibe: "Colors flow like emotions onto canvas",
      tags: { setting: "outdoor", cost: "free", group: "either" }
    }
  ],

  curious: [
    {
      title: "Underground Tunnel Network",
      description: "Explore the city's hidden passageways and forgotten infrastructure with expert guides",
      duration: "2-3 hours",
      intensity: 3,
      location: "Old Town",
      type: "Urban Exploration",
      vibe: "Uncover secrets beneath your feet",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Maker Space Drop-In",
      description: "Learn 3D printing, woodworking, or electronics from local artisans",
      duration: "2-4 hours",
      intensity: 2,
      location: "Innovation Hub",
      type: "Skill Discovery",
      vibe: "Create something you've never made before",
      tags: { setting: "indoor", cost: "paid", group: "either" }
    },
    {
      title: "Night Market Food Quest",
      description: "Culinary adventure through authentic street food and local specialties",
      duration: "2-3 hours",
      intensity: 2,
      location: "Market District",
      type: "Cultural Immersion",
      vibe: "Taste your way through local culture",
      tags: { setting: "outdoor", cost: "paid", group: "either" }
    },
    {
      title: "Abandoned Building Photography",
      description: "Safely explore urban decay with professional photographers and historians",
      duration: "3-4 hours",
      intensity: 3,
      location: "Industrial District",
      type: "Urban Archaeology",
      vibe: "Beauty emerges from forgotten places",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Mystery Escape Room Crawl",
      description: "Chain multiple themed escape rooms with increasing difficulty levels",
      duration: "3-5 hours",
      intensity: 3,
      location: "Entertainment Complex",
      type: "Puzzle Adventure",
      vibe: "Your mind becomes the ultimate tool",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Rooftop Urban Beekeeping",
      description: "Learn about city apiaries and the secret life of urban honey production",
      duration: "1-2 hours",
      intensity: 2,
      location: "Rooftop Gardens",
      type: "Agricultural Discovery",
      vibe: "Sweet secrets buzzing above the city",
      tags: { setting: "outdoor", cost: "paid", group: "either" }
    },
    {
      title: "Geocaching Treasure Hunt",
      description: "GPS-guided modern treasure hunting through hidden city caches",
      duration: "2-4 hours",
      intensity: 3,
      location: "Citywide",
      type: "Digital Adventure",
      vibe: "Technology meets old-fashioned treasure hunting",
      tags: { setting: "outdoor", cost: "free", group: "either" }
    },
    {
      title: "Scientific Lab Open House",
      description: "Behind-the-scenes access to research facilities and ongoing experiments",
      duration: "2-3 hours",
      intensity: 2,
      location: "University District",
      type: "Science Exploration",
      vibe: "Peek into the future being created today",
      tags: { setting: "indoor", cost: "free", group: "group" }
    },
    {
      title: "Mushroom Foraging Expedition",
      description: "Learn to identify edible fungi with mycology experts in local forests",
      duration: "3-4 hours",
      intensity: 3,
      location: "Forest Areas",
      type: "Nature Discovery",
      vibe: "Uncover hidden treasures of the forest floor",
      tags: { setting: "outdoor", cost: "paid", group: "group" }
    },
    {
      title: "Architecture Walking Decoding",
      description: "Unravel building styles, hidden symbols, and urban planning secrets",
      duration: "2-3 hours",
      intensity: 2,
      location: "Historic Districts",
      type: "Visual Investigation",
      vibe: "Every building whispers its history",
      tags: { setting: "outdoor", cost: "free", group: "either" }
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
      tags: { setting: "outdoor", cost: "free", group: "group" }
    },
    {
      title: "Board Game Café Circuit",
      description: "Hop between cozy spots where strangers become friends over strategic fun",
      duration: "3-5 hours",
      intensity: 1,
      location: "Café District",
      type: "Social Gaming",
      vibe: "Laughter and friendly competition",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Local Language Exchange",
      description: "Practice languages with native speakers in casual, welcoming environments",
      duration: "1-2 hours",
      intensity: 2,
      location: "Cultural Center",
      type: "Language Learning",
      vibe: "Bridge cultures through conversation",
      tags: { setting: "indoor", cost: "free", group: "group" }
    },
    {
      title: "Cooking Class Collaborations",
      description: "Team up with strangers to create meals from different cultural traditions",
      duration: "2-3 hours",
      intensity: 2,
      location: "Culinary Schools",
      type: "Collaborative Learning",
      vibe: "Friendship seasoned with shared flavors",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Improv Comedy Drop-In",
      description: "Join supportive groups where mistakes become hilarious moments",
      duration: "2-3 hours",
      intensity: 3,
      location: "Comedy Studios",
      type: "Performance Play",
      vibe: "Laughter breaks down all social barriers",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Community Choir Rehearsals",
      description: "Sing with locals in welcoming choirs that accept all skill levels",
      duration: "1-2 hours",
      intensity: 2,
      location: "Community Centers",
      type: "Musical Community",
      vibe: "Voices unite in beautiful harmony",
      tags: { setting: "indoor", cost: "free", group: "group" }
    },
    {
      title: "Group Hiking Adventures",
      description: "Join organized hikes with built-in social activities and shared meals",
      duration: "4-6 hours",
      intensity: 3,
      location: "Nature Trails",
      type: "Active Socializing",
      vibe: "Nature bonds strangers into friends",
      tags: { setting: "outdoor", cost: "paid", group: "group" }
    },
    {
      title: "Volunteer Meal Service",
      description: "Serve meals to community members while connecting with like-minded helpers",
      duration: "2-4 hours",
      intensity: 2,
      location: "Community Kitchens",
      type: "Service Connection",
      vibe: "Hearts warm while feeding others",
      tags: { setting: "indoor", cost: "free", group: "group" }
    },
    {
      title: "Dance Social Evenings",
      description: "Learn partner dances in welcoming environments with rotation systems",
      duration: "2-3 hours",
      intensity: 3,
      location: "Dance Studios",
      type: "Movement Connection",
      vibe: "Bodies communicate what words cannot",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Book Club Café Meetings",
      description: "Join passionate readers discussing literature in cozy, intellectual spaces",
      duration: "1-2 hours",
      intensity: 1,
      location: "Literary Cafés",
      type: "Intellectual Exchange",
      vibe: "Stories spark real human connections",
      tags: { setting: "indoor", cost: "free", group: "group" }
    }
  ],

  reflective: [
    {
      title: "Rooftop Philosophy Walk",
      description: "Elevated spaces perfect for contemplation with panoramic city views",
      duration: "1-3 hours",
      intensity: 2,
      location: "City Heights",
      type: "Contemplative Journey",
      vibe: "Rise above for perspective and clarity",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Historic Cemetery Stroll",
      description: "Peaceful walks through stories of the past in beautiful, quiet settings",
      duration: "1-2 hours",
      intensity: 1,
      location: "Historic District",
      type: "Reflective Exploration",
      vibe: "Connect with history and mortality",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Solo Artist Studio Tour",
      description: "Self-guided exploration of open studios where creators work in solitude",
      duration: "2-4 hours",
      intensity: 2,
      location: "Artist Quarter",
      type: "Artistic Reflection",
      vibe: "Witness the creative process in action",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Ancient Tree Meditation",
      description: "Sit with centuries-old trees and contemplate the passage of time",
      duration: "1-3 hours",
      intensity: 1,
      location: "Old Growth Forests",
      type: "Temporal Reflection",
      vibe: "Wisdom grows with patient stillness",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Personal Writing Retreats",
      description: "Guided journaling sessions in inspiring locations with writing prompts",
      duration: "2-4 hours",
      intensity: 1,
      location: "Quiet Cafés",
      type: "Self-Discovery",
      vibe: "Words become windows to your soul",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo"
      }
    },
    {
      title: "Observatory Night Sessions",
      description: "Contemplate cosmic scales while stargazing through powerful telescopes",
      duration: "2-4 hours",
      intensity: 2,
      location: "Observatories",
      type: "Cosmic Reflection",
      vibe: "Stars put earthly problems in perspective",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "either"
      }
    },
    {
      title: "Labyrinth Walking Meditation",
      description: "Ancient walking patterns designed for contemplative prayer and thought",
      duration: "1-2 hours",
      intensity: 1,
      location: "Spiritual Centers",
      type: "Moving Meditation",
      vibe: "Each step spirals deeper into wisdom",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Solo Kayaking Silence",
      description: "Peaceful paddling in calm waters with only nature sounds as company",
      duration: "2-3 hours",
      intensity: 2,
      location: "Quiet Lakes",
      type: "Water Meditation",
      vibe: "Ripples carry thoughts to deeper places",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "solo"
      }
    },
    {
      title: "Philosophy Café Discussions",
      description: "Deep conversations about life's big questions with thoughtful strangers",
      duration: "2-3 hours",
      intensity: 2,
      location: "Intellectual Cafés",
      type: "Mind Exploration",
      vibe: "Questions matter more than answers",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Quiet Library Archives",
      description: "Explore rare books and historical documents in hushed reading rooms",
      duration: "2-4 hours",
      intensity: 1,
      location: "Research Libraries",
      type: "Knowledge Archaeology",
      vibe: "Centuries of thought await patient discovery",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo"
      }
    }
  ],

  creative: [
    {
      title: "Guerrilla Art Workshop",
      description: "Create temporary installations in public spaces (with permission!)",
      duration: "3-4 hours",
      intensity: 3,
      location: "Public Spaces",
      type: "Artistic Expression",
      vibe: "Leave your mark on the world",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
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
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "either"
      }
    },
    {
      title: "Open Mic Circuit",
      description: "Share your voice at welcoming venues that celebrate artistic expression",
      duration: "2-4 hours",
      intensity: 4,
      location: "Entertainment District",
      type: "Performance Art",
      vibe: "Transform nerves into creative energy",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Collaborative Mural Painting",
      description: "Join community art projects creating large-scale public artworks",
      duration: "3-6 hours",
      intensity: 3,
      location: "Community Walls",
      type: "Public Art",
      vibe: "Individual brushstrokes become collective vision",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
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
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
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
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Wearable Art Construction",
      description: "Design and build avant-garde fashion pieces using unusual materials",
      duration: "3-5 hours",
      intensity: 3,
      location: "Fashion Labs",
      type: "Fashion Design",
      vibe: "Wear your imagination on your sleeve",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Interactive Installation Building",
      description: "Create tech-art pieces that respond to viewer interaction",
      duration: "4-6 hours",
      intensity: 4,
      location: "Maker Spaces",
      type: "Digital Art",
      vibe: "Technology becomes canvas for human connection",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
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
      tags: {
        setting: "indoor",
        cost: "free",
        group: "group"
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
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo"
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
      }
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
        group: "group"
      }
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
        group: "guided"
      }
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
        group: "solo"
      }
    },
    {
      title: "Zip‑Line Forest Canopy",
      description: "Shoot through treetops at high speed on forest zip‑lines",
      duration: "1-2 hours",
      intensity: 4,
      location: "Jungle Canopy",
      type: "Aerial Sport",
      vibe: "Bird’s-eye nature rush with every zip",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "guided"
      }
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
      }
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
      }
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
        group: "solo"
      }
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
        group: "guided"
      }
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
        group: "guided"
      }
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
        group: "guided"
      }
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
        group: "solo"
      }
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
        group: "guided"
      }
    },
    {
      title: "Mountain Biking Trails",
      description: "Tackle beginner-friendly trails with stunning natural scenery",
      duration: "2-3 hours",
      intensity: 4,
      location: "Mountain Paths",
      type: "Cycling Adventure",
      vibe: "Speed through nature’s playground",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
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
        group: "guided"
      }
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
        group: "either"
      }
    }
  ],

  nostalgic: [
    {
      title: "Vinyl Record Dive",
      description: "Spend hours crate‑digging through retro vinyl in quaint record stores",
      duration: "2-4 hours",
      intensity: 1,
      location: "Music District",
      type: "Vintage Hunt",
      vibe: "Let the music of your past echo again",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Classic Movie Drive‑In",
      description: "Catch a retro cult‑classic under the stars at an old‑school drive‑in",
      duration: "2-3 hours",
      intensity: 1,
      location: "Outskirts Cinema",
      type: "Retro Experience",
      vibe: "The magical feel of celluloid nostalgia",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Retro Arcade Marathon",
      description: "Relive old videogame days with pinball, pac‑man & friends at vintage arcades",
      duration: "1-2 hours",
      intensity: 1,
      location: "Arcade Alley",
      type: "Play Blast from Past",
      vibe: "Pixels and high scores whisper your childhood",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Old‑School Diner Brunch",
      description: "Cozy booths, malted milkshakes & jukebox tunes at diners unchanged in decades",
      duration: "1-2 hours",
      intensity: 1,
      location: "Main Street",
      type: "Comfort Food",
      vibe: "Time‑capsule breakfast with nostalgia on a plate",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Photo Memory Walk",
      description: "Stroll through your childhood neighborhood with photos in hand",
      duration: "1-2 hours",
      intensity: 2,
      location: "Home District",
      type: "Memory Journey",
      vibe: "Each building holds a fragment of your own history",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Handwritten Letter Workshop",
      description: "Write letters on vintage paper with fountain pens in nostalgic settings",
      duration: "2 hours",
      intensity: 1,
      location: "Vintage Café",
      type: "Analog Connection",
      vibe: "Slow down and touch hearts the old‑fashioned way",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Retro Arcade Night",
      description: "Play vintage video games in a quiet, neon-lit arcade",
      duration: "1-2 hours",
      intensity: 1,
      location: "Entertainment District",
      type: "Gaming Nostalgia",
      vibe: "Relive childhood joystick joys",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Vinyl Listening Lounge",
      description: "Browse and listen to classic records in a cozy music shop",
      duration: "1-3 hours",
      intensity: 1,
      location: "Music District",
      type: "Audio Journey",
      vibe: "Old tunes spark warm memories",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Vintage Car Show Stroll",
      description: "Walk through displays of classic cars with stories from the past",
      duration: "2-3 hours",
      intensity: 2,
      location: "City Fairgrounds",
      type: "Historical Walk",
      vibe: "Cruise back to simpler times",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Old Movie Screening",
      description: "Watch black-and-white classics in a historic theater",
      duration: "2-3 hours",
      intensity: 1,
      location: "Old Cinema",
      type: "Cinematic Escape",
      vibe: "Silver screen stories feel like home",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo"
      }
    },
    {
      title: "Antique Market Wander",
      description: "Browse vintage trinkets and collectibles in a quiet market",
      duration: "2-4 hours",
      intensity: 2,
      location: "Flea Market",
      type: "Treasure Hunt",
      vibe: "Each item holds a forgotten story",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Retro Diner Experience",
      description: "Savor milkshakes and jukebox tunes in a 50s-style diner",
      duration: "1-2 hours",
      intensity: 1,
      location: "City Outskirts",
      type: "Culinary Nostalgia",
      vibe: "Taste the past with every bite",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Old Town Photo Walk",
      description: "Capture historic streets with a vintage camera or app filter",
      duration: "2-3 hours",
      intensity: 2,
      location: "Historic District",
      type: "Visual Journey",
      vibe: "Freeze time in sepia tones",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Classic Board Game Café",
      description: "Play Monopoly or Scrabble in a cozy, nostalgic setting",
      duration: "2-3 hours",
      intensity: 1,
      location: "Café District",
      type: "Gaming Retreat",
      vibe: "Old games bring back warm evenings",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Vintage Bookstore Hunt",
      description: "Explore dusty shelves for childhood favorites or old novels",
      duration: "2-4 hours",
      intensity: 1,
      location: "Book District",
      type: "Literary Quest",
      vibe: "Pages smell like forgotten summers",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Retro Craft Workshop",
      description: "Learn old-school crafts like cross-stitch in a quiet studio",
      duration: "2-3 hours",
      intensity: 2,
      location: "Craft Center",
      type: "Creative Nostalgia",
      vibe: "Hands recreate childhood simplicity",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "group"
      }
    }
  ],

  playful: [
    {
      title: "Kite Flying Field Day",
      description: "Fly colorful kites in an open park with gentle breezes",
      duration: "1-2 hours",
      intensity: 2,
      location: "City Park",
      type: "Outdoor Play",
      vibe: "Let your spirit soar with the wind",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Scavenger Hunt Dash",
      description: "Follow playful clues to find hidden objects around town",
      duration: "2-3 hours",
      intensity: 3,
      location: "Citywide",
      type: "Adventure Game",
      vibe: "Rediscover childlike wonder in every clue",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Bubble Art Pop-Up",
      description: "Create giant bubbles with colorful solutions in a park",
      duration: "1-2 hours",
      intensity: 2,
      location: "Public Green",
      type: "Creative Play",
      vibe: "Bubbles burst with fleeting joy",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Mini-Golf Urban Course",
      description: "Play whimsical mini-golf with quirky, local-themed obstacles",
      duration: "1-2 hours",
      intensity: 2,
      location: "Entertainment Zone",
      type: "Fun Sport",
      vibe: "Laughter at every putt and turn",
      tags: {
        setting: "outdoor",
        cost: "paid",
        group: "group"
      }
    },
    {
      title: "Street Chalk Art",
      description: "Draw temporary masterpieces on sidewalks with provided chalk",
      duration: "2-3 hours",
      intensity: 2,
      location: "Pedestrian Zone",
      type: "Artistic Play",
      vibe: "Color the world with fleeting art",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Puzzle Park Bench",
      description: "Solve outdoor brain teasers at designated puzzle stations",
      duration: "1-2 hours",
      intensity: 2,
      location: "City Park",
      type: "Mental Play",
      vibe: "Mind twists in playful delight",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Hopscotch City Path",
      description: "Follow giant hopscotch boards painted on quiet streets",
      duration: "1-2 hours",
      intensity: 3,
      location: "Quiet Streets",
      type: "Physical Play",
      vibe: "Hop back to carefree days",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo"
      }
    },
    {
      title: "Toy Boat Regatta",
      description: "Race handmade boats in a calm park stream",
      duration: "1-2 hours",
      intensity: 2,
      location: "Park Stream",
      type: "Creative Race",
      vibe: "Tiny boats, big childhood dreams",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Frisbee Freestyle Session",
      description: "Toss discs in an open field with optional trick tutorials",
      duration: "1-2 hours",
      intensity: 3,
      location: "Open Field",
      type: "Active Play",
      vibe: "Spin joy into every throw",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    },
    {
      title: "Paper Airplane Contest",
      description: "Craft and fly paper planes in a fun, low-key competition",
      duration: "1-2 hours",
      intensity: 2,
      location: "City Park",
      type: "Craft Play",
      vibe: "Simple folds launch big smiles",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "group"
      }
    }
  ],

  focused: [
    {
      title: "Forest Deep Work Cabin",
      description: "Rent a small digital-detox cabin surrounded by trees, built for creative sprints",
      duration: "4-6 hours",
      intensity: 2,
      location: "Forest Edge Retreats",
      type: "Deep Work Escape",
      vibe: "Silence, solitude, and flow state",
      tags: { setting: "outdoor", cost: "paid", group: "solo" }
    },
    {
      title: "Monk Mode Studio Time",
      description: "Studio pods with total silence, no phones, and focus-enhancing lighting",
      duration: "2-3 hours",
      intensity: 2,
      location: "Focus Studios",
      type: "Distraction-Free Zone",
      vibe: "Isolation that unlocks your highest self",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Ambient Music + Tasks Café",
      description: "Sit in ambient music zones with headphones and get things done",
      duration: "1-2 hours",
      intensity: 1,
      location: "Lo-Fi Coffee Spots",
      type: "Audio Flow",
      vibe: "Beats and lists align effortlessly",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Goal-Setting Visualization Room",
      description: "Guided visualization for task planning and mental rehearsal",
      duration: "45 minutes",
      intensity: 1,
      location: "Wellness Centers",
      type: "Mental Focus",
      vibe: "See it clearly, then make it happen",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Solo Ideation Bench",
      description: "Sit alone in scenic spots with a sketchbook to brainstorm ideas",
      duration: "1-2 hours",
      intensity: 1,
      location: "Scenic Overlooks",
      type: "Creative Focus",
      vibe: "Stillness inspires sharp thinking",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Noise-Cancel Booth Rental",
      description: "Rent pods with noise-canceling hardware for ultra-deep work",
      duration: "2-4 hours",
      intensity: 2,
      location: "Productivity Lounges",
      type: "Hyper Focus Pod",
      vibe: "Let the silence do the heavy lifting",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Mindful Coding Retreat",
      description: "Pair deep work with gentle breaks and mindfulness check-ins",
      duration: "3-5 hours",
      intensity: 2,
      location: "Retreat Hubs",
      type: "Conscious Development",
      vibe: "Code consciously, not compulsively",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Solo Study Nook Hunt",
      description: "Find quiet library corners perfect for deep work or study",
      duration: "2-4 hours",
      intensity: 1,
      location: "Libraries",
      type: "Productivity Space",
      vibe: "Clarity thrives in silent focus",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Minimalist Workspace Pop-Up",
      description: "Work in distraction-free zones with ergonomic setups",
      duration: "2-3 hours",
      intensity: 1,
      location: "Co-Working Spaces",
      type: "Work Retreat",
      vibe: "Streamline your mind, achieve your goals",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Pomodoro Park Session",
      description: "Use timed focus sessions in a quiet park with a timer app",
      duration: "1-2 hours",
      intensity: 2,
      location: "City Park",
      type: "Focused Work",
      vibe: "Nature boosts your concentration",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Mind Mapping Workshop",
      description: "Learn to organize thoughts visually in a solo-friendly class",
      duration: "1-2 hours",
      intensity: 2,
      location: "Community Center",
      type: "Mental Organization",
      vibe: "Ideas align with every branch",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Silent Coding Café",
      description: "Code in a quiet café with fast Wi-Fi and minimal distractions",
      duration: "2-4 hours",
      intensity: 1,
      location: "Tech District",
      type: "Tech Focus",
      vibe: "Lines of code flow uninterrupted",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Zen Desk Declutter",
      description: "Organize a borrowed workspace with guided minimalist techniques",
      duration: "1-2 hours",
      intensity: 2,
      location: "Co-Working Hub",
      type: "Productivity Practice",
      vibe: "Clear space, clear mind",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Deep Reading Retreat",
      description: "Dive into complex texts in a distraction-free library room",
      duration: "2-4 hours",
      intensity: 1,
      location: "Research Library",
      type: "Intellectual Focus",
      vibe: "Words unlock deeper understanding",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Solo Strategy Game Night",
      description: "Play chess or go at a quiet café with solo practice boards",
      duration: "1-2 hours",
      intensity: 2,
      location: "Café District",
      type: "Mental Challenge",
      vibe: "Every move sharpens your focus",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Task Timer Walk",
      description: "Plan tasks while walking a quiet trail with a timer app",
      duration: "1-2 hours",
      intensity: 2,
      location: "Nature Path",
      type: "Mobile Productivity",
      vibe: "Steps align with clear priorities",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Journaling Focus Session",
      description: "Write goals or plans in a guided, quiet café setting",
      duration: "1-2 hours",
      intensity: 1,
      location: "Quiet Cafés",
      type: "Self-Planning",
      vibe: "Pen shapes your path forward",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    }
  ],

  cozy: [
    {
      title: "Knitting Nook Session",
      description: "Knit in a warm, quiet café with soft music and yarn",
      duration: "2-3 hours",
      intensity: 1,
      location: "Café District",
      type: "Craft Retreat",
      vibe: "Warmth in every stitch and sip",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Candlelit Book Corner",
      description: "Read by candlelight in a cozy bookstore’s quiet nook",
      duration: "2-4 hours",
      intensity: 1,
      location: "Bookstore",
      type: "Literary Escape",
      vibe: "Stories glow in soft light",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Hot Cocoa Walk",
      description: "Sip cocoa while strolling through a quiet, festive street",
      duration: "1-2 hours",
      intensity: 2,
      location: "Winter District",
      type: "Seasonal Stroll",
      vibe: "Warmth in hands and heart",
      tags: { setting: "outdoor", cost: "paid", group: "solo" }
    },
    {
      title: "Blanket Fort Pop-Up",
      description: "Relax in a cozy, temporary fort with pillows and books",
      duration: "1-3 hours",
      intensity: 1,
      location: "Community Space",
      type: "Comfort Zone",
      vibe: "Childhood comfort in adult form",
      tags: { setting: "indoor", cost: "free", group: "group" }
    },
    {
      title: "Fireplace Café Writing",
      description: "Write or journal by a crackling fire in a cozy café",
      duration: "2-3 hours",
      intensity: 1,
      location: "Café District",
      type: "Creative Coziness",
      vibe: "Firelight warms your thoughts",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Soft Music Listening Lounge",
      description: "Listen to acoustic playlists in a plush, quiet lounge",
      duration: "1-2 hours",
      intensity: 1,
      location: "Music Café",
      type: "Audio Retreat",
      vibe: "Melodies wrap you in comfort",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Warm Bakery Visit",
      description: "Savor fresh pastries in a warm, aromatic bakery",
      duration: "1-2 hours",
      intensity: 1,
      location: "Bakery District",
      type: "Culinary Comfort",
      vibe: "Fresh bread soothes the soul",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Cozy Puzzle Table",
      description: "Work on jigsaw puzzles in a quiet, warm library corner",
      duration: "2-3 hours",
      intensity: 1,
      location: "Library",
      type: "Puzzle Play",
      vibe: "Pieces fit, world feels right",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Scented Candle Workshop",
      description: "Craft your own candles in a warm, intimate studio",
      duration: "2-3 hours",
      intensity: 2,
      location: "Craft Studio",
      type: "Creative Comfort",
      vibe: "Scents create a cozy haven",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Winter Garden Stroll",
      description: "Walk through a heated greenhouse with twinkling lights",
      duration: "1-2 hours",
      intensity: 2,
      location: "Botanical Garden",
      type: "Nature Comfort",
      vibe: "Warmth blooms even in winter",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    }
  ],

  inspired: [
    {
      title: "Idea Sketching Park",
      description: "Sketch or brainstorm ideas on park benches with provided notebooks",
      duration: "1-2 hours",
      intensity: 1,
      location: "City Park",
      type: "Creative Spark",
      vibe: "Nature fuels your next big idea",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Street Art Inspiration Walk",
      description: "Wander through murals to spark your own creative projects",
      duration: "2-3 hours",
      intensity: 2,
      location: "Arts District",
      type: "Visual Inspiration",
      vibe: "Colors ignite your imagination",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Sunset Poetry Session",
      description: "Write poems inspired by a quiet sunset viewing spot",
      duration: "1-2 hours",
      intensity: 1,
      location: "Scenic Overlook",
      type: "Literary Spark",
      vibe: "Twilight whispers new verses",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Maker Space Brainstorm",
      description: "Tinker with tools in a quiet workshop to spark ideas",
      duration: "2-3 hours",
      intensity: 2,
      location: "Innovation Hub",
      type: "Creative Exploration",
      vibe: "Tools unlock your inner inventor",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Historic Site Sketching",
      description: "Draw or write inspired by ancient ruins or landmarks",
      duration: "2-3 hours",
      intensity: 2,
      location: "Historic District",
      type: "Cultural Inspiration",
      vibe: "History shapes your creative vision",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Music Improv Solo Session",
      description: "Play simple instruments in a quiet studio to spark melodies",
      duration: "1-2 hours",
      intensity: 2,
      location: "Music Studio",
      type: "Musical Spark",
      vibe: "Notes flow from inspired moments",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Nature Photography Quest",
      description: "Capture unique angles of local flora and fauna",
      duration: "2-3 hours",
      intensity: 2,
      location: "Nature Reserve",
      type: "Visual Quest",
      vibe: "Lens reveals hidden inspirations",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Idea Café Meetup",
      description: "Join a quiet group to share and refine creative ideas",
      duration: "1-2 hours",
      intensity: 2,
      location: "Café District",
      type: "Collaborative Spark",
      vibe: "Ideas grow in gentle conversation",
      tags: { setting: "indoor", cost: "free", group: "group" }
    },
    {
      title: "Skyline Vision Board",
      description: "Create a vision board inspired by city skyline views",
      duration: "2-3 hours",
      intensity: 2,
      location: "Rooftop Venue",
      type: "Creative Planning",
      vibe: "Horizon expands your dreams",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Solo Dance Studio",
      description: "Move freely in a private studio to spark creative expression",
      duration: "1-2 hours",
      intensity: 3,
      location: "Dance Studio",
      type: "Movement Inspiration",
      vibe: "Body moves, ideas follow",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    }
  ],

  spiritual: [
    {
      title: "Sunlit Temple Chanting",
      description: "Join morning prayer chants in a serene temple environment",
      duration: "1-2 hours",
      intensity: 1,
      location: "Hilltop Temple",
      type: "Sacred Ceremony",
      vibe: "Sound and silence meet in sacred harmony",
      tags: { setting: "outdoor", cost: "free", group: "group" }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      title: "Crystal Healing Circle",
      description: "Group sound‑bath meditation enhanced with healing crystals",
      duration: "1-2 hours",
      intensity: 1,
      location: "Wellness Hub",
      type: "Energy Alignment",
      vibe: "Let vibrations and stones recalibrate your soul",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Pilgrimage Path Walk",
      description: "Follow an ancient pilgrimage trail with guided reflection stops",
      duration: "3-5 hours",
      intensity: 2,
      location: "Countryside Route",
      type: "Spiritual Journey",
      vibe: "Footsteps become prayers in the quiet countryside",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Mandala Sand Art Workshop",
      description: "Create intricate sand mandalas as practice in impermanence",
      duration: "2 hours",
      intensity: 1,
      location: "Cultural Center",
      type: "Meditative Art",
      vibe: "Build, then let go— a spiritual metaphor in grains",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Moonlit Labyrinth Walk",
      description: "Walk a labyrinth guided by candlelight at night",
      duration: "1-2 hours",
      intensity: 1,
      location: "Spiritual Grounds",
      type: "Moving Meditation",
      vibe: "Each step inward finds moonlit clarity",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Shamanic Drum Circle",
      description: "Enter into trance rhythms in group drumming sessions",
      duration: "2-3 hours",
      intensity: 2,
      location: "Forest Clearing",
      type: "Ritual Ecstasy",
      vibe: "Drums connect earth, sky, body and spirit",
      tags: { setting: "outdoor", cost: "free", group: "group" }
    }
  ],

  luxurious: [
    {
      title: "Chauffeured Vineyard Tour",
      description: "Savor premium wines in private vineyard estate with gourmet pairings",
      duration: "3-4 hours",
      intensity: 1,
      location: "Countryside Vineyards",
      type: "Luxury Taste",
      vibe: "Elegance poured in every sip",
      tags: { setting: "outdoor", cost: "paid", group: "group" }
    },
    {
      title: "Private Jet Escape",
      description: "Short scenic flight to a nearby luxury resort for spa indulgence",
      duration: "4-6 hours",
      intensity: 1,
      location: "Resort Getaway",
      type: "Elite Travel",
      vibe: "First‑class from takeoff to unwind",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Helicopter City Tour",
      description: "Aerial sightseeing of city landmarks with champagne toast",
      duration: "1 hour",
      intensity: 1,
      location: "City Skyline",
      type: "Sky Luxury",
      vibe: "Views matched only by bubbly luxury",
      tags: { setting: "outdoor", cost: "paid", group: "group" }
    },
    {
      title: "Fine‑Dining Chef’s Table",
      description: "Multi‑course tasting menu prepared in front of you by renowned chefs",
      duration: "2-3 hours",
      intensity: 1,
      location: "Gourmet Restaurant",
      type: "Culinary Excellence",
      vibe: "Every bite tells a crafted story",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Yacht Sunset Cruise",
      description: "Private yacht ride with hors d'oeuvres and skyline sunset view",
      duration: "2-3 hours",
      intensity: 1,
      location: "Harbor",
      type: "Pampered Sail",
      vibe: "Wave-lapped luxury with golden horizons",
      tags: { setting: "outdoor", cost: "paid", group: "group" }
    },
    {
      title: "Spa & Champagne Afternoon",
      description: "Hot-stone massage followed by private lounge time with champagne",
      duration: "2-3 hours",
      intensity: 1,
      location: "Resort Spa",
      type: "Ultimate Relaxation",
      vibe: "Serenity and bubbles for the soul",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    }
  ],

  stressed: [
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      title: "Sound Bowl Healing",
      description: "Let go of tension with soothing vibrations of crystal sound bowls",
      duration: "1 hour",
      intensity: 1,
      location: "Healing Studio",
      type: "Sound Therapy",
      vibe: "Let sound melt your stress",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Slow Nature Trail",
      description: "Take the slow path through a calm forest trail designed for decompression",
      duration: "1-2 hours",
      intensity: 1,
      location: "Nature Reserve",
      type: "Slow Walk",
      vibe: "Step by step, peace returns",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Guided Journaling Café",
      description: "Sit with prompts and tea while gently writing your way through feelings",
      duration: "1-2 hours",
      intensity: 1,
      location: "Quiet Café",
      type: "Emotional Unwind",
      vibe: "Write it out, feel lighter",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Floating Spa Session",
      description: "Weightless saltwater floatation therapy for mental reset",
      duration: "1 hour",
      intensity: 1,
      location: "Float Tank Center",
      type: "Sensory Relief",
      vibe: "Zero gravity, zero stress",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Guided Breathwork Circle",
      description: "Breathe away stress with simple techniques led by a calming guide",
      duration: "1 hour",
      intensity: 1,
      location: "Wellness Studio",
      type: "Breathing Ritual",
      vibe: "Inhale calm, exhale chaos",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Aromatherapy Lounge",
      description: "Scented essential oils and peaceful seating to decompress fully",
      duration: "30-60 mins",
      intensity: 1,
      location: "Relaxation Hub",
      type: "Scent Therapy",
      vibe: "Breathe peace in, breathe stress out",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    }
  ],

  lazy: [
    {
      title: "Blanket Fort Cinema",
      description: "Curl up in cozy surroundings with hand-picked comfort movies",
      duration: "2-3 hours",
      intensity: 1,
      location: "Home Theater Lounge",
      type: "Rest Watch",
      vibe: "Low energy, high comfort",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Indoor Hammock Nap Zone",
      description: "Spend time doing absolutely nothing in comfy indoor hammocks",
      duration: "1-2 hours",
      intensity: 1,
      location: "Chill Studio",
      type: "Intentional Rest",
      vibe: "Doing nothing is the goal",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Lazy Brunch Crawl",
      description: "Slowly sample fluffy pancakes, cozy drinks, and warm pastries at local cafés",
      duration: "2-4 hours",
      intensity: 1,
      location: "Café District",
      type: "Food Leisure",
      vibe: "Every step rewarded with flavor",
      tags: { setting: "indoor", cost: "paid", group: "group" }
    },
    {
      title: "Slow Scrolling Bookstore Visit",
      description: "Wander a quiet bookstore and browse with no expectations",
      duration: "1-2 hours",
      intensity: 1,
      location: "Independent Bookstore",
      type: "Mental Leisure",
      vibe: "Time stands still between pages",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Foot Massage Lounge",
      description: "No full spa commitment—just a quick pampering for your tired steps",
      duration: "30-45 mins",
      intensity: 1,
      location: "Massage Spot",
      type: "Mini Pamper",
      vibe: "Let someone else take care of you",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Lazy Puzzle Hour",
      description: "Low-effort brain chill with slow puzzles and bean bags",
      duration: "1-2 hours",
      intensity: 1,
      location: "Puzzle Café",
      type: "Mental Drift",
      vibe: "No rush, just gentle discovery",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    }
  ],

  tired: [
    {
      title: "Sunset Rooftop Chill",
      description: "Just sit, sip something warm, and watch the sun go down quietly",
      duration: "1 hour",
      intensity: 1,
      location: "Rooftop Lounge",
      type: "Evening Recharge",
      vibe: "Energy returns when nothing is required",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Infrared Sauna Session",
      description: "Let gentle warmth penetrate and restore sore muscles and tension",
      duration: "30 mins",
      intensity: 1,
      location: "Wellness Center",
      type: "Body Recovery",
      vibe: "Let heat carry your fatigue away",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Mini Nap Pod Rental",
      description: "Quick power nap in comfortable private nap pods",
      duration: "20-40 mins",
      intensity: 1,
      location: "Recharge Lounge",
      type: "Sleep Boost",
      vibe: "A micro-break that feels major",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Warm Drink & Comfy Chair Café",
      description: "Low stimulation environment, quiet music, and cozy seating",
      duration: "1-2 hours",
      intensity: 1,
      location: "Chill Café",
      type: "Soft Escape",
      vibe: "Recharge your human battery",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      title: "Guided Body Scan Meditation",
      description: "Lay down and listen to a slow, restorative meditation",
      duration: "30-45 mins",
      intensity: 1,
      location: "Meditation Studio",
      type: "Body-Mind Reset",
      vibe: "Every muscle says thank you",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Stretch + Sleep Class",
      description: "End your day with ultra-gentle stretching and sleep prep",
      duration: "45-60 mins",
      intensity: 1,
      location: "Yoga Lounge",
      type: "Recovery Flow",
      vibe: "Ease into rest with graceful unwinding",
      tags: { setting: "indoor", cost: "free", group: "solo" }
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
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "evening"
      }
    },
    {
      title: "Couple’s Pottery Class",
      description: "Shape clay together and get delightfully messy while creating something meaningful",
      duration: "2 hours",
      intensity: 2,
      location: "Art Studio",
      type: "Creative Bonding",
      vibe: "Spin love into every sculpted swirl",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "paid",
        time: "creative"
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
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "low-cost",
        time: "reflective"
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
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "morning"
      }
    },
    {
      title: "DIY Candle-Making Date",
      description: "Make scented candles together and take home the warmth",
      duration: "1.5-2 hours",
      intensity: 1,
      location: "Craft Workshop",
      type: "Sensory Connection",
      vibe: "Love in every flickering flame",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "paid",
        time: "creative"
      }
    },
    {
      title: "Memory Jar Workshop",
      description: "Write little memories or wishes to place into a shared keepsake jar",
      duration: "1-2 hours",
      intensity: 1,
      location: "Community Studio",
      type: "Sentimental Creation",
      vibe: "Tiny notes, big feelings",
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "free",
        time: "reflective"
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
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "paid",
        time: "active"
      }
    },
    {
      title: "Slow Dance Under Fairy Lights",
      description: "A quiet evening with music, soft lighting, and your favorite slow songs",
      duration: "1-2 hours",
      intensity: 1,
      location: "Garden Patio",
      type: "Intimate Moment",
      vibe: "Every sway says 'I’m here with you'",
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "free",
        time: "evening"
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
      tags: {
        setting: "indoor",
        group: "couple",
        cost: "low-cost",
        time: "creative"
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
      tags: {
        setting: "outdoor",
        group: "couple",
        cost: "low-cost",
        time: "creative"
      }
    },
    {
      "title": "Rooftop Storytelling Night",
      "description": "Share personal stories or dreams under a city skyline with cozy blankets",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Rooftop or Balcony",
      "type": "Intimate Sharing",
      "vibe": "Words weave your hearts closer",
      "tags": {
        "setting": "outdoor",
        "group": "couple",
        "cost": "free",
        "time": "evening"
      }
    },
    {
      "title": "Garden Planting Date",
      "description": "Plant seeds or flowers together in a small garden or pots, nurturing growth side by side",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Backyard or Community Garden",
      "type": "Shared Creation",
      "type": "Nurturing Bond",
      "vibe": "Grow love with every seed you sow",
      "tags": {
        "setting": "outdoor",
        "group": "couple",
        "cost": "low-cost",
        "time": "daytime"
      }
    },
    {
      "title": "Moonlit Rowboat Ride",
      "description": "Row gently across a calm lake under moonlight, sharing quiet moments",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Local Lake or River",
      "type": "Romantic Adventure",
      "vibe": "Glide together in the moon’s soft glow",
      "tags": {
        "setting": "outdoor",
        "group": "couple",
        "cost": "paid",
        "time": "evening"
      }
    },
    {
      "title": "Partner Yoga Session",
      "description": "Flow through gentle yoga poses together, syncing breath and movement",
      "duration": "1-1.5 hours",
      "intensity": 2,
      "location": "Yoga Studio or Park",
      "type": "Physical Connection",
      "vibe": "Breathe as one, move as one",
      "tags": {
        "setting": "indoor or outdoor",
        "group": "couple",
        "cost": "paid",
        "time": "daytime"
      }
    },
    {
      "title": "Vinyl Record Evening",
      "description": "Pick vintage records and listen together, curled up with a cozy blanket",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Home Living Room",
      "type": "Auditory Bonding",
      "vibe": "Let music spin your hearts closer",
      "tags": {
        "setting": "indoor",
        "group": "couple",
        "cost": "free",
        "time": "evening"
      }
    },
    {
      "title": "Scenic Train Journey",
      "description": "Take a short train ride through beautiful landscapes, sharing stories by the window",
      "duration": "2-3 hours",
      "intensity": 1,
      "location": "Regional Railway",
      "type": "Shared Journey",
      "vibe": "Love moves with the rhythm of the rails",
      "tags": {
        "setting": "outdoor",
        "group": "couple",
        "cost": "paid",
        "time": "daytime"
      }
    },
    {
      "title": "Handwritten Recipe Swap",
      "description": "Exchange and cook each other’s favorite childhood recipes, sharing their stories",
      "duration": "2-3 hours",
      "intensity": 2,
      "location": "Home Kitchen",
      "type": "Culinary Storytelling",
      "vibe": "Taste the love in every shared bite",
      "tags": {
        "setting": "indoor",
        "group": "couple",
        "cost": "low-cost",
        "time": "evening"
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
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "reflective"
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
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "symbolic"
      }
    },
    {
      title: "Anger Release Smash Room",
      description: "Break plates, glass, or electronics safely in a smash room",
      duration: "30-45 mins",
      intensity: 3,
      location: "Smash Studio",
      type: "Physical Catharsis",
      vibe: "Smash what you couldn’t say out loud",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "cathartic"
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
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "raw"
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
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "reflective"
      }
    },
    {
      title: "Boxing for Boundaries",
      description: "Take a solo or intro class in boxing/kickboxing to feel strong again",
      duration: "1 hour",
      intensity: 4,
      location: "Boxing Gym",
      type: "Physical Empowerment",
      vibe: "Every punch says: I’m reclaiming myself",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "empowering"
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
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo",
        tone: "restorative"
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
      tags: {
        setting: "indoor",
        cost: "free",
        group: "group",
        tone: "supportive"
      }
    },
    {
      title: "Symbolic Jewelry Burial",
      description: "Bury old rings, notes, or items with meaning in a symbolic farewell",
      duration: "30 mins",
      intensity: 2,
      location: "Quiet Outdoor Spot",
      type: "Letting Go Ritual",
      vibe: "What’s buried doesn’t carry you anymore",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "symbolic"
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
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "cleansing"
      }
    },
    {
      "title": "Silent Beach Sketch",
      "description": "Sit by the ocean and sketch or doodle your emotions on paper, letting the waves guide your hand",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Nearby Beach or Coast",
      "type": "Creative Expression",
      "vibe": "Let the sea carry your lines to peace",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "reflective"
      }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      "title": "River Stone Release",
      "description": "Collect smooth stones, whisper your pain into them, and toss them into a flowing river",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Nearby River or Stream",
      "type": "Symbolic Letting Go",
      "vibe": "Let the current carry your hurt away",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "symbolic"
      }
    },
    {
      "title": "Candlelit Bath Ritual",
      "description": "Soak in a warm bath with candles, letting water and light soothe your soul",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Home Bathroom",
      "type": "Self-Care Reset",
      "vibe": "Wash away the weight of yesterday",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "restorative"
      }
    },
    {
      "title": "Collage of Closure",
      "description": "Create a collage from old magazines to visualize your healing journey",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Home Table",
      "type": "Creative Expression",
      "vibe": "Piece together a new version of you",
      "tags": {
        "setting": "indoor",
        "cost": "free",
        "group": "solo",
        "tone": "reflective"
      }
    },
    {
      "title": "Solo Dance Release",
      "description": "Move freely to music in a private space, letting your body express what words can’t",
      "duration": "30-60 mins",
      "intensity": 2,
      "location": "Home or Studio",
      "type": "Physical Catharsis",
      "vibe": "Dance until the pain feels lighter",
      "tags": {
        "setting": "indoor",
        "cost": "free",
        "group": "solo",
        "tone": "cathartic"
      }
    },
    {
      "title": "Sunset Gratitude Walk",
      "description": "Walk at dusk, reflecting on small things you’re grateful for amidst the pain",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Local Park or Trail",
      "type": "Grounding Reflection",
      "vibe": "Find light in the fading day",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "reflective"
      }
    }
  ],

  numb: [
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      title: "Silent Aquarium Stroll",
      description: "Wander through dim, blue-lit tunnels watching slow, drifting sea life",
      duration: "1-2 hours",
      intensity: 1,
      location: "City Aquarium",
      type: "Sensory Reconnection",
      vibe: "Let the quiet flow awaken something inside",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Hands in Clay",
      description: "Feel texture and form without expectations in an open-ended clay studio",
      duration: "1-2 hours",
      intensity: 1,
      location: "Art Studio",
      type: "Tactile Focus",
      vibe: "Just touch, shape, breathe",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Float and Forget",
      description: "Drift weightlessly in a dark, quiet sensory float tank",
      duration: "1 hour",
      intensity: 1,
      location: "Float Spa",
      type: "Sensory Reset",
      vibe: "Nothingness feels like everything",
      tags: { setting: "indoor", cost: "paid", group: "solo" }
    },
    {
      title: "Matchstick Garden",
      description: "Watch incense burn or match flames flicker in stillness",
      duration: "30 minutes",
      intensity: 1,
      location: "Home Corner",
      type: "Microfocus Calm",
      vibe: "A spark is still a spark",
      tags: { setting: "indoor", cost: "free", group: "solo" }
    },
    {
      title: "Barefoot Grass Walk",
      description: "Feel earth beneath your feet without needing to think",
      duration: "20-30 minutes",
      intensity: 1,
      location: "Local Park",
      type: "Grounding",
      vibe: "No need to feel—just be",
      tags: { setting: "outdoor", cost: "free", group: "solo" }
    },
    {
      title: "Scented Fabric Touch",
      description: "Run your fingers over soft fabrics like silk or cotton while inhaling subtle essential oil scents",
      duration: "20-30 minutes",
      intensity: 1,
      location: "Home Nook",
      type: "Tactile Sensory",
      vibe: "Texture and scent weave a quiet moment",
      tags: { setting: "indoor", cost: "low cost", group: "solo" }
    },

    {
      "title": "Warm Sand Burial",
      "description": "Lie on a beach and gently cover your hands or feet with warm sand, feeling its weight and warmth",
      "duration": "20-30 minutes",
      "intensity": 1,
      "location": "Nearby Beach",
      "type": "Tactile Grounding",
      "vibe": "Let the earth hold you still",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo"
      }
    },

    {
      "title": "Wind Chime Listening",
      "description": "Sit quietly and let the soft tones of wind chimes drift over you in a garden or porch",
      "duration": "20-30 minutes",
      "intensity": 1,
      "location": "Garden or Balcony",
      "type": "Auditory Calm",
      "vibe": "Hear the breeze sing softly",
      "tags": {
        "setting": "outdoor",
        "cost": "low-cost",
        "group": "solo"
      }
    },

    {
      "title": "Cloud Gazing Drift",
      "description": "Lie on a blanket and watch clouds shift shapes, letting your mind wander freely",
      "duration": "30-45 minutes",
      "intensity": 1,
      "location": "Open Field or Park",
      "type": "Visual Reconnection",
      "vibe": "Shapes in the sky, peace in your heart",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo"
      }
    },
    {
      "title": "Warm Tea Hold",
      "description": "Hold a warm mug of tea, feeling its heat and sipping slowly to savor the moment",
      "duration": "15-20 minutes",
      "intensity": 1,
      "location": "Home Nook",
      "type": "Tactile Sensory",
      "vibe": "Warmth in your hands, calm in your soul",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo"
      }
    },
    {
      "title": "Candle Glow Gaze",
      "description": "Watch a single candle’s flame flicker in a dim room, letting its light steady your thoughts",
      "duration": "15-20 minutes",
      "intensity": 1,
      "location": "Home Quiet Corner",
      "type": "Visual Calm",
      "vibe": "A small light holds endless peace",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo"
      }
    },
    {
      "title": "Leaf Tracing Meditation",
      "description": "Trace the veins of a leaf with your fingers or eyes, noticing its delicate patterns",
      "duration": "10-15 minutes",
      "intensity": 1,
      "location": "Local Park or Home",
      "type": "Sensory Reconnection",
      "vibe": "Nature’s details bring you back",
      "tags": {
        "setting": "outdoor or indoor",
        "cost": "free",
        "group": "solo"
      }
    },
    {
      "title": "Gentle Rocking Sway",
      "description": "Sit in a rocking chair or hammock, letting the subtle motion soothe your body",
      "duration": "20-30 minutes",
      "intensity": 1,
      "location": "Porch or Backyard",
      "type": "Kinesthetic Calm",
      "vibe": "Rock away the weight of nothing",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo"
      }
    },

    {
      "title": "Soft Music Drift",
      "description": "Lie down with instrumental music, letting the notes wash over you without focus",
      "duration": "20-30 minutes",
      "intensity": 1,
      "location": "Home Bedroom",
      "type": "Auditory Reset",
      "vibe": "Sound cradles your quiet mind",
      "tags": {
        "setting": "indoor",
        "cost": "free",
        "group": "solo"
      }
    }

  ],

  happy: [
    {
      "title": "Sunflower Field Frolic",
      "description": "Wander through a field of sunflowers, snapping photos or sketching their golden petals",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Local Farm or Field",
      "type": "Nature Joy",
      "vibe": "Chase sunshine in every bloom",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "playful"
      }
    },
    {
      "title": "Kite Flying Adventure",
      "description": "Launch a colorful kite into the sky and watch it dance with the wind",
      "duration": "1-1.5 hours",
      "intensity": 2,
      "location": "Open Park or Beach",
      "type": "Playful Movement",
      "vibe": "Soar high with every gust",
      "tags": {
        "setting": "outdoor",
        "cost": "low-cost",
        "group": "solo or group",
        "tone": "playful"
      }
    },
    {
      "title": "Bubble Blowing Bliss",
      "description": "Blow giant bubbles in a park, watching them float and pop in the sunlight",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Local Park",
      "type": "Simple Delight",
      "vibe": "Find joy in fleeting spheres",
      "tags": {
        "setting": "outdoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "playful"
      }
    },
    {
      "title": "Cozy Bookstore Hunt",
      "description": "Explore a bookstore, picking up books that spark joy and sipping a warm drink",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Local Bookstore",
      "type": "Literary Joy",
      "vibe": "Pages whisper happy secrets",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "cozy"
      }
    },
    {
      "title": "Impromptu Dance Party",
      "description": "Crank up your favorite upbeat tunes and dance freely in your living room",
      "duration": "30-60 mins",
      "intensity": 3,
      "location": "Home",
      "type": "Physical Exuberance",
      "vibe": "Move like nobody’s watching",
      "tags": {
        "setting": "indoor",
        "cost": "free",
        "group": "solo",
        "tone": "energetic"
      }
    },
    {
      "title": "Puppy Playdate",
      "description": "Spend time playing with puppies at a shelter or friend’s home",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Animal Shelter",
      "type": "Animal Connection",
      "vibe": "Wags and cuddles spark joy",
      "tags": {
        "setting": "indoor or outdoor",
        "cost": "free",
        "group": "solo or group",
        "tone": "heartwarming"
      }
    },
    {
      "title": "Street Art Stroll",
      "description": "Walk through a vibrant neighborhood, admiring murals and street art",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Urban Art District",
      "type": "Visual Exploration",
      "vibe": "Colors tell stories of joy",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "inspired"
      }
    },
    {
      "title": "Cookie Baking Bash",
      "description": "Bake a batch of cookies, filling your home with sweet aromas",
      "duration": "1-1.5 hours",
      "intensity": 2,
      "location": "Home Kitchen",
      "type": "Culinary Creation",
      "vibe": "Sweetness in every bite",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "cozy"
      }
    },
    {
      "title": "Laughter Yoga Class",
      "description": "Join a group for laughter yoga, giggling without needing a reason",
      "duration": "1 hour",
      "intensity": 2,
      "location": "Community Center",
      "type": "Social Joy",
      "vibe": "Laugh until your heart sings",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "group",
        "tone": "energetic"
      }
    },
    {
      "title": "Swing Set Soiree",
      "description": "Swing high at a playground, feeling the rush of childhood freedom",
      "duration": "30-60 mins",
      "intensity": 2,
      "location": "Local Playground",
      "type": "Playful Movement",
      "vibe": "Fly back to carefree days",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "playful"
      }
    },
    {
      "title": "Gratitude Jar Craft",
      "description": "Decorate a jar and fill it with notes of things that make you happy",
      "duration": "1-1.5 hours",
      "intensity": 1,
      "location": "Home Desk",
      "type": "Reflective Creation",
      "vibe": "Joy grows with every note",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "reflective"
      }
    },
    {
      "title": "Picnic with a View",
      "description": "Pack a simple picnic and eat while overlooking a scenic vista",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Hilltop or Lake",
      "type": "Nature Connection",
      "vibe": "Taste joy in every breeze",
      "tags": {
        "setting": "outdoor",
        "cost": "low-cost",
        "group": "solo or group",
        "tone": "cozy"
      }
    },
    {
      "title": "Watercolor Play Session",
      "description": "Paint freely with watercolors, letting colors blend without rules",
      "duration": "1-1.5 hours",
      "intensity": 1,
      "location": "Home or Art Studio",
      "type": "Creative Expression",
      "vibe": "Splash happiness onto paper",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "creative"
      }
    },
    {
      "title": "Outdoor Movie Night",
      "description": "Watch a feel-good movie under the stars with blankets and snacks",
      "duration": "2-3 hours",
      "intensity": 1,
      "location": "Backyard or Park",
      "type": "Cinematic Joy",
      "vibe": "Stories light up the night",
      "tags": {
        "setting": "outdoor",
        "cost": "low-cost",
        "group": "group",
        "tone": "cozy"
      }
    },
    {
      "title": "Flower Crown Crafting",
      "description": "Make a flower crown with fresh or faux flowers, wearing it proudly",
      "duration": "1-1.5 hours",
      "intensity": 1,
      "location": "Garden or Home",
      "type": "Creative Adornment",
      "vibe": "Bloom with every petal",
      "tags": {
        "setting": "outdoor or indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "playful"
      }
    },
    {
      "title": "Bird Watching Walk",
      "description": "Stroll with binoculars, spotting birds and listening to their songs",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Nature Trail",
      "type": "Nature Observation",
      "vibe": "Wings lift your spirit high",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "calm"
      }
    },
    {
      "title": "Karaoke Solo Session",
      "description": "Sing your heart out to favorite songs in a private karaoke booth",
      "duration": "1-1.5 hours",
      "intensity": 2,
      "location": "Karaoke Lounge",
      "type": "Musical Expression",
      "vibe": "Belt out joy, note by note",
      "tags": {
        "setting": "indoor",
        "cost": "paid",
        "group": "solo",
        "tone": "energetic"
      }
    },
    {
      "title": "Puzzle Piecing Afternoon",
      "description": "Work on a colorful jigsaw puzzle, savoring each piece’s fit",
      "duration": "1-2 hours",
      "intensity": 1,
      "location": "Home Table",
      "type": "Mindful Focus",
      "vibe": "Every piece clicks into joy",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "tone": "calm"
      }
    },
    {
      "title": "Roller Skating Rink Roll",
      "description": "Glide around a rink to upbeat music, feeling the rhythm",
      "duration": "1-1.5 hours",
      "intensity": 3,
      "location": "Skating Rink",
      "type": "Active Fun",
      "vibe": "Roll with unstoppable glee",
      "tags": {
        "setting": "indoor",
        "cost": "paid",
        "group": "solo or group",
        "tone": "energetic"
      }
    },
    {
      "title": "Sunset Bike Ride",
      "description": "Cycle along a scenic path as the sun sets, soaking in the glow",
      "duration": "1-1.5 hours",
      "intensity": 2,
      "location": "Bike Trail",
      "type": "Active Exploration",
      "vibe": "Pedal into golden happiness",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "calm"
      }
    },
    {
      "title": "Craft Fair Wander",
      "description": "Stroll through a local craft fair, chatting with artisans and admiring creations",
      "duration": "1-2 hours",
      "intensity": 2,
      "location": "Local Market",
      "type": "Social Exploration",
      "vibe": "Handmade treasures spark delight",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo or group",
        "tone": "inspired"
      }
    },

    {
      "title": "Silly Photo Booth",
      "description": "Take goofy photos with props in a photo booth or at home",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Mall or Home",
      "type": "Playful Capture",
      "vibe": "Laugh at every silly snap",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo or group",
        "tone": "playful"
      }
    },
    {
      "title": "Garden Herb Tasting",
      "description": "Sample fresh herbs from a garden, savoring their vibrant flavors",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Home Garden or Farm",
      "type": "Sensory Delight",
      "vibe": "Taste the earth’s little joys",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "calm"
      }
    },
    {
      "title": "Board Game Café Night",
      "description": "Play lighthearted board games with friends at a cozy café",
      "duration": "2-3 hours",
      "intensity": 2,
      "location": "Game Café",
      "type": "Social Fun",
      "vibe": "Roll dice, share laughs",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "group",
        "tone": "playful"
      }
    },
    {
      "title": "Morning Balloon Watch",
      "description": "Watch hot air balloons rise at dawn, marveling at their colors",
      "duration": "1-1.5 hours",
      "intensity": 1,
      "location": "Festival Field",
      "type": "Visual Wonder",
      "vibe": "Float on dreams at sunrise",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "tone": "inspired"
      }
    }
  ],

  calm: [
    {
      title: "Zen Garden Sit",
      description: "Sit quietly in a minimal garden surrounded by raked sand and soft greenery",
      duration: "1-2 hours",
      intensity: 1,
      location: "Zen Courtyard",
      type: "Stillness Retreat",
      vibe: "Peace lies between each breath",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "peace"
      },

    },
    {
      title: "Gentle Tea Ceremony",
      description: "Experience the art of preparing and sipping tea in a quiet traditional setup",
      duration: "1-2 hours",
      intensity: 1,
      location: "Tea Room",
      type: "Mindful Ritual",
      vibe: "Each sip centers the soul",
      tags: {
        setting: "indoor",
        cost: "paid",
        group: "solo or couple",
        tone: "calm"
      },

    },
    {
      title: "Forest Hammock Time",
      description: "Lie gently in a forest hammock with nothing but the rustle of trees",
      duration: "1-2 hours",
      intensity: 1,
      location: "Wooded Trail",
      type: "Nature Rest",
      vibe: "Let stillness hold you like the trees do",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "peace"
      },

    },
    {
      title: "Silent Reading Lounge",
      description: "Read a quiet book in a no-talk library nook with soft ambient lighting",
      duration: "1-3 hours",
      intensity: 1,
      location: "Library Nook",
      type: "Literary Peace",
      vibe: "Words float gently in your still mind",
      tags: {
        setting: "indoor",
        cost: "free",
        group: "solo",
        tone: "calm"
      },

    },
    {
      title: "Floating in a Lake",
      description: "Gently float in a calm, shallow lake with warm sun overhead",
      duration: "1-2 hours",
      intensity: 1,
      location: "Still Lake",
      type: "Water Meditation",
      vibe: "Weightless body, unburdened mind",
      tags: {
        setting: "outdoor",
        cost: "free",
        group: "solo",
        tone: "peace"
      },

    },
    {
      title: "Guided Candle Meditation",
      description: "Focus on a flickering flame as a guide leads a calming session",
      duration: "30-60 mins",
      intensity: 1,
      location: "Meditation Studio",
      type: "Guided Stillness",
      vibe: "Still flame, still mind",
      tags: {
        setting: "indoor",
        cost: "low-cost",
        group: "solo",
        tone: "calm"
      },

    },
    {
      title: "Lakeside Reading Bench",
      description: "Read or journal by the water as ducks paddle past and the breeze whispers",
      duration: "1-2 hours",
      intensity: 1,
      location: "Lakeside Park",
      type: "Solo Retreat",
      vibe: "Stillness in pages and ripples",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "day", tone: "peaceful" }
    },
    {
      title: "Botanical Garden Stroll",
      description: "Wander slow paths through curated gardens and natural beauty",
      duration: "1-2 hours",
      intensity: 1,
      location: "Botanical Garden",
      type: "Nature Walk",
      vibe: "Every step smells like serenity",
      tags: { setting: "outdoor", cost: "paid", group: "solo", time: "morning", tone: "calm" }
    },
    {
      title: "Calm Breathing Forest Spot",
      description: "Sit quietly under trees and practice 4-7-8 breathing",
      duration: "30-60 mins",
      intensity: 1,
      location: "Forest Clearing",
      type: "Mindful Rest",
      vibe: "Exhale tension, inhale trees",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "day", tone: "peaceful" }
    },
    {
      title: "Tea Ritual Corner",
      description: "Enjoy a slow tea ritual with gentle aromas and mindful sips",
      duration: "1-2 hours",
      intensity: 1,
      location: "Tea Room",
      type: "Sensory Pause",
      vibe: "Warmth and presence in every cup",
      tags: { setting: "indoor", cost: "paid", group: "solo", time: "afternoon", tone: "calm" }
    },
    {
      title: "Slow Drawing Session",
      description: "Draw textures or objects slowly, no pressure, just flow",
      duration: "1-2 hours",
      intensity: 1,
      location: "Art Studio",
      type: "Creative Focus",
      vibe: "Pencil strokes align with your breath",
      tags: { setting: "indoor", cost: "free", group: "solo", time: "day", tone: "calm" }
    },
    {
      title: "Birdsong Listening Spot",
      description: "Sit where birds gather and just listen—no headphones, no hurry",
      duration: "1 hour",
      intensity: 1,
      location: "Birdwatch Grove",
      type: "Natural Stillness",
      vibe: "Wings carry the mood",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "morning", tone: "peaceful" }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      title: "Pebble Sorting Mind Game",
      description: "Gather pebbles and sort them in patterns—an ancient calming exercise",
      duration: "30-60 mins",
      intensity: 1,
      location: "Riverbank",
      type: "Meditative Play",
      vibe: "Order brings ease",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "day", tone: "peaceful" }
    },
    {
      title: "Incense + Soft Music Nest",
      description: "Lie down or sit with incense, soft ambient music, and cozy light",
      duration: "1-2 hours",
      intensity: 1,
      location: "Home Zone",
      type: "Atmospheric Calm",
      vibe: "Every breath feels scented",
      tags: { setting: "indoor", cost: "free", group: "solo", time: "evening", tone: "calm" }
    },
    {
      title: "Float-in Garden Hammock",
      description: "Lie in a hammock gently swaying among plants and sky",
      duration: "1 hour",
      intensity: 1,
      location: "Backyard Garden",
      type: "Relaxed Suspension",
      vibe: "Weightless, wordless rest",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "afternoon", tone: "calm" }
    },
    {
      title: "Fountain Listening Corner",
      description: "Find a public water fountain and just sit nearby",
      duration: "1 hour",
      intensity: 1,
      location: "Public Garden",
      type: "Sound Meditation",
      vibe: "Drip by drip, you return to center",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "day", tone: "peaceful" }
    }, {
      "title": "Cloud Shadow Watch",
      "description": "Lie on grass and watch cloud shadows drift across the landscape",
      "duration": "30-60 mins",
      "intensity": 1,
      "location": "Open Field",
      "type": "Visual Tranquility",
      "vibe": "Shadows move, your heart rests",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "time": "day",
        "tone": "peaceful"
      }
    }, {
      "title": "Dewdrop Morning Gaze",
      "description": "Observe dewdrops on grass or flowers at dawn, marveling at their delicate sparkle",
      "duration": "20-30 mins",
      "intensity": 1,
      "location": "Garden or Park",
      "type": "Visual Serenity",
      "vibe": "Tiny drops reflect peaceful joy",
      "tags": {
        "setting": "outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning",
        "tone": "peaceful"
      }
    }, {
      "title": "Cozy Knitting Nook",
      "description": "Knit a simple scarf in a quiet corner, feeling the yarn’s gentle rhythm",
      "duration": "1-1.5 hours",
      "intensity": 1,
      "location": "Home Living Room",
      "type": "Creative Serenity",
      "vibe": "Each stitch weaves joyful calm",
      "tags": {
        "setting": "indoor",
        "cost": "low-cost",
        "group": "solo",
        "time": "evening",
        "tone": "calm"
      }
    },
  ],

  angry: [
    {
      title: "Boxing Bag Beatdown",
      description: "Punch out stress in a safe, padded boxing gym with pumping music",
      duration: "1 hour",
      intensity: 3,
      location: "Fitness Center",
      type: "Physical Release",
      vibe: "Every strike softens the storm",
      tags: { setting: "indoor", cost: "paid", group: "solo", time: "anytime", tone: "cathartic" }
    },
    {
      title: "Anger Journaling Sprint",
      description: "Write uncensored thoughts fast in a private notebook—then rip it up or keep it",
      duration: "30 mins",
      intensity: 2,
      location: "Private Space",
      type: "Emotional Release",
      vibe: "Pages absorb what words can’t",
      tags: { setting: "indoor", cost: "free", group: "solo", time: "anytime", tone: "cathartic" }
    },
    {
      "title": "Pillow Punch Out",
      "description": "Beat a pillow or cushion in a private space to release pent-up energy",
      "duration": "15-30 mins",
      "intensity": 2,
      "location": "Home",
      "type": "Physical Venting",
      "vibe": "Soft but fierce release",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "release" }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      "title": "Rage Art Scribble",
      "description": "Scribble or paint aggressively on a large canvas to externalize anger",
      "duration": "30-60 mins",
      "intensity": 2,
      "location": "Art Space",
      "type": "Creative Venting",
      "vibe": "Colors bleed out the fury",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "expressive" }
    }, {
      "title": "Gravel Kick Path",
      "description": "Kick loose gravel or dirt along a quiet path to vent frustration",
      "duration": "20 mins",
      "intensity": 2,
      "location": "Rural Path",
      "type": "Physical Venting",
      "vibe": "Dust settles, so does rage",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "day", "tone": "release" }

    },
    {
      "title": "Wall Push Surge",
      "description": "Push against a solid wall with full force to release bottled-up energy",
      "duration": "15 mins",
      "intensity": 3,
      "location": "Home or Gym",
      "type": "Physical Release",
      "vibe": "Unmovable wall, movable anger",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "empowering" }
    },
    {
      "title": "Cardboard Box Crush",
      "description": "Stomp and crush old cardboard boxes in a safe, open space",
      "duration": "15 mins",
      "intensity": 2,
      "location": "Backyard",
      "type": "Destructive Release",
      "vibe": "Collapse the box, not yourself",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "day", "tone": "release" }
    },
    {
      "title": "Anger Letter Shred",
      "description": "Write a letter to your anger, then tear it into tiny pieces",
      "duration": "30 mins",
      "intensity": 2,
      "location": "Private Space",
      "type": "Emotional Release",
      "vibe": "Words dissolve, peace remains",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "cleansing" }
    },
    {
      title: "Scream in a Tunnel",
      description: "Let it all out in a quiet echo spot like an empty tunnel or underpass",
      duration: "15 mins",
      intensity: 3,
      location: "Urban Echo Zone",
      type: "Vocal Venting",
      vibe: "Your voice needs the air too",
      tags: { setting: "outdoor", cost: "free", group: "solo", time: "day", tone: "release" }
    },
    {
      title: "Destruction Room Smash",
      description: "Suit up and break stuff in a safe, controlled room designed for emotional release",
      duration: "30-45 mins",
      intensity: 3,
      location: "Smash Studio",
      type: "Rage Therapy",
      vibe: "Glass shatters, so does the pressure",
      tags: { setting: "indoor", cost: "paid", group: "solo", time: "afternoon", tone: "release" }
    },
    {
      "title": "Forest Stick Snap",
      "description": "Gather dry sticks in a forest and snap them with force to release tension",
      "duration": "30 mins",
      "intensity": 2,
      "location": "Woodland Trail",
      "type": "Physical Release",
      "vibe": "Each crack echoes your relief",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "day", "tone": "cathartic" }
    },
    {
      "title": "Canvas Rip Art",
      "description": "Tear and collage old fabric or canvas in an art space to vent creatively",
      "duration": "45 mins",
      "intensity": 2,
      "location": "Art Studio",
      "type": "Creative Destruction",
      "vibe": "Torn pieces mend your calm",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "expressive" }
    }, {
      "title": "Canvas Rip Art",
      "description": "Tear and collage old fabric or canvas in an art space to vent creatively",
      "duration": "45 mins",
      "intensity": 2,
      "location": "Art Studio",
      "type": "Creative Destruction",
      "vibe": "Torn pieces mend your calm",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "expressive" }
    },

    {
      title: "Heavy Metal Solo Drive",
      description: "Crank loud music and drive through open roads to clear your head",
      duration: "1-2 hours",
      intensity: 2,
      location: "Outskirts Highway",
      type: "Moving Meditation",
      vibe: "Volume drowns out the noise inside",
      tags: { setting: "outdoor", cost: "low-cost", group: "solo", time: "evening", tone: "cathartic" }
    },
    {
      title: "Anger Writing Burn",
      description: "Write everything you feel, then destroy the paper safely",
      duration: "30-60 mins",
      intensity: 2,
      location: "Private Corner",
      type: "Reflective Burn",
      vibe: "Ashes from honesty",
      tags: { setting: "indoor", cost: "free", group: "solo", time: "evening", tone: "cleansing" }
    },
  ],

  sad: [
    {
      "title": "Candlelit Journaling",
      "description": "Write your feelings by candlelight in a quiet space to reflect and release",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Emotional Reflection",
      "vibe": "Soft light holds your thoughts",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "evening", "tone": "soothing" }
    },
    {
      "title": "Gentle Park Stroll",
      "description": "Walk slowly through a park, noticing the trees and sounds to ground yourself",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Local Park",
      "type": "Mindful Movement",
      "vibe": "Nature listens without judgment",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "day", "tone": "calming" }
    },
    {
      "title": "Sad Song Sing-Along",
      "description": "Sing softly to a melancholic playlist in a private space to connect with emotions",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Emotional Release",
      "vibe": "Melodies cradle your heart",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "expressive" }
    },
    {
      "title": "Sketching Memories",
      "description": "Draw a memory or feeling with pencils to externalize sadness",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Creative Expression",
      "vibe": "Lines trace what words can’t",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "reflective" }
    },
    {
      "title": "Cloud Watching",
      "description": "Lie on a blanket outdoors and watch clouds drift to ease heavy thoughts",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Open Field",
      "type": "Mindful Observation",
      "vibe": "Sky moves, sorrow softens",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "day", "tone": "calming" }
    },
    {
      "title": "Warm Tea Ritual",
      "description": "Brew and sip a warm tea slowly, focusing on the warmth and flavor",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Mindful Pause",
      "vibe": "Warmth soothes the quiet ache",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "soothing" }
    },
    {
      "title": "Poetry Reading",
      "description": "Read or listen to gentle poetry that resonates with your emotions",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Home or Library",
      "type": "Emotional Connection",
      "vibe": "Words wrap around your heart",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "reflective" }
    },
    {
      "title": "Gratitude List",
      "description": "Write a list of small things you’re grateful for to shift perspective",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Private Space",
      "type": "Reflective Writing",
      "vibe": "Small joys light the dark",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "uplifting" }
    },
    {
      "title": "Waterfront Sit",
      "description": "Sit by a lake or river, watching the water to find calm",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Waterfront",
      "type": "Mindful Observation",
      "vibe": "Ripples carry your thoughts away",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "day", "tone": "calming" }
    },
    {
      "title": "Soft Blanket Meditation",
      "description": "Wrap yourself in a blanket and focus on your breath to feel safe",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Mindful Breathing",
      "vibe": "Warmth holds you close",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "soothing" }
    },
    {
      "title": "Letter to Self",
      "description": "Write a kind letter to yourself, acknowledging your feelings",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Private Space",
      "type": "Emotional Writing",
      "vibe": "Words become your own embrace",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "healing" }
    },
    {
      "title": "Gentle Yoga Flow",
      "description": "Practice slow yoga poses to release emotional tension",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Home or Studio",
      "type": "Physical Release",
      "vibe": "Movement eases the heart",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "calming" }
    },
    {
      "title": "Photo Memory Browse",
      "description": "Look through old photos that bring comfort or joy",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Emotional Reflection",
      "vibe": "Memories warm the soul",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "nostalgic" }
    },
    {
      "title": "Bird Listening Walk",
      "description": "Walk slowly and listen to birdsong to reconnect with the world",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Park or Forest",
      "type": "Mindful Listening",
      "vibe": "Chirps lift the heavy air",
      "tags": { "setting": "outdoor", "cost": "free", "group": "solo", "time": "morning", "tone": "soothing" }
    },
    {
      "title": "Aromatherapy Pause",
      "description": "Use a calming essential oil and breathe deeply to relax",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Sensory Comfort",
      "vibe": "Scents cradle your calm",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "healing" }
    },
    {
      "title": "Mindful Coloring",
      "description": "Color simple patterns to focus your mind and ease sadness",
      "duration": "25 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Creative Focus",
      "vibe": "Colors soothe the quiet storm",
      "tags": { "setting": "indoor", "cost": "low-cost", "group": "solo", "time": "anytime", "tone": "calming" }
    },
    {
      "title": "Rain Watching",
      "description": "Sit by a window and watch rain fall to reflect quietly",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Mindful Observation",
      "vibe": "Raindrops mirror your release",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "reflective" }
    },
    {
      "title": "Breath and Stretch",
      "description": "Combine deep breathing with gentle stretches to release tension",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Physical Release",
      "vibe": "Breath carries sorrow away",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "soothing" }
    },
    {
      "title": "Memory Jar",
      "description": "Write down a happy memory and place it in a jar to revisit later",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Reflective Writing",
      "vibe": "Moments saved, hope restored",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "uplifting" }
    },
    {
      "title": "Stillness Session",
      "description": "Sit in silence, focus on your breath, and allow thoughts to come and go without judgment. A reset for your mind and body.",
      "duration": "15–30 mins",
      "intensity": 1,
      "location": "Home or Nature",
      "type": "Meditation",
      "vibe": "Calm mind, steady heart",
      "tags": {
        "setting": "indoor/outdoor",
        "cost": "free",
        "group": "solo",
        "time": "morning or evening",
        "tone": "calm"
      }
    },
    {
      "title": "Soft Music Sway",
      "description": "Sway gently to calming music to connect with your emotions",
      "duration": "20 mins",
      "intensity": 1,
      "location": "Home",
      "type": "Expressive Movement",
      "vibe": "Rhythm holds you gently",
      "tags": { "setting": "indoor", "cost": "free", "group": "solo", "time": "anytime", "tone": "healing" }
    }
  ]

};

export default adventureDatabaseData;
