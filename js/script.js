
$('.my-table-model').hide();
  
$('.tr-click-model').click(function(){
  $('.my-table-model').toggle();
});

$('.closeDialog').click(function(){
  $('.my-table-model').hide();
});



$('.toggleSidebar').click(function(){
  $('.sidebar').toggleClass('show');
});
$('.btn-filterhead').click(function(){
  $('.filter-uk-navbar').toggleClass('show');
});
$('.close-floating').click(function(){
  $(this).parent().toggleClass('show');
});

// load save layout hide how

let layoutElement = document.getElementById("loadSaveLayout");
let loadLayoutTrigger = document.getElementById("loadSaveTriggerBtn");
let saveLayoutTrigger = document.getElementById("saveLayoutBtn");

// hide save layout div
$(layoutElement).hide();

$(loadLayoutTrigger).click(function() {
    $(this).hide();
   $(layoutElement).show();
});

$(saveLayoutTrigger).click(function() {
   $(loadLayoutTrigger).show();
   $(layoutElement).hide();
});


 UIkit.util.on('#modal-createPageLayout .uk-close', 'click', function (e) {
           e.preventDefault();
           UIkit.modal("#modal-changeLayout").show();
});


//load Save Search List
let searchListlement = document.getElementById("loadSaveSearchList");
let loadSaveSearchBtn = document.getElementById("loadSavedSearchBtn");
let savedSearchBtn = document.getElementById("savedSearchBtn");

// hide save layout div
$(searchListlement).hide();

$(loadSaveSearchBtn).click(function() {
   $(searchListlement).toggle();
});

$(savedSearchBtn).click(function() {
   $(searchListlement).toggle();
});


