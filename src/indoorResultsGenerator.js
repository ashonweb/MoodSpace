// indoorResultsGenerator.js

import { keywordMappings ,moodCategoryMappings,moodCategories,moods} from "./adventureDatabase";
const indoorResultsGenerator = {
    'Knitting Nook Session':{
        keywords: ['knitting', 'nook', 'session', 'craft', 'yarn', 'wool', 'handmade']
        , results: [
            { name: 'Home Knitting Corner', description: 'Create a cozy corner with cushions, soft lighting, and knitting supplies' },
        ]
        
    },

    'Incense + Soft Music Nest':{
        keywords: ['Incense + Soft Music Nest','incense', 'soft music', 'nest', 'cozy', 'relaxation', 'ambiance', 'calm', 'intimate'],
        results: [
            { name: 'Home Nest', description: 'Create a cozy corner with cushions, soft lighting, and incense for relaxation' },
           
        ],
    },
    
    'Gentle Tea Ceremony':{
        keywords: ['tea', 'ceremony', 'gentle', 'calm', 'relaxation', 'meditative', 'soothing', 'ritual'],
        results: [
            { name: 'Home Tea Corner', description: 'Create a cozy tea corner with cushions and soft lighting for a calming tea ceremony' },
            { name: 'Local Tea House', description: 'Visit a nearby tea house for a relaxing tea experience' },
        ]
    },
    'Stillness Session':{
        keywords: ['stillness', 'session', 'meditation', 'mindfulness', 'calm', 'peaceful', 'quiet', 'reflect'],
        results: [
            { name: 'Home  Space', description: 'Create a quiet corner with cushions and soft lighting for meditation' },
            { name: 'Nature/parks', description: 'Visit a near by park' },
        ]
    },
    'Handwritten Recipe Swap': {
        keywords: ['recipe', 'swap', 'handwritten', 'cooking', 'food', 'culinary', 'kitchen', 'personalized'],
        results: [
            { name: 'Recipe Exchange', description: 'Exchange handwritten recipes with your partner' },
            { name: 'Cooking Together', description: 'Prepare a meal together, trying out exchanged recipes or cuisines' },
            { name: 'Recipe Book Creation', description: 'Compile your favorite recipes into a personalized book' },
        ]
    },
    'Vinyl Record':{
        keywords: ['vinyl', 'record', 'music', 'retro', 'nostalgia', 'collectible', 'turntable'],
        results: [
            { name: 'Vinyl Record Listening Session', description: 'Set up a cozy space with your favorite vinyl records and a turntable' },
            { name: 'Record Store Visit', description: 'Explore local record stores for unique vinyl finds' },
            { name: 'Vinyl Record Themed Party', description: 'party where you both enjoy favorite vinyl records' }
        ]
    },
    'Garden Planting Date':{
        keywords: ['garden', 'planting', 'date', 'indoor gardening', 'home garden', 'plants', 'flowers'],
        results: [
            { name: 'Indoor Planting Kit', description: 'Use a DIY indoor planting kit to create a small garden together' },
            { name: 'Herb Garden in Pots', description: 'Plant herbs in pots for your kitchen or balcony' },
            { name: 'Terrarium Building', description: 'Create a beautiful terrarium with succulents and decorative stones' },
            { name: 'Flower Arrangement Workshop', description: 'Learn to arrange flowers together for home decor' },
            { name: 'Gardening Books and Resources', description: 'Explore gardening books or online resources for tips and inspiration' },
            { name: 'Indoor Plant Swap', description: 'Exchange indoor plants with friends or neighbors for variety' }
        ]
    },
    'DIY Candle-Making Date':
    {
        keywords: ['candle', 'diy', 'DIY Candle-Making Date','craft', 'homemade'],
        results: [
            { name: 'Candle-Making Kit at Home', description: 'Use a DIY candle-making kit to create personalized candles together' },
            { name: 'Candlelit Dinner at Home', description: 'Prepare a romantic dinner with candles and soft music' },
            { name: 'Cozy Movie Night with Candles', description: 'Set up a movie marathon with your favorite romantic films and candles' },
            { name: 'Home Spa Day with Candles', description: 'Create a spa-like atmosphere with massages, relaxation, and scented candles' },
            { name: 'Indoor Picnic with Candles', description: 'Lay out a picnic blanket in your living room with snacks, drinks, and candles' },
            { name: 'Stargazing from Home with Candles', description: 'Use a telescope or binoculars to stargaze from your balcony or window while enjoying candlelight' }
        ]
    },
    'Rooftop Storytelling Night':{
        keywords: ['rooftop', 'storytelling', 'night', 'outdoor', 'view', 'skyline', 'stars', 'intimate'],
        results: [
            { name: 'Rooftop Storytelling with City Views', description: 'Share stories under the stars with a city skyline backdrop' },
            { name: 'Cozy Rooftop Setup', description: 'Create a comfortable space with cushions and blankets for storytelling' },
            { name: 'Storytelling with Fairy Lights', description: 'Use fairy lights to create a magical atmosphere on your rooftop' },
            { name: 'Rooftop Stargazing', description: 'Combine storytelling with stargazing using a telescope or binoculars' },
            { name: 'Rooftop Picnic with Stories', description: 'Enjoy a picnic while sharing stories on your rooftop' },
            { name: 'Rooftop Movie Night', description: 'Set up a projector for an outdoor movie night with storytelling elements' }
        ]
    },
    'Slow Dance at Home':   
    {
        keywords: ['dance', 'slow dance', 'romantic', 'couple', 'intimate', 'affection', 'relationship', 'partner'],
        results: [
            { name: 'Candlelit Slow Dance', description: 'Create a romantic atmosphere with candles and soft music for a slow dance' },
            { name: 'Living Room Dance Floor', description: 'Clear space in your living room for a cozy dance session' },
            { name: 'Slow Dance to Your Favorite Songs', description: 'Create a playlist of your favorite romantic songs for dancing' },
            { name: 'Dance Lessons at Home', description: 'Follow online tutorials for slow dance styles like waltz or foxtrot' },
            { name: 'Dance in the Kitchen', description: 'Cook together and take breaks to dance in the kitchen' },
            { name: 'Outdoor Balcony Dance', description: 'If you have a balcony, dance under the stars with soft lighting' }
        ]
    },
    'Memory Jar Workshop':
    {
        keywords: ['memory', 'jar', 'workshop', 'craft', 'DIY', 'personalized', 'sentimental'],
        results: [
            { name: 'Memory Jar Crafting at Home', description: 'Create a memory jar together, writing down favorite moments and memories' },
            { name: 'Personalized Memory Jar', description: 'Decorate a jar with photos and mementos, filling it with shared memories' },
            { name: 'Memory Jar Date Night', description: 'Spend the evening reminiscing and adding new memories to your jar' },
            { name: 'DIY Memory Jar Kit', description: 'Use a DIY kit to create a beautiful memory jar with personalized touches' },
            { name: 'Memory Jar Storytelling', description: 'Share stories behind each memory added to the jar, deepening your connection' },
                    { name: 'Memory Jar Display', description: 'Find a special place at home to display your memory jar as a reminder of your journey together' }
        ]
                },
    love:{
        keywords: ['love',"candle", 'romantic', 'couple', 'intimate', 'affection', 'relationship', 'partner', 'date'],
        results: [
            { name: 'Candlelit Dinner at Home', description: 'Prepare a romantic dinner with candles and soft music' },
            { name: 'Cozy Movie Night', description: 'Set up a movie marathon with your favorite romantic films' },
            { name: 'Home Spa Day', description: 'Create a spa-like atmosphere with massages and relaxation' },
            { name: 'Indoor Picnic', description: 'Lay out a picnic blanket in your living room with snacks and drinks' },
            { name: 'Stargazing from Home', description: 'Use a telescope or binoculars to stargaze from your balcony or window' },
            { name: 'Cooking Together', description: 'Prepare a meal together, trying out new recipes or cuisines' }
        ]
    },
    // Poetry/Reading related activities
    poetry: {
        keywords: ['poetry', 'poem', 'reading', 'read', 'book', 'literature', 'verse', 'writing'],
        results: [
            { name: 'Cozy Reading Nook at Home', description: 'Create a comfortable corner with soft lighting and your favorite poetry books' },
            { name: 'Local Library Poetry Section', description: 'Find a quiet corner in the library\'s poetry or literature section' },
            { name: 'Independent Bookstore', description: 'Browse poetry collections in a cozy bookstore with reading areas' },
            { name: 'Cafe with Book Collection', description: 'Visit a literary cafe that has poetry books and quiet ambiance' },
            { name: 'University Library', description: 'Access extensive poetry collections in academic library quiet zones' },
            { name: 'Home Study/Den', description: 'Transform your study space into a poetry sanctuary with candles and comfort' }
        ]
    },
    yoga: { 
        keywords: ['yoga', 'stretch', 'breathe', 'mindfulness'],
        results: [
            { name: 'Home Yoga Space', description: 'Create a dedicated area with yoga mats, cushions, and calming decor' },
            { name: 'Yoga Studio', description: 'Join classes at a local yoga studio for guided sessions' },
            { name: 'Community Center Yoga Room', description: 'Access community spaces that offer yoga classes or quiet practice areas' },
            { name: 'Outdoor Yoga (if weather permits)', description: 'Practice yoga in your backyard or balcony for fresh air' },
            { name: 'Friend\'s Home Yoga Space', description: 'Join friends who have a dedicated yoga area for group practice' },
        ]
    },

language :{
        keywords: ['language', 'learn', 'study', 'speak', 'practice','exchange', 'communication', 'conversation'],
        results: [
            { name: 'Home Language Corner', description: 'Set up a cozy space with language books, flashcards, and audio resources' },
            { name: 'Language Exchange Cafe', description: 'Join language exchange meetups at local cafes or community centers' },
            { name: 'Online Language Classes', description: 'Participate in virtual language classes or conversation groups' },
            { name: 'Library Language Section', description: 'Use library resources for language learning materials and quiet study' },
            { name: 'Language Learning App', description: 'Use apps like Duolingo or Babbel for interactive language practice at home' }
        ]
    },
    comedy: {
        keywords: ['comedy', 'humor', 'laugh', 'stand-up', 'jokes', 'funny', 'entertainment'],

        results: [
            { name: 'Home Comedy Night', description: 'Host a comedy night with friends, watching stand-up specials or sharing jokes' },
            { name: 'Comedy Podcast Listening', description: 'Listen to comedy podcasts at home or during commutes for laughs' },
            { name: 'Comedy Movie Marathon', description: 'Organize a movie night with classic comedies or stand-up specials' },
            { name: 'Online Comedy Shows', description: 'Stream live comedy shows or specials from platforms like Netflix or YouTube' },
            { name: 'Friend\'s Comedy Collection', description: 'Share laughs with friends who have a collection of comedy shows or movies' }
        ]
    },



    Photo :{
        keywords: ['photo', 'browse','photography','memory', 'capture', 'image', 'picture', 'snapshot', 'lens', 'camera'],
        results: [
            { name: 'Home Photography Studio', description: 'Set up a small studio with good lighting and backdrops for indoor photography' },
            {name:"Home sofa", description: 'Create a cozy sofa setup with cushions and blankets for relaxed photography sessions'},
        ]},

    blanket: {
        keywords: ['blanket','soft', 'cozy', 'warm', 'snuggle', 'comfort', 'soft', 'cuddle', 'relax'],
        results: [
            { name: 'Home Blanket Fort', description: 'Build a cozy blanket fort with pillows and fairy lights for a snug retreat' },
            { name: 'Couch with Soft Blankets', description: 'Create a comfortable couch setup with your favorite blankets and cushions' },
            { name: 'Bedroom Sanctuary', description: 'Transform your bedroom into a cozy haven with soft blankets and dim lighting' },
            { name: 'Reading Nook', description: 'Set up a reading nook with blankets, cushions, and good lighting' },
            { name: 'Outdoor Blanket Picnic (if weather permits)', description: 'Enjoy a blanket picnic in your backyard or balcony' },
            { name: 'Friend\'s Cozy Home', description: 'Visit friends who have a warm and inviting home atmosphere' }
        ]
    },

    // Meditation/Reflection activities
    meditation: {
        keywords: ['meditation', 'meditat', 'reflect', 'mindful', 'breathe', 'calm', 'peace', 'zen', 'spiritual'],
        results: [
            { name: 'Quiet Home Corner', description: 'Set up a dedicated meditation space with cushions and minimal distractions' },
            { name: 'Meditation Center', description: 'Join a local meditation center for guided sessions or quiet practice' },
            { name: 'Library Meditation Room', description: 'Some libraries have designated quiet or meditation spaces' },
            { name: 'Bedroom Sanctuary', description: 'Create a peaceful meditation space in your bedroom with soft lighting' },
            { name: 'Home Office After Hours', description: 'Transform your workspace into a meditation area when not working' }
        ]
    },

    // Art/Creative activities
    art: {
        keywords: ['art', 'creative', 'craft', 'paint', 'draw', 'design', 'artistic', 'create', 'express', 'pottery', 'sketch'],
        results: [
            { name: 'Home Art Corner', description: 'Set up an art station with supplies and good lighting for creative expression' },
            { name: 'Local Art Studio', description: 'Rent studio time or join open studio sessions at community art centers' },
            { name: 'Art Supply Store Workshop Area', description: 'Many art stores have workshop spaces or allow in-store creating' },
            { name: 'Community Center Art Room', description: 'Access art facilities at local community centers' },
            { name: 'Coffee Shop with Art Supplies', description: 'Some cafes provide art materials for customers to use while relaxing' },
            { name: 'Friend\'s Creative Space', description: 'Share creative time with friends who have dedicated art areas' }
        ]
    },
    party:{
        keywords: ['party', 'dance','celebrate', 'gathering', 'friends', 'social', 'event', 'fun', 'celebration', 'festive'],
        results: [
            { name: 'Home Party Setup', description: 'Transform your living room into a festive party space with decorations and music' },
            { name: 'Friend\'s House Party', description: 'Join friends who are hosting a party with good food and music' },
            { name: 'Local Event Space', description: 'Rent a small event space for private parties or gatherings' },
            { name: 'Community Center Hall', description: 'Use community center facilities for larger gatherings or celebrations' },
            { name: 'Rooftop or Balcony Party', description: 'If available, host a small gathering on your rooftop or balcony' },
            { name: 'Themed Costume Party', description: 'Organize a themed party at home or a friend\'s place for added fun' }
        ]
    },
    Karaoke:{
        keywords: ['karaoke', 'fun', 'voice', 'song','solo', 'performance', 'singing', 'entertainment', 'music'],
        results: [
            { name: 'Home Karaoke Setup', description: 'Set up a karaoke machine or use apps for a fun singing session at home' },
            { name: 'Karaoke Bar', description: 'Visit a local karaoke bar for a lively singing experience with friends' },
            { name: 'Friend\'s Home Karaoke', description: 'Join friends who have a karaoke setup for a fun night of singing' },
        ]
    },

    puzzle :{
        keywords: ['puzzle', 'brain', 'challenge', 'logic', 'mind', 'solve', 'piece', 'jigsaw', 'crossword'],
        results: [
            { name: 'Home Puzzle Corner', description: 'Create a cozy space with good lighting and comfortable seating for puzzle solving' },
            { name: 'Puzzle Cafe', description: 'Visit cafes that offer puzzles for customers to enjoy while sipping coffee' },
            { name: 'Online Puzzle Platforms', description: 'Use websites or apps that offer digital puzzles for solo or group play' }
,
            { name: 'Friend\'s Puzzle Collection', description: 'Join friends who have a collection of puzzles for group solving' },
            { name: 'Community Center Game Room', description: 'Access game rooms at local community centers for puzzle activities' },
            { name: 'Library Puzzle Section', description: 'Some libraries have puzzle collections available for use' },
        ]
    },
    // Music activities
    music: {
        keywords: ['choir','music', 'song', 'sing', 'instrument', 'piano', 'guitar', 'listen', 'audio', 'sound', 'melody'],
        results: [
            { name: 'Home Music Setup', description: 'Create the perfect listening environment with quality speakers or headphones' },
            { name: 'Music Practice Room', description: 'Rent practice space at music schools or community centers' },
            { name: 'Record Store Listening Station', description: 'Discover new music at record stores with listening booths' },
            { name: 'Music Cafe', description: 'Visit cafes known for their curated music playlists and acoustic ambiance' },
            { name: 'Friend\'s Music Room', description: 'Enjoy music with friends who have dedicated listening or practice spaces' },
            { name: 'Library Audio Section', description: 'Some libraries have audio rooms for music listening or practice' }
        
        ]
    },

    // Cooking/Food activities
    cooking: {
        keywords: ['cook', 'baking','food', 'recipe', 'kitchen', 'bake', 'meal', 'chef', 'culinary', 'eat', 'dining'],
        results: [
            { name: 'Your Kitchen', description: 'Transform your kitchen into a creative culinary space for experimental cooking' },
            { name: 'Cooking Class Studio', description: 'Join cooking classes at culinary schools or community centers' },
            { name: 'Friend\'s Kitchen', description: 'Cook together with friends in a spacious, well-equipped kitchen' },
            { name: 'Community Kitchen', description: 'Use shared cooking facilities at community centers or co-working spaces' },
            { name: 'Outdoor Kitchen/Covered Patio', description: 'If available, use covered outdoor cooking areas for fresh air cooking' },
            { name: 'Cooking Studio Rental', description: 'Rent professional kitchen space for special cooking projects' }
        ]
    },

    // Movie/Entertainment
    movies: {
        keywords: ['movie', 'film', 'cinema', 'watch', 'screen', 'theater', 'entertainment', 'show'],
        results: [
            { name: 'Home Theater Setup', description: 'Create cinema experience with dim lighting, comfortable seating, and snacks' },
            { name: 'Local Independent Cinema', description: 'Support indie theaters for unique film experiences' },
            { name: 'Drive-in Theater', description: 'Enjoy movies from the comfort of your car in a nostalgic setting' },
            { name: 'Friend\'s Home Theater', description: 'Enjoy movies with friends who have dedicated viewing setups' },
            { name: 'Streaming Setup with Projector', description: 'Set up a projector for big-screen experience at home' },
            { name: 'Cozy Living Room', description: 'Transform your living room into a comfortable movie-watching space' }
        ]
    },

    // Gaming activities
    gaming: {
        keywords: ['game', 'gaming', 'play', 'board', 'card', 'video', 'digital'],
        results: [
            { name: 'Home Gaming Setup', description: 'Create the perfect gaming environment with comfortable seating and equipment' },
            { name: 'Board Game Cafe', description: 'Visit cafes that specialize in board games and tabletop gaming' },
            { name: 'Friend\'s Gaming Room', description: 'Join friends for multiplayer gaming sessions in dedicated game rooms' },
            { name: 'Community Center Game Room', description: 'Access gaming facilities at local community centers' },
            { name: 'Gaming Lounge', description: 'Visit gaming lounges or internet cafes for social gaming experiences' },
            { name: 'Library Game Collection', description: 'Some libraries have board game collections available for use' }
        ]
    },

    // Exercise/Fitness (indoor)
    fitness: {
        keywords: ['exercise', 'workout', 'fitness', 'yoga', 'stretch', 'cardio', 'strength', 'gym', 'dance'],
        results: [
            { name: 'Home Workout Space', description: 'Set up a dedicated area for indoor exercise with proper ventilation' },
            { name: 'Local Gym', description: 'Use gym facilities for structured workout routines' },
            { name: 'Yoga Studio', description: 'Join yoga classes or use studio space for personal practice' },
            { name: 'Community Center Fitness Room', description: 'Access fitness facilities at local community centers' },
            { name: 'Dance Studio', description: 'Rent dance studio space for movement and exercise' },
            { name: 'Apartment Building Gym', description: 'Use building amenities if available for convenient workouts' }
        ]
    },

    // Study/Learning
    study: {
        keywords: ['study', 'learn', 'research', 'education', 'knowledge', 'course', 'skill', 'practice'],
        results: [
            { name: 'Home Study Desk', description: 'Create an organized, distraction-free study environment at home' },
            { name: 'Library Study Room', description: 'Book private or group study rooms at local libraries' },
            { name: 'Coffee Shop Study Corner', description: 'Find quiet corners in cafes with good wifi and minimal distractions' },
            { name: 'University Study Hall', description: 'Access academic study spaces if available in your area' },
            { name: 'Co-working Space', description: 'Use quiet zones in co-working spaces for focused learning' },
            { name: 'Bookstore Study Area', description: 'Many bookstores have comfortable reading areas perfect for studying' }
        ]
    },

    gratitude: {
        keywords: ['gratitude', 'thankful', 'appreciation', 'reflect', 'journal', 'mindfulness', 'positive thinking'],  
        results: [
            { name: 'Home Gratitude Journal Corner', description: 'Create a cozy space with your journal and favorite writing tools' },
            { name: 'Quiet Cafe for Reflection', description: 'Find a peaceful cafe corner to reflect and write in your gratitude journal' },
            { name: 'Library Quiet Zone', description: 'Use library spaces designed for quiet reflection and journaling' },
            { name: 'Community Center Lounge', description: 'Access comfortable community spaces for personal reflection' },
            { name: 'Bookstore Reading Area', description: 'Spend time in cozy bookstore reading nooks for quiet reflection' },
            { name: 'Friend\'s Comfortable Home', description: 'Enjoy intimate activities in welcoming, familiar spaces' }
        ]
    },

    

    // Default/General indoor activities
    general: {
        keywords: ['indoor', 'inside', 'home', 'cozy', 'comfort', 'private', 'intimate', 'quiet'],
        results: [
            { name: 'Cozy Home Environment', description: 'Create perfect ambiance with soft lighting, comfortable seating, and personal touches' },
            { name: 'Quiet Cafe Corner', description: 'Find an intimate corner in a peaceful coffee shop' },
            { name: 'Library Quiet Zone', description: 'Use library spaces designed for quiet, contemplative activities' },
            { name: 'Community Center Lounge', description: 'Access comfortable community spaces during off-peak hours' },
            { name: 'Bookstore Reading Area', description: 'Spend time in cozy bookstore reading nooks' },
            { name: 'Friend\'s Comfortable Home', description: 'Enjoy intimate activities in welcoming, familiar spaces' }
        ]
    }
};

