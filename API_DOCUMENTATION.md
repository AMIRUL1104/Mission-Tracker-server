# Mission Tracker API Documentation

## Base URL

```
http://localhost:5000/api
```

The default server runs on port 5000. The port can be overridden via the `PORT` environment variable.

## Authentication

### JWT Authentication Flow

1. **Register** a new user via `POST /api/auth/register`
2. **Login** via `POST /api/auth/login`
3. Store the returned JWT token
4. Include the token in the `Authorization` header for all protected routes

### Sending Bearer Token

```
Authorization: Bearer <your_jwt_token>
```

### Authentication Requirement

Most endpoints require authentication. Protected routes automatically verify the JWT token via the `authMiddleware`.

---

## Error Response Format

### Standard Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

### Validation Error Response
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "fieldName",
      "message": "Validation error message"
    }
  ]
}
```

### Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success (GET, PATCH) |
| 201 | Created (POST) |
| 400 | Bad Request / Validation Error |
| 401 | Unauthorized (missing/invalid token) |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## API Endpoints

### 1. Auth Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register a new user | No |
| POST | `/auth/login` | Login and receive JWT token | No |
| POST | `/auth/logout` | Logout current user | Yes |

#### POST /api/auth/register

Register a new user account.

**Request Body:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| name | string | Yes | Min 2, Max 50 chars |
| email | string | Yes | Valid email format |
| password | string | Yes | Min 6, Max 100 chars |
| age | number | No | Integer 1-150 |

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "uuid",
    "name": "string",
    "email": "string",
    "age": 25
  }
}
```

---

#### POST /api/auth/login

Authenticate user and receive JWT token.

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| email | string | Yes |
| password | string | Yes |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_string",
    "user": {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "age": 25
    }
  }
}
```

**Error Response:** `400` - Invalid email or password

---

#### POST /api/auth/logout

Logout the current user.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

---

### 2. Months Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/months` | Get all months for user | Yes |
| GET | `/months/find` | Get or create specific month | Yes |
| POST | `/months` | Create a new month | Yes |
| DELETE | `/months/:id` | Delete a month | Yes |

#### GET /api/months

Retrieve all months belonging to the authenticated user.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "userId": "uuid",
      "monthKey": "2026-08",
      "year": 2026,
      "month": 8,
      "status": "active",
      "createdAt": "2026-08-15T10:00:00.000Z",
      "updatedAt": "2026-08-15T10:00:00.000Z"
    }
  ]
}
```

---

#### GET /api/months/find

Get an existing month or create a new one if it doesn't exist.

**Auth Required:** Yes (Bearer token)

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| year | number | No | Year (default: current year) |
| month | number | No | Month 1-12 (default: current month) |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "userId": "uuid",
    "monthKey": "2026-08",
    "year": 2026,
    "month": 8,
    "status": "active",
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

#### POST /api/months

Create a new month entry.

**Auth Required:** Yes (Bearer token)

**Request Body:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| year | number | Yes | Integer 2020-2100 |
| month | number | Yes | Integer 1-12 |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "userId": "uuid",
    "monthKey": "2026-08",
    "year": 2026,
    "month": 8,
    "status": "active",
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

#### DELETE /api/months/:id

Delete a month and all its associated data.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | uuid | Month ID to delete |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Month deleted successfully"
}
```

---

### 3. Tasks Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/tasks/month/:monthId` | Get tasks for a month | Yes |
| POST | `/tasks` | Create a new task | Yes |
| DELETE | `/tasks/:id` | Delete a task | Yes |
| POST | `/tasks/toggle-check` | Toggle daily completion check | Yes |

#### GET /api/tasks/month/:monthId

Retrieve all tasks for a specific month.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| monthId | uuid | Month ID to filter tasks |

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "monthId": "uuid",
      "title": "Task title",
      "category": "Workout",
      "position": 0,
      "createdAt": "2026-08-15T10:00:00.000Z",
      "updatedAt": "2026-08-15T10:00:00.000Z",
      "dailyChecks": [
        {
          "id": "uuid",
          "taskId": "uuid",
          "date": "2026-08-15",
          "completed": true,
          "createdAt": "2026-08-15T10:00:00.000Z",
          "updatedAt": "2026-08-15T10:00:00.000Z"
        }
      ]
    }
  ]
}
```

---

#### POST /api/tasks

Create a new task.

**Auth Required:** Yes (Bearer token)

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| monthId | string (uuid) | Yes |
| title | string | Yes |
| category | string | No |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "monthId": "uuid",
    "title": "Task title",
    "category": "Workout",
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z",
    "dailyChecks": []
  }
}
```

