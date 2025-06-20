# Simple REST API with Node.js and Express

## Technology Stack
- **Programming Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Additional Packages**: UUID (for generating unique IDs)

## Project Structure (MVC Pattern)

## How to Run
git clone <https://github.com/bbaime98/simple-rest-api>

cd simple-rest-api
```bash
pnpm install
pnpm dev


## Example requests

1. Create a User (POST /users)

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'

    - Success Response
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "John Doe",
        "email": "john@example.com"
    }
  
    - 400 Bad Request 
    {
        "error": "Name and email are required"
    }
    - 400 Bad Request 
    {
        "error": "Email already in use"
    }

2. Get a User by ID (GET /users/:id)

    curl http://localhost:3000/users/550e8400-e29b-41d4-a716-446655440000

    - Success Response (200 OK)
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "name": "John Doe",
        "email": "john@example.com"
    }

    - Error Response (Not Found)

    curl http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000

    {
        "error": "User not found"
    }



