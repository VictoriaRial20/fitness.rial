import { muscleTypes } from "../types";

const {SELECT_MUSCLE, FILTER_MUSCLE} = muscleTypes;

export const selectMuscle = (id) => ({
    type: SELECT_MUSCLE,
    muscleId: id,
});

export const filterMuscle = (id) => ({
    type: FILTER_MUSCLE,
    zoneId: id,
});