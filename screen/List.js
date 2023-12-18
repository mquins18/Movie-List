import React from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const Logo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={require('../images/netflix.png')} 
                style={styles.logo}
                resizeMode="contain" 
            />
        </View>
    );
};

const List = () => {
    const navigation = useNavigation();
    const route = useRoute();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerShown: true,
        });
    }, [navigation]);


    const moviesData = [
        {
            id: '1',
            name: 'Inception',
            genre: 'Action',
            image: require('../images/inception.jpg'), 
            year: '2010',
            rating: '8.8/10',
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            review: "Inception is not just a movie; it's a journey into the uncharted territories of the human mind. Directed by the visionary Christopher Nolan, this film is a mind-bending masterpiece that captivates and challenges its audience in ways few movies ever dare."
        },
        {
            id: '2',
            name: 'The Marvels',
            genre: 'Action',
            image: require('../images/marvel.jpg'), 
            year: '2023',
            rating: '6/10',
            description: "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.",
            review: "I’m not going to spoil anything but WOW!!!!Last night I started by seeing The Marvels than went home and watched The Finale of Loki Season 2. Both were top notch."
        },
        {
            id: '3',
            name: 'Home Alone',
            genre: 'Comedy',
            image: require('../images/home.jpg'), 
            rating: '7.7/10',
            description: "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas eve.",
            review: "Why it rocks:The idea of an 8-year - old boy who is mistakenly left home alone by his family and has to protect the house from two bumbling burglars is pretty entertaining.",
        },
        {
            id: '4',
            name: 'Interstellar',
            genre: 'Sci-Fi',
            image: require('../images/interstellar.jpg'), 
            year: '2014',
            rating: '8.7/10',
            description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            review: "Personally, I think Interstellar truly delivers as Christopher Nolan's best masterpiece. Maybe the general population would put this blockbuster seventh place in the category of the 10 best space movies. ",
        },
        {
            id: '5',
            name: 'Barbie',
            genre: 'Adventure',
            image: require('../images/barbie.jpg'), 
            year: '2023',
            rating: '10/10',
            description: "Barbie suffers a crisis that leads her to question her world and her existence.",
            review: "An Unforgettable Delight! Oh, where do I even begin? Barbie 2023 is a tour de force that has left me utterly captivated, enchanted, and spellbound."
        },
        {
            id: '6',
            name: 'Leo',
            genre: 'Crime',
            image: require('../images/leo.jpg'), 
            year: '2023',
            rating: '7.4/10',
            description: "Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.",
            review: "The plot is a rollercoaster of emotions and intrigue. Set against the backdrop of World War II, it follows the journey of a brilliant but enigmatic codebreaker, played masterfully by VIJAY, as he attempts to crack an unbreakable enemy code. ",
        },
        {
            id: '7',
            name: 'Saltburn',
            genre: 'Thriller',
            image: require('../images/saltburn.jpg'), 
            year: '2023',
            rating: '7.5/10',
            description: "A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family's sprawling estate for a summer never to be forgotten.",
            review: "The tone of this was real dark with incredible performances from the entire cast. And yes the score was majestic. Emerald Fennell made another winner with this film and her directing was phenomenal.",
        },
        {
            id: '8',
            name: 'Oppenheimer',
            genre: 'History',
            image: require('../images/oppenheimer.jpg'), 
            year: '2023',
            rating: '9/10',
            description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
            review: "Ita an clever, intelligence and Bold move to stay with your opinion on what you want rather then being a fearful about your work.",
        },
        {
            id: '9',
            name: 'Poor Things',
            genre: 'Romance',
            image: require('../images/poor.jpg'), 
            year: '2023',
            rating: '8.5/10',
            description: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
            review: "Ultimately, though, by moving through life unencumbered by human ego, Bella Baxter offers not only a rewarding two and a half hours of entertainment, but lessons to enthusiastically live by.",
        },
        {
            id: '10',
            name: 'The Shift',
            genre: 'Sci-Fi',
            image: require('../images/shift.jpg'), 
            year: '2023',
            rating: '6.4/10',
            description: "After meeting a mysterious stranger, a man must escape a dystopian world to return to his wife.",
            review: "So intense! The parallels to Job's story were so well written! The twists and turns had me shook! It's so amazing to see how far faith based cinema has come!",
        },
      
    ];
    const navigateToDetailScreen = (item) => {
        navigation.navigate('detail', { movie: item });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToDetailScreen(item)}>
            <View style={styles.movieContainer}>
                <Image source={item.image} style={styles.movieImage} />
                <Text style={styles.movieName}>{item.name}</Text>
                <Text style={styles.movieGenre}>{item.genre}</Text>
                {route.name === 'detail' && (
                    <>
                        <Text style={styles.movieYear}>{item.year}</Text>
                        <Text style={styles.movieDescription}>{item.description}</Text>
                        <Text style={styles.movieReview}>{item.review}</Text>
                    </>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={moviesData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3} 
                ListHeaderComponent={() => (
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Top 10 Favorites</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111', 
    },
    headerContainer: {
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        padding: 16,
        marginLeft: 11,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
       
    },
    logo: {
        width: 40,
        height: 40,
    },
    movieContainer: {
        flex: 1,
        margin: 8,
        alignItems: 'left',
        padding: 15,
    },
    movieImage: {
        width: 100,
        height: 150,
        borderRadius: 8,
    },
    movieName: {
        marginTop: 8,
        fontWeight: 'bold',
        color: '#fff',
    },
    movieGenre: {
        marginTop: 4,
        color: '#ccc', 
    },
});

export default List;
