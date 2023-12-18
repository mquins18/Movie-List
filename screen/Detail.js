import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Detail = ({ route }) => {
    const { movie } = route.params;
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Movie Details',
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

  
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -64}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
            >
                <Image source={movie.image} style={styles.movieImage} />
                <Text style={styles.movieName}>{movie.name}</Text>
                <Text style={styles.movieGenre}>{movie.genre}</Text>
                <Text style={styles.movieYear}>Year Released: {movie.year}</Text>
                <Text style={styles.movieDetails}>Rating: {movie.rating}</Text>
                <Text style={styles.movieDescription}>Description: {movie.description}</Text>
                <Text style={styles.reviewHeaderText}>Review</Text>
                <View style={styles.reviewContainer}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../images/mika.png')}  
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.reviewTextContainer}>
                        <Text style={styles.reviewName} >Mikaela  <Image
                            source={require('../images/star.png')}
                            style={styles.profileImage}
                        /></Text>
                     
                        <Text style={styles.movieReview}>{movie.review}</Text>
                    </View>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
    },
    scrollContainer: {
        alignItems: 'center',
        padding: 16,
    },
    movieImage: {
        width: 200,
        height: 300,
        borderRadius: 8,
        marginBottom: 16,
    },
    movieName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    movieGenre: {
        marginTop: 8,
        color: '#ccc',
    },
    movieDetails: {
        marginTop: 8,
        color: '#fff',
    },
    movieYear: {
        marginTop: 8,
        color: '#fff',
    },
    movieDescription: {
        marginTop: 8,
        color: '#fff',
    },
    reviewName: {
        color: '#fff',
    },
    movieReview: {
        marginTop: 8,
        color: '#fff',
        textAlign: 'justify',
    },
    reviewContainer: {
        flexDirection: 'row',  
        alignItems: 'center',
        marginTop: 0,
        marginLeft:7,
    },
    reviewHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 0,
        marginRight: 325,
        marginTop: 16,
        marginLeft: 2,
    },
    profileContainer: {
        marginRight: 16,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    reviewTextContainer: {
        flex: 1,
        flexDirection: 'column',  
    },
    movieReview: {
        marginTop: 8,
        color: '#fff',
    },
});

export default Detail;
