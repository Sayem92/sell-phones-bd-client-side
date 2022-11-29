import toast from "react-hot-toast";

export const userInfoSave = (name, email, seller, photoURL) => {
    const user = {
        name,
        email,
        sellerAccount: seller,
        photoURL,
    }

    fetch(`https://assignment-12-server-eosin.vercel.app/users`, {
        method: "PUT",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log("save user", data);
            toast.success('Save user data!');
        })
}