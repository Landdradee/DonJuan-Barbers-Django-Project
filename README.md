# DonJuan Barbers - Django Project Setup Guide

Welcome to the **DonJuan Barbers** project! This is a fully functional barber website with an integrated financial management panel. Below, you'll find a step-by-step guide to set up the project on your local machine. If you find this project helpful, feel free to give credit to the creator (that's me!) 😊.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
3. [Running the Project](#running-the-project)
4. [Project Structure](#project-structure)
5. [Credits](#credits)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Python 3.8 or higher** (recommended)
- **Pip** (Python package installer)
- **Virtualenv** (optional but recommended for creating isolated environments)
- **Git** (for cloning the repository)

---

## Setup Instructions

### 1. Clone the Repository
First, clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/DonJuan-Barbers.git
cd DonJuan-Barbers
```

### 2. Create a Virtual Environment (Optional but Recommended)
To avoid conflicts with other Python projects, create a virtual environment:

```bash
python -m venv DonJuanVENV
```

Activate the virtual environment:

- **On Windows:**
  ```bash
  DonJuanVENV\Scripts\activate
  ```
- **On macOS/Linux:**
  ```bash
  source DonJuanVENV/bin/activate
  ```

### 3. Install Dependencies
Install the required Python packages using `pip`:

```bash
pip install -r requirements.txt
```

### 4. Set Up the Database
This project uses **SQLite** by default. To set up the database, run the following commands:

```bash
python manage.py migrate
```

### 5. Create a Superuser (Admin)
To access the financial management panel, create a superuser:

```bash
python manage.py createsuperuser
```

Follow the prompts to set up your admin credentials.

### 6. Configure Environment Variables (Optional)
If the project uses environment variables (e.g., for secret keys or API keys), create a `.env` file in the root directory and add the necessary variables. Refer to `.env.example` (if provided) for guidance.

---

## Running the Project

To start the development server, run:

```bash
python manage.py runserver
```

Open your browser and navigate to:

- **Website:** `http://127.0.0.1:8000/`
- **Admin Panel:** `http://127.0.0.1:8000/admin/`

---

## Project Structure

Here’s an overview of the project structure:

```
DonJuan-Barbers/
├── DonJuanDjango/            # Main Django project directory
├── DonJuanVENV/              # Virtual environment directory
├── static/                   # Static files (CSS, JS, images)
├── static files/             # Additional static files
├── templates/                # HTML templates
├── manage.py                 # Django management script
├── README.md                 # This file
├── requirements.txt          # List of dependencies
└── vercel.json               # Vercel configuration file
```

---

## Credits

This project was created by **Lucas de Andrade. AKA. L.Anddrade**. If you find this project useful, feel free to give credit by mentioning my name or linking to my GitHub profile. Contributions and feedback are always welcome!

- **GitHub:** [Your GitHub Profile](https://github.com/l.anddrade)
- **Email:** l.anddrade019@gmail.com

---

Enjoy using **DonJuan Barbers**! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Happy coding! 🚀