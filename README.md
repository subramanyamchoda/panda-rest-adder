# 🏢 Panda Restaurants – Admin Portal

Welcome to the **Admin Portal** of **Panda Restaurants** 🧑‍🏠🐼
This is the management dashboard where restaurant owners and admins can create and control restaurants, tables, and monitor bookings in real time. Built using the powerful **MERN stack**, this application supports secure login, email alerts, and a modern, responsive UI.

---

## 🔗 Live Links

* 🧑‍🏠 **Admin Portal**: https://pandarestaurantsadder.vercel.app/
* 👥 **User Portal**: [https://pandarestaurantsuser.vercel.app/](https://pandarestaurantsuser.vercel.app/)
* ⚙️ **Backend API**: [https://panda-rest-server.onrender.com/](https://panda-rest-server.onrender.com/)
* 👤 **GitHub Repositories**:

  * Admin: [https://github.com/subramanyamchoda/panda-rest-adder](https://github.com/subramanyamchoda/panda-rest-adder)
  * User: [https://github.com/subramanyamchoda/panda-rest-user](https://github.com/subramanyamchoda/panda-rest-user)
  * Backend: [https://github.com/subramanyamchoda/panda-rest-server](https://github.com/subramanyamchoda/panda-rest-server)
* 👤 **Developer Profile**: [https://www.linkedin.com/in/subramanyamchoda/](https://www.linkedin.com/in/subramanyamchoda/)

---

## ✨ Key Features – Admin Portal

* 🔐 Google OAuth 2.0 login for restaurant admins
* 🏢 Add and manage multiple restaurants
* 🪑 Create tables with type, seating capacity, and images
* 📅 Real-time booking updates
* 📧 Email alerts for table creation, bookings, and login events
* 📊 Live dashboard for restaurant activity
* 🎨 Responsive UI with Framer Motion animations

---

## 🧰 Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React.js + Vite                     |
| Styling    | Tailwind CSS + Framer Motion        |
| Auth       | Google OAuth 2.0 + JWT              |
| Backend    | Node.js + Express (REST API)        |
| Database   | MongoDB + Mongoose ORM              |
| Email      | NodeMailer                          |
| Deployment | Vercel (Frontend), Render (Backend) |

---
## 🚀 Project Images
<p align="center">
  <img src="https://subramanyamchoda.vercel.app/pandarestadder1.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder2.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder3.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder4.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder5.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder6.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder7.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder8.png" width="400"/>
  <img src="https://subramanyamchoda.vercel.app/pandarestadder9.png" width="400"/>

</p>

---


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/subramanyamchoda/panda-rest-adder.git
cd panda-rest-adder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root with:

```env
VITE_API_BASE_URL=https://panda-rest-server.onrender.com/
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

> 🔐 Replace `your-google-client-id` with the actual client ID from Google Cloud Console.

### 4. Start the App

```bash
npm run dev
```

App will run at: [http://localhost:5173](http://localhost:5173)

---

## 🔒 Security & Auth

* Google OAuth 2.0 login (via Google Cloud Console)
* JWT tokens stored in **HTTP-only secure cookies**
* Protected routes accessible only to authenticated admins

---

## 📧 Email Notifications

Implemented using **NodeMailer** on the backend. Emails are sent for:

* ✅ Login confirmation
* 🍽️ Restaurant and table creation
* 📆 New booking notifications

---

## 🌟 Highlights

* 👥 Role-based access (Admin only)
* 📧 Real-time email notifications
* 📊 Admin dashboard with booking & table management
* 💨 Smooth animations via Framer Motion
* 📱 Fully responsive design for all devices

---

## 🤝 Contributing

We welcome all contributions and suggestions!

### How to Contribute:

```bash
# 1. Fork the repository

# 2. Create a new branch
git checkout -b feature/YourFeature

# 3. Make your changes and commit
git commit -m 'Add YourFeature'

# 4. Push to your branch
git push origin feature/YourFeature

# 5. Open a Pull Request
```

---

## 🙌 Acknowledgments

This project was developed to gain hands-on experience with:

* Real-world full-stack architecture
* Authentication and role-based access control
* RESTful API design and consumption
* Email workflows and user engagement
* Deployment on modern platforms (Vercel + Render)

---

## 🧲 Related Projects

* 👥 **User Portal**: [https://pandarestaurantsuser.vercel.app/](https://pandarestaurantsuser.vercel.app/)
* ⚙️ **Backend API**: [https://panda-rest-server.onrender.com/](https://panda-rest-server.onrender.com/)
* 👤 **Developer GitHub**: [https://github.com/subramanyamchoda](https://github.com/subramanyamchoda)

---

## ✅ Try It Live

👉 [**Panda Restaurants – Admin Portal (Live)**](https://pandarestadder.vercel.app/)

---

Thanks for exploring! 🚀 Feel free to connect, collaborate, or provide feedback! 🐼✨
