import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors/Colors";
import CircularProgressBar from "./CircularProgressBar";

const height = 100;
const width = 250;

type MatchPercentProps = {
  percent: number
}

const MatchPercent= (props : MatchPercentProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle} >IDENTIFICATION POLITIQUE</Text>
      <View style={styles.matchesContainer}>
        <View style={styles.matchPercentContainer}>
          <CircularProgressBar 
            positionX={width}
            positionY={height}
            bg_stroke_color={Colors.BACKGROUND_STROKE_COLOR}
            bg_fill_color={Colors.white}
            stroke_color={Colors.STROKE_COLOR}
            percent={props.percent}
          />
        </View>
        <View >
          <Text style={styles.matchPercentText}>Votes</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: '#fff',
    height,
    width,
    paddingHorizontal:  10,
  }, 
  textTitle: {
    color: Colors.blackLight,
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    padding: 10,
  },
  matchesContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingRight : 25,
  },
  matchPercentContainer: {
    flex: 1,
    height: 50

  },
  matchPercentText: {
    color: Colors.blackLight,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  }
});

export default MatchPercent;