---

#### DELETE /api/tasks/:id

Delete a task.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | uuid | Task ID to delete |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

#### POST /api/tasks/toggle-check

Toggle the completion status of a task for a specific date.

**Auth Required:** Yes (Bearer token)

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| taskId | string (uuid) | Yes |
| date | string | Yes | Format: YYYY-MM-DD |
| completed | boolean | Yes |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "taskId": "uuid",
    "date": "2026-08-15",
    "completed": true,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

### 4. Priorities Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/priorities/month/:monthId` | Get priorities for a month | Yes |
| POST | `/priorities` | Create a priority | Yes |
| DELETE | `/priorities/:id` | Delete a priority | Yes |
| POST | `/priorities/:priorityId/milestones` | Add milestone | Yes |
| PATCH | `/priorities/milestones/:id` | Toggle milestone completion | Yes |
| DELETE | `/priorities/milestones/:id` | Delete milestone | Yes |

#### GET /api/priorities/month/:monthId

Retrieve all priorities with milestones for a specific month.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "monthId": "uuid",
      "title": "Priority title",
      "description": "Optional description",
      "target": 100,
      "progress": 50,
      "position": 0,
      "createdAt": "2026-08-15T10:00:00.000Z",
      "updatedAt": "2026-08-15T10:00:00.000Z",
      "milestones": [
        {
          "id": "uuid",
          "priorityId": "uuid",
          "title": "Milestone 1",
          "completed": true,
          "position": 0,
          "createdAt": "2026-08-15T10:00:00.000Z",
          "updatedAt": "2026-08-15T10:00:00.000Z"
        }
      ]
    }
  ]
}
```

---

#### POST /api/priorities

Create a new priority.

**Auth Required:** Yes (Bearer token)

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| monthId | string (uuid) | Yes |
| title | string | Yes |
| description | string | No |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "monthId": "uuid",
    "title": "Priority title",
    "description": "Optional description",
    "target": 100,
    "progress": 0,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z",
    "milestones": []
  }
}
```

---

#### DELETE /api/priorities/:id

Delete a priority.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Priority deleted successfully"
}
```

---

#### POST /api/priorities/:priorityId/milestones

Add a milestone to a priority.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| priorityId | uuid | Priority ID |

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| title | string | Yes |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "priorityId": "uuid",
    "title": "Milestone title",
    "completed": false,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

#### PATCH /api/priorities/milestones/:id

Toggle or update a milestone completion status.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | uuid | Milestone ID |

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| completed | boolean | Yes |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "priorityId": "uuid",
    "title": "Milestone title",
    "completed": true,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

#### DELETE /api/priorities/milestones/:id

Delete a milestone.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Milestone deleted successfully"
}
```

---

### 5. Streaks Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/streaks/stats` | Get streak statistics | Yes |

#### GET /api/streaks/stats

Retrieve streak statistics for the authenticated user.

**Auth Required:** Yes (Bearer token)

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| monthKey | string | No | Filter by month (YYYY-MM format) |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "currentStreak": 5,
    "bestStreak": 12,
    "totalCompletedDays": 45,
    "monthStreaks": ["2026-08-14", "2026-08-13", "2026-08-12"]
  }
}
```

---

### 6. Academic Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/academics/:monthId` | Get academics for a month | Yes |
| POST | `/academics` | Create an academic subject | Yes |
| PATCH | `/academics/:id` | Update an academic subject | Yes |
| DELETE | `/academics/:id` | Delete an academic subject | Yes |
| POST | `/academics/:academicId/chapters` | Add chapter to subject | Yes |
| PATCH | `/academics/chapters/:chapterId` | Update chapter | Yes |
| DELETE | `/academics/chapters/:chapterId` | Delete chapter | Yes |
| PATCH | `/academics/:academicId/weeks/:weekId` | Update week hours | Yes |

#### GET /api/academics/:monthId

