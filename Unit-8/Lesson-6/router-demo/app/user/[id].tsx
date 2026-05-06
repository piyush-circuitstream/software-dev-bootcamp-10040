import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function UserPage() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text style={{ color: 'darkred' }}>This is User page</Text>
            <Text style={{ color: 'darkred' }}>User ID: {id}</Text>
        </View>

    );
}