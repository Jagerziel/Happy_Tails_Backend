# Description
`"Happy Tails"` is a dedicated veterinary application designed for the local single vet office. This user-friendly app seamlessly integrates modern technology with personalized pet care, offering a range of features to enhance the overall veterinary experience.

**Centralized Medical Records:** Keep all your pet's medical information in one secure place. Happy Tails allows you to effortlessly store vital medical data, including vaccination records and medications. This feature ensures that your pet's health history is easily retrievable whenever needed.

**Online Appointment Booking:** With Happy Tails, booking appointments is a breeze. The intuitive interface allows pet owners to schedule veterinary appointments conveniently from their smartphones. Choose the date and time that suits you best, and receive near-instant confirmation, streamlining the process for both pet owners and the veterinary office.

**Vaccination Reminders:** Automatically receive vaccination reminders from the clinic to ensure your pet stays on track with their prescribed treatments. Never miss a dose and keep your furry friend in optimal health with timely notifications.

**Emergency Information:** Store emergency contact details, veterinary clinic information, and relevant medical information in one easily accessible place.
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
 - **User**: This model includes both the user information along with the user's emergency contact information.  A separate model was not used for emergency contact since the limit is 1.  The controller for this model also allows for checks of existing emails associated with the user to ensure this field is unique and duplicate accounts are not created.
 - **Pet**: The pet model contains the details for each individual pet.  It is then mapped to a `user_id`.  
 - **Appointment**: This model contains appointment details for a pet.  The model includes both the `pet_id` and the `user_id`, allowing the information to be pulled from either id.  The same allows for deletion of all records under either id.
 - **Vaccination**: Vaccination details are stored in this model.  The model includes both the `pet_id` and the `user_id`, allowing the information to be pulled from either id. The same allows for deletion of all records under either id.

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