Retrieve all academic subjects for a specific month.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| monthId | uuid | Month ID to filter subjects |

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "monthId": "uuid",
      "subject": "Software Engineering",
      "targetHours": 40,
      "position": 0,
      "createdAt": "2026-08-15T10:00:00.000Z",
      "updatedAt": "2026-08-15T10:00:00.000Z",
      "chapters": [
        {
          "id": "uuid",
          "academicId": "uuid",
          "title": "Chapter 1",
          "isCompleted": false,
          "position": 0,
          "createdAt": "2026-08-15T10:00:00.000Z",
          "updatedAt": "2026-08-15T10:00:00.000Z"
        }
      ],
      "weeklyLogs": [
        {
          "id": "uuid",
          "academicId": "uuid",
          "weekNumber": 1,
          "hoursSpent": 5,
          "createdAt": "2026-08-15T10:00:00.000Z",
          "updatedAt": "2026-08-15T10:00:00.000Z"
        }
      ]
    }
  ]
}
```

---

#### POST /api/academics

Create a new academic subject with 4 auto-generated weekly logs.

**Auth Required:** Yes (Bearer token)

**Request Body:**
| Field | Type | Required | Default |
|-------|------|----------|---------|
| monthId | string (uuid) | Yes | - |
| subject | string | Yes | - |
| targetHours | number | No | 0 |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "monthId": "uuid",
    "subject": "Software Engineering",
    "targetHours": 40,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z",
    "chapters": [],
    "weeklyLogs": [
      { "weekNumber": 1, "hoursSpent": 0 },
      { "weekNumber": 2, "hoursSpent": 0 },
      { "weekNumber": 3, "hoursSpent": 0 },
      { "weekNumber": 4, "hoursSpent": 0 }
    ]
  }
}
```

---

#### PATCH /api/academics/:id

Update an academic subject.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | uuid | Academic subject ID |

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| subject | string | No |
| targetHours | number | No |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "monthId": "uuid",
    "subject": "Updated Subject",
    "targetHours": 50,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T11:00:00.000Z",
    "chapters": [],
    "weeklyLogs": []
  }
}
```

---

#### DELETE /api/academics/:id

Delete an academic subject.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Academic subject deleted successfully"
}
```

---

#### POST /api/academics/:academicId/chapters

Add a chapter to an academic subject.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| academicId | uuid | Academic subject ID |

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| title | string | Yes |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "academicId": "uuid",
    "title": "Chapter title",
    "isCompleted": false,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

#### PATCH /api/academics/chapters/:chapterId

Update a chapter.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| chapterId | uuid | Chapter ID |

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| title | string | No |
| isCompleted | boolean | No |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "academicId": "uuid",
    "title": "Updated Chapter",
    "isCompleted": true,
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T11:00:00.000Z"
  }
}
```

---

#### DELETE /api/academics/chapters/:chapterId

Delete a chapter.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Chapter deleted successfully"
}
```

---

#### PATCH /api/academics/:academicId/weeks/:weekId

Update hours spent for a specific week.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| academicId | uuid | Academic subject ID |
| weekId | uuid | Week log ID |

**Request Body:**
| Field | Type | Required |
|-------|------|----------|
| hoursSpent | number | Yes | Minimum: 0 |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "academicId": "uuid",
    "weekNumber": 1,
    "hoursSpent": 8.5,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T14:00:00.000Z"
  }
}
```

---

### 7. Metrics Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/metrics/:monthId` | Get metrics for a month | Yes |
| POST | `/metrics` | Create a metric | Yes |
| PATCH | `/metrics/:id` | Update a metric | Yes |
| DELETE | `/metrics/:id` | Delete a metric | Yes |

#### GET /api/metrics/:monthId

Retrieve all success metrics for a specific month.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| monthId | uuid | Month ID to filter metrics |

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "monthId": "uuid",
      "name": "Books Read",
      "value": 12,
      "target": 15,
      "unit": "books",
      "position": 0,
      "createdAt": "2026-08-15T10:00:00.000Z",
      "updatedAt": "2026-08-15T10:00:00.000Z"
    }
  ]
}
```

---

#### POST /api/metrics

Create a new success metric.

**Auth Required:** Yes (Bearer token)

**Request Body:**
| Field | Type | Required | Default |
|-------|------|----------|---------|
| monthId | string (uuid) | Yes | - |
| name | string | Yes | - |
| value | number | No | 0 |
| target | number | No | 0 |
| unit | string | No | null |
| position | number | No | 0 |

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "monthId": "uuid",
    "name": "Books Read",
    "value": 0,
    "target": 15,
    "unit": "books",
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T10:00:00.000Z"
  }
}
```

---

#### PATCH /api/metrics/:id

Update a metric.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | uuid | Metric ID |

