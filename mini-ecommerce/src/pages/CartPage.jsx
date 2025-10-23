import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();

  const totalQty = items.reduce((n, i) => n + i.quantity, 0);
  const totalPrice = items.reduce((n, i) => n + i.quantity * i.price, 0);

  if (!items.length)
    return (
      <div className="flex flex-col justify-center items-center text-center space-y-4 min-h-[70vh]">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
          Cart
        </h1>
        <p className="text-slate-500 flex items-center gap-2">
          🛒 ตะกร้าของคุณยังว่างอยู่
        </p>
        <Link
          to="/products"
          className="px-6 py-3 rounded-full
      bg-gradient-to-r from-sky-400 to-violet-500
      hover:from-sky-300 hover:to-violet-400
      text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          เลือกซื้อสินค้า →
        </Link>
      </div>
    );

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent text-center">
        Cart
      </h1>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 p-4 rounded-2xl border bg-white
                       shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)]
                       transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <div className="font-medium line-clamp-2 text-slate-800">
                {item.title}
              </div>
              <div className="text-slate-500">${item.price.toFixed(2)}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity - 1 })
                  )
                }
                className="w-9 h-9 rounded-lg border hover:bg-slate-50"
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Math.max(1, +e.target.value || 1),
                    })
                  )
                }
                className="w-14 text-center rounded-lg border px-2 py-1"
              />
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                  )
                }
                className="w-9 h-9 rounded-lg border hover:bg-slate-50"
              >
                +
              </button>
            </div>

            <div className="w-24 text-right font-semibold text-slate-800">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="px-3 py-2 rounded-lg border hover:bg-slate-50 text-slate-600"
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>

      <div
        className="flex flex-wrap items-center justify-end gap-6 p-4 rounded-2xl
                   bg-white/70 backdrop-blur-md
                   shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
      >
        <div className="text-slate-600">รวม {totalQty} ชิ้น</div>
        <div className="text-2xl font-bold text-slate-800">
          ${totalPrice.toFixed(2)}
        </div>
        <button
          className="px-5 py-2.5 rounded-full
          bg-gradient-to-r from-sky-400 to-violet-500
          hover:from-sky-300 hover:to-violet-400
          text-white font-semibold shadow-md hover:shadow-lg transition-all"
        >
          ✅ ชำระเงิน
        </button>
      </div>
    </section>
  );
}
