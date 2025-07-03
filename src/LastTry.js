import React, { useState, useEffect } from 'react';
import { Heart, Zap, Cloud, Smile, FireExtinguisher, Sun, ParkingCircleIcon, PauseCircle, EyeOff, Flame, Ban, TrendingUp, Bell,Mountain, Flower, Flower2, Coffee, Crown, Camera, Wind, Music, MapPin, Clock, Star, Compass, Bed, Moon, Users, HeartCrack, Waves, TreePine, Frown, Menu, X, ChevronRight, Search, Loader2 } from 'lucide-react';
import adventureMoodData, { getStandardizedCityName, keywordMappings, moodCategories, moodCategoryMappings, moods, } from './adventureDatabase';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { generateSmartKeywords } from './indoorResultsGenerator'
// Mock adventure database
const MoodAdventureApp = () => {
    // const adventureDatabase = adventureMoodData;
    const [currentMood, setCurrentMood] = useState(null);
    const [selectedIntensity, setSelectedIntensity] = useState(3);
    const [timeAvailable, setTimeAvailable] = useState('2-4 hours');
    const [adventures, setAdventures] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showMoodMenu, setShowMoodMenu] = useState(false);
    const [moodCategory, setMoodCategory] = useState('popular');
    // const [searchResults, setSearchResults] = useState([]);
    const [selectedAdventure, setSelectedAdventure] = useState(null)
    const [showAdventureDetail, setShowAdventureDetail] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchKeywords, setSearchKeywords] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [adventureMoodData, setAdventureMoodData] = useState([]);

    useEffect(() => {
        updateAdventures();
    }, [selectedIntensity, timeAvailable]);
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

        const moodAdventures = adventureMoodData.filter((adventure) => adventure.mood === mood.id) || [];

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
            switch (selectedMood.id) {
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

    useEffect(() => {
        fetch('./cleaned_energetic_adventures.json')

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdventureMoodData(data)
            });
    }, [])





    // Utility function to get user's current location
    const getUserLocation = () => {
        return new Promise((resolve) => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        try {
                            const { latitude, longitude } = position.coords;
                            console.log("Got coordinates:", latitude, longitude);

                            const locationData = await reverseGeocode(latitude, longitude);
                            resolve(locationData);
                        } catch (err) {
                            console.error("Error in location processing:", err);
                            resolve({ city: "Bengaluru", state: "Karnataka" });
                        }
                    },
                    (error) => {
                        console.error("Geolocation error:", error.message);
                        resolve({ city: "Bengaluru", state: "Karnataka" });
                    }
                );
            } else {
                console.error("Geolocation not supported");
                resolve({ city: "Bengaluru", state: "Karnataka" });
            }
        });
    };

    // Function to reverse geocode coordinates to city/state
    const reverseGeocode = async (latitude, longitude) => {
        try {
            const apiKey = "20fdf466350e4924abc2708b462ed0fc" || process.env.REACT_APP_OPENCAGE_KEY;
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
            );

            if (response.status === 403) {
                console.error("OpenCage API returned 403 Forbidden. Check your API key and usage limits.");
                return { city: "Bengaluru", state: "Karnataka" };
            }

            const data = await response.json();

            if (!data.results || data.results.length === 0) {
                console.error("No location results found");
                return { city: "Bengaluru", state: "Karnataka" };
            }

            const result = data.results[0];
            const components = result.components;

            const city = components.city ||
                components.town ||
                components.village ||
                components.municipality ||
                components.district ||
                components.county ||
                components.suburb ||
                components.neighbourhood ||
                "Bengaluru";


            let normalizedCity = city.toLowerCase().replace(/\s+/g, '');


            city = getStandardizedCityName(normalizedCity) || city;


            // Add more mappings as needed
            const state = components.state || "Karnataka";

            console.log("Detected location:", { city, state });
            return { city, state };
        } catch (error) {
            console.error("Error in reverse geocoding:", error);
            return { city: "Bengaluru", state: "Karnataka" };
        }
    };




    useEffect(() => {
        if (selectedAdventure) {
            console.log('Updated adventureMoodData:', adventureMoodData, selectedAdventure);
        }
    }, [selectedAdventure]);


    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
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
            {showMoodMenu && (
                <div className="fixed inset-0 bg-white z-50 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">How are you feeling?</h2>
                            <button
                                onClick={() => { setShowMoodMenu(false) }}
                                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="bg-white border-b border-gray-200">
                        <div className="flex overflow-x-auto no-scrollbar">
                            {Object.entries(moodCategories).map(([key, category]) => (
                                <button
                                    key={key}
                                    onClick={() => setMoodCategory(key)}
                                    className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${moodCategory === key
                                        ? 'border-purple-500 text-purple-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mood Grid */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="grid grid-cols-2 gap-4 pb-8">
                            {moodCategories[moodCategory].moods.map((mood) => {
                                const IconComponent = mood.icon;
                                const isSelected = currentMood?.id === mood.id;

                                return (
                                    <button
                                        key={mood.id}
                                        onClick={() => handleMoodSelect(mood)}
                                        className={`p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                            ? `border-transparent bg-gradient-to-r ${mood.color} text-white shadow-xl scale-105`
                                            : `border-gray-200 ${mood.bgColor} hover:border-gray-300 hover:scale-102 active:scale-95`
                                            }`}
                                    >
                                        <IconComponent className={`w-10 h-10 mx-auto mb-3 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                                        <p className={`font-semibold text-base mb-2 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                                            {mood.name}
                                        </p>
                                        <p className={`text-sm leading-relaxed ${isSelected ? 'text-white/90' : 'text-gray-500'}`}>
                                            {mood.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
            {/* Adventure Detail Modal */}
            {showAdventureDetail && selectedAdventure && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">


                        {/* <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-50 to-pink-50">
                                        <h2 className="text-2xl font-bold text-gray-800">{selectedAdventure.title}</h2>
                                        <button
                                            onClick={() => setShowAdventureDetail(false)}
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div> */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 relative">
                            <button
                                onClick={() => { setShowAdventureDetail(false); }}
                                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className="text-2xl font-bold mb-2 pr-12">{selectedAdventure.title}</h2>
                            <p className="text-white/90">{selectedAdventure.description}</p>
                            <div className="flex items-center gap-4 mt-4 text-sm">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {selectedAdventure.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {selectedAdventure.location}
                                </span>
                                <div className="flex items-center gap-1">
                                    <TrendingUp className="w-4 h-4 " />
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2 h-2 rounded-full ${i < selectedAdventure.intensity ? 'bg-white' : 'bg-white/30'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Sun className="w-4 h-4" />
                                    <span>{selectedAdventure.type}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div className="bg-purple-50 p-4 rounded-xl">
                                <p className="text-purple-800 font-medium italic">"{selectedAdventure.vibe}"</p>
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
                          

                            {/* <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6"> Location Search</h2>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Keywords for searching the locations
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="flex-1 relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                value={selectedAdventure.keywords}
                                                readOnly
                                                placeholder="Keywords will appear here based on your selection..."
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                                                title="Auto-generated keywords based on your mood and selected adventure"
                                            />
                                        </div>
                                        <button

                                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 transition-colors"
                                        >
                                            <Search className="w-5 h-5" />
                                            Search
                                        </button>
                                    </div>


                                </div>
                            </div> */}

                            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-purple-500" />
                                    Location Search
                                </h2>
                                
                                {/* Coming Soon Layout */}
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 opacity-60">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon!</h3>
                                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                        We're working on bringing you personalized location recommendations based on your adventure preferences.
                                    </p>
                                    <button
                                         onClick={async (event) => {
                                            try {
                                                //Google Analytics tracking (uncomment when you set up GA)
                                                if (window.gtag) {
                                                    console.log("🔥 GA Event fired: location_search_interest");
                                                    window.gtag('event', 'location_search_interest', {
                                                      adventure_title: selectedAdventure.title,
                                                      mood: currentMood?.name,
                                                      event_category: 'user_engagement'
                                                    });
                                                  } else {
                                                    console.warn("🚫 gtag not available");
                                                  }
                                                  
                                                
                                                // //CountAPI tracking
                                                // await fetch('https://api.countapi.xyz/hit/moodscape-app/location-search-clicks', {
                                                //     method: 'GET'
                                                // });
                                                
                                                // Your existing webhook (optional - you can remove this if you prefer CountAPI)
                                                await fetch('https://webhook.site/58eac119-a8c3-4233-be5c-29cd0b43e837', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Accept': 'application/json',
                                                        
                                                        mode: 'no-cors', // Add this


                                                        
                                                        
                                                    },
                                                    body: JSON.stringify({
                                                        action: 'location_search_click',
                                                        adventure: selectedAdventure.title,
                                                        mood: currentMood?.name,
                                                        timestamp: new Date().toISOString(),
                                                        user_agent: navigator.userAgent
                                                    })
                                                });
                                                
                                                // Optional: Show a brief confirmation
                                                const button = event.target;
                                                const originalText = button.textContent;
                                                button.textContent = 'Interest Recorded!';
                                                button.className = button.className.replace('bg-purple-500', 'bg-green-500');
                                                setTimeout(() => {
                                                    button.textContent = originalText;
                                                    button.className = button.className.replace('bg-green-500', 'bg-purple-500');
                                                }, 1500);
                                            } catch (error) {
                                                console.error('Error tracking click:', error);
                                            }
                                        }}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                                    >
                                        <Bell className="w-5 h-5" />
                                        Notify Me When Ready
                                    </button>
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
                                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${isSelected
                                        ? `border-transparent bg-gradient-to-r ${mood.color} text-white shadow-lg scale-105`
                                        : `border-gray-200 hover:border-gray-300 ${mood.bgColor} hover:scale-102`
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

                {/* Quick Settings - Responsive */}
                {currentMood && (
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-base md:text-lg">
                                <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                                {window.innerWidth < 768 ? "Quick Settings" : "Fine-tune your adventure"}
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

                                <Select
                                    value={timeAvailable}
                                    onChange={(e) => setTimeAvailable(e.target.value)}
                                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white appearance-auto"
                                    style={{ WebkitAppearance: 'menulist', appearance: 'menulist' }}

                                >
                                    <MenuItem value={"1-2 hours"}>1-2 hrs</MenuItem>
                                    <MenuItem value="2-4 hours">2-4 hrs</MenuItem>
                                    <MenuItem value="4+ hours">4+ hrs</MenuItem>
                                </Select>

                            </div>
                        </div>
                    </div>
                )}

                {/* Adventures - Responsive */}
                {adventures.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" />
                            Perfect for your {currentMood?.name.toLowerCase()} mood
                        </h3>

                        <div className={`space-y-4 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                            {adventures.map((adventure, index) => (
                                <div
                                    key={index} onClick={() => handleAdventureSelect(adventure)}
                                    className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md md:hover:shadow-lg transition-all duration-300 md:hover:scale-102 cursor-pointer group"
                                >
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                                    {adventure.title}
                                                </h4>
                                                <p className="text-gray-600 mb-3 leading-relaxed">
                                                    {adventure.description}
                                                </p>
                                                <p className="text-sm text-purple-600 font-medium italic bg-purple-50 p-2 rounded-lg">
                                                    "{adventure.vibe}"
                                                </p>
                                            </div>
                                            <div className="hidden md:flex flex-col items-end gap-2 ml-4">
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                                                    {adventure.type}
                                                </span>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-2 h-2 rounded-full ${i < adventure.intensity ? 'bg-orange-400' : 'bg-gray-200'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {adventure.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {adventure.location}
                                                </span>

                                                {/* Mobile type badge */}
                                                <span className="md:hidden bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    {adventure.type}
                                                </span>

                                                {adventure.tags && (
                                                    <div className="flex gap-2 flex-wrap">
                                                        {adventure.tags.setting && (
                                                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                                                                {adventure.tags.setting}
                                                            </span>
                                                        )}
                                                        {adventure.tags.cost && (
                                                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">
                                                                {adventure.tags.cost}
                                                            </span>
                                                        )}
                                                        {adventure.tags.group && (
                                                            <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full text-xs">
                                                                {adventure.tags.group}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <button onClick={() => handleAdventureSelect(adventure)}
                                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                                                Learn More

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Getting Started - Responsive */}
                {!currentMood && (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                            <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                            Your next adventure awaits
                        </h3>
                        <p className="text-gray-600 max-w-sm md:max-w-md mx-auto mb-6 leading-relaxed">
                            {window.innerWidth < 768
                                ? "Tap the mood button above to discover experiences perfectly matched to how you're feeling right now."
                                : "Choose your current mood above and discover local experiences designed to match exactly how you're feeling right now."
                            }
                        </p>
                        <button
                            onClick={() => setShowMoodMenu(true)}
                            className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Discover Your Adventure
                        </button>
                    </div>
                )}
            </div>





        </div>
    );
};
export default MoodAdventureApp;