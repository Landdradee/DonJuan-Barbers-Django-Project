# Don Juan Barbershop 💈

<div align="center">

![Don Juan Logo](path/to/your/logo.png)

[![Django](https://img.shields.io/badge/Django-4.2-green.svg)](https://www.djangoproject.com/)
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen.svg)](coverage)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

*A modern barbershop management system built with Django*

[Demo](your-demo-link) • [Documentation](your-docs-link) • [Report Bug](issues-link) • [Request Feature](issues-link)

</div>

## ✨ Features

- 🔐 Secure Authentication System
- 📅 Smart Appointment Scheduling
- 💰 Financial Management Dashboard
- 📱 Responsive Mobile-First Design
- 🌙 Dark/Light Mode Support
- 🔍 SEO Optimized
- 🚀 Performance Optimized
- 📊 Analytics Integration
- 💳 Payment Processing
- 📧 Email Notifications

## 🛠️ Tech Stack

- **Frontend:**
  - HTML5/CSS3/JavaScript
  - Bootstrap 5
  - SCSS
  - Custom Components
  - Alpine.js (for interactivity)

- **Backend:**
  - Django 4.2
  - Django REST Framework
  - PostgreSQL
  - Redis Cache
  - Celery
  - Django Debug Toolbar

- **Infrastructure:**
  - AWS S3 (Storage)
  - AWS CloudFront (CDN)
  - Vercel (Deployment)
  - GitHub Actions (CI/CD)
  - Redis (Caching/Queue)

## 🚀 Quick Start

1. **Clone & Install**
```bash
# Clone the repository
git clone https://github.com/l-anddrade/DonJuan-Barbers.git

# Navigate to project
cd DonJuan-Barbers

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Install pre-commit hooks
pre-commit install
```

2. **Environment Setup**
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your settings
nano .env
```

3. **Database Setup**
```bash
# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

4. **Run Development Server**
```bash
python manage.py runserver
```

Visit `http://localhost:8000` 🎉

## 📁 Project Structure

```
DonJuan-Barbers/
├── apps/                    # Django applications
│   ├── accounts/           # User management
│   ├── appointments/       # Booking system
│   ├── finance/           # Financial management
│   ├── api/               # REST API endpoints
│   └── core/              # Core functionality
├── config/                 # Project configuration
├── static/                 # Static assets
│   ├── css/               # Compiled CSS
│   ├── scss/              # SCSS source files
│   ├── js/                # JavaScript files
│   └── images/            # Image assets
├── templates/              # HTML templates
├── tests/                  # Test suite
│   ├── factories/         # Test data factories
│   ├── integration/       # Integration tests
│   └── unit/              # Unit tests
├── utils/                  # Utility functions
└── docs/                   # Documentation
```

## 🧪 Testing

```bash
# Run tests
pytest

# Generate coverage report
coverage run -m pytest
coverage report
```

## 📦 Deployment

Detailed deployment guides:
- [Vercel Deployment](docs/deploy-vercel.md)
- [AWS Deployment](docs/deploy-aws.md)
- [Docker Deployment](docs/deploy-docker.md)

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📝 License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lucas de Andrade** - *Lead Developer* - [@l.anddrade](https://github.com/l.anddrade)
  - Email: l.anddrade019@gmail.com
  - LinkedIn: [Lucas de Andrade](your-linkedin-url)

## 🙏 Acknowledgments

- Django Community
- Bootstrap Team
- All Contributors
- Our Amazing Users

## 📊 Project Status

![Development Status](https://img.shields.io/badge/status-active-success.svg)
![GitHub Stars](https://img.shields.io/github/stars/l-anddrade/DonJuan-Barbers?style=social)
![GitHub Forks](https://img.shields.io/github/forks/l-anddrade/DonJuan-Barbers?style=social)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/l.anddrade">L.Anddrade</a>

⭐️ Star this project if you find it useful!
</div>