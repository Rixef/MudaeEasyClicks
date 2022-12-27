//global variables
  //read-only hardcode variables
    const rndsidarr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];//this will never need to be updated as it's just used in the random session id generation function
    const botid = "432610292342587392";//432610292342587392 = Mudae Bot Application User ID(this will probably never change but in case it does, you can get it through Discord Developer mode and then right click Mudae and copy id)
    const claimtu = 10800000;//3hrs = 10800000
  //completely dynamic variables that the user doesn't touch almost at all
    var selCmd = "wa";
    //commands and their versions(command ids are version -1, so versions are ids +1)
    //we're putting the versions in here by adding +1 to the ids
      var mudaecmds = {
        "wa":832172151729422417n+1n,//Roll a random animanga waifu.
        "wg":832172216665374750n+1n,//Roll a random game waifu.
        "ma":832172599823958026n+1n,//Roll a random animanga waifu or husbando.
        "mg":832172640105922570n+1n,//Roll a random game waifu or husbando.
        "ha":832172457028747336n+1n,//Roll a random animanga husbando.
        "hg":832172416192872458n+1n,//Roll a random game husbando.
        "dk":946747875541549106n+1n,//Earn a daily amount of kakera.
        "vote":1010278319788400791n+1n,//Vote for the bot to get more rolls.
        "0xDEAD":0};//unused
    var channelid = document.location.href.split('/')[5];//gets channel id from the url
    var guildid = document.location.href.split('/')[4];//gets guild/server id from the url
    //old? got updated?: var guildname = document.querySelector("div.lineClamp1-1iDPU7.text-md-semibold-3xVVGu.name-3Uvkvr").innerText;//gets guild name from top left corner
    var guildname = document.querySelector("div.name-3Uvkvr").innerText;//gets guild name from top left corner
    var highestkakerarollvalue = 0;
    var hkvmsgid = "";//storage variable for highest kakera value message id to react on and claim
  //dynamic variables that are changed by the user
    var guildspecificrolls = {"The Worst Generation":8,"ev's crib":8,"Rixef's server":10};//add your favorite servers w/mudae rolls #
    var rolls = 8;//change in console with rolls = newValue;

async function mr()
{
  getCmd();
  if(getCmd() != "dk" && getCmd() != "vote")
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
      {sc(selCmd);}
      await sleep(2600);
    }
    addreact();
    highestkakerarollvalue=0;
    hkvmsgid="";
  }
}

//code executed on first injection sheezy
//additional buttons and other UI functions for easy click rolls and etc.
function getCmd(){selCmd = document.querySelector('#cmds').value;}
//button classes default:
//component-ifCTxY button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F
//winButton-3UMjdg
  //document.querySelector("#app-mount > div:nth-child(4)") //title bar
  //document.querySelector("section.panels-3wFtMD") //bottom left corner under Discord name, pfp, and short id#
  var asection = document.querySelector("#app-mount > div:nth-child(4)");
  asection.innerHTML+=
  //container for the added UI features
  "<div class=\"container-3nKPGI\">"+
  "<div class=\"children-2XdE_I\">"+
    //Mudae Roll button - rolls default 8 times default /wa
    "<button role=\"button\" type=\"button\" style=\"top:-10px;height:22px;width:105px;min-height:0px;\" class=\"component-ifCTxY button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F winButton-3UMjdg mudaerollbtn\"><div class=\"contents-3ca1mk\"><div class=\"content-1xP6ZE\" aria-hidden=\"false\"><div class=\"label-31sIdr\">Mudae Roll</div></div></div></button>"+
    //Choose command label and dropdown - a select/dropdown box with command options for Mudae Roll button and Run button
    `<label style="color:rgb(255,255,254)" for="cmds">Command:</label>`+
    `<select style="top:-4px;height:22px;width:95px;min-height:0px;color:rgb(0,0,0);font-weight:bold;" class="winButton-3UMjdg" name="cmds" id="cmds">
        <option value="wa">wa</option>
        <option value="wg">wg</option>
        <option value="ma">ma</option>
        <option value="mg">mg</option>
        <option value="ha">ha</option>
        <option value="hg">hg</option>
        <option value="dk">dk</option>
        <option value="vote">Vote</option>
     </select>`+
     //Send Cmd button - sends the selected command 1 time
     "<button role=\"button\" type=\"button\" style=\"top:-10px;height:22px;width:95px;min-height:0px;\" class=\"component-ifCTxY button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeSmall-wU2dO- grow-2sR_-F winButton-3UMjdg sendcmdbtn\"><div class=\"contents-3ca1mk\"><div class=\"content-1xP6ZE\" aria-hidden=\"false\"><div class=\"label-31sIdr\">Send Cmd</div></div></div></button>"+
  //end container for added UI features
  "</div>"+
  "</div>";
  var asecbtn = asection.querySelector("button.mudaerollbtn");
  asecbtn.onclick=async ()=>{mr();};
  asecbtn = asection.querySelector("button.sendcmdbtn");
  asecbtn.onclick=async ()=>{getCmd();sc(selCmd);};
// get channelid, guildid, and guildname, and update rolls accordingly
function updatecgid()
{
  if(channelid!=document.location.href.split('/')[5])
    channelid=document.location.href.split('/')[5];
  if(guildid!=document.location.href.split('/')[4])
    guildid=document.location.href.split('/')[4];
  if(guildname!=document.querySelector("div.name-3Uvkvr").innerText)
    guildname=document.querySelector("div.name-3Uvkvr").innerText;
  if(Object.keys(guildspecificrolls).includes(guildname))
      rolls=guildspecificrolls[guildname];
}

//get token
function GT() {	return (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken(); };

//random sid generator(random session id generator):
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

//sends a single roll/command of user's choice
//can be either /wa /wg /ma /mg /ha /hg /dk or /vote
function sc(cmd)
{
  getCmd();
  if(cmd == "")
    cmd=selCmd;
  var token = GT();
  var rgsid = rndgensid();
  var rnd = Math.floor((Math.random()*959223404165070848));//used for nonce
  updatecgid();
  //sends command fetch
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
    "body": `------\r\nContent-Disposition: form-data; name="payload_json"\r\n\r\n{"type":2,"application_id":"${botid}","guild_id":"${guildid}","channel_id":"${channelid}","session_id":"${rgsid}","data":{"version":${String(mudaecmds[cmd])},"id":${String(BigInt(mudaecmds[cmd])-1n)},"name":"${cmd}","type":1,"options":[],"application_command":{"id":${String(BigInt(mudaecmds[cmd])-1n)},"application_id":"${botid}","version":${String(mudaecmds[cmd])},"default_permission":true,"default_member_permissions":null,"type":1,"nsfw":false,"name":"${cmd}","description":"","dm_permission":true},"attachments":[]},"nonce":"${rnd}"}\r\n--------\r\n`,
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
