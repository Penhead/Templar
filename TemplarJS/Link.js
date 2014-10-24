structureJS.module('Link', function(require){

var _ = this;
var Map = require('Map');
var Interpolate = require('Interpolate');

return {
  
  bindModel : function(){
    var updateObj = Object.create(null);
    /*get model name names*/
    Map.forEach(function(ctx, modelName){
      /*get model attribute names*/
      Map.forEach(modelName, function(ctx, attribName){
        Interpolate.interpolate( ctx.modelName, ctx.modelAtrribName, 
                                  Map.getAttribute(ctx.modelName,ctx.modelAtrribName));
      });
    });
    /*Control listeners should not fire until this system event is finished*/
    Interpolate.dispatchSystemListeners(_.SYSTEM_EVENT_TYPES.interpolation_done);
  }
};

});