function loadExistingTimeBlocks()
{
    //get time blocks string from local storage
    var timeBlocksString = localStorage.getItem("timeBlocks");
    //check to see if item is valid
    if(timeBlocksString != null)
    {
        //overwrite default object with object from storage
        var timeBlocks = JSON.parse(timeBlocksString);
    }
}

//create time blocks object
var timeBlocks = 
{
    nineAM:
    {
        label:"9AM",
        time:"9:00am",
        value: ""
    },
    tenAM:
    {
        label:"10AM",
        time:"10:00am",
        value: ""
    },
    elevenAM:
    {
        label:"11AM",
        time:"11:00am",
        value: ""
    },
    twelvePM:
    {
        label:"12PM",
        time:"12:00pm",
        value: ""
    },
    onePM:
    {
        label:"1PM",
        time:"1:00pm",
        value: ""
    },
    twoPM:
    {
        label:"2PM",
        time:"2:00pm",
        value: ""
    },
    threePM:
    {
        label:"3PM",
        time:"3:00pm",
        value: ""
    },
    fourPM:
    {
        label:"4PM",
        time:"4:00pm",
        value: ""
    },
    fivePM:
    {
        label:"5PM",
        time:"5:00pm",
        value: ""
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
        //compare newly created timeblock with current time
        checkTimeBlock(a,timeBlocks[a].time);
    }   
}

//create schedule block
function createTimeBlock(id,timeLabel)
{
    //get existing container from premade html
    var container = $(".container");
    //create dom elements to append to container
    var timeBlock = $(`<div id="${id}" class="time-block"></div>`);
    var row = $('<div class="row"></div>');
    var hour = $(`<h3 class="col-md-2 col-sm-12 hour">${timeLabel}</h3>`)
    var textArea = $(`<textarea id="text_${id}" class="col-md-8 col-sm-12 textarea">${timeBlocks[id].value}</textarea>`);
    var saveBtn = $(`<button id="save_${id}" class="col-md-2 col-sm-12 saveBtn"><i class="far fa-save"></i></button>`);
    //append respective elements
    row.append(hour);
    row.append(textArea);
    row.append(saveBtn);
    timeBlock.append(row);
    container.append(timeBlock);
}

//check timeblock against 
function checkTimeBlock(id,timeBlockStringTime)
{
    //get time block text area
    var textArea = $(`#text_${id}`);
    //create moment object from timeblock property
    var timeBlockTime = moment(timeBlockStringTime,'h:mma');
    //check for time in curent hour first
    if(moment().startOf('hour').isSame(timeBlockTime))
    {
        //remove past, future and add present class
        textArea.removeClass('past future').addClass('present');
    }else if(timeBlockTime.isBefore(currentTime))
    {
        //remove present, future and add past class
        textArea.removeClass('present future').addClass('past');
    }else
    {
        //remove present, past and add future class
        textArea.removeClass('present past').addClass('future');
    }
}

//create global variable that holds current time
var currentTime = moment();

//updates cuurent day time in main banner of application
function updateCurrentDay()
{
    var currentDay = $('#currentDay');
    currentDay.text(moment().format('dddd, MMMM Do YYYY'));
}

function onSaveBtn()
{
    var timeBlockProperty = this.id;
    //split out "save" from id to get timeblock id
    timeBlockProperty = timeBlockProperty.split("_")[1];//get second element from split array (first element is "save")
    //get text area value
    var textAreaValue = $(`#text_${timeBlockProperty}`).text();
    //update time block property with value from text area
    timeBlocks[timeBlockProperty].value = textAreaValue;
    //turn updated object into string
    var timeBlocksString = JSON.stringify(timeBlocks);
    //save string to local storage
    localStorage.setItem("timeBlocks",timeBlocksString);
}

//load time blocks from local storage
loadExistingTimeBlocks();
updateCurrentDay();
createAllTimeBlocks();
//get all save buttons
var saveButtons = $('.saveBtn');
//assign save function to all save buttons
saveButtons.click(onSaveBtn);
