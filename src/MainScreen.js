import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from "./clients/Settings";
import Home from "./clients/Home";
import useAppStyle from "./styles";
import { Text } from "react-native";

const Tabs = createBottomTabNavigator();

export default function MainScreen() {
    const styles = useAppStyle();
    return (
        <Tabs.Navigator screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabLabel,
            headerStyle: styles.headerStackContainer,
            headerTintColor: styles.headerStackText.color,
        }}>
            <Tabs.Screen name='Home' component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home"
                            style={[styles.tabIcon,
                            focused && styles.tabIconActive]} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.tabLabel, focused && styles.tabIconActive]}>
                            Home
                        </Text>
                    )
                }}
            />
            <Tabs.Screen name='Settings' component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name="cog"
                            style={[styles.tabIcon,
                            focused && styles.tabIconActive]} />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.tabLabel, focused && styles.tabIconActive]}>
                            Settings
                        </Text>
                    )
                }}
            />
        </Tabs.Navigator>
    )
}