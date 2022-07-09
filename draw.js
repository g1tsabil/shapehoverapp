var totalShapes = 0;
var lastSqId = 1;
var lastCircId = 1;

function clearSelection() 
{
    var rand = document.getElementById("r");
    var sq = document.getElementById("s");
    var circ = document.getElementById("c");
    var btn = document.getElementById("gen");

    rand.checked = false;
    sq.checked = false;
    circ.checked = false;
    btn.disabled = true;
}

function disable()
{
    var rand = document.getElementById("r");
    var sq = document.getElementById("s");
    var circ = document.getElementById("c");
    var btn = document.getElementById("gen");

    rand.disabled = true;
    sq.disabled = true;
    circ.disabled = true;
    btn.disabled = false;
}

function drawSquare()
{
    for (var i = 1; i <= 100; i++)
    {
        var parent = document.getElementById("container");
        var sq = document.createElement("div");

        var x = Math.floor(Math.random() * 401);
        var y = Math.floor(Math.random() * 401);
        var r = (Math.random()*255) + 1;
        var g = (Math.random()*255) + 1;
        var b = (Math.random()*255) + 1;

        var squareId = "sq" + lastSqId;

        sq.setAttribute("style", "position:absolute;top:" + y + "px;left:" + x + "px;width:50px;height:50px;background-color:rgb(" + r + "," + g + "," + b + ");");
        sq.setAttribute("id", squareId);
        sq.setAttribute("onmouseover", "hide(this.id)");

        parent.appendChild(sq);
        totalShapes += 1;
        lastSqId += 1;
    }
    disable();
}

function drawCircle()
{
    for (var i = 1; i <= 100; i++)
    {
        var parent = document.getElementById("container");
        var circ = document.createElement("div");

        var x = Math.floor(Math.random() * 401);
        var y = Math.floor(Math.random() * 401);
        var r = (Math.random()*255) + 1;
        var g = (Math.random()*255) + 1;
        var b = (Math.random()*255) + 1;

        var circleId = "circ" + lastCircId;

        circ.setAttribute("style", "position:absolute;top:" + y + "px;left:" + x + "px;width:50px;height:50px;background-color:rgb(" + r + "," + g + "," + b + ");border-radius:50%");
        circ.setAttribute("id", circleId);
        circ.setAttribute("onmouseover", "hide(this.id)");

        parent.appendChild(circ);
        totalShapes += 1;
        lastCircId += 1;
    }
    disable();
}

//add function to check if to draw circle of square
function drawRand()
{
    var rand = Math.floor(Math.random()*2);
    if (rand == 0)
    {
        drawSquare();
    }
    else if (rand == 1)
    {
        drawCircle();
    }
    disable();
}

function hide(id)
{   
    var child =  document.getElementById(id);
    totalShapes -= 1;
    if (totalShapes == 0)
    {
        alert("Last one!");
    }
    child.remove();
}