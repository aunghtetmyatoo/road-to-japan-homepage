function getLangResources(){
    
    // Define arrays how many language you want to translate
    var mm = new Array();
    var en = new Array();
    var jp = new Array();

    mm['home'] = "ပင်မ";
    en['home'] = "Home"; 
    jp['home'] = "ホーム";

    mm['lng'] = "မြန်မာစာ";
    en['lng'] = "English"; 
    jp['lng'] = "日本語";
    
    // tr['h1'] = "Merhaba H1 tag"; 
    // en['h1'] = "Hi H1 tag";

    // tr['h2'] = "Merhaba H2 tag"; 
    // en['h2'] = "Hi H2 tag";

    // tr['h3'] = "Merhaba H3 tag"; 
    // en['h3'] = "Hi H3 tag";

    // mm['my_button'] = "myanmar"; 
    // jp['my_button'] = "japan";
    
    // Added new array defined arrays.
    var resources = new Array();
    resources['mm'] = mm;
    resources['en'] = en;
    resources['jp'] = jp;
    
    return resources;
}

function changeLanguage(lng){
var resources = getLangResources()[lng];

$("a[name='home']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});



$("a[name='lng']").each(function(i, elt){
    $(elt).text(resources[$(elt).attr("caption")]);
});
// $("h2[name='translate']").each(function(i, elt){
//     $(elt).text(resources[$(elt).attr("caption")]);
// });
// $("h3[name='translate']").each(function(i, elt){
//     $(elt).text(resources[$(elt).attr("caption")]);
// });
// $("span[name='translate']").each(function(i, elt){
//     $(elt).text(resources[$(elt).attr("caption")]);
// });
// $("p[name='translate']").each(function(i, elt){
//     $(elt).text(resources[$(elt).attr("caption")]);
// });
// $("button[name='translate']").each(function(i, elt){
//     $(elt).text(resources[$(elt).attr("caption")]);
// });
}


$(function() { 
    // Default Language
    changeLanguage("jp");
 
    $("a#mm_button").click(function(){
        changeLanguage("mm");
    });

    $("a#en_button").click(function(){
        changeLanguage("en");
    });

    $("a#jp_button").click(function(){
        changeLanguage("jp");
    });
});
