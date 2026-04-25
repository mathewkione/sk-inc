class Account{
constructor(dataKey){
this._dataKey=dataKey
}
get keyToStore(){
return this._dataKey
}

 storeDataInStorage(val){
 localStorage.setItem(this._dataKey,JSON.stringify(val))
}

storeDataInSession(sessionKey,val){
sessionStorage.setItem(sessionKey,JSON.stringify(val))
}
getDataFromStorage(){
let item=localStorage.getItem(this._dataKey)||[]
if(item){
let parsed=JSON.parse(item)
return parsed
}
}

getDataFromSession(key){
let item=sessionStorage.getItem(key)||[]
if(item){
let parsed=JSON.parse(item)
return parsed
}}
update(val){
localStorage.setItem(this._dataKey,JSON.stringify(val))
}

}


//IN page alerts



let notificationField=""
window.addEventListener('load',()=>{
const notificationDiv=document.querySelector("#in-page-alerts")
notificationField=notificationDiv
})

async function initiateTimeOutAlerts(field,info,lifeTime,interval){
//const notificationField=document.querySelector("#in-page-alerts")
field.textContent=info
field.style.display="grid"
let inCurrentSeconds=0
const setSecondsInterval=setInterval(()=>{
inCurrentSeconds++
if(inCurrentSeconds>=lifeTime){
field.style.display="none"
clearInterval(setSecondsInterval)
}
},interval)

}

/*async function initiateTimeOutAlerts(field,info,lifeTime,interval){
const notificationField=document.querySelector("#in-page-alerts")
field.textContent=info
field.style.display="grid"
let inCurrentSeconds=0
const setSecondsInterval=setInterval(()=>{
inCurrentSeconds++
if(inCurrentSeconds>=lifeTime){
field.style.display="none"
clearInterval(setSecondsInterval)
}
},interval)

}
*/

const accountInitErr=new Account("errors")
const chiefAdmin=new Account("chiefSystemAdmin")
const securityCenter=new Account("securityData")
const loginData=new Account("loginData")
const innitTasKData=new Account("userTaskData")

//initiate Security data
//securityCenter.storeDataInStorage([{uid:316566968285,securityQuestion:{qs:"which school did you study",ans:"codecademy"},code:354334,email:"mkiprop131@gmail.com",phone:0708685803}])
//localStorage.removeItem("errors")
if(localStorage.getItem("errors")){
console.log("Getting your data ready!")
}else{
accountInitErr.storeDataInStorage(["hardcoded,no errors"])
console.log("Error tracking data is ready!")
}
let accountInit=new Account("systemData");
function initiateStorageData(){
accountInit.storeDataInStorage({
  profileData:{usernames:[],uid:[],locationData:[],dateJoined:[],accountLink:[]},
  accountAndBilling:{emails:[],passwords:[],myGoals:[],
linkedAccounts:[]},
  myHome:[],
    accountLogs:[],
  mails:[]})
}
let prev=accountInitErr.getDataFromStorage()||[]
//initiateStorageData()//call only when creating initial data

//localStorage.removeItem("systemData")
if(localStorage.getItem("systemData")){
console.log("Data is initialized!")
}else{
accountInit.storeDataInStorage({
  profileData:{usernames:[],uid:[],locationData:[],dateJoined:[],accountLink:[]},
  accountAndBilling:{emails:[],passwords:[],myGoals:[],
linkedAccounts:[]},
  myHome:[],
    accountLogs:[],
  mails:[]})
console.log("Initiating data...")
}
if(localStorage.getItem("securityData")){
console.log("Getting your data ready!")
}else{
console.log("Seems you are using this service for first time, getting things ready!")
securityCenter.storeDataInStorage([{uid:316566968285,securityQuestion:{qs:"which school did you study",ans:"codecademy"},code:354334,email:"mkiprop131@gmail.com",phone:708685803}])
}



if(localStorage.getItem("userTaskData")){
console.log("LOading user task data!")
}else{
console.warn("System did not find any data, creating default data...")
innitTasKData.storeDataInStorage([])
}


//save login data to device
//localStorage.removeItem("loginData")

if(localStorage.getItem("loginData")){
console.log("The user has saved some login data!")
}else{
console.log("Saving your data to log in next time")
loginData.storeDataInStorage([{savedID:"def",savedName:"def",savedPassword:"def"}])
}

/*if(localStorage.getItem("reminderData")){
console.log("Loading display data!")
}else{
console.log("Saving your data to log in next time")
loginData.storeDataInStorage([{savedID:"def",savedName:"def",savedPassword:"def"}])
}*/

//check security data
if(localStorage.getItem("securityData")){
console.log("Loading security data")
}else{
console.warn("Installing security data")
securityCenter.storeDataInStorage([{uid:316566968285,securityQuestion:{qs:"which school did you study",ans:"codecademy"},code:354334,email:"mkiprop131@gmail.com",phone:708685803}])
}
//localStorage.removeItem("chiefSystemAdmin")
if(localStorage.getItem("chiefSystemAdmin")){
//do nothing
console.log("we have admin data")
let ad=localStorage.getItem("chiefSystemAdmin")
}else{
console.log("our system can not find admin data!")
//chiefAdmin.storeDataInStorage({details:{chiefAdminPassword:"Sierra7z1&",chiefAdminUsername:"ceomathew",chiefAdminID:"ceodeeptech",chiefAdminTag:"cadmin"},appStats:{logins:[],passResets:[],messages:[],criticalLogs:[]}})
let backup={"details":{"chiefAdminPassword":"Sierra7z1&","chiefAdminUsername":"ceomathew","chiefAdminID":"ceodeeptech","chiefAdminTag":"cadmin"},adminList:[{"name":"Stephanie Lopez","uid":"slopez315784142393"},{"name":"Jayson Preston","uid":2556290678522}],"appStats":{"logins":[{"uid":"slopez315784142393","time":"1/4/1980, 11:53:29 AM"}],"passResets":[],"messages":[{"title":"something else","uid":"edinam0","detail":"Mehn this issue keeps on happening and i feel fucked up, fuck this shit and refund my godamn money, motherfuckers!","handlerID":6666665566,taskID:677676677676,accomplished:false,reviewStatus:"not reviewed"}],"criticalLogs":[{"type":"admin","uid":[],"message":"Attempted adminn login with wrong password!"},{"type":"admin","uid":[],"message":"Attempted adminn login with wrong password!"},{"type":"admin","uid":2556290678522,"message":"Attempted adminn login with wrong password!"}],adminChecks:[]}}
chiefAdmin.storeDataInStorage(backup)
}

//SESSION DATA
if(sessionStorage.getItem("user")){
console.log("Login session is ready!")
}else{
console.warn("Login ready not ready, please wait..")
let allSessionData=accessSessionData()
//let preferenceObject={visible:[{item:"#registration-page",displayType:"block"}],hidden:[{item:"#login-page" ,displayType:"none"},{item:"#session-field" ,displayType:"none"}]}//{item: ,displayType:}
let preferenceObject={visible:[],hidden:[]}
let autoLogin={status:true}
const defaultSessionData={pageSession:{id:"",sessionID:Math.floor(Math.random()*1000000)}}
accountInit.storeDataInSession("user",[defaultSessionData,{selectors:preferenceObject},autoLogin])
}


//MAIN DATA
const previousData=accountInit.getDataFromStorage()
let usernames=previousData.profileData.usernames||[]
console.log(JSON.stringify(usernames))
let locationData=previousData.profileData.locationData||[]
console.log(JSON.stringify(locationData))
let accountLink=previousData.profileData.accountLink||[]
let uid=usernames.map(x=>{return x.uid})||[]
console.log(JSON.stringify(uid))
let dateJoined=previousData.profileData.dateJoined||[]
//Accounts and Billings
let emails=previousData.accountAndBilling.emails||[]
let passwords=previousData.accountAndBilling.passwords||[]
let myGoals=previousData.accountAndBilling.myGoals||[]
console.log(JSON.stringify(myGoals))
let linkedAccounts=previousData.accountAndBilling.linkedAccounts||[]
//My Home
let  myHome=previousData.myHome||[]
//Account Logs
let accountLogs=previousData.accountLogs||[]
//Mails
let  mails=previousData.mails||[]
let info=[]

//SYSTEM administrator
function administrativeData(){
let adminData=chiefAdmin.getDataFromStorage()
return adminData
}
//console.log(JSON.stringify(administrativeData()))
//destructuring
function adminDetails(){
let data=administrativeData().details
return data
}
console.log(JSON.stringify(adminDetails()))
function registeredAdmins(){
let data=administrativeData().adminList
return data
}
let adminList=registeredAdmins()
let adminListID=adminList.map(x=>{return x.uid})
console.log(adminList)

function appData(){
let data=administrativeData().appStats
return data
}

