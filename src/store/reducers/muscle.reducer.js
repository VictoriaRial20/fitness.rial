import { MUSCLE } from "../../constants/data/index";
import { muscleTypes } from "../types";

const {SELECT_MUSCLE, FILTER_MUSCLE} = muscleTypes;

const initialState = {
    muscle: MUSCLE,
    filteredMuscle: [],
    selected:null,
};

const muscleReducer = (state= initialState, action) => {
    switch(action.type){
        case SELECT_MUSCLE:{
            return{
                ...state,
                selected: state.muscle.find(
                    (muscle) =>muscle.id === action.muscleId
                ),
            }
        };
        case FILTER_MUSCLE: {
            return{
                ...state,
                filteredMuscle: state.muscle.filter(
                    (muscle) => muscle.categoryId === action.zoneId
                ),
            }
        };
        default: 
        return state;
    }
};

export default muscleReducer;