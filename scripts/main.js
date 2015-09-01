$(document).ready(function(){
  $("#button").click(function(){
    var newtask = $("input[name=task]").val();
    var litask = $("<li>" + newtask + "</li>");
    $(".list").append(litask)
    litask.click(function(){
      $(this).remove();
    });
    $.post("/api/addToDo", {todo: newtask}, function(){ });
    });

//  $("#button").click(function(){
//    var newtask = $("input[name=task]").val();
//    $(".list").append("<li>" + newtask + "</li>");
//    $("li").click(function(){
//      $(this).remove();
//    });
//  });


});

//$(document).ready(function(){
//  $("#button").click(function(){
//    var newtask = $("input[name=task]").val();
//    $(".list").append("<li>" + newtask + "</li>");
//    $("li").click(function(){
//      $(this).remove();
//    });
//
