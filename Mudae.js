//global variables
  //read-only hardcode variables
    const rndsidarr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const botid = "432610292342587392";//432610292342587392 = Mudae Bot Application User ID
    const claimtu = 10800000;//3hrs = 10800000
  //completely dynamic variables that the user doesn't touch at all
    var channelid = document.location.href.split('/')[5];
    var guildid = document.location.href.split('/')[4];
    var guildname = document.querySelector("div.lineClamp1-1iDPU7.text-md-semibold-3xVVGu.name-3Uvkvr").innerText;
    var highestkakerarollvalue = 0;
    var hkvmsgid = "";
  //dynamic variables that are changed by the user
    var guildspecificrolls = {"The Worst Generation":8,"ev's crib":8,"Rixef's server":10};//add your favorite servers w/mudae rolls #
    var rolls = 8;//change in console with rolls = newValue;

async function mr()
{
  for (let i=0;i<=rolls;i++)
  {
    if(i!=0)
    {
      var msgs=document.querySelectorAll("li.messageListItem-ZZ7v6g");
      if(parseInt(msgs[msgs.length-1].querySelector("strong").innerText)>highestkakerarollvalue)
      {
        highestkakerarollvalue = parseInt(msgs[msgs.length-1].querySelector("strong").innerText);
        hkvmsgid=msgs[msgs.length-1].id;
        hkvmsgid=hkvmsgid.split('-')[2];
      }
    }
    if(i!=rolls)
    {wa();}
    await sleep(2600);
  }
  addreact();
  highestkakerarollvalue=0;
  hkvmsgid="";
}

//code executed on first injection runs every 1 second to make sure it posts to correct channel and guild
//additional buttons and other UI functions for easy click rolls and etc.
  var asection = document.querySelector("section.panels-3wFtMD");
  asection.innerHTML+=
  //Mudae Roll button - rolls default 8 times default /wa
  "<button role=\"button\" type=\"button\" class=\"component-ifCTxY button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F mudaerollbtn\"><div class=\"contents-3ca1mk\"><div class=\"content-1xP6ZE\" aria-hidden=\"false\"><div class=\"label-31sIdr\">Mudae Roll</div></div></div></button>"+
  //wa button - sends /wa one time(look ma! No typing)
  "<button role=\"button\" type=\"button\" class=\"component-ifCTxY button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F wabtn\"><div class=\"contents-3ca1mk\"><div class=\"content-1xP6ZE\" aria-hidden=\"false\"><div class=\"label-31sIdr\">wa</div></div></div></button>"+
  //dk button - sends /dk one time(look ma! No typing)
  "<button role=\"button\" type=\"button\" class=\"component-ifCTxY button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F dkbtn\"><div class=\"contents-3ca1mk\"><div class=\"content-1xP6ZE\" aria-hidden=\"false\"><div class=\"label-31sIdr\">dk</div></div></div></button>";
  var asecbtn = asection.querySelector("button.component-ifCTxY.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F.mudaerollbtn");
  asecbtn.onclick=async ()=>{mr();};
  asecbtn = asection.querySelector("button.component-ifCTxY.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F.wabtn");
  asecbtn.onclick=async ()=>{wa();};
  asecbtn = asection.querySelector("button.component-ifCTxY.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F.dkbtn");
  asecbtn.onclick=async ()=>{dk();};
//get channelid, guildid, and guildname, and update rolls accordingly
setInterval(function updatecgid()
{
  if(channelid!=document.location.href.split('/')[5])
    channelid=document.location.href.split('/')[5];
  if(guildid!=document.location.href.split('/')[4])
    guildid=document.location.href.split('/')[4];
  if(guildname!=document.querySelector("div.lineClamp1-1iDPU7.text-md-semibold-3xVVGu.name-3Uvkvr").innerText)
    guildname=document.querySelector("div.lineClamp1-1iDPU7.text-md-semibold-3xVVGu.name-3Uvkvr").innerText;
  if(Object.keys(guildspecificrolls).includes(guildname))
      rolls=guildspecificrolls[guildname];
},1000);

