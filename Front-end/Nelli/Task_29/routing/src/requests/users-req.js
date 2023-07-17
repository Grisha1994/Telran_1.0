export const getUsers = callback => {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => callback(data.users))
}


export const getSingleUser = (id, callback) => {
    fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data => callback(data))
}

