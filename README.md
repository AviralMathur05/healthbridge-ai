# 🩺 HealthBridge AI

> **A multi-agent digital community health worker delivering safety-focused AI guidance, medicine information, medical report interpretation, hospital discovery, emergency support, and persistent patient context.**

HealthBridge AI is a full-stack AI healthcare application built for the **Kaggle Agents Capstone Project**.

The platform explores how specialized AI agents, external tools, persistent patient memory, and modern full-stack technologies can be combined to make basic healthcare information easier to understand and access.

HealthBridge AI is designed as an **informational healthcare assistant** and does not replace professional medical diagnosis, treatment, or emergency services.

---

## 🎯 Problem Statement

Healthcare information is often fragmented across multiple platforms.

Users may need separate services to:

- Understand symptoms
- Learn about medicines
- Interpret medical reports
- Find nearby healthcare facilities
- Get guidance during urgent situations
- Maintain reusable patient context

Medical information can also be difficult for non-technical users to understand.

HealthBridge AI addresses this problem through a unified AI healthcare workspace powered by specialized healthcare agents and services.

---

## 💡 Solution

HealthBridge AI provides multiple specialized healthcare workflows through one full-stack web application.

Instead of relying on a single unrestricted AI workflow, the application separates healthcare responsibilities into dedicated agents and services.

```text
                       ┌─────────────────────┐
                       │     HealthBridge     │
                       │      React UI        │
                       └──────────┬──────────┘
                                  │
                                  │ REST API
                                  ▼
                       ┌─────────────────────┐
                       │       FastAPI       │
                       │      Backend API    │
                       └──────────┬──────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
                ▼                 ▼                 ▼
        ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
        │ Specialized  │  │   External   │  │  Persistent  │
        │  AI Agents   │  │    Tools     │  │   Patient    │
        │              │  │              │  │    Memory    │
        └──────┬───────┘  └──────┬───────┘  └──────┬───────┘
               │                 │                 │
               ▼                 ▼                 ▼
        ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
        │ Google ADK   │  │OpenStreetMap │  │ SQLAlchemy   │
        │   Gemini     │  │  Nominatim   │  │   SQLite     │
        └──────────────┘  └──────────────┘  └──────────────┘
```

---

# ✨ Features

## 🩺 Symptom Checker

The Symptom Agent analyzes user-provided symptoms and returns structured, safety-focused guidance.

The workflow provides:

- Possible health concerns
- General risk information
- Self-care guidance
- Information about when to seek professional medical care

The agent is explicitly instructed **not to diagnose the user**.

---

## 💊 Medicine Guide

The Medicine Agent provides understandable information about medicines.

It can explain:

- Common uses
- General precautions
- Common side effects
- Safety considerations

Users are clearly advised not to start, stop, or modify medication based solely on AI-generated information.

---

## 📄 Medical Report Assistant

The Report Agent helps users understand medical report findings and laboratory values.

It converts complex medical information into clearer explanations while encouraging professional medical interpretation when appropriate.

The current deployed workflow supports **text-based medical report input and laboratory values**.

---

## 🏥 Hospital Finder

The Hospital Finder integrates **OpenStreetMap Nominatim** to discover healthcare facilities.

Users can:

- Search by city
- Discover healthcare facilities
- View facility location information
- Continue to maps for navigation and verification

---

## 🚨 Emergency Guidance

The Emergency Guidance workflow provides immediate, safety-focused next-step information for urgent health situations.

The system prioritizes:

- Recognizing potentially serious situations
- Immediate safety actions
- Escalation to emergency services
- Clear warnings not to delay professional emergency care

---

## ❤️ Digital Health Passport

HealthBridge AI includes a persistent patient context layer.

Patient information can be stored and retrieved using a unique patient identifier.

The current patient profile includes:

- Name
- Age
- Gender
- Preferred language
- Patient ID
- Profile creation timestamp

The persistence layer is implemented using **SQLAlchemy and SQLite**.

---

# 🤖 Multi-Agent Architecture

