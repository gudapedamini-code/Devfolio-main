# 🚀 DevFolio Deployment Guide (Live Kaise Kare)

Yeh project 2 parts me live hoga:
1. **Frontend (Vite + React + Three.js)** ➡️ **Vercel** par host karein (Free, Fast, Automatic SSL).
2. **Backend (Node.js + Express + MongoDB)** ➡️ **Render** par host karein (Free Tier Available).

---

## 📌 Step 1: GitHub Par Code Push Karein

Agar aapne abhi tak GitHub repo nahi banaya hai:
```bash
git init
git add .
git commit -m "feat: configure production deployment and security"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```
*(Notice: `.env` files `.gitignore` me added hain, isliye credentials secure rahenge).*

---

## 🌐 Step 2: Backend Live Karein (Render.com)

1. [Render.com](https://render.com/) par account banayein ya login karein.
2. Dashboard par jakar **New +** ➡️ **Web Service** choose karein.
3. Apna GitHub repository connect karein.
4. Settings me yeh fill karein:
   - **Name**: `devfolio-backend` (ya jo aap chahein)
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Environment Variables** section me jakar add karein:
   - `MONGO_URI`: *Aapka MongoDB connection string*
   - `PORT`: `4000`
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: *Aapka Vercel URL (jaise `https://your-portfolio.vercel.app` - bad me bhi update kar sakte hain)*
6. **Deploy Web Service** par click karein.
7. Deployment complete hone ke baad Render aapko ek public URL dega (e.g. `https://devfolio-backend-xxxx.onrender.com`).
8. URL copy kar lein aur check karein: `https://devfolio-backend-xxxx.onrender.com/api/health`

---

## ⚡ Step 3: Frontend Live Karein (Vercel)

1. [Vercel.com](https://vercel.com/) par login karein (Continue with GitHub).
2. **Add New Project** par click karein aur apna GitHub repository select karein (`Import`).
3. **Configure Project** screen par:
   - **Framework Preset**: `Vite` (automatic detect ho jayega)
   - **Root Directory**: Agar monorepo se deploy kar rahe hain, toh **`frontend`** select karein (Edit button par click karke `frontend` select karein).
4. **Environment Variables** section expand karein aur add karein:
   - Key: `VITE_API_URL`
   - Value: *Aapka Render Backend URL* (e.g., `https://devfolio-backend-xxxx.onrender.com`)
   *(Note: Agar backend abhi deploy nahi hua hai, tab bhi frontend safely load hoga kyonki frontend me fallback data already built-in hai!)*
5. **Deploy** button dabayein!
6. Kuch seconds me aapka DevFolio live ho jayega aur ek live link mil jayegi (e.g., `https://devfolio-xxxx.vercel.app`).

---

## 🔗 Step 4: Backend aur Frontend Connect Verify Karein

1. Render dashboard me jakar `devfolio-backend` service me `FRONTEND_URL` environment variable ko apne Vercel live URL se update kar dein.
2. Frontend open karein aur check karein:
   - 3D Hero Animation
   - Featured Projects
   - Experience & Education
   - Contact Me Section
   - Resume Download button

