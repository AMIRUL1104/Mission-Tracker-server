# Mission Tracker Backend API

A personal productivity and progress tracking backend API built with Express.js, TypeScript, and Prisma.

## Live API

**Server Repository:** https://github.com/AMIRUL1104/Mission-Tracker-server  
**Frontend Repository:** https://github.com/AMIRUL1104/Mission-Tracker-client

## Project Overview

Mission Tracker Backend provides a RESTful API for a personal productivity tracking system. It supports user authentication, monthly data organization, and comprehensive progress tracking across tasks, priorities, academics, and custom metrics.

## Key Features

- **User Authentication**: JWT-based authentication with registration, login, and logout
- **Monthly Tracking**: Organize data by month with automatic creation of current month
- **Task Management**: Daily non-negotiable tasks with calendar-based completion tracking
- **Priority System**: Set monthly priorities with milestone tracking and progress calculation
- **Streak Tracking**: Daily consistency metrics with current streak, best streak, and total completed days
- **Academic Tracker**: Subject tracking with chapters and weekly study hours
- **Custom Metrics**: Define personal success metrics with target values and progress tracking
- **Dashboard Overview**: Consolidated endpoint for retrieving all monthly data

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express 5.2.1
- **Language**: TypeScript
- **ORM**: Prisma 7.9.1
- **Database**: PostgreSQL
- **Validation**: Zod 4.4.3
- **Authentication**: JWT, bcrypt
- **CORS**: Enabled with configurable origin

## Project Structure

```
src/
├── app.ts                    # Express application setup
├── server.ts                 # Server entry point
├── lib/
│   └── prisma.ts            # Prisma client singleton
├── middleware/
│   ├── auth.middleware.ts   # JWT authentication
│   ├── error.middleware.ts  # Global error handler
│   └── validate.middleware.ts # Zod validation wrapper
├── modules/                  # Feature modules
│   ├── auth/                # Authentication (register/login/logout)
│   ├── months/              # Month management
│   ├── task/                # Task CRUD and daily checks
│   ├── priorities/          # Priority and milestone management
│   ├── streak/              # Streak statistics
│   ├── academic/            # Academic subjects and chapters
│   ├── metric/              # Success metrics
│   └── overview/            # Dashboard overview aggregation
├── routes/
│   └── index.ts             # Main router combining all modules
└── types/
    └── express.d.ts         # Express type extensions
```

## Database Models

The system uses the following Prisma models:

| Model | Description |
|-------|-------------|
| User | User account with name, email, password, and age |
| Month | Monthly container for user data (year/month) |
| Priority | Monthly priorities with milestones |
| Milestone | Individual goal milestones under priorities |
| Task | Daily non-negotiable tasks |
| DailyCheck | Daily completion records for tasks |
| Streak | Daily consistency tracking by user |
| Academic | Study subjects with chapters and weekly logs |
| AcademicChapter | Chapters under academic subjects |
| AcademicWeek | Weekly hour tracking for subjects |
| SuccessMetric | Custom metrics (e.g., books read, commits) |

## Authentication Flow

1. **Register** `POST /api/auth/register`
   - Required fields: name, email, password
   - Optional fields: age
   - Response includes user data (password excluded)

2. **Login** `POST /api/auth/login`
   - Required: email, password
   - Response: `{ token, user }`

3. **Logout** `POST /api/auth/logout`
   - Requires valid Bearer token
   - Simple session termination

JWT tokens expire after 1 day and include the user ID in the payload.

## API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Error Response Format
```json
{
  "success": false,
  "message": "Error description"
}
```

### Validation Error Format
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "fieldName", "message": "Error message" }
  ]
}
```

### Auth Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login and receive token | No |
| POST | `/auth/logout` | Logout user | Yes |

### Months Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/months` | Get all user months | Yes |
| GET | `/months/find` | Get/create specific month | Yes |
| POST | `/months` | Create new month | Yes |
| DELETE | `/months/:id` | Delete month | Yes |

### Tasks Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/tasks/month/:monthId` | Get tasks for month | Yes |
| POST | `/tasks` | Create new task | Yes |
| DELETE | `/tasks/:id` | Delete task | Yes |
| POST | `/tasks/toggle-check` | Toggle daily completion | Yes |

### Priorities Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/priorities/month/:monthId` | Get priorities with milestones | Yes |
| POST | `/priorities` | Create priority | Yes |
| DELETE | `/priorities/:id` | Delete priority | Yes |
| POST | `/priorities/:priorityId/milestones` | Add milestone | Yes |
| PATCH | `/priorities/milestones/:id` | Toggle milestone | Yes |
| DELETE | `/priorities/milestones/:id` | Delete milestone | Yes |

### Streaks Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/streaks/stats` | Get streak statistics | Yes |

### Academics Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/academics/:monthId` | Get subjects | Yes |
| POST | `/academics` | Create subject | Yes |
| PATCH | `/academics/:id` | Update subject | Yes |
| DELETE | `/academics/:id` | Delete subject | Yes |
| POST | `/academics/:academicId/chapters` | Add chapter | Yes |
| PATCH | `/academics/chapters/:chapterId` | Update chapter | Yes |
| DELETE | `/academics/chapters/:chapterId` | Delete chapter | Yes |
| PATCH | `/academics/:academicId/weeks/:weekId` | Update hours | Yes |

### Metrics Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/metrics/:monthId` | Get metrics | Yes |
| POST | `/metrics` | Create metric | Yes |
| PATCH | `/metrics/:id` | Update metric | Yes |
| DELETE | `/metrics/:id` | Delete metric | Yes |

### Overview Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/overview/:monthId` | Get dashboard data | Yes |

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
CLIENT_URL=http://localhost:3000
```

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `JWT_SECRET` | Secret key for JWT signing (required) |
| `DATABASE_URL` | PostgreSQL connection string (required) |
| `CLIENT_URL` | CORS allowed origin (default: localhost:3000) |

## Local Development Setup

```bash
# Clone the repository
git clone <repo-url>
cd mission-tracker-server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Start development server
npm run dev
```

The server will start at `http://localhost:5000` and reload on file changes.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (tsx watch) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run start` | Start production server |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run Prisma migrations |
| `npm run prisma:studio` | Open Prisma Studio GUI |

## Database Setup

The backend uses PostgreSQL with Prisma ORM. The database connection requires SSL (with `rejectUnauthorized: false` for development).

Run Prisma migrations to set up the database schema:

```bash
npm run prisma:migrate
```

View and edit the schema in `prisma/schema.prisma`.

## HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success (GET, PATCH) |
| 201 | Created (POST) |
| 400 | Bad Request / Validation Error |
| 401 | Unauthorized (missing/invalid token) |
| 404 | Not Found |
| 500 | Internal Server Error |

## License

ISC