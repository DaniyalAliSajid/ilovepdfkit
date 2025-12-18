# Use a lightweight Python base image
FROM python:3.10-slim

# Install LibreOffice (for Word -> PDF on Linux) and Java (required by LibreOffice)
RUN apt-get update && apt-get install -y \
    libreoffice \
    libreoffice-writer \
    default-jre \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy requirement files
COPY requirements.txt .
COPY requirements_prod.txt .

# Install dependencies from standard requirements (if safe) or production specific
# We use requirements_prod.txt which excludes windows-only packages
RUN pip install --no-cache-dir -r requirements_prod.txt

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
ENV PORT=5000
EXPOSE 5000

# Run with Gunicorn production server
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 120 app:app
