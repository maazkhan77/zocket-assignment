import axios from 'axios';
import { CAMPAIGN_LIST_FAIL, CAMPAIGN_LIST_REQUEST, CAMPAIGN_LIST_SUCCESS } from '../constants/campaignConstants';


export const listCampaign = () => async (dispatch) => {
    try {
        dispatch({ type: CAMPAIGN_LIST_REQUEST });

        const { data } = await axios.get('/api/campaigns');

        dispatch({ type: CAMPAIGN_LIST_SUCCESS, payload: data });
    } catch (err) {
        dispatch({ 
            type: CAMPAIGN_LIST_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message,
        });
    }
};