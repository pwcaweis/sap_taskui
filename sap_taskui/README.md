# sap_taskui

## Overview
This project is a SAPUI5 application designed for managing user input through a Task-UI interface. It includes fields for Firstname and Lastname, and is structured for deployment in a Cloud Foundry environment.

## Project Structure
The project follows a standard SAPUI5 application structure:

```
sap_taskui
├── webapp
│   ├── controller
│   │   └── App.controller.js
│   ├── view
│   │   └── App.view.xml
│   ├── i18n
│   │   └── i18n.properties
│   ├── model
│   │   └── models.js
│   ├── Component.js
│   ├── index.html
│   └── manifest.json
├── xs-app.json
├── mta.yaml
├── package.json
└── README.md
```

## Setup Instructions
1. **Clone the repository**: 
   ```
   git clone <repository-url>
   cd sap_taskui
   ```

2. **Install dependencies**: 
   ```
   npm install
   ```

3. **Run the application locally**: 
   Use the SAP Web IDE or any local server setup to run the application.

4. **Deploy to Cloud Foundry**: 
   Ensure you have the Cloud Foundry CLI installed and configured. Use the following command to deploy:
   ```
   cf push
   ```

## Usage
- Open the application in your browser.
- Enter the Firstname and Lastname in the respective fields.
- Click the submit button to process the input.

## Dependencies
This project requires the SAPUI5 library and other npm packages specified in the `package.json` file.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.