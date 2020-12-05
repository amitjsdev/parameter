     function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
    if(getUrlVars()["q"].toLowerCase() == "rolex" || getUrlVars()["q"].toLowerCase() == "milgauss" || getUrlVars()["q"].toLowerCase() == "gmt-master+ii" || getUrlVars()["q"].toLowerCase() == "gmt-master+11" || getUrlVars()["q"].toLowerCase() == "lady+date-just" || getUrlVars()["q"].toLowerCase() == "day-date" || getUrlVars()["q"].toLowerCase() == "sky-dweller" || getUrlVars()["q"].toLowerCase() == "datejust" || getUrlVars()["q"].toLowerCase() == "pearlmaster" || getUrlVars()["q"].toLowerCase() == "oyster+perpetual" || getUrlVars()["q"].toLowerCase() == "air-king" || getUrlVars()["q"].toLowerCase() == "cosmograph+daytona" || getUrlVars()["q"].toLowerCase() == "submariner" || getUrlVars()["q"].toLowerCase() == "sea-dweller" || getUrlVars()["q"].toLowerCase() == "gmt-master+II" || getUrlVars()["q"].toLowerCase() == "yacht-master" || getUrlVars()["q"].toLowerCase() == "explorer" || getUrlVars()["q"].toLowerCase() == "cellini" || getUrlVars()["q"].toLowerCase() == "cosmograph" || getUrlVars()["q"].toLowerCase() == "daytona" || getUrlVars()["q"].toLowerCase() == "gmt" || getUrlVars()["q"].toLowerCase() == "gmt+master" || getUrlVars()["q"].toLowerCase() == "yacht+master" || getUrlVars()["q"].toLowerCase() == "air+king" || getUrlVars()["q"].toLowerCase() == "sea+dweller" || getUrlVars()["q"].toLowerCase() == "pearl+master" || getUrlVars()["q"].toLowerCase() == "lady-datejust" || getUrlVars()["q"].toLowerCase() == "day-date" || getUrlVars()["q"].toLowerCase() == "sub"){
      
    window.location.replace("/pages/rolex");
    
    }