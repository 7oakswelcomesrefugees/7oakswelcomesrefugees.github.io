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
		    	document.documentElement.style.setProperty("--map-window-height", 200);
		    } else if ((window.orientation == -90) || (window.orientation == 90))  {
		    	document.documentElement.style.setProperty("--map-window-height", 300);
		    }
		}, false);
}