// Main function to generate indoor results
const generateIndoorResults = (adventure) => {
    const { title, description, type, vibe, tags } = adventure;
    
    // Combine text to analyze
    // const textToAnalyze = `${title} ${description || ''} ${type || ''} ${vibe || ''}`.toLowerCase();
    const textToAnalyze = `${title}`.toLowerCase();

    console.log("Generating indoor results for:", title);
    console.log("Text to analyze:", textToAnalyze);
    
    // Find matching categories
    const matchedCategories = [];
    let selectedResults = [];
    
    // Check each category for keyword matches
    Object.entries(indoorResultsGenerator).forEach(([category, config]) => {
        const keywordMatch = config.keywords.some(keyword => 
            textToAnalyze.includes(keyword.toLowerCase())
        
        );
        console.log(`Checking category: ${category}, Match found: ${keywordMatch}`);
        if (keywordMatch) {
            matchedCategories.push(category);
            // Take 2-3 results from each matching category
            selectedResults.push(...config.results.slice(0, 3));
        }
    });
    
    // If no specific matches, use general indoor results
    if (matchedCategories.length === 0) {
        console.log("No specific matches found, using general indoor results");
        selectedResults = indoorResultsGenerator.general.results.slice(0, 4);
        matchedCategories.push('general');
    }
    
    // Remove duplicates and limit results
    const uniqueResults = selectedResults
        .filter((result, index, self) => 
            index === self.findIndex(r => r.name === result.name)
        )
        .slice(0, 6); // Limit to 6 results max
    
    console.log("Matched categories:", matchedCategories);
    console.log("Generated indoor results:", uniqueResults.length);
    
    return {
        results: uniqueResults,
        matchedCategories: matchedCategories,
        totalResults: uniqueResults.length
    };
};

