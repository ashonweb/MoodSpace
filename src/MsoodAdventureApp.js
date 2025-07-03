import React, { useState, useEffect } from 'react';
import { Heart, Zap, Cloud, Smile, FireExtinguisher, Sun, ParkingCircleIcon, PauseCircle, EyeOff, Flame, Ban, Mountain, Flower, Flower2, Coffee, Crown, Camera, Wind, Music, MapPin, Clock, Star, Compass, Bed, Moon, Users, HeartCrack, Waves, TreePine, Frown, Menu, X, ChevronRight, Search, Loader2 } from 'lucide-react';
import adventureDatabaseData, { getStandardizedCityName, keywordMappings, moodCategories, moodCategoryMappings, moods } from './adventureDatabase';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { generateSmartKeywords } from './indoorResultsGenerator'

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
    // const [searchResults, setSearchResults] = useState([]);
    const [selectedAdventure, setSelectedAdventure] = useState(null)
    const [showAdventureDetail, setShowAdventureDetail] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchKeywords, setSearchKeywords] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(false)


    // Use imported moods, moodCategories, keywordMappings, moodCategoryMappings directly
    const getTopKeywordsForAdventure = (adventure) => {
        const searchText = `
          ${adventure.title}
          ${adventure.description}
          ${adventure.type}
          ${adventure.vibe}
          ${Object.values(adventure.tags || {}).join(' ')}
        `.toLowerCase();
      
        const matches = Object.entries(keywordMappings).filter(([_, keywords]) =>
          keywords.some(k => searchText.includes(k.toLowerCase()))
        );
      
        const allMatchedKeywords = matches.flatMap(([_, keywords]) => keywords);
      
        // Deduplicate and return top N (e.g. first 5 unique)
        const topKeywords = [...new Set(allMatchedKeywords)].slice(0, 5);
      
        return topKeywords;
      };
      
    useEffect(() => {
        updateAdventures();
    }, [selectedIntensity, timeAvailable]);

    const handleAdventureSelect = (adventure) => {
        console.log(currentMood, adventure, "wererwr");
        const topKeywords = getTopKeywordsForAdventure(adventure);

for (const keyword of topKeywords) {
  const query = `${keyword} near bangaloe`;
  console.log("Search query for keyword:", query);
//   searchPlacesAPI(query); // Call your backend or third-party API
}
       
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


    // Generate keywords when adventure or mood changes
    useEffect(() => {
        if (currentMood && selectedAdventure) {
            const generatedKeywords = generateSmartKeywords(
                currentMood,
                selectedAdventure,
                keywordMappings,
                moodCategoryMappings
            );
            console.log((generatedKeywords.keywords), generatedKeywords.keywords.length, "generatedKeywords");
            setSearchKeywords(generatedKeywords.keywords);
        }
    }, [currentMood, selectedAdventure]);


    useEffect(() => {
        if (selectedAdventure) {
            console.log('Updated adventureDatabaseData:', adventureDatabaseData, selectedAdventure);
        }
    }, [selectedAdventure]);


    const handleSearch = async (searchQuery) => {
        console.log(searchQuery, "searchQuery");
        try {
            // Step 1: Get user's current location
            const { city, state } = await getUserLocation();
            console.log("Using location for search:", { city, state });
            let searchResults
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
            if (smartSearchResult.searchType === 'indoor' && smartSearchResult.results?.length > 0) {
                console.log("Using static indoor results, no database/API calls needed");
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
            if (currentMood?.id && selectedAdventure?.title) {
                locationResults = await checkExistingLocationData(
                    currentMood.id,
                    selectedAdventure.title,
                    city,
                    state
                );
            }

            // Step 5: If existing data found, use it
            if (locationResults?.length > 0) {
                console.log("Using existing location data, skipping API calls");
                updateAdventureData(selectedAdventure, locationResults, city, state);
                setShowSearchResult(true);

                return {
                    results: locationResults,
                    searchType: smartSearchResult.searchType,
                    message: "Found existing location data"
                };
            }

            // Step 6: No existing data - proceed with API search ONLY if needed
            if (smartSearchResult.shouldSearch && smartSearchResult.keywords) {
                console.log("No existing location data found, proceeding with API search");
                console.log("Using smart keywords for search:", smartSearchResult.keywords);



                // Function to get search terms based on selected mood and adventure title
                function getSearchTermsFromMappings(selectedMood, adventureTitle, keywordMappings) {
                    console.log(selectedIntensity,adventureTitle,"rwerwerwerrwer")
                    const relevantSearchTerms = [];
                    const matchedCategories = [];

                    // Convert inputs to lowercase for better matching
                    const moodLower = selectedMood.toLowerCase();
                    const titleLower = adventureTitle.toLowerCase();

                    // Iterate through all keyword mappings
                    Object.entries(keywordMappings).forEach(([category, data]) => {
                        const { keywords, searchTerms, moods } = data;

                        // Check if the selected mood matches any mood in this category
                        const moodMatch = moods.some(mood => mood.toLowerCase() === moodLower);

                        // Check if any keywords from this category appear in the adventure title
                        const keywordMatch = keywords.some(keyword =>
                            titleLower.includes(keyword.toLowerCase())
                        );

                        // If either mood or keyword matches, include the search terms
                        if (moodMatch || keywordMatch) {
                            matchedCategories.push(category);
                            relevantSearchTerms.push(...searchTerms);
                        }
                    });

                    // Remove duplicates and return unique search terms
                    const uniqueSearchTerms = [...new Set(relevantSearchTerms)];

                    return {
                        searchTerms: uniqueSearchTerms,
                        matchedCategories: matchedCategories,
                        totalMatches: uniqueSearchTerms.length
                    };
                }

                // Usage before your performOptimizedSearch call:
                // Assuming you have selectedMood and adventureTitle variables
                const selectedMood = currentMood?.id || ""; // Use the actual selected mood id
                const adventureTitle = selectedAdventure?.title || ""; // Use the actual adventure title

                // Extract search terms based on mappings
                const extractedSearchInfo = getSearchTermsFromMappings(selectedMood, adventureTitle, keywordMappings);

                console.log("Extracted search terms:", extractedSearchInfo.searchTerms);
                console.log("Matched categories:", extractedSearchInfo.matchedCategories);
                console.log("Total search terms found:", extractedSearchInfo.totalMatches);

                // Combine the extracted search terms with your existing keywords
                const enhancedKeywords = [
                    // ...smartSearchResult.keywords,
                    ...extractedSearchInfo.searchTerms
                ];

                console.log("Enhanced keywords for search:", enhancedKeywords);

                // Now perform the optimized search with enhanced keywords
                searchResults = await performOptimizedSearch(
                    enhancedKeywords, // Use enhanced keywords instead of just smartSearchResult.keywords
                    city,
                    state,
                    smartSearchResult.searchType
                );
                console.log("API search results:", searchResults, "results found");

                // searchResults = await performOptimizedSearch(
                //     smartSearchResult.keywords,
                //     city,
                //     state,
                //     smartSearchResult.searchType
                // );
                console.log("API search results:", searchResults, "results found");
            } else {
                console.log("No API search needed - using existing results");
                searchResults = smartSearchResult.results || [];
            }

            // Step 7: Process and save results
            if (searchResults?.length > 0 && currentMood?.id && selectedAdventure?.title) {
                // Filter out invalid results
                const validResults = searchResults.filter(result =>
                    result.address &&
                    result.address.trim() !== '' &&
                    !result.address.toLowerCase().includes('no address found') &&
                    !result.isStatic
                );

                if (validResults.length > 0) {
                    // Update local state
                    updateAdventureData(selectedAdventure, searchResults, city, state);

                    // Save to database (async, non-blocking)
                    saveLocationDataToDatabase(
                        currentMood.id,
                        selectedAdventure.title,
                        city,
                        state,
                        validResults
                    ).catch(error => console.error("Database save error:", error));

                    console.log(`Saved ${validResults.length} valid results to database`);
                } else if (searchResults.some(result => result.isStatic)) {
                    updateAdventureData(selectedAdventure, searchResults, city, state);
                    console.log("Updated UI with static/mixed results");
                } else {
                    console.log("No valid results with proper addresses found");
                }
            }

            setShowSearchResult(true);
            console.log("final search results: drwerwerewr", {
                results: searchResults,
                searchType: smartSearchResult.searchType,
                keywords: smartSearchResult.keywords,
                message: smartSearchResult.message || `Found ${searchResults.length} results`
            });
            return {
                results: searchResults,
                searchType: smartSearchResult.searchType,
                keywords: smartSearchResult.keywords,
                message: smartSearchResult.message || `Found ${searchResults.length} results`
            };

        } catch (error) {
            console.error("Error in enhanced handleSearch:", error);
            setShowSearchResult(true);
            return {
                results: [],
                searchType: 'outdoor',
                message: "Search failed. Please try again.",
                error: true
            };
        }
    };

    const performOptimizedSearch = async (searchQuery, city, state, searchType) => {
        const apiKey = "20fdf466350e4924abc2708b462ed0fc";

        // Single API call with best query
        const query = `${searchQuery} ${city}`;
        console.log("API Search query:", query);

        // try {
        //     const response = await fetch(
        //         `https://api.opencagedata.com/geocode/v1/json?` +
        //         `q=${encodeURIComponent(query)}` +
        //         `&key=${apiKey}` +
        //         `&limit=5` +
        //         `&countrycode=in` +
        //         `&language=en`
        //     );

        //     if (!response.ok) {
        //         throw new Error(`API request failed: ${response.status}`);
        //     }

        //     const data = await response.json();
        //     console.log(`API Results:`, data.results?.length || 0);

        //     if (!data.results?.length) {
        //         return [];
        //     }

        //     // Filter and process results in one go
        //     const cityLower = city.toLowerCase();
        //     return data.results

        //         .map(result => ({
        //             address: result.formatted,
        //             gettingThere: generateSimpleGettingThere(result.components),
        //             parking: generateSimpleParking(result.components),
        //             category: searchType || 'general',
        //             coordinates: {
        //                 lat: result.geometry.lat,
        //                 lng: result.geometry.lng
        //             },
        //             confidence: result.confidence,
        //             searchType: searchType
        //         }));

        // } catch (error) {
        //     console.error(`API Search error:`, error);
        //     return [];
        // }
    };

    const handleSmartSearch = async (selectedMood, selectedAdventure, city, state, keywordMappings, moodCategoryMappings) => {
        try {
            // Generate smart keywords with indoor/outdoor detection
            const keywordResult = generateSmartKeywords(selectedMood, selectedAdventure, keywordMappings, moodCategoryMappings);
            console.log("final search result:drwerwerewr", keywordResult);

            // Handle indoor adventures with static results
            if (keywordResult.searchType === 'indoor' && keywordResult.staticResults?.length > 0) {
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

            // For outdoor/mixed adventures, just return the search strategy
            if (keywordResult.shouldSearch && keywordResult.keywords) {
                console.log("Returning search strategy for outdoor location search");
                return {
                    results: [], // Empty - will be filled by handleSearch
                    searchType: keywordResult.searchType,
                    keywords: keywordResult.keywords,
                    shouldSearch: true,
                    message: `Ready to search for ${keywordResult.searchType} locations`
                };
            }

            // Fallback case
            return {
                results: keywordResult.staticResults || [],
                searchType: keywordResult.searchType || 'mixed',
                keywords: keywordResult.keywords,
                message: "No specific locations found. Consider the suggested indoor activities or try a different adventure."
            };

        } catch (error) {
            console.error("Smart search failed:", error);
            return {
                results: [],
                searchType: 'outdoor',
                keywords: null,
                message: "Search failed. Please try again or check your internet connection.",
                error: true
            };
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
    const updateAdventureData = (adventure, locationResults, city, state) => {
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



    // Simplified helper functions
    const generateSimpleGettingThere = (components) => {
        if (!components) return "Check local transport for directions";

        const road = components.road;
        const area = components.suburb || components.neighbourhood;

        if (road && area) {
            return `Located on ${road} in ${area}. Use local transport or private vehicle.`;
        } else if (road) {
            return `Located on ${road}. Accessible by local transport.`;
        } else if (area) {
            return `Located in ${area}. Check local transport options.`;
        }

        return "Check local transport apps for directions";
    };

    const generateSimpleParking = (components) => {
        if (!components) return "Street parking usually available";

        if (components.amenity === 'restaurant' || components.amenity === 'cafe') {
            return "Restaurant/cafe parking available";
        }
        if (components.tourism || components.leisure) {
            return "Tourist area - limited parking, arrive early";
        }

        return "Street parking typically available";
    };


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
                                    onClick={() => { setShowAdventureDetail(false); setShowSearchResult(false) }}
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
                                                    value={searchKeywords.join(',')}
                                                    readOnly
                                                    placeholder="Keywords will appear here based on your selection..."
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                                                    title="Auto-generated keywords based on your mood and selected adventure"
                                                />
                                            </div>
                                            <button
                                                onClick={() => {
                                                    handleSearch(searchKeywords.join(','))
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
                                        {Array.isArray(searchKeywords) && (
                                            <div className="mt-3">
                                                <p className="text-xs text-gray-500 mb-2">Generated keywords:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {searchKeywords.length > 0 &&
                                                        searchKeywords.map((keyword, index) => (
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
                                {showSearchResult && selectedAdventure.locationAndDirection && Array.isArray(selectedAdventure.locationAndDirection) && selectedAdventure.locationAndDirection.length > 0 && (
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
                                onClick={() => { setShowMoodMenu(false); setShowSearchResult(false) }}
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