import React from "react";

export default function PaymentPage() {
    return (
        <div className="container w-1/2 mx-auto px-4">
            <h1 className="text-2xl font-bold my-4">
                Payment Page
            </h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 block w-full rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium">
                        Expiry Date
                    </label>
                    <input
                        type="month"
                        id="expiryDate"
                        name="expiryDate"
                        required
                        className="mt-1 block w-full rounded-md shadow-sm"
                    />
                </div>
                <div>
                    <label htmlFor="cvv" className="block text-sm font-medium">
                        CVV
                    </label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        required
                        placeholder="123"
                        className="mt-1 block w-full rounded-md shadow-sm"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Pay Now
                </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
                By proceeding, you agree to our Terms of Service and Privacy Policy.
            </p>
        </div>
    );
}