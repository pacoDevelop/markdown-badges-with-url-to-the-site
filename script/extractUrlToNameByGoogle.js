// Use in google.com in developers tools

badgeName=Paste Object Value


const getUrlForName= (name,nameUrl=name+"-url")=>{
  
    fetch("https://www.google.es/search?q="+name, {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "es-ES,es;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"104.0.5112.102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "cross-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "x-client-data": "CKC1yQEIlrbJAQijtskBCMS2yQEIqZ3KAQjYhcsBCJShywEIjrzMAQjMvMwBCP3AzAEIyMbMAQicycwBCOPLzAEIk8/MAQig0swB"
  },
  "referrer": "https://www.google.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
}).then( function (response) {
	// The API call was successful!
	return  response.text();
}).then( function (html) {
    
       if(html.indexOf('<cite class="iUh30 tjvcx" role="text">')==-1||html.indexOf('<cite class="iUh30 tjvcx" role="text">') > html.indexOf('<cite class="iUh30 qLRx3b tjvcx" role="text">')){
           html=html.slice(html.indexOf('<cite class="iUh30 qLRx3b tjvcx" role="text">')+'<cite class="iUh30 qLRx3b tjvcx" role="text">'.length);
    html=html.slice(0,html.indexOf('</cite>'));
      var e= html.replace('<span class="dyjrff qzEoUe" role="text"> › ',"/").replaceAll(' › ',"/").replace("</span>","");
           console.log(e)
       badgeUrl.push("["+nameUrl+"]: "+ e);
       }else{
           html=html.slice(html.indexOf('<cite class="iUh30 tjvcx" role="text">')+'<cite class="iUh30 tjvcx" role="text">'.length);
    html=html.slice(0,html.indexOf('</cite>'));
      var e= html.replace('<span class="dyjrff qzEoUe" role="text"> › ',"/").replaceAll(' › ',"/").replace("</span>","");
        badgeUrl.push("["+nameUrl+"]: "+ e);
       return  e;
       }
       
	// This is the HTML from our response as a text string
	
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
}

var badgeUrl=[];
for (let index = 0; index < badgeName.length; index++) {
    const e=badgeName[index];
    getUrlForName(e);
  
}

badgeUrl;