# Don Juan Django 🎭

![Django](https://img.shields.io/badge/Django-4.2-green.svg)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A sophisticated barber shop website with an integrated financial management panel, bringing professional hair care services into the digital age.

## 🚀 Features

- Modern, responsive design
- User authentication and authorization
- Financial management panel
- Appointment booking system
- Mobile-first approach
- Custom 404 error pages
- Secure by default

## 🛠️ Technologies

- **Backend:** Django 4.2
- **Frontend:** HTML5, CSS3, JavaScript
- **Authentication:** django-allauth
- **Styling:** Bootstrap 5
- **Database:** PostgreSQL
- **Cloud Storage:** AWS S3 (optional)

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Virtual environment (recommended)
- Git (for cloning the repository)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/l-anddrade/DonJuan-Barbers.git
cd DonJuan-Barbers
```

2. Create and activate virtual environment:
```bash
python -m venv DonJuanVENV
# On Windows:
DonJuanVENV\Scripts\activate
# On macOS/Linux:
source DonJuanVENV/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Create a superuser:
```bash
python manage.py createsuperuser
```

7. Start the development server:
```bash
python manage.py runserver
```

## 📁 Project Structure

```
DonJuan-Barbers/
├── DonJuanDjango/            # Main Django project directory
├── static/                   # Static files (CSS, JS, images)
├── static files/             # Additional static files
├── templates/                # HTML templates
├── manage.py                 # Django management script
├── README.md                 # Documentation
├── requirements.txt          # Project dependencies
└── vercel.json              # Vercel configuration file
```

## 🌍 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_STORAGE_BUCKET_NAME=your_bucket_name
```

## 🔐 Security

- Debug mode is disabled in production
- Secret key is stored in environment variables
- CSRF protection enabled
- XSS protection enabled
- Secure SSL/HTTPS redirect in production

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

- **Lucas de Andrade (L.Anddrade)**
  - GitHub: [l.anddrade](https://github.com/l.anddrade)
  - Email: l.anddrade019@gmail.com

## 🙏 Acknowledgments

- Django documentation
- Bootstrap team
- All contributors

---
Made with ❤️ and Django