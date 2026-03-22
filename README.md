# 🚀 UI + API Automation Framework (Playwright)

This project demonstrates a robust automation framework combining **UI and API testing** using Playwright with best practices like **Page Object Model, Fixtures, and CI/CD integration**.

---

## 📌 Project Overview

This framework automates:

### 🔹 UI Automation
- Navigate to DemoQA Book Store
- Search for a book
- Validate search results
- Extract book details (Title, Author, Publisher)

### 🔹 API Automation
Using: https://reqres.in/

- Create a user
- Validate response status
- Fetch created user details
- Update user information

---

## 🧱 Tech Stack

- **Playwright (TypeScript)**
- **Node.js**
- **GitHub Actions (CI/CD)**
- **Page Object Model (POM)**
- **Custom Fixtures**

---
## 📁 Project Structure
# 🚀 UI + API Automation Framework (Playwright)

This project demonstrates a robust automation framework combining **UI and API testing** using Playwright with best practices like **Page Object Model, Fixtures, and CI/CD integration**.

---

## 📌 Project Overview

This framework automates:

### 🔹 UI Automation
- Navigate to DemoQA Book Store using: https://demoqa.com/
- Search for a book
- Validate search results
- Extract book details (Title, Author, Publisher)

### 🔹 API Automation
Using: https://reqres.in/

- Create a user
- Validate response status
- Fetch created user details
- Update user information

---

## 🧱 Tech Stack

- **Playwright (TypeScript)**
- **Node.js**
- **GitHub Actions (CI/CD)**
- **Page Object Model (POM)**
- **Custom Fixtures**

---

## 📁 Project Structure
project-root/
│
├── tests/
│ ├── api/
│ │ └── userApi.spec.ts
│ │
│ ├── ui/
│ │ └── bookstore.spec.ts
│ │
│ └── fixtures/
│ └── TestFixture.ts
│
├── src/
│ ├── api/
│ │ └── clients/
│ │ └── userClient.ts
│ │
│ ├── pages/
│ │ └── bookstorePage.ts
│ │
│ └── data/
│ └── TestData.ts
│
├── playwright.config.ts
├── package.json
└── .github/workflows/playwright.yml


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/dmk748/UI_Api_Assignment.git
cd UI_Api_Assignment
2️⃣ Install Dependencies
npm install
3️⃣ Install Playwright Browsers
npx playwright install
▶️ Run Tests
Run All Tests
npx playwright test
Run UI Tests Only
npx playwright test tests/ui
Run API Tests Only
npx playwright test tests/api
Run in Headed Mode
npx playwright test --headed
📊 Test Reports

After execution:

npx playwright show-report
🔐 Environment Variables

If required, create .env file:

BASE_URL=https://reqres.in/api
🔄 CI/CD Integration

This project uses GitHub Actions.

Workflow Features:
Runs on every push & pull request
Executes Playwright tests
Uploads test reports as artifacts

Workflow file: .github/workflows/playwright.yml



