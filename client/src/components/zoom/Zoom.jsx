const zoomZoom = (event) => {

    const style = document.querySelector("link[href='style.css']");
    const rules = style.sheet.cssRules;
    const mqrules = [];
    const html = document.getElementsByTagName('html')[0];

    for (const i = 0, len = rules.length; i < len; i++) {
        if(rules[i].type === 4){ // type 4 are Media Queries
        mqrules.push([i,rules[i].media.mediaText]);
        }
    }

    function scale(scaleValue){

        for (const i = 0, len = mqrules.length; i < len; i++) {
        rules[mqrules[i][0]].media.mediaText = mqrules[i][1].replace(/(\d+(\.\d+)?)/g, function (match, number) {
            return number * scaleValue; // Scale every number found in the Media Query
        });
    }
  
    html.style.fontSize = (scaleValue * 16) + 'px';
  
    }

};