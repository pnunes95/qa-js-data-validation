const fetchUsers = async () => {
    return [
        { id: 1, name: "Pedro", age: 25, active: true },
        { id: 2, name: "Ana", age: 17, active: false },
        { id: 3, name: "João", age: 30, active: true },
        { id: 4, name: "Maria", age: 22, active: true },
        { id: 5, name: "Carlos", age: 15, active: false },
    ];
};

const processUsers = async (fetchFn = fetchUsers) => {
    try {
        let users = await fetchFn();

        const activeAdults = users.filter(user => user.active && user.age >= 18)
            .map(user => user.name);

        const totalActive = users.filter(user => user.active).length;

        const minorsCount = users.filter(user => user.age < 18).length;

        const averageAge = Math.round((users.reduce((accumulator, user) => accumulator + user.age, 0) / users.length) * 100) / 100;


        return {activeAdults, totalActive, minorsCount, averageAge};
    }
    catch (error) {
        throw new Error(`API ERROR: ${error.message}`);
    }

}

module.exports = {
    fetchUsers,
    processUsers
};