# Runtime Stage
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

# Copy application code (excluding frontend via .dockerignore if possible, but copying all is fine)
COPY . .

# Expose port and run application
EXPOSE 5000
CMD sh -c "gunicorn --bind 0.0.0.0:${PORT:-10000} app:app"
