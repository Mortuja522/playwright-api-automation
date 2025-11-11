# Playwright API Automation Framework

A professional API automation framework built using **Playwright** for automated testing of REST APIs (GET, POST, PUT, DELETE) with clean, scalable, and maintainable folder structure.


## 🧱 Project Structure
project-root/
├── tests/
│   ├── api/
│   │   ├── get.spec.js
│   │   ├── post.spec.js
│   │   ├── put.spec.js
│   │   └── delete.spec.js
│   └── ui/
│       ├── login.spec.js
│       └── dashboard.spec.js
├── data/
│   └── testData.json
├── utils/
│   ├── apiHelper.js
│   └── reportHelper.js
├── playwright.config.js
├── package.json
└── README.md






## ⚙️ Setup Instructions
   
# Install dependencies
```bash npm install #!/bin/bash

# Run all tests
npx playwright test

# Run specific test
npx playwright test tests/api/post.spec.js

# Generate HTML report
npx playwright test --reporter=html
npx playwright show-report

npx playwright test tests/api/post.spec.js

Generate HTML report:
npx playwright test --reporter=html
npx playwright show-report
