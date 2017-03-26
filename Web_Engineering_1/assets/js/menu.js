var t=0;
function changemenu(x)
{
    
    var menus = ["pic0", "pasta", "meat","dessert"];
    var content = [ 
        ["Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner!",
    "Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not!",
    "Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal.",
    "Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil.",
    "A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce.",
    "This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos."]
    ,
    ["pasta   Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner!",
    "pastaChilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not!",
    "pastaEggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal.",
    "pastaPronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil.",
    "pastaA meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce.",
    "pastaThis vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos."]
,
["meat Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner!",
    "meatChilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not!",
    "meatEggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal.",
    "meatPronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil.",
    "meatA meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce.",
    "meatThis vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos."]
,
["dessert Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner! Tomato bruschetta is great way to get in one of your five a day, with beautifully ripe thickly cut tomatoes our tomato bruschetta recipe is a winner!",
    "dessertChilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not! Chilled, these beauties make a refreshing snack. You'll find yourself whipping them up whether you are cleansing or not!",
    "dessertEggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal. Eggplant (Solanum melongena), or aubergine, is a species of nightshade grown for its edible fruit. Eggplant is the common name in North America and Australia, but British English uses the French word aubergine. It is known in South Asia, Southeast Asia, and South Africa as brinjal.",
    "dessertPronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil. Pronounced “brusketta”, this classic Italian appetizer is a perfect way to capture the flavors of garden ripened tomatoes, fresh basil, garlic, and olive oil.",
    "dessertA meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce. A meatball is ground or minced meat rolled into a small ball, sometimes along with other ingredients, such as bread crumbs, minced onion, eggs, butter, and seasoning. Meatballs are cooked by frying, baking, steaming, or braising in sauce.",
    "dessertThis vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos. This vegetarian dish is delicious and versatile. You can eat it on its own, with rice, as a topping for nachos, or as a filling for tacos or burritos."]
];
    title = [
    ["Bruschetta with Tomatoes","Green Rolls","Eggplants","Bruschetta","Meatballs","Spicy Beans"],
    ["Penne 1","Spaghetti 1","Spaghetti 2","Penne 2","Penne 3","Spaghetti 3"],
    ["Fish 1","Fish 2","Elbow","Roasted Duck","Ribs","Beef"],
    ["Brownie","Cupcake","Little Cake","Cream Cake","Cake Roll","Chocolate"]
      
    ]
    
    
    var img=new Image();

    for (i=1;i<=6;i++)
    {
        var img = document.getElementById("menu-img"+i);
	    img.setAttribute("src","images/menu/"+menus[x-1]+i+".jpg");
	    var img2 = document.getElementById("modal_img"+i);
	    img2.setAttribute("src","images/menu/"+menus[x-1]+i+".jpg");
    }
    
    for (i=1;i<=6;i++)
    {
        var tmp = document.getElementById("modal_content"+i);
	    tmp.innerHTML=content[x-1][i-1];
	    var tmp2 = document.getElementById("modal_title"+i);
	    tmp2.innerHTML=title[x-1][i-1];
	    
	    var tmp3 = document.getElementById("menu_title"+i);
	    tmp3.innerHTML=title[x-1][i-1];
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
var p = 2;
$(document).ready(function(){
    
    
    $("#menu-choise1").hover(function(evt){
        p=1;
        changemenu(1);
     
    },function(evt)
    {
        p=2;
    });
    $("#menu-choise2").hover(function(evt){
        p=1;
        changemenu(2);
     
    },function(evt)
    {
        p=2;
    });
    $("#menu-choise3").hover(function(evt){
        p=1;
        changemenu(3);
     
    },function(evt)
    {
        p=2;
    });
    $("#menu-choise4").hover(function(evt){
        p=1;
        changemenu(4);
     
    },function(evt)
    {
        p=2;
    });
    
});



$("#menu-choise1").hover(function(){
    alert('s')
    $("#menu-choise1").css("background-color","yellow");
},function(){
    $("#menu-choise1").css("background-color","pink");
});


$(document).scroll(function(evt)
{
    if (p==1) return;
    var allh = window.screen.availHeight;
	t=t+1
	var el = document.getElementById("menu-choise");
	var viewportOffset = el.getBoundingClientRect();
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