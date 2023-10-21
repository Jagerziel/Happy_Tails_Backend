# Description
Happy Tails is a mobile application built to put all your pet's medical information in your hands. Through it's intuitive design, users can easily maintain a profile of their pets, track vaccination history, and schedule appointments.

`Local Host Port: 4000`

## Github Repository Links
- Frontend Repo: https://github.com/Jagerziel/Happy_Tails_Frontend
- Backend Repo: https://github.com/Jagerziel/Happy_Tails_Backend

## The Approach to Building Happy Tails

### Design

Working closely with a UX/UI designer, we meticulously constructed Happy Tails to be responsive on both IOS and Android, utilizing react-native expo.  For a full walkthrough of the design process, please visit: `LINK COMING SOON`

### Colloaboration

Weekly meetings, KPI's, and close communication allowed for staging clear and obtainable goals, prioritization of features, and workload management.  A critical piece of the design was clear communication between the UXUI Designer and Software Engineers to understand what is needed within the mongodb models.

## Technical Notes

The Happy Tails backend was constructed using Mongo DB.  The following were key in our approach:

### Models

The following Models were constructed for use on the frontend:
 - **User**: This model includes both the user information along with the user's emergency contact information.  A separate model was not used for emergency contact since the limit is 1.
 - **Pet**: The pet model contains the details for each individual pet.  It is then mapped to a specific user.
 - **Appointment**: This model contains appointment details for a pet.  It is mapped to the Pet model.
 - **Vaccination**: Vaccination details are stored in this model.  It is mapped to the Pet.

## Dependencies

 - cors
 - dotenv
 - express
 - firebase-admin
 - mongodb
 - mongoose
 - morgan
 - nodemon

## Future Features
 - Firebase Admin


# Development Team

### Ryan Ehrlich - Software Developer

**LinkedIn:** https://www.linkedin.com/in/ryanehrlich/

**Portfolio:** https://ryanehrlich.me/

**GitHub:** https://github.com/Jagerziel

### Anna Druzhinina

**LinkedIn**: https://www.linkedin.com/in/anna-druzhinina/

**Portfolio:** https://anna.rcbd.org/

**GitHub**: https://github.com/annadruzhinina

# Design Team

### Ksenia Hardy - UX/UI Designer

**LinkedIn:** https://www.linkedin.com/in/kseniahardy

**Portfolio:** https://www.kseniahardy.com/


