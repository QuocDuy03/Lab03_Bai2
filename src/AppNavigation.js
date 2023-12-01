import MainScreen from './MainScreen';
import AddNoteScreen from './clients/AddNoteScreen';
import EditNoteScreen from './clients/EditNoteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useAppStyle from './styles';
const Stack = createStackNavigator();

export default function AppNavigation() {
    const styles = useAppStyle();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerStyle: styles.headerStackContainer,
            headerTintColor: styles.headerStackText.color,
        }}>
                <Stack.Screen name='MainScreen' component={MainScreen}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen name='AddNoteScreen' component={AddNoteScreen} />
                <Stack.Screen name='EditNoteScreen' component={EditNoteScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}