
var s = {
  frame:0,
  
  total:0,
  
  pics:null,
  
  cont:0,
  
  gapSize:3,
  
  direction:0,
  
  posBuffer:0,
  
  loaded:0,
  
  reverse:false,
  random:false,
  auto:false,
  size:false,
  
  autoAttach : function(){
  
    s.pics = [];
  
    $(".frame").each(function(){
  
      s.total++;
  
      s.pics.push( jQuery(this) );
  
      jQuery(this).hide();
  
    });
  
    s.pics[0].show();
  
    $("body").mousemove(function(e){
  
      if( s.loop() ) {
  
        s.pics[s.frame].hide();
  
        switch ( s.getDirection( e.pageX ) ){
        
          case 'bwd':
            s.frame--;
          break;

          case 'rnd':
            s.frame =  Math.round( Math.random() * s.total ) -1;
          break;
                    
          case 'siz':
//            s.frame++;
//            $(".container").attr('height',480+ s.frame*5);      
//            $(".container").attr('width',360+  s.frame*5);      
          break;          
          
          case 'fwd': 
          default:
            s.frame++;
          break;
            
        }
  
        if( s.frame < 0 ){s.frame=s.total-1;}
  
        if( s.frame>= s.total ){s.frame=0;}
        
//        s.pics[s.frame].rotate(s.frame,'absolute');
          
    //    s.pics[s.frame].css('position','absolute');      
    //    s.pics[s.frame].css('top','0px');      
    //    s.pics[s.frame].css('left','0px');      

        s.pics[s.frame].show();
        
        
        
        ;}
  
    });
  
  },
  
  getDirection : function( pos ){    
    var output = 'fwd';
    if( !s.reverse ) {
      output = 'fwd';
    }else{
      output = 'bwd';
    }
    if(s.auto){
        output = 'aut';
    }
    if(s.random){
        output = 'rnd';
    }
    if(s.size){
        output = 'siz';
    }
    return output;
  
  },
  
  loop : function () {
  
    s.cont++;
  
    if( s.cont >= s.gapSize ){
  
      s.cont=0;
  
      return true;
  
    }
  
    return false;
  
  },

  preload : function () {
    s.loaded++;
    var p = Math.round((s.loaded * 100 ) / s.total);
    $('.preloader').css('width',p+'%');
    if( p>= 100 ){
      $('.preloader').hide();
    };
  },


}



$(document).ready( s.autoAttach );

$(window).keydown(function(event){
  s.random = false;
  s.auto = false;
  s.size = false;
  s.reverse = false;
  switch (event.keyCode) {
    case 49:
      $('.help').html('Keys: 1-FWD  2-REW  3-RND   | Current:FWD');
      s.reverse = false;
    break;
    case 50:
      $('.help').html('Keys: 1-FWD  2-REW  3-RND   | Current:REW');
      s.reverse = true;
    break;
    case 51:
      $('.help').html('Keys: 1-FWD  2-REW  3-RND   | Current:RND');
      s.random = true;
    break;
    case 52:
//      $('.help').html('Keys: 1-FWD  2-REW  3-RND  4-SIZ  | Current:SIZ');
//      s.size = true;
    break;

  }
});



