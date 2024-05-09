import fs from 'fs';
export const getUser = (req, res) => {
    const { userid } = req.params;
    var userStringData = fs.readFileSync('./mocks/user.mock.json').toString()
    var userJson = JSON.parse(userStringData);
    res.status(200).send(userJson[userid])
}

export const createUser = (req, res) => {
    var userStringData = fs.readFileSync('./mocks/user.mock.json').toString()
    var usersJson = JSON.parse(userStringData);
    var newId = Math.random();
    usersJson[newId] = req.body;
    fs.writeFileSync('./mocks/user.mock.json', JSON.stringify(usersJson));

    var newObj = { ...req.body, Id: newId }
    //write the body data in the file 
    res.status(200).send(newObj)
}

export const updateUser = (Req, Res) => {
    const { userid } = Req.params;
    var userStringData = fs.readFileSync('./mocks/user.mock.json').toString()
    var usersJson = JSON.parse(userStringData);
    usersJson[userid] = Req.body;
    fs.writeFileSync('./mocks/user.mock.json', JSON.stringify(usersJson));
    
    Res.status(200).send(usersJson[userid])
}

export const deleteUser = (req, res) => {
    const{userid} = req.params;
    console.log("userid is:", userid)

    var userStringData = fs.readFileSync('./mocks/user.mock.json').toString()
    var userJson = JSON.parse(userStringData);
    var dataToDelete = userJson[userid];
    delete userJson[userid];
    res.status(200).send(dataToDelete);
    fs.writeFileSync('./mocks/user.mock.json', JSON.stringify(userJson));
    
}


