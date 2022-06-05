const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ExSchema = new Schema({

    name: {type: String, default: ''},

    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    });

module.exports = mongoose.model('Client', ExSchema);
