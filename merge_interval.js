var merge = function(intervals) {
    if(intervals.length < 1 ){
        return [];
    }
    intervals.sort(function(a,b){return a.start <= b.start ? -1 : 1})
    console.log(intervals);
    var curStart = intervals[0].start,
        curEnd = intervals[0].end,
        ret = [];
    
    for(var i = 1, len = intervals.length ; i < len ; i++){
        if(intervals[i].start > curEnd){
            ret.push([curStart, curEnd]);       
            curStart = intervals[i].start;
        }
        if(intervals[i].end > curEnd) curEnd = intervals[i].end;
    }
    ret.push([curStart, curEnd]);
    return ret;
};