function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Sai",
                age: 21
            });
        }, 2000);
    });
}

async function getUser() {
    console.log("Fetching user...");
    let user = await fetchUser();
    console.log(user);
}

getUser();