let chiefAdminUsername=adminDetails().chiefAdminUsername
let chiefAdminPassword=adminDetails().chiefAdminPassword
let chiefAdminID=adminDetails().chiefAdminID
let chiefAdminTag=adminDetails().chiefAdminTag




//app stats
let logins=appData().logins
let passResets=appData().passResets
let messages=appData().messages
let criticalLogs=appData().criticalLogs
let adminChecks=appData().adminChecks
//adminsitrative stats
//ACCESS SAVED ACCOUNTS

//LOGGED IN PROFILES
function listedProfiles(){
return loginData.getDataFromStorage();
}

//let sessionData=accessSessionData()

function accessSessionData(){
if(sessionStorage.getItem("user")){
console.log("getting session data")
return accountInit.getDataFromSession("user")
}else{
console.warn("Login ready not ready, please wait..")
}
}

function userTaskData(){
return innitTasKData.getDataFromStorage("userTaskData")
}
const userData=(id)=>{
if(userTaskData().length===0)return false;
let userSpecificTasks= userTaskData().filter(x=>{
x.id=id
});
if(userSpecificTasks.length===0)return false;
return userSpecificTasks
}

console.log(userData())


//localStorage.removeItem("loginData")
let profilesSaved=loginData.getDataFromStorage()




//Check if user exists
function checkUser(user,arg){
let matchUser=usernames.filter(x=>{
return x.userName===user
})
if(matchUser.length===0){
return []
}else{
if(arg==="match"){
return matchUser
}else if(arg==="user"){
return matchUser[0].userName
}else if(arg==="id"){
return matchUser[0].uid
}else if(arg==="npt"){
return matchUser[0].name
} else if(arg==="tg"){
return matchUser[0].tag
}else if(arg==="full"){
return matchUser[0].firstName+" "+matchUser[0].lastName
}else if(arg==="first"){
return matchUser[0].firstName
}else if(arg==="last"){
return matchUser[0].lastName
}else{
return []
}
}
}


function addElementToDisplayMemory(item,status){
const sessionDataToUse=accessSessionData()//all session data
const savedDisplays=sessionDataToUse[1].selectors

let visibleElements=savedDisplays.visible
let hiddenElements=savedDisplays.hidden


if(item.length<2){
console.log(`single-item ${item}`)
//item of length greater than 1
const matchItemToAdd=item[0]
const matchVisibleElements=visibleElements.filter(x=>{
return x.item===item[0]
})
console.log("Match tracker-visible-single")
console.log(JSON.stringify(matchVisibleElements))

const matchHiddenElements=hiddenElements.filter(x=>{
return x.item===item[0]
})
console.log(JSON.stringify(matchHiddenElements))

if(status){
for(let i=0; i<hiddenElements.length; i++){
for(let j=0; j<item.length; j++){
if(hiddenElements[i].item===item[j]){
hiddenElements=hiddenElements.filter(x=>{
return x.item!==item[j]
})
}
}
}



if(matchVisibleElements.length!==0){
console.warn("can not add item because it is already in display")
}else{
visibleElements=[...visibleElements,{item:item[0],displayType:status}]
console.log("item saved!")
}

}else{
for(let i=0; i<visibleElements.length; i++){
for(let j=0; j<item.length; j++){
if(visibleElements[i].item===item[j]){
//visibleElements.push(item[j])
visibleElements=visibleElements.filter(x=>{
return x.item!==item[j]
})
}
}
}


if(matchHiddenElements.length!==0){
console.warn("items already saved and can not be readily displayed!")
}else{
hiddenElements=[...hiddenElements,{item:item[0],displayType:"none"}]
}
}

}else if(item.length>=2){//item of length more than 1
console.log(`multiple-items ${item}`)

let matchHiddenElements=[]

for(let i=0; i<hiddenElements.length; i++){
for(let j=0; j<item.length; j++){
if(hiddenElements[i].item===item[j]){
matchHiddenElements=[...matchHiddenElements,{item:item[j],displayType:"none"}]
}
}
}

let matchVisibleElements=[]
for(let i=0; i<visibleElements.length; i++){
for(let j=0; j<item.length; j++){
if(visibleElements[i]===item[j]){
matchVisibleElements=[...matchVisibleElements,{item:item[j],displayType:status}]
}
}
}
console.log(matchHiddenElements)
console.log(matchVisibleElements)

if(status){

if(matchVisibleElements.length!==0){
//filter any similar item stored on display memory too
for(let i=0; i<visibleElements.length; i++){
for(let j=0; j<item.length; j++){
if(visibleElements[i].item===item[j]){
//visibleElements.push(item[j])
visibleElements=visibleElements.filter(x=>{
return x.item!==item[j]
})
}
}
}

//now store the items on display memory
for(let i=0; i<item.length; i++){
visibleElement=[...visibleElements,{item:item[i],displayType:status}]
}

//visibleElements=[...visibleElements,{item:item,displayType:status}]

//remove items from hidden display memory

for(let i=0; i<hiddenElements.length; i++){
for(let j=0; j<item.length; j++){
if(hiddenElements[i].item===item[j]){

hiddenElements=hiddenElements.filter(x=>{
return x.item!==item[j]
})
}
}
}
}else{//just add to display memory
for(let i=0; i<item.length; i++){
visibleElements=[...visibleElements,{item:item[i],displayType:status}]
}
//visibleElements=[...visibleElements,{item:item,displayType:status}]
//remove items from hidden display memory

console.warn(JSON.stringify(hiddenElements))
console.log(-1)
console.warn(item)
for(let i=0; i<hiddenElements.length; i++){
for(let j=0; j<item.length; j++){

if(hiddenElements[i]){
if(hiddenElements[i].item===item[j]){
hiddenElements=hiddenElements.filter(x=>{
return x.item!==item[j]
})
}
}else{
console.warn("Design flow detected!")
}
}

}
}

}else{// non b status

//remove items from hidden display memory
if(matchHiddenElements.length!==0){
for(let i=0; i<hiddenElements.length; i++){
for(let j=0; j<item.length; j++){
if(hiddenElements[i].item===item[j]){
hiddenElements=hiddenElements.filter(x=>{
return x.item!==item[j]
})
}
}
}

//store the items in hidden memory
for(let i=0; i<item.length; i++){
hiddenElements=[...hiddenElements,{item:item[i],displayType:"none"}]
}
//hiddenElements=[...hiddenElements,{item:item,displayType:"none"}]

//now delete the items from visible memory
for(let i=0; i<visibleElements.length; i++){
for(let j=0; j<item.length; j++){
if(visibleElements[i].item===item[j]){
//visibleElements.push(item[j])
visibleElements=visibleElements.filter(x=>{
return x.item!==item[j]
})
}
}
}

}else{
for(let i=0; i<item.length; i++){
hiddenElements=[...hiddenElements,{item:item[i],displayType:"none"}]
}
//hiddenElements=[...hiddenElements,{item:item,displayType:"none"}]
//now delete the items from visible memory
for(let i=0; i<visibleElements.length; i++){
for(let j=0; j<item.length; j++){
if(visibleElements[i].item===item[j]){
//visibleElements.push(item[j])
visibleElements=visibleElements.filter(x=>{
return x.item!==item[j]
})
}
}
}
}

}

}else{
//
}



for(let p=0; p<sessionDataToUse.length; p++){
for(let key in sessionDataToUse[p]){
if(key==="selectors"){
sessionDataToUse[p][key]={visible:visibleElements,hidden:hiddenElements}
break
}
}
}
console.log("The item was saved to memory!")
console.log(item)

accountInit.storeDataInSession("user",sessionDataToUse)
}

async function recallDisplay(x){
let allSessionData= await accessSessionData()
const visibleElements=allSessionData[1].selectors.visible
const hiddenElements=allSessionData[1].selectors.hidden

hiddenElements.map(x=>{
document.querySelector(x.item).style.display="none"
})

for(let i=0; i<visibleElements.length; i++){
document.querySelector(visibleElements[i].item).style.display=visibleElements[i].displayType;
}
}

//display CRUD





function showProfiles(){
//users signed in
const profileDetails=listedProfiles()
let profileContainer=document.querySelector(".listed-profiles")

profileDetails.map(x=>{
profileContainer.innerHTML+=`<button onclick=easyLogin(${x.savedID})>${x.savedName}</button>`
})
}

