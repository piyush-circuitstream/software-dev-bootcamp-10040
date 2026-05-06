import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
    return (
        <View>
            <Text>This is the home page</Text>
            <Link href="/about" push>
                <Text style={{ color: 'blue' }}>Go to about page</Text>
            </Link>
            <Link href="/contact" replace>
                <Text style={{ color: 'blue' }}>Go to contact page</Text>
            </Link>
        </View>

    );
}