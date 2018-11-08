
//credits: some of the ideas in putting this together are gotten from students who previously did this project and posted it on git.com
empty=15;  
move="none"; 
 
  
 
test = 0;
 
moving= false; 

 
window.onload = function(){
	tiles = document.getElementById('puzzlearea').getElementsByTagName('div');
	document.getElementById('shufflebutton').onclick=shuffle;
	for(var x=0; x<tiles.length;x++){
            
                //tiles[x].document.getElementById('div').src('background.jpg').style.top = '-100px';

		tiles[x].className = 'puzzlepiece';
		tiles[x].onmouseover = canMove;
		tiles[x].onmouseout = this.className = 'puzzlepiece';
		tiles[x].onclick = move;
		if(x<=3){
			tiles[x].style.left+=x*100+'px';
			tiles[x].style.top='0px';
			tiles[x].style.backgroundPosition = -x*100+'px '+'0px';
		}else if(x<=7){
			tiles[x].style.left+=(x-4)*100+'px';
			tiles[x].style.top='100px';
			tiles[x].style.backgroundPosition = -(x-4)*100+'px '+'-100px';
		}else if(x<=11){
			tiles[x].style.left+=(x-8)*100+'px';
			tiles[x].style.top='200px';
			tiles[x].style.backgroundPosition = -(x-8)*100+'px '+'-200px';
		}else{
			tiles[x].style.left+=(x-12)*100+'px';
			tiles[x].style.top='300px';
			tiles[x].style.backgroundPosition = -(x-12)*100+'px '+'-300px';
		}
	}
};

 
var canMove =function(){
	if(!moving){
		if((parseInt(this.style.left)+this.offsetWidth) === parseInt(horizontal()) && this.style.top===vertical()){
			this.className = this.className + " movablepiece";
			move="right";
		}else if(parseInt(this.style.left) === (parseInt(horizontal())+this.offsetWidth) && this.style.top===vertical()){
			this.className = this.className + " movablepiece";
			move= "left";
		}else if((parseInt(this.style.top)+this.offsetHeight) === parseInt(vertical()) && this.style.left===horizontal()){
			this.className = this.className + " movablepiece";
			move= "down";////////////
		}else if(parseInt(this.style.top) === (parseInt(vertical())+this.offsetHeight) && this.style.left===horizontal()){
			this.className = this.className + " movablepiece";
			move= "up";  
		}else{
			move= "none";
		}
	}
};

 
var animate =function(){
	var index = 0;
	for(var i=0; i<tiles.length;i++){
		if(tiles[i].textContent===strn){
			index=i;	
		}
	}
	
	if(test!=100){
		if(move==="left" || move==="right"){
			tiles[index].style.left=parseInt(tiles[index].style.left)+counter+'px';
		}else{
			tiles[index].style.top=parseInt(tiles[index].style.top)+counter+'px';
		}
		test+=1;
		moving=true;
		setTimeout("animate()", "1");
	}else{
		test=0;
		moving=false;
		move="none";
	}		
};

 
var move =function(){
	if(!moving){
		switch(move){
			case "right":
				counter=1;
				 empty-=1;
                                 
				strn=this.textContent;
				animate();
				break;
			case "left":
                                 
				 counter=-1;
				 empty+=1;
                                 
				strn=this.textContent;
				animate();
				break;
			case "down":
				counter=1;
				 empty -=4;
                                 
				strn=this.textContent;
				animate();
				break;
			case "up":
                                
				 counter=-1;
				 empty+=4;
                               
				strn=this.textContent;
				animate();
				break;
		}
	}
};

//shuffles tiles
var shuffle = function(){
	if(!moving){
		for(var i =0; i<100; i++){
			var shuffledtiles = [];
			for(var x =0; x<tiles.length; x++){
				shuffleMove(tiles[x]);
				if(move!="none"){
					shuffledtiles.push(x); 
				}
			}

			if(shuffledtiles.length!=0){
				var x = shuffledtiles[Math.floor((Math.random()*shuffledtiles.length))];
				shuffleMove(tiles[x]);
				shuffleTile(tiles[x]);
			}
		}
		move="none";
	}
};

 
var shuffleMove =function(x){
	if((parseInt(x.style.left)+x.offsetWidth) === parseInt(horizontal()) && x.style.top===vertical()){
		move="right";
	}else if(parseInt(x.style.left) === (parseInt(horizontal())+x.offsetWidth) && x.style.top===vertical()){
		move= "left";
	}else if((parseInt(x.style.top)+x.offsetHeight) === parseInt(vertical()) && x.style.left===horizontal()){
		move= "down";	
	}else if(parseInt(x.style.top) === (parseInt(vertical())+x.offsetHeight) && x.style.left===horizontal()){
		move= "up";
	}else{
		move= "none";
	}
};

 
var shuffleTile=function(x){
	switch(move){
		case "right":
			x.style.left=parseInt(x.style.left)+100+'px';
			empty-=1;
			break;
		case "left":
			x.style.left=parseInt(x.style.left)-100+'px';
			empty+=1;
			break;
		case "down":
			x.style.top=parseInt(x.style.top)+100+'px';
			empty-=4;
			break;
		case "up":
			x.style.top=parseInt(x.style.top)-100+'px';
			empty+=4;
			break;
		default:
                    "none"
	}
};

 
var horizontal=function(){
	if(empty<=3){
		return empty*100+'px';
	}else if(empty<=7){
		return (empty-4)*100+'px';			
	}else if(empty<=11){
		return (empty-8)*100+'px';
	}else{
		return (empty-12)*100+'px';
	}
};
  
var vertical =function(){
	if(empty<=3){
		return '0px';
	}else if(empty<=7){
		return '100px';
	}else if(empty<=11){
		return '200px';
	}else{
		return '300px';
	}
};
  