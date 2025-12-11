# Stage 1: Build Frontend
FROM node:20-slim AS frontend-build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Stage 2: Runtime
FROM python:3.12-slim

# Install system dependencies including LibreOffice and Java (required for LibreOffice)
RUN apt-get update && apt-get install -y \
    libreoffice \
    default-jre \
    poppler-utils \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirements and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy built frontend assets
COPY --from=frontend-build /app/dist /app/static_build

# Copy application code
COPY . .

# Expose port and run application
EXPOSE 5000
CMD sh -c "gunicorn --bind 0.0.0.0:${PORT:-5000} app:app"
