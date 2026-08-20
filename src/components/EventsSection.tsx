import { products } from '../content'

/**
 * EventsSection
 * ---------------------------------------------------------------------------
 * Light-gray section matching theme.html's events block: heading + helper
 * text + product selector + outline button, with the five-cell strip below
 * rendered as the five signature DLG products.
 */
export default function EventsSection() {
  return (
    <section id="products" className="mx-auto min-h-[270px] max-w-[1200px] bg-eventsbg px-[78px] pb-[30px] pt-[38px]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-3 text-[18px] font-medium text-do">{products.title}</h2>
          <p className="mb-2 text-xs text-graybody">Select a product below to learn more about each offering.</p>
          <div className="mb-5 text-base text-label">
            {products.items.map((p) => p.name.replace('™', '')).join(' · ')}
          </div>
          <label className="sr-only" htmlFor="product-category">
            Product category
          </label>
          <select id="product-category" className="border border-[#ccc] bg-white px-2 py-1 text-[10px] text-label">
            <option>Product</option>
            {products.items.map((p) => (
              <option key={p.name}>{p.name.replace('™', '')}</option>
            ))}
          </select>
        </div>
        <a
          href="#products"
          className="rounded-[8px] border-2 border-do bg-white px-[18px] py-3 text-xs font-bold text-do transition-colors hover:bg-do hover:text-white"
        >
          VIEW ALL PRODUCTS
        </a>
      </div>

      <div className="mt-[10px] grid grid-cols-5 border-t border-[#aaa]">
        {products.items.map((product, i) => (
          <div key={product.name} className="min-h-[50px] border-r border-[#aaa] pt-3 text-center text-[9px] font-bold text-label last:border-r-0">
            {product.name.replace('™', '')}
            <strong className="mt-1 block text-[15px] text-label">{String(i + 1).padStart(2, '0')}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}