//get token
function GT() {	return (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken(); };

//random sid generator:
function rndgensid()
{
	var rndgensid = "";
	for(var i=0;i<32;i++)
	{
		rndgensid+=rndsidarr[Math.floor((Math.random()*rndsidarr.length))];
		if(i==31)
		{return rndgensid;}
	}
};

//sleep function to use with async functions
function sleep(ms) {return new Promise(resolve=>setTimeout(resolve,ms));}

//sends /wa
function wa()
{
  var token = GT();
  var rgsid = rndgensid();
  var rnd = Math.floor((Math.random()*959223404165070848));
  //sends /wa command fetch
  fetch("https://discord.com/api/v9/interactions",
  {
    "headers":
    {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": token,
      "content-type": "multipart/form-data; boundary=----",
      "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "en-US",
      "x-super-properties": ""
    },
    "referrer": document.location.href,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "------\r\nContent-Disposition: form-data; name=\"payload_json\"\r\n\r\n{\"type\":2,\"application_id\":\""+botid+"\",\"guild_id\":\""+guildid+"\",\"channel_id\":\""+channelid+"\",\"session_id\":\""+rgsid+"\",\"data\":{\"version\":\"832172151729422418\",\"id\":\"832172151729422417\",\"name\":\"wa\",\"type\":1,\"options\":[],\"application_command\":{\"id\":\"832172151729422417\",\"application_id\":\""+botid+"\",\"version\":\"832172151729422418\",\"default_permission\":true,\"default_member_permissions\":null,\"type\":1,\"name\":\"wa\",\"description\":\"Roll a random animanga waifu.\",\"dm_permission\":true},\"attachments\":[]},\"nonce\":\""+rnd+"\"}\r\n--------\r\n",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}

//sends /dk
function dk()
{
  var token = GT();
  var rgsid = rndgensid();
  var rnd = Math.floor((Math.random()*959223404165070848));
  //sends /dk command fetch
  fetch("https://discord.com/api/v9/interactions",
  {
    "headers":
    {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": token,
      "content-type": "multipart/form-data; boundary=----",
      "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "en-US",
      "x-super-properties": ""
    },
    "referrer": document.location.href,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "------\r\nContent-Disposition: form-data; name=\"payload_json\"\r\n\r\n{\"type\":2,\"application_id\":\""+botid+"\",\"guild_id\":\""+guildid+"\",\"channel_id\":\""+channelid+"\",\"session_id\":\""+rgsid+"\",\"data\":{\"version\":\"946747875541549107\",\"id\":\"946747875541549106\",\"name\":\"dk\",\"type\":1,\"options\":[],\"application_command\":{\"id\":\"946747875541549106\",\"application_id\":\""+botid+"\",\"version\":\"946747875541549107\",\"default_permission\":true,\"default_member_permissions\":null,\"type\":1,\"name\":\"dk\",\"description\":\"Earn a daily amount of kakera.\",\"dm_permission\":true},\"attachments\":[]},\"nonce\":\""+rnd+"\"}\r\n--------\r\n",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}

//add reaction
function addreact()
{
  var token = GT();
  fetch("https://discord.com/api/v9/channels/"+channelid+"/messages/"+hkvmsgid+"/reactions/%F0%9F%A4%9F/%40me?location=Message&burst=false",
  {
    "headers":
    {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": token,
      "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "en-US",
      "x-super-properties": ""
    },
    "referrer": document.location.href,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "PUT",
    "mode": "cors",
    "credentials": "include"
  });
}

//remove reaction
function remreact()
{
  var token = GT();
  fetch("https://discord.com/api/v9/channels/"+channelid+"/messages/"+hkvmsgid+"/reactions/%F0%9F%A4%9F/%40me?location=Message",
  {
    "headers":
    {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": token,
      "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "en-US",
      "x-super-properties": ""
    },
    "referrer": document.location.href,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "DELETE",
    "mode": "cors",
    "credentials": "include"
  });
}

//code to execute
setInterval(f(),claimtu);//execute it every claimtu time after that