# Playwright API Automation Framework

A professional API automation framework built using **Playwright** for automated testing of REST APIs (GET, POST, PUT, DELETE) with clean, scalable, and maintainable folder structure.

---

## 🧱 Project Structure

project-root/
│
├── tests/
│ ├── api/
│ │ ├── get.spec.js # GET API tests
│ │ ├── post.spec.js # POST API tests
│ │ ├── put.spec.js # PUT API tests
│ │ └── delete.spec.js # DELETE API tests
│
├── data/
│ └── testData.json # Test data for API requests
│
├── utils/
│ ├── apiHelper.js # Reusable API functions
│ └── reportHelper.js # Custom logging/report functions
│
├── playwright.config.js # Playwright global configuration
├── package.json # Node.js project dependencies
└── README.md # Project documentation

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourname/playwright-api-automation.git
cd playwright-api-automation
Install dependencies

2. **Install dependencies**
npm install
Install Playwright browsers (if using UI tests)

3. **Install Playwright browsers (if using UI tests)**
npx playwright install

🧪 Run Tests
Run all tests:
npx playwright test

Run specific test file:
npx playwright test tests/api/post.spec.js

Generate HTML report:
npx playwright test --reporter=html
npx playwright show-report
