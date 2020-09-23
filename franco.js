var regxs = [
    {
        "regx": /2/,
        "action": "أ"
    },
    {
        "regx": /^A/i,
        "action": "ا"
    },
    {
        "regx": /(^B|^P)/i,
        "action": "ب"
    },
    {
        "regx": /^T/i,
        "action": "ت"
    },
    {
        "regx": /(^TH)/i,
        "action": "ث"
    },
    {
        "regx": /(^G|^J)/i,
        "action": "ج"
    },
    {
        "regx": /^7/,
        "action": "ح"
    },
    {
        "regx": /(^7′|^7'|^5|^kh)/i,
        "action": "خ"
    },
    {
        "regx": /^D/i,
        "action": "د"
    },
    {
        "regx": /^Z/i,
        "action": "ذ"
    },
    {
        "regx": /^R/i,
        "action": "ر"
    },
    {
        "regx": /^Z/i,
        "action": "ز"
    },
    {
        "regx": /^S/i,
        "action": "س"
    },
    {
        "regx": /(^SH|4)/i,
        "action": "ش"
    },
    {
        "regx": /^9/,
        "action": "ص"
    },
    {
        "regx": /(^9′|^9'|^D)/,
        "action": "ض"
    },
    {
        "regx": /^6/,
        "action": "ط"
    },
    {
        "regx": /(^Z|^6'|^6`)/i,
        "action": "ظ"
    },
    {
        "regx": /^3/,
        "action": "ع"
    },
    {
        "regx": /(^3'|^3`|^gh)/i,
        "action": "غ"
    },
    {
        "regx": /^F/i,
        "action": "ف"
    },
    {
        "regx": /(^q|^8)/i,
        "action": "ق"
    },
    {
        "regx": /(^K)/i,
        "action": "ك"
    },
    {
        "regx": /(^L)/i,
        "action": "ل"
    },
    {
        "regx": /(^M)/i,
        "action": "م"
    },
    {
        "regx": /(^N)/i,
        "action": "ن"
    },
    {
        "regx": /(^H)/i,
        "action": "ه"
    },
    {
        "regx": /(^O|^u|^oo|^w|^ou)/i,
        "action": "و"
    },
    {
        "regx": /(^Y|^e|^i|^ee|^ei|^ie)/i,
        "action": "ي"
    }
];

var francoText = document.getElementById("input-franco");
var arabicText = document.getElementById("output-arabic");
var translateBtn= document.getElementById("translate-btn");
translateBtn.onclick = translate;

function check(str){
    for(var i = 0; i < regxs.length; i++){
        var val = regxs[i];
        var match = str.match(val.regx);
        if(match && str === match[0]){
            return {
                "result": true,
                "value": val.action
            };
        }
    }
    return {
        "result": false,
        "value": ""
    }
}

function translate(e){
    var fullText = francoText.value;
    var translatedText = "";
    for(var j = 0; j < fullText.length; j++){
        var str;
        
        if(fullText[j] == " "){
            console.log("hi");
            translatedText += " ";
        }
        else{
            if(j + 1 == fullText.length || fullText[j + 1] == " "){
                str = fullText[j];
            }
            else{
                str = fullText[j] + fullText[j + 1];
            }
            var ret = check(str);
            if(ret.result && str.length > 1){
                j++;
                translatedText += ret.value;
            }
            else{
                ret = check(fullText[j]);
                if(!ret.result){
                    ret.value = fullText[j];
                }

                translatedText += ret.value;
            }
        }
    }

    arabicText.value = translatedText;
}