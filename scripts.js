// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){
let takeOffBtn=document.getElementById("takeoff");
takeOffBtn.addEventListener('click',function(){
    let isReadyToLaunch=window.confirm("Space shuttle ready for takeoff");
    if(isReadyToLaunch){
        document.getElementById('flightStatus').innerText="Shuttle in flight";
        document.getElementById("shuttleBackground").setAttribute('style','background-color:blue');
        document.getElementById('spaceShuttleHeight').innerText="10000";
    }
});
    let landBtn=document.getElementById('landing');
    landBtn.addEventListener('click',function(){
        let isReadyToLand=window.confirm("The shuttle is landing.Landing gear engaged");
        if(isReadyToLand){
            document.getElementById('flightStatus').innerText="The shuttle has landed";
            document.getElementById("shuttleBackground").setAttribute('style','background-color:green');
            document.getElementById('spaceShuttleHeight').innerText="0";
        }
        
    });
    let abortBtn=document.getElementById('missionAbort');
        abortBtn.addEventListener('click', function(){
            let isAbortMission=window.confirm('Confirm that you want to abort mission');
            if(isAbortMission){
                document.getElementById('flightStatus').innerText="Mission Aborted";
                document.getElementById("shuttleBackground").setAttribute('style','background-color:green');
                document.getElementById('spaceShuttleHeight').innerText="0";

            }
        });

    let upBtn=document.getElementById('up');
    upBtn.addEventListener('click',function(){
            let shuttleHeight=document.getElementById('spaceShuttleHeight');
            let shuttleHeightAmount=Number(shuttleHeight.innerText);
            shuttleHeightAmount+=10000;
            shuttleHeight.innerText=shuttleHeightAmount;
    });
    let downBtn=document.getElementById('down');
    downBtn.addEventListener('click',function(){
            let shuttleHeight=document.getElementById('spaceShuttleHeight');
            let shuttleHeightAmount=Number(shuttleHeight.innerText);
            shuttleHeightAmount-=10000;
            shuttleHeight.innerText=shuttleHeightAmount;
    });




});