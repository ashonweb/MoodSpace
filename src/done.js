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


    const handleSearch = async (searchQuery) => {
        try {
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

            // Get current location first
            const { city, state } = await getUserLocation();
            console.log("Using location for search:", { city, state });

            // Step 1: Check if locationAndDirection data exists for this moodId, title, and state
            const checkExistingLocationData = async (moodId, title, state) => {
                try {
                    console.log("Checking existing location data for:", { moodId, title, state });

                    const response = await fetch(
                        `https://moodspace-api-production.up.railway.app/locationAndDirection?moodId=${moodId}&title=${encodeURIComponent(title)}&location=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`
                    );

                    if (response.ok) {
                        const existingData = await response.json();
                        console.log("Found existing location data:", existingData);

                        // Check if the response has valid locationAndDirection data
                        if (existingData && existingData.locationAndDirection && existingData.locationAndDirection.length > 0) {
                            return existingData.locationAndDirection;
                        }
                    }

                    console.log("No existing location data found or API call failed");
                    return null;

                } catch (error) {
                    console.error("Error checking existing location data:", error);
                    return null;
                }
            };

            // Step 2: If data exists, use it; otherwise call OpenCage API
            let locationResults = null;

            if (currentMood && selectedAdventure) {
                locationResults = await checkExistingLocationData(currentMood.id, selectedAdventure.title, state);
            }

            if (locationResults) {
                console.log("Using existing location data, skipping OpenCage API call");

                // Update local state with existing data
                if (currentMood && selectedAdventure) {
                    const updatedAdventure = {
                        ...selectedAdventure,
                        locationAndDirection: locationResults
                    };
                    setSelectedAdventure(updatedAdventure);

                    // Update local adventure database data
                    if (adventureDatabaseData[currentMood.id]) {
                        const idx = adventureDatabaseData[currentMood.id].findIndex(
                            adv => adv.title === selectedAdventure.title
                        );
                        if (idx !== -1) {
                            adventureDatabaseData[currentMood.id][idx] = {
                                ...adventureDatabaseData[currentMood.id][idx],
                                ...updatedAdventure
                            };
                        }
                    }
                }

                return locationResults;
            }

            // Step 3: No existing data found, proceed with OpenCage API call
            console.log("No existing location data found, calling OpenCage API");

            const apiKey = "20fdf466350e4924abc2708b462ed0fc" || process.env.REACT_APP_OPENCAGE_KEY;

            if (!apiKey) {
                console.error("Missing OpenCage API key. Please set REACT_APP_OPENCAGE_KEY in your environment.");
                return [];
            }

            console.log("Starting search for:", searchQuery);

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

            // Step 4: Save results to database if we have results and proper addresses
            if (results && results.length > 0 && currentMood && selectedAdventure) {
                // Check if results have proper addresses (not empty or generic)
                const validResults = results.filter(result =>
                    result.address &&
                    result.address.trim() !== '' &&
                    !result.address.toLowerCase().includes('no address found')
                );

                if (validResults.length > 0) {
                    // Update selectedAdventure with new locationAndDirection
                    const updatedAdventure = {
                        ...selectedAdventure,
                        locationAndDirection: validResults
                    };

                    setSelectedAdventure(updatedAdventure);

                    // Also update adventureDatabaseData for persistence
                    if (adventureDatabaseData[currentMood.id]) {
                        const idx = adventureDatabaseData[currentMood.id].findIndex(
                            adv => adv.title === selectedAdventure.title
                        );
                        if (idx !== -1) {
                            adventureDatabaseData[currentMood.id][idx] = {
                                ...adventureDatabaseData[currentMood.id][idx],
                                ...updatedAdventure
                            };
                        }
                    }

                    // Save to database via PUT API
                    const saveToDatabase = async () => {
                        try {
                            const payload = {
                                moodId: currentMood.id,
                                title: selectedAdventure.title,
                                state: state,
                                location: city,
                                locationAndDirection: validResults
                            };

                            console.log("Saving to database with payload:", payload);

                            const saveResponse = await fetch(
                                'https://moodspace-api-production.up.railway.app/locationAndDirection',
                                {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(payload)
                                }
                            );

                            if (saveResponse.ok) {
                                const savedData = await saveResponse.json();
                                console.log("Successfully saved to database:", savedData);
                            } else {
                                console.error("Failed to save to database:", saveResponse.status, await saveResponse.text());
                            }
                        } catch (saveError) {
                            console.error("Error saving to database:", saveError);
                        }
                    };

                    // Call save function (don't await to avoid blocking UI)
                    saveToDatabase();
                } else {
                    console.log("No valid results with proper addresses found, skipping database save");
                }
            }

            return results;

        } catch (error) {
            console.error("Error in handleSearch:", error);
            return [];
        }
    };



    // const handleSearch = async (searchQuery) => {
    //     try {
    //         const apiKey = "20fdf466350e4924abc2708b462ed0fc" || process.env.REACT_APP_OPENCAGE_KEY;

    //         if (!apiKey) {
    //             console.error("Missing OpenCage API key. Please set REACT_APP_OPENCAGE_KEY in your environment.");
    //             return [];
    //         }

    //         console.log("Starting search for:", searchQuery);

    //         // Get user's current location first
    //         const getUserLocation = () => {
    //             return new Promise((resolve) => {
    //                 if ("geolocation" in navigator) {
    //                     navigator.geolocation.getCurrentPosition(
    //                         async (position) => {
    //                             try {
    //                                 const { latitude, longitude } = position.coords;
    //                                 console.log("Got coordinates:", latitude, longitude);

    //                                 const response = await fetch(
    //                                     `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
    //                                 );

    //                                 if (response.status === 403) {
    //                                     console.error("OpenCage API returned 403 Forbidden. Check your API key and usage limits.");
    //                                     resolve({ city: "Bengaluru", state: "Karnataka" });
    //                                     return;
    //                                 }

    //                                 const data = await response.json();

    //                                 if (!data.results || data.results.length === 0) {
    //                                     console.error("No location results found");
    //                                     resolve({ city: "Bengaluru", state: "Karnataka" });
    //                                     return;
    //                                 }

    //                                 const result = data.results[0];
    //                                 const components = result.components;

    //                                 const city = components.city ||
    //                                     components.town ||
    //                                     components.village ||
    //                                     components.municipality ||
    //                                     components.district ||
    //                                     components.county ||
    //                                     components.suburb ||
    //                                     components.neighbourhood ||
    //                                     "Bengaluru";

    //                                 const state = components.state || "Karnataka";

    //                                 console.log("Detected location:", { city, state });
    //                                 resolve({ city, state });

    //                             } catch (err) {
    //                                 console.error("Error in location processing:", err);
    //                                 resolve({ city: "Bengaluru", state: "Karnataka" });
    //                             }
    //                         },
    //                         (error) => {
    //                             console.error("Geolocation error:", error.message);
    //                             resolve({ city: "Bengaluru", state: "Karnataka" });
    //                         }
    //                     );
    //                 } else {
    //                     console.error("Geolocation not supported");
    //                     resolve({ city: "Bengaluru", state: "Karnataka" });
    //                 }
    //             });
    //         };

    //         // Get location first
    //         const { city, state } = await getUserLocation();
    //         console.log("Using location for search:", { city, state });

    //         // Define keyword mappings for categories
    //         const keywordMappings = {
    //             parks: {
    //                 keywords: ['quiet', 'garden', 'botanical', 'park', 'nature', 'peaceful', 'green'],
    //                 searchTerms: ['botanical garden', 'park', 'garden', 'nature park']
    //             },
    //             wellness: {
    //                 keywords: ['spa', 'meditation', 'mindful', 'wellness', 'relax', 'peaceful'],
    //                 searchTerms: ['spa', 'wellness center', 'meditation center']
    //             },
    //             cultural: {
    //                 keywords: ['libraries', 'library', 'museum', 'cultural', 'art', 'reflect', 'study'],
    //                 searchTerms: ['library', 'museum', 'cultural center']
    //             },
    //             temples: {
    //                 keywords: ['temple', 'spiritual', 'meditation', 'peaceful', 'reflect'],
    //                 searchTerms: ['temple', 'spiritual center']
    //             }
    //         };

    //         // Analyze search query to find relevant categories
    //         const analyzeSearchForCategories = (query) => {
    //             const searchText = query.toLowerCase();
    //             const words = searchText.split(/\s+/).filter(word => word.length > 2);
    //             const matchedCategories = [];

    //             Object.entries(keywordMappings).forEach(([category, config]) => {
    //                 let categoryScore = 0;

    //                 config.keywords.forEach(keyword => {
    //                     if (searchText.includes(keyword.toLowerCase())) {
    //                         categoryScore += 10;
    //                     }

    //                     words.forEach(word => {
    //                         if (word === keyword.toLowerCase()) {
    //                             categoryScore += 8;
    //                         } else if (word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)) {
    //                             categoryScore += 5;
    //                         }
    //                     });
    //                 });

    //                 if (categoryScore > 0) {
    //                     matchedCategories.push({
    //                         category,
    //                         searchTerms: config.searchTerms,
    //                         priority: categoryScore
    //                     });
    //                 }
    //             });

    //             return matchedCategories
    //                 .sort((a, b) => b.priority - a.priority)
    //                 .slice(0, 3);
    //         };

    //         // Search for places with proper query formatting
    //         const searchPlacesForQuery = async (query, detectedCity, detectedState) => {
    //             try {
    //                 const categories = analyzeSearchForCategories(query);
    //                 console.log("Matched categories:", categories);

    //                 const locationResults = [];

    //                 if (categories.length === 0) {
    //                     // If no categories match, try a simple direct search with the main query
    //                     const cleanQuery = query.split(' ').slice(0, 2).join(' '); // Take first 2 words only
    //                     const directSearchQuery = `${cleanQuery} ${detectedCity}`;

    //                     console.log("Direct search query:", directSearchQuery);

    //                     try {
    //                         const searchResponse = await fetch(
    //                             `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&countrycode=IN`
    //                         );
    //                         const searchData = await searchResponse.json();

    //                         if (searchData.results && searchData.results.length > 0) {
    //                             return searchData.results.slice(0, 5).map(result => ({
    //                                 address: result.formatted,
    //                                 gettingThere: "Check local transit apps for directions",
    //                                 parking: "Street parking typically available",
    //                                 category: "general",
    //                                 coordinates: {
    //                                     lat: result.geometry.lat,
    //                                     lng: result.geometry.lng
    //                                 }
    //                             }));
    //                         }
    //                     } catch (error) {
    //                         console.error("Direct search error:", error);
    //                     }
    //                 }

    //                 // Search using categories with proper query format
    //                 for (const categoryConfig of categories.slice(0, 3)) {
    //                     for (const searchTerm of categoryConfig.searchTerms.slice(0, 2)) {
    //                         // Create a clean, simple search query
    //                         const cleanSearchQuery = `${searchTerm} ${detectedCity}`;
    //                         console.log("Category search query:", cleanSearchQuery);

    //                         try {
    //                             const searchResponse = await fetch(
    //                                 `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cleanSearchQuery)}&key=${apiKey}&limit=1&countrycode=IN`
    //                             );

    //                             console.log("Search response status:", searchResponse.status);
    //                             const searchData = await searchResponse.json();
    //                             console.log("Search response data:", searchData);

    //                             if (searchData.results && searchData.results.length > 0) {
    //                                 const relevantResults = searchData.results
    //                                     .filter(result => {
    //                                         // More lenient filtering - just check if it's in the right state or city
    //                                         const components = result.components || {};
    //                                         const resultCity = components.city || components.town || components.village || '';
    //                                         const resultState = components.state || '';

    //                                         return (
    //                                             resultCity.toLowerCase().includes(detectedCity.toLowerCase()) ||
    //                                             resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
    //                                             result.formatted.toLowerCase().includes(detectedCity.toLowerCase())
    //                                         );
    //                                     })
    //                                     .slice(0, 2)
    //                                     .map(result => ({
    //                                         address: result.formatted,
    //                                         gettingThere: result.components?.road
    //                                             ? `Accessible via ${result.components.road}. Check local transit for details.`
    //                                             : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
    //                                         parking: "Street parking typically available. Check for any time restrictions or meters.",
    //                                         category: categoryConfig.category,
    //                                         searchTerm: searchTerm,
    //                                         coordinates: {
    //                                             lat: result.geometry.lat,
    //                                             lng: result.geometry.lng
    //                                         }
    //                                     }));

    //                                 console.log("Relevant results for", searchTerm, ":", relevantResults);
    //                                 locationResults.push(...relevantResults);
    //                             }
    //                         } catch (searchError) {
    //                             console.error(`Error searching for ${cleanSearchQuery}:`, searchError);
    //                         }

    //                         // Rate limiting - important for API
    //                         await new Promise(resolve => setTimeout(resolve, 300));
    //                     }
    //                 }

    //                 // Remove duplicates and return results
    //                 const uniqueResults = locationResults
    //                     .filter((result, index, self) =>
    //                         index === self.findIndex(r => r.address === result.address)
    //                     )
    //                     .slice(0, 5);

    //                 console.log("Final results:", uniqueResults);
    //                 return uniqueResults;

    //             } catch (error) {
    //                 console.error("Error searching for places:", error);
    //                 return [];
    //             }
    //         };

    //         // Perform the search
    //         const results = await searchPlacesForQuery(searchQuery, city, state);

    //         console.log("Search completed, returning:", results);

    //         if (results && results.length > 0 && currentMood && selectedAdventure) {
    //             // Update selectedAdventure with new locationAndDirection
    //             const updatedAdventure = {
    //                 ...selectedAdventure,
    //                 locationAndDirection: results
    //             };

    //             setSelectedAdventure(updatedAdventure);

    //             // Also update adventureDatabaseData for persistence
    //             if (adventureDatabaseData[currentMood.id]) {
    //                 const idx = adventureDatabaseData[currentMood.id].findIndex(
    //                     adv => adv.title === selectedAdventure.title
    //                 );
    //                 if (idx !== -1) {
    //                     adventureDatabaseData[currentMood.id][idx] = {
    //                         ...adventureDatabaseData[currentMood.id][idx],
    //                         ...updatedAdventure
    //                     };
    //                 }
    //             }
    //         }


    //         return results;

    //     } catch (error) {
    //         console.error("Error in handleSearch:", error);
    //         return [];
    //     }
    // };



    useEffect(() => {
        if (selectedAdventure) {
            console.log('Updated adventureDatabaseData:', adventureDatabaseData, selectedAdventure);
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
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
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
                                {/* Location Details */}

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
                                {/* what to bring */}
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
                  
                </div>
            )}

{showMoodMenu && (
        <div className="fixed inset-0 bg-white z-50 overflow-hidden">
          {/* Header */}
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
                  className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    moodCategory === key
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
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      isSelected 
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