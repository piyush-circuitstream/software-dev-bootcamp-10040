import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Company() {
    return (
        <View>
            <Text>This is Company page</Text>
            <Link href="/research">
                <Text style={{ color: 'violet' }}>Go to research page</Text>
            </Link>
        </View>

    );
}