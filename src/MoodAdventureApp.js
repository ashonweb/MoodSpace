import React, { useState, useEffect } from 'react';
import { Heart, Zap, Cloud, Smile,FireExtinguisher, Sun, PauseCircle, EyeOff, Flame, Ban, Mountain, Flower, Flower2, Coffee, Crown, Camera, Wind, Music, MapPin, Clock, Star, Compass, Bed, Moon, Users, HeartCrack, Waves, TreePine, Frown, } from 'lucide-react';
import adventureDatabaseData from './adventureDataBase';


const MoodAdventureApp = () => {
  const [currentMood, setCurrentMood] = useState(null);
  const [selectedIntensity, setSelectedIntensity] = useState(3);
  const [timeAvailable, setTimeAvailable] = useState('2-4 hours');
  const [adventures, setAdventures] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

const moods = [
    { 
        id: 'energetic', 
        name: 'Energetic', 
        icon: Zap, 
        color: 'from-yellow-400 to-red-600',
        bgColor: 'bg-yellow-100',
        description: 'Ready to conquer the world!'
    },
    { 
        id: 'peaceful', 
        name: 'Peaceful', 
        icon: Cloud, 
        color: 'from-teal-300 to-blue-400',
        bgColor: 'bg-teal-50',
        description: 'Seeking calm and tranquility'
    },
    { 
        id: 'curious', 
        name: 'Curious', 
        icon: Compass, 
        color: 'from-violet-400 to-fuchsia-500',
        bgColor: 'bg-violet-50',
        description: 'Want to discover something new'
    },
    { 
        id: 'social', 
        name: 'Social', 
        icon: Coffee,
        color: 'from-red-100 to-pink-300',
        bgColor: 'bg-rose-50',
        description: 'Craving human connection'
    },
    { 
        id: 'reflective', 
        name: 'Reflective', 
        icon: Mountain, 
        color: 'from-green-300 to-emerald-500',
        bgColor: 'bg-emerald-50',
        description: 'Need space to think and feel'
    },
    { 
        id: 'creative', 
        name: 'Creative', 
        icon: Camera, 
        color: 'from-orange-300 to-yellow-400',
        bgColor: 'bg-orange-50',
        description: 'Inspiration is calling'
    },
    { 
        id: 'adventurous', 
        name: 'Adventurous', 
        icon: MapPin, 
        color: 'from-blue-400 to-orange-400',
        bgColor: 'bg-orange-50',
        description: 'Craving excitement and new places'
    },
    { 
        id: 'nostalgic', 
        name: 'Nostalgic', 
        icon: Star, 
        color: 'from-amber-300 to-orange-400',
        bgColor: 'bg-amber-50',
        description: 'Longing for the good old days'
    },
    { 
        id: 'playful', 
        name: 'Playful', 
        icon: Music, 
        color: 'from-pink-300 to-yellow-300',
        bgColor: 'bg-yellow-50',
        description: 'Ready for fun and games'
    },
    { 
        id: 'focused', 
        name: 'Focused', 
        icon: Clock, 
        color: 'from-indigo-400 to-blue-600',
        bgColor: 'bg-blue-50',
        description: 'In the zone and productive'
    },
    { 
        id: 'cozy', 
        name: 'Cozy', 
        icon: Bed, 
        color: 'from-orange-200 to-pink-300',
        bgColor: 'bg-pink-50',
        description: 'Wanting warmth and comfort'
    },
    { 
        id: 'inspired', 
        name: 'Inspired', 
        icon: Sun, 
        color: 'from-yellow-200 to-pink-300',
        bgColor: 'bg-pink-50',
        description: 'Bursting with ideas'
    },
    { 
        id: 'spiritual', 
        name: 'Spiritual', 
        icon: Flower, 
        color: 'from-indigo-200 to-purple-400',
        bgColor: 'bg-purple-50',
        description: 'Connecting with something greater'
    },
    { 
        id: 'luxurious', 
        name: 'Luxurious', 
        icon: Crown, 
        color: 'from-amber-400 to-amber-700',
        bgColor: 'bg-gray-100',
        description: 'Indulge in pampering and elegance'
    },
    {
        id: 'stressed',
        name: 'Stressed',
        icon: Wind,
        color: 'from-red-200 to-pink-300',
        bgColor: 'bg-pink-50',
        description: 'Need to unwind and release tension'
    },
    {
        id: 'lazy',
        name: 'Lazy',
        icon: Bed,
        color: 'from-gray-200 to-gray-400',
        bgColor: 'bg-gray-50',
        description: 'Not moving much today'
    },
    {
        id: 'tired',
        name: 'Tired',
        icon: Moon,
        color: 'from-indigo-100 to-purple-300',
        bgColor: 'bg-purple-50',
        description: 'Running low on energy'
    },
    {
        id: 'love',
        name: 'Love',
        icon: Heart,
        color: 'from-pink-400 to-rose-600',
        bgColor: 'bg-pink-50',
        description: 'Feeling affectionate and warm'
    },

    {
        id: 'heartbreak',
        name: 'Heartbreak',
        icon: HeartCrack,
        color: 'from-blue-300 to-indigo-500',
        bgColor: 'bg-blue-50',
        description: 'Mending a broken heart'
    },

    {
        id: 'numb',
        name: 'Numb',
        icon: PauseCircle,
        color: 'from-gray-300 to-blue-200',
        bgColor: 'bg-blue-50',
        description: 'Feeling disconnected or empty'
    },

    {
        id: 'happy',
        name: 'Happy',
        icon: Smile,
        color: 'from-yellow-300 to-orange-400',
        bgColor: 'bg-yellow-50',
        description: 'Feeling joyful and upbeat'
    },
    {
        id: 'calm',
        name: 'Calm',
        icon: Waves,
        color: 'from-blue-100 to-teal-300',
        bgColor: 'bg-blue-50',
        description: 'At peace and relaxed'
    },

    {
        id: 'angry',
        name: 'Angry/Frustrated',
        icon: Flame,
        color: 'from-red-400 to-gray-700',
        bgColor: 'bg-red-50',
        description: 'Need to let off some steam'
    },
    {
        id: 'sad',
        name: 'Sad',
        icon: Frown,
        color: 'from-blue-200 to-gray-400',
        bgColor: 'bg-blue-50',
        description: 'Feeling down or blue'
    },
    
];

const adventureDatabase = adventureDatabaseData;

  const generateAdventures = (mood, intensity, time) => {
    const moodAdventures = adventureDatabase[mood] || [];
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
    setIsAnimating(true);
    
    setTimeout(() => {
      const newAdventures = generateAdventures(mood.id, selectedIntensity, timeAvailable);
      setAdventures(newAdventures);
      setIsAnimating(false);
    }, 500);
  };

  const updateAdventures = () => {
    if (currentMood) {
      const newAdventures = generateAdventures(currentMood.id, selectedIntensity, timeAvailable);
      setAdventures(newAdventures);
    }
  };

  useEffect(() => {
    updateAdventures();
  }, [selectedIntensity, timeAvailable]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                MoodScape
              </h1>
              <p className="text-sm text-gray-500">Adventures that match your soul</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-8">
        {/* Mood Selection */}
        <div className="space-y-4">
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
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected 
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

        {/* Preferences */}
        {currentMood && (
          <div className="space-y-6 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-500" />
              Fine-tune your adventure
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Intensity */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Energy Level: {selectedIntensity}/5
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={selectedIntensity}
                  onChange={(e) => setSelectedIntensity(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Chill</span>
                  <span>Moderate</span>
                  <span>Intense</span>
                </div>
              </div>

              {/* Time */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Time Available
                </label>
                <select
                  value={timeAvailable}
                  onChange={(e) => setTimeAvailable(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="1-2 hours">1-2 hours</option>
                  <option value="2-4 hours">2-4 hours</option>
                  <option value="4+ hours">4+ hours (let's make a day of it!)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Adventures */}
        {adventures.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Perfect adventures for your {currentMood?.name.toLowerCase()} mood
            </h3>
            
            <div className={`grid gap-4 transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {adventures.map((adventure, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-102"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {adventure.title}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        {adventure.description}
                      </p>
                      <p className="text-sm text-purple-600 font-medium italic mb-3">
                        "{adventure.vibe}"
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 ml-4">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                        {adventure.type}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < adventure.intensity ? 'bg-orange-400' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {adventure.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {adventure.location}
                      </span>

                    {adventure.tags && (
                        <div className="flex gap-2">
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

                            {adventure.tags.time && currentMood?.id === 'love' && (
                                <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">
                                    {adventure.tags.time}
                                </span>
                            )}

                            {adventure.tags.tone && currentMood?.id === 'heartbreak' && (
                                <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs">
                                    {adventure.tags.tone}
                                </span>
                            )}
                        </div>
                    )}
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm font-medium">
                      Let's Go!
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Getting Started */}
        {!currentMood && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Your next adventure awaits
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Choose your current mood above and discover local experiences designed to match exactly how you're feeling right now.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodAdventureApp;