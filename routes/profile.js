const express = require('express');
const router = express.Router();
const Profile = require('../models/userProfile')

router.get('/profile', (req, res, next)=> {
    res.render('user-dashboard/profile')
});

router.post('/profile-save', (req, res, next)=> {
    const formData = req.body
    const profile = new Profile ({
        name: formData.name,
        surname: formData.surname,
        phoneNumber: formData.phoneNumber,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        postal: formData.postal,
        state: formData.state,
        area: formData.area,
        emailID: formData.emailID,
        education: formData.education,
        country: formData.country,
        region: formData.region


    });
    profile.save()
    .then(savedProfile => {
        console.log('Profile Saved: ', savedProfile);
        res.redirect('/profile'); // Redirect to the appropriate URL
    })
    .catch(err => {
        console.log(err, 'Error! Profile not saved');
        res.send('Error! Profile not saved'); // Send an error response
    });
});






module.exports = router;