import React, { forwardRef, useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { President_DATA } from '../../constants/data/data';
import { Colors } from '../../constants/colors/Colors';

const items = President_DATA[0].aboutPresident.occupation


type CustomBottomSheetProps = {
  children: React.ReactNode;
};
type Ref = BottomSheet


const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>((props, ref) => {

  //const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  //const [buttonState, setButtonState] = useState(false); // Initialisé à "fermé"



  //const handleClosePrees = () => bottomSheetRef.current?.close();
  //const handleOpenPrees = () => bottomSheetRef.current?.expand();

  /*const handleClosePress = () => {
    bottomSheetRef.current?.close();
    setButtonState(false); // Mettre à jour l'état à "fermé"
  };
  
  const handleOpenPress = () => {
    bottomSheetRef.current?.snapToIndex(1);
    setButtonState(true); // Mettre à jour l'état à "ouvert"
  };


  /*const RenderButton = () => {
    if (buttonState) {
      return <Button title="Fermer" onPress={handleClosePress} />;
    } else {
      return <Button title="Ouvrir" onPress={handleOpenPress} />;
    }
  };*/

  const rennderBackDrop = useCallback((props: any) => {
    return <BottomSheetBackdrop  appearsOnIndex={3} disappearsOnIndex={-1} {...props} />
  }, [])

    return (
        <View style={styles.container}>
            <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={snapPoints}
            backdropComponent={rennderBackDrop}
            enablePanDownToClose={true}
            handleIndicatorStyle={{backgroundColor: Colors.white}}
            

            >
              {/*<View style={styles.contentContainer}>
                <ListOccupationItem {...{items}} />
    </View>*/}
    
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