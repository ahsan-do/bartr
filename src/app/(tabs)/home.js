import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    StatusBar,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../../components/Card';
import {SafeAreaView} from 'react-native-safe-area-context';
// Sample data
const data = [
    {
        id: '1',
        user: {
            name: 'Sarah',
            avatar: require('../../assets/images/sarah.png'),
            distance: '8 km',
            status: 'Pending Response',
        },
        item: {
            title: 'Vintage Bike',
            additionalItems: '+ 4 others',
            image: require('../../assets/images/image.png'),
        },
    },
    {
        id: '2',
        user: {
            name: 'Mia',
            avatar: require('../../assets/images/mia.png'),
            distance: '8 km',
            status: 'New',
        },
        item: {
            title: 'Vegetables',
            additionalItems: '+ 4 others',
            image: require('../../assets/images/image2.png'),
        },
    },
    {
        id: '3',
        user: {
            name: 'Jake',
            avatar: require('../../assets/images/jake.png'),
            distance: '8 km',
            status: 'New',
        },
        item: {
            title: 'Vegetables',
            additionalItems: '+ 4 others',
            image: require('../../assets/images/image3.png'),
        },
    },
];

const Home = () => {
    const renderItem = ({ item }) => <Card item={item} />;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>bartr</Text>
                <TouchableOpacity style={styles.micButton}>
                    <Ionicons name="mic-outline" size={20} color="#666" />
                </TouchableOpacity>
            </View>



            {/* Cards List */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/need.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/clipboard.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/icons/user.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: '400',
        color: '#000',
        fontFamily:'Borel',
    },
    micButton: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    searchContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    searchInput: {
        backgroundColor: '#f8f9fa',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        fontSize: 16,
        color: '#333',
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
    },
    navIcons:{
        width: 20,
        height: 20,
    },
    navItem: {
        padding: 8,
    },
});

export default Home;