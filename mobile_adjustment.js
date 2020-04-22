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
}