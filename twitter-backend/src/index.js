const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

mongoose.connect("", {
    auth: {
        username: "",
        password: ""
    },
    useUnifiedTopology: true,
    retryWrites: false
}).then(() => {

}).catch((error) => {
    console.error(error);
})
