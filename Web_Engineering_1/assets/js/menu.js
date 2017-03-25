var t=0;
function changemenu(x)
{
    var menus = ["pic0", "pasta", "meat","dessert"];
    var img=new Image();

    for (i=1;i<=6;i++)
    {
        var img = document.getElementById("menu-img"+i);
	    img.setAttribute("src","images/menu/"+menus[x-1]+i+".jpg");
    }
    
    for (i=1;i<=4;i++)
    {
        var label = "#menu-choise"+i;
        if (i==x)
            $(label).addClass("hover1");
        else
            $(label).removeClass("hover1");
    }
}

$(document).scroll(function(evt)
{
   // var el1 = document.getElementById("menu-choise1");
   // el1.setAttribute('hover',"true")
   // $("#menu-choise1").addClass("hover1")
    var allh = window.screen.availHeight;
//alert(allh);
	t=t+1
	var el = document.getElementById("menu-choise");
	
	
	var viewportOffset = el.getBoundingClientRect();
// these are relative to the viewport
	var top = viewportOffset.top;
	if (top<allh/8)
	{
	   changemenu(4);
	}
	else if (top<allh/8*2)
	{
	   changemenu(3);
	}
	else if (top<allh/8*3)
	{
	    changemenu(2);
	}
	else
	   changemenu(1);
	
	
	
	

});