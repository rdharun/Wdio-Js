
# WebDriverIO Javascript Project

This project demonstrates a WebDriverIO setup using Javscript, Page Object Model (POM) design, Allure report integration for mobile Android automation.

## Prerequisites

- Node.js and npm installed.
- WebDriverIO and Javascript configured.
- Install Appium desktop
- Install Android studio
- Setup Emulator


## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rdharun/Wdio-Js.git

2. **Executing on Mobile Emulator/Device**
   - To run a single test case, update the relative path in the npm script for the android command. For example: 
    "android": "PLATFORM=ANDROID npx wdio run wdio.conf.js --spec test/specs/your-single-test-case-file.ts",
   - Run the updated script using:
    ```base 
          npm run android
    ```


## Allure Report Integration
- Once the test case has been executed, view the Allure results by running:


   ```
   allure serve
- This command will serve the Allure report locally, and you can access it by visiting the provided URL in your browser.



