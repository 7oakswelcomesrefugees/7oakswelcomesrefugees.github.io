/*  Javascript to adjust display of certain elements within website for mobile/tablet displays
    Includes additional mobile.css stylesheet to overwrite some aspects of the default css styling

Script include tag:
<script type="text/javascript" src="https://7oakswelcomesrefugees.github.io/mobile_adjustment.js"></script>
 */

var screen_width = screen.width;
if (screen_width < 1000) {
    if (document.getElementsByClassName("aboutus")[0]) {
        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";
        parent_height = parent_frame.contentWindow.innerHeight;
        dynamic_fontsize = Math.round(parent_height/2.5);

        trustee_id = document.getElementsByTagName("a")[0];
        trustee_id.style.fontSize = dynamic_fontsize.toString() + "px";
        trustee_id.parentElement.style.marginTop = "-2px";
    }


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
            map_height = getMapHeight();
            document.documentElement.style.setProperty("--map-window-height", map_height.toString() + "px");
            document.getElementById("map_iframe").height = map_height;

        
            if (screen_width < 480) {
                window.addEventListener("orientationchange", function() {
                    if ((window.orientation ==0) || (window.orientation == 180)) {
                        map_height = getMapHeight();
                        document.documentElement.style.setProperty("--map-window-height", map_height.toString() + "px");
                        document.getElementById("map_iframe").height = map_height;
                    } else if ((window.orientation == -90) || (window.orientation == 90))  {
                        map_height = getMapHeight();
                        document.documentElement.style.setProperty("--map-window-height", map_height.toString() + "px");
                        document.getElementById("map_iframe").height = map_height;
                    }
                }, false);    

                pic = lock_control.querySelectorAll("img")[0];
                pic.src = "https://7oakswelcomesrefugees.github.io/GoogleMapsLogo.png";

                sentence = lock_control.querySelectorAll("p")[0];
                sentence.innerHTML = "Click to load Google map"

                top_overlay = document.getElementById('top_overlay');
                top_overlay.removeEventListener('click',unlockMap);
                top_overlay.removeEventListener('click',lockMap);
                top_overlay.addEventListener('click', loadMap);
                


            }
        }
	
        function loadMap(e) {
            //map_url = "https://www.google.com/maps/d/u/1/viewer?mid=13-swUGe96NuWXLNk908U2j6azFBWZKZL&ll=51.28007648128535%2C0.20557084999995823&z=15";
            //map_url = "https://maps.google.com/maps/d/u/1/view?hl=en&mid=13-swUGe96NuWXLNk908U2j6azFBWZKZL&ll=51.28007648128536%2C0.20557084999995823&z=13";
            map_url="https://www.google.com/maps/d/viewer?mid=13-swUGe96NuWXLNk908U2j6azFBWZKZL&hl=en&usp=sharing";
            //var aTag = document.createElement('a');
            //aTag.setAttribute('href',map_url);
            //  aTag.click();
            window.open(map_url);
                
        }

        function getMapHeight() {
            parent_frame = parent.document.getElementsByTagName('iframe')[0];
            parent_height = parent_frame.contentWindow.innerHeight;
            map_height = Math.round(parent_height*0.7);
            return map_height;
        }

}