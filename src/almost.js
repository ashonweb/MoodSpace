import React, { useState, useEffect } from 'react';
import { Heart, Zap, Cloud, Smile, FireExtinguisher, Sun, ParkingCircleIcon, PauseCircle, EyeOff, Flame, Ban, Mountain, Flower, Flower2, Coffee, Crown, Camera, Wind, Music, MapPin, Clock, Star, Compass, Bed, Moon, Users, HeartCrack, Waves, TreePine, Frown, Menu, X, ChevronRight, Search, Loader2 } from 'lucide-react';
import adventureDatabaseData from './adventureDatabase';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Mock adventure database

const MoodAdventureApp = () => {
    const adventureDatabase = adventureDatabaseData;
    const [currentMood, setCurrentMood] = useState(null);
    const [selectedIntensity, setSelectedIntensity] = useState(3);
    const [timeAvailable, setTimeAvailable] = useState('2-4 hours');
    const [adventures, setAdventures] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showMoodMenu, setShowMoodMenu] = useState(false);
    const [moodCategory, setMoodCategory] = useState('popular');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedAdventure, setSelectedAdventure] = useState(null)
    const [showAdventureDetail, setShowAdventureDetail] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchKeywords, setSearchKeywords] = useState('');

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
        // Outdoor/Nature Activities (energetic, adventurous, peaceful, reflective)
        outdoor: {
            keywords: ['outdoor', 'nature', 'fresh air', 'outside', 'open air', 'wilderness', 'natural', 'forest', 'trees', 'greenery', 'scenic', 'landscape'],
            searchTerms: ['parks', 'nature reserves', 'outdoor spaces', 'green areas', 'nature trails', 'forest areas'],
            moods: ['energetic', 'adventurous', 'peaceful', 'reflective', 'curious']
        },

        // Water-related Activities (peaceful, calm, reflective, love)
        water: {
            keywords: ['lake', 'water', 'waterfront', 'river', 'pond', 'beach', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'stream', 'cascade', 'waves'],
            searchTerms: ['lakes', 'waterfront', 'rivers', 'water bodies', 'beaches', 'reservoirs', 'fountains', 'water features'],
            moods: ['peaceful', 'calm', 'reflective', 'love', 'cozy']
        },

        // Garden/Botanical Activities (peaceful, calm, creative, love, cozy)
        garden: {
            keywords: ['garden', 'botanical', 'flowers', 'plants', 'greenery', 'bloom', 'flora', 'herb', 'roses', 'petals', 'fragrance', 'blossom', 'orchid', 'tulip'],
            searchTerms: ['botanical gardens', 'gardens', 'nurseries', 'flower gardens', 'parks with gardens', 'rose gardens', 'herb gardens'],
            moods: ['peaceful', 'calm', 'creative', 'love', 'cozy', 'reflective']
        },

        // Hills/Mountains/Elevation (energetic, adventurous, reflective, focused)
        elevation: {
            keywords: ['hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'sunrise', 'sunset', 'ridge', 'cliff', 'valley'],
            searchTerms: ['hills', 'mountains', 'trekking spots', 'hiking trails', 'viewpoints', 'peaks', 'climbing areas', 'scenic overlooks'],
            moods: ['energetic', 'adventurous', 'reflective', 'focused', 'curious']
        },

        // Parks/Recreation (happy, playful, social, peaceful)
        park: {
            keywords: ['park', 'playground', 'recreation', 'green space', 'picnic', 'lawn', 'field', 'grass', 'bench', 'shade', 'children', 'family'],
            searchTerms: ['parks', 'recreational areas', 'playgrounds', 'green spaces', 'picnic spots', 'family parks', 'community parks'],
            moods: ['happy', 'playful', 'social', 'peaceful', 'cozy']
        },

        // Sports/Fitness/Active (energetic, angry, stressed, focused)
        fitness: {
            keywords: ['parkour', 'fitness', 'gym', 'exercise', 'workout', 'training', 'sports', 'athletic', 'run', 'jog', 'sprint', 'active', 'cardio', 'strength', 'yoga', 'cycling'],
            searchTerms: ['fitness centers', 'gyms', 'sports complexes', 'athletic facilities', 'running tracks', 'outdoor gyms', 'yoga studios', 'cycling paths'],
            moods: ['energetic', 'angry', 'stressed', 'focused', 'adventurous']
        },

        // Cultural/Historical (curious, creative, reflective, focused)
        cultural: {
            keywords: ['museum', 'art', 'culture', 'history', 'heritage', 'monument', 'temple', 'palace', 'fort', 'ancient', 'gallery', 'exhibition', 'sculpture', 'architecture'],
            searchTerms: ['museums', 'art galleries', 'cultural centers', 'monuments', 'temples', 'historical sites', 'heritage buildings', 'art spaces'],
            moods: ['curious', 'creative', 'reflective', 'focused', 'calm']
        },

        // Learning/Reading/Quiet (peaceful, reflective, focused, tired, sad)
        quiet: {
            keywords: ['reading', 'study', 'quiet', 'peaceful', 'meditation', 'mindful', 'contemplat', 'reflect', 'library', 'book', 'silence', 'solitude', 'thinking'],
            searchTerms: ['libraries', 'quiet parks', 'meditation centers', 'study spaces', 'peaceful areas', 'reading rooms', 'quiet corners'],
            moods: ['peaceful', 'reflective', 'focused', 'tired', 'sad', 'heartbreak']
        },

        // Food/Dining (social, happy, cozy, love, stressed)
        food: {
            keywords: ['food', 'restaurant', 'cafe', 'dining', 'eat', 'meal', 'coffee', 'tea', 'cuisine', 'cooking', 'brunch', 'dessert', 'bakery', 'comfort food'],
            searchTerms: ['restaurants', 'cafes', 'food courts', 'dining areas', 'food markets', 'bakeries', 'coffee shops', 'comfort food places'],
            moods: ['social', 'happy', 'cozy', 'love', 'stressed', 'tired']
        },

        // Shopping/Market (social, happy, creative, curious, stressed)
        shopping: {
            keywords: ['shop', 'market', 'mall', 'store', 'buy', 'purchase', 'retail', 'bazaar', 'vendor', 'browse', 'window shopping', 'boutique'],
            searchTerms: ['shopping malls', 'markets', 'shopping areas', 'retail centers', 'bazaars', 'local markets', 'street shopping'],
            moods: ['social', 'happy', 'creative', 'curious', 'playful']
        },

        // Entertainment/Fun (happy, playful, social, creative)
        entertainment: {
            keywords: ['entertainment', 'fun', 'game', 'play', 'amusement', 'cinema', 'movie', 'theater', 'show', 'concert', 'music', 'dance', 'performance'],
            searchTerms: ['entertainment centers', 'amusement parks', 'cinemas', 'theaters', 'gaming centers', 'music venues', 'performance spaces'],
            moods: ['happy', 'playful', 'social', 'creative', 'curious']
        },

        // Adventure/Thrill (energetic, adventurous, angry, stressed)
        adventure: {
            keywords: ['adventure', 'thrill', 'exciting', 'adrenaline', 'extreme', 'challenge', 'daring', 'bold', 'risk', 'speed', 'intense'],
            searchTerms: ['adventure parks', 'activity centers', 'adventure sports', 'thrill rides', 'extreme sports', 'challenge courses'],
            moods: ['energetic', 'adventurous', 'angry', 'curious']
        },

        // Urban/City (curious, creative, social, focused)
        urban: {
            keywords: ['urban', 'city', 'downtown', 'street', 'building', 'architecture', 'metropolitan', 'district', 'skyline', 'plaza', 'square'],
            searchTerms: ['city centers', 'downtown areas', 'urban parks', 'city attractions', 'commercial districts', 'plazas', 'city squares'],
            moods: ['curious', 'creative', 'social', 'focused', 'adventurous']
        },

        // Wellness/Health (stressed, tired, sad, heartbreak, calm)
        wellness: {
            keywords: ['wellness', 'health', 'spa', 'relax', 'rejuvenat', 'heal', 'therapy', 'massage', 'yoga', 'mindfulness', 'breathing', 'restore'],
            searchTerms: ['wellness centers', 'spas', 'yoga studios', 'health centers', 'relaxation centers', 'meditation centers', 'therapy centers'],
            moods: ['stressed', 'tired', 'sad', 'heartbreak', 'calm', 'peaceful']
        },

        // NEW CATEGORIES FOR EXPANDED MOOD COVERAGE:

        // Cozy/Comfort (cozy, tired, sad, heartbreak, calm)
        cozy: {
            keywords: ['cozy', 'comfort', 'warm', 'intimate', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
            searchTerms: ['cozy cafes', 'intimate spaces', 'warm restaurants', 'comfort zones', 'cozy reading spots', 'intimate venues', 'sheltered areas'],
            moods: ['cozy', 'tired', 'sad', 'heartbreak', 'calm']
        },

        // Creative/Artistic (creative, curious, happy, playful)
        creative: {
            keywords: ['creative', 'art', 'craft', 'paint', 'draw', 'design', 'artistic', 'workshop', 'studio', 'pottery', 'photography', 'music', 'writing', 'expression'],
            searchTerms: ['art studios', 'craft centers', 'creative workshops', 'art cafes', 'pottery studios', 'photography spots', 'music venues', 'creative spaces'],
            moods: ['creative', 'curious', 'happy', 'playful', 'reflective']
        },

        // Social/Community (social, happy, playful, love)
        social: {
            keywords: ['social', 'community', 'friends', 'group', 'gathering', 'party', 'celebration', 'meet', 'connect', 'together', 'crowd', 'people', 'lively'],
            searchTerms: ['community centers', 'social clubs', 'gathering spaces', 'public squares', 'lively areas', 'popular hangouts', 'social venues'],
            moods: ['social', 'happy', 'playful', 'love', 'curious']
        },

        // Romantic/Love (love, cozy, peaceful, calm)
        romantic: {
            keywords: ['romantic', 'love', 'couple', 'date', 'intimate', 'candlelight', 'sunset', 'scenic', 'private', 'secluded', 'beautiful', 'charming'],
            searchTerms: ['romantic spots', 'couple destinations', 'scenic viewpoints', 'intimate cafes', 'beautiful gardens', 'sunset spots', 'romantic restaurants'],
            moods: ['love', 'cozy', 'peaceful', 'calm', 'happy']
        },

        // Energetic/Active (energetic, playful, happy, adventurous)
        energetic: {
            keywords: ['energetic', 'active', 'dynamic', 'vibrant', 'lively', 'bustling', 'upbeat', 'fast-paced', 'stimulating', 'invigorating'],
            searchTerms: ['active zones', 'bustling areas', 'energy centers', 'vibrant districts', 'lively venues', 'dynamic spaces', 'activity hubs'],
            moods: ['energetic', 'playful', 'happy', 'adventurous', 'social']
        },

        // Stress Relief (stressed, angry, tired, sad)
        stressRelief: {
            keywords: ['stress', 'relief', 'calm', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'pressure', 'overwhelming', 'breathe', 'escape'],
            searchTerms: ['stress relief centers', 'calming spaces', 'quiet retreats', 'peaceful areas', 'relaxation spots', 'tranquil zones', 'escape venues'],
            moods: ['stressed', 'angry', 'tired', 'overwhelmed']
        },

        // Healing/Recovery (sad, heartbreak, tired, stressed)
        healing: {
            keywords: ['healing', 'recovery', 'mend', 'restore', 'repair', 'comfort', 'support', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
            searchTerms: ['healing spaces', 'support centers', 'gentle environments', 'nurturing places', 'comfort zones', 'refuge areas', 'recovery spaces'],
            moods: ['sad', 'heartbreak', 'tired', 'stressed', 'calm']
        },

        // Focus/Productivity (focused, curious, reflective)
        focus: {
            keywords: ['focus', 'concentrate', 'productive', 'work', 'study', 'efficient', 'organized', 'clear', 'sharp', 'attentive', 'dedicated'],
            searchTerms: ['co-working spaces', 'study areas', 'quiet work zones', 'productive environments', 'focus centers', 'concentration spots', 'work-friendly cafes'],
            moods: ['focused', 'curious', 'reflective', 'calm']
        },

        // Music/Audio (playful, creative, happy, social, energetic)
        music: {
            keywords: ['music', 'audio', 'sound', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
            searchTerms: ['music venues', 'concert halls', 'live music spots', 'acoustic cafes', 'music studios', 'karaoke', 'dance clubs', 'performance spaces'],
            moods: ['playful', 'creative', 'happy', 'social', 'energetic']
        },

        // Night/Evening (cozy, romantic, social, creative, reflective)
        nightlife: {
            keywords: ['night', 'evening', 'dark', 'lights', 'illuminated', 'nightlife', 'late', 'moon', 'stars', 'ambient', 'atmospheric'],
            searchTerms: ['nightlife spots', 'evening venues', 'night markets', 'illuminated areas', 'late-night cafes', 'moonlight spots', 'night photography locations'],
            moods: ['cozy', 'love', 'social', 'creative', 'reflective']
        }
    };

    // Enhanced mood-to-category mapping for better personalization
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

    // Function to get prioritized categories for a specific mood
    const getCategoriesForMood = (moodId) => {
        return moodCategoryMappings[moodId] || ['park', 'outdoor', 'quiet'];
    };

    // Enhanced category scoring system
    const calculateCategoryRelevance = (adventure, categories, moodId) => {
        const moodCategories = getCategoriesForMood(moodId);
        const fullText = `${adventure.title} ${adventure.description}`.toLowerCase();

        return categories.map(category => {
            // Base score from keyword matches
            let score = category.priority;

            // Bonus for mood-specific categories
            if (moodCategories.includes(category.category)) {
                score += 5;
            }

            // Bonus for exact mood category match
            if (category.category === moodId) {
                score += 10;
            }

            // Additional contextual bonuses
            const config = keywordMappings[category.category];
            if (config && config.moods && config.moods.includes(moodId)) {
                score += 3;
            }

            return {
                ...category,
                relevanceScore: score
            };
        }).sort((a, b) => b.relevanceScore - a.relevanceScore);
    };

    const handleAdventureSelect = (adventure) => {
        console.log(currentMood, adventure, "wererwr");
        // Update adventureDatabaseData with whatToBring only when user selects an adventure
        if (currentMood && adventureDatabaseData[currentMood.id]) {
            const idx = adventureDatabaseData[currentMood.id].findIndex(
                adv => adv.title === adventure.title
            );
            if (idx !== -1) {
                adventureDatabaseData[currentMood.id][idx] = {
                    ...adventureDatabaseData[currentMood.id][idx],
                    ...adventure,
                    whatToBring: generateWhatToBring(
                        adventure,
                        currentMood,
                        keywordMappings,
                        moodCategoryMappings
                    )
                };
                setSelectedAdventure(adventureDatabaseData[currentMood.id][idx]);
            } else {
                setSelectedAdventure(adventure);
            }
        } else {
            setSelectedAdventure(adventure);
        }
        setShowAdventureDetail(true);
        // const smartQuery = generateSearchQuery(currentMood, adventure);
        // setSearchQuery(smartQuery);
        // setSearchResults([]);
    };

    // Generate smart search query based on mood and adventure
    const generateSearchQuery = (mood, adventure) => {
        const fullText = `${adventure.title} ${adventure.description}`.toLowerCase();
        const moodKeywords = mood ? [mood.name.toLowerCase()] : [];

        // Find matching categories
        const matchedCategories = [];
        Object.entries(keywordMappings).forEach(([category, config]) => {
            const hasMatch = config.keywords.some(keyword =>
                fullText.includes(keyword.toLowerCase())
            );
            if (hasMatch) {
                matchedCategories.push({ category, config, priority: config.keywords.filter(k => fullText.includes(k.toLowerCase())).length });
            }
        });

        // Sort by priority and get top category
        matchedCategories.sort((a, b) => b.priority - a.priority);
        const topCategory = matchedCategories[0];

        if (topCategory) {
            const searchTerm = topCategory.config.searchTerms[0];
            return `${searchTerm} in Bengaluru, Karnataka`;
        }

        // Fallback search query
        return `${adventure.type || 'attractions'} in Bengaluru, Karnataka`;
    };

    const getPrefilledSearchQuery = (selectedMood, adventureData, keywordMappings, moodCategoryMappings) => {
        console.log(selectedMood, moodCategoryMappings, "ewrwerwer")
        if (!selectedMood) return '';
        // const suggestions = generateSearchSuggestions(selectedMood, adventureData, keywordMappings, moodCategoryMappings);

        // Create contextual search queries based on mood
        const moodContexts = moodCategoryMappings

        const contextWords = moodContexts[selectedMood] || [];
        const combinedSuggestions = [...contextWords];

        // Return a natural search query
        return combinedSuggestions.slice(0, 2).join(' ');
    };

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
        setShowMoodMenu(false);
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


    const generateSmartKeywords1 = (selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings) => {
        if (!selectedMood || !selectedAdventure) return '';
        
        const keywords = new Set();
        const fullText = `${selectedAdventure.title} ${selectedAdventure.description}`.toLowerCase();
        
        // 1. Add mood-specific keywords
        const moodCategories = moodCategoryMappings[selectedMood.id] || [];
        moodCategories.forEach(category => {
            if (keywordMappings[category]) {
                // Add 2-3 most relevant keywords from each category
                keywordMappings[category].keywords.slice(0, 3).forEach(keyword => {
                    if (fullText.includes(keyword.toLowerCase())) {
                        keywords.add(keyword);
                    }
                });
            }
        });
        
        // 2. Extract keywords from adventure title and description
        Object.entries(keywordMappings).forEach(([category, config]) => {
            config.keywords.forEach(keyword => {
                if (fullText.includes(keyword.toLowerCase())) {
                    keywords.add(keyword);
                    // Add related search terms if keyword matches
                    if (config.searchTerms && config.searchTerms.length > 0) {
                        keywords.add(config.searchTerms[0].split(' ')[0]); // Add first word of search term
                    }
                }
            });
        });
        
        // // 3. Add location-specific keywords
        // if (selectedAdventure.location) {
        //     keywords.add(selectedAdventure.location.toLowerCase());
        // }
        
        // // 4. Add type-specific keywords
        // if (selectedAdventure.type) {
        //     keywords.add(selectedAdventure.type.toLowerCase());
        // }
        
        // // 5. Add mood name as keyword
        // keywords.add(selectedMood.name.toLowerCase());
        
        // Convert to array, remove duplicates, and limit to 8 keywords
        const keywordArray = Array.from(keywords).slice(0, 8);
        
        return keywordArray.join(', ');
    };


    

    const generateSmartKeywords = (selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings) => {
        if (!selectedMood || !selectedAdventure) return '';
        
        const keywords = new Set();
        // const fullText = `${selectedAdventure.title} ${selectedAdventure.description}`.toLowerCase();
        const fullText = `${selectedAdventure.title}`.toLowerCase();

        const fullDesc = `${selectedAdventure.description}`.toLowerCase();


        // Define semantic groups to avoid similar keywords
        const semanticGroups = {
            music: ['music', 'sound', 'audio', 'rhythm', 'beat', 'melody', 'song'],
            nature: ['trees', 'forest', 'greenery', 'plants', 'flora'],
            water: ['water', 'lake', 'river', 'pond', 'stream'],
            peaceful: ['peaceful', 'calm', 'quiet', 'tranquil', 'serene'],
            healing: ['healing', 'wellness', 'therapy', 'recovery', 'restore'],
            exercise: ['fitness', 'gym', 'workout', 'exercise', 'training'],
            outdoor: ['outdoor', 'outside', 'nature', 'wilderness'],
            social: ['social', 'community', 'friends', 'gathering', 'people'],
            creative: ['creative', 'art', 'artistic', 'craft', 'design'],
            food: ['food', 'restaurant', 'cafe', 'dining', 'meal'],
            urban: ['urban', 'city', 'downtown', 'metropolitan', 'district']
        };
        
        // Function to check if keyword belongs to any semantic group
        const getSemanticGroup = (keyword) => {
            for (const [group, terms] of Object.entries(semanticGroups)) {
                if (terms.includes(keyword.toLowerCase())) {
                    return group;
                }
            }
            return null;
        };
        
        // Track which semantic groups we've already added
        const usedGroups = new Set();
        const prioritizedKeywords = [];
        
        // 1. Add mood-specific keywords with priority scoring
        const moodCategories = moodCategoryMappings[selectedMood.id] || [];
        moodCategories.forEach((category, categoryIndex) => {
            if (keywordMappings[category]) {
                keywordMappings[category].keywords.forEach((keyword, keywordIndex) => {
                    if (fullText.includes(keyword.toLowerCase())) {
                        const priority = (moodCategories.length - categoryIndex) * 10 + (10 - keywordIndex);
                        prioritizedKeywords.push({ keyword, priority, source: 'mood' });
                    }
                });
            }
        });
        
        // 2. Extract keywords from adventure content with lower priority
        Object.entries(keywordMappings).forEach(([category, config]) => {
            config.keywords.forEach((keyword, index) => {
                if (fullText.includes(keyword.toLowerCase())) {
                    const priority = 5 - (index * 0.1); // Lower priority than mood keywords
                    prioritizedKeywords.push({ keyword, priority, source: 'title' });
                }
            });
        });

        // 2. Extract keywords from adventure description with even lower priority
        Object.entries(keywordMappings).forEach(([category, config]) => {
            config.keywords.forEach((keyword, index) => {
            if (fullDesc.includes(keyword.toLowerCase())) {
                const priority = 3 - (index * 0.05); // Even lower priority for description matches
                prioritizedKeywords.push({ keyword, priority, source: 'description' });
            }
            });
        });
        // 3. Sort by priority and add keywords avoiding semantic duplicates
        prioritizedKeywords
            .sort((a, b) => b.priority - a.priority)
            .forEach(({ keyword }) => {
                const semanticGroup = getSemanticGroup(keyword);
                
                if (semanticGroup) {
                    // If this semantic group hasn't been used, add the keyword
                    if (!usedGroups.has(semanticGroup)) {
                        keywords.add(keyword);
                        usedGroups.add(semanticGroup);
                    }
                } else {
                    // No semantic group, add directly
                    keywords.add(keyword);
                }
            });
        
        // 4. Add high-level category keywords if we need more and they don't conflict
        // if (keywords.size < 6) {
        //     const categoryKeywords = ['parks', 'gentle', 'activity',];
        //     categoryKeywords.forEach(keyword => {
        //         if (keywords.size < 8 && !getSemanticGroup(keyword)) {
        //             keywords.add(keyword);
        //         }
        //     });
        // }
        
        // 5. Final cleanup and formatting
        const keywordArray = Array.from(keywords)
            .filter(keyword => keyword.length > 2) // Remove very short keywords
            .slice(0, 5); // Limit to 8 keywords




            // if (keywordArray.includes('water')) {
            //     keywords.add('Towel');
            //     keywords.add('Swimwear');
            // }
            // if (keywordArray.includes('parkour') || keywordArray.includes('fitness') || keywordArray.includes('exercise')) {
            //     keywords.add('Sports shoes');
            //     keywords.add('Comfortable clothes');
            // }
            // if (keywordArray.includes('garden') || keywordArray.includes('outdoor') || keywordArray.includes('nature')) {
            //     keywords.add('Hat');
            //     keywords.add('Sunscreen');
            // }
            // if (keywordArray.includes('reading') || keywordArray.includes('quiet') || keywordArray.includes('library')) {
            //     keywords.add('Book');
            //     keywords.add('Notebook');
            // }
            // if (keywordArray.includes('food') || keywordArray.includes('picnic')) {
            //     keywords.add('Snacks');
            //     keywords.add('Reusable bottle');
            // }
            // if (keywordArray.includes('music')) {
            //     keywords.add('Headphones');
            // }
            // if (keywordArray.includes('photography') || keywordArray.includes('camera')) {
            //     keywords.add('Camera');
            // }
            // if (keywordArray.includes('hike') || keywordArray.includes('hill') || keywordArray.includes('mountain')) {
            //     keywords.add('Hiking shoes');
            //     keywords.add('Backpack');
            // }
            // if (keywordArray.includes('cozy')) {
            //     keywords.add('Sweater');
            //     keywords.add('Blanket');
            // }
            // if (keywordArray.includes('sunset') || keywordArray.includes('evening')) {
            //     keywords.add('Light jacket');
            // }
        // Avoid updating selectedAdventure here to prevent infinite loops.
        // setSelectedAdventure(adventureDatabaseData[currentMood.id][idx]);
        // console.log('Updated adventureDatabaseData:', adventureDatabaseData[currentMood.id][idx]);
            


// console.log('Updating whatToBring for:', selectedAdventure?.title, currentMood?.id);
// if (selectedAdventure && currentMood && adventureDatabaseData[currentMood.id]) {
//     const idx = adventureDatabaseData[currentMood.id].findIndex(
//         adv => adv.title === selectedAdventure.title
//     );
//     if (idx !== -1) {
//         adventureDatabaseData[currentMood.id][idx] = {
//             ...adventureDatabaseData[currentMood.id][idx],
//             ...selectedAdventure,
//             whatToBring: generateWhatToBring(
//                 selectedAdventure,
//                 currentMood,
//                 keywordMappings,
//                 moodCategoryMappings
//             )
//         };

//         setSelectedAdventure(adventureDatabaseData[currentMood.id][idx]);
//         console.log('Updated adventureDatabaseData:', adventureDatabaseData[currentMood.id][idx]);
//     }
// }
        
        return keywordArray.join(', ');





    };



    // Enhanced "What to Bring" recommendations based on keywords and adventure type
const generateWhatToBring = (adventure, selectedMood, keywordMappings, moodCategoryMappings) => {
    const recommendations = new Set();
    const fullText = `${adventure.title} ${adventure.description} ${adventure.vibe}`.toLowerCase();
    
    // Base recommendations for all adventures
    const baseItems = ['Positive attitude', 'Phone for navigation'];
    
    // Category-specific recommendations
    const categoryRecommendations = {
        // Physical Activities
        fitness: [
            'Comfortable athletic wear',
            'Water bottle',
            'Towel',
            'Energy snacks',
            'Athletic shoes',
            'Spare clothes'
        ],
        
        adventure: [
            'Comfortable clothes',
            'Water bottle',
            'First aid kit',
            'Protective gear',
            'Backup clothing',
            'Emergency contact info'
        ],
        
        elevation: [
            'Hiking shoes',
            'Water bottle',
            'Snacks',
            'Light jacket',
            'Sunscreen',
            'Hat or cap'
        ],
        
        // Peaceful Activities
        quiet: [
            'Book or journal',
            'Comfortable clothes',
            'Light snacks',
            'Blanket or cushion',
            'Headphones',
            'Notebook'
        ],
        
        wellness: [
            'Comfortable clothes',
            'Water bottle',
            'Yoga mat',
            'Towel',
            'Relaxing music',
            'Essential oils'
        ],
        
        // Social Activities
        social: [
            'Comfortable clothes',
            'Water bottle',
            'Camera',
            'Snacks to share',
            'Games or cards',
            'Portable charger'
        ],
        
        food: [
            'Comfortable clothes',
            'Wallet',
            'Camera',
            'Appetite',
            'Hand sanitizer',
            'Napkins'
        ],
        
        // Creative Activities
        creative: [
            'Notebook',
            'Pens or pencils',
            'Camera',
            'Comfortable clothes',
            'Art supplies',
            'Inspiration board'
        ],
        
        cultural: [
            'Comfortable walking shoes',
            'Camera',
            'Notebook',
            'Water bottle',
            'Small bag',
            'Guidebook or app'
        ],
        
        // Weather/Environment Specific
        outdoor: [
            'Weather-appropriate clothes',
            'Water bottle',
            'Sunscreen',
            'Hat',
            'Bug spray',
            'Comfortable shoes'
        ],
        
        water: [
            'Swimwear',
            'Towel',
            'Sunscreen',
            'Water shoes',
            'Waterproof bag',
            'Change of clothes'
        ],
        
        // Urban Activities
        urban: [
            'Comfortable walking shoes',
            'Portable charger',
            'Cash and cards',
            'Light jacket',
            'Camera',
            'Public transport card'
        ],
        
        // Time-specific
        nightlife: [
            'Comfortable clothes',
            'Light jacket',
            'Portable charger',
            'Cash',
            'Comfortable shoes',
            'Safety essentials'
        ],
        
        // Mood-specific additions
        romantic: [
            'Nice outfit',
            'Camera',
            'Small gift or flowers',
            'Cash for treats',
            'Comfortable shoes',
            'Soft music playlist'
        ],
        
        cozy: [
            'Comfortable clothes',
            'Blanket',
            'Warm drinks',
            'Cozy snacks',
            'Book or magazine',
            'Soft music'
        ]
    };
    
    // Intensity-based recommendations
    const intensityRecommendations = {
        high: ['Extra water', 'Energy snacks', 'Spare clothes', 'Recovery drink'],
        medium: ['Water bottle', 'Light snacks', 'Comfortable clothes'],
        low: ['Comfortable clothes', 'Light refreshments']
    };
    
    // Duration-based recommendations
    const getDurationItems = (duration) => {
        if (duration.includes('hour')) {
            const hours = parseInt(duration.match(/\d+/)[0]);
            if (hours >= 3) {
                return ['Snacks', 'Extra water', 'Comfortable seating'];
            } else if (hours >= 2) {
                return ['Water bottle', 'Light snacks'];
            }
        }
        return ['Water bottle'];
    };
    
    // Analyze adventure and get relevant categories
    const relevantCategories = [];
    
    // Get mood-based categories
    if (selectedMood && moodCategoryMappings[selectedMood.id]) {
        relevantCategories.push(...moodCategoryMappings[selectedMood.id]);
    }
    
    // Find categories based on keywords in adventure text
    Object.entries(keywordMappings).forEach(([category, config]) => {
        const matchingKeywords = config.keywords.filter(keyword => 
            fullText.includes(keyword.toLowerCase())
        );
        if (matchingKeywords.length > 0) {
            relevantCategories.push(category);
        }
    });
    
    // Add base items
    baseItems.forEach(item => recommendations.add(item));
    
    // Add category-specific items
    relevantCategories.forEach(category => {
        if (categoryRecommendations[category]) {
            categoryRecommendations[category].forEach(item => recommendations.add(item));
        }
    });
    
    // Add intensity-based items
    const intensityLevel = adventure.intensity >= 4 ? 'high' : adventure.intensity >= 2 ? 'medium' : 'low';
    if (intensityRecommendations[intensityLevel]) {
        intensityRecommendations[intensityLevel].forEach(item => recommendations.add(item));
    }
    
    // Add duration-based items
    if (adventure.duration) {
        getDurationItems(adventure.duration).forEach(item => recommendations.add(item));
    }
    
    // Special handling for specific adventure types
    if (fullText.includes('parkour')) {
        ['Protective gear', 'Athletic shoes', 'First aid kit', 'Gloves', 'Knee pads'].forEach(item => 
            recommendations.add(item)
        );
    }
    
    if (fullText.includes('urban')) {
        ['Comfortable walking shoes', 'Public transport info', 'City map or app'].forEach(item => 
            recommendations.add(item)
        );
    }
    
    // Remove duplicates and limit to 6-8 most relevant items
    const finalRecommendations = Array.from(recommendations)
        .filter(item => item.length > 0)
        .slice(0, 8);
    
    return finalRecommendations;
};








    

 // Generate keywords when adventure or mood changes
 useEffect(() => {
    if (currentMood && selectedAdventure) {
        const generatedKeywords = generateSmartKeywords(
            currentMood, 
            selectedAdventure, 
            keywordMappings, 
            moodCategoryMappings
        );
        setSearchKeywords(generatedKeywords);
    }
}, [currentMood, selectedAdventure]);
    // useEffect(() => {
    //     if (currentMood) {
    //         const prefilledQuery = getPrefilledSearchQuery(
    //             currentMood.id,
    //             adventureDatabase,
    //             keywordMappings,
    //             moodCategoryMappings
    //         );
    //         console.log(prefilledQuery, currentMood, "erwerwerw")
    //         setSearchQuery(prefilledQuery);
    //         //   onSearchQueryChange(prefilledQuery);
    //     }
    // }, [currentMood]);

    // const handleSearch = async (searchQuery) => {
    //     try {
    //       const apiKey = process.env.REACT_APP_OPENCAGE_KEY;
          
    //       if (!apiKey) {
    //         console.error("Missing OpenCage API key.");
    //         return [];
    //       }
      
    //       // Get user's current location first
    //       const getUserLocation = () => {
    //         return new Promise((resolve, reject) => {
    //           if ("geolocation" in navigator) {
    //             navigator.geolocation.getCurrentPosition(
    //               async (position) => {
    //                 try {
    //                   const { latitude, longitude } = position.coords;
                      
    //                   const response = await fetch(
    //                     `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
    //                   );
    //                   const data = await response.json();
      
    //                   if (!data.results || data.results.length === 0) {
    //                     console.error("No location results found");
    //                     resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
    //                     return;
    //                   }
      
    //                   const result = data.results[0];
    //                   const components = result.components;
                      
    //                   const city = components.city || 
    //                                components.town || 
    //                                components.village ||
    //                                components.municipality ||
    //                                components.district ||
    //                                components.county ||
    //                                components.suburb ||
    //                                components.neighbourhood ||
    //                                "Bengaluru";
                      
    //                   const state = components.state || "Karnataka";
                      
    //                   console.log("Detected location:", { city, state });
    //                   resolve({ city, state });
                      
    //                 } catch (err) {
    //                   console.error("Error in location processing:", err);
    //                   resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
    //                 }
    //               },
    //               (error) => {
    //                 console.error("Geolocation error:", error.message);
    //                 resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
    //               }
    //             );
    //           } else {
    //             console.error("Geolocation not supported");
    //             resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
    //           }
    //         });
    //       };
      
    //       // Get location first
    //       const { city, state } = await getUserLocation();
      
    //       // Function to analyze search query and extract relevant categories
    //       const analyzeSearchForCategories = (query) => {
    //         const searchText = query.toLowerCase();
    //         const matchedCategories = [];
            
    //         Object.entries(keywordMappings).forEach(([category, config]) => {
    //           const hasMatch = config.keywords.some(keyword => 
    //             searchText.includes(keyword.toLowerCase())
    //           );
              
    //           if (hasMatch) {
    //             matchedCategories.push({
    //               category,
    //               searchTerms: config.searchTerms,
    //               priority: config.keywords.filter(keyword => 
    //                 searchText.includes(keyword.toLowerCase())
    //               ).length
    //             });
    //           }
    //         });
            
    //         return matchedCategories.sort((a, b) => b.priority - a.priority);
    //       };
      
    //       // Search for places based on query
    //       const searchPlacesForQuery = async (query, detectedCity, detectedState) => {
    //         try {
    //           const categories = analyzeSearchForCategories(query);
              
    //           if (categories.length === 0) {
    //             // Direct search if no categories match
    //             const directSearchQuery = `${query} in ${detectedCity}, ${detectedState}`;
                
    //             const searchResponse = await fetch(
    //               `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&countrycode=IN`
    //             );
    //             const searchData = await searchResponse.json();
                
    //             if (searchData.results && searchData.results.length > 0) {
    //               return searchData.results
    //                 .filter(result => {
    //                   const resultState = result.components?.state;
    //                   return resultState && (
    //                     resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
    //                     detectedState.toLowerCase().includes('karnataka')
    //                   );
    //                 })
    //                 .slice(0, 5)
    //                 .map(result => ({
    //                   address: result.formatted,
    //                   gettingThere: result.components?.road
    //                     ? `Accessible via ${result.components.road}. Check local transit for details.`
    //                     : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
    //                   parking: "Street parking typically available. Check for any time restrictions or meters.",
    //                   category: "search result",
    //                   coordinates: {
    //                     lat: result.geometry.lat,
    //                     lng: result.geometry.lng
    //                   }
    //                 }));
    //             }
    //             return [];
    //           }
      
    //           const locationResults = [];
    //           const maxCategories = 2; // Limit to avoid too many API calls
              
    //           // Search using top categories
    //           for (const categoryConfig of categories.slice(0, maxCategories)) {
    //             for (const searchTerm of categoryConfig.searchTerms.slice(0, 2)) {
    //               const searchQuery = `${searchTerm} ${query} in ${detectedCity}, ${detectedState}`;
                  
    //               try {
    //                 const searchResponse = await fetch(
    //                   `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(searchQuery)}&key=${apiKey}&limit=3&countrycode=IN`
    //                 );
    //                 const searchData = await searchResponse.json();
      
    //                 if (searchData.results && searchData.results.length > 0) {
    //                   const relevantResults = searchData.results
    //                     .filter(result => {
    //                       const resultState = result.components?.state;
    //                       return resultState && (
    //                         resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
    //                         detectedState.toLowerCase().includes('karnataka')
    //                       );
    //                     })
    //                     .slice(0, 2)
    //                     .map(result => ({
    //                       address: result.formatted,
    //                       gettingThere: result.components?.road
    //                         ? `Accessible via ${result.components.road}. Check local transit for details.`
    //                         : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
    //                       parking: "Street parking typically available. Check for any time restrictions or meters.",
    //                       category: categoryConfig.category,
    //                       searchTerm: searchTerm,
    //                       coordinates: {
    //                         lat: result.geometry.lat,
    //                         lng: result.geometry.lng
    //                       }
    //                     }));
      
    //                   locationResults.push(...relevantResults);
    //                 }
    //               } catch (searchError) {
    //                 console.error(`Error searching for ${searchQuery}:`, searchError);
    //               }
      
    //               // Rate limiting
    //               await new Promise(resolve => setTimeout(resolve, 200));
    //             }
    //           }
      
    //           // Remove duplicates and return top 5
    //           const uniqueResults = locationResults
    //             .filter((result, index, self) =>
    //               index === self.findIndex(r => r.address === result.address)
    //             )
    //             .slice(0, 5);
      
    //           return uniqueResults;
      
    //         } catch (error) {
    //           console.error("Error searching for places:", error);
    //           return [];
    //         }
    //       };
      
    //       // Perform the search with detected location
    //       const results = await searchPlacesForQuery(searchQuery, city, state);
          
    //       console.log("Search results:", results);
    //       return results;
      
    //     } catch (error) {
    //       console.error("Error in handleSearch:", error);
    //       return [];
    //     }
    //   };



    // useEffect(() => {
    //     const getLocationName = async (position) => {
    //         try {
    //             const { latitude, longitude } = position.coords;
    //             const apiKey = "95d7ec987ea346d19d9b4983effc8d36" || process.env.REACT_APP_OPENCAGE_KEY;

    //             if (!apiKey) {
    //                 console.error("Missing OpenCage API key.");
    //                 return;
    //             }

    //               // Use only the environment variable for the API key
    //               const key = process.env.REACT_APP_OPENCAGE_KEY;
    //               if (!key) {
    //                 console.error("Missing OpenCage API key.");
    //                 return { city: "Bengaluru", state: "Karnataka" };
    //               }
    //               const response = await fetch(
    //                 `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`
    //               );
    //             const data = await response.json();

    //             if (!data.results || data.results.length === 0) {
    //                 console.error("No location results found");
    //                 return;
    //             }

    //             const result = data.results[0];
    //             const components = result.components;

    //             const city = components.city ||
    //                 components.town ||
    //                 components.village ||
    //                 components.municipality ||
    //                 components.district ||
    //                 components.county ||
    //                 components.suburb ||
    //                 components.neighbourhood ||
    //                 "Bengaluru";

    //             const state = components.state || "Karnataka";
    //             const formatted = result.formatted;

    //             console.log("Detected location:", { city, state, formatted });

    //             // Function to analyze text and extract relevant categories
    //             const analyzeTextForCategories = (title, description, moodId = null) => {
    //                 const fullText = `${title} ${description}`.toLowerCase();
    //                 const matchedCategories = [];

    //                 Object.entries(keywordMappings).forEach(([category, config]) => {
    //                     const hasMatch = config.keywords.some(keyword =>
    //                         fullText.includes(keyword.toLowerCase())
    //                     );

    //                     if (hasMatch) {
    //                         matchedCategories.push({
    //                             category,
    //                             searchTerms: config.searchTerms,
    //                             priority: config.keywords.filter(keyword =>
    //                                 fullText.includes(keyword.toLowerCase())
    //                             ).length // Higher priority for more keyword matches
    //                         });
    //                     }
    //                 });

    //                 // If we have a mood, prioritize mood-specific categories
    //                 if (moodId && matchedCategories.length > 0) {
    //                     return calculateCategoryRelevance({ title, description }, matchedCategories, moodId);
    //                 }

    //                 // Sort by priority (most matches first)
    //                 return matchedCategories.sort((a, b) => b.priority - a.priority);
    //             };

    //             // Function to search for specific places based on adventure analysis
    //             const searchPlacesForAdventure = async (adventure, detectedCity, detectedState, moodId = null) => {
    //                 try {
    //                     // Analyze the adventure to get relevant categories
    //                     const categories = analyzeTextForCategories(adventure.title, adventure.description, moodId);

    //                     console.log(`Analyzing "${adventure.title}" for mood ${moodId}:`, categories.map(c => c.category));

    //                     if (categories.length === 0) {
    //                         // If no keywords match, use mood-specific fallback categories
    //                         const moodCategories = getCategoriesForMood(moodId || 'happy');
    //                         const fallbackCategory = moodCategories[0];
    //                         const fallbackConfig = keywordMappings[fallbackCategory];

    //                         categories.push({
    //                             category: fallbackCategory,
    //                             searchTerms: fallbackConfig ? fallbackConfig.searchTerms : ['attractions', 'places of interest', 'recreational areas'],
    //                             priority: 1
    //                         });
    //                     }

    //                     const locationResults = [];
    //                     const maxCategoriesPerAdventure = 3; // Limit to avoid too many API calls

    //                     // Search using top categories
    //                     for (const categoryConfig of categories.slice(0, maxCategoriesPerAdventure)) {
    //                         for (const searchTerm of categoryConfig.searchTerms.slice(0, 2)) { // Limit search terms per category
    //                             const searchQuery = `${searchTerm} in ${detectedCity}, ${detectedState}`;
    //                             console.log("Searching for:", searchQuery);

    //                             try {
    //                                 const searchResponse = await fetch(
    //                                     `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(searchQuery)}&key=${apiKey}&limit=3&countrycode=IN`
    //                                 );
    //                                 const searchData = await searchResponse.json();

    //                                 if (searchData.results && searchData.results.length > 0) {
    //                                     const relevantResults = searchData.results
    //                                         .filter(result => {
    //                                             const resultState = result.components?.state;
    //                                             return resultState && (
    //                                                 resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
    //                                                 detectedState.toLowerCase().includes('karnataka')
    //                                             );
    //                                         })
    //                                         .slice(0, 2)
    //                                         .map(result => ({
    //                                             address: result.formatted,
    //                                             gettingThere: result.components?.road
    //                                                 ? `Accessible via ${result.components.road}. Check local transit for details.`
    //                                                 : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
    //                                             parking: "Street parking typically available. Check for any time restrictions or meters.",
    //                                             category: categoryConfig.category,
    //                                             searchTerm: searchTerm,
    //                                             coordinates: {
    //                                                 lat: result.geometry.lat,
    //                                                 lng: result.geometry.lng
    //                                             },
    //                                             moodRelevance: categoryConfig.relevanceScore || 1
    //                                         }));

    //                                     locationResults.push(...relevantResults);
    //                                 }
    //                             } catch (searchError) {
    //                                 console.error(`Error searching for ${searchQuery}:`, searchError);
    //                             }

    //                             // Rate limiting
    //                             await new Promise(resolve => setTimeout(resolve, 200));
    //                         }
    //                     }

    //                     // Remove duplicates and sort by mood relevance
    //                     const uniqueResults = locationResults
    //                         .filter((result, index, self) =>
    //                             index === self.findIndex(r => r.address === result.address)
    //                         )
    //                         .sort((a, b) => (b.moodRelevance || 1) - (a.moodRelevance || 1))
    //                         .slice(0, 5);

    //                     // If no results found, provide mood-specific fallback
    //                     if (uniqueResults.length === 0) {
    //                         return getFallbackLocations(adventure, detectedCity, detectedState, categories, moodId);
    //                     }

    //                     return uniqueResults;

    //                 } catch (error) {
    //                     console.error("Error searching for places:", error);
    //                     return getFallbackLocations(adventure, detectedCity, detectedState, [], moodId);
    //                 }
    //             };

    //             // Enhanced fallback system based on categories and moods
    //             const getFallbackLocations = (adventure, detectedCity, detectedState, categories, moodId = null) => {
    //                 const enhancedFallbackMap = {
    //                     // Water-related fallbacks
    //                     water: [
    //                         { address: "Ulsoor Lake, Bengaluru, Karnataka", gettingThere: "Near MG Road Metro Station", parking: "Street parking available", category: "lake", moods: ['peaceful', 'calm', 'reflective', 'love'] },
    //                         { address: "Sankey Tank, Bengaluru, Karnataka", gettingThere: "Accessible via Sankey Road", parking: "Limited street parking", category: "lake", moods: ['peaceful', 'calm', 'reflective'] },
    //                         { address: "Hebbal Lake, Bengaluru, Karnataka", gettingThere: "Near Hebbal flyover", parking: "Roadside parking available", category: "lake", moods: ['calm', 'peaceful'] }
    //                     ],

    //                     // Garden/Nature fallbacks
    //                     garden: [
    //                         { address: "Lalbagh Botanical Garden, Bengaluru, Karnataka", gettingThere: "Lalbagh Metro Station", parking: "Paid parking inside", category: "garden", moods: ['peaceful', 'calm', 'creative', 'love', 'cozy'] },
    //                         { address: "Cubbon Park, Bengaluru, Karnataka", gettingThere: "Cubbon Park Metro Station", parking: "Limited parking, metro recommended", category: "park", moods: ['peaceful', 'happy', 'playful', 'social'] },
    //                         { address: "Bannerghatta Butterfly Park, Bengaluru, Karnataka", gettingThere: "45 minutes by car from city center", parking: "Ample parking available", category: "garden", moods: ['curious', 'creative', 'peaceful'] }
    //                     ],

    //                     // Elevation/Adventure fallbacks
    //                     elevation: [
    //                         { address: "Nandi Hills, Chikkaballapur, Karnataka", gettingThere: "60km from Bengaluru by car", parking: "Ample parking available", category: "hill", moods: ['energetic', 'adventurous', 'reflective', 'focused'] },
    //                         { address: "Savandurga Hills, Magadi, Karnataka", gettingThere: "50km from Bengaluru by car", parking: "Parking at base", category: "hill", moods: ['adventurous', 'energetic', 'focused'] },
    //                         { address: "Skandagiri Hills, Chikkaballapur, Karnataka", gettingThere: "70km from Bengaluru", parking: "Base parking available", category: "hill", moods: ['adventurous', 'energetic', 'reflective'] }
    //                     ],

    //                     // Fitness/Active fallbacks
    //                     fitness: [
    //                         { address: "Cubbon Park, Bengaluru, Karnataka", gettingThere: "Cubbon Park Metro Station", parking: "Metro recommended", category: "park", moods: ['energetic', 'angry', 'stressed', 'focused'] },
    //                         { address: "Kanteerava Stadium, Bengaluru, Karnataka", gettingThere: "Multiple bus routes available", parking: "Stadium parking available", category: "sports", moods: ['energetic', 'focused', 'angry'] },
    //                         { address: "Jayanagar 4th Block Park, Bengaluru, Karnataka", gettingThere: "Jayanagar Metro Station", parking: "Street parking", category: "park", moods: ['energetic', 'stressed'] }
    //                     ],

    //                     // Quiet/Peaceful fallbacks
    //                     quiet: [
    //                         { address: "State Central Library, Bengaluru, Karnataka", gettingThere: "Near Cubbon Park Metro", parking: "Limited parking nearby", category: "library", moods: ['peaceful', 'reflective', 'focused', 'tired', 'sad'] },
    //                         { address: "Bugle Rock Park, Bengaluru, Karnataka", gettingThere: "Basavanagudi area", parking: "Street parking", category: "park", moods: ['peaceful', 'reflective', 'calm'] },
    //                         { address: "Atta Galinja, Bengaluru, Karnataka", gettingThere: "Near Lalbagh", parking: "Street parking", category: "quiet spot", moods: ['reflective', 'peaceful', 'sad', 'heartbreak'] }
    //                     ],

    //                     // Social/Entertainment fallbacks
    //                     social: [
    //                         { address: "Brigade Road, Bengaluru, Karnataka", gettingThere: "MG Road Metro Station", parking: "Paid parking available", category: "shopping street", moods: ['social', 'happy', 'playful', 'curious'] },
    //                         { address: "Phoenix MarketCity Mall, Bengaluru, Karnataka", gettingThere: "Whitefield area", parking: "Mall parking available", category: "mall", moods: ['social', 'happy', 'shopping'] },
    //                         { address: "Indiranagar 100 Feet Road, Bengaluru, Karnataka", gettingThere: "Multiple bus routes", parking: "Street parking", category: "social hub", moods: ['social', 'happy', 'nightlife'] }
    //                     ],

    //                     // Cultural/Creative fallbacks
    //                     cultural: [
    //                         { address: "National Gallery of Modern Art, Bengaluru, Karnataka", gettingThere: "Near Palace Road", parking: "Limited parking", category: "gallery", moods: ['curious', 'creative', 'reflective', 'focused'] },
    //                         { address: "Bangalore Palace, Bengaluru, Karnataka", gettingThere: "Palace Road", parking: "Visitor parking available", category: "palace", moods: ['curious', 'creative', 'focused'] },
    //                         { address: "Visvesvaraya Industrial & Technological Museum, Bengaluru, Karnataka", gettingThere: "Near Cubbon Park", parking: "Limited parking", category: "museum", moods: ['curious', 'focused', 'creative'] }
    //                     ],

    //                     // Cozy/Comfort fallbacks
    //                     cozy: [
    //                         { address: "Cafe Coffee Day, Brigade Road, Bengaluru, Karnataka", gettingThere: "MG Road Metro", parking: "Paid parking nearby", category: "cafe", moods: ['cozy', 'tired', 'social', 'calm'] },
    //                         { address: "Matteo Coffea, Indiranagar, Bengaluru, Karnataka", gettingThere: "Indiranagar Metro", parking: "Street parking", category: "cozy cafe", moods: ['cozy', 'calm', 'reflective'] },
    //                         { address: "The Bookworm, Basavanagudi, Bengaluru, Karnataka", gettingThere: "South End Circle Metro", parking: "Street parking", category: "bookstore cafe", moods: ['cozy', 'reflective', 'peaceful'] }
    //                     ],

    //                     // Wellness/Healing fallbacks
    //                     wellness: [
    //                         { address: "Art of Living Ashram, Bengaluru, Karnataka", gettingThere: "Kanakapura Road", parking: "Ashram parking", category: "spiritual center", moods: ['stressed', 'tired', 'sad', 'heartbreak', 'calm'] },
    //                         { address: "Yoga Point, Cubbon Park, Bengaluru, Karnataka", gettingThere: "Cubbon Park Metro", parking: "Metro recommended", category: "yoga spot", moods: ['stressed', 'calm', 'wellness'] },
    //                         { address: "ISKCON Temple, Bengaluru, Karnataka", gettingThere: "Multiple bus routes to Rajajinagar", parking: "Temple parking available", category: "temple", moods: ['peaceful', 'reflective', 'healing'] }
    //                     ]
    //                 };

    //                 // Get mood-specific categories for better fallback selection
    //                 const moodCategories = moodId ? getCategoriesForMood(moodId) : ['park'];

    //                 // Try to find fallbacks that match the mood
    //                 for (const category of moodCategories) {
    //                     const categoryFallbacks = enhancedFallbackMap[category];
    //                     if (categoryFallbacks) {
    //                         // Filter fallbacks that are relevant to the current mood
    //                         const moodRelevantFallbacks = categoryFallbacks.filter(fallback =>
    //                             !fallback.moods || fallback.moods.includes(moodId)
    //                         );

    //                         if (moodRelevantFallbacks.length > 0) {
    //                             return moodRelevantFallbacks.slice(0, 3);
    //                         }

    //                         // Return general fallbacks if no mood-specific ones found
    //                         return categoryFallbacks.slice(0, 3);
    //                     }
    //                 }

    //                 // Primary category fallback
    //                 const primaryCategory = categories.length > 0 ? categories[0].category : 'park';
    //                 const fallbacks = enhancedFallbackMap[primaryCategory] || enhancedFallbackMap['garden'] || [];

    //                 if (fallbacks.length > 0) {
    //                     return fallbacks.slice(0, 3);
    //                 }

    //                 // Ultimate fallback
    //                 return [{
    //                     address: `${detectedCity}, ${detectedState}`,
    //                     gettingThere: "Best accessed by car or public transport. Check local transit apps for real-time directions.",
    //                     parking: "Street parking typically available. Check for any time restrictions or meters.",
    //                     category: "general area",
    //                     moods: ['general']
    //                 }];
    //             };

    //             // Your adventure database - now with mood-aware location assignment
    //             let abc1 = {
    //                 energetic: [
    //                     {
    //                         title: "Urban Parkour Trail",
    //                         description: "Navigate the city like never before with guided parkour spots and safe practice areas",
    //                         duration: "1-2 hours",
    //                         intensity: 5,
    //                         location: "Downtown District",
    //                         type: "Active Adventure",
    //                         vibe: "Adrenaline rush through urban exploration",
    //                         tags: { setting: "outdoor", cost: "free", group: "either" },
    //                         gettingStarted: ["Find a comfortable spot to begin", "Take a moment to embrace the peaceful energy", "Follow your instincts and enjoy the experience"],
    //                         locationAndDirection: [],
    //                         whatToBring: ['Comfortable clothes', 'Water bottle', 'Positive attitude']
    //                     },
    //                     {
    //                         title: "Sunrise Hill Sprint",
    //                         description: "Beat the crowd with an early morning hike to catch golden hour views",
    //                         duration: "2-3 hours",
    //                         intensity: 4,
    //                         location: "Nature Reserve",
    //                         type: "Outdoor Challenge",
    //                         vibe: "Fresh air and natural endorphins",
    //                         tags: { setting: "outdoor", cost: "free", group: "either" },
    //                         locationAndDirection: []
    //                     }
    //                 ],
    //                 peaceful: [
    //                     {
    //                         title: "Secret Garden Meditation",
    //                         description: "Hidden botanical spaces perfect for mindful moments and quiet reflection",
    //                         duration: "1-2 hours",
    //                         intensity: 1,
    //                         location: "Botanical Gardens",
    //                         type: "Mindful Escape",
    //                         vibe: "Nature's embrace for inner peace",
    //                         tags: { setting: "outdoor", cost: "free", group: "solo" },
    //                         locationAndDirection: []
    //                     },
    //                     {
    //                         title: "Lakeside Reading Nook",
    //                         description: "Discover waterfront spots with perfect reading light and gentle sounds",
    //                         duration: "2-4 hours",
    //                         intensity: 1,
    //                         location: "City Lake",
    //                         type: "Contemplative Space",
    //                         vibe: "Literary sanctuary by the water",
    //                         tags: { setting: "outdoor", cost: "free", group: "solo" },
    //                         locationAndDirection: []
    //                     }
    //                 ],
    //                 // Add other mood categories as needed...
    //                 happy: [
    //                     {
    //                         title: "Street Art Discovery Walk",
    //                         description: "Explore colorful murals and street art while soaking up the city's creative energy",
    //                         duration: "2-3 hours",
    //                         intensity: 2,
    //                         location: "Arts District",
    //                         type: "Cultural Adventure",
    //                         vibe: "Vibrant creativity and urban culture",
    //                         tags: { setting: "outdoor", cost: "free", group: "either" },
    //                         locationAndDirection: []
    //                     }
    //                 ],
    //                 // Continue with other moods...
    //             };

    //             let abc = { ...abc1 };

    //             // Update adventures with mood-aware location-specific data
    //             const updateAdventuresPromises = Object.keys(abc).map(async (moodKey) => {
    //                 const updatedAdventures = await Promise.all(
    //                     abc[moodKey].map(async (adventure) => {
    //                         const locationResults = await searchPlacesForAdventure(adventure, city, state, moodKey);

    //                         return {
    //                             ...adventure,
    //                             location: `${city}, ${state}`,
    //                             locationAndDirection: locationResults,
    //                             moodOptimized: true // Flag to indicate this has been mood-optimized
    //                         };
    //                     })
    //                 );

    //                 abc[moodKey] = updatedAdventures;
    //             });

    //             // Wait for all adventures to be updated
    //             await Promise.all(updateAdventuresPromises);

    //             // Only update adventures if currentMood is set and exists in abc
    //             if (currentMood && abc[currentMood.id]) {
    //                 setAdventures(abc[currentMood.id]);
    //             }

    //             console.log("Updated Adventures with mood-aware location-specific data:", abc);

    //         } catch (err) {
    //             console.error("Error in geolocation processing:", err);
    //         }
    //     };

    //     if ("geolocation" in navigator) {
    //         navigator.geolocation.getCurrentPosition(
    //             getLocationName,
    //             (error) => console.error("Geolocation error:", error.message)
    //         );
    //     } else {
    //         console.error("Geolocation not supported");
    //     }
    // }, []);

    const handleSearch12 = async (searchQuery) => {
        try {
          const apiKey = "20fdf466350e4924abc2708b462ed0fc"||process.env.REACT_APP_OPENCAGE_KEY;
          
          if (!apiKey) {
            console.error("Missing OpenCage API key. Please set REACT_APP_OPENCAGE_KEY in your environment.");
            return [];
          }
      
          // Get user's current location first
          const getUserLocation = () => {
            return new Promise((resolve) => {
              if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                  async (position) => {
                    try {
                      const { latitude, longitude } = position.coords;
                      console.log(latitude, longitude, "lat long")
                      
                      const response = await fetch(
                        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
                      );
                      if (response.status === 403) {
                        console.error("OpenCage API returned 403 Forbidden. Check your API key and usage limits.");
                        resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                        return;
                      }
                      const data = await response.json();
      
                      if (!data.results || data.results.length === 0) {
                        console.error("No location results found");
                        resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                        return;
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
                      
                      const state = components.state || "Karnataka";
                      
                      console.log("Detected location:", { city, state });
                      resolve({ city, state });
                      
                    } 
                    
                    catch (err) {
                      console.error("Error in location processing:", err);
                      resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                    }
                  },
                  (error) => {
                    console.error("Geolocation error:", error.message);
                    resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                  }
                );
              } 
              
              
              
              else {
                console.error("Geolocation not supported");
                resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
              }
            });
          };
      
          // Get location first
          const { city, state } = await getUserLocation();
      
          // Function to analyze search query and extract relevant categories with enhanced prioritization
          const analyzeSearchForCategories = (query) => {
            const searchText = query.toLowerCase();
            const words = searchText.split(/\s+/).filter(word => word.length > 2); // Get meaningful words
            const matchedCategories = [];
            
            // Enhanced keyword matching with semantic understanding
            Object.entries(keywordMappings).forEach(([category, config]) => {
              let categoryScore = 0;
              let matchedKeywords = [];
              
              config.keywords.forEach(keyword => {
                const keywordLower = keyword.toLowerCase();
                
                // Direct match (highest priority)
                if (searchText.includes(keywordLower)) {
                  categoryScore += 10;
                  matchedKeywords.push({ keyword, score: 10, type: 'direct' });
                  return;
                }
                
                // Word-level matching with semantic similarity
                words.forEach(word => {
                  // Exact word match
                  if (word === keywordLower) {
                    categoryScore += 8;
                    matchedKeywords.push({ keyword, score: 8, type: 'exact_word' });
                  }
                  // Partial word match (contains)
                  else if (word.includes(keywordLower) || keywordLower.includes(word)) {
                    categoryScore += 5;
                    matchedKeywords.push({ keyword, score: 5, type: 'partial' });
                  }
                  // Semantic similarity (basic)
                  else if (getSemanticSimilarity(word, keywordLower) > 0.7) {
                    categoryScore += 6;
                    matchedKeywords.push({ keyword, score: 6, type: 'semantic' });
                  }
                });
              });
              
              if (categoryScore > 0) {
                matchedCategories.push({
                  category,
                  searchTerms: config.searchTerms,
                  priority: categoryScore,
                  matchedKeywords,
                  relevanceScore: calculateRelevanceScore(category, words)
                });
              }
            });
            
            // Sort by combined priority and relevance, then limit to top 3
            return matchedCategories
              .sort((a, b) => {
                const scoreA = a.priority + (a.relevanceScore || 0);
                const scoreB = b.priority + (b.relevanceScore || 0);
                return scoreB - scoreA;
              })
              .slice(0, 3);
          };
      
          // Enhanced semantic similarity function
          const getSemanticSimilarity = (word1, word2) => {
            // Basic semantic similarity mapping
            const semanticGroups = {
              water: ['lake', 'river', 'pond', 'waterfall', 'stream', 'beach', 'pool'],
              nature: ['park', 'garden', 'forest', 'trees', 'green', 'outdoor', 'natural'],
              activity: ['sports', 'exercise', 'fitness', 'workout', 'running', 'cycling', 'walking'],
              food: ['restaurant', 'cafe', 'dining', 'eat', 'meal', 'food', 'snack'],
              culture: ['museum', 'art', 'gallery', 'theater', 'cultural', 'heritage', 'history'],
              shopping: ['mall', 'market', 'shop', 'store', 'shopping', 'buy', 'purchase'],
              relaxation: ['spa', 'massage', 'peaceful', 'quiet', 'calm', 'meditation', 'zen'],
              adventure: ['hiking', 'climbing', 'trek', 'adventure', 'explore', 'discover'],
              social: ['bar', 'pub', 'club', 'social', 'meetup', 'gathering', 'community'],
              entertainment: ['movie', 'cinema', 'show', 'entertainment', 'fun', 'amusement']
            };
            
            for (const [group, words] of Object.entries(semanticGroups)) {
              if (words.includes(word1) && words.includes(word2)) {
                return 0.8; // High similarity within same semantic group
              }
            }
            
            // Levenshtein distance for string similarity
            const distance = getLevenshteinDistance(word1, word2);
            const maxLength = Math.max(word1.length, word2.length);
            return 1 - (distance / maxLength);
          };
      
          // Calculate relevance score based on category and search context
          const calculateRelevanceScore = (category, searchWords) => {
            const contextBoosts = {
              // Time-based context
              morning: { elevation: 2, fitness: 2, garden: 1 },
              evening: { social: 2, food: 2, entertainment: 1 },
              night: { entertainment: 3, social: 2, food: 1 },
              
              // Activity context
              alone: { quiet: 3, garden: 2, cultural: 2 },
              together: { social: 3, entertainment: 2, food: 2 },
              family: { garden: 2, entertainment: 2, cultural: 1 },
              
              // Mood context
              relax: { quiet: 3, garden: 2, wellness: 2 },
              active: { fitness: 3, elevation: 2, adventure: 2 },
              explore: { cultural: 2, adventure: 2, social: 1 }
            };
            
            let relevanceScore = 0;
            
            searchWords.forEach(word => {
              if (contextBoosts[word] && contextBoosts[word][category]) {
                relevanceScore += contextBoosts[word][category];
              }
            });
            
            return relevanceScore;
          };
      
          // Levenshtein distance helper
          const getLevenshteinDistance = (str1, str2) => {
            const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
            
            for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
            for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
            
            for (let j = 1; j <= str2.length; j++) {
              for (let i = 1; i <= str1.length; i++) {
                if (str1[i - 1] === str2[j - 1]) {
                  matrix[j][i] = matrix[j - 1][i - 1];
                } else {
                  matrix[j][i] = Math.min(
                    matrix[j - 1][i - 1] + 1,
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1
                  );
                }
              }
            }
            
            return matrix[str2.length][str1.length];
          };
      
          // Search for places based on query
          const searchPlacesForQuery = async (query, detectedCity, detectedState) => {
            try {
              const categories = analyzeSearchForCategories(query);
              
              if (categories.length === 0) {
                // Direct search if no categories match
                const directSearchQuery = `${query} in ${detectedCity}, ${detectedState}`;
                
                const searchResponse = await fetch(
                  `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&countrycode=IN`
                );
                const searchData = await searchResponse.json();
                
                if (searchData.results && searchData.results.length > 0) {
                  return searchData.results
                    .filter(result => {
                      const resultState = result.components?.state;
                      return resultState && (
                        resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
                        detectedState.toLowerCase().includes('karnataka')
                      );
                    })
                    .slice(0, 5)
                    .map(result => ({
                      address: result.formatted,
                      gettingThere: result.components?.road
                        ? `Accessible via ${result.components.road}. Check local transit for details.`
                        : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
                      parking: "Street parking typically available. Check for any time restrictions or meters.",
                      category: "search result",
                      coordinates: {
                        lat: result.geometry.lat,
                        lng: result.geometry.lng
                      }
                    }));
                }
                return [];
              }
      
              const locationResults = [];
              const maxCategories = 3; // Now using top 3 intelligently prioritized categories
              
              // Search using top categories
              for (const categoryConfig of categories.slice(0, maxCategories)) {
                for (const searchTerm of categoryConfig.searchTerms.slice(0, 1)) { // Reduced to 1 search term
                  const searchQuery = `${searchTerm} ${query} in ${detectedCity}, ${detectedState}`;
                  
                  try {
                    const searchResponse = await fetch(
                      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(searchQuery)}&key=${apiKey}&limit=3&countrycode=IN`
                    );
                    const searchData = await searchResponse.json();
      
                    if (searchData.results && searchData.results.length > 0) {
                      const relevantResults = searchData.results
                        .filter(result => {
                          const resultState = result.components?.state;
                          return resultState && (
                            resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
                            detectedState.toLowerCase().includes('karnataka')
                          );
                        })
                        .slice(0, 2)
                        .map(result => ({
                          address: result.formatted,
                          gettingThere: result.components?.road
                            ? `Accessible via ${result.components.road}. Check local transit for details.`
                            : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
                          parking: "Street parking typically available. Check for any time restrictions or meters.",
                          category: categoryConfig.category,
                          searchTerm: searchTerm,
                          coordinates: {
                            lat: result.geometry.lat,
                            lng: result.geometry.lng
                          }
                        }));
      
                        console.log(relevantResults,"erwrwerwer")    
                      locationResults.push(...relevantResults);
                    }
                  } catch (searchError) {
                    console.error(`Error searching for ${searchQuery}:`, searchError);
                  }
      
                  // Rate limiting
                  await new Promise(resolve => setTimeout(resolve, 200));
                }
              }
      
              // Remove duplicates and return top 5
              const uniqueResults = locationResults
                .filter((result, index, self) =>
                  index === self.findIndex(r => r.address === result.address)
                )
                .slice(0, 5);
      
              return uniqueResults;
      
            } catch (error) {
              console.error("Error searching for places:", error);
              return [];
            }
          };
      
          // Perform the search with detected location
          const results = await searchPlacesForQuery(searchQuery, city, state);
          
          console.log("Search results:", results);
          return results;
      
        } catch (error) {
          console.error("Error in handleSearch:", error);
          return [];
        }
      };





      const handleSearch = async (searchQuery) => {
        try {
          const apiKey = "20fdf466350e4924abc2708b462ed0fc" || process.env.REACT_APP_OPENCAGE_KEY;
          
          if (!apiKey) {
            console.error("Missing OpenCage API key. Please set REACT_APP_OPENCAGE_KEY in your environment.");
            return [];
          }
      
          console.log("Starting search for:", searchQuery);
      
          // Get user's current location first
          const getUserLocation = () => {
            return new Promise((resolve) => {
              if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                  async (position) => {
                    try {
                      const { latitude, longitude } = position.coords;
                      console.log("Got coordinates:", latitude, longitude);
                      
                      const response = await fetch(
                        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
                      );
                      
                      if (response.status === 403) {
                        console.error("OpenCage API returned 403 Forbidden. Check your API key and usage limits.");
                        resolve({ city: "Bengaluru", state: "Karnataka" });
                        return;
                      }
                      
                      const data = await response.json();
      
                      if (!data.results || data.results.length === 0) {
                        console.error("No location results found");
                        resolve({ city: "Bengaluru", state: "Karnataka" });
                        return;
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
                      
                      const state = components.state || "Karnataka";
                      
                      console.log("Detected location:", { city, state });
                      resolve({ city, state });
                      
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
      
          // Get location first
          const { city, state } = await getUserLocation();
          console.log("Using location for search:", { city, state });
      
          // Define keyword mappings for categories
          const keywordMappings = {
            parks: {
              keywords: ['quiet', 'garden', 'botanical', 'park', 'nature', 'peaceful', 'green'],
              searchTerms: ['botanical garden', 'park', 'garden', 'nature park']
            },
            wellness: {
              keywords: ['spa', 'meditation', 'mindful', 'wellness', 'relax', 'peaceful'],
              searchTerms: ['spa', 'wellness center', 'meditation center']
            },
            cultural: {
              keywords: ['libraries', 'library', 'museum', 'cultural', 'art', 'reflect', 'study'],
              searchTerms: ['library', 'museum', 'cultural center']
            },
            temples: {
              keywords: ['temple', 'spiritual', 'meditation', 'peaceful', 'reflect'],
              searchTerms: ['temple', 'spiritual center']
            }
          };
      
          // Analyze search query to find relevant categories
          const analyzeSearchForCategories = (query) => {
            const searchText = query.toLowerCase();
            const words = searchText.split(/\s+/).filter(word => word.length > 2);
            const matchedCategories = [];
            
            Object.entries(keywordMappings).forEach(([category, config]) => {
              let categoryScore = 0;
              
              config.keywords.forEach(keyword => {
                if (searchText.includes(keyword.toLowerCase())) {
                  categoryScore += 10;
                }
                
                words.forEach(word => {
                  if (word === keyword.toLowerCase()) {
                    categoryScore += 8;
                  } else if (word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)) {
                    categoryScore += 5;
                  }
                });
              });
              
              if (categoryScore > 0) {
                matchedCategories.push({
                  category,
                  searchTerms: config.searchTerms,
                  priority: categoryScore
                });
              }
            });
            
            return matchedCategories
              .sort((a, b) => b.priority - a.priority)
              .slice(0, 3);
          };
      
          // Search for places with proper query formatting
          const searchPlacesForQuery = async (query, detectedCity, detectedState) => {
            try {
              const categories = analyzeSearchForCategories(query);
              console.log("Matched categories:", categories);
              
              const locationResults = [];
              
              if (categories.length === 0) {
                // If no categories match, try a simple direct search with the main query
                const cleanQuery = query.split(' ').slice(0, 2).join(' '); // Take first 2 words only
                const directSearchQuery = `${cleanQuery} ${detectedCity}`;
                
                console.log("Direct search query:", directSearchQuery);
                
                try {
                  const searchResponse = await fetch(
                    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&countrycode=IN`
                  );
                  const searchData = await searchResponse.json();
                  
                  if (searchData.results && searchData.results.length > 0) {
                    return searchData.results.slice(0, 5).map(result => ({
                      address: result.formatted,
                      gettingThere: "Check local transit apps for directions",
                      parking: "Street parking typically available",
                      category: "general",
                      coordinates: {
                        lat: result.geometry.lat,
                        lng: result.geometry.lng
                      }
                    }));
                  }
                } catch (error) {
                  console.error("Direct search error:", error);
                }
              }
              
              // Search using categories with proper query format
              for (const categoryConfig of categories.slice(0, 3)) {
                for (const searchTerm of categoryConfig.searchTerms.slice(0, 2)) {
                  // Create a clean, simple search query
                  const cleanSearchQuery = `${searchTerm} ${detectedCity}`;
                  console.log("Category search query:", cleanSearchQuery);
                  
                  try {
                    const searchResponse = await fetch(
                      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cleanSearchQuery)}&key=${apiKey}&limit=1&countrycode=IN`
                    );
                    
                    console.log("Search response status:", searchResponse.status);
                    const searchData = await searchResponse.json();
                    console.log("Search response data:", searchData);
      
                    if (searchData.results && searchData.results.length > 0) {
                      const relevantResults = searchData.results
                        .filter(result => {
                          // More lenient filtering - just check if it's in the right state or city
                          const components = result.components || {};
                          const resultCity = components.city || components.town || components.village || '';
                          const resultState = components.state || '';
                          
                          return (
                            resultCity.toLowerCase().includes(detectedCity.toLowerCase()) ||
                            resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
                            result.formatted.toLowerCase().includes(detectedCity.toLowerCase())
                          );
                        })
                        .slice(0, 2)
                        .map(result => ({
                          address: result.formatted,
                          gettingThere: result.components?.road
                            ? `Accessible via ${result.components.road}. Check local transit for details.`
                            : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
                          parking: "Street parking typically available. Check for any time restrictions or meters.",
                          category: categoryConfig.category,
                          searchTerm: searchTerm,
                          coordinates: {
                            lat: result.geometry.lat,
                            lng: result.geometry.lng
                          }
                        }));
      
                      console.log("Relevant results for", searchTerm, ":", relevantResults);
                      locationResults.push(...relevantResults);
                    }
                  } catch (searchError) {
                    console.error(`Error searching for ${cleanSearchQuery}:`, searchError);
                  }
      
                  // Rate limiting - important for API
                  await new Promise(resolve => setTimeout(resolve, 300));
                }
              }
      
              // Remove duplicates and return results
              const uniqueResults = locationResults
                .filter((result, index, self) =>
                  index === self.findIndex(r => r.address === result.address)
                )
                .slice(0, 5);
      
              console.log("Final results:", uniqueResults);
              return uniqueResults;
      
            } catch (error) {
              console.error("Error searching for places:", error);
              return [];
            }
          };
      
          // Perform the search
          const results = await searchPlacesForQuery(searchQuery, city, state);
          
          console.log("Search completed, returning:", results);
          return results;
      
        } catch (error) {
          console.error("Error in handleSearch:", error);
          return [];
        }
      };






    //   const handleSearch = async (query) => {
    //     const apiKey = "20fdf466350e4924abc2708b462ed0fc";


    //     const searchQuery = `${query} in Bengaluru, Karnataka`;
        
    //     try {
    //       const response = await fetch(
    //         `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(searchQuery)}&key=${apiKey}&limit=2&countrycode=IN`
    //       );
    //       const data = await response.json();
    //       console.log("Test search results:", data);
    //       return data.results || [];
    //     } catch (error) {
    //       console.error("Test search error:", error);
    //       return [];
    //     }
    //   };


      const handleSearch1 = async (searchQuery, currentMood) => {
        try {
          const apiKey = process.env.REACT_APP_OPENCAGE_KEY;
          
          if (!apiKey) {
            console.error("Missing OpenCage API key.");
            return [];
          }
      
          // Check if we already have cached location data
          const cachedLocation = sessionStorage.getItem('userLocation');
          let city, state;
      
          if (cachedLocation) {
            const location = JSON.parse(cachedLocation);
            city = location.city;
            state = location.state;
            console.log("Using cached location:", { city, state });
          } else {
            // Get user's current location first
            const getUserLocation = () => {
              return new Promise((resolve, reject) => {
                if ("geolocation" in navigator) {
                  navigator.geolocation.getCurrentPosition(
                    async (position) => {
                      try {
                        const { latitude, longitude } = position.coords;
                        
                        const response = await fetch(
                          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
                        );
                        const data = await response.json();
      
                        if (!data.results || data.results.length === 0) {
                          console.error("No location results found");
                          resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                          return;
                        }
      
                        const result = data.results[0];
                        const components = result.components;
                        
                        const detectedCity = components.city || 
                                     components.town || 
                                     components.village ||
                                     components.municipality ||
                                     components.district ||
                                     components.county ||
                                     components.suburb ||
                                     components.neighbourhood ||
                                     "Bengaluru";
                        
                        const detectedState = components.state || "Karnataka";
                        
                        console.log("Detected location:", { city: detectedCity, state: detectedState });
                        
                        // Cache the location for session
                        sessionStorage.setItem('userLocation', JSON.stringify({
                          city: detectedCity,
                          state: detectedState,
                          timestamp: Date.now()
                        }));
                        
                        resolve({ city: detectedCity, state: detectedState });
                        
                      } catch (err) {
                        console.error("Error in location processing:", err);
                        resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                      }
                    },
                    (error) => {
                      console.error("Geolocation error:", error.message);
                      resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                    }
                  );
                } else {
                  console.error("Geolocation not supported");
                  resolve({ city: "Bengaluru", state: "Karnataka" }); // Fallback
                }
              });
            };
      
            // Get location first
            const location = await getUserLocation();
            city = location.city;
            state = location.state;
          }
      
          // Function to analyze search query and extract relevant categories with enhanced prioritization
          const analyzeSearchForCategories = (query) => {
            const searchText = query.toLowerCase();
            const words = searchText.split(/\s+/).filter(word => word.length > 2); // Get meaningful words
            const matchedCategories = [];
            
            // Enhanced keyword matching with semantic understanding
            Object.entries(keywordMappings).forEach(([category, config]) => {
              let categoryScore = 0;
              let matchedKeywords = [];
              
              config.keywords.forEach(keyword => {
                const keywordLower = keyword.toLowerCase();
                
                // Direct match (highest priority)
                if (searchText.includes(keywordLower)) {
                  categoryScore += 10;
                  matchedKeywords.push({ keyword, score: 10, type: 'direct' });
                  return;
                }
                
                // Word-level matching with semantic similarity
                words.forEach(word => {
                  // Exact word match
                  if (word === keywordLower) {
                    categoryScore += 8;
                    matchedKeywords.push({ keyword, score: 8, type: 'exact_word' });
                  }
                  // Partial word match (contains)
                  else if (word.includes(keywordLower) || keywordLower.includes(word)) {
                    categoryScore += 5;
                    matchedKeywords.push({ keyword, score: 5, type: 'partial' });
                  }
                  // Semantic similarity (basic)
                  else if (getSemanticSimilarity(word, keywordLower) > 0.7) {
                    categoryScore += 6;
                    matchedKeywords.push({ keyword, score: 6, type: 'semantic' });
                  }
                });
              });
              
              if (categoryScore > 0) {
                matchedCategories.push({
                  category,
                  searchTerms: config.searchTerms,
                  priority: categoryScore,
                  matchedKeywords,
                  relevanceScore: calculateRelevanceScore(category, words)
                });
              }
            });
            
            // Sort by combined priority and relevance, then limit to top 3
            return matchedCategories
              .sort((a, b) => {
                const scoreA = a.priority + (a.relevanceScore || 0);
                const scoreB = b.priority + (b.relevanceScore || 0);
                return scoreB - scoreA;
              })
              .slice(0, 3);
          };
      
          // Enhanced semantic similarity function
          const getSemanticSimilarity = (word1, word2) => {
            // Basic semantic similarity mapping
            const semanticGroups = {
              water: ['lake', 'river', 'pond', 'waterfall', 'stream', 'beach', 'pool'],
              nature: ['park', 'garden', 'forest', 'trees', 'green', 'outdoor', 'natural'],
              activity: ['sports', 'exercise', 'fitness', 'workout', 'running', 'cycling', 'walking'],
              food: ['restaurant', 'cafe', 'dining', 'eat', 'meal', 'food', 'snack'],
              culture: ['museum', 'art', 'gallery', 'theater', 'cultural', 'heritage', 'history'],
              shopping: ['mall', 'market', 'shop', 'store', 'shopping', 'buy', 'purchase'],
              relaxation: ['spa', 'massage', 'peaceful', 'quiet', 'calm', 'meditation', 'zen'],
              adventure: ['hiking', 'climbing', 'trek', 'adventure', 'explore', 'discover'],
              social: ['bar', 'pub', 'club', 'social', 'meetup', 'gathering', 'community'],
              entertainment: ['movie', 'cinema', 'show', 'entertainment', 'fun', 'amusement']
            };
            
            for (const [group, words] of Object.entries(semanticGroups)) {
              if (words.includes(word1) && words.includes(word2)) {
                return 0.8; // High similarity within same semantic group
              }
            }
            
            // Levenshtein distance for string similarity
            const distance = getLevenshteinDistance(word1, word2);
            const maxLength = Math.max(word1.length, word2.length);
            return 1 - (distance / maxLength);
          };
      
          // Calculate relevance score based on category and search context
          const calculateRelevanceScore = (category, searchWords) => {
            const contextBoosts = {
              // Time-based context
              morning: { elevation: 2, fitness: 2, garden: 1 },
              evening: { social: 2, food: 2, entertainment: 1 },
              night: { entertainment: 3, social: 2, food: 1 },
              
              // Activity context
              alone: { quiet: 3, garden: 2, cultural: 2 },
              together: { social: 3, entertainment: 2, food: 2 },
              family: { garden: 2, entertainment: 2, cultural: 1 },
              
              // Mood context
              relax: { quiet: 3, garden: 2, wellness: 2 },
              active: { fitness: 3, elevation: 2, adventure: 2 },
              explore: { cultural: 2, adventure: 2, social: 1 }
            };
            
            let relevanceScore = 0;
            
            searchWords.forEach(word => {
              if (contextBoosts[word] && contextBoosts[word][category]) {
                relevanceScore += contextBoosts[word][category];
              }
            });
            
            return relevanceScore;
          };
      
          // Levenshtein distance helper
          const getLevenshteinDistance = (str1, str2) => {
            const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
            
            for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
            for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
            
            for (let j = 1; j <= str2.length; j++) {
              for (let i = 1; i <= str1.length; i++) {
                if (str1[i - 1] === str2[j - 1]) {
                  matrix[j][i] = matrix[j - 1][i - 1];
                } else {
                  matrix[j][i] = Math.min(
                    matrix[j - 1][i - 1] + 1,
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1
                  );
                }
              }
            }
            
            return matrix[str2.length][str1.length];
          };
      
          // Search for places based on query
          const searchPlacesForQuery = async (query, detectedCity, detectedState) => {
            try {
              const categories = analyzeSearchForCategories(query);
              
              if (categories.length === 0) {
                // Direct search if no categories match
                const directSearchQuery = `${query} in ${detectedCity}, ${detectedState}`;
                
                const searchResponse = await fetch(
                  `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&countrycode=IN`
                );
                const searchData = await searchResponse.json();
                
                if (searchData.results && searchData.results.length > 0) {
                  return searchData.results
                    .filter(result => {
                      const resultState = result.components?.state;
                      return resultState && (
                        resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
                        detectedState.toLowerCase().includes('karnataka')
                      );
                    })
                    .slice(0, 5)
                    .map(result => ({
                      address: result.formatted,
                      gettingThere: result.components?.road
                        ? `Accessible via ${result.components.road}. Check local transit for details.`
                        : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
                      parking: "Street parking typically available. Check for any time restrictions or meters.",
                      category: "search result",
                      coordinates: {
                        lat: result.geometry.lat,
                        lng: result.geometry.lng
                      }
                    }));
                }
                return [];
              }
      
              const locationResults = [];
              const maxCategories = 2; // Reduced from 3 to balance quality vs API calls
              
              // Search using top categories with early exit optimization
              for (const categoryConfig of categories.slice(0, maxCategories)) {
                for (const searchTerm of categoryConfig.searchTerms.slice(0, 1)) {
                  const searchQuery = `${searchTerm} ${query} in ${detectedCity}, ${detectedState}`;
                  
                  try {
                    const searchResponse = await fetch(
                      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(searchQuery)}&key=${apiKey}&limit=3&countrycode=IN`
                    );
                    const searchData = await searchResponse.json();
      
                    if (searchData.results && searchData.results.length > 0) {
                      const relevantResults = searchData.results
                        .filter(result => {
                          const resultState = result.components?.state;
                          return resultState && (
                            resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
                            detectedState.toLowerCase().includes('karnataka')
                          );
                        })
                        .slice(0, 3)
                        .map(result => ({
                          address: result.formatted,
                          gettingThere: result.components?.road
                            ? `Accessible via ${result.components.road}. Check local transit for details.`
                            : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
                          parking: "Street parking typically available. Check for any time restrictions or meters.",
                          category: categoryConfig.category,
                          searchTerm: searchTerm,
                          coordinates: {
                            lat: result.geometry.lat,
                            lng: result.geometry.lng
                          },
                          priorityScore: categoryConfig.priority
                        }));
      
                      locationResults.push(...relevantResults);
                      
                      // Early exit if we have enough good results
                      if (locationResults.length >= 5) {
                        console.log("Early exit: Found sufficient results");
                        break;
                      }
                    }
                  } catch (searchError) {
                    console.error(`Error searching for ${searchQuery}:`, searchError);
                  }
      
                  // Rate limiting
                  await new Promise(resolve => setTimeout(resolve, 200));
                }
                
                // Break outer loop if we have enough results
                if (locationResults.length >= 5) break;
              }
      
              // Remove duplicates and return top 5
              const uniqueResults = locationResults
                .filter((result, index, self) =>
                  index === self.findIndex(r => r.address === result.address)
                )
                .slice(0, 5);
      
              return uniqueResults;
      
            } catch (error) {
              console.error("Error searching for places:", error);
              return [];
            }
          };
      
          // Perform the search with detected location
          const results = await searchPlacesForQuery(searchQuery, city, state);
          
          // Update adventureDatabaseData with search results
          if (results.length > 0 && currentMood) {
            // Create a custom adventure entry for the search
            const searchAdventure = {
              title: `${searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)} Discovery`,
              description: `Explore ${searchQuery} based on your search in ${city}`,
              duration: "1-3 hours",
              intensity: 2,
              location: `${city}, ${state}`,
              type: "Search Adventure",
              vibe: "Personalized exploration based on your interests",
              tags: { setting: "outdoor", cost: "varies", group: "either" },
              gettingStarted: [
                "Choose a location that interests you most",
                "Check the getting there instructions",
                "Enjoy your personalized adventure"
              ],
              locationAndDirection: results,
              whatToBring: ['Comfortable shoes', 'Water bottle', 'Phone for navigation'],
              isSearchResult: true,
              searchQuery: searchQuery,
              timestamp: Date.now()
            };
      
            // Update the adventureDatabaseData object
            if (!adventureDatabaseData[currentMood]) {
              adventureDatabaseData[currentMood] = [];
            }
      
            // Check if this search adventure already exists (avoid duplicates)
            const existingIndex = adventureDatabaseData[currentMood].findIndex(
              adventure => adventure.isSearchResult && adventure.searchQuery === searchQuery
            );
      
            if (existingIndex !== -1) {
              // Update existing search adventure
              adventureDatabaseData[currentMood][existingIndex] = searchAdventure;
              console.log("Updated existing search adventure in adventureDatabaseData");
            } else {
              // Add new search adventure to the beginning
              adventureDatabaseData[currentMood].unshift(searchAdventure);
              console.log("Added new search adventure to adventureDatabaseData");
            }
      
            // Also update individual adventures with location data if they match search criteria
            adventureDatabaseData[currentMood].forEach((adventure, index) => {
              if (!adventure.isSearchResult && !adventure.locationAndDirection?.length) {
                // Check if this adventure's title/description relates to the search
                const adventureText = `${adventure.title} ${adventure.description}`.toLowerCase();
                if (adventureText.includes(searchQuery.toLowerCase())) {
                  // Add location data to this adventure too
                  adventureDatabaseData[currentMood][index] = {
                    ...adventure,
                    location: `${city}, ${state}`,
                    locationAndDirection: results.slice(0, 3), // Give top 3 results
                    lastUpdated: Date.now()
                  };
                  console.log(`Updated adventure "${adventure.title}" with location data`);
                }
              }
            });
      
            console.log("Updated adventureDatabaseData:", adventureDatabaseData[currentMood]);
          }
          
          console.log("Search results:", results);
          return results;
      
        } catch (error) {
          console.error("Error in handleSearch:", error);
          return [];
        }
      };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
            {/* Header - Responsive */} wwwwww
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
                                    key={index}
                                    className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md md:hover:shadow-lg transition-all duration-300 md:hover:scale-102"
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
                                                Let's Go!
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





            {showAdventureDetail && selectedAdventure && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-hidden">
                    <div className="h-full flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 relative">
                                <button
                                    onClick={() => setShowAdventureDetail(false)}
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
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${i < selectedAdventure.intensity ? 'bg-white' : 'bg-white/30'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-y-auto max-h-[calc(90vh-160px)] p-6 space-y-6">
                                {/* Getting Started */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500" />
                                        Getting Started
                                    </h3>
                                    <div className="bg-purple-50 rounded-xl p-4 space-y-2">
                                        {selectedAdventure.gettingStarted ? selectedAdventure.gettingStarted.map((step, index) => (
                                            <div key={index} className="flex gap-3">
                                                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                                    {index + 1}
                                                </div>
                                                <p className="text-gray-700">{step}</p>
                                            </div>
                                        )) : (
                                            <div className="text-gray-600">
                                                <p>• Find a comfortable spot to begin</p>
                                                <p>• Take a moment to embrace the {currentMood?.name.toLowerCase()} energy</p>
                                                <p>• Follow your instincts and enjoy the experience</p>
                                            </div>
                                        )}
                                    </div>
                                </div>


                                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6"> Location Search</h2>
                                    {/* Search Bar */}
                                    <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Smart Keywords (Generated from your mood & adventure)
                </label>
                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={searchKeywords}
                            readOnly
                            placeholder="Keywords will appear here based on your selection..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                            title="Auto-generated keywords based on your mood and selected adventure"
                        />
                    </div>
                    <button
                        onClick={() => {
                            handleSearch(searchKeywords)
                            // Here you can implement the actual search functionality
                            console.log('Searching with keywords:', searchKeywords);
                        }}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2 transition-colors"
                    >
                        <Search className="w-5 h-5" />
                        Search
                    </button>
                </div>
                
                {/* Keyword Tags Display */}
                {searchKeywords && (
                    <div className="mt-3">
                        <p className="text-xs text-gray-500 mb-2">Generated keywords:</p>
                        <div className="flex flex-wrap gap-2">
                            {searchKeywords.split(', ').map((keyword, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Helper Text */}
                <p className="text-xs text-gray-500 mt-2">
                    💡 Keywords are automatically generated based on your selected mood ({currentMood?.name}) 
                    and adventure preferences. Use these to search for relevant locations!
                </p>
            </div>
                                </div>

                                {/* Location Details */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-blue-500" />
                                        Location & Directions
                                    </h3>
                                    <div className="bg-blue-50 rounded-xl p-4 space-y-4">
                                        {(selectedAdventure.locationAndDirection && Array.isArray(selectedAdventure.locationAndDirection) && selectedAdventure.locationAndDirection.length > 0)
                                            ? selectedAdventure.locationAndDirection.map((loc, idx) => (
                                                <div key={idx} className="border-b last:border-b-0 border-blue-100 pb-4 last:pb-0 mb-4 last:mb-0">
                                                    <div className="flex items-start gap-2 mb-2">
                                                        <MapPin className="w-4 h-4 text-blue-400" />
                                                        <div className='text-left'>
                                                            <span className="font-medium text-gray-800 block">Address:</span>
                                                            <p className="text-gray-600 ">{loc.address || "Location details available in your area - check local listings for specific venues"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-2 mb-2">
                                                        <Compass className="w-4 h-4 text-purple-400 mt-1" />
                                                        <div className='text-left'>
                                                            <span className="font-medium text-gray-800 block">Getting There:</span>
                                                            <p className="text-gray-600">
                                                                {loc.gettingThere || "Best accessed by car or public transport. Check local transit apps for real-time directions."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-2 mb-2">
                                                        <ParkingCircleIcon className="w-4 h-4 text-green-400 mt-1" />
                                                        <div className='text-left'>
                                                            <span className="font-medium text-gray-800 block">Parking:</span>
                                                            <p className="text-gray-600">
                                                                {loc.parking || "Street parking typically available. Check for any time restrictions or meters."}
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))
                                            : (
                                                <div>
                                                    <div>
                                                        <p className="font-medium text-gray-800">Address:</p>
                                                        <p className="text-gray-600">
                                                            {selectedAdventure.address ||
                                                                "Location details available in your area - check local listings for specific venues"}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-800">Getting There:</p>
                                                        <p className="text-gray-600">
                                                            {selectedAdventure.directions ||
                                                                "Best accessed by car or public transport. Check local transit apps for real-time directions."}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-800">Parking:</p>
                                                        <p className="text-gray-600">
                                                            {selectedAdventure.parking ||
                                                                "Street parking typically available. Check for any time restrictions or meters."}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <Coffee className="w-5 h-5 text-orange-500" />
                                        What to Bring
                                    </h3>
                                    <div className="bg-orange-50 rounded-xl p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {selectedAdventure.whatToBring ? selectedAdventure.whatToBring.map((item, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            )) : (
                                                <>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                                        <span className="text-gray-700">Comfortable clothes</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                                        <span className="text-gray-700">Water bottle</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                                        <span className="text-gray-700">Positive attitude</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">How are you feeling?</h2>
                            <button
                                onClick={() => setShowMoodMenu(false)}
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
        </div>
    );
};
export default MoodAdventureApp;