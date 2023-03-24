		
		
			 let a=new Date();
			 var b=a.getHours();
			 if(b>=6 && b<12){
				 document.getElementById("time").innerHTML=b+" "+"AM"+" "+"Morning"
			 }
			 else if(b>=12 && b<=18){
				document.getElementById("time").innerHTML=b+" "+"PM"+" "+"Evening"
			 }
			 else{
				 document.getElementById("time").innerHTML=b+" "+"night"+" "+"Night"
			 }
		
		
		
		
		
		
		
			
		//Time 1
		
		var x=new Date();
			 y=x.toLocaleTimeString();
			 if(y.indexOf("AM")>=8){
			 if(y[0]+y[2]+y[5]>=0600 || y[0]+y[3]+y[6]>=0600 && y[0]+y[2]+y[5]<=900 || y[0]+y[1]+y[3]+y[6]<1200){
				 console.log(x.getHours()+" "+ "Morning");
			 }
			 else{
				 console.log(x.getHours()+" "+"Night");
			 }
		}
		else{
			 if(y[0]+y[1]+y[3]+y[6]>=1200 && y[0]+y[1]+y[3]+y[6]<=1800){
				console.log(x.getHours()+" "+"Afternoon");
			 }
			 else{
				 console.log(x.getHours()+" "+"Night");
			 }
		}
		
		
		
		
