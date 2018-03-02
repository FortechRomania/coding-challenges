/* a team management front-end app */

// using Bootstap, jQuery
$(document).ready(function(){
  
  // hiding some warnings 
  $('#warnDev').hide();
  $('#warnProj').hide();
  $('#warnStat').hide();
  $('#warnDev2').hide();
  $('#warnProj2').hide();
  $('#warnStat2').hide();
  $('#warnD').hide();
  $('#warnP').hide();
  
//oop stuff  
var Developer=function(name,id){
  this.name=name;
  this.id=id;
}

var Project=function(name,id){
  this.name=name;
  this.id=id;
}

var Status=function(id,devId,projId,date,status){
  this.id=id;
  this.devId=devId;
  this.projId=projId;
  this.date=date;
  this.status=status;
}

var devList={
  idMaker:4,
  developers:[{name:'Mark',id:1},{name:'Anna',id:2},{name:'Bob',id:3}],
  addDev:function(newDev){
    this.developers.push(newDev)
  },
  removeDev:function(name){
    for(var i=0;i<this.developers.length;i++){
      if(name==this.developers[i].name){
        this.developers.splice(i,1);
        break;
      }
    }
  },
  getDevName:function(id){
    for(var i=0;i<this.developers.length;i++){
      if(id==this.developers[i].id){
        return this.developers[i].name;
        break;
      }
    }
   }
}

var projList={
  idMaker:3,
  projects:[{name:'Example project 1',id:1},{name:'Example project 2',id:2}],
  addProj:function(newProj){
    this.projects.push(newProj)
  },
  removeProj:function(id){
    for(var i=0;i<this.projects.length;i++){
      if(id==this.projects[i].id){
        this.projects.splice(i,1);
        break;
      }
    }
  },
  getProjName:function(id){
    for(var i=0;i<this.projects.length;i++){
      if(id==this.projects[i].id){
        return this.projects[i].name;
        break;
      }
    }
   }
}

var statusList={
  idMaker:5,
  statuses:[{id:1,devId:1,projId:1,date:new Date().toDateString(),status:'Building Architecture'},             {id:2,devId:2,projId:1,date:new Date('2017-02-04').toDateString(),status:'Styling'},
{id:3,devId:1,projId:2,date:new Date().toDateString(),status:'Building Database'},
 {id:5,devId:3,projId:1,date:new Date('2017-01-10').toDateString(),status:'Acting Busy'}],
  addStatus:function(newStatus){
    this.statuses.push(newStatus)
  },
  modifyStatus:function(id,newStatusMess){
    for(var i=0;i<this.statuses.length;i++){
      if(id==this.statuses[i].id){
        this.statuses[i].status=newStatusMess;
        break;
      }
    }
  },
  deleteFromListStatus:function(id){
    for(var i=0;i<this.statuses.length;i++){
      if(id==this.statuses[i].id){
        this.statuses.splice(i,1);
        break;
      }
    }
  },
  dayStatusSummary:function(){
    var today=new Date().toDateString();
    var toSend=[];
    for(var i=0;i<this.statuses.length;i++){
      if(today==this.statuses[i].date){
        toSend.push(this.statuses[i])
       
      }
    }
    
    return toSend;
  },
  projectPeriod:function(id,start,end){
     var toSend=[];
    
     for(var i=0;i<this.statuses.length;i++){
      var toUnix=new Date(this.statuses[i].date);
      var sec=toUnix.getTime();
      if(id==this.statuses[i].projId && (start<=sec &&  sec<= end)){
        toSend.push(this.statuses[i]);
      }
    }
    return toSend;
  },
  devProjects:function(devId){
    var toSend=[];
    for(var i=0; i<this.statuses.length;i++){
      if(devId==this.statuses[i].devId)
        {toSend.push(this.statuses[i])}
    }
    return toSend;
    
  },
  sortByDate:function(how){
     var stats=this.statuses;
     var hold=new Date(stats[0].date)
     console.log(hold.getTime());
    
     if(how==1){
       var swap=true;
       while(swap){
       swap=false;
      for(var i=0;i<stats.length-1;i++){
        var hold1=new Date(stats[i].date)
        var hold2=new Date(stats[i+1].date)
        
        if ( hold1.getTime() > hold2.getTime() ) {
                var temp = stats[i];
                stats[i] = stats[i+1];
                stats[i+1] = temp;
                swap= true;
            }
      }}}
     else{
       var swap=true;
       while(swap){
       swap=false;
      for(var i=0;i<stats.length-1;i++){
        var hold1=new Date(stats[i].date)
        var hold2=new Date(stats[i+1].date)
        
        if ( hold1.getTime() < hold2.getTime() ) {
                var temp = stats[i];
                stats[i] = stats[i+1];
                stats[i+1] = temp;
                swap= true;
            }
       }}}
  }
  }



//page control stuff
function updateDevs(){
  for(var i=0;i<devList.developers.length;i++){
  $('#devList').append('<tr><td>'+devList.developers[i].id+'</td><td>'+devList.developers[i].name+'</td></tr>');
}
}
updateDevs();
//add dev
$('#entDev').click(function(){
  $('#warnD').hide();
  var name=$('#addDevName').val();
  if(name!=''){
  var id=devList.idMaker;
  devList.idMaker++;
  devList.addDev(new Developer(name,id))
  
  $('#devList').text('');
  $('#addDevName').val('');
  updateDevs();
  }
  else{
    $('#warnD').show();
  }
 
})
//remove dev
$('#removeDev').click(function(){
  
  var name=$('#removeDevName').val();
  
  
  devList.removeDev(name)
  $('#removeDevName').val('');
  $('#devList').text('');
  updateDevs();

})
  
// project management
function updateProjects(){
  for(var i=0;i<projList.projects.length;i++){
  $('#projList').append('<tr><td>'+projList.projects[i].id+'</td><td>'+projList.projects[i].name+'</td></tr>');
}}

updateProjects();

  //add project
$('#entProj').click(function(){
  $('#warnP').hide();
  var name=$('#addProjName').val();
  if(name!=''){
  var id=projList.idMaker;
  projList.idMaker++;
  
  projList.addProj(new Project(name,id))
  
  $('#projList').text('');
  $('#addProjName').val('');
  updateProjects();
  }
  else{
    $('#warnP').show();
  }
})
  // remove project
$('#removeProj').click(function(){
  
  var id=Number($('#removeProjId').val());
  
  projList.removeProj(id)
  
  $('#projList').text('');
  $('#removeProjId').val('');
  updateProjects();
})
//status management
function updateStatuses(){
  for(var i=0;i<statusList.statuses.length;i++){
  var devName=devList.getDevName(statusList.statuses[i].devId);
  var projName=projList.getProjName(statusList.statuses[i].projId)
  
  $('#statusList').append('<tr><td>'+statusList.statuses[i].id+'</td><td>'+devName+'<br>(id:'+statusList.statuses[i].devId+')'+'</td><td>'+projName+'<br>(id:'+statusList.statuses[i].projId+')'+'</td><td>'+statusList.statuses[i].date+'</td><td>'+statusList.statuses[i].status+'</td></tr>')
  }}
updateStatuses();

// check ids for devs,projects and statuses
function checkDevId(id){
  for(var i=0;i<devList.developers.length;i++){
    if(id==devList.developers[i].id)
    {return true;}
  }
  return false;
}
function checkProjId(id){
  for(var i=0;i<projList.projects.length;i++){
    if(id==projList.projects[i].id)
    {return true;}
  }
  return false;
}
function checkStatId(id){
  for(var i=0;i<statusList.statuses.length;i++){
    if(id==statusList.statuses[i].id)
    {return true;}
  }
  return false;
}

  // add status , if a date is not provided a status will be given today's date
$('#entStat').click(function(){
  $('#warnDev').hide();
  $('#warnStat').hide();
  $('#warnProj').hide();
 
  var id=statusList.idMaker;
  var devId=$('#addStatDev').val();
  var projId=$('#addStatProj').val();
  var date=$('#addStatDate').val();
  var description=$('#addStatDesc').val();
  
  if(date==''){
    date=new Date().toDateString();
  }
  else{
    date=new Date(date).toDateString();
  }
  console.log(date);
  if(checkDevId(devId) && checkProjId(projId)){
    
  statusList.addStatus(new Status(id,devId,projId,date,description))
  
  $('#statusList').text('');
  $('#warnDev').hide();
  $('#warnProj').hide();
  statusList.idMaker++;
  $('#addStatDev').val('');
    $('#addStatProj').val('');
    $('#addStatDate').val('');
    $('#addStatDesc').val('');
  updateStatuses();
    
  }
  else if(!checkDevId(devId) && !checkProjId(projId)){
    $('#warnDev').show();
    $('#warnProj').show();
  }
  else if(!checkDevId(devId) && checkProjId(projId)){
    $('#warnProj').show();
  }
  else {$('#warnProj').show();}
  
})
  
  // remove status
$('#removeStat').click(function(){
  
  var id=$('#removeStatId').val();
  
   if(checkStatId(id) ){
  statusList.deleteFromListStatus(id);
  $('#statusList').text('');
  $('#removeStatId').val('')
  updateStatuses();
  $('#warnStat').hide();
   }
  else if( id!==''){
    $('#warnStat').show();
  }
})
  
  //modify status
$('#modStat').click(function(){
  
  var id=$('#modStatId').val();
  var desc=$('#modStatDesc').val();
  
  if(checkStatId(id)){
  statusList.modifyStatus(id,desc);
  $('#modStatId').val('');
  $('#modStatDesc').val('');
  $('#statusList').text('');
  updateStatuses();
    $('#warnStat').hide();
  }
  else{
    $('#warnStat').show();
  }
  
})
  
  // sorting statuses by their date
  $('#sortAsc').click(function(){
    if($('#sortAsc').hasClass('asc'))
    {statusList.sortByDate(1);
     $('#sortAsc').text('Sort by Date Descending')
     $('#sortAsc').removeClass('asc')
    }
    else{
      statusList.sortByDate(2);
      $('#sortAsc').text('Sort by Date Ascending')
      $('#sortAsc').addClass('asc');
    }
  
  $('#statusList').text('');
  updateStatuses();
})

// status querying
  function updateQueries(recieved){
     for(var i=0;i<recieved.length;i++){
  var devName=devList.getDevName(recieved[i].devId);
  var projName=projList.getProjName(recieved[i].projId)
  
  $('#queryList').append('<tr><td>'+recieved[i].id+'</td><td>'+devName+'<br>(id:'+recieved[i].devId+')'+'</td><td>'+projName+'<br>(id:'+recieved[i].projId+')'+'</td><td>'+recieved[i].date+'</td><td>'+recieved[i].status+'</td></tr>')
  }
  }
  
  // search today's statuses
$('#todayStat').click(function(){
  
  var todayStat=statusList.dayStatusSummary();
  console.log(todayStat)
   $('#queryList').text('');
   updateQueries(todayStat);
  
})
  // search a certain project's statuses, entering a period is optional
$('#periodStat').click(function(){
  var id=$('#periodId').val()
  var start=$('#startTime').val()
  var end=$('#endTime').val()
  if(start==''){start='1970-01-01'}
  if (end==''){end='2050-12-30'}
  var start1=new Date(start).getTime();
  var end1=new Date(end).getTime();
  
  
  if(checkProjId(id) ){
    var recieved=statusList.projectPeriod(id,start1,end1);
  $('#queryList').text('');
  updateQueries(recieved);
    $('#warnProj2').hide();
    $('#periodId').val('');
    $('#startTime').val('');
    $('#endTime').val('');
  }
  else {
  $('#warnProj2').show();
  }
  
   })
// search statuses by the Developer id given
$('#devQuery').click(function(){
  $('#queryList').text('');
  var id=$('#devQueryId').val();
  if(checkDevId(id)){
    var recieved=statusList.devProjects(id)
    updateQueries(recieved);
    $('#warnDev2').hide()
    $('#devQueryId').val('')
  }
  else{
    $('#warnDev2').show();
  }
  
})
  
  })