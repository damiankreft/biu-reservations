import React from "react";
export default function AppTitle() {
    return (
        <div className="text-2xl font-bold text-center my-4">
            <h1>biuking.com</h1>
            <p className="text-sm text-gray-500">Your one-stop solution for managing bookings</p>
        </div>
    );
}

/* v1

<h1 className="text-xl font-semibold p-2">
    {t('appTitle', {
        defaultValue: 'biuking.com',
    })}
</h1>

*/