HealthBridge AI uses specialized healthcare AI workflows instead of sending every request through one general-purpose prompt.

```text
                         User
                           │
                           ▼
                  ┌─────────────────┐
                  │ HealthBridge AI │
                  │   Application   │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │   FastAPI API   │
                  └────────┬────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼

   Symptom Agent      Medicine Agent     Report Agent
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
                      Google ADK
                           │
                           ▼
                         Gemini


Additional Services

Hospital Finder ───────► OpenStreetMap Nominatim

Emergency Guidance ───► Safety-Focused AI Workflow

Health Passport ──────► Patient Memory ──────► SQLAlchemy / SQLite
```

This separation allows each workflow to have:

- A specific responsibility
- Specialized prompts
- Healthcare safety instructions
- Independent API routes
- Modular backend services

---

# 🧠 Agent Responsibilities

| Agent / Service | Responsibility |
|---|---|
| Symptom Agent | Provides structured symptom guidance without diagnosis |
| Medicine Agent | Explains medicine information and safety considerations |
| Report Agent | Simplifies medical report findings and laboratory values |
| Emergency Guidance | Provides safety-focused next steps for urgent situations |
| Hospital Finder | Discovers healthcare facilities using external location data |
| Health Passport | Retrieves persistent patient information |

---

# 🔌 MCP Integration Layer

The backend contains an **MCP integration layer** designed to support extensible connections between AI workflows and external tools or services.

This architecture allows HealthBridge AI to evolve beyond direct model interactions and integrate additional healthcare tools through standardized interfaces.

---

# 🛡️ Responsible AI and Safety

Healthcare AI requires clear boundaries.

HealthBridge AI includes safety-focused instructions and visible user-facing disclaimers.

The application:

- Does not present AI-generated responses as medical diagnoses.
- Encourages professional care for severe, persistent, or worsening symptoms.
- Warns users not to change medications solely based on AI-generated information.
- Encourages professional interpretation of medical reports.
- Prioritizes contacting emergency services during potentially life-threatening situations.
- Clearly communicates that AI-generated guidance is informational.
- Separates healthcare responsibilities through specialized workflows.

> **HealthBridge AI is an informational AI assistant and does not replace qualified healthcare professionals, medical diagnosis, treatment, or emergency services.**

---

# 🛠️ Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router
- Lucide React

## Backend

- Python
- FastAPI
- Uvicorn
- Google Agent Development Kit (ADK)
- Gemini
- SQLAlchemy
- SQLite

## External Tools and Services

- OpenStreetMap
- Nominatim API

## DevOps and Deployment

- Docker
- Docker Compose
- Git
- GitHub
- Vercel
- Render

---

# 📂 Project Structure

```text
healthbridge-ai/
│
├── backend/
│   │
│   ├── healthbridge/
│   │   │
│   │   ├── agents/
│   │   │   ├── emergency.py
│   │   │   ├── medicine.py
│   │   │   ├── report.py
│   │   │   └── symptom.py
│   │   │
│   │   ├── database/
│   │   │   ├── database.py
│   │   │   └── models.py
│   │   │
│   │   ├── mcp/
│   │   │
│   │   ├── prompts/
│   │   │
│   │   ├── routes/
│   │   │
│   │   ├── services/
│   │   │   ├── gemini_service.py
│   │   │   ├── hospital_service.py
│   │   │   └── patient_memory.py
│   │   │
│   │   └── agent.py
│   │
│   ├── app.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ai/
│   │   │   ├── dashboard/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Symptom.jsx
│   │   │   ├── Medicine.jsx
│   │   │   ├── Report.jsx
│   │   │   ├── Hospital.jsx
│   │   │   ├── Passport.jsx
│   │   │   └── Emergency.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   └── App.jsx
│   │
│   └── package.json
│
├── docs/
├── docker-compose.yml
├── requirements.txt
└── README.md
```

---

# 🚀 Running the Project Locally

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd healthbridge-ai
```

---

## 2. Configure Environment Variables

Create a `.env` file in the appropriate backend directory.

```env
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

