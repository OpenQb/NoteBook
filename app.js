.pragma library

var _os;
var _appUI;
var _initialized = false;


function init(appUI,os)
{
    _appUI = appUI;
    _initialized = true;
}


function isAppReady(){
    return _initialized;
}


function hideApp(){
    if(isAppReady()){
        _appUI.hide();
    }
}

function closeApp(){
    if(isAppReady()){
        _appUI.close();
    }
}

function isAppPacked(){
    if(isAppReady()) return _appUI.isPacked();
}