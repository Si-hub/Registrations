function regNumbers(){

    var allItems = [];

    function clearItems(){
        return allItems = [];
    }

    function returnItems(){  
        return allItems;  
    }
    return{
        clearItems,
        returnItems,
    }
};