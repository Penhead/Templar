structureJS.configure(
{
  globals : ['lib/qunit',
             'lib/jquery', 
            'templar/Constants', 
            'templar/Util', 
            'classes/ClassTMP_Node',
            'classes/ClassControlNode',
            'classes/ClassModel',
            'templar/DOM'],
  directory_aliases : {modules : 'Modules/', 
                      templar : '../../../TemplarJS/', 
                      classes : '../../../TemplarJS/Classes/',
                      lib : '../../lib/'}
});

