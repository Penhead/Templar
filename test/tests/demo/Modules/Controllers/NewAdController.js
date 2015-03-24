structureJS.module('MyProfileController', function(require){

var _ = require('Util'),
    Route = require('Route'),
    Helper = require('Helper'),
    AdTypeMap = require('Type-Category-Map'),
    _Templar = Templar,
    EnvModel = _Templar.getModel('Environment'),
    UserProfileModel = _Templar.getModel('UserProfile'),
    AdFormMdl = _Templar.getModel('AdForm'),
    _$ = $;   
    
function bindHandlers(){
  AdFormMdl.listen('adType', function(e){
    AdFormMdl.category = AdTypeMap.Categories[e.value];
    AdFormMdl.sort('category');
    AdFormMdl.update('category');
  });
}

function init(bannerMsg){
  Helper.init(bannerMsg);
  bindHandlers();
  AdFormMdl.adType = AdTypeMap.AdTypes;
  AdFormMdl.sort('category');
  AdFormMdl.update('category');
  
}

_Templar.success("#/new-ad-part-2", function(){
  init('New Ad');

});

});