```markdown
# Playwright API Automation Framework

A professional API automation framework built using **Playwright** for automated testing of REST APIs (GET, POST, PUT, DELETE) with clean, scalable, and maintainable folder structure.

## 🧱 Project Structure

```

project-root/
│
├── tests/
│   ├── api/
│   │   ├── get.spec.js       # GET API tests
│   │   ├── post.spec.js      # POST API tests
│   │   ├── put.spec.js       # PUT API tests
│   │   └── delete.spec.js    # DELETE API tests
│   │
│   └── ui/
│       ├── login.spec.js     # UI login tests (placeholder)
│       ├── dashboard.spec.js # UI dashboard tests (placeholder)
│
├── data/
│   └── testData.json         # Test data for API requests
│
├── utils/
│   ├── apiHelper.js          # Reusable API functions
│   └── reportHelper.js       # Custom logging/report functions
│
├── playwright.config.js      # Playwright global configuration
├── package.json              # Node.js project dependencies
└── README.md                 # Project documentation

````

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourname/playwright-api-automation.git
cd playwright-api-automation
```

2. **Install dependencies**

```bash
npm install
```

3. **Install Playwright browsers (if using UI tests)**

```bash
npx playwright install
```

## 🧪 Run Tests

* Run all tests:

```bash
npx playwright test
```

* Run specific test file:

```bash
npx playwright test tests/api/post.spec.js
```

* Generate HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

## 📦 Folder & File Descriptions

| Folder/File             | Purpose                                                         |
| ----------------------- | --------------------------------------------------------------- |
| `tests/api`             | Contains all API automation test cases (GET, POST, PUT, DELETE) |
| `tests/ui`              | Placeholder for UI automation test cases                        |
| `data/testData.json`    | Contains test data (request payloads)                           |
| `utils/apiHelper.js`    | Reusable API request functions                                  |
| `utils/reportHelper.js` | Logging and custom report functions                             |
| `playwright.config.js`  | Global Playwright configuration                                 |
| `package.json`          | Project dependencies and scripts                                |
| `README.md`             | Project documentation                                           |


## 💡 Best Practices

* Use `.env` for sensitive data like tokens, usernames, passwords
* Keep API endpoints & test data in `utils` and `data` folders
* Maintain separate spec files for each HTTP method
* Use `beforeAll` for shared context to optimize test execution
* Integrate CI/CD for automated test runs and reporting


## 📌 Notes

* This framework is scalable, maintainable, and ready for both API and UI automation
* Supports integration with CI/CD pipelines and report generation
* Ideal for professional automation testing projects

