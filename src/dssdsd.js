import React, { useState, useEffect } from 'react';
import { Heart, Zap, Cloud, Smile, Sun, Clock, Star, Compass, Camera, Wind, Music, MapPin, Users, ChevronRight, X, Menu } from 'lucide-react';

// Mock data to simulate your JSON structure
const mockAdventureData = [
  {
    "mood": "energetic",
    "title": "Urban Parkour Trail",
    "description": "Navigate the city like never before with guided parkour spots and safe practice areas",
    "duration": "1-2 hours",
    "intensity": 5,
    "location": "Downtown District",
    "type": "Active Adventure",
    "vibe": "Adrenaline rush through urban exploration",
    "keyword": "parkour",
    "tags": {
      "setting": "outdoor",
      "cost": "free",
      "group": "either",
      "tone": "adventurous",
      "nature": "general",
      "time": "daytime",
      "place_type": "outside"
    },
    "equipment": [
      "comfortable clothing",
      "sneakers",
      "water bottle",
      "safety gear",
      "backpack",
      "first aid kit",
      "phone with GPS",
      "snacks"
    ],
    "ideal_for": [
      "young adults",
      "fitness seekers"
    ],
    "season": [
      "spring",
      "autumn"
    ],
    "skills_required": [
      "coordination",
      "endurance"
    ],
    "safety_tips": [
      "wear appropriate footwear",
      "stay hydrated",
      "avoid crowded areas"
    ],
    "gettingStarted": [
      "find a local parkour group or instructor",
      "start with basic movements and techniques",
      "practice in safe, open areas"
    ]
  }
];

// Mock moods data
const moods = [
  {
    id: 'energetic',
    name: 'Energetic',
    description: 'Ready to move and get active',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  }
];

