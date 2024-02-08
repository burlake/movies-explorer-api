const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  director: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  duration: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  year: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  description: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  image: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
    validate: {
      validator(v) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(v);
      },
      message: 'Поле image обязательно должно быть в URL формате',
    },
  },
  trailerLink: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
    validate: {
      validator(v) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(v);
      },
      message: 'Поле trailerLink обязательно должно быть в URL формате',
    },
  },
  thumbnail: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
    validate: {
      validator(v) {
        return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(v);
      },
      message: 'Поле thumbnail обязательно должно быть в URL формате',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  movieId: {
    type: Number,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  nameRU: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  },
  nameEN: {
    type: String,
    required: {
      value: true,
      message: 'Поле является обязательным',
    },
  }
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model('card', movieSchema);
