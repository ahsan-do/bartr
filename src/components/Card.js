import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ item }) => {
    const isNew = item.user.status === 'New';
    const isPending = item.user.status === 'Pending Response';

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View style={styles.userInfo}>
                    <Image source={typeof item.user.avatar === 'string'?{ uri: item.user.avatar }: item.user.avatar} style={styles.avatar} />
                    <View style={styles.userDetails}>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={styles.userName}>{item.user.name}</Text>
                        <Text style={styles.distance}>{item.user.distance}</Text>
                        </View>
                        <View style={styles.statusContainer}>
                            <Text style={[
                                styles.statusText,
                                isPending && styles.pendingStatus
                            ]}>
                                {item.user.status}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.headerActions}>
                    <View style={styles.actionIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../assets/icons/chat.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../assets/icons/workflow.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Image source={require('../assets/icons/repeat.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.cardContent}>
                <Image source={typeof item.item.image === 'string'?{ uri: item.item.image }: item.item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                    <Text style={styles.itemTitle}>{item.item.title}</Text>
                    <Text style={styles.additionalItems}>{item.item.additionalItems}</Text>

                    <View style={styles.actionButtons}>
                        <TouchableOpacity style={styles.tradeButton}>
                            <Text style={styles.tradeButtonText}>Trade</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rejectButton}>
                            <Text style={styles.rejectButtonText}>Reject</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.viewDetailsButton}>
                        <Text style={styles.viewDetailsText}>View Details</Text>
                        <Image source={require('../assets/icons/arrow.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 20,
        marginRight: 12,
    },
    userDetails: {
        flex: 1,
    },
    userName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        fontFamily:'Poppins',
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#7B6F72',
        fontFamily:'Poppins',
    },
    pendingStatus: {
        color: '#7B6F72'
    },
    headerActions: {
        alignItems: 'flex-end',
    },
    distance: {
        fontSize: 12,
        color: '#7B6F72',
        fontWeight:400,
        fontFamily:'Poppins',
        marginLeft: 12,
        marginTop:2,
    },
    actionIcons: {
        flexDirection: 'row',
        marginRight:6
    },
    icon:{
        height: 22,
        width: 22,
    },

    iconButton: {
        marginLeft: 12,
        padding: 4,
    },
    cardContent: {
        flexDirection: 'row',
    },
    itemImage: {
        width: 173,
        height: 167,
        borderRadius: 8,
        marginRight: 20,
    },
    itemDetails: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily:'Poppins',
        color: '#333',
    },
    additionalItems: {
        fontSize: 12,
        color: '#666',
        marginBottom: 12,
    },
    actionButtons: {
        flexDirection: 'column',
        marginBottom: 12,
    },
    tradeButton: {
        backgroundColor: '#6081EC',
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    tradeButtonText: {
        color: '#fff',
        fontFamily:'Poppins',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    rejectButton: {
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 20,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#333',
    },
    rejectButtonText: {
        fontFamily:'Poppins',
        color: '#333',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    viewDetailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewDetailsText: {
        fontSize: 12,
        color: '#666',
        marginRight: 4,
    },
});

export default Card;