function updatetime(){
    var time=new Date();
    var mon= time.getMonth(),
        yr= time.getFullYear(),
        day=time.getDate(),
        hr=time.getHours(),
        min=time.getMinutes(),
        sc=time.getSeconds();
    
    Number.prototype.pad=function(digits){
        for(var n=this.toString();n.length<digits; n=0+n);
        return n;
    }

    var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var ids=["mon","date","year","hr","min","sc"]
    var values=[months[mon],day.pad(2),yr,hr.pad(2),min.pad(2),sc.pad(2)]

    for(var i=0; i<ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue=values[i]
}

function starttime(){
  updatetime();
  window.setInterval("updatetime()",1);


}