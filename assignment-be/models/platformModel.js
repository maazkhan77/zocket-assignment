import mongoose from 'mongoose';

const platformSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        platform: {
            type: String,
            required: true,
        }, 
        desc: {
            type: String,
            required: true,
        }, 
    },
    { timestamps: true }
);

const Platform = mongoose.model('Platform', platformSchema);

export default Platform;