import asyncHandler from "express-async-handler"
import Campaign from "../models/campaignModel.js"

/**
 * @desc        Fetch all campaign
 * @route       Get /api/campaign
 * @access      public
 */
const getAllCampaigns = asyncHandler(async (req, res) => {
    const campaigns = await Campaign.find({});
        res.json(campaigns);
})

/**
 * @desc		Delete a campaign
 * @route		DELETE /api/campaigns/:id
 * @access	    public
 */
 const deleteCampaign = asyncHandler(async (req, res) => {
	const campaign = await Campaign.findById(req.params.id);

	if (campaign) {
		await campaign.remove();
		res.json({ message: 'Campaign removed' });
	} else {
		res.status(404);
		throw new Error('Campaign not found');
	}
});

export {getAllCampaigns, deleteCampaign}