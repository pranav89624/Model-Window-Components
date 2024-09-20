'use strict';

// -----------------------------
// Variable Declaration for avoiding repetative selection of elements.

const model = $(".model");
const overlay = $(".overlay");
const buttonCloseModel = $(".close-modal");
const buttonsOpenModel = $(".show-modal");


// -----------------------------
// Model Window Opening Function 

const openModel = function ()
{
    model.removeClass("hidden");
    overlay.removeClass("hidden");
}

// -----------------------------
// Model Window Closing Function 

const closeModel = function ()
{
    model.addClass("hidden");
    overlay.addClass("hidden");
}

// -----------------------------
// Opening Model Window on Clicking Buttons. 

for (let i = 0 ; i<buttonsOpenModel.length; i++)
{
    buttonsOpenModel.on("click" ,openModel);
}

// -----------------------------
// CLosing Model Window on Clicking Cross Button.

buttonCloseModel.on("click" ,closeModel);
overlay.on("click" , closeModel);

// -----------------------------
// CLosing Model Window on Clicking Escape (Esc) Keyboard Button.

$(document).on("keydown" , function(e)
{
    if (e.key === 'Escape' && (!model.hasClass("hidden")) )
    {
        closeModel();
    }
});