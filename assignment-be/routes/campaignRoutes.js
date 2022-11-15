import express from 'express';
import { getAllCampaigns, deleteCampaign } from "../controllers/campaignController.js";

const router = express.Router();

router.route('/').get(getAllCampaigns);
router.route('/:id').delete(deleteCampaign);

export default router;