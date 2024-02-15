import { Loading } from "@/components/loading";
import {
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  JetBrainsMono_600SemiBold,
  JetBrainsMono_700Bold,
  useFonts,
} from "@expo-google-fonts/jetbrains-mono";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Layout() {
  let [fontsLoaded] = useFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <SafeAreaView className="bg-slate-900 flex-1">
        <Slot />
      </SafeAreaView>
    </>
  );
}
