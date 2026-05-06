import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function About() {
    return (
        <View>
            <Text>This is About page</Text>
            <Link href="/company">
                <Text style={{ color: 'violet' }}>Go to company page</Text>
            </Link>
        </View>

    );
}