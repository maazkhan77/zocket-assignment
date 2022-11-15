import { CAMPAIGN_LIST_FAIL, CAMPAIGN_LIST_REQUEST, CAMPAIGN_LIST_SUCCESS } from "../constants/campaignConstants";


export const campaignListReducer = (state = { campaigns: [] }, action) => {
    switch (action.type) {
        case CAMPAIGN_LIST_REQUEST:
            return { loading: true, campaigns: [] };
        case CAMPAIGN_LIST_SUCCESS: 
            return { loading: false, campaigns: action.payload };
        case CAMPAIGN_LIST_FAIL: 
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