const MoodAdventureApp = () => {
    const [currentMood, setCurrentMood] = useState(null);
    const [selectedIntensity, setSelectedIntensity] = useState(3);
    const [timeAvailable, setTimeAvailable] = useState('2-4 hours');
    const [adventures, setAdventures] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showMoodMenu, setShowMoodMenu] = useState(false);
    const [selectedAdventure, setSelectedAdventure] = useState(null);
    const [showAdventureDetail, setShowAdventureDetail] = useState(false);

    useEffect(() => {
        updateAdventures();
    }, [selectedIntensity, timeAvailable, currentMood]);

    const handleAdventureSelect = (adventure) => {
        const enhancedAdventure = {
            ...adventure,
            whatToBring: generateWhatToBring(adventure, currentMood)
        };
        
        setSelectedAdventure(enhancedAdventure);
        setShowAdventureDetail(true);
    };

    const generateAdventures = (mood, intensity, time) => {
        if (!mood) return [];
        
        const moodAdventures = mockAdventureData.filter((adventure) => adventure.mood === mood.id) || [];
        
        const filteredAdventures = moodAdventures.filter(adventure => {
            const timeMatch = time === '1-2 hours' ? adventure.duration.includes('1') || adventure.duration.includes('2')
                : time === '2-4 hours' ? adventure.duration.includes('2') || adventure.duration.includes('3') || adventure.duration.includes('4')
                    : time === '4+ hours' ? adventure.duration.includes('4') || adventure.duration.includes('5')
                        : true;

            const intensityMatch = Math.abs(adventure.intensity - intensity) <= 1;

            return timeMatch || intensityMatch;
        });

        return filteredAdventures.length > 0 ? filteredAdventures : moodAdventures;
    };

    const handleMoodSelect = (mood) => {
        setCurrentMood(mood);
        setShowMoodMenu(false);
        setIsAnimating(true);

        setTimeout(() => {
            const newAdventures = generateAdventures(mood, selectedIntensity, timeAvailable);
            setAdventures(newAdventures);
            setIsAnimating(false);
        }, 500);
    };

    const updateAdventures = () => {
        if (currentMood) {
            const newAdventures = generateAdventures(currentMood, selectedIntensity, timeAvailable);
            setAdventures(newAdventures);
        }
    };

    const generateWhatToBring = (adventure, selectedMood) => {
        const recommendations = new Set();
        
        // Base recommendations for all adventures
        const baseItems = ['Positive attitude', 'Phone for navigation'];
        
        // Add base items
        baseItems.forEach(item => recommendations.add(item));
        
        // Add equipment from adventure data if available
        if (adventure.equipment) {
            adventure.equipment.slice(0, 6).forEach(item => recommendations.add(item));
        }
        
        // Add mood-specific items
        if (selectedMood) {
            switch(selectedMood.id) {
                case 'energetic':
                    ['Extra water', 'Energy snacks', 'Towel', 'Spare clothes'].forEach(item => recommendations.add(item));
                    break;
                default:
                    ['Water bottle', 'Comfortable clothes'].forEach(item => recommendations.add(item));
            }
        }
        
        // Convert to array and limit to 8 items
        return Array.from(recommendations).slice(0, 8);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
            {/* Header */}
            <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-20">
                <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl md:rounded-xl flex items-center justify-center">
                                <Compass className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    MoodScape
                                </h1>
                                <p className="text-xs md:text-sm text-gray-500">Adventures for your soul</p>
                            </div>
                        </div>

                        {/* Mobile Mood Selector Button */}
                        <button
                            onClick={() => setShowMoodMenu(true)}
                            className="md:hidden flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {currentMood ? (
                                <>
                                    <currentMood.icon className="w-4 h-4" />
                                    <span className="font-medium">{currentMood.name}</span>
                                </>
                            ) : (
                                <>
                                    <Heart className="w-4 h-4" />
                                    <span className="font-medium">Choose Mood</span>
                                </>
                            )}
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Mood Menu */}
            {showMoodMenu && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden">
                    <div className="bg-white h-full flex flex-col">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h2 className="text-xl font-bold text-gray-800">How are you feeling?</h2>
                            <button
                                onClick={() => setShowMoodMenu(false)}
                                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="grid grid-cols-2 gap-3">
                                {moods.map((mood) => {
                                    const IconComponent = mood.icon;
                                    const isSelected = currentMood?.id === mood.id;

                                    return (
                                        <button
                                            key={mood.id}
                                            onClick={() => handleMoodSelect(mood)}
                                            className={`p-4 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                                ? `border-transparent bg-gradient-to-r ${mood.color} text-white shadow-lg`
                                                : `border-gray-200 hover:border-gray-300 ${mood.bgColor}`
                                                }`}
                                        >
                                            <IconComponent className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                            <p className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                                                {mood.name}
                                            </p>
                                            <p className={`text-xs mt-1 ${isSelected ? 'text-white/90' : 'text-gray-500'}`}>
                                                {mood.description}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Adventure Detail Modal */}
            {showAdventureDetail && selectedAdventure && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-50 to-pink-50">
                            <h2 className="text-2xl font-bold text-gray-800">{selectedAdventure.title}</h2>
                            <button
                                onClick={() => setShowAdventureDetail(false)}
                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div className="bg-purple-50 p-4 rounded-xl">
                                <p className="text-purple-800 font-medium italic">"{selectedAdventure.vibe}"</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Adventure Details
                                </h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-gray-500" />
                                        <span>{selectedAdventure.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-gray-500" />
                                        <span>{selectedAdventure.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-gray-500" />
                                        <span>Intensity: {selectedAdventure.intensity}/5</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sun className="w-4 h-4 text-gray-500" />
                                        <span>{selectedAdventure.type}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-3">What to Bring</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {selectedAdventure.whatToBring.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {selectedAdventure.gettingStarted && (
                                <div>
                                    <h3 className="font-semibold text-lg mb-3">Getting Started</h3>
                                    <div className="space-y-2">
                                        {selectedAdventure.gettingStarted.map((step, index) => (
                                            <div key={index} className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
                                                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                                                    {index + 1}
                                                </div>
                                                <span className="text-sm flex-1">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedAdventure.safety_tips && (
                                <div>
                                    <h3 className="font-semibold text-lg mb-3">Safety Tips</h3>
                                    <div className="bg-yellow-50 p-4 rounded-xl">
                                        <ul className="space-y-1">
                                            {selectedAdventure.safety_tips.map((tip, index) => (
                                                <li key={index} className="text-sm text-yellow-800 flex items-start gap-2">
                                                    <span className="text-yellow-600 mt-1">•</span>
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t bg-gray-50">
                            <button
                                onClick={() => setShowAdventureDetail(false)}
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
                            >
                                Start This Adventure!
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-4 space-y-6 md:space-y-8">
                {/* Desktop Mood Selection */}
                <div className="hidden md:block space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" />
                        How are you feeling right now?
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {moods.map((mood) => {
                            const IconComponent = mood.icon;
                            const isSelected = currentMood?.id === mood.id;

                            return (
                                <button
                                    key={mood.id}
                                    onClick={() => handleMoodSelect(mood)}
                                    className={`p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-102 ${isSelected
                                        ? `border-transparent bg-gradient-to-r ${mood.color} text-white shadow-lg scale-105`
                                        : `border-gray-200 hover:border-gray-300 ${mood.bgColor} hover:shadow-md`
                                        }`}
                                >
                                    <IconComponent className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                    <p className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                                        {mood.name}
                                    </p>
                                    <p className={`text-xs mt-1 ${isSelected ? 'text-white/90' : 'text-gray-500'}`}>
                                        {mood.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Settings */}
                {currentMood && (
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-base md:text-lg">
                                <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                                Fine-tune your adventure
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="space-y-2 md:space-y-3">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    Energy: {selectedIntensity}/5
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={selectedIntensity}
                                    onChange={(e) => setSelectedIntensity(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="hidden md:flex justify-between text-xs text-gray-500">
                                    <span>Chill</span>
                                    <span>Moderate</span>
                                    <span>Intense</span>
                                </div>
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Time Available
                                </label>
                                <select
                                    value={timeAvailable}
                                    onChange={(e) => setTimeAvailable(e.target.value)}
                                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                                >
                                    <option value="1-2 hours">1-2 hrs</option>
                                    <option value="2-4 hours">2-4 hrs</option>
                                    <option value="4+ hours">4+ hrs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Adventures */}
                {adventures.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            Perfect for your {currentMood?.name.toLowerCase()} mood
                        </h3>

                        <div className={`space-y-4 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            {adventures.map((adventure, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleAdventureSelect(adventure)}
                                    className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md md:hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                                                {adventure.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-3">{adventure.description}</p>
                                            
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {adventure.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {adventure.location}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Zap className="w-4 h-4" />
                                                    Intensity {adventure.intensity}/5
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="ml-4 flex-shrink-0">
                                            <div className={`w-12 h-12 bg-gradient-to-r ${currentMood?.color || 'from-purple-500 to-pink-500'} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                <Zap className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-purple-600">{adventure.type}</span>
                                            <div className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Learn More
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoodAdventureApp;