
const candidates = [
    { name: 'Peter Parker', likes: 700},
    { name: 'Tony Stark', likes: 135},
    { name: 'dash', likes: 0},
    { name: '', likes: 0}
  ]

 

  document.write("<p id=name1>"+ candidates[0].name + " <span id=likeNum1>" + candidates[0].likes+ "</span><span id=likeA> Like</span> <span id=delete1> Delete </span></p>");
  document.write("<p id=name2>"+ candidates[1].name + " <span id=likeNum2>" + candidates[1].likes+ "</span><span id=likeB> Like</span><span id=delete2> Delete </span></p>");
  document.write("<p id=name3>"+ candidates[2].name + " <span id=likeNum3>" + candidates[2].likes+ "</span><span id=likeC> Like</span><span id=delete3> Delete </span></p>");
  document.write("<p id=name4>"+ candidates[3].name + " <span id=likeNum4>" + candidates[3].likes+ "</span><span id=likeD> Like</span><span id=delete4> Delete </span></p>");

//Add Candidate
function addCandidate() {
    var x = document.getElementById("myText").value;
    candidates[3].name= x;
}

//Like functions
$("#likeA").click(function(){
    candidates[0].likes++;

    $("#likeNum1").text(candidates[0].likes);
});

$("#likeB").click(function(){
    candidates[1].likes++;

    $("#likeNum2").text(candidates[1].likes);
});

$("#likeC").click(function(){
    candidates[2].likes++;

    $("#likeNum3").text(candidates[2].likes);
});

$("#likeD").click(function(){
    candidates[3].likes++;

    $("#likeNum4").text(candidates[3].likes);
});

//Delete functions
$("#delete1").click(function(){
    $("#name1").hide();
});

$("#delete2").click(function(){
    $("#name2").hide();
});

$("#delete3").click(function(){
    $("#name3").hide();
});

$("#delete4").click(function(){
    $("#name4").hide();
});