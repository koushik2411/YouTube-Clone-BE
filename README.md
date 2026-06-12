# YouTube Clone - Backend

A REST API backend for a YouTube-like video streaming platform built with  
**Node.js, Express.js, MongoDB, and JWT authentication**.

It handles authentication, videos, channels, comments, likes/dislikes, and user management.

---

## Features

### Authentication
- User Register & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes via middleware

### Channel System
- Create channel
- Fetch user channel
- Link videos to channel owner

### Video System
- Create video
- Get all videos
- Get single video
- Get user videos
- Update video
- Delete video
- Like / Dislike system
- View count support
- Populate channel data

### Comments System
- Add comments
- Get comments by video
- Update comment (owner only)
- Delete comment (owner only)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors
