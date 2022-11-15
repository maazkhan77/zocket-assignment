import mongoose from 'mongoose';

const campaignSchema = mongoose.Schema(
    {
        budgetTimeline: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        locationType: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
        },
        locationRadius: {
            type: Number,
            required: false,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        }
    },
    { timestamps: true }
);

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;