Never commit API keys or secrets to GitHub.

---

## 3. Run the Backend

```bash
cd backend

python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the API:

```bash
uvicorn app:app --reload
```

Backend:

```text
http://localhost:8000
```

Swagger documentation:

```text
http://localhost:8000/docs
```

---

## 4. Run the Frontend

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🐳 Running with Docker

Build and start the application:

```bash
docker compose up --build
```

Stop the containers:

```bash
docker compose down
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API health check |
| `POST` | `/symptom/` | Symptom guidance |
| `POST` | `/medicine/` | Medicine information |
| `POST` | `/report/` | Medical report explanation |
| `POST` | `/emergency/` | Emergency guidance |
| `GET` | `/hospital/{city}` | Hospital discovery |
| `GET` | `/passport/{patient_id}` | Retrieve patient health passport |

---

# 🚀 Deployment Architecture

```text
                       USER
                         │
                         ▼
                 ┌───────────────┐
                 │    Vercel     │
                 │ React Frontend│
                 └───────┬───────┘
                         │
                         │ HTTPS REST API
                         ▼
                 ┌───────────────┐
                 │    Render     │
                 │ FastAPI API   │
                 └───────┬───────┘
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼

          Google ADK   External   Patient
           + Gemini     Tools     Persistence

                         │
                OpenStreetMap
                 Nominatim API
```

---

# 🧩 Challenges and Solutions

## CORS Between Deployed Services

The deployed frontend initially could not communicate with the backend because browser preflight requests were rejected.

The issue was debugged using browser network tools and direct `OPTIONS` requests. The backend CORS configuration was corrected to allow communication between the deployed frontend and API.

## Docker Dependency Compatibility

The backend requirements initially contained a Windows-specific `pywin32` dependency.

Because the Docker container runs Linux, the dependency caused the Docker build to fail.

The production dependency configuration was corrected, allowing the backend image to build successfully.

## Designing Reusable AI Interfaces

Multiple AI services initially used separate basic interfaces.

A reusable `AIWorkspace` component was introduced to provide:

- Consistent request handling
- Loading states
- Error handling
- Example prompts
- AI response presentation
- Service-specific styling
- Healthcare safety notices

## Maintaining Healthcare Safety Boundaries

Healthcare AI responses require careful communication.

Specialized prompts and visible safety notices were added to prevent the application from presenting AI guidance as professional medical diagnosis or treatment.

---

# 🏆 Key Accomplishments

- Built a full-stack AI healthcare application with multiple specialized healthcare workflows.
- Integrated Google ADK and Gemini for AI-powered healthcare assistance.
- Created reusable AI interaction interfaces across multiple services.
- Integrated external healthcare facility discovery.
- Implemented persistent patient context using SQLAlchemy and SQLite.
- Containerized the backend using Docker.
- Deployed the frontend and backend as independently hosted services.
- Debugged production CORS and container dependency issues.
- Added healthcare-focused AI safety instructions and user-facing disclaimers.
- Designed a modular architecture that can support future healthcare agents and tools.

---

# 🔮 Future Improvements

- Secure authentication and authorization
- Encrypted cloud-based patient storage
- Real PDF and medical-image report uploads
- Multilingual healthcare assistance
- Voice-based interaction
- Location-aware hospital discovery
- Improved multi-agent orchestration
- Agent evaluation and observability pipelines
- Integration with verified healthcare data sources
- Stronger privacy controls and consent management

---

# 👨‍💻 Author

**Aviral Mathur**

B.Tech Data Science and Engineering  
Manipal Institute of Technology

---

# ⚠️ Disclaimer

HealthBridge AI is an educational and informational AI project.

It does not provide medical diagnoses, prescriptions, treatment plans, or professional medical advice.

Always consult qualified healthcare professionals for medical concerns.

For life-threatening emergencies, contact local emergency services immediately.

---

## ⭐ Support the Project

If you found HealthBridge AI useful or interesting, consider starring the repository.
