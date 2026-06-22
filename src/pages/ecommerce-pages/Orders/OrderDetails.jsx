import React from 'react'

const OrderDetails = () => {
  return (
    <main className="ml-64 p-xl max-w-[1200px]">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
            <div className="flex flex-col gap-xs">
                <div className="flex items-center gap-sm">
                    <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                        <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                    </a>
                    <h2 className="font-h1 text-h1 text-primary">#ORD-7721qqq</h2>
                    <span
                        className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm">Delivered</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-8">Placed on Oct 24, 2023 at 2:45 PM</p>
            </div>
            <div className="flex items-center gap-md">
                <button
                    className="flex items-center gap-xs border border-outline px-md py-sm rounded-xl font-label-md text-label-md hover:bg-surface-container-low transition-colors active:scale-95">
                    <span className="material-symbols-outlined" data-icon="print">print</span>
                    Print
                </button>
                <button
                    className="flex items-center gap-xs bg-primary text-on-primary px-md py-sm rounded-xl font-label-md text-label-md hover:opacity-90 transition-all shadow-sm active:scale-95">
                    <span className="material-symbols-outlined" data-icon="download">download</span>
                    Download Invoice
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">

            <div className="lg:col-span-2 flex flex-col gap-lg">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="bg-white p-lg rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
                        <div className="flex items-center gap-sm mb-md">
                            <span className="material-symbols-outlined text-primary" data-icon="person">person</span>
                            <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider">Customer Details
                            </h3>
                        </div>
                        <div className="space-y-sm">
                            <p className="font-label-md text-body-lg text-primary">Alexander Pierce</p>
                            <p className="font-body-md text-body-md text-on-surface-variant">alexander.pierce@example.com
                            </p>
                            <p className="font-body-md text-body-md text-on-surface-variant">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="bg-white p-lg rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
                        <div className="flex items-center gap-sm mb-md">
                            <span className="material-symbols-outlined text-primary"
                                data-icon="local_shipping">local_shipping</span>
                            <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider">Shipping Address
                            </h3>
                        </div>
                        <div className="space-y-sm">
                            <p className="font-label-md text-body-lg text-primary">High-Rise Loft Apt 4B</p>
                            <p className="font-body-md text-body-md text-on-surface-variant">824 E 9th St, New York</p>
                            <p className="font-body-md text-body-md text-on-surface-variant">NY 10009, United States</p>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
                    <div className="p-lg border-b border-slate-100">
                        <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider">Order Items</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-low border-b border-slate-200">
                                <tr>
                                    <th
                                        className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase">
                                        Product</th>
                                    <th
                                        className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase">
                                        SKU</th>
                                    <th
                                        className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase">
                                        Price</th>
                                    <th
                                        className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase text-center">
                                        Qty</th>
                                    <th
                                        className="px-lg py-md font-label-sm text-label-sm text-on-surface-variant uppercase text-right">
                                        Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-lg py-md">
                                        <div className="flex items-center gap-md">
                                            <div
                                                className="h-12 w-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                                                <img alt="Product 1" className="w-full h-full object-cover"
                                                    data-alt="A clean, studio-lit product shot of a premium crimson red athletic sneaker against a minimalist off-white background. The lighting is soft but defined, highlighting the texture of the fabric and the sleek design. The overall aesthetic is professional and high-end, fitting for a curated ecommerce product display within a modern administration interface."
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOsFw0ILw7ZN6tw1XdDli4G-ly2lYwulcDvL5hWDR8ithW7CG5WtGxhXjPG8BVR4VaOzq32izNcyVkd1e_ScaFh0SeVLxNuT4iHiZff-0BzrSQnuAL-RF7GDhp43DZG8_66Mns-tj4qRoiE7t8rFXY1Z8NeStgde8oA0NwZfSIhgc05Gp2dMt1foj3p3w714BLfzQUA4sbooDvWqawxbW_Ql7dJzYfxLPVSvtcTnrTiJUjbsb_GiwaP0GVz-7T58g4tKn-dFE2N3kF" />
                                            </div>
                                            <span className="font-label-md text-body-md text-primary">Red Fusion
                                                Sneaker</span>
                                        </div>
                                    </td>
                                    <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">SNK-RF-102
                                    </td>
                                    <td className="px-lg py-md font-body-md text-body-md text-primary">$120.00</td>
                                    <td className="px-lg py-md font-body-md text-body-md text-primary text-center">1</td>
                                    <td className="px-lg py-md font-label-md text-body-md text-primary text-right">$120.00
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-lg py-md">
                                        <div className="flex items-center gap-md">
                                            <div
                                                className="h-12 w-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                                                <img alt="Product 2" className="w-full h-full object-cover"
                                                    data-alt="A high-resolution, minimalist product photograph of a modern matte white smartwatch on a matching pedestal. The lighting is diffused and bright, creating a clean light-mode feel. The composition is centered and emphasizes precision engineering and contemporary industrial design, aligning perfectly with a premium software brand aesthetic."
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaT1KsTjDFvOJ7o2_OCJQzXwjgnMVhIuPdTzpouN8zGkPugVnLdvoIeK6aix0cMLcCJyDzilBl2jGOqeeTblQGYA-MgXP3yk_7lxqJZbXPLFrM0EXgGKA1KNp0IXjkQ0c3jqeNmNy4q0-J7cwYNGUKe_y77C6Sr_b2kd7e8XrwRzedqJVGme97QR6F1z9eAuZKTIyzeeNgVXlAMwRjIINpSKk5WeOcbVrrofvhkU9U7vitUf56cFLQSoqRKLDTSXbI3BOL41DZLYd6" />
                                            </div>
                                            <span className="font-label-md text-body-md text-primary">Quartz Series 4
                                                Watch</span>
                                        </div>
                                    </td>
                                    <td className="px-lg py-md font-body-sm text-body-sm text-on-surface-variant">
                                        WTC-QS4-001</td>
                                    <td className="px-lg py-md font-body-md text-body-md text-primary">$299.00</td>
                                    <td className="px-lg py-md font-body-md text-body-md text-primary text-center">1</td>
                                    <td className="px-lg py-md font-label-md text-body-md text-primary text-right">$299.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-lg">
      
                <div className="bg-primary text-on-primary p-lg rounded-xl shadow-lg">
                    <h3 className="font-h3 text-label-md text-on-primary-container uppercase tracking-wider mb-lg">Payment
                        Summary</h3>
                    <div className="space-y-md border-b border-on-primary-fixed-variant pb-md mb-md">
                        <div className="flex justify-between font-body-md text-on-primary-fixed">
                            <span>Subtotal</span>
                            <span>$419.00</span>
                        </div>
                        <div className="flex justify-between font-body-md text-on-primary-fixed">
                            <span>Shipping</span>
                            <span>$15.00</span>
                        </div>
                        <div className="flex justify-between font-body-md text-on-primary-fixed">
                            <span>Tax (8%)</span>
                            <span>$33.52</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-h2 text-h3">Total</span>
                        <span className="font-h2 text-h2">$467.52</span>
                    </div>
                </div>
    
                <div className="bg-white p-lg rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-slate-100">
                    <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider mb-lg">Order Timeline</h3>
                    <div
                        className="relative space-y-lg before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
              
                        <div className="relative pl-8">
                            <div
                                className="absolute left-0 top-1 h-6 w-6 rounded-full bg-secondary-container border-4 border-white shadow-sm z-10">
                            </div>
                            <p className="font-label-md text-body-md text-primary">Order Delivered</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 26, 2023 · 10:30 AM</p>
                        </div>
                
                        <div className="relative pl-8">
                            <div
                                className="absolute left-0 top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10">
                            </div>
                            <p className="font-label-md text-body-md text-primary">Shipped from Warehouse</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 25, 2023 · 02:15 PM</p>
                        </div>
                       
                        <div className="relative pl-8">
                            <div
                                className="absolute left-0 top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10">
                            </div>
                            <p className="font-label-md text-body-md text-primary">Payment Confirmed</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023 · 03:00 PM</p>
                        </div>
                     
                        <div className="relative pl-8">
                            <div
                                className="absolute left-0 top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10">
                            </div>
                            <p className="font-label-md text-body-md text-primary">Order Placed</p>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023 · 02:45 PM</p>
                        </div>
                    </div>
                </div>
   
                <div className="bg-surface-container p-lg rounded-xl border border-outline-variant">
                    <h3 className="font-h3 text-label-md text-primary uppercase tracking-wider mb-sm">Order Notes</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">Customer requested eco-friendly
                        packaging if available. Package was left at the front desk per delivery instructions.</p>
                </div>
            </div>
        </div>
    </main>
  )
}

export default OrderDetails