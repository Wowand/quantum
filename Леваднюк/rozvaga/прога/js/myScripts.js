$(function(){ 
	 $('.line img').toggle( function(eventObject){
	  y = eventObject.target;
	  
	   $('img[class=active]').removeClass('active');
	  $(this).addClass('active');
	 $(this).fadeTo(1000,0.5);
	 return (y);},
	 
	 
	 
	 function(eventObject){
	 $(this).fadeTo(1000,1);
	$(this).removeClass('active');
	 
	 });//__________________________________тут при 1-му кліку на якусь лінію, вона стає прозрачна, їй додається клас active. При 2-му кліку - лінія стає нормальною і клас удаляється. ПОВЕРТАЄТЬСЯ у.



 
	 $('.line div[class*=div]').click(function(eventObject){
	 

	 
$('div[id=thisDiv]').removeAttr("id");
	  a = $(this).attr("id",("thisDiv"));
	 
	  
	 return (a);

});


$('#ochustutu').click(function(eventObject){
	 $('#mycart  div img[id=k]').remove();
	  $('#mycart  div img[src*=Line]').fadeTo(1000,1);
	  $('#mycart div:empty ').html("<img id='' src='Images/Line.bmp'  alt='Line'/>");
	 $('#time').text("");
});

//_____________________________________________тут при кліку на лініютому діву дається id thisDiv. ПОВЕРТАЄТЬСЯ а


	$('#forElements div').mousedown(function(eventObject){

	
	z=eventObject.target;
	
	z=$(this).attr("id","thisElement");
	z.css({
	'width': '40px',


'float':'left',
'width':'40px',
	 


	});
	return(z);
	});
	//______________________________________________тут при нажиманні кнопки на один з примітивів йому дається id thisElement. ПОВЕРТАЄТЬСЯ z.
	
	
	
	 $('#forElements img').draggable({
	     revert : 'invalid',
		 helper: 'clone',
		 cursor : 'move'
});
//_____________________________________________________робим так, щоб примітиви можна було перетащувати.



	 $('#mycart div[class*=div]').droppable({
 
	
	
	drop: function(event, ui) {
	
		var helmet = $(ui.draggable);
		$('img[class=my]').removeClass('my');
				var gg = $(helmet).clone().prependTo(a).fadeIn(1000).attr('class',"my");
				//$('.active').prev().fadeTo(1,0).attr("alt",'nenujniy');
		
				$(y).fadeOut();
				$('#mycart img').mousedown(function(eventObject){
	if(eventObject.button == 2){gg.remove(); $(y).fadeTo(1000,0.5);}
	
	});
				}
		
		});
				
			 //_________________________________________робим так, щоб div з лініями приймав наші примітиви. А лінію, яку ми вибрали з допомогою y ховаємо.
			
			
    
	
			
$('#forElements div img').droppable({
	drop: function(event, ui) {
		
		var helmet2 = $(ui.draggable);
	
		
			
				helmet2.prependTo(z).fadeIn(1000);
				$(y).fadeTo(1000,1);
				
			
			
	
}});

//_________________________________________________________тепер робим div з примітивами приймающим, щоб ми могли примітив поставити назад. При цьому лінію, яку ми вибрали з допомогою y, показуєм.




 function dodavannya (a,b){
var c;
 if (a==0&&b==0){c=0;}
 else if(((a=='1'&&b=='0'))||(a=='0'&&b=='1')){c=1}
else if(((a=='2'&&b=='0'))||(a=='0'&&b=='2')){c=2}
 else if((a=='1'&&b=='1')){c=2}	
  else if(((a=='2'&&b=='1'))||(a=='1'&&b=='2')){c=0}
   else if((a=='2'&&b=='2')){c=1}
   
   else if((a=='0'&&b=='01')){c=1}
   else if((a=='1'&&b=='01')){c=0}
   else if((a=='2'&&b=='01')){c=2}
   
   else if((a=='0'&&b=='02')){c=2}
   else if((a=='1'&&b=='02')){c=1}
   else if((a=='2'&&b=='02')){c=0}
   
   else if((a=='0'&&b=='12')){c=0}
   else if((a=='1'&&b=='12')){c=2}
   else if((a=='2'&&b=='12')){c=1}
    return (c);
	   
 }
 //_____________________________________________функція додавання виконує додавання по модулю 3.

	 $("#my_button1").toggle(function(){
	/*  var newWin = window.open('truth_table.html','new','width=520,height=200,toolbar=1');
	newWin.focus();  */
	if ( flag==1){
 $("#true").html("<table id = 'TT'><thead >Таблиця істиності(Truth table)</thead><tr><td>A</td>  <td>A(0)=A</td> <td>A(+1)=A+1</td><td>A(+2)=A+2</td><td>A(01)=2A+1</td><td>A(02)=2A+2</td><td>A(12)=2A</td><td> </tr><tr> <td>0 <br></br>1 <br></br>2</td><td>0 <br></br>1 <br></br>2</td><td>1 <br></br>2 <br></br>0</td><td>2 <br></br>0 <br></br>1</td><td>1 <br></br>0 <br></br>2</td><td>2 <br></br>1 <br></br>0</td><td>0 <br></br>2 <br></br>1</td></table>");
	//________________________________________________________________відкриваєм таблицю істиності.

} 
	
	},function(){
	$("#true").html("");
	
	}); 
	var box_1 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
	var box_2 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
	var box_3 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
	var box_4 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
	var box_5 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
	var box_6 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
	var myArray = [box_1,box_2,box_3,box_4,box_5,box_6];
	
					function input_box_1(){
					
					for (var i=0; i<=30; i++){
					
					 var value_input_1 = $('#input_1').val();
					 
					 if(value_input_1==i){
					myArray[0][0]=i;
					  
					 
					  }
					
					}
					//alert(myArray);
					return (myArray);
					
					}
					function all_div_box_1(){
					
					for (var i=0; i<=30; i++){
					
					var name = $(".div1_"+i+" img");
					
					 if(name.attr("alt")=='1'){
					myArray[0][i]='1'
					
					}
					
					 else if(name.attr("alt")=='0'){
					myArray[0][i]='0';
					
					}
					
					 else if(name.attr("alt")=='2'){
					myArray[0][i]='2';
					
					 }
					 
					 
					 else if(name.attr("alt")=='01'){
					myArray[0][i]='01';
					
					 }
					 
					 
					 else if(name.attr("alt")=='02'){
					myArray[0][i]='02';
					}
					 
					 else if(name.attr("alt")=='12'){
					myArray[0][i]='12';
					
				
					
					  
					  
					 }
					else{
																				myArray[0][i]='0';
																				}
					 
					 }
					 
					  
					  }
					  
								  function input_box_2(){
								
								for (var i=0; i<=30; i++){
								
								 var value_input_1 = $('#input_2').val();
								 
								 if(value_input_1==i){
								myArray[1][0]=i;
								  }
								}}
								  
								  function all_div_box_2(){
								
								for (var i=0; i<=30; i++){
								
								var name = $(".div2_"+i+" img");
								
								 if(name.attr("alt")=='1'){
								myArray[1][i]='1'
								
								}
								
								 else if(name.attr("alt")=='0'){
								myArray[1][i]='0';
								
								}
								
								 else if(name.attr("alt")=='2'){
								myArray[1][i]='2';
								
								                               }
								 
								 
								 else if(name.attr("alt")=='01'){
								myArray[1][i]='01';
								
								                                }
								 
								 
								 else if(name.attr("alt")=='02'){
								myArray[1][i]='02';
								                                }
								 
								 else if(name.attr("alt")=='12'){
								myArray[1][i]='12';             }
								else{
																				myArray[1][i]='0';
																				}
								 
								 
								 }
								 
								  }
								  
								  
												function input_box_3(){
											
											for (var i=0; i<=30; i++){
											
											 var value_input_1 = $('#input_3').val();
											 
											 if(value_input_1==i){
											myArray[2][0]=i;
											  }
											}}
											  
											  function all_div_box_3(){
											
											for (var i=0; i<=30; i++){
											
											var name = $(".div3_"+i+" img");
											
											 if(name.attr("alt")=='1'){
											myArray[2][i]='1'
											
											}
											
											 else if(name.attr("alt")=='0'){
											myArray[2][i]='0';
											
											}
											
											 else if(name.attr("alt")=='2'){
											myArray[2][i]='2';
											
																		   }
											 
											 
											 else if(name.attr("alt")=='01'){
											myArray[2][i]='01';
											
																			}
											 
											 
											 else if(name.attr("alt")=='02'){
											myArray[2][i]='02';
																			}
											 
											 else if(name.attr("alt")=='12'){
											myArray[2][i]='12';             }
											else{
																				myArray[2][i]='0';
																				}
										}
											 
											 
											 
											 
											  
											  }
											  
											  
											  
														  function input_box_4(){
														
														for (var i=0; i<=30; i++){
														
														 var value_input_1 = $('#input_4').val();
														 
														 if(value_input_1==i){
														myArray[3][0]=i;
														  }
														}}
														  
														  function all_div_box_4(){
														
														for (var i=0; i<=30; i++){
														
														var name = $(".div4_"+i+" img");
														
														 if(name.attr("alt")=='1'){
														myArray[3][i]='1'
														
														}
														
														 else if(name.attr("alt")=='0'){
														myArray[3][i]='0';
														
														}
														
														 else if(name.attr("alt")=='2'){
														myArray[3][i]='2';
														
																					   }
														 
														 
														 else if(name.attr("alt")=='01'){
														myArray[3][i]='01';
														
																						}
														 
														 
														 else if(name.attr("alt")=='02'){
														myArray[3][i]='02';
																						}
														 
														 else if(name.attr("alt")=='12'){
														myArray[3][i]='12';             }
														else{
																				myArray[3][i]='0';
																				}
														 
														 
														 }
														 
														  
														  }
														  
														  
																	  function input_box_5(){
																	
																	for (var i=0; i<=30; i++){
																	
																	 var value_input_1 = $('#input_5').val();
																	 
																	 if(value_input_1==i){
																	myArray[4][0]=i;
																	  }
																	}}
																	  
																	  function all_div_box_5(){
																	
																	for (var i=0; i<=30; i++){
																	
																	var name = $(".div5_"+i+" img");
																	
																	 if(name.attr("alt")=='1'){
																	myArray[4][i]='1'
																	
																	}
																	
																	 else if(name.attr("alt")=='0'){
																	myArray[4][i]='0';
																	
																	}
																	
																	 else if(name.attr("alt")=='2'){
																	myArray[4][i]='2';
																	
																								   }
																	 
																	 
																	 else if(name.attr("alt")=='01'){
																	myArray[4][i]='01';
																	
																									}
																	 
																	 
																	 else if(name.attr("alt")=='02'){
																	myArray[4][i]='02';
																									}
																	 
																	 else if(name.attr("alt")=='12'){
																	myArray[4][i]='12';             }
																	else{
																				myArray[4][i]='0';
																				}
																	 
																	 
																	 }
																	 
																	  
																	  }
																	  
																	  
																				  function input_box_6(){
																				
																				for (var i=0; i<=30; i++){
																				
																				 var value_input_1 = $('#input_6').val();
																				 
																				 if(value_input_1==i){
																				myArray[5][0]=i;
																				  }
																				}}
																	  
																				  function all_div_box_6(){
																				
																				for (var i=0; i<=30; i++){
																				
																				var name = $(".div6_"+i+" img");
																				
																				 if(name.attr("alt")=='1'){
																				myArray[5][i]='1'
																				
																				}
																				
																				 else if(name.attr("alt")=='0'){
																				myArray[5][i]='0';
																				
																				}
																				
																				 else if(name.attr("alt")=='2'){
																				myArray[5][i]='2';
																				
																											   }
																				 
																				 
																				 else if(name.attr("alt")=='01'){
																				myArray[5][i]='01';
																				
																												}
																				 
																				 
																				 else if(name.attr("alt")=='02'){
																				myArray[5][i]='02';
																												}
																				 
																				 else if(name.attr("alt")=='12'){
																				myArray[5][i]='12';             }
																				else{
																				myArray[5][i]='0';
																				}
																				 
																				 
																				 }
																				 
																				   
																				  }
					  
					  function control_line1 (){
					  
					  for (var i=0; i<=30; i++){
					   for (var j=0; j<7; j++){
					  
					  var name = $(".div1_"+i+" img");
					   
					  var name3 = $(".stolb"+i+"_"+j+" img");
					  
				
					  if ((name3.attr("alt")=='1')&&(name.attr("alt")=='control_down')){
					if(myArray[0][0]=='2'){
					 myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					
					  for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[0][0];}
											result=dodavannya(tt,myArray[0][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  
					  
					  
					  
					  }
					  
					  }
					  
					  if ((name3.attr("alt")=='2')&&(name.attr("alt")=='control_down')){
					  if(myArray[0][0]=='2'){
					 myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					   for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[0][0];}
											result=dodavannya(tt,myArray[0][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					 
					  }}
					  if ((name3.attr("alt")=='01')&&(name.attr("alt")=='control_down')){
					  if(myArray[0][0]=='2'){
					 myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[0][0];}
											result=dodavannya(tt,myArray[0][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					  }}
					  
					  if ((name3.attr("alt")=='02')&&(name.attr("alt")=='control_down')){
					  if(myArray[0][0]=='2'){
					 myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[0][0];}
											result=dodavannya(tt,myArray[0][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  if ((name3.attr("alt")=='12')&&(name.attr("alt")=='control_down')){
					  if(myArray[0][0]=='2'){
					 myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[0][0];}
											result=dodavannya(tt,myArray[0][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  
					  
					  
					  
					  
					  }}}
					  
					  
					     function control_line2 (){
					  
					  for (var i=0; i<=30; i++){
					   for (var j=0; j<7; j++){
					  
					  var name = $(".div2_"+i+" img");
					   
					  var name3 = $(".stolb"+i+"_"+j+" img");
					  
				
					  if ((name3.attr("alt")=='1')&&(name.attr("alt")=='control_down')){
					  if(myArray[1][0]=='2'){
					 myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[1][0];}
											result=dodavannya(tt,myArray[1][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  
					  
					  
					  
					  }}
					  
					  if ((name3.attr("alt")=='2')&&(name.attr("alt")=='control_down')){
					  if(myArray[1][0]=='2'){
					 myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					   for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[1][0];}
											result=dodavannya(tt,myArray[1][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					 
					  }}
					  if ((name3.attr("alt")=='01')&&(name.attr("alt")=='control_down')){
					  if(myArray[1][0]=='2'){
					 myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[1][0];}
											result=dodavannya(tt,myArray[1][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					  }}
					  
					  if ((name3.attr("alt")=='02')&&(name.attr("alt")=='control_down')){
					  if(myArray[1][0]=='2'){
					 myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[1][0];}
											result=dodavannya(tt,myArray[1][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  if ((name3.attr("alt")=='12')&&(name.attr("alt")=='control_down')){
					  if(myArray[1][0]=='2'){
					 myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[1][0];}
											result=dodavannya(tt,myArray[1][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  
					  
					  
					  
					  
					  }}}
					  
					  	   
					     function control_line3 (){
					  
					  for (var i=0; i<=30; i++){
					   for (var j=0; j<7; j++){
					  
					  var name = $(".div3_"+i+" img");
					   
					  var name3 = $(".stolb"+i+"_"+j+" img");
					  
				
					  if ((name3.attr("alt")=='1')&&(name.attr("alt")=='control_down')){
					  if(myArray[2][0]=='2'){
					 myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[2][0];}
											result=dodavannya(tt,myArray[2][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  
					  
					  
					  
					  }}
					  
					  if ((name3.attr("alt")=='2')&&(name.attr("alt")=='control_down')){
					   if(myArray[2][0]=='2'){
					 myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					   for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[2][0];}
											result=dodavannya(tt,myArray[2][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					 
					  }}
					  if ((name3.attr("alt")=='01')&&(name.attr("alt")=='control_down')){
					   if(myArray[2][0]=='2'){
					 myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[2][0];}
											result=dodavannya(tt,myArray[2][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					  }}
					  
					  if ((name3.attr("alt")=='02')&&(name.attr("alt")=='control_down')){
					   if(myArray[2][0]=='2'){
					 myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[2][0];}
											result=dodavannya(tt,myArray[2][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  if ((name3.attr("alt")=='12')&&(name.attr("alt")=='control_down')){
					   if(myArray[2][0]=='2'){
					 myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[2][0];}
											result=dodavannya(tt,myArray[2][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  
					  
					  
					  
					  
					  }}}
					  
					  
					     function control_line4 (){
					  
					  for (var i=0; i<=30; i++){
					   for (var j=0; j<7; j++){
					  
					  var name = $(".div4_"+i+" img");
					   
					  var name3 = $(".stolb"+i+"_"+j+" img");
					  
				
					  if ((name3.attr("alt")=='1')&&(name.attr("alt")=='control_down')){
					   if(myArray[3][0]=='2'){
					 myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[3][0];}
											result=dodavannya(tt,myArray[3][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  
					  
					  
					  
					  }}
					  
					  if ((name3.attr("alt")=='2')&&(name.attr("alt")=='control_down')){
					   if(myArray[3][0]=='2'){
					 myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					   for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[3][0];}
											result=dodavannya(tt,myArray[3][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					 
					  }}
					  if ((name3.attr("alt")=='01')&&(name.attr("alt")=='control_down')){
					   if(myArray[3][0]=='2'){
					 myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[3][0];}
											result=dodavannya(tt,myArray[3][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					  }}
					  
					  if ((name3.attr("alt")=='02')&&(name.attr("alt")=='control_down')){
					   if(myArray[3][0]=='2'){
					 myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[3][0];}
											result=dodavannya(tt,myArray[3][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  if ((name3.attr("alt")=='12')&&(name.attr("alt")=='control_down')){
					   if(myArray[3][0]=='2'){
					 myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[3][0];}
											result=dodavannya(tt,myArray[3][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  
					  
					  
					  
					  
					  }}}
					  
					   function control_line5 (){
					  
					  for (var i=0; i<=30; i++){
					   for (var j=0; j<7; j++){
					  
					  var name = $(".div5_"+i+" img");
					   
					  var name3 = $(".stolb"+i+"_"+j+" img");
					  
				
					  if ((name3.attr("alt")=='1')&&(name.attr("alt")=='control_down')){
					   if(myArray[4][0]=='2'){
					 myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[4][0];}
											result=dodavannya(tt,myArray[4][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  
					  
					  
					  
					  }}
					  
					  if ((name3.attr("alt")=='2')&&(name.attr("alt")=='control_down')){
					   if(myArray[4][0]=='2'){
					 myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					  
					   for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[4][0];}
											result=dodavannya(tt,myArray[4][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					 
					  }}
					  if ((name3.attr("alt")=='01')&&(name.attr("alt")=='control_down')){
					   if(myArray[4][0]=='2'){
					 myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[4][0];}
											result=dodavannya(tt,myArray[4][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					  }}
					  
					  if ((name3.attr("alt")=='02')&&(name.attr("alt")=='control_down')){
					   if(myArray[4][0]=='2'){
					 myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[4][0];}
											result=dodavannya(tt,myArray[4][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  if ((name3.attr("alt")=='12')&&(name.attr("alt")=='control_down')){
					   if(myArray[4][0]=='2'){
					 myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[4][0];}
											result=dodavannya(tt,myArray[4][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  
					  
					  
					  
					  
					  }}}
					     function control_line6 (){
					  
					  for (var i=0; i<=30; i++){
					   for (var j=0; j<7; j++){
					  
					  var name = $(".div6_"+i+" img");
					   
					  var name3 = $(".stolb"+i+"_"+j+" img");
					  
				
					  if ((name3.attr("alt")=='1')&&(name.attr("alt")=='control_down')){
					   if(myArray[5][0]=='2'){
					 myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[5][0];}
											result=dodavannya(tt,myArray[5][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='1';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  
					  
					  
					  
					  }}
					  
					  if ((name3.attr("alt")=='2')&&(name.attr("alt")=='control_down')){
					  if(myArray[5][0]=='2'){
					 myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					   for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[5][0];}
											result=dodavannya(tt,myArray[5][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='2';}
						else {
						myArray[j-1][i]='0';
						}
					 
					  }}
					  if ((name3.attr("alt")=='01')&&(name.attr("alt")=='control_down')){
					  if(myArray[5][0]=='2'){
					 myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[5][0];}
											result=dodavannya(tt,myArray[5][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='01';}
						else {
						myArray[j-1][i]='0';
						}
					  }}
					  
					  if ((name3.attr("alt")=='02')&&(name.attr("alt")=='control_down')){
					  if(myArray[5][0]=='2'){
					 myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[5][0];}
											result=dodavannya(tt,myArray[5][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='02';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  if ((name3.attr("alt")=='12')&&(name.attr("alt")=='control_down')){
					  if(myArray[5][0]=='2'){
					 myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					    for( k=1;k<i;k++){
											var result = ("result"+k);
											var tt;
											if (k==1){
											tt=myArray[5][0];}
											result=dodavannya(tt,myArray[5][k]);
											tt = result;
					  if (tt=='2'){
					  	
				        myArray[j-1][i]='12';}
						else {
						myArray[j-1][i]='0';
						}
					  
					  }
					  
					  
					  
					  }
					  
					  
					  
					  
					  
					  }}}
					  
					  
					  function example2 (){
					  
				
					   for (var j=0; j<7; j++){
					   for (var i=j+1; i<7; i++){
					for (var y=0; y<=30; y++){
					   
					  var name3 = $(".stolb"+y+"_"+j+" img");
					  
					  var name = $(".stolb"+y+"_"+i+" img");
					  
				//console.log(name);
				//console.log(name3);
					  if   ( ( ((name.attr("alt")=='1')||(name.attr("alt")=='2')||(name.attr("alt")=='01')||(name.attr("alt")=='02')||(name.attr("alt")=='12'))&&(name3.attr("alt")=='control_down')  )||(((name3.attr("alt")=='1')||(name3.attr("alt")=='2')||(name3.attr("alt")=='01')||(name3.attr("alt")=='02')||(name3.attr("alt")=='12'))&&(name.attr("alt")=='control_down'))){
					  
					  for (var k=j+1; k<i; k++){
					 		   
					  var name4 = $(".stolb"+y+"_"+k+" div ");
					
					 
					 name4.html("<img id='k' src='Images/PromLine.bmp' alt='PromLine'>");
					  
					  
					 
					  
					  }}
					  
					  }}}}
					  
					  
						
				
				
										$("#start").click(function(){		
									
										all_div_box_1();
										
										all_div_box_2();
										all_div_box_3();
										all_div_box_4();
										all_div_box_5();
										
										all_div_box_6();
											input_box_1();
										input_box_2();
										input_box_3();
										input_box_4();
										input_box_5();
										input_box_6();
											control_line1();
											control_line2();
											control_line3();
											control_line4();
											control_line5();
											control_line5();
											control_line6 ();
										
											example2();
											for( i=1;i<=30;i++){
											var result = ("result"+i);
											var tt;
											if (i==1){
											tt=myArray[0][0];}
											result=dodavannya(tt,myArray[0][i]);
											tt = result;
											
											$('#line_0').text(tt);
											}

											for( i=1;i<=30;i++){
											var result = ("result"+i);
											var tt;
											if (i==1){
											tt=myArray[1][0];}
											result=dodavannya(tt,myArray[1][i]);
											tt = result;
											
											$('#line_1').text(tt);
											}
						

											 for( i=1;i<=30;i++){
											var result = ("result"+i);
											var tt;
											if (i==1){
											tt=myArray[2][0];}
											result=dodavannya(tt,myArray[2][i]);
											tt = result;
											
											$('#line_2').text(tt);
											}
										
											for( i=1;i<=30;i++){
											var result = ("result"+i);
											var tt;
											if (i==1){
											tt=myArray[3][0];}
											result=dodavannya(tt,myArray[3][i]);
											tt = result;
											
											$('#line_3').text(tt);
											}			 
														 

											for( i=1;i<=30;i++){
											var result = ("result"+i);
											var tt;
											if (i==1){
											tt=myArray[4][0];}
											result=dodavannya(tt,myArray[4][i]);
											tt = result;
											
											$('#line_4').text(tt);
											}
																	 
																	
																				 
											for( i=1;i<=30;i++){
											var result = ("result"+i);
											var tt;
											if (i==1){
											tt=myArray[5][0];}
											result=dodavannya(tt,myArray[5][i]);
											tt = result;
											
											$('#line_5').text(tt);
											}
											 var res = 0;
					 					  for (var i=0; i<=30; i++){
					  
					  if ((myArray[0][i+1])=='1'||(myArray[0][i+1])=='2'||(myArray[0][i+1])=='01'||(myArray[0][i+1])=='02'||(myArray[0][i+1])=='12'){
						  
						  res++;
//$('#time').text(res);
										  }}

																	 var res1 = 0;
					 					  for (var i=0; i<=30; i++){
					  
					  if ((myArray[1][i+1])=='1'||(myArray[1][i+1])=='2'||(myArray[1][i+1])=='01'||(myArray[1][i+1])=='02'||(myArray[1][i+1])=='12'){
						  
						  res1++;
//$('#time').text(res1);
										  }}
							 var res2 = 0;
					 					  for (var i=0; i<=30; i++){
					  
					  if ((myArray[2][i+1])=='1'||(myArray[2][i+1])=='2'||(myArray[2][i+1])=='01'||(myArray[2][i+1])=='02'||(myArray[2][i+1])=='12'){
						  
						  res2++;
//$('#time').text(res2);
										  }}
										  							 var res3 = 0;
										    for (var i=0; i<=30; i++){
					  
					  if ((myArray[3][i+1])=='1'||(myArray[3][i+1])=='2'||(myArray[3][i+1])=='01'||(myArray[3][i+1])=='02'||(myArray[3][i+1])=='12'){
						  
						  res3++;
//$('#time').text(res3);
										  }}
										  
										  	 var res4 = 0;
										    for (var i=0; i<=30; i++){
					  
					  if ((myArray[4][i+1])=='1'||(myArray[4][i+1])=='2'||(myArray[4][i+1])=='01'||(myArray[4][i+1])=='02'||(myArray[4][i+1])=='12'){
						  
						  res4++;
//$('#time').text(res4);
										  }}
										  var res5 = 0;
										    for (var i=0; i<=30; i++){
					  
					  if ((myArray[5][i+1])=='1'||(myArray[5][i+1])=='2'||(myArray[5][i+1])=='01'||(myArray[5][i+1])=='02'||(myArray[5][i+1])=='12'){
						  
						  res5++;
//$('#time').text(res5);
										  }}
										var max =   Math.max.apply(null, [res,res1,res2,res3,res4,res5]);
										  $('#time').text('Часова затримка = '+ max +" од.");
										  });
										
								$('#Control').toggle(function() {

					
			$('.control_lines').css({
			'visibility':'visible',
			'backgroundColor':'#D0FF96'
			});					
				},
			function() {	$('.control_lines').css({
			'visibility':'hidden'
			});}
				
				); 			
				$('#Delete').click(function() {
				$('#box_1 img:visible').last().slideUp();
				$('#box_2 img:visible').last().slideUp();
				$('#box_3 img:visible').last().slideUp();
				$('#box_4 img:visible').last().slideUp();
				$('#box_5 img:visible').last().slideUp();
				$('#box_6 img:visible').last().slideUp();
				
				});
				
				$('#Add').click(function() {
				
				$('#box_1 img:hidden').first().slideDown();
				$('#box_2 img:hidden').first().slideDown();
				$('#box_3 img:hidden').first().slideDown();
				$('#box_4 img:hidden').first().slideDown();
				$('#box_5 img:hidden').first().slideDown();
				$('#box_6 img:hidden').first().slideDown();
				
				
				
				
				});

$('#Language').change(function(){
var str = "";
 $( "select option:selected" ).each(function() {
 if ($(this).hasClass("UA")){
var uk =  "<p class = 'zag'><strong>Helper</strong></p> <p class = 'shag1'><span class = 'vc'>1. Для початку роботи з симулятором</span> трійкових квантовиx мереж виберіть <br>місце(лінію), де Ви хочете поставити <br>примітив.</p><p class = 'shag1'> 2. Після цього виберіть примітив і <br>перетягніть його на лінію, яку Ви <br>вибрали раніше. Таким чином <br>складаються схеми в нашому <br>симуляторі.</p><p class = 'shag1'> 3. При натисканні на кнопку <span class = 'cl'> <br> ' Контролюючі лінії  '</span>  появляються <br>допоміжні елементи для побудови <br>контрольованих ліній. Щоб побудувати таку лінію потрібно на один стовбець поставити допоміжний елемент і потрібний нам примітив.<br>Тоді при натисканні кнопки 'Старт' вона побудується автоматично.<br><span class = 'cl' id = 'pam'> Пам`ятайте!</span> <br>На одному стовбцю можна побудувати <br>лише ОДИН контрольований елемент!</p><p class = 'shag1'> 4. Кнопки <span class ='baton'>'Видалити'</span> та <span class= 'baton'>'Додати'</span> <br>видаляють та добавляють стовбець <br>ліній відповіно. Так Ви можете <br>вибрати потрібну Вам кількість ліній.<p class = 'shag1'> 5. Кнопка <span class ='baton'>'Старт'</span> виконує <br>обчислення побудованої нами схеми.<p class = 'shag1'> 5. Кнопка <span class ='baton'>'Очистити лінію'</span> видаляє всі примітиви зі схеми."

 $("#start").val("Старт");
  $("#Delete").val("Видалити");
  $("#Add").val("Додати");
  $("#helmetSale").text('Виберіть елемент :');
  $("#my_button1").val("Таблиця істиності для елементів");
  $(".lan").text("Виберіть мову");
  $("#Control").val("Контролюючі лінії");
   $('#ochustutu').val("Очистити");
  $("#helper").html(uk);
 }
 else if ($(this).hasClass("EN")){
 $("#start").val("Start");
  $("#Delete").val("Delete");
  $("#Add").val("Add");
  $("#helmetSale").text('Select an item :');
  $("#my_button1").val("truth table for element");
  $(".lan").text("Select language");
   $("#Control").val("Control lines");
 $('#ochustutu').val("Clear");
 var eng = "<p class = 'zag'><strong>Helper</strong></p> <p class = 'shag1'><span class = 'vc'>1.1. To start working with a simulator captains select quant networks location (line) where you want to put primitive..</p><p class = 'shag1'> 2. Then select primitives drag it to the line you selected earlier. Soup scheme in our simulator.</p><p class = 'shag1'> 3. When you click on 'Control lines' appear Extras for building controlled lines. To build such a line in one column need to put an auxiliary element and we need primitive. Then when you click 'Start' it be built automatically. Remember! One column can build Only one controlled element!</p><p class = 'shag1'> 4. 'Remove' button and 'Add' remove and adds column vidpovino lines. Yes you can select the desired number of lines.<p class = 'shag1'> 5. button 'Start' performs calculation circuit constructed by us.<p class = 'shag1'> 5. Button 'Clear' deletes all primitives from the scheme."
  $("#helper").html(eng);
 
 }
 
    });


});
}); 
