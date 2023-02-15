import { ZONE } from "../../constants/data/index";
import { zoneTypes } from "../types";

const { SELECT_ZONE } = zoneTypes;

const initialState = {
    zone: ZONE,
    selected: null,
};

const zoneReducer = (state= initialState, action) => {
    //console.warn(state,action);
    switch(action.type) {
        case SELECT_ZONE:
            const indexZone = state.zone.findIndex(
                (zone) => zone.id === action.zoneId
            );
            if (indexZone === -1) return state;

            return{
                ...state,
                selected: state.zone[indexZone],
            };
        default:
            return state;
    }
};

export default zoneReducer;