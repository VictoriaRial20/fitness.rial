import { StyleSheet } from "react-native";
import {colors} from '../../constants';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  }
});