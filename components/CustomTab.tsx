import { View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BottomTabBarProps} from '@react-navigation/bottom-tabs';
import { colors, spacingY } from '@/constants/theme';
import { verticalScale } from '@/utils/styling';
import {HouseIcon ,CricketIcon , ChartBarIcon , UserIcon} from 'phosphor-react-native';


export default function CustomTab({ state, descriptors, navigation }: BottomTabBarProps) {

  const tabbarIcons: any = {
    index: (isFocused: boolean) => (
      <HouseIcon
        size={verticalScale(30)}
        color={isFocused ? colors.secondary : colors.primary300}
      />
    ),
    practice: (isFocused: boolean) => (
      <CricketIcon
        size={verticalScale(30)}
        color={isFocused ? colors.secondary : colors.primary300}
      />
    ),
    analytics: (isFocused: boolean) => (
      <ChartBarIcon
        size={verticalScale(30)}
        color={isFocused ? colors.secondary : colors.primary300}
      />
    ),
    profile: (isFocused: boolean) => (
      <UserIcon
        size={verticalScale(30)}
        color={isFocused ? colors.secondary : colors.primary300}
      />
    ),
  }

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label : any =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
          >
            {
              tabbarIcons[route.name] && tabbarIcons[route.name](isFocused)
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS == 'ios' ? verticalScale(73) : verticalScale(70),
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: colors.primary100,
    borderTopWidth: 2
  },
  tabbarItem: {
    marginBottom: Platform.OS == 'ios' ? spacingY._10 : spacingY._5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})