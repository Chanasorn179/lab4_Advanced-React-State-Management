import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-6 px-4">
      {/* หัวข้อใหญ่ */}
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent drop-shadow-sm">
          Welcome to Mini E-Commerce
        </span>
      </h1>

      {/* คำอธิบาย */}
      <p className="text-slate-600 text-lg max-w-md leading-relaxed">
        ✨ เลือกดูสินค้าทั้งหมดได้ที่หน้า Products และเพิ่มสินค้าที่คุณชื่นชอบลงในตะกร้าของคุณ! 🛒
      </p>

      {/* ปุ่ม */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full
        bg-gradient-to-r from-sky-400 to-violet-500
        hover:from-sky-300 hover:to-violet-400
        text-white font-semibold shadow-md hover:shadow-lg
        transition-all duration-300 ease-out hover:scale-105"
      >
        ไปหน้า Products →
      </Link>
    </section>
  );
}