function easyLogin(argID){
const localCredentials=listedProfiles()
const currentUser=localCredentials.filter(x=>{
return x.savedID===argID
})

const localPassword=currentUser[0].savedPassword
const localUsername=currentUser[0].savedName
//hide registration form and proceed to home
const matchUser=checkUser(localUsername,"match")||[]
const matchPassword=passwords.filter(x=>{
return x.password===localPassword
})||[]

console.log(JSON.stringify(matchUser))
console.log(JSON.stringify(matchPassword))

if(matchUser.length!==0 && matchPassword.length!==0){
const alertMessage="Welcome,you are now logged in!"
initiateTimeOutAlerts(document.querySelector("#in-page-alerts"),alertMessage,4,1000)
const sessionDataToUse=accessSessionData()//all session data
let userID=matchUser[0].uid
let session=accessSessionData()[0].pageSession;
let {id,sessionID}=session
id=userID

let randomSessionID=Date.now()||Math.floor(Math.random()*1000000)
for(let p=0; p<sessionDataToUse.length; p++){
for(let key in sessionDataToUse[p]){
if(key==="pageSession"){
sessionDataToUse[p][key]={regularID:userID,generatedSessionID:randomSessionID}
break
}
}
accountInit.storeDataInSession("user",sessionDataToUse)
}
let loginObject={savedID:argID,savedName:localUsername,savedPassword:localPassword}
const matchWithUserObject=profilesSaved.filter(x=>{
return x.savedName===localUsername
})

profilesSaved=profilesSaved.filter(x=>{
return x.savedName!==localUsername;
})

profilesSaved=[loginObject,...profilesSaved]//Saved profile init
loginData.storeDataInStorage(profilesSaved)
//storeAllData()
addElementToDisplayMemory([".signed-profiles"])
addElementToDisplayMemory(["#show-profile"],"block")
addElementToDisplayMemory([".mayotrics-home"],"block")
addElementToDisplayMemory([".logged-user"],"block")
addElementToDisplayMemory([".sign-in-sign-up"])
recallDisplay()
window.location.reload(true)
}

}

