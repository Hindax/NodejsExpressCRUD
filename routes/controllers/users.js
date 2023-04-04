import {v4 as uuidv4 } from 'uuid';

export const getUsers = (req, res) => {

    res.send(users);
};

export const createUser = (req, res) => {

    const user = req.body;
    console.log(req.body);

    users.push({...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} was added to the Database`);
};

export const getUser = (req,res) => {


    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id); // if the id of the user found is same id in the database

    res.send(foundUser);

};

export const deleteUser = (req,res) => {
    const { id } = req.params;

    // users whose id is not the same as the one provided, will be kept
    users = users.filter((user) => user.id !== id);
    res.send(`User wil the id: ${id} deleted from the database.`);

};


export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    // find user with the same id as the one in the search the id searched should match the user.id
    const userToUpdate = users.find((user) => user.id === id );

    if (firstName) userToUpdate.firstName = firstName;
    if (lastName) userToUpdate.lastName = lastName;
    if (age) userToUpdate.age = age;

    res.send(`User with the id: ${id} has been updated`);


};

