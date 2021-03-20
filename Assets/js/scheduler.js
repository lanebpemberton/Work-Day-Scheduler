//create schedule object
var timeBlocks = 
{
    nineAM:
    {
        time:"",
        data: ""
    },
    tenAM:
    {
        time:"",
        data: ""
    },
    elevenAM:
    {
        time:"",
        data: ""
    },
    twelvePM:
    {
        time:"",
        data: ""
    },
    onePM:
    {
        time:"",
        data: ""
    },
    twoPM:
    {
        time:"",
        data: ""
    },
    threePM:
    {
        time:"",
        data: ""
    },
    fourPM:
    {
        time:"",
        data: ""
    },
    fivePM:
    {
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
        createTimeBlock(a);
    }
}

//create schedule block
function createTimeBlock(id)
{
    var container = $(".container");
    var timeBlock = $(`<div id="${id}" class="time-block"></div>`);
    var row = $('<div class="row"></div>');
    var hour = $('<div class="hour"></div>')
    var textArea = $('<div class="textarea"></div>');
    var saveBtn = $('<div class="saveBtn"></div>');
    row.append(hour);
    row.append(textArea);
    row.append(saveBtn);
    timeBlock.append(row);
    container.append(timeBlock);
}

//loop through schedule object and set correct color
function loopScheduleBlocks()
{

}