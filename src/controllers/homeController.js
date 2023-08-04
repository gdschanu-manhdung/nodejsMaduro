import db from "../models";
import CRUDservice from "../services/CRUDservice";

const getHomePage = async (req, res) => {
    try {
        let data = await db.users.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.error(e);
    }

}

const getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

const getCRUD = (req, res) => {
    return res.render('test/crud.ejs')
}

const postCRUD = (req, res) => {
    CRUDservice.createUser(req.body);
    return res.send('hi');
}

const readCRUD = async (req, res) => {
    let listUsers = await CRUDservice.getAllUser();
    console.log(listUsers)
    return res.render('test/readcrud.ejs', {
        data: listUsers
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    readCRUD: readCRUD
}