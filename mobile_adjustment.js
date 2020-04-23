/* Script include tag:
<script type="text/javascript" src="https://7oakswelcomesrefugees.github.io/mobile_adjustment.js"></script>
*/

var screen_width = screen.width;
if (screen_width < 480 ) {
var head = document.getElementsByTagName('HEAD')[0];  
  
        // Create new link Element 
        var link = document.createElement('link'); 
  
        // set the attributes for link element  
        link.rel = 'stylesheet';  
      
        link.type = 'text/css'; 
      
        link.href = 'https://7oakswelcomesrefugees.github.io/mobile.css';  
  
        // Append link element to HTML head 
        head.appendChild(link);

        if (document.getElementById("family_testimonials")) {
                image1 = document.getElementById("image1");
                image2 = document.getElementById("image2");
                image1.src = "https://7oakswelcomesrefugees.github.io/RefugeeSpeechBubbles_splitA.png"
                image2.src = "https://7oakswelcomesrefugees.github.io/RefugeeSpeechBubbles_splitB.png"

                image1.parentElement.style.width = "100%";
                image1.parentElement.style.padding = 0;
                image2.parentElement.style.width = "100%";
                image2.parentElement.style.padding = 0;
                image2.parentElement.style.display = "block";
        }

        lock_control = document.getElementById("lock_control");
        if (lock_control) {
            window.addEventListener("orientationchange", function() {
            if ((window.orientation ==0) || (window.orientation == 180)) {
                document.documentElement.style.setProperty("--map-window-height", "200px");
            } else if ((window.orientation == -90) || (window.orientation == 90))  {
                document.documentElement.style.setProperty("--map-window-height", "300px");
            }
        }, false);    

            pic = lock_control.querySelectorAll("img")[0];
            pic.src = "https://7oakswelcomesrefugees.github.io/GoogleMapsLogo.png";

            sentence = lock_control.querySelectorAll("p")[0];
            sentence.innerHTML = "Click to load Google map"

            top_overlay = document.getElementById('top_overlay');
            top_overlay.removeEventListener('click',unlockMap);
            top_overlay.removeEventListener('click',lockMap);
            top_overlay.addEventListener('click', expandMap);
            top_overlay.addEventListener('click', reduceMap);


        }
	
        function expandMap(e) {
                let root = document.documentElement;
                root.style.setProperty('--map-window-height', "100%");

                lock_pic=document.getElementById("lock_pic");
                lock_pic.src = "https://7oakswelcomesrefugees.github.io/reduceMapIcon.png"
                lock_pic.style.display ="block"; 

                         unlock_div=document.getElementById("unlock_div")
                      unlock_div.style.display= "none"; 
                      translucent_div=document.getElementById("translucent_div")
                      translucent_div.style.display= "none"; 
                    top_overlay=document.getElementById("top_overlay");
                    top_overlay.style.display = "none";
                      
                
        }
        function reduceMap(e) {
                let root = document.documentElement;
                root.style.setProperty('--map-window-height', "200px");

                lock_pic=document.getElementById("lock_pic");
                lock_pic.style.display ="none"; 

                         unlock_div=document.getElementById("unlock_div")
                      unlock_div.style.display= "block"; 
                      translucent_div=document.getElementById("translucent_div")
                      translucent_div.style.display= "block"; 
                    top_overlay=document.getElementById("top_overlay");
                    top_overlay.style.display = "block";
                      
        }

}