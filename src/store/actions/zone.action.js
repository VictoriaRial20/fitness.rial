import { zoneTypes } from "../types/index";

const { SELECT_ZONE } = zoneTypes;

export const selectZone = (id) => ({
    type: SELECT_ZONE,
    zoneId: id,
});