window.addEventListener('load',()=>{
//MANAGE USER LOGIN SESSIONS
let session=accessSessionData()[0].pageSession;
const {regularID,generatedSessionID}=session
const authLogin=regularID
//localStorage.removeItem("loginData")
//OPERATIONS ON DATA


//call the main display manager
recallDisplay()

//Critical event listener

//function accountManager(){
try{
//Get text objects from input fields
function extractText([selector]){
let crObj={}
selector.map((x,y)=>{
crObj.x=document.querySelector(x).value
})
return crObj
}

//Get integer objects from input fields
function extractNumber(selector){
let crObj={}
selector.map((x,y)=>{
crObj.x=parseFloat(document.querySelector(x).value)
})
return crObj
}

//Display/hide
function switchDispay(selector,state){
selector.map(x=>{
document.querySelector(x).style.display=state||""
 })//to display call switchToDisplay() with an array as arguments and display option, To hide something, just submit the array arguments only
}


const currentTime=new Date()
let currentHours=currentTime.getHours()
let currentMinutes=currentTime.getMinutes()
let currentSeconds=currentTime.getSeconds()
let checkForZero=/^0/g
let allDaysArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let allMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
let todayIndex=currentTime.getDay()
let thisMonthIndex=currentTime.getMonth()
let thisYear=currentTime.getFullYear()
let thisDate=currentTime.getDate()

function homePage(){
function displayTimeToday(){
let dayForToday=allDaysArray[todayIndex]
let thisMonth=allMonths[currentTime.getMonth()]
let todayDisplay=document.querySelector("#date-for-today")
todayDisplay.textContent=`${thisYear} ${thisMonth} ${thisDate}`
let dayOfTheWeek=document.querySelector("#this-day")
dayOfTheWeek.textContent=dayForToday
let timeForNow=document.querySelector("#time-for-now")
let yearProgress=document.querySelector("#year-progress-bar").value
yearProgress=thisMonthIndex
timeForNow.textContent=`${currentHours}:${currentMinutes}:${currentSeconds}`
}


function addZeroToSeconds(){
if(currentSeconds<10){
if(checkForZero.test(currentSeconds)){
currentSeconds=currentSeconds
}else{
currentSeconds=0+""+currentSeconds
}
}
}
addZeroToSeconds()

function addZeroToMinutes(){
if(currentMinutes<10){
if(checkForZero.test(currentMinutes)){
currentMinutes=currentMinutes
}else{
currentMinutes=0+""+currentMinutes
}
}
}
addZeroToMinutes()

function addZeroToHours(){
if(currentHours<10){
if(checkForZero.test(currentHours)){
currentHours=currentHours
}else{
currentHours=0+""+currentHours
}
}
}

addZeroToHours()
addZeroToHours()

function addZeroToDate(){
if(thisDate<10){
if(checkForZero.test(thisDate)){
thisDate=thisDate
}else{
thisDate=0+""+thisDate
}
}
}
addZeroToDate()
//homePage function ends here
let homePost=document.querySelector("#general-notification")
homePost.textContent="Make a softknight account and wait for our product launch!"

const setSecondsInterval=setInterval(()=>{
currentSeconds++
addZeroToSeconds()
//

//
if(currentSeconds>59){
currentSeconds="00"
currentMinutes++
addZeroToMinutes()
addZeroToHours()
}

if(currentMinutes>59){
currentMinutes="00"
currentHours++
addZeroToMinutes()
addZeroToHours()
}

if(currentHours>24){
currentHours="00"
thisDate++
todayIndex++
addZeroToHours()
}

if(todayIndex>=8){
todayIndex=0
}
//
displayTimeToday()
},1000)


}
homePage()





//GO TO LOGIN OR REGISTRATION FROM HOME PAGE
let homeRegistrationBtn=document.querySelector("#home-to-registration")
let homeLoginBtn=document.querySelector("#home-to-login")

homeRegistrationBtn.addEventListener('click',()=>{
addElementToDisplayMemory([".mayotrics-home"])
addElementToDisplayMemory([".account-forms"],"block")
addElementToDisplayMemory(["#registration-page"],"block")
addElementToDisplayMemory([".login-register"])

recallDisplay()
})


homeLoginBtn.addEventListener('click',()=>{
addElementToDisplayMemory([".account-forms","#login-page"],"block")
addElementToDisplayMemory([".mayotrics-home"])
addElementToDisplayMemory([".login-register"])
recallDisplay()
})

//HIDE ACCOUNTS FIELD AND SHOW HOMEPAGE
const hideFormsButtonTwo=document.querySelector("#home-page-from-login")
hideFormsButtonTwo.addEventListener('click',()=>{
addElementToDisplayMemory([".account-forms","#login-page"])
addElementToDisplayMemory([".mayotrics-home"],"flex")
window.location.reload(true)
recallDisplay()
})


//display switches
document.querySelector("#go-to-registration").addEventListener('click',()=>{
addElementToDisplayMemory(["#login-page"])
addElementToDisplayMemory([".account-forms","#registration-page"],"block")
recallDisplay()
window.location.reload(true)
})

//extract from input field
//let name=document.querySelector("#first-name").value
//let userName=document.querySelector("#sername").value
//let inPass=document.querySelector("#pass").value
//let confirmPass=document.querySelector("#confirmPass").value

let check=document.querySelector("#check")
let registerBtn=document.querySelector("#reg")

function enableRegistrationButton(){
const firstNameString=document.querySelector("#first-name").value
const lastNameString=document.querySelector("#last-name").value
const usNameString=document.querySelector("#sername").value
let passString=document.querySelector("#pass").value
let confirmPasswordString=document.querySelector("#confirmPass").value
let checkBox=document.querySelector("#check")

if(usNameString && firstNameString && lastNameString && passString && confirmPasswordString && checkBox.checked){
registerBtn.disabled=false;
}
}
document.querySelector("#first-name").addEventListener('input',enableRegistrationButton)
document.querySelector("#check").addEventListener('input',enableRegistrationButton)
document.querySelector("#last-name").addEventListener('input',enableRegistrationButton)
document.querySelector("#sername").addEventListener('input',enableRegistrationButton)
document.querySelector("#pass").addEventListener('input',enableRegistrationButton)
document.querySelector("#confirmPass").addEventListener('input',enableRegistrationButton)


document.querySelector(".sign-in-sign-up").addEventListener('click',()=>{
addElementToDisplayMemory([".can-not-see-my-account"],"block")
addElementToDisplayMemory([".mayotrics-home"])
addElementToDisplayMemory([".signed-profiles"],"block")
//addElementToDisplayMemory(["#home-div"])
initiateTimeOutAlerts(notificationField,"Proceeding to sign in",4,1000)
const profileDetails=listedProfiles()
if(profileDetails.length>1){
addElementToDisplayMemory([".listed-profiles"],"grid")
addElementToDisplayMemory([".login-register"])
showProfiles()
}else{
addElementToDisplayMemory([".login-register"],"block")
}
recallDisplay()
})

//create a new profile
showProfiles()
document.querySelector(".new-account").addEventListener('click',()=>{
addElementToDisplayMemory([".login-register"],"block")
addElementToDisplayMemory([".can-not-see-my-account"])
addElementToDisplayMemory([".listed-profiles"])
recallDisplay()
})

function createAccount(){
//add functionality to login directly after signin
//get saved profiles                                                                                     
const firstName=document.querySelector("#first-name").value
const lastName=document.querySelector("#last-name").value
const usName=document.querySelector("#sername").value
const userID=Date.now()||Math.floor(Math.random()*100000)
let dateTime=usName
let pass=document.querySelector("#pass").value
let confirmPassword=document.querySelector("#confirmPass").value
let filter=usernames.filter(x=>{
return x.userName===usName
})
if(usName && firstName && lastName && pass && confirmPassword){
//check password matches
if(pass===confirmPassword){
//start of main logic
if(filter.length===0){
usernames=[...usernames,...[{userName:usName,uid:userID,firstName:firstName,lastName:lastName}]]
uid=usernames.map(x=>{return x.uid})
passwords=[...passwords,{password:pass,uid:userID}]
dateJoined=[...dateJoined,{uid:userID,joined:new Date().toLocaleString()}]
accountLogs=[...accountLogs,{uid:userID,log:"Account created successfuly!"}]

const alertMessage="Account created successfuly!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)

//Initiate login tokens
const sessionDataToUse=accessSessionData()//all session data
const randomSessionID=Date.now()||Math.floor(Math.random()*1000000)
for(let p=0; p<sessionDataToUse.length; p++){
for(let key in sessionDataToUse[p]){
if(key==="pageSession"){
sessionDataToUse[p][key]={regularID:userID,generatedSessionID:randomSessionID}
break
}
}
accountInit.storeDataInSession("user",sessionDataToUse)
addElementToDisplayMemory([".show-profile"],"block")//Hide registration form and proceed to home.
addElementToDisplayMemory([".account-forms"])
addElementToDisplayMemory(["#show-profile"])
addElementToDisplayMemory(["#registration-page"])
recallDisplay()
window.location.reload(true)
}

//save profile for next login
//save a profile
storeAllData()
let loginObject={savedID:userID,savedName:usName,savedPassword:pass}
const matchWithUserObject=profilesSaved.filter(x=>{
return x.savedName===usName
})
if(matchWithUserObject.length>0){

}else{
console.log("santino will save this profile!")
profilesSaved=[loginObject,...profilesSaved]//Saved profile init
loginData.storeDataInStorage(profilesSaved)
}

}else{
const alertMessage="the user is already registered!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}

//end of main logic
}else{
////provide rule set to handle unmatched passwords
const alertMessage="your passwords are not matching!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}
}else{
  //provide rule set to handle empty registration fields
const alertMessage="Please fill all required fields!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}

}

registerBtn.addEventListener('click',createAccount)
//e.preventDefault()
document.querySelector("#go-to-login").addEventListener('click',()=>{
addElementToDisplayMemory(["#registration-page"])
addElementToDisplayMemory(["#login-page"],"block")
recallDisplay()
})


const hideFormsButton=document.querySelector("#go-to-home-page")
hideFormsButton.addEventListener('click',()=>{
addElementToDisplayMemory(["#registration-page"])
addElementToDisplayMemory([".account-forms"])
addElementToDisplayMemory([".mayotrics-home"],"flex")
recallDisplay()
})

//policy should allow the user to log in directly after creating account

//console.log(checkUser("cemayo","user"))//invoke "match" to get match object, "id" to get uid integer,"user" to get username string
function accessSavedProfiles(){
return savedProfiles
}

let loginBtn=document.querySelector("#login")

//start of login replacement code

function checkDisabledButton(){
const userString=document.querySelector("#username").value
let passString=document.querySelector("#password").value
let check=document.querySelector("#login")
if(passString && userString){
check.disabled=false;
}
}
document.querySelector("#username").addEventListener('input',checkDisabledButton)

document.querySelector("#password").addEventListener('input',checkDisabledButton)



function showProfile(){
addElementToDisplayMemory([".mayotrics-home"])
addElementToDisplayMemory([".show-profile"],"block")
addElementToDisplayMemory(["#show-profile"])
recallDisplay()
window.location.reload(true)
}

document.querySelector("#show-profile").addEventListener('click',showProfile)

function autoLoginDisplaySwitch(){
addElementToDisplayMemory(["#show-profile"],"block")
addElementToDisplayMemory([".sign-in-sign-up"])
recallDisplay()
}

function loginActiveProfile(){
let status=accessSessionData()[2].status
const lastActiveUser=listedProfiles()[0]
//set session data
//hide registration form and proceed to home
const user=listedProfiles()[0].savedName
let pass=listedProfiles()[0].savedPassword
let matchUser=checkUser(user,"match")||[]
let matchPassword=passwords.filter(x=>{
return x.password===pass
})||[]

if(accessSessionData()[2].status){
if(matchUser.length!==0 && matchPassword.length!==0){
const alertMessage="Welcome,you are now logged in!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
const sessionDataToUse=accessSessionData()//all session data
let userID=matchUser[0].uid
let session=accessSessionData()[0].pageSession;
let {id,sessionID}=session
id=userID

let randomSessionID=Date.now()||Math.floor(Math.random()*1000000)
for(let p=0; p<sessionDataToUse.length; p++){
for(let key in sessionDataToUse[p]){
if(key==="pageSession"){
sessionDataToUse[p][key]={regularID:userID,generatedSessionID:randomSessionID}
break
}
}
}
accountInit.storeDataInSession("user",sessionDataToUse)

// auto login display switch
//autoLoginDisplaySwitch(id)
//disable auto login for current session
for(let p=0; p<sessionDataToUse.length; p++){
for(let key in sessionDataToUse[p]){
if(key==="status"){
sessionDataToUse[p][key]=false
break
}
}
}
accountInit.storeDataInSession("user",sessionDataToUse)
autoLoginDisplaySwitch()
}else{
//do nothing if password is wrong
}

}else{
//do nothing if status is false
}
console.warn(accessSessionData()[2].status)
let userName=usernames.filter(x=>{
  return x.userName===lastActiveUser.savedName
})||[]
document.querySelector(".logged-user").textContent=`Hey,${userName[0].firstName}, thank you for creating an account with mayotrics, product launch coming soon!`
}

loginActiveProfile()

function login(){
//hide registration form and proceed to home
const user=document.querySelector("#username").value
let pass=document.querySelector("#password").value
let matchUser=checkUser(user,"match")||[]
let matchPassword=passwords.filter(x=>{
return x.password===pass
})||[]
if(matchUser.length!==0 && matchPassword.length!==0){
const alertMessage="Welcome,you are now logged in!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
const sessionDataToUse=accessSessionData()//all session data
let userID=matchUser[0].uid
let session=accessSessionData()[0].pageSession;
let {id,sessionID}=session
id=userID

let randomSessionID=Date.now()||Math.floor(Math.random()*1000000)
for(let p=0; p<sessionDataToUse.length; p++){
for(let key in sessionDataToUse[p]){
if(key==="pageSession"){
sessionDataToUse[p][key]={regularID:userID,generatedSessionID:randomSessionID}
break
}
}
accountInit.storeDataInSession("user",sessionDataToUse)
}

document.querySelector("#show-profile").style.border="2px solid blue"
addElementToDisplayMemory(["#show-profile"])
const loginLogToSave={uid:matchUser[0].uid,time:new Date().toLocaleString()}
let updatedSlogs=[loginLogToSave,...logins]
logins=updatedSlogs


//save a profile
let loginObject={savedID:userID,savedName:user,savedPassword:pass}
const matchWithUserObject=profilesSaved.filter(x=>{
return x.savedName===user
})

profilesSaved=profilesSaved.filter(x=>{
return x.savedName!==user;
})

profilesSaved=[loginObject,...profilesSaved]//Saved profile init
loginData.storeDataInStorage(profilesSaved)
storeAllData()
if(matchWithUserObject.length>0){
console.warn("cant save this profile because it is already saved!")
}else{

const alertMessage="Your details have been saved so that you dont have to enter them next time!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)

}



//display memory logic
addElementToDisplayMemory(["#login-page"])
addElementToDisplayMemory([".account-forms"])
addElementToDisplayMemory([".show-profile"],"block")
window.location.reload(true)
//
}else if(matchUser.length===0){
console.warn("The username does not exist!")
const alertMessage="The username is not found, please retry!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}else if(matchPassword.length===0){
const alertMessage="your password is wrong, retry or click forgot password to retrieve your password!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}else{
//console.warn("something went wrong, consult our support team")
const alertMessage="something went wrong, consult our support team!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}

recallDisplay()
}

loginBtn.addEventListener('click',login)
//login()//provide a button to display forms to rese password or to signup
let logoutBtn=document.querySelector("#log-out")

logoutBtn.addEventListener('click',()=>{
if(confirm("Are you sure you want to log out?")){
addElementToDisplayMemory([".show-profile"])
//addElementToDisplayMemory(["#show-profile"])
addElementToDisplayMemory([".mayotrics-home"],"grid")
addElementToDisplayMemory([".sign-in-sign-up"],"block")
addElementToDisplayMemory([".logged-user"])
recallDisplay()
const alertMessage="You have logged out!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}
})

let switchElement=""
async function assignDOM(){
switchElement=await document.querySelector("#switch-task-space")
switchElement.addEventListener('click',switchToTaskSpace)
}
assignDOM()

function switchToTaskSpace(){
addElementToDisplayMemory([".mayotrics-home"])
displayTaskForms(".add-task",regularID)
addElementToDisplayMemory([".user-tasks"],"flex")
const alertMessage="Welcome to task space!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
console.log(userData)
if(userData){
addElementToDisplayMemory([".add-task"],"grid")
addElementToDisplayMemory([".view-task"])

}else{
displayTaskForms(".add-task",regularID)
addElementToDisplayMemory([".add-task"])
addElementToDisplayMemory([".view-task"],"grid")
}


recallDisplay()
}


/*let obj={
id:555535535556656,
taskID:7626667673,
year:2026,
month:6,
date:23,
hour:14,
min:52,
seconds:00,
task:{
status:"pending",
title:"Marking",
people:"self",
desc:"Mark gradeseven work",
data:"No data available",
ends:[]
},
setDate:12
}*/

function displayTaskForms(field,id){
let now=Date.now()
}

function submitTask(){
const taskYear=document.querySelector("#task-year").value
const taskMonth=document.querySelector("#task-month").value
const taskDate=document.querySelector("#task-date").value
const taskHour=document.querySelector("#task-hour").value
const taskMinutes=document.querySelector("#task-minutes").value
const taskTitle=document.querySelector("#task-title").value
const taskPeople=document.querySelector("#task-people").value
const taskDescription=document.querySelector("#task-description").value
const taskEndsOn=document.querySelector("#task-ends").value
alert(taskEndsOn)
}

let submitTaskBtn=""
function assignSelector(){
submitTaskBtn=document.querySelector("#save-task")
}
assignSelector()
submitTaskBtn?submitTaskBtn.addEventListener('click',submitTask):null;


checkUser("jayson","npt")

function accessSecurityData(){
return securityCenter.getDataFromStorage()
}
function updateSecurity(){
const securityQuestionList=[
"which school did you study","what is your favourite hobby","what is your faourite color","what is your nickname"
]

let secQuiz=securityQuestionList[1]
let answerProvided="coding"
/*for(let i=0; i<securityQuestionList.length; i++){
let element=`<button id=${i} onclick="updateSecurity()">${securityQuestionList}</button`//to be implemented with html
}*/
let phoneInput=55555658
let mailAdressInput="slopez@gmail.com"
let UserSecurityData=accessSecurityData()
let userID=checkUser("slopez","id")
console.log(userID)

if(userID){
let dataMatch=UserSecurityData.filter(x=>{
return x.uid===userID
})
console.log("security matches")
console.log(dataMatch)
function changeSecurity(){
/*const {securityQuestion,code,email,phone}=UserSecurityData
const storedQs=securityQuestion.qs
const storedAns=securityQuestion.ans
phoneInput=phone
secQuiz=storedQs
answerProvided=storedAns
mailAdressInput=email*/
//above details to be assigned for html input field b4 edittion
for(let i=0; i<UserSecurityData.length; i++){
if(UserSecurityData[i].uid===userID){
UserSecurityData[i]={uid:userID,securityQuestion:{qs:secQuiz,ans:answerProvided},code:"",email:mailAdressInput,phone:phoneInput}
console.log("updating...")
break
}
}
securityCenter.storeDataInStorage(UserSecurityData)
}
changeSecurity()

if(dataMatch.length!==0){
console.warn("the user already has profile security!")
}else{
let updatedSecurityData=[...UserSecurityData,{uid:userID,securityQuestion:{qs:secQuiz,ans:answerProvided},code:"",email:mailAdressInput,phone:phoneInput}]
//securityCenter.storeDataInStorage(updatedSecurityData)
console.log("new security data is saved!")
}
}else{
console.log("we could not find the id, please contact support!")
}


}
//updateSecurity()
console.log(accessSecurityData())
function securityManager(){
const nameToGetCode="mate"//html input
const inputCode=354334//html input
const matchName=checkUser(nameToGetCode,"match")
const userID=checkUser(nameToGetCode,"id")
function generateCode(id){
let userSecurityData=accessSecurityData().filter(x=>{
return x.uid===id
})[0]
console.log(userSecurityData)
}
generateCode(userID)

let userSecurityData=accessSecurityData().filter(x=>{
return x.uid===userID
})[0]

if(matchName.length!==0){
if(userSecurityData){
const {securityQuestion,code,email,phone}=userSecurityData
const storedQs=securityQuestion.qs
const storedAns=securityQuestion.ans
//server to create the code and send to user
let notify=code//send code to user
if(inputCode===code){
resetPassword(nameToGetCode,435677,"Sierra7z1&")
}

console.log("your code is "+ code)
}else{
info=[...info,"No security data for this account, please reach out to support quoting your user id : "+userID]
}

}else{
console.warn("our server can not find your username, please try onother username or seek support!")
}

}

//securityManager()

//PROFILE CRUD
//async function goToProfile(){//FUNCTION REMOVED


id=regularID
sessionID=generatedSessionID
console.log(`session id logged in : ${id}, session id : ${sessionID}`)
const userLocation=locationData.filter(x=>{return x.uid===id})[0]||[]//to bes displayed in html if not null
const savedLocationName=userLocation.inputLocation
const userCoord=userLocation.preciseLocation||[]
let preciseObj=[]||[]

async function getPreciseLocation(){
let userAcc=true
const options={
enableHighAccuracy:userAcc,
timeout:120000,
maximumAge:0
}

function error(err){
let errorVar=`unable to get your location ${err.code}, ${err.message}`
}

function success(pos){
const crd=pos.coords
const longitude=crd.longitude
const latitude=crd.latitude
const accuracy=crd.accuracy
const coordinatesObject={longitude:longitude,latiude:latitude,accuracy:accuracy}
if(crd){
const alertMessage=JSON.stringify(coordinatesObject)
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
for(let k=0; k<locationData.length; k++){
if(locationData[k].uid===regularID){
locationData[k].preciseLocation=coordinatesObject;
storeAllData()
break
}
}
}
}

const preciseLocationReasult=await navigator.geolocation.getCurrentPosition(success,error,options)
/*for(let k=0; k<locationData.length; k++){
if(locationData[k].uid===regularID){
locationData[k].preciseLocation=preciseLocationReasult
storeAllData()
break
}
}*/
//return preciseLocationReasult
}

function addInputLocation(){
getPreciseLocation()
const preciseDeviceLocation=getPreciseLocation()
let retrievedUserLocation=locationData.filter(x=>{return x.uid===regularID})
const enteredLocation=document.querySelector("#added-location").value;
if(retrievedUserLocation.length===0){
const locationInput={uid:regularID,inputLocation:enteredLocation,preciseLocation:preciseDeviceLocation||""}
locationData=[...locationData,locationInput]
storeAllData()
const alertMessage="Location saved successfuly!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}else{
//const alertMessage="This location exists!"
//initiateTimeOutAlerts(notificationField,alertMessage,4,1000)

initiateTimeOutAlerts(notificationField,JSON.stringify(retrievedUserLocation),4,1000)
}

//addElements([".edit-location"])
//addElements([".location-field"],"block")
}



function updateUserLocation(){
getPreciseLocation()
const enteredLocation=document.querySelector("#added-location").value;
if(enteredLocation){
let retrievedUserLocation=locationData.filter(x=>{return x.uid===regularID})
for(let k=0; k<locationData.length; k++){
if(locationData[k].uid===regularID){
locationData[k].inputLocation=enteredLocation
storeAllData()
break
}
}
const alertMessage="Location updated successfuly!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}else{
const alertMessage="Location can not be blank!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}
//addElements([".edit-location"])
//addElements([".location-field","#switch-location-ops"],"block")
//recallDisplay()

}

function addEmail(){
const emailValue=document.querySelector("#add-email").value;
let emailInput={uid:regularID,email:emailValue}
let retrievedEmail=emails.filter(x=>{return x.uid===regularID})
if(retrievedEmail.length!==0){
const alertMessage="Email already saved!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}else{
emails=[...emails,emailInput]
storeAllData()
const alertMessage="Email successfully added!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}
}

function updateEmail(){
const changeEmailTo=document.querySelector("#add-email").value;
for(let j=0; j<emails.length; j++){//
if(emails[j].uid===regularID){//
emails[j]={uid:regularID,email:changeEmailTo}
storeAllData()
const alertMessage="Email successfully changed!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
break
}
}
}


function addALink(){

let checkAllLinks=accountLink.filter(x=>{
return x.uid===regularID
})

if(checkAllLinks.length>=3){
const alertMessage="you reached maximum links allowed to save!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
console.log(checkAllLinks)
}else{
const linkToAdd=document.querySelector("#input-link").value;
accountLink=[...accountLink,{uid:regularID,links:[linkToAdd]}]
storeAllData();
const alertMessage="Link saved"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}
}





function updateUserLinks(){
const linkToAdd="www.superiorlabs.org"
let checkAllLinks=accountLink.filter(x=>{
return x.uid===regularID
})


let linkArr=checkAllLinks[0].links
console.log(linkArr[0])
let filterLink=linkArr.filter(x=>{
return x===linkToAdd
})

if(filterLink.length!==0){
console.warn("similar link is already stored!")
}else{
const updatedUserLinks=[...linkArr,linkToAdd]
for(let i=0; i<accountLink.length; i++){
if(accountLink[i].uid===regularID){
accountLink[i]={uid:regularID,links:updatedUserLinks}
//console.log(accountLink[i].links)
console.log("saving your link!")
break
}
//console.log(accountLink)
}

   }

}
//updateUserLinks()

function setGoal(){
id=regularID
const userGoal=document.querySelector("#add-goal").value
const goalDetail=document.querySelector("#add-goal-description").value
let userGoalCheck=myGoals.filter(x=>{return x.uid===id})||[]
if(userGoalCheck.length!==0){
const alertMessage="You have a saved goal already!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}else{
myGoals=[...myGoals,{uid:id,goals:{goal:userGoal,detail:goalDetail}}]
accountLogs=[...accountLogs,{uid:id,log:`I set a goal : ${userGoal} on ${new Date().toISOString()},user id : ${id}`}]
storeAllData();
const alertMessage="goal saved!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
}

}

function updateGoal(){
const userGoal=document.querySelector("#add-goal").value
const goalDetail=document.querySelector("#add-goal-description").value
let previousGoal=myGoals.filter(x=>{
return x.uid===id
})[0]
const {goal,detail}=previousGoal
for(let k=0; k<myGoals.length; k++){
if(myGoals[k].uid===id){
console.log(JSON.stringify(myGoals[k]))
myGoals[k]={uid:id,goals:{goal:userGoal,detail:goalDetail}}
accountLogs=[...accountLogs,{uid:id,log:`changed goal from ${goal},${detail} to : ${userGoal} : ${goalDetail} on ${new Date().toISOString()},user id : ${id}`}]
storeAllData();
const alertMessage="goal updated!"
initiateTimeOutAlerts(notificationField,alertMessage,4,1000) 
break
}

}
}



//DISPLAY DATA
function displayUserData(){
let userName=usernames.filter(x=>{
  return x.uid===id
})||[]
console.log(userName)
const usernameField=document.querySelector(".user-name")
usernameField.textContent=userName.length!==0?`@${userName[0].userName}`:"Something went wrong!"

let userGoal=myGoals.filter(x=>{
return x.uid===id
})||[]

const goalField=document.querySelector(".goals")
if(userGoal.length!==0){
const goalObject=userGoal[0].goals
const {goal,detail}=goalObject
goalField.textContent=`goal : ${goal}, detail : ${detail}`
document.querySelector("#switch-goal-ops").textContent="edit"
}else{
goalField.textContent="No goal set"
document.querySelector("#switch-goal-ops").textContent="add"
}

let userLoc=locationData.filter(x=>{
return x.uid===id
})||[]
const locationField=document.querySelector(".location-field")
const deviceLocationField=document.querySelector(".device-location")
if(userLoc.length!==0){
const savedUserLocation=userLoc[0].inputLocation
const savedDeviceLocation=userLoc[0].preciseLocation


locationField.textContent=`Location : ${savedUserLocation}`
document.querySelector("#switch-location-ops").textContent="edit"
if(savedDeviceLocation){
const extractedLongitude=savedDeviceLocation.longitude||""
const extractedLatitude=savedDeviceLocation.latitude||""
const locationAccuracy=savedDeviceLocation.accuracy||""
const stringifiedCoordinates=`GPS positioning: longitude: ${extractedLongitude}, latitude: ${extractedLatitude},accuracy: ${locationAccuracy}%`||"";
deviceLocationField.textContent=stringifiedCoordinates;
}else{
deviceLocationField.textContent="Device location unavailable";
}

}else{
locationField.textContent="You need to add your location"
document.querySelector("#switch-location-ops").textContent="add"
}


let userDate=dateJoined.filter(x=>{
return x.uid===id
})

const dateField=document.querySelector(".date-joined")
if(userDate.length!==0){
dateField.textContent=`Joined on : ${userDate[0].joined}`
}else{
dateField.textContent="System failure, we are working on it"
}



let userLinks=accountLink.filter(x=>{
return x.uid===id
})
const linksField=document.querySelector(".links")
if(userLinks.length!==0){
console.log(userLinks)
const linksList=userLinks[0].links
linksList.map(x=>{
let eachLinkDiv=document.createElement("div")
eachLinkDiv.innerHTML=`<a href=x target="blank">${x}</a>`
linksField.appendChild(eachLinkDiv)
})
document.querySelector("#switch-link-ops").textContent="edit"

}else{
linksField.textContent="No links saved"

document.querySelector("#switch-link-ops").textContent="add"

}

let userEmails=emails.filter(x=>{
return x.uid===id
})
const emailsField=document.querySelector(".emails")
if(userEmails.length!==0){
userEmails.map(x=>{
let eachEmailDiv=document.createElement("div")
eachEmailDiv.textContent=x.email
emailsField.appendChild(eachEmailDiv)
})
}else{
emailsField.textContent="No emails added"
}

let Password=passwords.filter(x=>{
return x.uid===id
})


let userLinkAccount=linkedAccounts.filter(x=>{
return x.uid===id
})


let userHome=myHome.filter(x=>{
return x.uid===id
})
const homeItemsField=document.querySelector(".home-items")
if(userHome.length!==0){
userHome.map(x=>{
let eachHomeDiv=document.createElement("div")
eachHomeDiv.textContent=x
homeItemsField.appendChild(eachHomeDiv)
})
}else{
homeItemsField.textContent="Home not customized!"
}



let userLogs=accountLogs.filter(x=>{
return x.uid===id
})
const accountLogsField=document.querySelector(".account-logs")

let userMails=mails.filter(x=>{
return x.uid===id
})
const messageField=document.querySelector(".messages")
}
regularID?displayUserData():null;


//closing brace for goToProfile function//FUNCTION REMOVED
//goToProfile()

function manageProfileField(conditionX,showOnPositive,showOnNegative,hide){
if(conditionX){
addElements(showOnPositive,"block")
addElements(showOnNegative)
addElements(hide)
recallDisplay()
}else{
addElements(showOnPositive)
addElements(hide)
addElements(showOnNegative,"block")
recallDisplay()
}

}

function addElements(elements,state){
for(let k of elements){
if(k){
addElementToDisplayMemory([k],state)
}
}



}

//document.querySelector()


let indexToShow=0;


let editiableProfileItems=[".add-goal",".add-location",".add-link",".edit-email",".add-home-items"]



function setUpGoalDIV(){
let userGoal=myGoals.filter(x=>{
return x.uid===id
})||[]
const goalField=document.querySelector("#goals").value;
const goalDetailField=document.querySelector("#goal-detail").value;
const addUpdateBtn=document.querySelector("#add-update");
if(userGoal.length!==0){
const goalObject=userGoal[0].goals
const {goal,detail}=goalObject
goalField.textContent=goal;
goalDetailField.textContent=detail;
document.querySelector("#save-goal").textContent="Update"
}else{
document.querySelector("#save-goal").textContent="Add"
}
}


function disableButton(idx,conditionX){
if(conditionX){
document.querySelector(idx).disabled=true;
}else{
document.querySelector(idx).disabled=false;
}
}


function profileEdit(){
addElements([".edit-profile-details"],"block");
addElements([".show-profile"]);
recallDisplay()
startEditing()
}

function quitProfileEdit(){
indexToShow=0;
addElements([".edit-profile-details"]);
addElements([".show-profile"],"block");
const alertMessage="You have successfully updated your profile!"
initiateTimeOutAlerts(document.querySelector("#in-page-alerts"),alertMessage,4,1000);
recallDisplay()
}



function checkEndOfEditing(targetX,conditionX,contentX){
if(conditionX){
document.querySelector(targetX).value=contentX;

}else{
document.querySelector(targetX).value="Skip";
}
}


document.querySelector("#edit-profile").addEventListener('click',profileEdit)

function startEditing(){
let selectorsForProfile=editiableProfileItems;
for(let i=0; i<selectorsForProfile.length; i++){
if(i===indexToShow){
document.querySelector(selectorsForProfile[i]).style.display="block";
}else{
document.querySelector(selectorsForProfile[i]).style.display="none";
}
document.querySelector("#skip-profile-field").addEventListener('click',goToNextProfileItem)
}
checkEndOfEditing("#skip-profile-field",indexToShow===selectorsForProfile.length-1,"finish");
//exceptions handling
if(indexToShow<1){
checkGoalFields()
}
}

function goToPreviousProfileItem(){
document.querySelector("#skip-profile-field").style.display="block";
document.querySelector("#quit-profile-edit").style.display="none";
let selectorsForProfile=editiableProfileItems;
if(indexToShow!==0){
indexToShow--;
}else{}
startEditing();
disableButton("#previous-item",indexToShow===0);
}


function goToNextProfileItem(){
let selectorsForProfile=editiableProfileItems;
if(indexToShow<selectorsForProfile.length-1){
indexToShow++;
startEditing()
}else{}
//disableButton("#previous-item",indexToShow===0);
CheckAnyProfileInputField();
if(indexToShow===editiableProfileItems.length-1){
document.querySelector("#skip-profile-field").style.display="none";
document.querySelector("#quit-profile-edit").style.display="block";
document.querySelector("#quit-profile-edit").addEventListener('click',quitProfileEdit)
}else if(indexToShow<editiableProfileItems.length-1){
document.querySelector("#skip-profile-field").style.display="block";
document.querySelector("#quit-profile-edit").style.display="none";
document.querySelector("#skip-profile-field").addEventListener('click',goToNextProfileItem)
}else{
//do nothing
}

}

function quitProfileEdition(){
addElementToDisplayMemory([".edit-profile-details"])
addElementToDisplayMemory([".show-profile"],"block")
recallDisplay()
displayUserData()
}

//document.querySelector().addEventListener('click',async ()=>{})//to be copied

document.querySelector("#previous-item").addEventListener('click',goToPreviousProfileItem)


//Edit goal
function checkGoalFields(){
let userGoal=myGoals.filter(x=>{
return x.uid===id
})||[]

const goalField=document.querySelector(".goals")
if(userGoal.length!==0){
document.querySelector("#save-goal").addEventListener('click',()=>{
updateGoal()
})
const goalObject=userGoal[0].goals;
const {goal,detail}=goalObject;
goalField.textContent=`goal : ${goal}, detail : ${detail}`;
document.querySelector("#add-goal").value=goal;
document.querySelector("#add-goal-description").value=detail;
document.querySelector("#save-goal").value="save";
}else{
document.querySelector("#save-goal").value="update"
document.querySelector("#save-goal").addEventListener('click',()=>{
setGoal()
})
}
}

/*Edit location*/
function checkLocationFields(){
let userLoc=locationData.filter(x=>{
return x.uid===id
})||[]
if(userLoc.length!==0){
const savedUserLocation=userLoc[0].inputLocation
document.querySelector("#added-location").value=savedUserLocation;
document.querySelector("#add-update-location").value="update"
document.querySelector("#add-update-location").addEventListener('click',updateUserLocation)
}else{
document.querySelector("#add-update-location").value="save"
document.querySelector("#add-update-location").addEventListener('click',addInputLocation)
}
}


function checkLinkFields(){
let userLinks=accountLink.filter(x=>{
return x.uid===id
})
const linksField=document.querySelector(".links")
if(userLinks.length!==0){
const linksList=userLinks[0].links
let tbodyElement=document.querySelector(".links-table-body");
tbodyElement.innerHTML="";
for(let i=0; i<userLinks.length; i++){
let tableRow=document.createElement("tr");
tableRow.innerHTML=`
<td><a href=${userLinks[i].links} target="blank">${userLinks[i].links}</a><td>
<td>
<button>edit</button>
<button>delete</button>
<td>
`
tbodyElement.appendChild(tableRow);
}
}
}
document.querySelector("#add-update-link").addEventListener('click',()=>{
addALink()
})

function checkEmailField(){
let userEmails=emails.filter(x=>{
return x.uid===id
})
const emailsField=document.querySelector(".emails")
if(userEmails.length!==0){
document.querySelector("#add-email").value=userEmails[0].email
document.querySelector("#add-update-email").addEventListener('click',updateEmail)
}else{
document.querySelector("#add-update-email").value="save"
document.querySelector("#add-update-email").addEventListener('click',addEmail)
}

}

function CheckAnyProfileInputField(){
const allFunctions=[checkGoalFields,checkLocationFields,checkLinkFields,checkEmailField]
checkGoalFields()
for(let m=0; m<allFunctions.length; m++){
if(m===indexToShow){
allFunctions[m]();
const alertMessage=`${m}() is under execution`
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
break;
}
}


}

//}
/*
let userName=usernames.filter(x=>{
  return x.uid===id
})||[]

let userLoc=locationData.filter(x=>{
return x.uid===id
})||[]
let userDate=dateJoined.filter(x=>{
return x.uid===id
})
let userLinks=accountLink.filter(x=>{
return x.uid===id
})
let userEmails=emails.filter(x=>{
return x.uid===id
})
let Password=passwords.filter(x=>{
return x.uid===id
})
let userLinkAccount=linkedAccounts.filter(x=>{
return x.uid===id
})
let userHome=myHome.filter(x=>{
return x.uid===id
})

let userLogs=accountLogs.filter(x=>{
return x.uid===id
})
let userMails=mails.filter(x=>{
return x.uid===id
})
*/

//reset password

function resetPassword(user,currentPassword,newPassword){
//review security details

let userID=checkUser(user,"id")
const matchPassword=passwords.filter(x=>{
if(x){
return x.uid===userID
}
})//[0].password
console.log(matchPassword)
if(matchPassword!==0){
if(currentPassword===matchPassword){
console.log(currentPassword)
if(newPassword===matchPassword){
info=[...info,"similar password is already stored!"]
}else{
console.log("Updating your password...")
for(let i=0; i<passwords.length; i++){
if(passwords[i].uid===userID){
passwords[i].password=newPassword
accountLogs=[...accountLogs,{uid:passwords[i].uid,log:`passsword successfully changed on ${new Date().toLocaleString()}, user id : ${passwords[i].uid}`}]
break
}
}
}
}else{
info=[...info,"wrong password!"]
}
}else{
alert("no password matches!")
}


}
//resetPassword("slopez","Sierra2000","Sierra2000")

function deleteAccount(user){
let tagMatch=checkUser(user,"match")
const tagCheck=tagMatch.filter(x=>{
return x.tag
})
if(tagCheck.length!==0){
console.warn("This action is forbiden for the above username, this action will be reported!")
}else{
let id=checkUser(user,"id")
usernames=usernames.filter(x=>{
  return x.uid!==id
})||[]
myGoals=myGoals.filter(x=>{
return x.uid!==id
})||[]
locationData=locationData.filter(x=>{
return x.uid!==id
})||[]
dateJoined=dateJoined.filter(x=>{
return x.uid!==id
})
accountLink=accountLink.filter(x=>{
return x.uid!==id
})
emails=emails.filter(x=>{
return x.uid!==id
})
passwords=passwords.filter(x=>{
return x.uid!==id
})
linkedAccounts=linkedAccounts.filter(x=>{
return x.uid!==id
})
myHome=myHome.filter(x=>{
return x.uid!==id
})

accountLogs=accountLogs.filter(x=>{
return x.uid!==id
})
mails=mails.filter(x=>{
return x.uid!==id
})
}

}

//deleteAccount("levy")
function adminCenter(){
let sessionData=accessSessionData()[0].pageSession
console.log(sessionData)
function adminLogin(){
//add admin tag
let tag="admin"
let password="sl293"
let userName="slopez"

let adminUsernames=usernames.filter(x=>{
return x.tag
})

const aid=checkUser(userName,"id")

const matchAdminUsername=checkUser(userName,"user")
const matchAdminPassword=passwords.filter(x=>{
return x.password===password
})
console.log(aid)//tag==="cadmin" && userName==="ceodeeptech" && password==="Sierra7z1&"
if(tag===chiefAdminTag && userName===chiefAdminUsername && password===chiefAdminPassword){
console.log("welcome chief administrator!")
accountInit.storeDataInSession("user",[{pageSession:{regularID:chiefAdminID,generatedSessionID:Math.floor(Math.random()*1000000),tag:"cadmin"}}])
}else if(userName===chiefAdminUsername && password!==chiefAdminPassword && tag===chiefAdminTag){
console.log("Chief administrator's account under compromise, this action may initiate system shut down!")
}else if(matchAdminUsername.length!==0 && matchAdminPassword.length!==0){
console.log("welcome back admin!")
accountInit.storeDataInSession("user",[{pageSession:{regularID:aid,generatedSessionID:Math.floor(Math.random()*1000000)}}])
}else if(matchAdminUsername.length===0 || matchAdminPassword.length===0){
console.log("wrong admin password, for security reasons the username will be sent to the administrator for device tracking!")
}else{
info=[...info,"Login failed wrong credentials"]
criticalLogs=[...criticalLogs,{type:"admin",uid:aid,message:"Attempted adminn login with wrong password!"}]
}

console.log(adminUsernames)
}
adminLogin()
function makeAdmin(adminUsername,adminID,adminName){
let match=adminList.filter(x=>{
return x.name===adminName
})
console.log(match)
console.log("tracker")
if(match.length!==0){
info=[...info,"the user is already registered as an admin!"]
}else{
for(let i=0; i<usernames.length; i++){
if(usernames[i].uid===adminID){
usernames[i]={userName:adminUsername,uid:adminID,name:adminName, tag:"admin"}
console.log("you have been made an admin!")
console.log(usernames[i])
break
}
}
adminList=[...adminList,{name:adminName,uid:adminID}]
console.log(adminID)
}

}

function removeAdmin(adminUsername,adminID,adminName){
let match=adminList.filter(x=>{
return x.name===adminName
})
if(match.length===0){
console.warn("The admin you want to remove does not exist!")
}else{
for(let i=0; i<usernames.length; i++){
if(usernames[i].uid===adminID){
usernames[i]={userName:adminUsername,uid:adminID,name:adminName}
console.log("you have been removed as admin!")
console.log(usernames[i])
adminList=adminList.filter(x=>{return x.name!==adminName})
break
}
}
}}

function chiefAdminPanel(){
//usernames=[...usernames,{usname:"CEO Mathew",uid:"ceodeeptech",nameInput:"Mayo Mathew Kiprop", tag:"cadmin"}]
//chiefAdmin.storeDataInStorage({details:{password:"Sierra7z1&",username:"ceomathew",tag:"cadmin"},appStats:{logins:"",passResets:"",registers:""}}
let admins=usernames.filter(x=>{
return x.tag==="admin"
})
console.log(admins)
let user="jayson"
let adminID=checkUser(user,"id")
let adminName=checkUser(user,"npt")
let adminUsername=checkUser(user,"user")
console.log(adminID)
makeAdmin(adminUsername,adminID,adminName)
//removeAdmin(adminUsername,adminID,adminName)
}
chiefAdminPanel()


function resetPasswordThroughBackDoor(){
let admin="Mayo Mathew"
let username="jayson"
let userID=checkUser(username,"id")
let newPass="Sierra"
let confirm="Sierra"
let currentPass=passwords.filter(x=>{
return x.uid===userID
})
console.log("track pass reset below")
if(userID){
console.log("Username found!, proceeding...")
if(currentPass.length!==0){
resetPassword(username,currentPass,newPass)
passResets=[...passResets,{uid:userID,admin:admin,date:new Date().toLocaleString()}]
}
}else{
console.warn("process terminated as username is not found, please try again!")
}
resetPassword(username,currentPass,newPass)


}
resetPasswordThroughBackDoor()
}
//adminCenter()
function createMessage(){
const possibleMessages=["bug","quality","recommendation","payement","something else","account"]
const selector=Math.floor(Math.random()*possibleMessages.length)

const selected=possibleMessages[selector]

let messageDetail="Mehn this issue keeps on happening and i feel fucked up, fuck this shit and refund my godamn money, motherfuckers!"
let ran=Math.floor(Math.random()*usernames.length)
console.log(usernames[ran])
console.log("username tracker")
let gen=Math.floor(Math.random()*usernames.length)
let userID=usernames[gen].uid
let adminToReview=usernames.filter(x=>{
return x.tag
})
let ln=Math.floor(Math.random()*adminListID.length)
let adminSelected=adminListID[ln]
let adminID=checkUser("lopez","id")
console.log(adminSelected)
const accomplished=false
const reviewStatus="not reviewed"
const adminTaskID=Date.now()||Math.floor(Math.random()*10000)
console.log(adminTaskID)
if(adminSelected){
if(selected==="payement"){
console.log("the payement will be worked on!")
messages=[...messages,{title:selected,uid:userID,detail:messageDetail,handlerID:adminID,taskID:adminTaskID,accomplished:accomplished,reviewStatus:"not reviewed"}]
console.log("messages")
}else if(selected==="bug"){
messages=[...messages,{title:selected,uid:userID,detail:messageDetail,handlerID:adminSelected,taskID:adminTaskID,accomplished:accomplished,reviewStatus:"not reviewed"}]
console.log("bug!")
}else if(selected==="quality"){
messages=[...messages,{title:selected,uid:userID,detail:messageDetail,handlerID:adminSelected,taskID:adminTaskID,accomplished:accomplished,reviewStatus:"not reviewed"}]
console.log("qualirt!")
}else if(selected==="recommendation"){
messages=[...messages,{title:selected,uid:userID,detail:messageDetail,handlerID:adminSelected,taskID:adminTaskID,accomplished:accomplished,reviewStatus:"not reviewed"}]
console.log("thank you for recommending!")
}else if(selected==="something else"){
messages=[...messages,{title:selected,uid:userID,detail:messageDetail,handlerID:adminSelected,taskID:adminTaskID,accomplished:accomplished,reviewStatus:"not reviewed"}]
console.log("selected something else!")
}else if(selected==="account"){

}else{
console.log("the error is not recognized!")
}
}else{
info=[...info,"No admin is available to handle the query!"]
}
}

adminList=adminList.filter(x=>{
if(x){
return x.name==="Jayson Preston"|| x.name==="Stephanie Lopez"
}
})
console.log("track taskCheck below1")
//createMessage()

function submitAsAccomplished(){
let taskID=6964
let findMatchInAdminTasks=adminChecks.filter(x=>{
return x.taskID===taskID
})
console.log(findMatchInAdminTasks)
if(findMatchInAdminTasks.length!==0){
console.warn("Similar Query task is already submitted to the chief admin, please wait for response or conduct the admin, thank you!")
}else{
for(let i=0; i<messages.length; i++){
if(messages[i].taskID===taskID){
messages[i].accomplished=true
messages[i].reviewStatus="under review"
adminChecks=[...adminChecks,messages[i]]
break
}
}
}

}
//submitAsAccomplished()

function checkOutTasks(){

function failReview(){
let id=1756
for(let i=0; i<adminChecks.length; i++){
for(let j=0; j<messages.length; j++){
if(adminChecks[i].taskID===id && adminChecks[i].taskID===messages[j].taskID){
messages[j].accomplished=false
messages[j].reviewStatus="failed review"
adminChecks=adminChecks.filter(x=>{
return x.taskID!==id
})
break
//
}
}//
}
}
failReview()

function approveReview(){
let id=5773
for(let i=0; i<adminChecks.length; i++){
for(let j=0; j<messages.length; j++){
if(adminChecks[i].taskID===id && adminChecks[i].taskID===messages[j].taskID){
messages[j].accomplished=true
messages[j].reviewStatus="successfully reviewed"
adminChecks=adminChecks.filter(x=>{
return x.taskID!==id
})
break
//
}
}//
}
}
//approveReview()

}
//checkOutTasks()

function deleteMessages(){
//use options method in javascript to select what to delete
let reviewed=false
let notReviewed=false
let allMessages=false
function deleteReviewed(){
if(confirm("This action will delete all messages that have been reviewed by the admin!")){
messages=messages.filter(x=>{
return x.reviewStatus!=="successfully reviewed"
})
}else{
console.debug("Action cancelled!")
}
}
//deleteReviewed()

function deleteDIsapproved(){//
if(confirm("This action will delete all messages that have been disapproved by the admin!")){
messages=messages.filter(x=>{
return x.reviewStatus!=="failed review"})
}else{
console.log("Action cancelled!")
}
}
//deleteDIsapproved()

function deleteUnsubmitted(){
if(confirm("This action will delete all messages that have been submitted by the admin!")){
messages=messages.filter(x=>{
return x.reviewStatus==="not reviewed"})
}else{
console.log("Action cancelled!")
}
}
//deleteUnsubmitted()

function deleteAll(){
if(confirm("This action will delete all messages!")){
messages=[]
}else{
console.log("Action cancelled!")
}
}
deleteAll()
}//
//deleteMessages()
console.log("track c checkouts")
console.log(adminChecks)

//console.log(JSON.stringify(administrativeData()))
//WARNING : NO LOGIC CODE BEYOND HERE, ELSE ANY CODE BELLOW THIS LINE WILL NOT HAVE ITS DATA STORED!
function storeAllData(){
accountInit.storeDataInStorage({
  profileData:{usernames,uid,locationData,dateJoined,accountLink},
  accountAndBilling:{emails,passwords,myGoals,linkedAccounts},
  myHome,
    accountLogs,
  mails})
}
storeAllData()


function saveAdministrativeData(){
chiefAdmin.storeDataInStorage({
details:{chiefAdminPassword,chiefAdminUsername,chiefAdminID,chiefAdminTag},
adminList,
appStats:{logins,passResets,messages,criticalLogs,adminChecks}})
}
saveAdministrativeData()
//console.log(usernames)
}catch(e){
let prev=accountInitErr.getDataFromStorage()||[]
let err=""
if(e){
err=e.message+" "+e.line
let updated=[...prev,err]
console.warn(updated)
const alertMessage=e.message
let notificationField=document.querySelector("#general-notification");
initiateTimeOutAlerts(notificationField,alertMessage,4,1000)
accountInitErr.storeDataInStorage(updated)
}
}

//}//function ends here
//accountManager()
//end of script


//end of critical event listener
})