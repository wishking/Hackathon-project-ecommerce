
export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        
        {
            name: "firstName",
            title: "First Name",
            type: "string",
        },
        {
            name: "lastName",
            title: "Last Name",
            type: "string",
        },
        {
            name: "address",
            title: "Address",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "city",
            title: "City",
            type: "string",
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string",
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string",
        },
        {
            name:"discount",
            title: "Discount",
            type: "number",
           
        },
        {
            name: "cartItems",
            title: "Cart Items",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: { type: "products" }, // Ensure "products" schema exists
                },
            ],
        },
        {
            name: "total",
            title: "Total",
            type: "number",
        },
        {
            name: "status",
            title: "Order status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Success", value: "success" },
                    { title: "Dispatch", value: "dispatch" },
                ],
                layout: "radio", // Optionally, change to "dropdown" if you prefer a dropdown
            },
            initialValue: "pending", // Default value
        },
    ],
};

