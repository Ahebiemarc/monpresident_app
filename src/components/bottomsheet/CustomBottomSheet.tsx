import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, } from '@gorhom/bottom-sheet';
import { President_DATA } from '../../constants/data/data';
import { Colors } from '../../constants/colors/Colors';

const items = President_DATA[0].aboutPresident.occupation


type CustomBottomSheetProps = {
  children: React.ReactNode;
};
type Ref = BottomSheet


const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>((props, ref) => {


  const snapPoints = useMemo(() => ['25%', '40%', '50%', '60%', '70%', '80%', '90%'], []);
  

  const rennderBackDrop = useCallback((props: any) => {
    return <BottomSheetBackdrop  appearsOnIndex={3} disappearsOnIndex={-1} {...props}  style={{flex:1}}/>
  }, [])

    return (
        <View style={styles.container}>
            <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={snapPoints}
            backdropComponent={rennderBackDrop}
            enablePanDownToClose={true}
            handleIndicatorStyle={{backgroundColor: Colors.white,}}
            backgroundStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25,}}
        
            

            >
 
    
              {props.children}

            </BottomSheet>

        </View>
    )
});



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
  });
  
  export default CustomBottomSheet;