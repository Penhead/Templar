
Templar.success(function(){
var Templar = structureJS.require('Templar'),
    TestModel = Templar.getModel('test');

  var changeSizeCtrl = Templar('changeSize');
  
  changeSizeCtrl.listenTo('up').forEvent('click', function(){
    TestModel.dialogHeight++;
  });

  changeSizeCtrl.listenTo('down').forEvent('click', function(){
    TestModel.dialogHeight--;
  });

});    
