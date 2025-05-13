/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Diana Zhou Kuang Student ID: 118446228 Date: 2024-02-18
*
********************************************************************************/

// part 1. data for the assignment
// ensure that setData is an array 

const setData = 
[
    
];

module.exports = setData;


/*
const setData = [
    {
        "1": "543",
        "43": "7",
        "1965": "2012",
        "001-1": "8833-13",
        "Gears": "Red Cheerleader",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-13.jpg"
    },
    {
        "1": "67",
        "43": "12",
        "1965": "1979",
        "001-1": "0011-2",
        "Gears": "Town Mini-Figures",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0011-2.jpg"
    },
    {
        "1": "199",
        "43": "0",
        "1965": "1987",
        "001-1": "0011-3",
        "Gears": "Castle 2 for 1 Bonus Offer",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0011-3.jpg"
    },
    {
        "1": "143",
        "43": "12",
        "1965": "1979",
        "001-1": "0012-1",
        "Gears": "Space Mini-Figures",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0012-1.jpg"
    },
    {
        "1": "143",
        "43": "12",
        "1965": "1979",
        "001-1": "0013-1",
        "Gears": "Space Mini-Figures",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0013-1.jpg"
    },
    {
        "1": "143",
        "43": "2",
        "1965": "1979",
        "001-1": "0014-1",
        "Gears": "Space Mini-Figures",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0014-1.jpg"
    },
    {
        "1": "143",
        "43": "18",
        "1965": "1979",
        "001-1": "0015-1",
        "Gears": "Space Mini-Figures",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0015-1.jpg"
    },
    {
        "1": "189",
        "43": "15",
        "1965": "1979",
        "001-1": "0016-1",
        "Gears": "Castle Mini Figures",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/0016-1.jpg"
    },
    {
        "1": "1",
        "43": "3",
        "1965": "1965",
        "001-1": "002-1",
        "Gears": "4.5V Samsonite Gears Motor Set",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/002-1.jpg"
    },
    {
        "1": "497",
        "43": "4",
        "1965": "2013",
        "001-1": "002253963-1",
        "Gears": "Legend of Chima: Corbeaux et Gorilles",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/002253963-1.jpg"
    },
    {
        "1": "366",
        "43": "403",
        "1965": "1966",
        "001-1": "003-1",
        "Gears": "Master Mechanic Set",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/003-1.jpg"
    },
    {
        "1": "366",
        "43": "35",
        "1965": "1965",
        "001-1": "005-1",
        "Gears": "Basic Building Set in Cardboard",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/005-1.jpg"
    },
    {
        "1": "366",
        "43": "0",
        "1965": "1967",
        "001-1": "005-2",
        "Gears": "Discovery Set",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/005-2.jpg"
    },
    {
        "1": "67",
        "43": "0",
        "1965": "1985",
        "001-1": "00-6",
        "Gears": "Special Offer",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/00-6.jpg"
    },
    {
        "1": "366",
        "43": "57",
        "1965": "1965",
        "001-1": "010-1",
        "Gears": "Basic Building Set in Cardboard",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/010-1.jpg"
    },
    {
        "1": "542",
        "43": "7",
        "1965": "2012",
        "001-1": "8831-3",
        "Gears": "Bunny Suit Guy",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-3.jpg"
    },
    {
        "1": "542",
        "43": "11",
        "1965": "2012",
        "001-1": "8831-4",
        "Gears": "Bride",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-4.jpg"
    },
    {
        "1": "542",
        "43": "7",
        "1965": "2012",
        "001-1": "8831-5",
        "Gears": "Ocean King",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-5.jpg"
    },
    {
        "1": "542",
        "43": "7",
        "1965": "2012",
        "001-1": "8831-6",
        "Gears": "Bagpiper",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-6.jpg"
    },
    {
        "1": "542",
        "43": "8",
        "1965": "2012",
        "001-1": "8831-7",
        "Gears": "Daredevil",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-7.jpg"
    },
    {
        "1": "542",
        "43": "7",
        "1965": "2012",
        "001-1": "8831-8",
        "Gears": "Galaxy Patrol",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-8.jpg"
    },
    {
        "1": "542",
        "43": "6",
        "1965": "2012",
        "001-1": "8831-9",
        "Gears": "Tennis Ace",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8831-9.jpg"
    },
    {
        "1": "1",
        "43": "86",
        "1965": "1988",
        "001-1": "8832-1",
        "Gears": "Roadster",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8832-1.jpg"
    },
    {
        "1": "543",
        "43": "0",
        "1965": "2012",
        "001-1": "8833-0",
        "Gears": "Series 8 - Random Bag",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-0.jpg"
    },
    {
        "1": "543",
        "43": "7",
        "1965": "2012",
        "001-1": "8833-10",
        "Gears": "Santa",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-10.jpg"
    },
    {
        "1": "543",
        "43": "5",
        "1965": "2012",
        "001-1": "8833-11",
        "Gears": "Vampire Bat",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-11.jpg"
    },
    {
        "1": "543",
        "43": "7",
        "1965": "2012",
        "001-1": "8833-12",
        "Gears": "DJ",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-12.jpg"
    },
    {
        "1": "543",
        "43": "7",
        "1965": "2012",
        "001-1": "8833-14",
        "Gears": "Actor",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-14.jpg"
    },
    {
        "1": "543",
        "43": "7",
        "1965": "2012",
        "001-1": "8833-15",
        "Gears": "Pirate Captain",
        "https://cdn.rebrickable.com/media/sets/001-1.jpg": "https://cdn.rebrickable.com/media/sets/8833-15.jpg"
    }
];

module.exports = setData;
*/

