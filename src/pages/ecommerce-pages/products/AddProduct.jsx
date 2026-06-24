import React, { useEffect, useRef, useState } from "react";
import imagePlacehloder from '../../../assets/images/image-placeholder.svg';
import { useParams } from "react-router-dom";
import {
  FiUpload,
  FiImage,
  FiTrash2,
  FiX
} from "react-icons/fi";
import { CheckboxField, DisabledField, FormHeading, InputFields, SectionLabel, SelectField, TextareaFields } from "../../../components/ui/FormFields";
const AddProduct = ({
  onSave,
  womenWearProducts,
  onCancel,
}) => {
  const [step, setStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [formDataNew, setFormDataNew] = useState({
    age0to24m: false,
    age2to4y: false,
    age5to7y: false,
    age8to12y: false,
  });
  const [formData, setFormData] = useState({
    id: null,
    product: "",
    subProduct: "",
    category: "",
    price: "",
    stockLevel: "",
    status: "Active",
    images: [],
    status: "Active",
    brand: "",
  });
  const uploadRef = useRef(null);
  const { id } = useParams();
  const editProduct =
    womenWearProducts.find(
      (item) => item.id === Number(id)
    );
  // bind edit data to inputs
  React.useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    }
  }, [editProduct]);

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    }
  }, [editProduct]);

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    }
  }, [editProduct]);

  const handleRemoveImage = (indexToRemove) => {
    const updatedImages = formData.images.filter(
      (_, index) => index !== indexToRemove
    );

    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));

    // reset selected image
    if (selectedImage >= updatedImages.length) {
      setSelectedImage(0);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imageUrls],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // add/update product
  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="w-full ">
      {/* heading */}
      {/* <div className="mb-lg">
        <nav className="flex items-center gap-2 text-label-sm text-on-surface-variant mb-2">
          <span>Products</span>

          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>

          <span className="text-on-surface font-semibold">
            Add New Product
          </span>
        </nav>

        <h2 className="font-h1 text-h1 text-on-surface">
          {editProduct ? "Update Product" : "Add New Product"}
        </h2>
      </div> */}

      {/* steps */}
      <div className="bg-white px-8 pt-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto flex gap-12">

          {/* Step 1 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 1 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 1 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 1
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 1 ? "text-black" : "text-slate-400"
                }`}
            >
              Basic Info
            </span>
          </div>

          {/* Step 2 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 2 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 2 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 2
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 2 ? "text-black" : "text-slate-400"
                }`}
            >
              Pricing & Inventory
            </span>
          </div>

          {/* Step 3 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 3 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 3 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 3
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 3 ? "text-black" : "text-slate-400"
                }`}
            >
              Images & Media
            </span>
          </div>

          {/* Step 4 */}
          <div
            className={`flex flex-col gap-2 pb-4 border-b-2 ${step === 4 ? "border-black" : "border-transparent"
              }`}
          >
            <div
              className={`uppercase text-xs ${step >= 4 ? "text-black" : "text-slate-400"
                }`}
            >
              Step 4
            </div>

            <span
              className={`font-title-sm text-sm font-bold ${step >= 4 ? "text-black" : "text-slate-400"
                }`}
            >
              SEO & Tags
            </span>
          </div>

        </div>
      </div>

      <div className="flex-1 p-gutter max-w-6xl w-full mx-auto space-y-8 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          {/* left */}
          <div className="lg:col-span-8 space-y-lg">
            {/* STEP 1 */}
            {step === 1 && (
              <>
                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <FormHeading
                    icon="Description"
                    title="Product Details"
                  />

                  <div className="space-y-md">


                    <InputFields
                      className={`flex flex-col gap-2`}
                      label="product name"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.product}
                      placeholder="Product Name"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />
                    {/* 
                    <InputFields 
                    className={`flex flex-col gap-2`}
                    label="Sub Product" 
                    labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                    type="text" onChange={handleChange} 
                    value={formData.subProduct} 
                    placeholder="Sub Product" 
                    inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    /> */}


                    <TextareaFields
                      className={`flex flex-col gap-2`}
                      label="Description"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.description}
                      placeholder="Sub Product"
                      textareaClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />

                  </div>
                </section>

                <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                  <FormHeading
                    icon="child_care"
                    title="Kids Specific Classification"
                  />



                  <div className="grid grid-cols-2 gap-md mb-8">
                    <DisabledField
                      className={`flex flex-col`}
                      label="product name"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      type="text" onChange={handleChange}
                      value={formData.product}
                      placeholder="Product Name"
                      inputClass={`w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none`}
                    />
                    <SelectField
                      label="Status"
                      name="status"
                      labelClass={`block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase`}
                      value={formData.status}
                      onChange={handleChange}
                      options={[
                        "Active",
                        "Inactive",
                        "Draft",
                      ]}
                      placeholder="Select Status"
                      className="flex flex-col"
                      selectClass="w-full bg-white border border-slate-200 rounded-lg p-3 text-body-base focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div>
                    <SectionLabel
                      label="AGE GROUP (SELECT ALL THAT APPLY)"
                    />
                    <div className="grid grid-cols-4 gap-4">
                      <CheckboxField
                        label="0-24m"
                        checked={formData.age0to24m}
                        onChange={(e) =>
                          setFormDataNew({
                            ...formData,
                            age0to24m: e.target.checked,
                          })
                        }
                      />

                      <CheckboxField
                        label="2-4y"
                        checked={formData.age2to4y}
                        onChange={(e) =>
                          setFormDataNew({
                            ...formData,
                            age2to4y: e.target.checked,
                          })
                        }
                      />

                      <CheckboxField
                        label="5-7y"
                        checked={formData.age5to7y}
                        onChange={(e) =>
                          setFormDataNew({
                            ...formData,
                            age5to7y: e.target.checked,
                          })
                        }
                      />

                      <CheckboxField
                        label="8-12y"
                        checked={formData.age8to12y}
                        onChange={(e) =>
                          setFormDataNew({
                            ...formData,
                            age8to12y: e.target.checked,
                          })
                        }
                      />
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                <h3 className="font-h3 text-h3 text-on-surface mb-md">
                  Pricing & Inventory
                </h3>

                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface">
                      Price
                    </label>

                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Price"
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface">
                      Stock Level
                    </label>

                    <input
                      type="number"
                      name="stockLevel"
                      value={formData.stockLevel}
                      onChange={handleChange}
                      placeholder="Stock"
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg"
                    />
                  </div>
                </div>
              </section>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                <h3 className="font-h3 text-h3 text-on-surface mb-md">
                  Images & Media
                </h3>

                <div className="space-y-lg">

                  {/* MAIN IMAGE + THUMBNAILS */}
                  <div className="flex flex-col gap-4">

                    {/* MAIN PREVIEW */}
                    <div
                      onClick={() => uploadRef.current.click()}
                      className="relative flex-1 h-[320px] rounded-xl overflow-hidden border border-outline-variant/30 cursor-pointer group bg-surface-container-low"
                    >
                      {formData.images?.length > 0 ? (
                        <img
                          src={formData.images[selectedImage]}
                          alt="preview"
                          className="w-full  object-cover h-[300px]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                          <FiImage size={60} />
                          <p>No Image Selected</p>
                        </div>
                      )}

                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-3">
                        <FiUpload className="text-white" size={45} />

                        <p className="text-white font-semibold">
                          Upload Images
                        </p>
                      </div>

                      {/* hidden input */}
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        ref={uploadRef}
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>

                    {/* THUMBNAILS */}
                    <div className="flex gap-3 overflow-auto">
                      {formData.images?.map((img, index) => (
                        <div
                          key={index}
                          className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 flex-shrink-0 ${selectedImage === index
                            ? "border-primary"
                            : "border-outline-variant"
                            }`}
                        >
                          {/* THUMBNAIL IMAGE */}
                          <img
                            src={img}
                            alt={`thumb-${index}`}
                            onClick={() => setSelectedImage(index)}
                            className="w-full h-full object-cover cursor-pointer"
                          />

                          {/* DELETE BUTTON */}
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-500 transition"
                          >
                            <FiX size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface">
                      Status
                    </label>

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
              </section>
            )}
            {step === 4 && (
              <section className="bg-white rounded-xl ambient-shadow p-lg border border-outline-variant/30">
                <h3 className="font-h3 text-h3 text-on-surface mb-md">
                  Images & Media 4
                </h3>

                <div className="space-y-lg">

                  {/* MAIN IMAGE + THUMBNAILS */}
                  <div className="flex flex-col gap-4">

                    {/* MAIN PREVIEW */}
                    <div
                      onClick={() => uploadRef.current.click()}
                      className="relative flex-1 h-[320px] rounded-xl overflow-hidden border border-outline-variant/30 cursor-pointer group bg-surface-container-low"
                    >
                      {formData.images?.length > 0 ? (
                        <img
                          src={formData.images[selectedImage]}
                          alt="preview"
                          className="w-full  object-cover h-[300px]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                          <FiImage size={60} />
                          <p>No Image Selected</p>
                        </div>
                      )}

                      {/* HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-3">
                        <FiUpload className="text-white" size={45} />

                        <p className="text-white font-semibold">
                          Upload Images
                        </p>
                      </div>

                      {/* hidden input */}
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        ref={uploadRef}
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>

                    {/* THUMBNAILS */}
                    <div className="flex gap-3 overflow-auto">
                      {formData.images?.map((img, index) => (
                        <div
                          key={index}
                          className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 flex-shrink-0 ${selectedImage === index
                            ? "border-primary"
                            : "border-outline-variant"
                            }`}
                        >
                          {/* THUMBNAIL IMAGE */}
                          <img
                            src={img}
                            alt={`thumb-${index}`}
                            onClick={() => setSelectedImage(index)}
                            className="w-full h-full object-cover cursor-pointer"
                          />

                          {/* DELETE BUTTON */}
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-red-500 transition"
                          >
                            <FiX size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* STATUS */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface">
                      Status
                    </label>

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg"
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* right */}
          <div className="lg:col-span-4 space-y-lg">
            <div className="rounded-xl overflow-hidden border border-outline-variant/30 ambient-shadow">
              <div className="flex  gap-3 overflow-auto">
                {formData.images?.length > 0 ? (
                  <img
                    src={formData.images[selectedImage]}
                    alt="preview"
                    className="w-full  object-cover h-auto"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-on-surface-variant">
                    <FiImage size={60} />
                    <p>No Image Selected</p>
                  </div>
                )}
              </div>

              <div className="p-md bg-white">
                <p className="text-[10px] uppercase tracking-wider text-outline font-bold mb-1">
                  Preview Thumbnail
                </p>

                <p className="text-body-sm text-on-surface-variant">
                  <span className="font-bold">Name : </span>{formData.product || "Product Preview"}
                </p>
                <p className="text-body-sm text-on-surface-variant">
                  <span className="font-bold">Description : </span>{formData.description || "Product Description"}
                </p>
                <p className="text-body-sm text-on-surface-variant">
                  <span className="font-bold">Price : </span> <span className="font-medium">₹</span>{formData.price || "Price"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer buttons */}
      <div className="mt-2xl flex items-center justify-between pt-lg border-t border-outline-variant/30">
        <button
          className="px-6 py-3 border border-outline text-on-surface-variant font-label-md rounded-lg"
          onClick={() => {
            if (step === 1) {
              onCancel();
            } else {
              setStep((prev) => Math.max(prev - 1, 1));
            }
          }}
        >
          {step === 1 ? "Cancel" : "Back"}
        </button>

        <div className="flex gap-4">
          {step < 4 ? (
            <button
              onClick={() => setStep((prev) => prev + 1)}
              className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg ambient-shadow-mid flex items-center gap-2"
            >
              {step === 1
                ? "Next: Pricing"
                : "Next: Images"}

              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-primary text-on-primary font-label-md rounded-lg ambient-shadow-mid flex items-center gap-2"
            >
              {editProduct ? "Update Product" : "Add Product"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;