/********************************************************************************
*  WEB322 – Assignment 05
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-04-03
*
*  Published URL: https://tame-erin-earthworm-tux.cyclic.app/
*
********************************************************************************/


const express = require('express');
const legoData = require('./modules/legoSets');
const path = require('path');

const app = express();
const PORT = 8000;

// Updating server.js file to "set" the "view engine" 
// setting to use the value: "ejs"
app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Parsing form data middleware
app.use(express.urlencoded({ extended: true }));

// legoData initialized
app.use(async (req, res, next) => {
    try {
        await legoData.initialize();
        next();
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error');
    }
});

// Set up Home route
app.get('/', (req, res) => {
    res.render("home");
});

// About route
app.get('/about', (req, res) => {
    res.render("about");
});

// Lego sets route
app.get('/lego/sets', async (req, res) => {
    try {
        const { theme } = req.query;
        let sets;

        if (theme) {
            sets = await legoData.getSetsByTheme(theme.toLowerCase());
        } else {
            sets = await legoData.getAllSets();
        }

        if (sets.length === 0) {
            // If no sets are found for the specified theme, render the 404 page
            return res.status(404).render("404", { message: "No sets found for the specified theme" });
        }

        // res.json(sets);
        res.render('sets', { sets });

    } catch (error) {
        console.error('Error:', error);
        res.status(404).render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
    }
});

// Lego set by ID route
app.get('/lego/sets/:setNum', async (req, res) => {
    const { setNum } = req.params;

    try {
        const set = await legoData.getSetByNum(setNum);

       
        res.render('set', { set });

    } catch (error) {
        console.error('Error:', error);
        res.status(404).render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
    }
});

// Route to render addSet view with themes
app.get('/lego/addSet', async (req, res) => {
    try {
        const themes = await legoData.getAllThemes();
        console.log('Themes:', themes); // Log retrieved themes
        res.render('addSet', { themes: themes });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).render("500", { message: `I'm sorry, but we have encountered the following error: ${error}` });
    }
});


// Route to handle form submission and add set
app.post('/lego/addSet', async (req, res) => {
    try {
        await legoData.addSet(req.body);
        res.redirect('/lego/sets');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).render("500", { message: `I'm sorry, but we have encountered the following error: ${error}` });
    }
});


// GET route to render the editSet view with set data and themes
app.get('/lego/editSet/:num', async (req, res) => {
    const { num } = req.params;

    try {
        // Retrieve set data by set number
        const set = await legoData.getSetByNum(num);
        // Retrieve all themes
        const themes = await legoData.getAllThemes();
        
        // Render the edit view with set data and themes
        res.render('editSet', { set, themes });
    } catch (error) {
        console.error('Error:', error);
        // Render 404 view with error message if there's a problem obtaining set or themes
        res.status(404).render('404', { message: error.message });
    }
});

// POST route to handle form submission and edit set
app.post('/lego/editSet', async (req, res) => {
    const { set_num, ...setData } = req.body;

    try {
        // Edit set using set_num and setData
        await legoData.editSet(set_num, setData);
        // Redirect to lego/sets route after successful edit
        res.redirect('/lego/sets');
    } catch (error) {
        console.error('Error:', error);
        // Render 500 view with error message if there's an error editing the set
        res.status(500).render('500', { message: `I'm sorry, but we have encountered the following error: ${error}` });
    }
});


// Route to delete a set
app.get('/lego/deleteSet/:num', async (req, res) => {
    const { num } = req.params;

    try {
        await legoData.deleteSet(num);
        res.redirect('/lego/sets');
    } catch (error) {
        console.error('Error:', error);
        res.render("500", { message: `I'm sorry, but we have encountered the following error: ${error}` });
    }
});


// 404 error route
app.get('/404', (req, res) => {
    res.render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render("404", { message: "I'm sorry, we're unable to find what you're looking for" });
});



// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
