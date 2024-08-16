# Node Hello World

This is a simple Node.js app that serves "A Monk in Cloud". It is great for testing simple deployments on Cloud.

## Step 1: Install NodeJS and NPM using nvm

1. **Install Node Version Manager (nvm):**
   ```bash
   sudo su -
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash


Activate nvm:

bash
Copy code
. ~/.nvm/nvm.sh
Use nvm to install the latest version of Node.js:

bash
Copy code
nvm install node
Verify the installation of Node.js and npm:

bash
Copy code
node -v
npm -v
Step 2: Install Git and Clone the Repository from GitHub
Install Git:

bash
Copy code
sudo apt-get update -y
sudo apt-get install git -y
Verify the Git installation:

bash
Copy code
git --version
Clone the repository:

bash
Copy code
git clone https://github.com/yeshwanthlm/nodejs-on-ec2.git
Navigate to the project directory and install dependencies:

bash
Copy code
cd nodejs-on-ec2
npm install
Step 3: Start the Application
To start the application, run:

bash
Copy code
npm start
Your Node.js application should now be running and accessible. Enjoy!

csharp
Copy code

You can copy and paste this content into your `README.md` file.