const generateKeywordsForIndoor = (selectedAdventure, selectedMood) => {
    const fullText = `${selectedAdventure.title}`.toLowerCase();
    const fullDesc = `${selectedAdventure.description}`.toLowerCase();
    const category = selectedAdventure.category?.toLowerCase() || '';

    // Define semantic groups optimized for indoor activities
    const semanticGroups = {
        music: ['music', 'sound', 'audio', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
        learning: ['library','Journaling', 'bookstore', 'study', 'reading', 'read', 'book', 'quiet', 'focused', 'learning'],
        art_culture: ['art gallery', 'museum', 'exhibition', 'sculpture', 'culture', 'history', 'heritage', 'gallery'],
        food_drink: ['cafe', 'restaurant', 'dining', 'coffee', 'tea', 'meal', 'eat', 'brunch', 'dessert', 'bakery'],
        wellness: ['spa', 'wellness', 'therapy', 'massage', 'yoga', 'meditation', 'healing', 'relax', 'rejuvenate'],
        entertainment: ['cinema', 'theater', 'movie', 'show', 'performance', 'entertainment', 'game', 'amusement'],
        shopping: ['shop', 'mall', 'store', 'market', 'boutique', 'retail', 'buy', 'browse'],
        creative: ['studio', 'workshop', 'creative', 'art', 'craft', 'paint', 'draw', 'design', 'pottery', 'photography', 'writing'],
        cozy_intimate: ['cozy', 'intimate', 'comfortable', 'warm', 'snug', 'homey', 'nook', 'hideaway'],
        fitness_indoor: ['gym', 'fitness', 'workout', 'exercise', 'training', 'indoor sports', 'yoga'],
        social_indoor: ['community center', 'gathering', 'meeting', 'group', 'social', 'friends', 'party']
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

    // Outdoor keywords to exclude for indoor search
    const outdoorKeywords = [
        'park', 'garden', 'outdoor', 'nature walk', 'hiking', 'beach', 'mountain', 
        'forest', 'trees', 'wilderness', 'fresh air', 'open air', 'rooftop', 
        'terrace', 'plaza', 'viewpoint', 'lakeside', 'riverside', 'waterfront'
    ];

    const addKeywordIfUnique = (keyword, priority, source) => {
        const keywordLower = keyword.toLowerCase();

        // Skip outdoor-specific keywords
        if (outdoorKeywords.some(outdoor => keywordLower.includes(outdoor))) {
            return false;
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
        addKeywordIfUnique(foundTitleKeyword, 90, 'title-exact');
    }

    // Priority 2: Indoor-specific keywords
    const indoorKeywords = [
        'cafe','journaling', 'library', 'bookstore', 'cozy', 'indoor', 'quiet', 'intimate', 
        'studio', 'art gallery', 'museum', 'cinema', 'theater', 'mall', 'gym',
        'spa', 'wellness', 'restaurant', 'dining', 'workshop', 'gallery'
    ];
    
    indoorKeywords.forEach(keyword => {
        if (fullText.includes(keyword)  || category.includes(keyword)) {
            addKeywordIfUnique(keyword, 80, 'indoor-specific');
        }
    });

    // Priority 3: Mood-specific keywords (only indoor-appropriate ones)
    // const moodCategories = moodCategoryMappings[selectedMood.id] || [];
    // moodCategories.forEach((category, categoryIndex) => {
    //     if (keywordMappings[category]) {
    //         keywordMappings[category].keywords.forEach((keyword, keywordIndex) => {
    //             if (fullText.includes(keyword.toLowerCase()) || fullDesc.includes(keyword.toLowerCase())) {
    //                 const priority = (moodCategories.length - categoryIndex) * 10 + (10 - keywordIndex);
    //                 addKeywordIfUnique(keyword, priority, 'mood');
    //             }
    //         });
    //     }
    // });

    // Priority 4: Title content-based keywords
    Object.entries(keywordMappings).forEach(([category, config]) => {
        config.keywords.forEach((keyword, index) => {
            if (fullText.includes(keyword.toLowerCase())) {
                const priority = 5 - (index * 0.1);
                addKeywordIfUnique(keyword, priority, 'title');
            }
        });
    });

    // // Priority 5: Description keywords
    // Object.entries(keywordMappings).forEach(([category, config]) => {
    //     config.keywords.forEach((keyword, index) => {
    //         if (fullDesc.includes(keyword.toLowerCase())) {
    //             const priority = 3 - (index * 0.05);
    //             addKeywordIfUnique(keyword, priority, 'description');
    //         }
    //     });
    // });

    // Priority 6: Category-based indoor keywords
    // const categoryKeywords = {
    //     'cultural': ['museum', 'art gallery', 'exhibition', 'culture', 'history'],
    //     'food': ['cafe', 'restaurant', 'dining', 'coffee', 'tea'],
    //     'wellness': ['spa', 'wellness', 'therapy', 'yoga', 'meditation'],
    //     'entertainment': ['cinema', 'theater', 'show', 'performance'],
    //     'shopping': ['mall', 'store', 'boutique', 'market'],
    //     'learning': ['library', 'bookstore', 'study', 'reading'],
    //     'creative': ['studio', 'workshop', 'art', 'craft']
    // };

    // Object.entries(categoryKeywords).forEach(([cat, keywords]) => {
    //     if (category.includes(cat)) {
    //         keywords.forEach(keyword => {
    //             addKeywordIfUnique(keyword, 2, 'category');
    //         });
    //     }
    // });

    return prioritizedKeywords
        .sort((a, b) => b.priority - a.priority)
        .map(({ keyword }) => keyword)
        .filter(keyword => keyword.length > 2)
        .slice(0, 5);
};


const generateKeywordsForType = (searchType,selectedAdventure,selectedMood) => {
          const fullText = `${selectedAdventure.title}`.toLowerCase();
         const fullDesc = `${selectedAdventure.description}`.toLowerCase();
         const category = selectedAdventure.category?.toLowerCase() || '';
    // Define semantic groups (same as before)
    const semanticGroups = {
        music: ['music', 'sound', 'audio', 'rhythm', 'beat', 'melody', 'song', 'concert', 'live music', 'acoustic', 'performance', 'sing', 'dance'],
        nature: ['trees', 'forest', 'greenery', 'plants', 'flora', 'wilderness', 'natural', 'scenic', 'landscape', 'open air', 'fresh air'],
        water: ['water', 'lake', 'river', 'pond', 'stream', 'beach', 'waves', 'waterfront', 'swimming', 'boating', 'fishing', 'lakeside', 'riverside', 'fountain', 'cascade'],
        peaceful: ['peaceful', 'calm', 'quiet', 'tranquil', 'serene', 'solitude', 'silence', 'mindful', 'meditation'],
        healing: ['healing', 'wellness', 'therapy', 'recovery', 'restore', 'mend', 'relief', 'soothe', 'unwind', 'decompress', 'release', 'tension', 'overwhelming', 'breathe', 'escape', 'gentle', 'nurturing', 'care', 'solace', 'refuge'],
        indoor_activities: ['cafe', 'library', 'bookstore', 'art gallery', 'museum', 'studio', 'workshop', 'cinema', 'theater', 'indoor', 'cozy space'],
        outdoor_activities: ['park', 'garden', 'rooftop','walk','rooftop walk', 'terrace', 'outdoor cafe', 'street', 'plaza', 'viewpoint', 'nature walk'],
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
        addKeywordIfUnique(foundTitleKeyword, 90, 'title-exact');
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
        const outdoorKeywords = ['rooftop','walk', 'terrace', 'park', 'garden', 'outdoor', 'nature', 'viewpoint', 'plaza'];
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

// Updated generateSmartKeywords function
const generateSmartKeywords = (selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings) => {
    if (!selectedMood || !selectedAdventure) {
        return { keywords: '', searchType: 'outdoor', staticResults: [] };
    }

    console.log("Generating smart keywords for:", selectedAdventure.title);
    console.log("Adventure tags:", selectedAdventure.tags);

    // Use tags.setting to determine search type
    const searchType = selectedAdventure.tags?.setting?.toLowerCase() || 'outdoor';
    
    console.log("Search type from tags.setting:", searchType);

    // For indoor adventures, generate static results and minimal search
    if (searchType === 'indoor') {
        const indoorResults = generateIndoorResults(selectedAdventure);
        let generatedKeywordsForIndoor= generateKeywordsForIndoor(selectedAdventure,selectedMood);
        console.log('generatedKeywordsForIndoor:', generatedKeywordsForIndoor);
        return {
            keywords: generatedKeywordsForIndoor, // Just use title as keyword for indoor
            searchType: 'indoor',
            staticResults: indoorResults.results,
            shouldSearch: false, // Don't search for indoor activities
            matchedCategories: indoorResults.matchedCategories
        };
    }
    else {
        console.log("Generating keywords for outdoor adventure");
        let generatedKeywordsForOutdoor= generateKeywordsForType('outdoor',selectedAdventure,selectedMood);
        return {
            keywords: generatedKeywordsForOutdoor,
            searchType: 'outdoor',
            staticResults: [],
            shouldSearch: true
        };
    }

    // For outdoor adventures, use your existing keyword generation logic
    // ... (keep your existing outdoor keyword generation logic here)
    
   
};

export { generateIndoorResults, generateSmartKeywords, indoorResultsGenerator };