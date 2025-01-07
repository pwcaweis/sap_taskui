# sap_taskui

This is a simple SAPUI5 Task UI application with fields for Firstname and Lastname.

## Project Structure

- `webapp/`: Contains the SAPUI5 application files.
- `xs-app.json`: Configuration for the Cloud Foundry deployment.
- `mta.yaml`: Multi-target application descriptor for Cloud Foundry.
- `package.json`: Node.js package configuration.

## Running the Application

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the application:

   ```sh
   npm start
   ```

3. Open the application in your browser:
   ```
   http://localhost:8080
   ```

## Deployment

To deploy the application to Cloud Foundry, use the following commands:

1. Build the application:

   ```sh
   npm run build
   ```

2. Deploy the application:
   ```sh
   cf push
   ```
