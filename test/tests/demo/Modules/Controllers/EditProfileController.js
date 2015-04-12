structureJS.module('EditProfileController', function(require){

var _ = require('Util'),
    Route = require('Route'),
    Helper = require('Helper'),
    _Templar = Templar,
    EnvModel = _Templar.getModel('Environment'),
    UserProfileModel = _Templar.getModel('UserProfile'),
    ProfileFormMdl = _Templar.getModel('ProfileForm'),
    GeoInfo = require('GeoInfo-US'),
    Config = require('Config'),
    Controller = require('Controller')(),
    _$ = $;   /*stop unecessary scope lookup*/

function repopulateEditForm(){
  ProfileFormMdl.fn = UserProfileModel.fn;
  ProfileFormMdl.ln = UserProfileModel.ln;
  ProfileFormMdl.description = UserProfileModel.description; 
  ProfileFormMdl.sex.current_selection = UserProfileModel.sex;
  ProfileFormMdl.states.current_selection = UserProfileModel.state;
  ProfileFormMdl.age.current_selection = UserProfileModel.age;
  ProfileFormMdl.cities.current_selection = UserProfileModel.city;
}

function updateProfileHandler(e){
  Helper.ajax('update-profile.php', 
    {
      uid: UserProfileModel.uid,
      fn : ProfileFormMdl.fn,
      ln : ProfileFormMdl.ln,
      age : ProfileFormMdl.age.current_selection,
      sex : ProfileFormMdl.sex.current_selection,
      state : ProfileFormMdl.states.current_selection,
      city : ProfileFormMdl.cities.current_selection,
      description : ProfileFormMdl.description
    }, 
    function(data, status, jqXHR){
      EnvModel.success_msg = data.success_msg;
      UserProfileModel.fn = sessionStorage['fn'] = data.fn;
      UserProfileModel.ln = sessionStorage['ln'] = data.ln;
      UserProfileModel.age = sessionStorage['age'] = data.age;
      UserProfileModel.sex = sessionStorage['sex'] = data.sex;
      UserProfileModel.state = sessionStorage['state'] = data.state;
      UserProfileModel.city = sessionStorage['city'] = data.city;
      UserProfileModel.description = sessionStorage['description'] = data.description;
  });
}

Controller.bindHandlers = function(){
  $('#btn-update-profile').click(updateProfileHandler);
};

Controller.init = function(bannerMsg){
  EnvModel.error = (ProfileFormMdl.uploadStatus === '0') ? 
                      'Your Profile Picture Upload Failed' : '';
  repopulateEditForm();
};

_Templar.success("partials/edit-profile.html", function(){
  UserProfileModel.pp_src = sessionStorage['pp_src'] = '';
  Controller.init('Edit My Profile');
});
    
}); 