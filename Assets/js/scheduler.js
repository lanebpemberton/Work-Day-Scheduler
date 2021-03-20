//create schedule object
var timeBlocks = 
{
    nineAM:
    {
        label:"9AM",
        time:"",
        data: ""
    },
    tenAM:
    {
        label:"10AM",
        time:"",
        data: ""
    },
    elevenAM:
    {
        label:"11AM",
        time:"",
        data: ""
    },
    twelvePM:
    {
        label:"12PM",
        time:"",
        data: ""
    },
    onePM:
    {
        label:"1PM",
        time:"",
        data: ""
    },
    twoPM:
    {
        label:"2PM",
        time:"",
        data: ""
    },
    threePM:
    {
        label:"3PM",
        time:"",
        data: ""
    },
    fourPM:
    {
        label:"4PM",
        time:"",
        data: ""
    },
    fivePM:
    {
        label:"5PM",
        time:"",
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
    var textArea = $('<textarea class="col-md-8 col-sm-12 textarea"></textarea>');
    //var inputGroup = $('<div class="input-group col-md-8 col-sm-12"></div>');
    //var input = $('<input type="text" class="form-control" placeholder="Enter schedule">');
    var saveBtn = $('<button class="col-md-2 col-sm-12 saveBtn"><i class="far fa-save"></i></button>');
    //inputGroup.append(input);
    row.append(hour);
    row.append(textArea);
    //row.append(inputGroup);
    row.append(saveBtn);
    timeBlock.append(row);
    container.append(timeBlock);
}

//loop through schedule object and set correct color
function loopScheduleBlocks()
{

}

function updateCurrentDay()
{
    var currentDay = $('#currentDay');
    currentDay.text(moment().format('dddd, MMMM Do YYYY'));
}

createAllTimeBlocks();
updateCurrentDay();