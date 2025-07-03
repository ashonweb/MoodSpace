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

    // const keywordMappings = {
    //     // Outdoor/Nature Activities (energetic, adventurous, peaceful, reflective)
    //     outdoor: {
    //         keywords: ['outdoor', 'nature', 'fresh air', 'outside', 'open air', 'wilderness', 'natural', 'forest', 'trees', 'greenery', 'scenic', 'landscape'],
    //         searchTerms: ['parks', 'nature reserves', 'outdoor spaces', 'green areas', 'nature trails', 'forest areas'],
    //         moods: ['energetic', 'adventurous', 'peaceful', 'reflective', 'curious']
    //     },

    //     // Water-related Activities (peaceful, calm, reflective, love)
    //     water: {
    //         keywords: ['lake', 'water', 'waterfront', 'river', 'pond', 'beach', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'stream', 'cascade', 'waves'],
    //         searchTerms: ['lakes', 'waterfront', 'rivers', 'water bodies', 'beaches', 'reservoirs', 'fountains', 'water features'],
    //         moods: ['peaceful', 'calm', 'reflective', 'love', 'cozy']
    //     },

    //     // Garden/Botanical Activities (peaceful, calm, creative, love, cozy)
    //     garden: {
    //         keywords: ['garden', 'botanical', 'flowers', 'plants', 'greenery', 'bloom', 'flora', 'herb', 'roses', 'petals', 'fragrance', 'blossom', 'orchid', 'tulip'],
    //         searchTerms: ['botanical gardens', 'gardens', 'nurseries', 'flower gardens', 'parks with gardens', 'rose gardens', 'herb gardens'],
    //         moods: ['peaceful', 'calm', 'creative', 'love', 'cozy', 'reflective']
    //     },

    //     // Hills/Mountains/Elevation (energetic, adventurous, reflective, focused)
    //     elevation: {
    //         keywords: ['hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'sunrise', 'sunset', 'ridge', 'cliff', 'valley'],
    //         searchTerms: ['hills', 'mountains', 'trekking spots', 'hiking trails', 'viewpoints', 'peaks', 'climbing areas', 'scenic overlooks'],
    //         moods: ['energetic', 'adventurous', 'reflective', 'focused', 'curious']
    //     },

    //     // Parks/Recreation (happy, playful, social, peaceful)
    //     park: {
    //         keywords: ['park', 'playground', 'recreation', 'green space', 'picnic', 'lawn', 'field or park', 'grass', 'bench', 'shade', 'children', 'family'],
    //         searchTerms: ['parks', 'recreational areas', 'playgrounds', 'green spaces', 'picnic spots', 'family parks', 'community parks'],
    //         moods: ['happy', 'playful', 'social', 'peaceful', 'cozy']
    //     },

    //     // Sports/Fitness/Active (energetic, angry, stressed, focused)
    //     fitness: {
    //         keywords: ['parkour', 'fitness', 'gym', 'exercise', 'workout', 'training', 'sports', 'athletic', 'run', 'jog', 'sprint', 'active', 'cardio', 'strength', 'yoga', 'cycling'],
    //         searchTerms: ['fitness centers', 'gyms', 'sports complexes', 'athletic facilities', 'running tracks', 'outdoor gyms', 'yoga studios', 'cycling paths'],
    //         moods: ['energetic', 'angry', 'stressed', 'focused', 'adventurous']
    //     },

    //     // Cultural/Historical (curious, creative, reflective, focused)
    //     cultural: {
    //         keywords: ['museum', 'art', 'culture', 'history', 'heritage', 'monument', 'temple', 'palace', 'fort', 'ancient', 'gallery', 'exhibition', 'sculpture', 'architecture'],
    //         searchTerms: ['museums', 'art galleries', 'cultural centers', 'monuments', 'temples', 'historical sites', 'heritage buildings', 'art spaces'],
    //         moods: ['curious', 'creative', 'reflective', 'focused', 'calm']
    //     },

    //     // Learning/Reading/Quiet (peaceful, reflective, focused, tired, sad)
    //     quiet: {
    //         keywords: ['reading', 'study', 'quiet', 'peaceful', 'meditation', 'mindful', 'contemplat', 'reflect', 'library', 'book', 'silence', 'solitude', 'thinking'],
    //         searchTerms: ['libraries', 'quiet parks', 'meditation centers', 'study spaces', 'peaceful areas', 'reading rooms', 'quiet corners'],
    //         moods: ['peaceful', 'reflective', 'focused', 'tired', 'sad', 'heartbreak']
    //     },

    //     // Food/Dining (social, happy, cozy, love, stressed)
    //     food: {
    //         keywords: ['food', 'restaurant', 'cafe', 'dining', 'eat', 'meal', 'coffee', 'tea', 'cuisine', 'cooking', 'brunch', 'dessert', 'bakery', 'comfort food'],
    //         searchTerms: ['restaurants', 'cafes', 'food courts', 'dining areas', 'food markets', 'bakeries', 'coffee shops', 'comfort food places'],
    //         moods: ['social', 'happy', 'cozy', 'love', 'stressed', 'tired']
    //     },

    //     // Shopping/Market (social, happy, creative, curious, stressed)
    //     shopping: {
    //         keywords: ['shop', 'market', 'mall', 'store', 'buy', 'purchase', 'retail', 'bazaar', 'vendor', 'browse', 'window shopping', 'boutique'],
    //         searchTerms: ['shopping malls', 'markets', 'shopping areas', 'retail centers', 'bazaars', 'local markets', 'street shopping'],
    //         moods: ['social', 'happy', 'creative', 'curious', 'playful']
    //     },

    //     // Entertainment/Fun (happy, playful, social, creative)
    //     entertainment: {
    //         keywords: ['entertainment', 'fun', 'game', 'play', 'amusement', 'cinema', 'movie', 'theater', 'show', 'concert', 'music', 'dance', 'performance'],
    //         searchTerms: ['entertainment centers', 'amusement parks', 'cinemas', 'theaters', 'gaming centers', 'music venues', 'performance spaces'],
    //         moods: ['happy', 'playful', 'social', 'creative', 'curious']
    //     },

    //     // Adventure/Thrill (energetic, adventurous, angry, stressed)
    //     adventure: {
    //         keywords: ['adventure', 'thrill', 'exciting', 'adrenaline', 'extreme', 'challenge', 'daring', 'bold', 'risk', 'speed', 'intense'],
    //         searchTerms: ['adventure parks', 'activity centers', 'adventure sports', 'thrill rides', 'extreme sports', 'challenge courses'],
    //         moods: ['energetic', 'adventurous', 'angry', 'curious']
    //     },

    //     // Urban/City (curious, creative, social, focused)
    //     urban: {
    //         keywords: ['urban', 'city', 'downtown', 'street', 'building', 'architecture', 'metropolitan', 'district', 'skyline', 'plaza', 'square'],
    //         searchTerms: ['city centers', 'downtown areas', 'urban parks', 'city attractions', 'commercial districts', 'plazas', 'city squares'],
    //         moods: ['curious', 'creative', 'social', 'focused', 'adventurous']
    //     },

    //     // Wellness/Health (stressed, tired, sad, heartbreak, calm)
    //     wellness: {
    //         keywords: ['wellness', 'health', 'spa', 'relax', 'rejuvenat', 'heal', 'therapy', 'massage', 'yoga', 'mindfulness', 'breathing', 'restore'],
    //         searchTerms: ['wellness centers', 'spas', 'yoga studios', 'health centers', 'relaxation centers', 'meditation centers', 'therapy centers'],
    //         moods: ['stressed', 'tired', 'sad', 'heartbreak', 'calm', 'peaceful']
    //     },

    //     // NEW CATEGORIES FOR EXPANDED MOOD COVERAGE:

    //     // Cozy/Comfort (cozy, tired, sad, heartbreak, calm)
    //     cozy: {
    //         keywords: ['cozy', 'comfort', 'warm', 'intimate', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
    //         searchTerms: ['cozy cafes', 'intimate spaces', 'warm restaurants', 'comfort zones', 'cozy reading spots', 'intimate venues', 'sheltered areas'],
    //         moods: ['cozy', 'tired', 'sad', 'heartbreak', 'calm']
    //     },

    //     // Creative/Artistic (creative, curious, happy, playful)
    //     creative: {
    //         keywords: ['creative', 'art', 'craft', 'paint', 'draw', 'design', 'artistic', 'workshop', 'studio', 'pottery', 'photography', 'music', 'writing', 'expression'],
    //         searchTerms: ['art studios', 'craft centers', 'creative workshops', 'art cafes', 'pottery studios', 'photography spots', 'music venues', 'creative spaces'],
    //         moods: ['creative', 'curious', 'happy', 'playful', 'reflective']
    //     },

    //     // Social/Community (social, happy, playful, love)
    //     social: {
    //         keywords: ['social', 'community', 'friends', 'group', 'gathering', 'party', 'celebration', 'meet', 'connect', 'together', 'crowd', 'people', 'lively'],
    //         searchTerms: ['community centers', 'social clubs', 'gathering spaces', 'public squares', 'lively areas', 'popular hangouts', 'social venues'],
    //         moods: ['social', 'happy', 'playful', 'love', 'curious']
    //     },

    //     // Romantic/Love (love, cozy, peaceful, calm)
    //     romantic: {
    //         keywords: ['romantic', 'love', 'couple', 'date', 'intimate', 'candlelight', 'sunset', 'scenic', 'private', 'secluded', 'beautiful', 'charming'],
    //         searchTerms: ['romantic spots', 'couple destinations', 'scenic viewpoints', 'intimate cafes', 'beautiful gardens', 'sunset spots', 'romantic restaurants'],
    //         moods: ['love', 'cozy', 'peaceful', 'calm', 'happy']
    //     },

    //     // Energetic/Active (energetic, playful, happy, adventurous)
    //     energetic: {
    //         keywords: ['energetic', 'active', 'dynamic', 'vibrant', 'lively', 'bustling', 'upbeat', 'fast-paced', 'stimulating', 'invigorating'],
    //         searchTerms: ['active zones', 'bustling areas', 'energy centers', 'vibrant districts', 'lively venues', 'dynamic spaces', 'activity hubs'],
    //         moods: ['energetic', 'playful', 'happy', 'adventurous', 'social']
    //     },

    //     // Stress Relief (stressed, angry, tired, sad)
    //     stressRelief: {
    //         keywords: ['stress', 'relief', 'calm', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'pressure', 'overwhelming', 'breathe', 'escape'],
    //         searchTerms: ['stress relief centers', 'calming spaces', 'quiet retreats', 'peaceful areas', 'relaxation spots', 'tranquil zones', 'escape venues'],
    //         moods: ['stressed', 'angry', 'tired', 'overwhelmed']
    //     },

    //     // Healing/Recovery (sad, heartbreak, tired, stressed)
    //     healing: {
    //         keywords: ['healing', 'recovery', 'mend', 'restore', 'repair', 'comfort', 'support', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
    //         searchTerms: ['healing spaces', 'support centers', 'gentle environments', 'nurturing places', 'comfort zones', 'refuge areas', 'recovery spaces'],
    //         moods: ['sad', 'heartbreak', 'tired', 'stressed', 'calm']
    //     },

    //     // Focus/Productivity (focused, curious, reflective)
    //     focus: {
    //         keywords: ['focus', 'concentrate', 'productive', 'work', 'study', 'efficient', 'organized', 'clear', 'sharp', 'attentive', 'dedicated'],
    //         searchTerms: ['co-working spaces', 'study areas', 'quiet work zones', 'productive environments', 'focus centers', 'concentration spots', 'work-friendly cafes'],
    //         moods: ['focused', 'curious', 'reflective', 'calm']
    //     },

    //     // Music/Audio (playful, creative, happy, social, energetic)
    //     music: {
    //         keywords: ['music', 'audio', 'sound', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
    //         searchTerms: ['music venues', 'concert halls', 'live music spots', 'acoustic cafes', 'music studios', 'karaoke', 'dance clubs', 'performance spaces'],
    //         moods: ['playful', 'creative', 'happy', 'social', 'energetic']
    //     },

    //     // Night/Evening (cozy, romantic, social, creative, reflective)
    //     nightlife: {
    //         keywords: ['night', 'evening', 'dark', 'lights', 'illuminated', 'nightlife', 'late', 'moon', 'stars', 'ambient', 'atmospheric'],
    //         searchTerms: ['nightlife spots', 'evening venues', 'night markets', 'illuminated areas', 'late-night cafes', 'moonlight spots', 'night photography locations'],
    //         moods: ['cozy', 'love', 'social', 'creative', 'reflective']
    //     }
    // };

    const keywordMappings = {
        // Outdoor/Nature Activities (energetic, adventurous, peaceful, reflective)
        outdoor: {
            keywords: ['outdoor', 'nature', 'fresh air', 'outside', 'open air', 'wilderness', 'natural', 'forest', 'trees', 'greenery', 'scenic', 'landscape'],
            searchTerms: ['parks', 'nature reserves'],
            moods: ['energetic', 'adventurous', 'peaceful', 'reflective', 'curious']
        },
    
        // Water-related Activities (peaceful, calm, reflective, love)
        water: {
            keywords: ['lake', 'water', 'waterfront', 'river', 'pond', 'beach', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'stream', 'cascade', 'waves'],
            searchTerms: ['lakes', 'waterfront'],
            moods: ['peaceful', 'calm', 'reflective', 'love', 'cozy']
        },
    
        // Garden/Botanical Activities (peaceful, calm, creative, love, cozy)
        garden: {
            keywords: ['garden', 'botanical', 'flowers', 'plants', 'greenery', 'bloom', 'flora', 'herb', 'roses', 'petals', 'fragrance', 'blossom', 'orchid', 'tulip'],
            searchTerms: ['botanical gardens', 'flower gardens'],
            moods: ['peaceful', 'calm', 'creative', 'love', 'cozy', 'reflective']
        },
    
        // Hills/Mountains/Elevation (energetic, adventurous, reflective, focused)
        elevation: {
            keywords: ['hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'sunrise', 'sunset', 'ridge', 'cliff', 'valley'],
            searchTerms: ['hills', 'hiking trails'],
            moods: ['energetic', 'adventurous', 'reflective', 'focused', 'curious']
        },
    
        // Parks/Recreation (happy, playful, social, peaceful)
        park: {
            keywords: ['park', 'playground', 'recreation', 'green space', 'picnic', 'lawn', 'field or park', 'grass', 'bench', 'shade', 'children', 'family'],
            searchTerms: ['parks', 'recreational areas'],
            moods: ['happy', 'playful', 'social', 'peaceful', 'cozy']
        },
    
        // Sports/Fitness/Active (energetic, angry, stressed, focused)
        fitness: {
            keywords: ['parkour', 'fitness', 'gym', 'exercise', 'workout', 'training', 'sports', 'athletic', 'run', 'jog', 'sprint', 'active', 'cardio', 'strength', 'yoga', 'cycling'],
            searchTerms: ['fitness centers', 'sports complexes'],
            moods: ['energetic', 'angry', 'stressed', 'focused', 'adventurous']
        },
    
        // Cultural/Historical (curious, creative, reflective, focused)
        cultural: {
            keywords: ['museum', 'art', 'culture', 'history', 'heritage', 'monument', 'temple', 'palace', 'fort', 'ancient', 'gallery', 'exhibition', 'sculpture', 'architecture'],
            searchTerms: ['museums', 'historical sites'],
            moods: ['curious', 'creative', 'reflective', 'focused', 'calm']
        },
    
        // Learning/Reading/Quiet (peaceful, reflective, focused, tired, sad)
        quiet: {
            keywords: ['reading', 'read','study', 'quiet', 'peaceful', 'meditation', 'mindful', 'contemplat', 'reflect', 'library', 'book', 'silence', 'solitude', 'thinking'],
            searchTerms: ['libraries', 'meditation centers'],
            moods: ['peaceful', 'reflective', 'focused', 'tired', 'sad', 'heartbreak']
        },
    
        // Food/Dining (social, happy, cozy, love, stressed)
        food: {
            keywords: ['food', 'restaurant', 'cafe', 'dining', 'eat', 'meal', 'coffee', 'tea', 'cuisine', 'cooking', 'brunch', 'dessert', 'bakery', 'comfort food'],
            searchTerms: ['restaurants', 'cafes'],
            moods: ['social', 'happy', 'cozy', 'love', 'stressed', 'tired']
        },
    
        // Shopping/Market (social, happy, creative, curious, stressed)
        shopping: {
            keywords: ['shop', 'market', 'mall', 'store', 'buy', 'purchase', 'retail', 'bazaar', 'vendor', 'browse', 'window shopping', 'boutique'],
            searchTerms: ['shopping malls', 'markets'],
            moods: ['social', 'happy', 'creative', 'curious', 'playful']
        },
    
        // Entertainment/Fun (happy, playful, social, creative)
        entertainment: {
            keywords: ['entertainment', 'fun', 'game', 'play', 'amusement', 'cinema', 'movie', 'theater', 'show', 'concert', 'music', 'dance', 'performance'],
            searchTerms: ['entertainment centers', 'cinemas'],
            moods: ['happy', 'playful', 'social', 'creative', 'curious']
        },
    
        // Adventure/Thrill (energetic, adventurous, angry, stressed)
        adventure: {
            keywords: ['adventure', 'thrill', 'exciting', 'adrenaline', 'extreme', 'challenge', 'daring', 'bold', 'risk', 'speed', 'intense'],
            searchTerms: ['adventure parks', 'extreme sports'],
            moods: ['energetic', 'adventurous', 'angry', 'curious']
        },
    
        // Urban/City (curious, creative, social, focused)
        urban: {
            keywords: ['urban', 'city', 'downtown', 'street', 'building', 'architecture', 'metropolitan', 'district', 'skyline', 'plaza', 'square'],
            searchTerms: ['city centers', 'urban parks'],
            moods: ['curious', 'creative', 'social', 'focused', 'adventurous']
        },
    
        // Wellness/Health (stressed, tired, sad, heartbreak, calm)
        wellness: {
            keywords: ['wellness', 'health', 'spa', 'relax', 'rejuvenat', 'heal', 'therapy', 'massage', 'yoga', 'mindfulness', 'breathing', 'restore'],
            searchTerms: ['wellness centers', 'spas'],
            moods: ['stressed', 'tired', 'sad', 'heartbreak', 'calm', 'peaceful']
        },
    
        // Cozy/Comfort (cozy, tired, sad, heartbreak, calm)
        cozy: {
            keywords: ['cozy', 'comfort', 'warm', 'intimate', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
            searchTerms: ['cozy cafes', 'intimate venues'],
            moods: ['cozy', 'tired', 'sad', 'heartbreak', 'calm']
        },
    
        // Creative/Artistic (creative, curious, happy, playful)
        creative: {
            keywords: ['creative', 'art', 'craft', 'paint', 'draw', 'design', 'artistic', 'workshop', 'studio', 'pottery', 'photography', 'music', 'writing', 'expression'],
            searchTerms: ['art studios', 'creative workshops'],
            moods: ['creative', 'curious', 'happy', 'playful', 'reflective']
        },
    
        // Social/Community (social, happy, playful, love)
        social: {
            keywords: ['social', 'community', 'friends', 'group', 'gathering', 'party', 'celebration', 'meet', 'connect', 'together', 'crowd', 'people', 'lively'],
            searchTerms: ['community centers', 'gathering spaces'],
            moods: ['social', 'happy', 'playful', 'love', 'curious']
        },
    
        // Romantic/Love (love, cozy, peaceful, calm)
        romantic: {
            keywords: ['romantic', 'love', 'couple', 'date', 'intimate', 'candlelight', 'sunset', 'scenic', 'private', 'secluded', 'beautiful', 'charming'],
            searchTerms: ['romantic spots', 'scenic viewpoints'],
            moods: ['love', 'cozy', 'peaceful', 'calm', 'happy']
        },
    
        // Energetic/Active (energetic, playful, happy, adventurous)
        energetic: {
            keywords: ['energetic', 'active', 'dynamic', 'vibrant', 'lively', 'bustling', 'upbeat', 'fast-paced', 'stimulating', 'invigorating'],
            searchTerms: ['activity centers', 'bustling areas'],
            moods: ['energetic', 'playful', 'happy', 'adventurous', 'social']
        },
    
        // Stress Relief (stressed, angry, tired, sad)
        stressRelief: {
            keywords: ['stress', 'relief', 'calm', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'pressure', 'overwhelming', 'breathe', 'escape'],
            searchTerms: ['relaxation centers', 'peaceful areas'],
            moods: ['stressed', 'angry', 'tired', 'overwhelmed']
        },
    
        // Healing/Recovery (sad, heartbreak, tired, stressed)
        healing: {
            keywords: ['healing', 'recovery', 'mend', 'restore', 'repair', 'comfort', 'support', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
            searchTerms: ['healing centers', 'support centers'],
            moods: ['sad', 'heartbreak', 'tired', 'stressed', 'calm']
        },
    
        // Focus/Productivity (focused, curious, reflective)
        focus: {
            keywords: ['focus', 'concentrate', 'productive', 'work', 'study', 'efficient', 'organized', 'clear', 'sharp', 'attentive', 'dedicated'],
            searchTerms: ['co-working spaces', 'study areas'],
            moods: ['focused', 'curious', 'reflective', 'calm']
        },
    
        // Music/Audio (playful, creative, happy, social, energetic)
        music: {
            keywords: ['music', 'audio', 'sound', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
            searchTerms: ['music venues', 'concert halls'],
            moods: ['playful', 'creative', 'happy', 'social', 'energetic']
        },
    
        // Night/Evening (cozy, romantic, social, creative, reflective)
        nightlife: {
            keywords: ['night', 'evening', 'dark', 'lights', 'illuminated', 'nightlife', 'late', 'moon', 'stars', 'ambient', 'atmospheric'],
            searchTerms: ['nightlife spots', 'evening venues'],
            moods: ['cozy', 'love', 'social', 'creative', 'reflective']
        }
    };

    // const keywordMappings = {
    //     // Nature/Outdoor - More specific outdoor activities
    //     outdoor: {
    //         keywords: ['trekking', 'hiking', 'camping', 'wildlife', 'safari', 'forest', 'nature trail', 'bird watching', 'rock climbing', 'wilderness'],
    //         searchTerms: ['nature reserves', 'national parks', 'wildlife sanctuaries', 'trekking spots'],
    //         moods: ['energetic', 'adventurous', 'peaceful', 'reflective'],
    //         priority: 1
    //     },
    
    //     // Water Activities - More specific water-related places
    //     water: {
    //         keywords: ['lake', 'reservoir', 'waterfall', 'river', 'pond', 'swimming', 'boating', 'fishing', 'riverside', 'lakeside'],
    //         searchTerms: ['lakes', 'reservoirs', 'waterfalls', 'swimming pools'],
    //         moods: ['peaceful', 'calm', 'reflective', 'love'],
    //         priority: 1
    //     },
    
    //     // Gardens/Botanical - Specific to plant life and gardens
    //     garden: {
    //         keywords: ['botanical garden', 'rose garden', 'flower show', 'nursery', 'greenhouse', 'arboretum', 'herb garden'],
    //         searchTerms: ['botanical gardens', 'rose gardens', 'nurseries', 'flower gardens'],
    //         moods: ['peaceful', 'calm', 'creative', 'love'],
    //         priority: 1
    //     },
    
    //     // Hills/Viewpoints - Elevation and scenic spots
    //     elevation: {
    //         keywords: ['hill station', 'viewpoint', 'sunrise point', 'sunset point', 'peak', 'summit', 'hilltop', 'valley view', 'scenic spot'],
    //         searchTerms: ['hills', 'viewpoints', 'sunrise points', 'scenic spots'],
    //         moods: ['energetic', 'adventurous', 'reflective', 'focused'],
    //         priority: 1
    //     },
    
    //     // Parks - General recreation areas
    //     park: {
    //         keywords: ['park', 'children park', 'dog park', 'jogging track', 'cycling track', 'picnic spot', 'playground'],
    //         searchTerms: ['parks', 'recreational parks', 'children parks', 'picnic spots'],
    //         moods: ['happy', 'playful', 'social', 'peaceful'],
    //         priority: 1
    //     },
    
    //     // Temples/Religious - Spiritual places
    //     temple: {
    //         keywords: ['temple', 'church', 'mosque', 'gurudwara', 'monastery', 'ashram', 'religious', 'spiritual', 'worship', 'pilgrimage'],
    //         searchTerms: ['temples', 'churches', 'religious places', 'spiritual centers'],
    //         moods: ['peaceful', 'reflective', 'calm', 'focused'],
    //         priority: 1
    //     },
    
    //     // Fitness/Sports - Active recreation
    //     fitness: {
    //         keywords: ['gym', 'fitness center', 'yoga studio', 'sports complex', 'swimming pool', 'badminton', 'tennis', 'cricket ground'],
    //         searchTerms: ['gyms', 'fitness centers', 'sports complexes', 'yoga studios'],
    //         moods: ['energetic', 'focused', 'stressed', 'angry'],
    //         priority: 1
    //     },
    
    //     // Cultural/Heritage - Historical and cultural sites
    //     cultural: {
    //         keywords: ['museum', 'palace', 'fort', 'heritage site', 'art gallery', 'cultural center', 'monument', 'archaeological'],
    //         searchTerms: ['museums', 'palaces', 'heritage sites', 'art galleries'],
    //         moods: ['curious', 'creative', 'reflective', 'focused'],
    //         priority: 1
    //     },
    
    //     // Libraries/Study - Quiet learning spaces
    //     study: {
    //         keywords: ['library', 'study center', 'reading room', 'co-working', 'study hall', 'quiet space'],
    //         searchTerms: ['libraries', 'study centers', 'co-working spaces', 'reading rooms'],
    //         moods: ['focused', 'reflective', 'tired', 'calm'],
    //         priority: 1
    //     },
    
    //     // Food/Dining - Eating establishments
    //     food: {
    //         keywords: ['restaurant', 'cafe', 'food court', 'street food', 'brewery', 'rooftop dining', 'fine dining', 'bakery'],
    //         searchTerms: ['restaurants', 'cafes', 'food courts', 'breweries'],
    //         moods: ['social', 'happy', 'cozy', 'love'],
    //         priority: 1
    //     },
    
    //     // Shopping - Retail and markets
    //     shopping: {
    //         keywords: ['mall', 'market', 'shopping center', 'bazaar', 'street market', 'boutique', 'commercial street'],
    //         searchTerms: ['shopping malls', 'markets', 'commercial areas', 'shopping centers'],
    //         moods: ['social', 'happy', 'creative', 'curious'],
    //         priority: 1
    //     },
    
    //     // Entertainment - Fun and recreation
    //     entertainment: {
    //         keywords: ['cinema', 'multiplex', 'theater', 'gaming zone', 'bowling', 'amusement park', 'adventure park'],
    //         searchTerms: ['cinemas', 'entertainment centers', 'amusement parks', 'gaming zones'],
    //         moods: ['happy', 'playful', 'social', 'creative'],
    //         priority: 1
    //     },
    
    //     // Wellness/Spa - Health and relaxation
    //     wellness: {
    //         keywords: ['spa', 'wellness center', 'massage', 'meditation center', 'ayurveda', 'therapy', 'health center'],
    //         searchTerms: ['spas', 'wellness centers', 'meditation centers', 'therapy centers'],
    //         moods: ['stressed', 'tired', 'sad', 'calm'],
    //         priority: 1
    //     },
    
    //     // Coffee/Cozy - Intimate spaces
    //     cozy: {
    //         keywords: ['coffee shop', 'tea house', 'book cafe', 'quiet cafe', 'intimate restaurant', 'cozy corner'],
    //         searchTerms: ['coffee shops', 'cozy cafes', 'tea houses', 'quiet cafes'],
    //         moods: ['cozy', 'tired', 'reflective', 'love'],
    //         priority: 1
    //     },
    
    //     // Art/Creative - Artistic spaces
    //     creative: {
    //         keywords: ['art studio', 'pottery', 'craft workshop', 'photography studio', 'music studio', 'dance studio'],
    //         searchTerms: ['art studios', 'craft centers', 'creative workshops', 'music studios'],
    //         moods: ['creative', 'curious', 'happy', 'playful'],
    //         priority: 1
    //     },
    
    //     // Nightlife - Evening entertainment
    //     nightlife: {
    //         keywords: ['pub', 'bar', 'nightclub', 'lounge', 'live music', 'night market', 'rooftop bar'],
    //         searchTerms: ['pubs', 'bars', 'nightclubs', 'lounges'],
    //         moods: ['social', 'happy', 'energetic', 'love'],
    //         priority: 1
    //     },
    
    //     // Beach/Water (for coastal searches or artificial beaches)
    //     beach: {
    //         keywords: ['beach', 'coastline', 'seaside', 'ocean', 'waves', 'sand', 'surf'],
    //         searchTerms: ['beaches', 'coastal areas', 'water parks', 'wave pools'],
    //         moods: ['peaceful', 'love', 'adventurous', 'happy'],
    //         priority: 1
    //     }
    // };

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
        setShowSearchResult(false)
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
        setShowSearchResult(false)
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

    // const generateSmartKeywords = (selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings) => {
    //     if (!selectedMood || !selectedAdventure) return '';

    //     const keywords = new Set();

    //     console.log(keywords, "werwerewr")
    //     // const fullText = `${selectedAdventure.title} ${selectedAdventure.description}`.toLowerCase();
    //     const fullText = `${selectedAdventure.title}`.toLowerCase();

    //     const fullDesc = `${selectedAdventure.description}`.toLowerCase();


    //     // Define semantic groups to avoid similar keywords
    //     // Expanded semantic groups for better keyword deduplication and coverage
    //     const semanticGroups = {
    //         music: ['music', 'sound', 'audio', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
    //         nature: ['trees', 'forest', 'greenery', 'plants', 'flora', 'wilderness', 'natural', 'scenic', 'landscape', 'open air', 'fresh air'],
    //         water: ['water', 'lake', 'river', 'pond', 'stream', 'beach', 'waves', 'waterfront', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'cascade'],
    //         peaceful: ['peaceful', 'calm', 'quiet', 'tranquil', 'serene', 'solitude', 'silence', 'mindful', 'meditation'],
    //         healing: ['healing', 'wellness', 'therapy', 'recovery', 'restore', 'mend', 'relief', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'overwhelming', 'breathe', 'escape', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
    //         exercise: ['fitness', 'gym', 'workout', 'exercise', 'training', 'sports', 'athletic', 'run', 'jog', 'sprint', 'active', 'cardio', 'strength', 'yoga', 'cycling', 'parkour'],
    //         outdoor: ['outdoor', 'outside', 'nature', 'wilderness', 'open air', 'greenery', 'park', 'hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'ridge', 'cliff', 'valley', 'garden', 'botanical'],
    //         social: ['social', 'community', 'friends', 'group', 'gathering', 'party', 'celebration', 'meet', 'connect', 'together', 'crowd', 'people', 'lively'],
    //         creative: ['creative', 'art', 'artistic', 'craft', 'paint', 'draw', 'design', 'workshop', 'studio', 'pottery', 'photography', 'writing', 'expression', 'gallery', 'exhibition', 'sculpture'],
    //         food: ['food', 'restaurant', 'cafe', 'dining', 'meal', 'picnic', 'eat', 'coffee', 'tea', 'cuisine', 'cooking', 'brunch', 'dessert', 'bakery', 'comfort food', 'snacks'],
    //         urban: ['urban', 'city', 'downtown', 'street', 'building', 'architecture', 'metropolitan', 'district', 'skyline', 'plaza', 'square', 'commercial', 'center'],
    //         heartbreak: ['heartbreak', 'broken', 'sad', 'numb', 'mend', 'solace', 'recovery'],
    //         reading: ['reading', 'book', 'library', 'study', 'quiet', 'contemplate', 'reflect', 'notebook'],
    //         candlelight: ['candlelight', 'candle', 'romantic', 'intimate', 'cozy', 'warm', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
    //         couple: ["date", 'couple', 'lover', 'love', 'partner', 'flowers', 'gift', 'affection'],
    //         sunrise: ['sunrise', 'sunset', 'dawn', 'dusk', 'evening', 'night', 'moon', 'stars', 'ambient', 'atmospheric', 'illuminated', 'late'],
    //         cafe: ['cafe', 'coffee', 'coffee shop', 'tea house', 'bakery'],
    //         shopping: ['shop', 'market', 'mall', 'store', 'buy', 'purchase', 'retail', 'bazaar', 'vendor', 'browse', 'window shopping', 'boutique'],
    //         entertainment: ['entertainment', 'fun', 'game', 'play', 'amusement', 'cinema', 'movie', 'theater', 'show', 'performance', 'gaming', 'amusement park'],
    //         elevation: ['hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'ridge', 'cliff', 'valley'],
    //         wellness: ['wellness', 'health', 'spa', 'relax', 'rejuvenate', 'heal', 'therapy', 'massage', 'yoga', 'mindfulness', 'breathing', 'restore'],
    //         cozy: ['cozy', 'comfort', 'warm', 'intimate', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
    //         nightlife: ['night', 'evening', 'dark', 'lights', 'illuminated', 'nightlife', 'late', 'moon', 'stars', 'ambient', 'atmospheric'],
    //         adventure: ['adventure', 'thrill', 'exciting', 'adrenaline', 'extreme', 'challenge', 'daring', 'bold', 'risk', 'speed', 'intense'],
    //         focus: ['focus', 'concentrate', 'productive', 'work', 'study', 'efficient', 'organized', 'clear', 'sharp', 'attentive', 'dedicated'],
    //         garden: ['garden', 'botanical', 'flowers', 'plants', 'greenery', 'bloom', 'flora', 'herb', 'roses', 'petals', 'fragrance', 'blossom', 'orchid', 'tulip'],
    //         park: ['park', 'playground', 'recreation', 'green space', 'picnic', 'lawn', 'field', 'grass', 'bench', 'shade', 'children', 'family'],
    //     };

    //     // Function to check if keyword belongs to any semantic group
    //     const getSemanticGroup = (keyword) => {
    //         for (const [group, terms] of Object.entries(semanticGroups)) {
    //             if (terms.includes(keyword.toLowerCase())) {
    //                 return group;
    //             }
    //         }
    //         return null;
    //     };

    //     // Track which semantic groups we've already added
    //     const usedGroups = new Set();
    //     const prioritizedKeywords = [];

    //     // 0. PRIORITY: If the adventure title matches a known keyword exactly (whole word), use that as the top keyword
    //     const titleWords = fullText.split(/\s+/).map(w => w.replace(/[’'".,!?]/g, '').toLowerCase());
    //     let foundTitleKeyword = null;
    //     Object.values(keywordMappings).forEach(config => {
    //         config.keywords.forEach(keyword => {
    //             const keywordLower = keyword.toLowerCase();
    //             // Check for exact match in title words
    //             if (titleWords.includes(keywordLower)) {
    //                 foundTitleKeyword = keyword;
    //             }
    //             // Check for partial match: keyword is substring of any title word or vice versa
    //             if (
    //                 !foundTitleKeyword &&
    //                 titleWords.some(word => word.includes(keywordLower) || keywordLower.includes(word))
    //             ) {
    //                 foundTitleKeyword = keyword;
    //             }
    //         });
    //     });
    //     if (foundTitleKeyword) {
    //         // Add the found keyword as the highest priority and its semantic group
    //         prioritizedKeywords.unshift({ keyword: foundTitleKeyword, priority: 100, source: 'title-exact' });
    //     }

    //     // 1. Add mood-specific keywords with priority scoring
    //     const moodCategories = moodCategoryMappings[selectedMood.id] || [];
    //     moodCategories.forEach((category, categoryIndex) => {
    //         if (keywordMappings[category]) {
    //             keywordMappings[category].keywords.forEach((keyword, keywordIndex) => {
    //                 if (fullText.includes(keyword.toLowerCase())) {
    //                     const priority = (moodCategories.length - categoryIndex) * 10 + (10 - keywordIndex);
    //                     prioritizedKeywords.push({ keyword, priority, source: 'mood' });
    //                 }
    //             });
    //         }
    //     });

    //     // 2. Extract keywords from adventure content with lower priority
    //     Object.entries(keywordMappings).forEach(([category, config]) => {
    //         config.keywords.forEach((keyword, index) => {
    //             if (fullText.includes(keyword.toLowerCase())) {
    //                 const priority = 5 - (index * 0.1); // Lower priority than mood keywords
    //                 prioritizedKeywords.push({ keyword, priority, source: 'title' });
    //             }
    //         });
    //     });

    //     // 3. Extract keywords from adventure description with even lower priority
    //     Object.entries(keywordMappings).forEach(([category, config]) => {
    //         config.keywords.forEach((keyword, index) => {
    //             if (fullDesc.includes(keyword.toLowerCase())) {
    //                 const priority = 3 - (index * 0.05); // Even lower priority for description matches
    //                 prioritizedKeywords.push({ keyword, priority, source: 'description' });
    //             }
    //         });
    //     });








    //     // 3. Sort by priority and add keywords avoiding semantic duplicates
    //     prioritizedKeywords
    //         .sort((a, b) => b.priority - a.priority)
    //         .forEach(({ keyword }) => {
    //             const semanticGroup = getSemanticGroup(keyword);

    //             if (semanticGroup) {
    //                 // If this semantic group hasn't been used, add the keyword
    //                 if (!usedGroups.has(semanticGroup)) {
    //                     keywords.add(keyword);
    //                     usedGroups.add(semanticGroup);
    //                 }
    //             } else {
    //                 // No semantic group, add directly
    //                 keywords.add(keyword);
    //             }
    //         });

    //     // 4. Add high-level category keywords if we need more and they don't conflict
    //     // if (keywords.size < 6) {
    //     //     const categoryKeywords = ['parks', 'gentle', 'activity',];
    //     //     categoryKeywords.forEach(keyword => {
    //     //         if (keywords.size < 8 && !getSemanticGroup(keyword)) {
    //     //             keywords.add(keyword);
    //     //         }
    //     //     });
    //     // }

    //     // 5. Final cleanup and formatting
    //     const keywordArray = Array.from(keywords)
    //         .filter(keyword => keyword.length > 2) // Remove very short keywords
    //         .slice(0, 5); // Limit to 8 keywords




    //     // if (keywordArray.includes('water')) {
    //     //     keywords.add('Towel');
    //     //     keywords.add('Swimwear');
    //     // }
    //     // if (keywordArray.includes('parkour') || keywordArray.includes('fitness') || keywordArray.includes('exercise')) {
    //     //     keywords.add('Sports shoes');
    //     //     keywords.add('Comfortable clothes');
    //     // }
    //     // if (keywordArray.includes('garden') || keywordArray.includes('outdoor') || keywordArray.includes('nature')) {
    //     //     keywords.add('Hat');
    //     //     keywords.add('Sunscreen');
    //     // }
    //     // if (keywordArray.includes('reading') || keywordArray.includes('quiet') || keywordArray.includes('library')) {
    //     //     keywords.add('Book');
    //     //     keywords.add('Notebook');
    //     // }
    //     // if (keywordArray.includes('food') || keywordArray.includes('picnic')) {
    //     //     keywords.add('Snacks');
    //     //     keywords.add('Reusable bottle');
    //     // }
    //     // if (keywordArray.includes('music')) {
    //     //     keywords.add('Headphones');
    //     // }
    //     // if (keywordArray.includes('photography') || keywordArray.includes('camera')) {
    //     //     keywords.add('Camera');
    //     // }
    //     // if (keywordArray.includes('hike') || keywordArray.includes('hill') || keywordArray.includes('mountain')) {
    //     //     keywords.add('Hiking shoes');
    //     //     keywords.add('Backpack');
    //     // }
    //     // if (keywordArray.includes('cozy')) {
    //     //     keywords.add('Sweater');
    //     //     keywords.add('Blanket');
    //     // }
    //     // if (keywordArray.includes('sunset') || keywordArray.includes('evening')) {
    //     //     keywords.add('Light jacket');
    //     // }
    //     // Avoid updating selectedAdventure here to prevent infinite loops.
    //     // setSelectedAdventure(adventureDatabaseData[currentMood.id][idx]);
    //     // console.log('Updated adventureDatabaseData:', adventureDatabaseData[currentMood.id][idx]);



    //     // console.log('Updating whatToBring for:', selectedAdventure?.title, currentMood?.id);
    //     // if (selectedAdventure && currentMood && adventureDatabaseData[currentMood.id]) {
    //     //     const idx = adventureDatabaseData[currentMood.id].findIndex(
    //     //         adv => adv.title === selectedAdventure.title
    //     //     );
    //     //     if (idx !== -1) {
    //     //         adventureDatabaseData[currentMood.id][idx] = {
    //     //             ...adventureDatabaseData[currentMood.id][idx],
    //     //             ...selectedAdventure,
    //     //             whatToBring: generateWhatToBring(
    //     //                 selectedAdventure,
    //     //                 currentMood,
    //     //                 keywordMappings,
    //     //                 moodCategoryMappings
    //     //             )
    //     //         };

    //     //         setSelectedAdventure(adventureDatabaseData[currentMood.id][idx]);
    //     //         console.log('Updated adventureDatabaseData:', adventureDatabaseData[currentMood.id][idx]);
    //     //     }
    //     // }

    //     return keywordArray.join(', ');





    // };

    // Enhanced "What to Bring" recommendations based on keywords and adventure type
   
   
    // const generateSmartKeywords = (selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings) => {
    //     if (!selectedMood || !selectedAdventure) return '';
    
    //     const keywords = new Set();
        
    //     console.log(keywords, "werwerewr")
    //     const fullText = `${selectedAdventure.title}`.toLowerCase();
    //     const fullDesc = `${selectedAdventure.description}`.toLowerCase();
    
    //     // Define semantic groups to avoid similar keywords
    //     const semanticGroups = {
    //         music: ['music', 'sound', 'audio', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
    //         nature: ['trees', 'forest', 'greenery', 'plants', 'flora', 'wilderness', 'natural', 'scenic', 'landscape', 'open air', 'fresh air'],
    //         water: ['water', 'lake', 'river', 'pond', 'stream', 'beach', 'waves', 'waterfront', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'cascade'],
    //         peaceful: ['peaceful', 'calm', 'quiet', 'tranquil', 'serene', 'solitude', 'silence', 'mindful', 'meditation'],
    //         healing: ['healing', 'wellness', 'therapy', 'recovery', 'restore', 'mend', 'relief', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'overwhelming', 'breathe', 'escape', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
    //         exercise: ['fitness', 'gym', 'workout', 'exercise', 'training', 'sports', 'athletic', 'run', 'jog', 'sprint', 'active', 'cardio', 'strength', 'yoga', 'cycling', 'parkour'],
    //         outdoor: ['outdoor', 'outside', 'nature', 'wilderness', 'open air', 'greenery', 'park', 'hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'ridge', 'cliff', 'valley', 'garden', 'botanical'],
    //         social: ['social', 'community', 'friends', 'group', 'gathering', 'party', 'celebration', 'meet', 'connect', 'together', 'crowd', 'people', 'lively'],
    //         creative: ['creative', 'art', 'artistic', 'craft', 'paint', 'draw', 'design', 'workshop', 'studio', 'pottery', 'photography', 'writing', 'expression', 'gallery', 'exhibition', 'sculpture'],
    //         food: ['food', 'restaurant', 'cafe', 'dining', 'meal', 'picnic', 'eat', 'coffee', 'tea', 'cuisine', 'cooking', 'brunch', 'dessert', 'bakery', 'comfort food', 'snacks'],
    //         urban: ['urban', 'city', 'downtown', 'street', 'building', 'architecture', 'metropolitan', 'district', 'skyline', 'plaza', 'square', 'commercial', 'center'],
    //         heartbreak: ['heartbreak', 'broken', 'sad', 'numb', 'mend', 'solace', 'recovery'],
    //         reading: ['reading', 'book', 'library', 'study', 'quiet', 'contemplate', 'reflect', 'notebook'],
    //         candlelight: ['candlelight', 'candle', 'romantic', 'intimate', 'cozy', 'warm', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
    //         couple: ["date", 'couple', 'lover', 'love', 'partner', 'flowers', 'gift', 'affection'],
    //         sunrise: ['sunrise', 'sunset', 'dawn', 'dusk', 'evening', 'night', 'moon', 'stars', 'ambient', 'atmospheric', 'illuminated', 'late'],
    //         cafe: ['cafe', 'coffee', 'coffee shop', 'tea house', 'bakery'],
    //         shopping: ['shop', 'market', 'mall', 'store', 'buy', 'purchase', 'retail', 'bazaar', 'vendor', 'browse', 'window shopping', 'boutique'],
    //         entertainment: ['entertainment', 'fun', 'game', 'play', 'amusement', 'cinema', 'movie', 'theater', 'show', 'performance', 'gaming', 'amusement park'],
    //         elevation: ['hill', 'mountain', 'peak', 'summit', 'climb', 'hike', 'trek', 'altitude', 'viewpoint', 'overlook', 'ridge', 'cliff', 'valley'],
    //         wellness: ['wellness', 'health', 'spa', 'relax', 'rejuvenate', 'heal', 'therapy', 'massage', 'yoga', 'mindfulness', 'breathing', 'restore'],
    //         cozy: ['cozy', 'comfort', 'warm', 'intimate', 'snug', 'homey', 'blanket', 'fireplace', 'soft', 'cushion', 'nook', 'hideaway', 'shelter'],
    //         nightlife: ['night', 'evening', 'dark', 'lights', 'illuminated', 'nightlife', 'late', 'moon', 'stars', 'ambient', 'atmospheric'],
    //         adventure: ['adventure', 'thrill', 'exciting', 'adrenaline', 'extreme', 'challenge', 'daring', 'bold', 'risk', 'speed', 'intense'],
    //         focus: ['focus', 'concentrate', 'productive', 'work', 'study', 'efficient', 'organized', 'clear', 'sharp', 'attentive', 'dedicated'],
    //         garden: ['garden', 'botanical', 'flowers', 'plants', 'greenery', 'bloom', 'flora', 'herb', 'roses', 'petals', 'fragrance', 'blossom', 'orchid', 'tulip'],
    //         park: ['park', 'playground', 'recreation', 'green space', 'picnic', 'lawn', 'field', 'grass', 'bench', 'shade', 'children', 'family'],
    //     };
    
    //     // Function to check if keyword belongs to any semantic group
    //     const getSemanticGroup = (keyword) => {
    //         for (const [group, terms] of Object.entries(semanticGroups)) {
    //             if (terms.includes(keyword.toLowerCase())) {
    //                 return group;
    //             }
    //         }
    //         return null;
    //     };
    
    //     // Track which semantic groups we've already added AND track exact keywords
    //     const usedGroups = new Set();
    //     const usedKeywords = new Set(); // NEW: Track exact keywords to prevent duplicates
    //     const prioritizedKeywords = [];
    
    //     // Helper function to add keyword with deduplication
    //     const addKeywordIfUnique = (keyword, priority, source) => {
    //         const keywordLower = keyword.toLowerCase();
            
    //         // Skip if exact keyword already added
    //         if (usedKeywords.has(keywordLower)) {
    //             return false;
    //         }
            
    //         const semanticGroup = getSemanticGroup(keyword);
            
    //         // Skip if semantic group already used
    //         if (semanticGroup && usedGroups.has(semanticGroup)) {
    //             return false;
    //         }
            
    //         // Add the keyword
    //         prioritizedKeywords.push({ keyword, priority, source });
    //         usedKeywords.add(keywordLower);
    //         if (semanticGroup) {
    //             usedGroups.add(semanticGroup);
    //         }
            
    //         return true;
    //     };
    
    //     // 0. PRIORITY: If the adventure title matches a known keyword exactly (whole word), use that as the top keyword
    //     const titleWords = fullText.split(/\s+/).map(w => w.replace(/[''".,!?]/g, '').toLowerCase());
    //     let foundTitleKeyword = null;
        
    //     Object.values(keywordMappings).forEach(config => {
    //         config.keywords.forEach(keyword => {
    //             const keywordLower = keyword.toLowerCase();
    //             // Check for exact match in title words
    //             if (titleWords.includes(keywordLower)) {
    //                 foundTitleKeyword = keyword;
    //             }
    //             // Check for partial match: keyword is substring of any title word or vice versa
    //             if (
    //                 !foundTitleKeyword &&
    //                 titleWords.some(word => word.includes(keywordLower) || keywordLower.includes(word))
    //             ) {
    //                 foundTitleKeyword = keyword;
    //             }
    //         });
    //     });
        
    //     if (foundTitleKeyword) {
    //         addKeywordIfUnique(foundTitleKeyword, 95, 'title-exact');
    //     }
    
    //     // 1. Add mood-specific keywords with priority scoring
    //     const moodCategories = moodCategoryMappings[selectedMood.id] || [];
    //     moodCategories.forEach((category, categoryIndex) => {
    //         if (keywordMappings[category]) {
    //             keywordMappings[category].keywords.forEach((keyword, keywordIndex) => {
    //                 if (fullText.includes(keyword.toLowerCase())) {
    //                     const priority = (moodCategories.length - categoryIndex) * 10 + (10 - keywordIndex);
    //                     addKeywordIfUnique(keyword, priority, 'mood');
    //                 }
    //             });
    //         }
    //     });
    
    //     // 2. Extract keywords from adventure content with lower priority
    //     Object.entries(keywordMappings).forEach(([category, config]) => {
    //         config.keywords.forEach((keyword, index) => {
    //             if (fullText.includes(keyword.toLowerCase())) {
    //                 const priority = 5 - (index * 0.1);
    //                 addKeywordIfUnique(keyword, priority, 'title');
    //             }
    //         });
    //     });
    
    //    // 3. Extract keywords from adventure description with even lower priority
    //     Object.entries(keywordMappings).forEach(([category, config]) => {
    //         config.keywords.forEach((keyword, index) => {
    //             if (fullDesc.includes(keyword.toLowerCase())) {
    //                 const priority = 3 - (index * 0.05);
    //                 addKeywordIfUnique(keyword, priority, 'description');
    //             }
    //         });
    //     });
    
    //     // 4. Sort by priority and build final keywords set
    //     const finalKeywords = prioritizedKeywords
    //         .sort((a, b) => b.priority - a.priority)
    //         .map(({ keyword }) => keyword)
    //         .filter(keyword => keyword.length > 2) // Remove very short keywords
    //         .slice(0, 5); // Limit to 5 keywords max
    
    //     console.log('Final keywords:', finalKeywords);
    //     console.log('Used groups:', Array.from(usedGroups));
    //     console.log('Used keywords:', Array.from(usedKeywords));
    
    //     return finalKeywords.join(', ');
    // };
   
// Enhanced search handler that respects indoor/outdoor detection
const handleSmartSearch = async (selectedMood, selectedAdventure, city, state, keywordMappings, moodCategoryMappings) => {
    // Generate smart keywords with indoor/outdoor detection
    const keywordResult = generateSmartKeywords(selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings);
    
    console.log("Keyword generation result:", keywordResult);
    
    // If it's an indoor adventure, return static results
    if (keywordResult.searchType === 'indoor' && keywordResult.staticResults.length > 0) {
        console.log("Returning static indoor results");
        return {
            results: keywordResult.staticResults.map(result => ({
                address: result.name,
                description: result.description,
                gettingThere: "This is an indoor activity - location depends on your choice",
                parking: "Check specific venue for parking availability",
                category: 'indoor_activity',
                searchTerm: 'static',
                confidence: 100,
                contextRelevance: 90,
                isStatic: true,
                searchType: 'indoor'
            })),
            searchType: 'indoor',
            keywords: keywordResult.keywords,
            message: "These are curated indoor suggestions for your adventure. No location search needed!"
        };
    }
    
    // If outdoor or mixed, proceed with location search
    if (keywordResult.shouldSearch && keywordResult.keywords) {
        console.log("Proceeding with outdoor location search");
        try {
            const searchResults = await searchPlacesWithOpenCage(keywordResult.keywords, city, state);
            return {
                results: searchResults,
                searchType: keywordResult.searchType,
                keywords: keywordResult.keywords,
                message: `Found ${searchResults.length} locations for your ${keywordResult.searchType} adventure`
            };
        } catch (error) {
            console.error("Search failed:", error);
            return {
                results: [],
                searchType: keywordResult.searchType,
                keywords: keywordResult.keywords,
                message: "Search failed. Please try again or check your internet connection.",
                error: true
            };
        }
    }
    
    // Fallback case
    return {
        results: keywordResult.staticResults || [],
        searchType: keywordResult.searchType,
        keywords: keywordResult.keywords,
        message: "No specific locations found. Consider the suggested indoor activities or try a different adventure."
    };
};

// Helper function to categorize adventures based on API data
const categorizeAdventureFromAPI = (adventure) => {
    const title = adventure.title?.toLowerCase() || '';
    const description = adventure.description?.toLowerCase() || '';
    const category = adventure.category?.toLowerCase() || '';
    
    // Enhanced categorization based on your API data patterns
    const categories = {
        indoor: [
            'reading', 'book', 'journal', 'writing', 'meditation', 'reflection',
            'cooking', 'baking', 'craft', 'art', 'music at home', 'movie', 'film',
            'candlelight', 'cozy', 'intimate', 'fireplace', 'blanket', 'comfort',
            'indoor', 'inside', 'home', 'personal', 'private'
        ],
        outdoor: [
            'rooftop', 'terrace', 'balcony', 'garden', 'park', 'nature',
            'outdoor', 'outside', 'fresh air', 'skyline', 'sunset', 'sunrise',
            'walk', 'explore', 'adventure', 'city', 'street', 'plaza'
        ],
        social: [
            'together', 'couple', 'friends', 'group', 'social', 'sharing',
            'storytelling', 'conversation', 'connect', 'meet'
        ],
        food: [
            'dining', 'restaurant', 'cafe', 'food', 'meal', 'coffee', 'tea',
            'cooking', 'eating', 'picnic', 'brunch', 'dinner'
        ],
        wellness: [
            'healing', 'therapy', 'wellness', 'relax', 'peaceful', 'calm',
            'meditation', 'mindful', 'breathe', 'restore', 'recovery'
        ],
        creative: [
            'creative', 'art', 'craft', 'paint', 'draw', 'design', 'music',
            'photography', 'writing', 'expression', 'artistic'
        ],
        romantic: [
            'romantic', 'love', 'intimate', 'candlelight', 'couple', 'partner',
            'affection', 'flowers', 'date', 'lover'
        ]
    };
    
    const scores = {};
    Object.keys(categories).forEach(cat => scores[cat] = 0);
    
    // Score based on title, description, and category
    Object.entries(categories).forEach(([cat, keywords]) => {
        keywords.forEach(keyword => {
            if (title.includes(keyword)) scores[cat] += 3;
            if (description.includes(keyword)) scores[cat] += 2;
            if (category.includes(keyword)) scores[cat] += 4;
        });
    });
    
    // Return the highest scoring categories
    const sortedCategories = Object.entries(scores)
        .filter(([cat, score]) => score > 0)
        .sort(([,a], [,b]) => b - a)
        .map(([cat]) => cat);
    
    return {
        primary: sortedCategories[0] || 'general',
        secondary: sortedCategories[1] || null,
        scores: scores,
        isIndoor: scores.indoor > scores.outdoor,
        isOutdoor: scores.outdoor > scores.indoor,
        isMixed: scores.indoor === scores.outdoor && scores.indoor > 0
    };
};

// Function to get adventure recommendations based on mood and category
const getAdventureRecommendations = async (moodId, city) => {
    try {
        const response = await fetch('https://moodspace-api-production.up.railway.app/adventures');
        const adventures = await response.json();
        
        // Filter and categorize based on mood and location context
        const recommendedAdventures = adventures
            .map(adventure => ({
                ...adventure,
                categoryInfo: categorizeAdventureFromAPI(adventure)
            }))
            .filter(adventure => {
                // Add mood-specific filtering logic here if needed
                return true; // For now, return all adventures
            })
            .sort((a, b) => {
                // Sort by relevance - indoor adventures first if it's a personal/reflective mood
                // This is where you can add mood-based sorting logic
                return b.categoryInfo.scores[b.categoryInfo.primary] - a.categoryInfo.scores[a.categoryInfo.primary];
            });
        
        return recommendedAdventures;
    } catch (error) {
        console.error('Failed to fetch adventures:', error);
        return [];
    }
};


    const generateSmartKeywords = (selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings) => {
        if (!selectedMood || !selectedAdventure) return { keywords: '', searchType: 'outdoor', staticResults: [] };
    
        const keywords = new Set();
        console.log("Generating smart keywords for:", selectedAdventure.title);
        
        const fullText = `${selectedAdventure.title}`.toLowerCase();
        const fullDesc = `${selectedAdventure.description}`.toLowerCase();
        const category = selectedAdventure.category?.toLowerCase() || '';
    
        // Define indoor/outdoor indicators
        const indoorIndicators = [
            'indoor', 'inside', 'home', 'room', 'bedroom', 'living room', 'kitchen', 
            'cozy', 'blanket', 'fireplace', 'candlelight', 'intimate', 'private',
            'reading', 'book', 'journal', 'writing', 'meditation', 'reflection',
            'cooking', 'baking', 'craft', 'art', 'music at home', 'movie', 'film',
            'bath', 'shower', 'comfort', 'nest', 'sanctuary', 'hideaway',
            'apartment', 'house', 'shelter', 'warmth','stars', 'moonlight', 'night', 'evening', 'candle', 'soft lighting', 'quiet', 'peaceful'
        ];
    
        const outdoorIndicators = [
            'outdoor', 'outside', 'nature', 'park', 'garden', 'forest', 'beach',
            'mountain', 'hill', 'rooftop', 'terrace', 'balcony', 'fresh air',
            'skyline', 'sunset', 'sunrise', , 'walk', 'hike',
            'picnic', 'adventure', 'explore', 'city', 'street', 'cafe', 'restaurant',
            'bar', 'club', 'shopping', 'market', 'plaza', 'square'
        ];
    
        // Determine if adventure is indoor or outdoor
        const detectSearchType = () => {
            let indoorScore = 0;
            let outdoorScore = 0;
            
            const textToAnalyze = `${fullText} ${fullDesc} ${category}`;
            
            indoorIndicators.forEach(indicator => {
                if (textToAnalyze.includes(indicator)) {
                    indoorScore += indicator === 'indoor' || indicator === 'inside' || indicator === 'home' ? 3 : 1;
                }
            });
            
            outdoorIndicators.forEach(indicator => {
                if (textToAnalyze.includes(indicator)) {
                    outdoorScore += indicator === 'outdoor' || indicator === 'outside' || indicator === 'rooftop' ? 3 : 1;
                }
            });
    
            // Special category-based rules
            if (['home', 'personal', 'reflection', 'meditation', 'comfort'].includes(category)) {
                indoorScore += 2;
            }
            
            if (['adventure', 'exploration', 'nature', 'social', 'nightlife'].includes(category)) {
                outdoorScore += 2;
            }
    
            console.log(`Indoor score: ${indoorScore}, Outdoor score: ${outdoorScore}`);
            
            if (indoorScore > outdoorScore && indoorScore >= 2) {
                return 'indoor';
            } else if (outdoorScore > indoorScore) {
                return 'outdoor';
            } else {
                return 'mixed'; // Can be both indoor and outdoor
            }
        };
    
        const searchType = detectSearchType();
        
        // Static indoor results for common indoor activities
        const generateStaticIndoorResults = () => {
            const staticResults = [];
            
            if (fullText.includes('reading') || fullText.includes('book')) {
                staticResults.push(
                    { name: 'Your Favorite Reading Nook', description: 'Create a cozy corner with soft lighting and comfortable cushions' },
                    { name: 'Local Library', description: 'Find a quiet study area or reading room' },
                    { name: 'Bookstore Cafe', description: 'Browse books while enjoying coffee' }
                );
            }
            
            if (fullText.includes('cooking') || fullText.includes('food')) {
                staticResults.push(
                    { name: 'Your Kitchen', description: 'Cook together and create something delicious' },
                    { name: 'Cooking Class Studio', description: 'Learn new recipes in a structured environment' }
                );
            }
            
            if (fullText.includes('movie') || fullText.includes('film')) {
                staticResults.push(
                    { name: 'Home Theater Setup', description: 'Create cinema experience at home with dim lights and snacks' },
                    { name: 'Local Cinema', description: 'Choose a movie that matches your mood' }
                );
            }
            
            if (fullText.includes('meditation') || fullText.includes('reflection')) {
                staticResults.push(
                    { name: 'Quiet Indoor Space', description: 'Find a peaceful corner for mindfulness practice' },
                    { name: 'Meditation Center', description: 'Join a guided session or use their quiet space' }
                );
            }
            
            if (fullText.includes('art') || fullText.includes('creative')) {
                staticResults.push(
                    { name: 'Art Studio or Workshop', description: 'Express creativity in a dedicated space' },
                    { name: 'Home Creative Corner', description: 'Set up art supplies in good lighting' }
                );
            }
            
            if (fullText.includes('music')) {
                staticResults.push(
                    { name: 'Music Room at Home', description: 'Play instruments or listen to meaningful songs' },
                    { name: 'Music Studio', description: 'Rent practice space or recording time' }
                );
            }
            
            // Default cozy indoor options
            if (staticResults.length === 0) {
                staticResults.push(
                    { name: 'Cozy Home Environment', description: 'Create ambiance with soft lighting, comfortable seating, and warm atmosphere' },
                    { name: 'Quiet Cafe', description: 'Find an intimate corner in a peaceful coffee shop' },
                    { name: 'Private Study Room', description: 'Book a quiet space in library or co-working area' }
                );
            }
            
            return staticResults.slice(0, 6); // Limit to 6 results
        };
    
        // Generate keywords based on search type
        const generateKeywordsForType = () => {
            // Define semantic groups (same as before)
            const semanticGroups = {
                music: ['music', 'sound', 'audio', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
                nature: ['trees', 'forest', 'greenery', 'plants', 'flora', 'wilderness', 'natural', 'scenic', 'landscape', 'open air', 'fresh air'],
                water: ['water', 'lake', 'river', 'pond', 'stream', 'beach', 'waves', 'waterfront', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'cascade'],
                peaceful: ['peaceful', 'calm', 'quiet', 'tranquil', 'serene', 'solitude', 'silence', 'mindful', 'meditation'],
                healing: ['healing', 'wellness', 'therapy', 'recovery', 'restore', 'mend', 'relief', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'overwhelming', 'breathe', 'escape', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
                indoor_activities: ['cafe', 'library', 'bookstore', 'art gallery', 'museum', 'studio', 'workshop', 'cinema', 'theater', 'indoor', 'cozy space'],
                outdoor_activities: ['park', 'garden', 'rooftop', 'terrace', 'outdoor cafe', 'street', 'plaza', 'viewpoint', 'nature walk'],
                social: ['social', 'community', 'friends', 'group', 'gathering', 'party', 'celebration', 'meet', 'connect', 'together', 'crowd', 'people', 'lively'],
                romantic: ['romantic', 'intimate', 'couple', 'lover', 'love', 'partner', 'flowers', 'gift', 'affection', 'candlelight', 'cozy'],
                creative: ['creative', 'art', 'artistic', 'craft', 'paint', 'draw', 'design', 'workshop', 'studio', 'pottery', 'photography', 'writing', 'expression'],
                food: ['food', 'restaurant', 'cafe', 'dining', 'meal', 'picnic', 'eat', 'coffee', 'tea', 'cuisine', 'cooking', 'brunch', 'dessert', 'bakery']
            };
    
            const getSemanticGroup = (keyword) => {
                for (const [group, terms] of Object.entries(semanticGroups)) {
                    if (terms.includes(keyword.toLowerCase())) {
                        return group;
                    }
                }
                return null;
            };
    
            const usedGroups = new Set();
            const usedKeywords = new Set();
            const prioritizedKeywords = [];
    
            const addKeywordIfUnique = (keyword, priority, source) => {
                const keywordLower = keyword.toLowerCase();
                
                // For indoor adventures, skip outdoor-specific keywords
                if (searchType === 'indoor') {
                    const outdoorKeywords = ['park', 'garden', 'outdoor', 'nature walk', 'hiking', 'beach', 'mountain', 'forest'];
                    if (outdoorKeywords.some(outdoor => keywordLower.includes(outdoor))) {
                        return false;
                    }
                }
                
                if (usedKeywords.has(keywordLower)) {
                    return false;
                }
                
                const semanticGroup = getSemanticGroup(keyword);
                
                if (semanticGroup && usedGroups.has(semanticGroup)) {
                    return false;
                }
                
                prioritizedKeywords.push({ keyword, priority, source });
                usedKeywords.add(keywordLower);
                if (semanticGroup) {
                    usedGroups.add(semanticGroup);
                }
                
                return true;
            };
    
            // Priority 1: Exact title keyword matches
            const titleWords = fullText.split(/\s+/).map(w => w.replace(/[''".,!?]/g, '').toLowerCase());
            let foundTitleKeyword = null;
            
            Object.values(keywordMappings).forEach(config => {
                config.keywords.forEach(keyword => {
                    const keywordLower = keyword.toLowerCase();
                    if (titleWords.includes(keywordLower)) {
                        foundTitleKeyword = keyword;
                    }
                    if (!foundTitleKeyword && titleWords.some(word => word.includes(keywordLower) || keywordLower.includes(word))) {
                        foundTitleKeyword = keyword;
                    }
                });
            });
            
            if (foundTitleKeyword) {
                addKeywordIfUnique(foundTitleKeyword, 95, 'title-exact');
            }
    
            // Priority 2: Search type specific keywords
            if (searchType === 'indoor') {
                const indoorKeywords = ['cafe', 'library', 'bookstore', 'cozy', 'indoor', 'quiet', 'intimate', 'studio', 'art gallery'];
                indoorKeywords.forEach(keyword => {
                    if (fullText.includes(keyword) || category.includes(keyword)) {
                        addKeywordIfUnique(keyword, 80, 'indoor-specific');
                    }
                });
            } else if (searchType === 'outdoor') {
                const outdoorKeywords = ['rooftop', 'terrace', 'park', 'garden', 'outdoor', 'nature', 'viewpoint', 'plaza'];
                outdoorKeywords.forEach(keyword => {
                    if (fullText.includes(keyword) || category.includes(keyword)) {
                        addKeywordIfUnique(keyword, 80, 'outdoor-specific');
                    }
                });
            }
    
            // Priority 3: Mood-specific keywords
            const moodCategories = moodCategoryMappings[selectedMood.id] || [];
            moodCategories.forEach((category, categoryIndex) => {
                if (keywordMappings[category]) {
                    keywordMappings[category].keywords.forEach((keyword, keywordIndex) => {
                        if (fullText.includes(keyword.toLowerCase())) {
                            const priority = (moodCategories.length - categoryIndex) * 10 + (10 - keywordIndex);
                            addKeywordIfUnique(keyword, priority, 'mood');
                        }
                    });
                }
            });
    
            // Priority 4: Content-based keywords
            Object.entries(keywordMappings).forEach(([category, config]) => {
                config.keywords.forEach((keyword, index) => {
                    if (fullText.includes(keyword.toLowerCase())) {
                        const priority = 5 - (index * 0.1);
                        addKeywordIfUnique(keyword, priority, 'title');
                    }
                });
            });
    
            // Priority 5: Description keywords
            Object.entries(keywordMappings).forEach(([category, config]) => {
                config.keywords.forEach((keyword, index) => {
                    if (fullDesc.includes(keyword.toLowerCase())) {
                        const priority = 3 - (index * 0.05);
                        addKeywordIfUnique(keyword, priority, 'description');
                    }
                });
            });
    
            return prioritizedKeywords
                .sort((a, b) => b.priority - a.priority)
                .map(({ keyword }) => keyword)
                .filter(keyword => keyword.length > 2)
                .slice(0, 5);
        };
    
        const finalKeywords = generateKeywordsForType();
        const staticResults = searchType === 'indoor' ? generateStaticIndoorResults() : [];
    
        console.log(`Search type: ${searchType}`);
        console.log('Final keywords:', finalKeywords);
        console.log('Static results:', staticResults.length);

        console.log({keywords: finalKeywords.join(', '),
            searchType: searchType,
            staticResults: staticResults,
            shouldSearch: searchType !== 'indoor' || staticResults.length === 0},"drwerwerewr")
    
        return {
            keywords: finalKeywords.join(', '),
            searchType: searchType,
            staticResults: staticResults,
            shouldSearch: searchType !== 'indoor' || staticResults.length === 0
        };
    };
   
   
   
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
            ],

            // Additional semantic groups
            music: [
                'Headphones',
                'Playlist of favorite songs',
                'Portable speaker',
                'Concert tickets',
                'Earplugs (for loud venues)'
            ],

            nature: [
                'Binoculars',
                'Field guide',
                'Camera',
                'Sunscreen',
                'Bug spray',
                'Reusable water bottle'
            ],

            peaceful: [
                'Meditation app',
                'Comfortable mat',
                'Eye mask',
                'Soothing playlist',
                'Aromatherapy oils'
            ],

            healing: [
                'Journal',
                'Comfortable blanket',
                'Favorite book',
                'Supportive friend',
                'Tissues',
                'Water bottle'
            ],

            exercise: [
                'Sports shoes',
                'Sweatband',
                'Fitness tracker',
                'Reusable water bottle',
                'Energy bar'
            ],

            heartbreak: [
                'Comfort food',
                'Journal',
                'Favorite movie',
                'Tissues',
                'Supportive friend'
            ],

            reading: [
                'Favorite book',
                'Notebook',
                'Pen',
                'Reading glasses',
                'Bookmark',
                'Comfortable cushion'
            ],

            candlelight: [
                'Candle',
                'Matches or lighter',
                'Soft blanket',
                'Romantic playlist',
                'Favorite snacks'
            ],

            couple: [
                'Small gift',
                'Flowers',
                'Camera for selfies',
                'Favorite snacks',
                'Playlist of shared songs'
            ],

            sunrise: [
                'Camera',
                'Warm jacket',
                'Thermos with hot drink',
                'Blanket',
                'Sunglasses'
            ],

            cafe: [
                'Book or laptop',
                'Reusable cup',
                'Notebook',
                'Cash/card',
                'Headphones'
            ],

            shopping: [
                'Reusable shopping bag',
                'Cash/card',
                'Shopping list',
                'Comfortable shoes'
            ],

            entertainment: [
                'Tickets',
                'Snacks',
                'Water bottle',
                'Camera',
                'Portable charger'
            ],

            focus: [
                'Notebook',
                'Pens/highlighters',
                'Noise-cancelling headphones',
                'Water bottle',
                'Healthy snacks'
            ],

            garden: [
                'Sun hat',
                'Sunscreen',
                'Camera',
                'Notebook for sketching',
                'Reusable water bottle'
            ],

            park: [
                'Picnic blanket',
                'Snacks',
                'Outdoor games',
                'Sunscreen',
                'Reusable water bottle'
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
            console.log(generatedKeywords, "generatedKeywords");
            setSearchKeywords(generatedKeywords.keywords);
        }
    }, [currentMood, selectedAdventure]);

const [    showSearchResult,                        setShowSearchResult]=useState(false)
   
const  getStandardizedCityName =(normalizedCity)=> {
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

// Function to check if location data already exists in database
const checkExistingLocationData = async (moodId, title, city, state) => {
    try {
        console.log("Checking existing location data for:", { moodId, title, city, state });

        const response = await fetch(
            `https://moodspace-api-production.up.railway.app/locationAndDirection?moodId=${moodId}&title=${encodeURIComponent(title)}&location=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`
        );

        if (!response.ok) {
            console.log("No existing location data found or API call failed");
            return null;
        }

        const existingData = await response.json();
        console.log("Found existing location data:", existingData);

        // Check if the response has valid locationAndDirection data
        if (existingData?.data?.locationAndDirection?.length > 0) {
            return existingData.data?.locationAndDirection;
        }

        return null;
    } catch (error) {
        console.error("Error checking existing location data:", error);
        return null;
    }
};

// Function to update adventure data locally
const updateAdventureData = (adventure, locationResults ,city,state) => {
    const updatedAdventure = {
        ...adventure,
        location: `${city},${state}`,
        locationAndDirection: locationResults
    };

    setSelectedAdventure(updatedAdventure);

    // Update local adventure database data
    // if (adventureDatabaseData[currentMood.id]) {
    //     const idx = adventureDatabaseData[currentMood.id].findIndex(
    //         adv => adv.title === adventure.title
    //     );
    //     if (idx !== -1) {
    //         adventureDatabaseData[currentMood.id][idx] = {
    //             ...adventureDatabaseData[currentMood.id][idx],
    //             ...updatedAdventure
    //         };
    //     }
    // }

    return updatedAdventure;
};

// // Function to analyze search query and find relevant categories
// const analyzeSearchForCategories = (query) => {
//     // Use the existing keywordMappings defined above in the file, do not redefine here.

//     const searchText = query.toLowerCase();
//     const words = searchText.split(/\s+/).filter(word => word.length > 2);
//     const matchedCategories = [];

//        // Loop through each category and its config in keywordMappings
//     Object.entries(keywordMappings).forEach(([category, config]) => {
//         let categoryScore = 0; // Initialize score for this category
    
//         // Check each keyword for matches in the search text and words array
//         config.keywords.forEach(keyword => {
//             // If the searchText contains the keyword, add 10 points
//             if (searchText.includes(keyword.toLowerCase())) {
//                 categoryScore += 10;
//             }
    
//             // Check each word in the words array for matches or partial matches
//             words.forEach(word => {
//                 // Exact match: add 8 points
//                 if (word === keyword.toLowerCase()) {
//                     categoryScore += 8;
//                 // Partial match: add 5 points
//                 } else if (word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)) {
//                     categoryScore += 5;
//                 }
//             });
//         });
    
//         // If this category has a positive score, add it to matchedCategories
//         if (categoryScore > 0) {
//             matchedCategories.push({
//                 category, // Category name
//                 searchTerms: config.searchTerms, // Associated search terms
//                 priority: categoryScore // Calculated score
//             });
//         }
//     });
//     console.log(matchedCategories,"matchedCategories")
//     return matchedCategories
//         .sort((a, b) => b.priority - a.priority)
//         .slice(0, 5);
// };

const analyzeSearchForCategories1 = (query) => {
    const searchText = query.toLowerCase();
    const words = searchText.split(/\s+/).filter(word => word.length > 2);
    const matchedCategories = [];

    // First, check for exact phrase matches (highest priority)
    Object.entries(keywordMappings).forEach(([category, config]) => {
        let categoryScore = 0;
        let exactMatches = 0;
        let partialMatches = 0;

        config.keywords.forEach(keyword => {
            const keywordLower = keyword.toLowerCase();
            
            // Exact phrase match in search text (highest score)
            if (searchText.includes(keywordLower)) {
                if (keywordLower.includes(' ')) {
                    // Multi-word exact match
                    categoryScore += 20;
                    exactMatches++;
                } else {
                    // Single word exact match
                    categoryScore += 15;
                    exactMatches++;
                }
            }

            // Check individual words
            words.forEach(word => {
                if (word === keywordLower) {
                    categoryScore += 10;
                    exactMatches++;
                } else if (word.includes(keywordLower) || keywordLower.includes(word)) {
                    if (Math.abs(word.length - keywordLower.length) <= 2) {
                        // Similar length words (likely typos or variations)
                        categoryScore += 8;
                        partialMatches++;
                    } else {
                        categoryScore += 3;
                        partialMatches++;
                    }
                }
            });
        });

        // Boost score for categories with multiple matches
        if (exactMatches > 1) {
            categoryScore += exactMatches * 5;
        }

        // Apply priority multiplier
        categoryScore *= (config.priority || 1);

        if (categoryScore > 0) {
            matchedCategories.push({
                category,
                searchTerms: config.searchTerms,
                priority: categoryScore,
                exactMatches,
                partialMatches
            });
        }
    });

    console.log("Matched categories analysis:", matchedCategories);
    
    // Return top categories, prioritizing those with exact matches
    return matchedCategories
        .sort((a, b) => {
            // First sort by exact matches, then by total priority
            if (a.exactMatches !== b.exactMatches) {
                return b.exactMatches - a.exactMatches;
            }
            return b.priority - a.priority;
        })
        .slice(0, 3); // Reduced to 3 for better API usage
};




// Function to perform direct search when no categories match
// const performDirectSearch = async (query, city, apiKey) => {
//     const cleanQuery = query.split(' ').slice(0, 2).join(' ');
//     const directSearchQuery = `${cleanQuery} ${city}`;

//     console.log("Direct search query:", directSearchQuery);

//     try {
//         const searchResponse = await fetch(
//             `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&city=${encodeURIComponent(city)}`
//         );
//         const searchData = await searchResponse.json();

//         if (searchData.results && searchData.results.length > 0) {
//             return searchData.results.slice(0, 5).map(result => ({
//                 address: result.formatted,
//                 gettingThere:result.components?.road
//                 ? `Accessible via ${result.components.road}. Check local transit for details.`
//                 : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
          
//                 parking: "Street parking typically available",
//                 category: "general",
//                 coordinates: {
//                     lat: result.geometry.lat,
//                     lng: result.geometry.lng
//                 }
//             }));
//         }
//     } catch (error) {
//         console.error("Direct search error:", error);
//     }

//     return [];
// };

const performDirectSearch = async (query, city, apiKey) => {
    // Keep more words from the query if they're relevant
    const cleanQuery = query.trim();
    
    // Try multiple search strategies
    const searchQueries = [
        `${cleanQuery} near ${city}`, // Original approach
        `${cleanQuery} near ${city}`, // More natural language
        cleanQuery, // Just the query without city constraint
        `${city} ${cleanQuery}` // City first approach
    ];

    console.log("Search queries to try:", searchQueries);

    for (const searchQuery of searchQueries) {
        try {
            // Remove the invalid 'city' parameter and add proper location biasing
            const searchResponse = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?` +
                `q=${encodeURIComponent(searchQuery)}` +
                `&key=${apiKey}` +
                `&limit=3` + // Increased limit for better results
                `&countrycode=in` + // Limit to India
                `&language=en` +
                `&pretty=1`
            );
            
            if (!searchResponse.ok) {
                console.error(`HTTP error! status: ${searchResponse.status}`);
                continue;
            }

            const searchData = await searchResponse.json();
            console.log(`Results for "${searchQuery}":`, searchData.results?.length || 0);

            if (searchData.results && searchData.results.length > 0) {
                // Filter results that are reasonably close to the target city
                const filteredResults = searchData.results.filter(result => {
                    const address = result.formatted.toLowerCase();
                    const state = result.components?.state?.toLowerCase();
                    const country = result.components?.country_code?.toLowerCase();
                    
                    // Prioritize results in Karnataka (for Bengaluru) or India
                    return country === 'in' && (
                        address.includes(city.toLowerCase()) ||
                        state === 'karnataka' ||
                        address.includes('karnataka')
                    );
                });

                const resultsToUse = filteredResults.length > 0 ? filteredResults : searchData.results;
                
                if (resultsToUse.length > 0) {
                    return resultsToUse.slice(0, 5).map(result => ({
                        address: result.formatted,
                        gettingThere: result.components?.road
                            ? `Accessible via ${result.components.road}. ${getTransportSuggestion(result.components)}`
                            : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
                        parking: getParkingSuggestion(result.components),
                        category: categorizeResult(result),
                        coordinates: {
                            lat: result.geometry.lat,
                            lng: result.geometry.lng
                        },
                        confidence: result.confidence,
                        type: result.components?._type || 'unknown'
                    }));
                }
            }
        } catch (error) {
            console.error(`Search error for "${searchQuery}":`, error);
            continue;
        }
    }

    // If no results found with any strategy, return empty array
    console.log("No results found with any search strategy");
    return [];
};

// // Helper function to get transport suggestions based on location type
const getTransportSuggestion = (components) => {
    if (components?.suburb || components?.neighbourhood) {
        return "Check BMTC bus routes or use metro if nearby stations available.";
    }
    if (components?.road && components.road.includes('highway')) {
        return "Best accessed by private vehicle as it's on a highway.";
    }
    return "Check local transit for details.";
};

// Helper functions for better context
const generateGettingThereInfo = (components) => {
    if (!components) return "Check local transit apps for directions.";
    
    const road = components.road;
    const suburb = components.suburb || components.neighbourhood;
    
    if (road && suburb) {
        return `Located on ${road} in ${suburb}. Accessible by BMTC bus, metro, or private transport.`;
    } else if (road) {
        return `Accessible via ${road}. Check BMTC routes or use metro if nearby stations available.`;
    } else if (suburb) {
        return `Located in ${suburb}. Best reached by local transport or private vehicle.`;
    }
    
    return "Check local transit apps for real-time directions and routes.";
};

const generateParkingInfo = (components, category) => {
    if (!components) return "Street parking typically available";
    
    // Category-specific parking suggestions
    switch (category) {
        case 'shopping':
        case 'entertainment':
            return "Mall/venue parking available. May have charges during peak hours.";
        case 'temple':
        case 'cultural':
            return "Limited parking available. Consider public transport for popular sites.";
        case 'food':
        case 'cozy':
            return "Street parking or valet service. Check for time restrictions.";
        case 'wellness':
        case 'fitness':
            return "Dedicated parking usually available. Confirm with venue.";
        default:
            return "Street parking typically available. Check for restrictions.";
    }
};

// Helper function to suggest parking based on location type
const getParkingSuggestion = (components) => {
    if (components?._type === 'building' || components?.amenity) {
        return "Dedicated parking likely available";
    }
    if (components?.tourism || components?.leisure) {
        return "Tourist area - parking may be limited, arrive early";
    }
    return "Street parking typically available";
};

// Helper function to categorize results
const categorizeResult = (result) => {
    const components = result.components;
    if (components?.tourism) return 'tourism';
    if (components?.amenity) return 'amenity';
    if (components?.leisure) return 'leisure';
    if (components?.natural) return 'natural';
    return 'general';
};

// Alternative function for more flexible searching
const performFlexibleSearch = async (keywords, city, apiKey) => {
    const keywordArray = keywords.split(' ').filter(word => word.length > 2);
    
    // Try different combinations of keywords
    const searchStrategies = [
        keywordArray.join(' ') + ` ${city}`,
        keywordArray.join(' OR ') + ` near ${city}`,
        `${city} ` + keywordArray.join(' '),
        // Broaden search to nearby areas if it's Bengaluru
        city.toLowerCase() === 'bengaluru' ? 
            keywordArray.join(' ') + ' Karnataka' : 
            keywordArray.join(' ') + ` ${city}`
    ];

    for (const strategy of searchStrategies) {
        const results = await performDirectSearch(strategy, city, apiKey);
        if (results.length > 0) {
            return results;
        }
    }

    return [];
};

// // Function to search by categories
// const searchByCategories = async (categories, city, state, apiKey) => {
//     const locationResults = [];

//     for (const categoryConfig of categories.slice(0, 3)) {
//         for (const searchTerm of categoryConfig.searchTerms.slice(0, 2)) {
//             const cleanSearchQuery = `${searchTerm} ${city}`;
//             console.log("Category search query:", cleanSearchQuery);

//             try {
//                 const searchResponse = await fetch(
//                     `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cleanSearchQuery)}&key=${apiKey}&limit=1&countrycode=IN`
//                 );

//                 console.log("Search response status:", searchResponse.status);
//                 const searchData = await searchResponse.json();

//                 if (searchData.results && searchData.results.length > 0) {
//                     const relevantResults = searchData.results
//                         .filter(result => {
//                             const components = result.components || {};
//                             const resultCity = components.city || components.town || components.village || '';
//                             const resultState = components.state || '';

//                             return (
//                                 resultCity.toLowerCase().includes(city.toLowerCase()) ||
//                                 resultState.toLowerCase().includes(state.toLowerCase()) ||
//                                 result.formatted.toLowerCase().includes(city.toLowerCase())
//                             );
//                         })
//                         .slice(0, 2)
//                         .map(result => ({
//                             address: result.formatted,
//                             gettingThere: result.components?.road
//                                 ? `Accessible via ${result.components.road}. Check local transit for details.`
//                                 : "Best accessed by car or public transport. Check local transit apps for real-time directions.",
//                             parking: "Street parking typically available. Check for any time restrictions or meters.",
//                             category: categoryConfig.category,
//                             searchTerm: searchTerm,
//                             coordinates: {
//                                 lat: result.geometry.lat,
//                                 lng: result.geometry.lng
//                             }
//                         }));

//                     console.log("Relevant results for", searchTerm, ":", relevantResults);
//                     locationResults.push(...relevantResults);
//                 }
//             } catch (searchError) {
//                 console.error(`Error searching for ${cleanSearchQuery}:`, searchError);
//             }

//             // Rate limiting
//             await new Promise(resolve => setTimeout(resolve, 300));
//         }
//     }

//     // Remove duplicates and return results
//     return locationResults
//         .filter((result, index, self) =>
//             index === self.findIndex(r => r.address === result.address)
//         )
//         .slice(0, 5);
// };


const searchByCategories = async (categories, city, state, apiKey) => {
    const locationResults = [];
    const searchedTerms = new Set(); // Avoid duplicate searches

    for (const categoryConfig of categories) {
        console.log(`Searching for category: ${categoryConfig.category} (score: ${categoryConfig.priority})`);
        
        // Limit search terms based on category score
        const maxSearchTerms = categoryConfig.priority > 20 ? 3 : 2;
        
        for (const searchTerm of categoryConfig.searchTerms.slice(0, maxSearchTerms)) {
            const searchKey = `${searchTerm}-${city}`;
            if (searchedTerms.has(searchKey)) {
                continue; // Skip duplicate searches
            }
            searchedTerms.add(searchKey);

            // Try multiple search strategies
            const searchQueries = [
                `${searchTerm} in ${city}`,
                `${searchTerm} ${city}`,
                `${city} ${searchTerm}`
            ];

            let foundResults = false;
            
            for (const cleanSearchQuery of searchQueries) {
                if (foundResults) break;
                
                console.log("Category search query:", cleanSearchQuery);

                try {
                    const searchResponse = await fetch(
                        `https://api.opencagedata.com/geocode/v1/json?` +
                        `q=${encodeURIComponent(cleanSearchQuery)}` +
                        `&key=${apiKey}` +
                        `&limit=3` +
                        `&countrycode=IN` +
                        `&language=en`
                    );

                    if (!searchResponse.ok) {
                        console.error(`HTTP error! status: ${searchResponse.status}`);
                        continue;
                    }

                    const searchData = await searchResponse.json();

                    if (searchData.results && searchData.results.length > 0) {
                        const relevantResults = searchData.results
                            .filter(result => {
                                const components = result.components || {};
                                const formatted = result.formatted.toLowerCase();
                                const resultCity = (components.city || components.town || components.village || '').toLowerCase();
                                const resultState = (components.state || '').toLowerCase();

                                // More flexible city matching
                                return (
                                    resultCity.includes(city.toLowerCase()) ||
                                    resultState.includes(state.toLowerCase()) ||
                                    formatted.includes(city.toLowerCase()) ||
                                    formatted.includes(state.toLowerCase())
                                );
                            })
                            .slice(0, 2)
                            .map(result => ({
                                address: result.formatted,
                                gettingThere: generateGettingThereInfo(result.components),
                                parking: generateParkingInfo(result.components, categoryConfig.category),
                                category: categoryConfig.category,
                                searchTerm: searchTerm,
                                confidence: result.confidence,
                                coordinates: {
                                    lat: result.geometry.lat,
                                    lng: result.geometry.lng
                                }
                            }));

                        if (relevantResults.length > 0) {
                            console.log(`Found ${relevantResults.length} results for ${searchTerm}`);
                            locationResults.push(...relevantResults);
                            foundResults = true;
                        }
                    }
                } catch (searchError) {
                    console.error(`Error searching for ${cleanSearchQuery}:`, searchError);
                }

                // Rate limiting
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }
    }

    // Remove duplicates and return results
    const uniqueResults = locationResults
        .filter((result, index, self) =>
            index === self.findIndex(r => 
                r.address === result.address || 
                (Math.abs(r.coordinates.lat - result.coordinates.lat) < 0.001 &&
                 Math.abs(r.coordinates.lng - result.coordinates.lng) < 0.001)
            )
        );

    console.log(`Returning ${uniqueResults.length} unique results from ${locationResults.length} total results`);
    return uniqueResults.slice(0, 8); // Increased limit for better variety
};
// Function to search for places using OpenCage API
// const searchPlacesWithOpenCage = async (query, city, state) => {
//     const apiKey = "20fdf466350e4924abc2708b462ed0fc" || process.env.REACT_APP_OPENCAGE_KEY;

//     if (!apiKey) {
//         console.error("Missing OpenCage API key. Please set REACT_APP_OPENCAGE_KEY in your environment.");
//         return [];
//     }

//     try {
//         // const categories = [];

//         const categories = analyzeSearchForCategories(query);
//         console.log("Matched categories:", categories);

//         let results = [];

//         if (categories.length === 0) {
//             // No categories match, try direct search
//             results = await performDirectSearch(query, city, apiKey);
//         } else {
//             // Search using categories
//             results = await searchByCategories(categories, city, state, apiKey);
//         }

//         console.log("Final search results:", results);
//         return results;

//     } catch (error) {
//         console.error("Error searching for places:", error);
//         return [];
//     }
// };


// Enhanced search that considers mood, adventure title, and context
const searchPlacesWithOpenCage = async (searchQuery, city, state) => {
    const apiKey = "20fdf466350e4924abc2708b462ed0fc";
    
    // Step 1: Analyze the adventure context
    const adventureContext = analyzeAdventureContext(selectedAdventure, currentMood);
    console.log("Adventure context analysis:", adventureContext);
    
    // Step 2: Enhanced query analysis with context
    const categories = analyzeSearchForCategories(searchQuery, adventureContext);
    console.log("Matched categories with context:", categories);
    
    let results = [];
    
    if (categories.length === 0) {
        // Fallback to direct search with context enhancement
        const enhancedQuery = enhanceQueryWithContext(searchQuery, adventureContext);
        results = await performDirectSearch(enhancedQuery, city, apiKey);
    } else {
        // Search using context-aware categories
        results = await searchByContextualCategories(categories, adventureContext, city, state, apiKey);
    }
    
    // Step 3: Filter and rank results based on context
    return filterAndRankByContext(results, adventureContext);
};

// Analyze adventure title and mood to understand context
const analyzeAdventureContext = (adventure, mood) => {
    const title = adventure?.title?.toLowerCase() || '';
    const moodName = mood?.name?.toLowerCase() || '';
    
    const context = {
        adventure: adventure,
        mood: mood,
        timeOfDay: extractTimeContext(title),
        setting: extractSettingContext(title),
        intimacy: extractIntimacyLevel(title, moodName),
        activity: extractActivityType(title),
        social: extractSocialContext(title, moodName),
        searchPriorities: []
    };
    
    // Determine search priorities based on context
    context.searchPriorities = determineSearchPriorities(context);
    
    return context;
};

// Extract time-related context from adventure title
const extractTimeContext = (title) => {
    if (title.includes('night') || title.includes('evening') || title.includes('sunset')) {
        return 'evening';
    } else if (title.includes('morning') || title.includes('sunrise') || title.includes('dawn')) {
        return 'morning';
    } else if (title.includes('afternoon') || title.includes('lunch')) {
        return 'afternoon';
    }
    return 'flexible';
};

// Extract setting context from adventure title
const extractSettingContext = (title) => {
    const settings = [];
    
    if (title.includes('rooftop') || title.includes('terrace')) {
        settings.push('rooftop');
    }
    if (title.includes('indoor') || title.includes('inside')) {
        settings.push('indoor');
    }
    if (title.includes('outdoor') || title.includes('outside')) {
        settings.push('outdoor');
    }
    if (title.includes('cozy') || title.includes('intimate')) {
        settings.push('intimate');
    }
    if (title.includes('private') || title.includes('secluded')) {
        settings.push('private');
    }
    
    return settings.length > 0 ? settings : ['flexible'];
};

// Extract intimacy level from title and mood
const extractIntimacyLevel = (title, mood) => {
    let intimacyScore = 0;
    
    // From mood
    if (['love', 'romantic', 'cozy'].includes(mood)) {
        intimacyScore += 3;
    } else if (['peaceful', 'calm', 'reflective'].includes(mood)) {
        intimacyScore += 2;
    } else if (['social', 'happy', 'playful'].includes(mood)) {
        intimacyScore += 1;
    }
    
    // From title
    if (title.includes('intimate') || title.includes('private')) {
        intimacyScore += 3;
    } else if (title.includes('cozy') || title.includes('quiet')) {
        intimacyScore += 2;
    } else if (title.includes('storytelling') || title.includes('sharing')) {
        intimacyScore += 1;
    }
    
    if (intimacyScore >= 4) return 'very_intimate';
    if (intimacyScore >= 2) return 'intimate';
    if (intimacyScore >= 1) return 'semi_private';
    return 'social';
};

// Extract activity type from title
const extractActivityType = (title) => {
    const activities = [];
    
    if (title.includes('storytelling') || title.includes('sharing')) {
        activities.push('storytelling');
    }
    if (title.includes('dining') || title.includes('food') || title.includes('meal')) {
        activities.push('dining');
    }
    if (title.includes('music') || title.includes('singing')) {
        activities.push('music');
    }
    if (title.includes('reading') || title.includes('book')) {
        activities.push('reading');
    }
    if (title.includes('art') || title.includes('creative')) {
        activities.push('creative');
    }
    
    return activities.length > 0 ? activities : ['social'];
};

// Extract social context
const extractSocialContext = (title, mood) => {
    if (title.includes('together') || title.includes('couple') || mood === 'love') {
        return 'couple';
    } else if (title.includes('group') || title.includes('friends') || mood === 'social') {
        return 'group';
    } else if (title.includes('solo') || title.includes('personal') || ['sad', 'reflective'].includes(mood)) {
        return 'solo';
    }
    return 'flexible';
};

// Determine search priorities based on context
const determineSearchPriorities = (context) => {
    const priorities = [];
    
    // For rooftop + intimate + evening context
    if (context.setting.includes('rooftop') && context.intimacy === 'very_intimate') {
        priorities.push({
            category: 'rooftop_dining',
            searchTerms: ['rooftop restaurants', 'rooftop bars', 'terrace dining', 'rooftop cafes'],
            weight: 10
        });
        priorities.push({
            category: 'intimate_venues',
            searchTerms: ['intimate restaurants', 'cozy cafes', 'romantic spots', 'private dining'],
            weight: 8
        });
    }
    
    // For storytelling activity
    if (context.activity.includes('storytelling')) {
        priorities.push({
            category: 'cozy_spaces',
            searchTerms: ['book cafes', 'quiet cafes', 'cozy restaurants', 'intimate lounges'],
            weight: 7
        });
    }
    
    // For evening time
    if (context.timeOfDay === 'evening') {
        priorities.push({
            category: 'evening_venues',
            searchTerms: ['evening spots', 'nightlife', 'rooftop bars', 'lounges'],
            weight: 6
        });
    }
    
    // For love mood
    if (context.mood?.name?.toLowerCase() === 'love') {
        priorities.push({
            category: 'romantic',
            searchTerms: ['romantic restaurants', 'couple spots', 'romantic cafes', 'scenic viewpoints'],
            weight: 9
        });
    }
    
    return priorities.sort((a, b) => b.weight - a.weight);
};

// Enhanced category analysis with context
const analyzeSearchForCategories = (query, adventureContext) => {
    const searchText = query.toLowerCase();
    const words = searchText.split(/\s+/).filter(word => word.length > 2);
    const matchedCategories = [];
    
    // First, check context priorities
    adventureContext.searchPriorities.forEach(priority => {
        let categoryScore = priority.weight * 10; // Base score from context
        
        // Check if query words match this priority category
        priority.searchTerms.forEach(searchTerm => {
            const termWords = searchTerm.toLowerCase().split(' ');
            termWords.forEach(termWord => {
                if (searchText.includes(termWord) || words.includes(termWord)) {
                    categoryScore += 15; // Boost for query match
                }
            });
        });
        
        matchedCategories.push({
            category: priority.category,
            searchTerms: priority.searchTerms,
            priority: categoryScore,
            source: 'context'
        });
    });
    
    // Then check regular keyword mappings with context boost
    Object.entries(keywordMappings).forEach(([category, config]) => {
        let categoryScore = 0;
        
        config.keywords.forEach(keyword => {
            const keywordLower = keyword.toLowerCase();
            
            if (searchText.includes(keywordLower)) {
                categoryScore += 15;
            }
            
            words.forEach(word => {
                if (word === keywordLower) {
                    categoryScore += 10;
                } else if (word.includes(keywordLower) || keywordLower.includes(word)) {
                    categoryScore += 5;
                }
            });
        });
        
        // Apply context boost
        categoryScore *= getContextBoost(category, adventureContext);
        
        if (categoryScore > 0) {
            matchedCategories.push({
                category,
                searchTerms: config.searchTerms,
                priority: categoryScore,
                source: 'keywords'
            });
        }
    });
    
    console.log("Categories with context analysis:", matchedCategories);
    
    return matchedCategories
        .sort((a, b) => b.priority - a.priority)
        .slice(0, 4);
};

// Get context boost multiplier for categories
const getContextBoost = (category, context) => {
    let boost = 1;
    
    // Boost relevant categories based on context
    if (context.intimacy === 'very_intimate' && ['cozy', 'romantic', 'food'].includes(category)) {
        boost *= 2;
    }
    
    if (context.setting.includes('rooftop') && ['food', 'nightlife', 'romantic'].includes(category)) {
        boost *= 1.5;
    }
    
    if (context.timeOfDay === 'evening' && ['nightlife', 'food', 'romantic'].includes(category)) {
        boost *= 1.3;
    }
    
    if (context.mood?.name?.toLowerCase() === 'love' && ['romantic', 'cozy', 'food'].includes(category)) {
        boost *= 1.8;
    }
    
    return boost;
};

// Enhanced search by contextual categories
const searchByContextualCategories = async (categories, adventureContext, city, state, apiKey) => {
    const locationResults = [];
    const searchedTerms = new Set();
    
    for (const categoryConfig of categories.slice(0, 3)) {
        console.log(`Searching for category: ${categoryConfig.category} (score: ${categoryConfig.priority})`);
        
        const maxSearchTerms = categoryConfig.priority > 50 ? 3 : 2;
        
        for (const searchTerm of categoryConfig.searchTerms.slice(0, maxSearchTerms)) {
            const searchKey = `${searchTerm}-${city}`;
            if (searchedTerms.has(searchKey)) continue;
            searchedTerms.add(searchKey);
            
            // Context-aware search queries
            const searchQueries = generateContextualSearchQueries(searchTerm, city, adventureContext);
            
            let foundResults = false;
            
            for (const searchQuery of searchQueries) {
                if (foundResults) break;
                
                console.log("Contextual search query:", searchQuery);
                
                try {
                    const searchResponse = await fetch(
                        `https://api.opencagedata.com/geocode/v1/json?` +
                        `q=${encodeURIComponent(searchQuery)}` +
                        `&key=${apiKey}` +
                        `&limit=5` +
                        `&countrycode=IN` +
                        `&language=en`
                    );
                    
                    if (searchResponse.ok) {
                        const searchData = await searchResponse.json();
                        
                        if (searchData.results && searchData.results.length > 0) {
                            const relevantResults = processContextualResults(
                                searchData.results, 
                                city, 
                                state, 
                                categoryConfig, 
                                adventureContext
                            );
                            
                            if (relevantResults.length > 0) {
                                locationResults.push(...relevantResults);
                                foundResults = true;
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error in contextual search for ${searchQuery}:`, error);
                }
                
                await new Promise(resolve => setTimeout(resolve, 300));
            }
        }
    }
    
    return removeDuplicatesAndRank(locationResults, adventureContext);
};

// Generate context-aware search queries
const generateContextualSearchQueries = (searchTerm, city, context) => {
    const queries = [];
    
    // Base queries
    queries.push(`${searchTerm} in ${city}`);
    
    // Add context-specific modifiers
    if (context.setting.includes('rooftop')) {
        queries.push(`rooftop ${searchTerm} ${city}`);
        queries.push(`terrace ${searchTerm} ${city}`);
    }
    
    if (context.intimacy === 'very_intimate') {
        queries.push(`intimate ${searchTerm} ${city}`);
        queries.push(`cozy ${searchTerm} ${city}`);
    }
    
    if (context.timeOfDay === 'evening') {
        queries.push(`${searchTerm} ${city} evening`);
    }
    
    if (context.mood?.name?.toLowerCase() === 'love') {
        queries.push(`romantic ${searchTerm} ${city}`);
    }
    
    return queries.slice(0, 3); // Limit to prevent too many API calls
};

// Enhance search query with adventure context when no categories match
const enhanceQueryWithContext = (originalQuery, adventureContext) => {
    let enhancedQuery = originalQuery;
    const contextModifiers = [];
    
    // Add setting-based modifiers
    if (adventureContext.setting.includes('rooftop')) {
        contextModifiers.push('rooftop');
    }
    if (adventureContext.setting.includes('outdoor')) {
        contextModifiers.push('outdoor');
    }
    if (adventureContext.setting.includes('intimate')) {
        contextModifiers.push('intimate');
    }
    if (adventureContext.setting.includes('private')) {
        contextModifiers.push('private');
    }
    
    // Add intimacy-based modifiers
    if (adventureContext.intimacy === 'very_intimate') {
        contextModifiers.push('cozy');
    } else if (adventureContext.intimacy === 'intimate') {
        contextModifiers.push('quiet');
    }
    
    // Add time-based modifiers
    if (adventureContext.timeOfDay === 'evening') {
        contextModifiers.push('evening');
    } else if (adventureContext.timeOfDay === 'morning') {
        contextModifiers.push('morning');
    }
    
    // Add mood-based modifiers
    const moodName = adventureContext.mood?.name?.toLowerCase();
    if (moodName === 'love') {
        contextModifiers.push('romantic');
    } else if (moodName === 'peaceful') {
        contextModifiers.push('peaceful');
    } else if (moodName === 'social') {
        contextModifiers.push('lively');
    }
    
    // Add activity-based modifiers
    if (adventureContext.activity.includes('storytelling')) {
        contextModifiers.push('book cafe');
    } else if (adventureContext.activity.includes('dining')) {
        contextModifiers.push('restaurant');
    } else if (adventureContext.activity.includes('music')) {
        contextModifiers.push('music venue');
    }
    
    // Combine modifiers with original query
    if (contextModifiers.length > 0) {
        // Limit to top 2-3 most relevant modifiers to avoid over-specification
        const topModifiers = contextModifiers.slice(0, 3);
        enhancedQuery = `${topModifiers.join(' ')} ${originalQuery}`;
    }
    
    console.log(`Enhanced query: "${originalQuery}" -> "${enhancedQuery}"`);
    console.log(`Applied modifiers:`, contextModifiers);
    
    return enhancedQuery;
};
// Process results with contextual relevance
const processContextualResults = (results, city, state, categoryConfig, adventureContext) => {
    return results
        .filter(result => {
            const components = result.components || {};
            const formatted = result.formatted.toLowerCase();
            const resultCity = (components.city || components.town || components.village || '').toLowerCase();
            const resultState = (components.state || '').toLowerCase();
            
            return (
                resultCity.includes(city.toLowerCase()) ||
                resultState.includes(state.toLowerCase()) ||
                formatted.includes(city.toLowerCase())
            );
        })
        .slice(0, 3)
        .map(result => ({
            address: result.formatted,
            gettingThere: generateContextualGettingThereInfo(result.components, adventureContext),
            parking: generateContextualParkingInfo(result.components, adventureContext),
            category: categoryConfig.category,
            searchTerm: categoryConfig.searchTerms[0],
            confidence: result.confidence,
            contextRelevance: calculateContextRelevance(result, adventureContext),
            coordinates: {
                lat: result.geometry.lat,
                lng: result.geometry.lng
            }
        }));
};

// Calculate how relevant a result is to the adventure context
const calculateContextRelevance = (result, context) => {
    let relevance = result.confidence || 50;
    
    const formatted = result.formatted.toLowerCase();
    
    // Boost for context matches
    if (context.setting.includes('rooftop') && (formatted.includes('rooftop') || formatted.includes('terrace'))) {
        relevance += 20;
    }
    
    if (context.intimacy === 'very_intimate' && (formatted.includes('intimate') || formatted.includes('cozy'))) {
        relevance += 15;
    }
    
    if (context.mood?.name?.toLowerCase() === 'love' && formatted.includes('romantic')) {
        relevance += 18;
    }
    
    return Math.min(relevance, 100);
};

// Filter and rank results by context
const filterAndRankByContext = (results, adventureContext) => {
    return results
        .filter(result => result.contextRelevance > 30) // Filter low relevance
        .sort((a, b) => {
            // Primary sort by context relevance
            if (b.contextRelevance !== a.contextRelevance) {
                return b.contextRelevance - a.contextRelevance;
            }
            // Secondary sort by confidence
            return (b.confidence || 0) - (a.confidence || 0);
        })
        .slice(0, 6);
};

// Generate contextual transport information
const generateContextualGettingThereInfo = (components, context) => {
    let baseInfo = generateGettingThereInfo(components);
    
    if (context.timeOfDay === 'evening') {
        baseInfo += " Evening services may be limited, consider private transport.";
    }
    
    if (context.intimacy === 'very_intimate') {
        baseInfo += " For privacy, consider booking a cab directly to the venue.";
    }
    
    return baseInfo;
};

// Generate contextual parking information
const generateContextualParkingInfo = (components, context) => {
    let baseInfo = generateParkingInfo(components, context.setting.includes('rooftop') ? 'food' : 'general');
    
    if (context.timeOfDay === 'evening') {
        baseInfo += " Evening parking may have different rates or availability.";
    }
    
    if (context.intimacy === 'very_intimate') {
        baseInfo += " Valet service recommended for convenience.";
    }
    
    return baseInfo;
};

// Remove duplicates and rank by context
const removeDuplicatesAndRank = (results, context) => {
    const unique = results.filter((result, index, self) =>
        index === self.findIndex(r => 
            r.address === result.address || 
            (Math.abs(r.coordinates.lat - result.coordinates.lat) < 0.001 &&
             Math.abs(r.coordinates.lng - result.coordinates.lng) < 0.001)
        )
    );
    
    return unique
        .sort((a, b) => (b.contextRelevance || 0) - (a.contextRelevance || 0))
        .slice(0, 8);
};



// Function to save results to database
const saveLocationDataToDatabase = async (moodId, title, city, state, locationResults) => {
    try {
        const payload = {
            moodId: moodId,
            title: title,
            state: state,
            location: city,
            locationAndDirection: locationResults
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
            return true;
        } else {
            console.error("Failed to save to database:", saveResponse.status, await saveResponse.text());
            return false;
        }
    } catch (saveError) {
        console.error("Error saving to database:", saveError);
        return false;
    }
};

// Main search handler function - much cleaner now


const handleSearch = async (searchQuery) => {
    try {
        // Step 1: Get user's current location
        const { city, state } = await getUserLocation();
        console.log("Using location for search:", { city, state });

        // Step 2: Generate smart search strategy
        const smartSearchResult = await handleSmartSearch(
            currentMood, 
            selectedAdventure, 
            city, 
            state, 
            keywordMappings, 
            moodCategoryMappings
        );

        console.log("Smart search result:", smartSearchResult);

        // Step 3: Handle indoor adventures with static results
        if (smartSearchResult.searchType === 'indoor' && smartSearchResult.results.length > 0) {
            console.log("Using static indoor results, no database/API calls needed");
            
            // Update UI with static indoor results
            updateAdventureData(selectedAdventure, smartSearchResult.results, city, state);
            setShowSearchResult(true);
            
            return {
                results: smartSearchResult.results,
                searchType: 'indoor',
                message: smartSearchResult.message
            };
        }

        // Step 4: For outdoor/mixed adventures, check existing database data first
        let locationResults = null;
        
        if (currentMood && selectedAdventure) {
            locationResults = await checkExistingLocationData(
                currentMood.id,
                selectedAdventure.title,
                city,
                state
            );
        }

        // Step 5: If existing data found, use it
        if (locationResults && locationResults.length > 0) {
            console.log("Using existing location data, skipping API calls");
            updateAdventureData(selectedAdventure, locationResults, city, state);
            setShowSearchResult(true);
            
            return {
                results: locationResults,
                searchType: smartSearchResult.searchType,
                message: "Found existing location data"
            };
        }

        // Step 6: No existing data - proceed with smart API search
        console.log("No existing location data found, proceeding with smart search");
        
        let searchResults = [];
        
        if (smartSearchResult.results && smartSearchResult.results.length > 0) {
            // Use smart search results if available
            searchResults = smartSearchResult.results;
        } else if (smartSearchResult.keywords) {
            // Fallback to enhanced search with generated keywords
            console.log("Using smart keywords for enhanced search:", smartSearchResult.keywords);
            searchResults = await searchPlacesWithOpenCageEnhanced(
                smartSearchResult.keywords, 
                city, 
                state, 
                smartSearchResult.searchType
            );
        } else {
            // Final fallback to original search
            console.log("Fallback to original search query");
            searchResults = await searchPlacesWithOpenCage(searchQuery, city, state);
        }

        // Step 7: Process and save results
        if (searchResults && searchResults.length > 0 && currentMood && selectedAdventure) {
            // Filter out invalid results
            const validResults = searchResults.filter(result =>
                result.address &&
                result.address.trim() !== '' &&
                !result.address.toLowerCase().includes('no address found') &&
                !result.isStatic // Don't save static results to database
            );

            if (validResults.length > 0) {
                // Update local state
                updateAdventureData(selectedAdventure, searchResults, city, state);

                // Save to database (don't await to avoid blocking UI)
                saveLocationDataToDatabase(
                    currentMood.id,
                    selectedAdventure.title,
                    city,
                    state,
                    validResults
                );
                
                console.log(`Saved ${validResults.length} valid results to database`);
            } else if (searchResults.some(result => result.isStatic)) {
                // Update UI even if we only have static results
                updateAdventureData(selectedAdventure, searchResults, city, state);
                console.log("Updated UI with static/mixed results");
            } else {
                console.log("No valid results with proper addresses found");
            }
        }

        setShowSearchResult(true);
        
        return {
            results: searchResults,
            searchType: smartSearchResult.searchType,
            keywords: smartSearchResult.keywords,
            message: smartSearchResult.message || `Found ${searchResults.length} results`
        };

    } catch (error) {
        console.error("Error in enhanced handleSearch:", error);
        
        // Fallback error handling
        setShowSearchResult(true);
        return {
            results: [],
            searchType: 'outdoor',
            message: "Search failed. Please try again.",
            error: true
        };
    }
};

// Enhanced version of searchPlacesWithOpenCage that works with smart keywords
const searchPlacesWithOpenCageEnhanced = async (smartKeywords, city, state, searchType) => {
    const apiKey = "20fdf466350e4924abc2708b462ed0fc";
    
    try {
        // Step 1: Analyze the adventure context (your existing function)
        const adventureContext = analyzeAdventureContext(selectedAdventure, currentMood);
        console.log("Adventure context analysis:", adventureContext);
        
        // Step 2: Enhanced query analysis with smart keywords
        const enhancedQuery = `${smartKeywords} ${city} ${state}`;
        const categories = analyzeSearchForCategories(enhancedQuery, adventureContext);
        console.log("Matched categories with smart keywords:", categories);
        
        let results = [];
        
        if (categories.length === 0) {
            // Direct search with smart keywords
            results = await performDirectSearch(enhancedQuery, city, apiKey);
        } else {
            // Search using context-aware categories with smart keywords
            results = await searchByContextualCategories(categories, adventureContext, city, state, apiKey);
        }
        
        // Step 3: Filter and rank results based on context and search type
        const filteredResults = filterAndRankByContext(results, adventureContext);
        
        // Step 4: Add search type metadata to results
        return filteredResults.map(result => ({
            ...result,
            searchType: searchType,
            searchMethod: 'smart_keywords',
            keywords: smartKeywords
        }));
        
    } catch (error) {
        console.error("Error in enhanced OpenCage search:", error);
        
        // Fallback to basic search
        console.log("Falling back to basic search");
        return await searchPlacesWithOpenCage(smartKeywords, city, state);
    }
};

// Helper function to combine smart search with your existing workflow
const handleSmartSearchWithFallback = async (searchQuery) => {
    try {
        // First try smart search
        const smartResult = await handleSearch(searchQuery);
        
        if (smartResult.results && smartResult.results.length > 0) {
            return smartResult;
        }
        
        // If smart search returns no results, try original method
        console.log("Smart search returned no results, trying fallback");
        return await handleSearch(searchQuery);
        
    } catch (error) {
        console.error("Error in smart search with fallback:", error);
        return {
            results: [],
            searchType: 'outdoor',
            message: "Search failed. Please try again.",
            error: true
        };
    }
};

// Usage example for your useEffect:
/*
useEffect(() => {
    const performSmartSearch = async () => {
        if (currentMood && selectedAdventure) {
            // Generate smart keywords (your existing logic)
            const keywords = generateSmartKeywords(
                currentMood, 
                selectedAdventure, 
                keywordMappings, 
                moodCategoryMappings
            );
            
            // Perform smart search
            const searchResult = await handleSearch(keywords.keywords || selectedAdventure.title);
            
            // Handle results based on search type
            if (searchResult.searchType === 'indoor' && searchResult.results.length > 0) {
                console.log("Displaying static indoor suggestions");
                // Your existing UI update logic
            } else if (searchResult.results.length > 0) {
                console.log("Displaying location-based results");
                // Your existing UI update logic
            } else {
                console.log("No results found");
                // Handle no results case
            }
        }
    };
    
    performSmartSearch();
}, [currentMood, selectedAdventure]);
*/


// const handleSearch = async (searchQuery) => {
//     try {
//         // Step 1: Get user's current location
//         const { city, state } = await getUserLocation();
//         console.log("Using location for search:", { city, state });

//         // Step 2: Check if data already exists in database
//         let locationResults = null;
        
//         if (currentMood && selectedAdventure) {
//             locationResults = await checkExistingLocationData(
//                 currentMood.id, 
//                 selectedAdventure.title, 
//                 city, 
//                 state
//             );
//         }

//         // Step 3: If data exists, use it and skip API calls
//         if (locationResults) {
//             console.log("Using existing location data, skipping OpenCage API call");
//             updateAdventureData(selectedAdventure, locationResults,city,state);
//             setShowSearchResult(true);
//             return locationResults;
//         }
//         else {
//         // Step 4: No existing data found, search using OpenCage API
//         console.log("No existing location data found, calling OpenCage API");
//         const searchResults = await searchPlacesWithOpenCage(searchQuery, city, state);

//         // Step 5: Update local state with new results
//         if (searchResults && searchResults.length > 0 && currentMood && selectedAdventure) {
//             // Filter out invalid results
//             const validResults = searchResults.filter(result =>
//                 result.address &&
//                 result.address.trim() !== '' &&
//                 !result.address.toLowerCase().includes('no address found')
//             );

//             if (validResults.length > 0) {
//                 // Update local state
//                 updateAdventureData(selectedAdventure, validResults,city,state);

//                 // Save to database (don't await to avoid blocking UI)
//                 saveLocationDataToDatabase(
//                     currentMood.id,
//                     selectedAdventure.title,
//                     city,
//                     state,
//                     validResults
//                 );
//             } else {
//                 console.log("No valid results with proper addresses found, skipping database save");
//             }
//         }

//         setShowSearchResult(true);
//         return searchResults;
//         }

//     } catch (error) {
//         console.error("Error in handleSearch:", error);
//         return [];
//     }
// };




// const handleSearch = async (searchQuery) => {
//         try {
//             // Get user's current location first
//             const getUserLocation = () => {
//                 return new Promise((resolve) => {
//                     if ("geolocation" in navigator) {
//                         navigator.geolocation.getCurrentPosition(
//                             async (position) => {
//                                 try {
//                                     const { latitude, longitude } = position.coords;
//                                     console.log("Got coordinates:", latitude, longitude);

//                                     const response = await fetch(
//                                         `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
//                                     );

//                                     if (response.status === 403) {
//                                         console.error("OpenCage API returned 403 Forbidden. Check your API key and usage limits.");
//                                         resolve({ city: "Bengaluru", state: "Karnataka" });
//                                         return;
//                                     }

//                                     const data = await response.json();

//                                     if (!data.results || data.results.length === 0) {
//                                         console.error("No location results found");
//                                         resolve({ city: "Bengaluru", state: "Karnataka" });
//                                         return;
//                                     }

//                                     const result = data.results[0];
//                                     const components = result.components;

//                                     const city = components.city ||
//                                         components.town ||
//                                         components.village ||
//                                         components.municipality ||
//                                         components.district ||
//                                         components.county ||
//                                         components.suburb ||
//                                         components.neighbourhood ||
//                                         "Bengaluru";

//                                     const state = components.state || "Karnataka";

//                                     console.log("Detected location:", { city, state });
//                                     resolve({ city, state });

//                                 } catch (err) {
//                                     console.error("Error in location processing:", err);
//                                     resolve({ city: "Bengaluru", state: "Karnataka" });
//                                 }
//                             },
//                             (error) => {
//                                 console.error("Geolocation error:", error.message);
//                                 resolve({ city: "Bengaluru", state: "Karnataka" });
//                             }
//                         );
//                     } else {
//                         console.error("Geolocation not supported");
//                         resolve({ city: "Bengaluru", state: "Karnataka" });
//                     }
//                 });
//             };

//             // Get current location first
//             const { city, state } = await getUserLocation();
//             console.log("Using location for search:", { city, state });

//             // Step 1: Check if locationAndDirection data exists for this moodId, title, and state
//             const checkExistingLocationData = async (moodId, title, state) => {
//                 try {
//                     console.log("Checking existing location data for:", { moodId, title, state });

//                     const response = await fetch(
//                         `https://moodspace-api-production.up.railway.app/locationAndDirection?moodId=${moodId}&title=${encodeURIComponent(title)}&location=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`
//                     );

//                     if (response.ok) {
//                         const existingData = await response.json();
//                         console.log("Found existing location data:", existingData);

//                         // Check if the response has valid locationAndDirection data
//                         if (existingData && existingData.locationAndDirection && existingData.locationAndDirection.length > 0) {
                           
//                             return existingData.locationAndDirection;
//                         }
//                     }
//                     else {
//                     console.log("No existing location data found or API call failed");
//                     return null;
//                     }
//                 } catch (error) {
//                     console.error("Error checking existing location data:", error);
//                     return null;
//                 }
//             };

//             // Step 2: If data exists, use it; otherwise call OpenCage API
//             let locationResults = null;

//             if (currentMood && selectedAdventure) {
//                 locationResults = await checkExistingLocationData(currentMood.id, selectedAdventure.title, state);
//             }

//             if (locationResults) {
//                 console.log("Using existing location data, skipping OpenCage API call");

//                 // Update local state with existing data
//                 if (currentMood && selectedAdventure) {
//                     const updatedAdventure = {
//                         ...selectedAdventure,
//                         locationAndDirection: locationResults
//                     };
                   
//                     setSelectedAdventure(updatedAdventure);

//                     // Update local adventure database data
//                     if (adventureDatabaseData[currentMood.id]) {
//                         const idx = adventureDatabaseData[currentMood.id].findIndex(
//                             adv => adv.title === selectedAdventure.title
//                         );
//                         if (idx !== -1) {
//                             adventureDatabaseData[currentMood.id][idx] = {
//                                 ...adventureDatabaseData[currentMood.id][idx],
//                                 ...updatedAdventure
//                             };
//                         }
//                     }
//                 }
//                 setShowSearchResult(true)
//                 return locationResults;
//             }

//             // Step 3: No existing data found, proceed with OpenCage API call
//             console.log("No existing location data found, calling OpenCage API");

//             const apiKey = "20fdf466350e4924abc2708b462ed0fc" || process.env.REACT_APP_OPENCAGE_KEY;

//             if (!apiKey) {
//                 console.error("Missing OpenCage API key. Please set REACT_APP_OPENCAGE_KEY in your environment.");
//                 return [];
//             }

//             console.log("Starting search for:", searchQuery);

//             // Define keyword mappings for categories
//             // const keywordMappings = {
//             //     parks: {
//             //         keywords: ['quiet', 'garden', 'botanical', 'park', 'nature', 'peaceful', 'green'],
//             //         searchTerms: ['botanical garden', 'park', 'garden', 'nature park']
//             //     },
//             //     wellness: {
//             //         keywords: ['spa', 'meditation', 'mindful', 'wellness', 'relax', 'peaceful'],
//             //         searchTerms: ['spa', 'wellness center', 'meditation center']
//             //     },
//             //     cultural: {
//             //         keywords: ['libraries', 'library', 'museum', 'cultural', 'art', 'reflect', 'study'],
//             //         searchTerms: ['library', 'museum', 'cultural center']
//             //     },
//             //     temples: {
//             //         keywords: ['temple', 'spiritual', 'meditation', 'peaceful', 'reflect'],
//             //         searchTerms: ['temple', 'spiritual center']
//             //     }
//             // };

//             // Analyze search query to find relevant categories
//             const analyzeSearchForCategories = (query) => {
//                 const searchText = query.toLowerCase();
//                 const words = searchText.split(/\s+/).filter(word => word.length > 2);
//                 const matchedCategories = [];

//                 Object.entries(keywordMappings).forEach(([category, config]) => {
//                     let categoryScore = 0;

//                     config.keywords.forEach(keyword => {
//                         if (searchText.includes(keyword.toLowerCase())) {
//                             categoryScore += 10;
//                         }

//                         words.forEach(word => {
//                             if (word === keyword.toLowerCase()) {
//                                 categoryScore += 8;
//                             } else if (word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)) {
//                                 categoryScore += 5;
//                             }
//                         });
//                     });

//                     if (categoryScore > 0) {
//                         matchedCategories.push({
//                             category,
//                             searchTerms: config.searchTerms,
//                             priority: categoryScore
//                         });
//                     }
//                 });

//                 return matchedCategories
//                     .sort((a, b) => b.priority - a.priority)
//                     .slice(0, 3);
//             };

//             // Search for places with proper query formatting
//             const searchPlacesForQuery = async (query, detectedCity, detectedState) => {
//                 try {
//                     const categories = analyzeSearchForCategories(query);
//                     console.log("Matched categories:", categories);

//                     const locationResults = [];

//                     if (categories.length === 0) {
//                         // If no categories match, try a simple direct search with the main query
//                         const cleanQuery = query.split(' ').slice(0, 2).join(' '); // Take first 2 words only
//                         const directSearchQuery = `${cleanQuery} ${detectedCity}`;

//                         console.log("Direct search query:", directSearchQuery);

//                         try {
//                             const searchResponse = await fetch(
//                                 `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(directSearchQuery)}&key=${apiKey}&limit=5&countrycode=IN`
//                             );
//                             const searchData = await searchResponse.json();

//                             if (searchData.results && searchData.results.length > 0) {
//                                 return searchData.results.slice(0, 5).map(result => ({
//                                     address: result.formatted,
//                                     gettingThere: "Check local transit apps for directions",
//                                     parking: "Street parking typically available",
//                                     category: "general",
//                                     coordinates: {
//                                         lat: result.geometry.lat,
//                                         lng: result.geometry.lng
//                                     }
//                                 }));
//                             }
//                         } catch (error) {
//                             console.error("Direct search error:", error);
//                         }
//                     }

//                     // Search using categories with proper query format
//                     for (const categoryConfig of categories.slice(0, 3)) {
//                         for (const searchTerm of categoryConfig.searchTerms.slice(0, 2)) {
//                             // Create a clean, simple search query
//                             const cleanSearchQuery = `${searchTerm} ${detectedCity}`;
//                             console.log("Category search query:", cleanSearchQuery);

//                             try {
//                                 const searchResponse = await fetch(
//                                     `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(cleanSearchQuery)}&key=${apiKey}&limit=1&countrycode=IN`
//                                 );

//                                 console.log("Search response status:", searchResponse.status);
//                                 const searchData = await searchResponse.json();
//                                 console.log("Search response data:", searchData);

//                                 if (searchData.results && searchData.results.length > 0) {
//                                     const relevantResults = searchData.results
//                                         .filter(result => {
//                                             // More lenient filtering - just check if it's in the right state or city
//                                             const components = result.components || {};
//                                             const resultCity = components.city || components.town || components.village || '';
//                                             const resultState = components.state || '';

//                                             return (
//                                                 resultCity.toLowerCase().includes(detectedCity.toLowerCase()) ||
//                                                 resultState.toLowerCase().includes(detectedState.toLowerCase()) ||
//                                                 result.formatted.toLowerCase().includes(detectedCity.toLowerCase())
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
//                                             }
//                                         }));

//                                     console.log("Relevant results for", searchTerm, ":", relevantResults);
//                                     locationResults.push(...relevantResults);
//                                 }
//                             } catch (searchError) {
//                                 console.error(`Error searching for ${cleanSearchQuery}:`, searchError);
//                             }

//                             // Rate limiting - important for API
//                             await new Promise(resolve => setTimeout(resolve, 300));
//                         }
//                     }

//                     // Remove duplicates and return results
//                     const uniqueResults = locationResults
//                         .filter((result, index, self) =>
//                             index === self.findIndex(r => r.address === result.address)
//                         )
//                         .slice(0, 5);

//                     console.log("Final results:", uniqueResults);
//                     return uniqueResults;

//                 } catch (error) {
//                     console.error("Error searching for places:", error);
//                     return [];
//                 }
//             };

//             // Perform the search
//             const results = await searchPlacesForQuery(searchQuery, city, state);

//             console.log("Search completed, returning:", results);

//             // Step 4: Save results to database if we have results and proper addresses
//             if (results && results.length > 0 && currentMood && selectedAdventure) {
//                 // Check if results have proper addresses (not empty or generic)
//                 const validResults = results.filter(result =>
//                     result.address &&
//                     result.address.trim() !== '' &&
//                     !result.address.toLowerCase().includes('no address found')
//                 );

//                 if (validResults.length > 0) {
//                     // Update selectedAdventure with new locationAndDirection
//                     const updatedAdventure = {
//                         ...selectedAdventure,
//                         locationAndDirection: validResults
//                     };

//                     setSelectedAdventure(updatedAdventure);

//                     // Also update adventureDatabaseData for persistence
//                     if (adventureDatabaseData[currentMood.id]) {
//                         const idx = adventureDatabaseData[currentMood.id].findIndex(
//                             adv => adv.title === selectedAdventure.title
//                         );
//                         if (idx !== -1) {
//                             adventureDatabaseData[currentMood.id][idx] = {
//                                 ...adventureDatabaseData[currentMood.id][idx],
//                                 ...updatedAdventure
//                             };
//                         }
//                     }

//                     // Save to database via PUT API
//                     const saveToDatabase = async () => {
//                         try {
//                             const payload = {
//                                 moodId: currentMood.id,
//                                 title: selectedAdventure.title,
//                                 state: state,
//                                 location: city,
//                                 locationAndDirection: validResults
//                             };

//                             console.log("Saving to database with payload:", payload);

//                             const saveResponse = await fetch(
//                                 'https://moodspace-api-production.up.railway.app/locationAndDirection',
//                                 {
//                                     method: 'POST',
//                                     headers: {
//                                         'Content-Type': 'application/json',
//                                     },
//                                     body: JSON.stringify(payload)
//                                 }
//                             );

//                             if (saveResponse.ok) {
//                                 const savedData = await saveResponse.json();
//                                 console.log("Successfully saved to database:", savedData);
//                             } else {
//                                 console.error("Failed to save to database:", saveResponse.status, await saveResponse.text());
//                             }
//                         } catch (saveError) {
//                             console.error("Error saving to database:", saveError);
//                         }
//                     };

//                     // Call save function (don't await to avoid blocking UI)
//                     saveToDatabase();
//                 } else {
//                     console.log("No valid results with proper addresses found, skipping database save");
//                 }
//             }
//             setShowSearchResult(true)
//             return results;

//         } catch (error) {
//             console.error("Error in handleSearch:", error);
//             return [];
//         }
//     };


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
                                    onClick={() => {setShowAdventureDetail(false);setShowSearchResult(false)}}
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

                                        <p className="text-xs text-gray-500 mt-2">
                                            💡 Keywords are automatically generated based on your selected mood ({currentMood?.name})
                                            and adventure preferences. Use these to search for relevant locations!
                                        </p>
                                        </div>
                                        </div>

                                        {/* Location & Directions - only show if selectedAdventure.locationAndDirection exists and has results */}
                                        {showSearchResult&&selectedAdventure.locationAndDirection && Array.isArray(selectedAdventure.locationAndDirection) && selectedAdventure.locationAndDirection.length > 0 && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                    <MapPin className="w-5 h-5 text-blue-500" />
                                                    Location & Directions
                                                </h3>
                                                <div className="bg-blue-50 rounded-xl p-4 space-y-4">
                                                    {selectedAdventure.locationAndDirection.map((loc, idx) => (
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
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {/* If no results, show fallback message */}
                                        {showSearchResult && (!selectedAdventure.locationAndDirection || !Array.isArray(selectedAdventure.locationAndDirection) || selectedAdventure.locationAndDirection.length === 0) && (
                                            <div className="text-center py-6">
                                                <p className="font-semibold text-gray-700 mb-2">
                                                    Sorry, we couldn't find any matching locations or directions for your search.
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    Try adjusting your keywords, or search for a different adventure or mood. You can also check local listings or maps for more options!
                                                </p>
                                                <p className="text-gray-400 text-xs mt-3">
                                                    For this key, try yourself finding a place nearby or check your favorite map app!
                                                </p>
                                            </div>
                                        )}
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
                            onClick={() => {setShowMoodMenu(false);setShowSearchResult(false)}}
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