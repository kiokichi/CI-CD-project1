# Luxury Beauty Salon - CI/CD Project

A premium, responsive static website for a Luxury Beauty Salon, designed for easy deployment via Docker and Jenkins.

## Key Features
- **Premium Design**: Dark Navy and Gold aesthetic with modern typography (Outfit & Playfair Display).
- **Responsive**: Optimised for both desktop and mobile devices.
- **Dockerized**: Ready to be served via Nginx.
- **CI/CD Ready**: Integrated with Jenkins for automated builds and deployment.

---

## How to Start the Server

### 1. Using Docker (Recommended)
This method mirrors the production environment and the Jenkins setup.

```bash
# Build the Docker image
docker build -t beauty-salon .

# Run the container on port 8080
docker run -d -p 8080:80 --name salon-container beauty-salon
```
Access the site at: [http://localhost:8080](http://localhost:8080)

### 2. Using Python (Local Development)
If you just want to preview changes quickly without building a Docker image.

```bash
python3 -m http.server 8000
```
Access the site at: [http://localhost:8000](http://localhost:8000)

---

## Project Structure
- `index.html`: Main page structure with SEO and Google Fonts.
- `style.css`: Modern styling with CSS variables and glassmorphism.
- `script.js`: Smooth scrolling and booking form logic.
- `Dockerfile`: Nginx configuration for servant the site.
- `Jenkinsfile`: Pipeline configuration for CI/CD automation.
