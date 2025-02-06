import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const cart = {
    products: [
        {            
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 150,
            image: "https://picsum.photos/150?random=1",
        },
        {            
            name: "Jeans",
            size: "L",
            color: "Blue",
            price: 500,
            image: "https://picsum.photos/150?random=2",
        },
    ],
    totalPrice: 195,
};

const Checkout = () => {
    const navigate = useNavigate();
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            {/* Left Section */}
        </div>
    )
}

export default Checkout
