import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { listCampaign } from '../actions/campaignActions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const campaignList = useSelector((state) => state.campaignList);
    const {loading, error, campaigns} = campaignList;

    useEffect(()=>{
        dispatch(listCampaign());
    },[])
  return (
    <>
    <div>HomeScreen</div>
    {campaigns && campaigns.map((campaign) => {
        return (
            <>
            <div>{campaign.location}</div>
            </>
        )
    })}
    </>
  )
}

export default HomeScreen