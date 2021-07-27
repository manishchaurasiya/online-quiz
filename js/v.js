var question=new Array("Q1. Which of the following is used to declare a constant?","Q2. What does PHP stand for?","Q3. Which of these is NOT a valid PHP comparision operator?","Q4. What is the purpose of $_SESSION?","Q5. what is a default size of a file set in upload_max_size","Q6. In which variable is the users IP address stored?","Q7. Who is making the Web Standards?","Q8. Choose the correct HTML tag for the largest heading.","Q9. How can you make a list that lists the items with numbers?","Q10. How can you make a list that lists the items with bullets?");
var option=new Array("define","const","def","constant","Preprocessed Hypertext page","Hypertext Transfer Protocol","Hypertext Markup Language","Hypertext Preprocesser","!=","<=>",">=","<>","Register global variable","Initialize Session","Store Variable of current session","none of the above","1MB","2MB","2.5MB","3MB","$DOMAIN","$GLOBALS","$_ENV","$REMOTE_ADDR","Mozilla","microsoft","apple","World Wide Web Consortium","H1","H2","H3","H6","OI","DI","UI","List","OI","DI","UI","List");
var correct_option=new Array("1","2","2","3","2","4","4","1","1","3");
var result=new Array();
var i=0;
var j=0;
var co=0;

function next_question()
{
if (i==10)
{
	sub();
}

var element=document.getElementById('question2');
element.innerHTML=question[i];
var elem=document.getElementById('button1');
elem.innerHTML=option[j];
var elem=document.getElementById('button2');
elem.innerHTML=option[j+1];
var elem=document.getElementById('button3');
elem.innerHTML=option[j+2];
var elem=document.getElementById('button4');
elem.innerHTML=option[j+3];
j=j+4;
}
function ad1()
{
	result[i]=1;
	i++;
	next_question();
}

function ad2()
{
	result[i]=2;
	i++;
	next_question();
}
function ad3()
{
	result[i]=3;
	i++;
	next_question();
}
function ad4()
{
	result[i]=4;
	i++;
	next_question();
}
function sub()
{
	timer=1000000;
	for (var i = 0; i < 10; i++) {
		if (correct_option[i]==result[i]) 
		{
			co++;
		}
	}
	document.getElementById("button1").style.display="none";
	document.getElementById("button2").style.display="none";
	document.getElementById("button3").style.display="none";
	document.getElementById("button4").style.display="none";
	document.getElementById("demo").style.display="none";
	document.getElementById("question2").style.display="none";
	document.getElementById("h").innerHTML="Result";
	document.getElementById("pa").innerHTML="Your Score = "+co;

}
		var timer=300;
		var min=0;
		var sec=0;
		function clock() 
		{
			
			min=parseInt(timer/60);
			sec=parseInt(timer%60);
		var x=document.getElementById('demo').innerHTML=min +":"+ sec;
		 timer--;
			setTimeout(clock, 1000);
         if (timer===0) {
         	sub();
         	return;
         }
		}