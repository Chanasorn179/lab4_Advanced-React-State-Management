import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAdd }) {
  if (!product) return null;

  const priceText = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price ?? 0);

  const handleClick = () => onAdd?.(product);

  return (
    <div
      className="group rounded-2xl border border-slate-200 bg-white
        hover:bg-slate-50 transition
        shadow-[0_8px_24px_rgba(15,23,42,.06)] hover:shadow-[0_14px_34px_rgba(15,23,42,.10)]
        overflow-hidden"
    >
      {/* คลิกดูรายละเอียดสินค้า */}
      <Link to={`/products/${product.id}`} className="block p-4">
        <div className="h-44 flex items-center justify-center mb-3">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-44 object-contain transition duration-300 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </div>
        <h3 className="font-semibold mb-2 line-clamp-2 text-slate-800">
          {product.title}
        </h3>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-violet-500">
          {priceText}
        </p>
      </Link>

      {/* ปุ่ม Add to Cart */}
      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={handleClick}
          className="w-full rounded-xl py-2.5
            bg-gradient-to-r from-sky-400 to-violet-500
            hover:from-sky-300 hover:to-violet-400
            text-white font-semibold shadow-sm hover:shadow-md
            transition-all duration-300 ease-out hover:scale-[1.02]"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

export default memo(ProductCard);
