import React, { useMemo } from "react";
import { GenerateTabShapePath } from "../types/types";
import { NUM_TABS, SCALE, SCREEN_HEIGHT, SCREEN_WIDTH, TAB_BAR_HEIGHT } from "../constants/Constants";
import { curveBasis, line } from "d3-shape";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { parse } from "react-native-redash";

const generateTabShapePath: GenerateTabShapePath = (
    position,
    adjustedHeight,
) => {
    const ajustedWidth = SCREEN_WIDTH / NUM_TABS;
    const tabX = ajustedWidth * position

    const lineGenerator = line().curve(curveBasis);
    const tab = lineGenerator([
        [tabX - 100 * SCALE, 0],
        [tabX - (65 + 35) * SCALE, 0],
        [tabX - (50 - 10) * SCALE, -6 * SCALE],
        [tabX - (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
        [tabX + (50 - 15) * SCALE, (adjustedHeight - 14) * SCALE],
        [tabX + (50 - 10) * SCALE, -6 * SCALE],
        [tabX + (65 + 35) * SCALE, 0],
        [tabX + 100 * SCALE, 0],
    ]);

    return `${tab}`;
};

const usePath = () => {
    const insets = useSafeAreaInsets();
    const tHeight = TAB_BAR_HEIGHT + insets.bottom;
    const adjustedHeight = tHeight - insets.bottom;

    const containerPath = useMemo(() => {
        return `M0,0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},0L${SCREEN_WIDTH},${tHeight}L0,${tHeight}L0,0`;
    }, [tHeight]);

    const curvedPaths = useMemo(() =>  {
        return Array.from({length: NUM_TABS}, (_, index) => {
            const tabShapePath = generateTabShapePath(index + 0.5, adjustedHeight);
            return parse(`${tabShapePath}`);
        });
    }, [adjustedHeight]);

    return {containerPath, curvedPaths, tHeight};
};

export default usePath;