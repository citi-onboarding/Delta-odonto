const keystone = require('keystone');

const { Types } = keystone.Field;

const WhoWeAre = new keystone.List('WhoWeAre');

WhoWeAre.add({
  description: {
    type: Types.Text,
    required: true,
    initial: true,
  },
  image: {
    type: Types.CloudinaryImages,
    required: true,
    initial: true,
  },
});

WhoWeAre.register();