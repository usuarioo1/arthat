'use client'
import ProductEditor from "../editordeproductos/page";

const EditProductPage = () => {
    const handleProductUpdate = (updatedProduct) => {
        console.log('Product updated:', updatedProduct);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ProductEditor onUpdate={handleProductUpdate} />
        </div>
    );
};

export default EditProductPage;
