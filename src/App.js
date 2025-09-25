import {useState} from "react";
import OnboardingScreen from "./screens/OnboardingScreen";
import DashboardScreen from "./screens/DashboardScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('onboarding');
    const changeScreen = (screen) => {
        setCurrentScreen(screen);
    }
    return (
        <div className="font-sans">
            {currentScreen === 'onboarding' && <OnboardingScreen goTo={changeScreen}/>}
            {currentScreen === 'dashboard' && <DashboardScreen goTo={changeScreen}/>}
            {currentScreen === 'analytics' && <AnalyticsScreen goTo={changeScreen}/>}
        </div>
    )
}