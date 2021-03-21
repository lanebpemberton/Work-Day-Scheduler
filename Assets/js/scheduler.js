//create schedule object
var timeBlocks = 
{
    nineAM:
    {
        label:"9AM",
        time:"9:00am",
        data: ""
    },
    tenAM:
    {
        label:"10AM",
        time:"10:00am",
        data: ""
    },
    elevenAM:
    {
        label:"11AM",
        time:"11:00am",
        data: ""
    },
    twelvePM:
    {
        label:"12PM",
        time:"12:00pm",
        data: ""
    },
    onePM:
    {
        label:"1PM",
        time:"1:00pm",
        data: ""
    },
    twoPM:
    {
        label:"2PM",
        time:"2:00pm",
        data: ""
    },
    threePM:
    {
        label:"3PM",
        time:"3:00pm",
        data: ""
    },
    fourPM:
    {
        label:"4PM",
        time:"4:00pm",
        data: ""
    },
    fivePM:
    {
        label:"5PM",
        time:"5:00pm",
        data: ""
    }
}

//loop time object and create time blocks
function createAllTimeBlocks()
{
    //loop schedule object
    for(var a in timeBlocks)
    {
        //create schedule block and pass in each property as id
        createTimeBlock(a,timeBlocks[a].label);
    }   
}

//create schedule block
function createTimeBlock(id,timeLabel)
{
    var container = $(".container");
    var timeBlock = $(`<div id="${id}" class="time-block"></div>`);
    var row = $('<div class="row"></div>');
    var hour = $(`<h3 class="col-md-2 col-sm-12 hour">${timeLabel}</h3>`)
    var textArea = $(`<textarea id="text_${id}" class="col-md-8 col-sm-12 textarea"></textarea>`);
    var saveBtn = $(`<button id="save_${id}" class="col-md-2 col-sm-12 saveBtn"><i class="far fa-save"></i></button>`);
    //inputGroup.append(input);
    row.append(hour);
    row.append(textArea);
    //row.append(inputGroup);
    row.append(saveBtn);
    timeBlock.append(row);
    container.append(timeBlock);
}

//loop through time object and set correct color
function loopTimeBlocks()
{

}

//create global variable that holds current time
var currentTime = moment().format('h:mma');

//updates cuurent day time in main banner of application
function updateCurrentDay()
{
    var currentDay = $('#currentDay');
    currentDay.text(moment().format('dddd, MMMM Do YYYY'));
}

updateCurrentDay();
createAllTimeBlocks();
loopTimeBlocks();