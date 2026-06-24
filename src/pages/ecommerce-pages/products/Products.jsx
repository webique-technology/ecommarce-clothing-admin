import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";
import { Route, Routes, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  // dummy products
  const initialProducts = [
    {
      id: 1,
      product: "Kurtiqq",
      subProduct: "Floral Kurti",
      category: "Ethnic Wear",
      subCategory: "Women's Kurtis",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 1499,
      stock: 12,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b"],
      description: "Beautiful floral kurti",
      // brand: "Biba",
    },
    {
      id: 2,
      product: "Saree",
      subProduct: "Silk Saree",
      category: "Traditional",
      subCategory: "Silk Sarees",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 0,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 2999,
      stock: 5,
      gender: "girls",
      // status: "Inactive",
      images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c"],
      description: "Premium silk saree",
      // brand: "Manyavar",
    },
    {
      id: 3,
      product: "Lehenga",
      subProduct: "Wedding Lehenga",
      category: "Bridal Wear",
      subCategory: "Wedding Collection",
      sizes: [
        {
          size: "2T",
          stock: 4,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 8999,
      stock: 3,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1597983073493-88cd35cf93b0"],
      description: "Heavy bridal lehenga",
      // brand: "Kalki",
    },
    {
      id: 4,
      product: "Top",
      subProduct: "Casual Crop Top",
      category: "Western Wear",
      subCategory: "Crop Tops",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 5,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 999,
      stock: 18,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b"],
      description: "Stylish crop top",
      // brand: "Zara",
    },
    {
      id: 5,
      product: "Jeans",
      subProduct: "Skinny Fit Jeans",
      category: "Denim",
      subCategory: "Skinny Fit",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 1999,
      stock: 10,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246"],
      description: "Comfortable blue jeans",
      // brand: "Levis",
    },
    {
      id: 6,
      product: "Gown",
      subProduct: "Party Wear Gown",
      category: "Party Wear",
      subCategory: "Evening Gowns",
      sizes: [
        {
          size: "2T",
          stock: 3,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 1,
        },
      ],
      price: 4999,
      stock: 6,
      gender: "girls",
      // status: "Inactive",
      images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c"],
      description: "Elegant evening gown",
      // brand: "Forever New",
    },
    {
      id: 7,
      product: "Palazzo",
      subProduct: "Printed Palazzo",
      category: "Bottom Wear",
      subCategory: "Palazzos",
      sizes: [
        {
          size: "2T",
          stock: 1,
        },
        {
          size: "4T",
          stock: 3,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 899,
      stock: 15,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518"],
      description: "Comfort fit palazzo",
      // brand: "W",
    },
    {
      id: 8,
      product: "Dupatta",
      subProduct: "Banarasi Dupatta",
      category: "Accessories",
      subCategory: "Dupattas",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 6,
        },
      ],
      price: 699,
      stock: 20,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"],
      description: "Traditional banarasi dupatta",
      // brand: "FabIndia",
    },
    {
      id: 9,
      product: "Salwar Suit",
      subProduct: "Cotton Suit Set",
      category: "Ethnic Wear",
      subCategory: "Suit Sets",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 7,
        },
        {
          size: "6T",
          stock: 7,
        },
      ],
      price: 2499,
      stock: 8,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1"],
      description: "Comfortable cotton suit",
      // brand: "Aurelia",
    },
    {
      id: 10,
      product: "Skirt",
      subProduct: "Pleated Skirt",
      category: "Western Wear",
      subCategory: "Skirts",
      sizes: [
        {
          size: "2T",
          stock: 2,
        },
        {
          size: "4T",
          stock: 6,
        },
        {
          size: "6T",
          stock: 8,
        },
      ],
      price: 1599,
      stock: 9,
      gender: "girls",
      // status: "Inactive",
      images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"],
      description: "Trendy pleated skirt",
      // brand: "H&M",
    },
    {
      id: 11,
      product: "T-Shirt",
      subProduct: "Graphic Tee",
      category: "Casual Wear",
      subCategory: "Graphic Tees",
      sizes: [
        {
          size: "2T",
          stock: 0,
        },
        {
          size: "4T",
          stock: 0,
        },
        {
          size: "6T",
          stock: 0,
        },
      ],
      price: 799,
      stock: 25,
      // status: "Active",
      gender: "boys",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"],
      description: "Soft cotton graphic tee",
      // brand: "Uniqlo",
    },
    {
      id: 12,
      product: "Jacket",
      subProduct: "Denim Jacket",
      category: "Outerwear",
      subCategory: "Denim Jackets",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 3499,
      stock: 7,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1512436991641-6745cdb1723f"],
      description: "Classic denim jacket",
      // brand: "Only",
    },
    {
      id: 13,
      product: "Anarkali",
      subProduct: "Designer Anarkali",
      category: "Ethnic Wear",
      subCategory: "Anarkali Suits",
      sizes: [
        {
          size: "2T",
          stock: 20,
        },
        {
          size: "4T",
          stock: 10,
        },
        {
          size: "6T",
          stock: 18,
        },
      ],
      price: 4599,
      stock: 4,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1581044777550-4cfa60707c03"],
      description: "Elegant designer anarkali",
      // brand: "Libas",
    },
    {
      id: 14,
      product: "Leggings",
      subProduct: "Black Leggings",
      category: "Bottom Wear",
      subCategory: "Leggings",
      sizes: [
        {
          size: "2T",
          stock: 2,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 499,
      stock: 30,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1506629905607-d9fdf4c49309"],
      description: "Stretchable black leggings",
      // brand: "Go Colors",
    },
    {
      id: 15,
      product: "Blazer",
      subProduct: "Formal Blazer",
      category: "Formal Wear",
      subCategory: "Office Wear",
      sizes: [
        {
          size: "2T",
          stock: 2,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 5999,
      stock: 5,
      gender: "boys",
      // status: "Inactive",
      images: ["https://images.unsplash.com/photo-1495385794356-15371f348c31"],
      description: "Office wear blazer",
      // brand: "Van Heusen",
    },
    {
      id: 16,
      product: "Night Suit",
      subProduct: "Printed Nightwear",
      category: "Sleepwear",
      subCategory: "Night Suits",
      sizes: [
        {
          size: "2T",
          stock: 3,
        },
        {
          size: "4T",
          stock: 2,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 1299,
      stock: 14,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"],
      description: "Comfortable night suit",
      // brand: "Clovia",
    },
    {
      id: 17,
      product: "Shrug",
      subProduct: "Long Shrug",
      category: "Layering",
      subCategory: "Shrugs",
      sizes: [
        {
          size: "2T",
          stock: 10,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 5,
        },
      ],
      price: 899,
      stock: 11,
      gender: "boys",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93"],
      description: "Stylish layering shrug",
      // brand: "Only",
    },
    {
      id: 18,
      product: "Co-ord Set",
      subProduct: "Printed Co-ord",
      category: "Western Wear",
      subCategory: "Co-ord Sets",
      sizes: [
        {
          size: "2T",
          stock: 15,
        },
        {
          size: "4T",
          stock: 4,
        },
        {
          size: "6T",
          stock: 12,
        },
      ],
      price: 2799,
      stock: 13,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b"],
      description: "Matching co-ord outfit",
      // brand: "Urbanic",
    },
    {
      id: 19,
      product: "Sharara",
      subProduct: "Festive Sharara Set",
      category: "Festive Wear",
      subCategory: "Sharara Sets",
      sizes: [
        {
          size: "2T",
          stock: 5,
        },
        {
          size: "4T",
          stock: 40,
        },
        {
          size: "6T",
          stock: 2,
        },
      ],
      price: 3999,
      stock: 6,
      gender: "boys",
      // status: "Inactive",
      images: ["https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"],
      description: "Festive sharara outfit",
      // brand: "Indya",
    },
    {
      id: 20,
      product: "Kaftan",
      subProduct: "Beach Kaftan",
      category: "Resort Wear",
      subCategory: "Kaftans",
      sizes: [
        {
          size: "2T",
          stock: 0,
        },
        {
          size: "4T",
          stock: 0,
        },
        {
          size: "6T",
          stock: 0,
        },
      ],
      price: 1899,
      stock: 16,
      gender: "girls",
      // status: "Active",
      images: ["https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"],
      description: "Lightweight beach kaftan",
      // brand: "Global Desi",
    },
  ];

  const [womenWearProducts, setWomenWearProducts] = useState(initialProducts);



  const [page, setPage] = useState("table");


  // ADD / UPDATE
  const handleSave = (productData) => {
    const existingProduct =
      womenWearProducts.find(
        (item) => item.id === productData.id
      );

    if (existingProduct) {
      setWomenWearProducts((prev) =>
        prev.map((item) =>
          item.id === productData.id
            ? productData
            : item
        )
      );
    } else {
      setWomenWearProducts((prev) => [
        {
          ...productData,
          id: Date.now(),
        },
        ...prev,
      ]);
    }

    navigate("/products");
  };

  // EDIT
  const handleEdit = (product) => {
    navigate(
      `/products/update-product/${product.id}`
    );
  };

  // DELETE
  const handleDelete = (id) => {
    const updatedProducts =
      womenWearProducts.filter(
        (item) => item.id !== id
      );

    setWomenWearProducts(updatedProducts);
  };

  return (
    <Routes>

      {/* TABLE */}
      <Route
        path="/"
        element={
          <ProductTable
            womenWearProducts={womenWearProducts}
            onAdd={() => {
              navigate("/products/add-product");
            }}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        }
      />

      {/* ADD PRODUCT */}
      <Route
        path="/add-product"
        element={
          <AddProduct
            onSave={handleSave}
            womenWearProducts={womenWearProducts}
            onCancel={() => {
              navigate("/products");
            }}
          />
        }
      />

      {/* UPDATE PRODUCT */}
      <Route
        path="/update-product/:id"
        element={
          <AddProduct
            onSave={handleSave}
            womenWearProducts={womenWearProducts}
            onCancel={() => {
              navigate("/products");
            }}
          />
        }
      />
    </Routes>
  );
};

export default Products;