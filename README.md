# Appointment Management Application

## Navigus Assignment-2
Build a Calendar Slot Booking service, similar to that of Calendly(https://calendly.com/) , which 
allows people to define their available slots on a day and other people to book them. 
Requirements 
This application can be built on any framework which you are comfortable with and feel is best 
suited for this. 
1. You would need to create both frontend & backend APIs for this application. 
2. Create a basic user registration and authentication system. 
3. Create APIs using which a user can define their available slots for a particular day. Assume 
that each slot is a fixed hourly slot. For example, 12:00-13:00, 13:00-14:00, etc. 
4. Create frontend & APIs using which a user can book an available slot.
5. Show an error page when an unauthenticated user is trying to access the APIs. 

#### Bonus Points
    ● Should be able to integrate with Google Calendar 
    ● Unit tests 
#### Assignment Submission
    ● Deploy this application on any cloud provider Heroku, Zeit, Runkit, etc. Send us the link to test the application along with a Postman collection documenting all exposed endpoints. 
    ● Git history is paramount important. Upload the source code on Github for us to review. Make sure you follow all the best practices while using git as you would do on any production application. 

#### Important Links:
1. **Live App:**  http://appointment.lcvk.org/ 
2. **GitHub:**  https://github.com/RajaParivesh/AppointmentManager

#### Step to setup and run the project:
1. Clone the project
2. Install yarn or npm in your system
3. In the project root directory run the command (for backend server),  
`yarn install`
4. To start the backend server (Express.js) run the command `yarn start` or `yarn dev`  
5. Inside the client folder again run the command (for the frontend server)
`yarn install`  
6. To start the frontend server (React.js) run the command `yarn start` or `yarn dev`

#### Modules :
1. User Registration System
2. User Login System
3. User Slot Booking
4. User Availability Slot Viewing
5. User Slot Creation
6. User Slot Deletion
      
#### Technologies Used: 
* I have chosen MVC (Model, View, Controller) (Express.js) design pattern to write the backend of the application. 

* The View or the V component of the design is separated from the main app and written in React.js to have maximum flexibility. 

* A token based authorization mechanism, JWT, is used to facilitate encrypted message transfer between the client and server

* I have used TypeORM for the model creation and MySQL for storage of data