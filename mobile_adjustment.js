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

	window.addEventListener("orientationchange", function() {
	    if ((window.orientation ==0) || (window.orientation == 180)) {
	    	document.documentElement.style.setProperty("--map-window-height", "200px");
	    } else if ((window.orientation == -90) || (window.orientation == 90))  {
	    	document.documentElement.style.setProperty("--map-window-height", "300px");
	    }
	}, false);

        if (document.getElementById("family_testimonials")) {
                image1 = document.getElementById("image1");
                image2 = document.getElementById("image2");
                image1.src = "https://7oakswelcomesrefugees.github.io/RefugeeSpeechBubbles_splitA.png"
                image2.src = "https://7oakswelcomesrefugees.github.io/RefugeeSpeechBubbles_splitB.png"

                image1.parentElement.style.width = "100%";
                image1.parentElement.style.padding = 0;
                image2.parentElement.style.width = "100%";
                image1.parentElement.style.padding = 0;
                image2.parentElement.style.display = "block";
        }
}