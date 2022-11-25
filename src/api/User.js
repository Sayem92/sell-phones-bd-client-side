export const userInfoSave = (name, email, seller) => {
    const user = {
        name,
        email,
        sellerAccount: seller
    }

    fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log("save user", data);
            // toast.success('Save user data!');
        })
}