**Request Body:** All fields optional
| Field | Type |
|-------|------|
| name | string |
| value | number |
| target | number |
| unit | string |
| position | number |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "monthId": "uuid",
    "name": "Books Read",
    "value": 12,
    "target": 15,
    "unit": "books",
    "position": 0,
    "createdAt": "2026-08-15T10:00:00.000Z",
    "updatedAt": "2026-08-15T11:00:00.000Z"
  }
}
```

---

#### DELETE /api/metrics/:id

Delete a metric.

**Auth Required:** Yes (Bearer token)

**Success Response (200):**
```json
{
  "success": true,
  "message": "Metric deleted successfully"
}
```

---

### 8. Overview Module

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/overview/:monthId` | Get dashboard overview data | Yes |

#### GET /api/overview/:monthId

Retrieve comprehensive overview data for a month including priorities, tasks, academics, and metrics.

**Auth Required:** Yes (Bearer token)

**URL Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| monthId | uuid | Month ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Overview data retrieved successfully",
  "data": {
    "month": {
      "id": "uuid",
      "userId": "uuid",
      "monthKey": "2026-08",
      "year": 2026,
      "month": 8,
      "status": "active",
      "priorities": [...],
      "tasks": [...],
      "academics": [...],
      "metrics": [...]
    },
    "streaks": [
      {
        "id": "uuid",
        "userId": "uuid",
        "date": "2026-08-15",
        "completed": true,
        "createdAt": "2026-08-15T10:00:00.000Z",
        "updatedAt": "2026-08-15T10:00:00.000Z"
      }
    ]
  }
}
```

---

## Main Resources/Modules

| Module | Description |
|--------|-------------|
| Auth | User registration, login, and logout |
| Months | Monthly tracking containers (2020-2100) |
| Tasks | Daily task management with completion tracking |
| Priorities | Goals/priorities with milestone tracking |
| Streaks | Daily completion streak statistics |
| Academic | Subject tracking with chapters and weekly hours |
| Metrics | Success metrics (e.g., books read, commits) |
| Overview | Consolidated dashboard data |

---

## Global Routes

### GET /

Root endpoint to verify API is running.

**Success Response (200):**
```json
{
  "success": true,
  "message": "API is running"
}
```

---

## Verification Notes

The following tables summarize all documented endpoints. Each endpoint is verified against the source code:

### Auth Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/auth/register` | POST | ✓ | ✓ |
| `/auth/login` | POST | ✓ | ✓ |
| `/auth/logout` | POST | ✓ | ✓ |

### Month Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/months` | GET | ✓ | ✓ |
| `/months/find` | GET | ✓ | ✓ |
| `/months` | POST | ✓ | ✓ |
| `/months/:id` | DELETE | ✓ | ✓ |

### Task Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/tasks/month/:monthId` | GET | ✓ | ✓ |
| `/tasks` | POST | ✓ | ✓ |
| `/tasks/:id` | DELETE | ✓ | ✓ |
| `/tasks/toggle-check` | POST | ✓ | ✓ |

### Priority Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/priorities/month/:monthId` | GET | ✓ | ✓ |
| `/priorities` | POST | ✓ | ✓ |
| `/priorities/:id` | DELETE | ✓ | ✓ |
| `/priorities/:priorityId/milestones` | POST | ✓ | ✓ |
| `/priorities/milestones/:id` | PATCH | ✓ | ✓ |
| `/priorities/milestones/:id` | DELETE | ✓ | ✓ |

### Streak Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/streaks/stats` | GET | ✓ | ✓ |

### Academic Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/academics/:monthId` | GET | ✓ | ✓ |
| `/academics` | POST | ✓ | ✓ |
| `/academics/:id` | PATCH | ✓ | ✓ |
| `/academics/:id` | DELETE | ✓ | ✓ |
| `/academics/:academicId/chapters` | POST | ✓ | ✓ |
| `/academics/chapters/:chapterId` | PATCH | ✓ | ✓ |
| `/academics/chapters/:chapterId` | DELETE | ✓ | ✓ |
| `/academics/:academicId/weeks/:weekId` | PATCH | ✓ | ✓ |

### Metric Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/metrics/:monthId` | GET | ✓ | ✓ |
| `/metrics` | POST | ✓ | ✓ |
| `/metrics/:id` | PATCH | ✓ | ✓ |
| `/metrics/:id` | DELETE | ✓ | ✓ |

### Overview Routes
| Endpoint | Method | Documented | Verified |
|----------|--------|------------|----------|
| `/overview/:monthId` | GET | ✓ | ✓ |

---

## Environment Variables

The server requires the following environment variables:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `JWT_SECRET` | Secret key for JWT token signing |
| `DATABASE_URL` | PostgreSQL database connection string |
| `CLIENT_URL` | CORS allowed origin (default: http://localhost:3000) |