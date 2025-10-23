# 🧩 ENGSE203 – Lab 4: Advanced React & Mini E-commerce

> วิชา: ENGSE203 การเขียนโปรแกรมสำหรับวิศวกรซอฟต์แวร์  
> หัวข้อ: Advanced React & State Management + Mini E-commerce  
> ภาคเรียนที่ 1 ปีการศึกษา 2568  
---

## 👨‍💻 ผู้พัฒนา

**นาย ชนสรณ์ บุตรถา**  
รหัสนักศึกษา 67543210025-2  
สาขาวิศวกรรมซอฟต์แวร์  
คณะวิศวกรรมศาสตร์  

---

## 🎯 วัตถุประสงค์การเรียนรู้

หลังจากจบ Lab นี้ นักศึกษาจะสามารถ:
- ใช้ **React Hook ขั้นสูง** เช่น `useEffect`, `useContext`, `useCallback`
- สร้าง **Custom Hook** เพื่อจัดการ LocalStorage
- ใช้ **Context API** จัดการสถานะผู้ใช้ (Login/Logout)
- ใช้ **Redux Toolkit** สำหรับ Global State (Cart System)
- ใช้ **React Router v6** ทำ Routing และ Dynamic Route
- ใช้ **React.memo** และ **useCallback** ปรับปรุงประสิทธิภาพการทำงาน
- เข้าใจการเชื่อมโยง REST API จริงผ่าน `axios` กับ FakeStore API

---

## ⚙️ การติดตั้งและรันโปรแกรม

### 🔹 Project 1: Lab 4 (Advanced React)

```bash
cd react-lab-w6
npm install
npm run dev
```
เปิดเบราว์เซอร์ที่ http://localhost:5173

### 🔹 Project 2: Mini-Ecommerce

```bash
cd mini-ecommerce
npm install
npm run dev
```
เปิดเบราว์เซอร์ที่ http://localhost:5174

---

## 🧠 หัวข้อที่ศึกษาใน Lab 4

| หมายเลข | หัวข้อ | แนวคิดหลัก | Hooks / Tools |
|----------|---------|--------------|----------------|
| 1 | Custom Hook | การใช้ useLocalStorage เก็บข้อมูลถาวร | `useState`, `useEffect` |
| 2 | Context API | แชร์ state ข้าม component | `createContext`, `useContext` |
| 3 | Redux Toolkit | Global state management | `createSlice`, `useSelector`, `useDispatch` |
| 4 | React Router | Routing ระหว่างหน้าและ Dynamic URL | `Routes`, `Route`, `useParams` |
| 5 | Performance Optimization | ลดการ re-render ที่ไม่จำเป็น | `React.memo`, `useCallback` |

---


## 🛍️ Mini Project – Mini E-commerce

### 🔹 ภาพรวมระบบ
โปรเจกต์นี้เป็นตัวอย่างเว็บขายสินค้าออนไลน์ขนาดเล็ก  
ที่ใช้ **React + Redux Toolkit + React Router + TailwindCSS**  
พร้อมเชื่อมต่อ API จริงจาก [https://fakestoreapi.com](https://fakestoreapi.com)

---

## 🧱 โครงสร้างโปรเจกต์ Mini E-commerce

```
src/
  ├── components/
  │   ├── Layout.jsx
  │   └── ProductCard.jsx
  ├── features/
  │   └── cart/
  │       └── cartSlice.js
  ├── pages/
  │   ├── HomePage.jsx
  │   ├── ProductListPage.jsx
  │   ├── ProductDetailPage.jsx
  │   └── CartPage.jsx
  ├── store.js
  ├── App.jsx
  └── main.jsx
```

---

## 💡 แนวคิดสำคัญใน Mini-Ecommerce

| หมวด | รายละเอียด |
|------|-------------|
| **API Integration** | ดึงข้อมูลสินค้าจริงจาก FakeStore API |
| **Redux Toolkit** | ใช้ state กลางเก็บสินค้าในตะกร้า |
| **Dynamic Route** | ใช้ `/products/:id` เพื่อแสดงรายละเอียดสินค้า |
| **Responsive Design** | ใช้ Tailwind CSS ให้หน้าเว็บสวยทุกขนาดหน้าจอ |
| **Performance** | ใช้ `React.memo` ใน Card เพื่อป้องกัน re-render ที่ไม่จำเป็น |


---
