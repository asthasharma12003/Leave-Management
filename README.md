A web-based application designed to streamline the process of requesting, approving, and managing duty leaves for students participating in technical, co-curricular, and sports events. Built using the MERN stack, this system provides an efficient way to maintain records and send automated alerts for certificate submissions.

Features
Student Leave Requests: Students can request duty leave for specific events.
Event Tracking: Comprehensive record-keeping of student participation in various events.
Automated Alerts: Notifications for students to upload participation certificates.
Faculty Approval System: Faculty members can review and approve/reject student leave requests.
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Other Tools: Axios, Mongoose, JSON Web Tokens (JWT)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/asthasharma12003/Duty-Leave-Management.git  
Navigate to the project directory:

bash
Copy code
cd Duty-Leave-Management  
Install dependencies for both frontend and backend:

bash
Copy code
cd client  
npm install  
cd ../server  
npm install  
Configure environment variables:

Create a .env file in the server directory with the following details:
env
Copy code
PORT=5000  
MONGO_URI=<Your MongoDB URI>  
JWT_SECRET=<Your Secret Key>  
Start the application:

Run the backend:
bash
Copy code
cd backend  
npm  run start  
Run the frontend:
bash
Copy code
cd frontend  
npm run dev  
Usage
Students can log in, submit leave requests, and upload participation certificates.
Faculty can view, approve, or reject student requests.
Admin dashboard (if applicable) to manage system-wide configurations.
Screenshots
Add screenshots of key application features here.
Contributions
Contributions are welcome! Please fork the repository and create a pull request for any feature suggestions or bug fixes.

License
This project is licensed under the MIT License.
