exports.abs = function(number){
        if(number > 0){
                return number;
        }else{
                return -number;
        }
}

exports.cirecleArea = function(radius){
        return radius * radius * Math.PI;
}