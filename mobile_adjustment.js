/*  Javascript to adjust display of certain elements within website for mobile/tablet displays
    Includes additional mobile.css stylesheet to overwrite some aspects of the default css styling

Script include tag:
<script type="text/javascript" src="https://7oakswelcomesrefugees.github.io/mobile_adjustment.js"></script>
 */

var active_embed;
var screen_width = screen.width;
// if (true) {
//     var screen_width = 500;
// }
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (!iOS && document.getElementById("scroll_alert")) {
    scroll_alert = document.getElementById("scroll_alert");
    if (scroll_alert) {
        document.getElementById("scroll_alert").remove();
    }
}





if (screen_width < 1050) {
    if (screen_width < 480) {
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

    if (document.getElementById("family_testimonials")) {
        if (screen_width < 480) {
            active_embed = "family_testimonials";

            adjustFamilyTestimonials();

            function adjustFamilyTestimonials() {
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
        } else if (iOS) { 
            div = document.getElementsByTagName("div")[0];
            div.addEventListener("touchmove", preventScroll);
            div.addEventListener("touchend", hideScrollAlert);
        }
    }  

    if (document.getElementsByClassName("donate")[0]) {
        if (screen_width < 480) {
            max_fontsize = 18;
        } else {
            max_fontsize = 20;
        }

        cells = document.getElementsByTagName("td");
        if (cells[0]) {
            active_embed = "bank_table";

            parent_frame = parent.document.getElementsByTagName('iframe')[0];
            parent_frame.scrolling="no";
            if (iOS) { 
                console.log("iOS")

                // table_div = document.getElementById("table_div");
                // table_div.style.height="100%"; 
                // table_div.addEventListener("touchmove", preventScroll); 
                // table_div.addEventListener("touchend", hideScrollAlert); 
            } 

            adjustBankTable();
        }

        function adjustBankTable() {
            divisor_bank_table = 6.7;

            parent_height = parent.innerHeight;
            dynamic_fontsize = Math.round(parent_height/divisor_bank_table);
            new_fontsize = Math.min(max_fontsize,dynamic_fontsize);

            cells = document.getElementsByTagName("td");
           
            for (var i=0; i< cells.length; i++) {
                cells[i].style.fontSize = new_fontsize.toString() + "px";
              
                if (cells[i].innerText == "Sevenoaks Welcomes Refugees") {
                    cells[i].innerText = "Sevenoaks W. R.";
                }
            }    
        }

        cells = document.getElementsByTagName("p");
        if (cells[0]) {
            active_embed = "cheque_address";

            parent_frame = parent.document.getElementsByTagName('iframe')[0];
            parent_frame.scrolling="no";
            if (iOS) { 
                console.log("iOS")

                // address_div = document.getElementById("address_div");
                // address_div.style.height="100%"; 
                // address_div.addEventListener("touchmove", preventScroll);
                // address_div.addEventListener("touchend", hideScrollAlert);
            }

            adjustChequeAddress();
        }

        function adjustChequeAddress() {
            divisor_cheque_address = 7.5;

            parent_height=parent.innerHeight;
            dynamic_fontsize = Math.round(parent_height/divisor_cheque_address);
            new_fontsize = Math.min(max_fontsize,dynamic_fontsize);

            cells = document.getElementsByTagName("p");     
            for (var i=0; i< cells.length; i++) {
              cells[i].style.fontSize = new_fontsize.toString() + "px";
            }
        }
    }


    if (document.getElementsByClassName("aboutus")[0]) {
        active_embed = "trustee_id";

        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";

        if (iOS) { 
            div = document.getElementsByTagName("div")[0];
            div.style.height="100%"; 
            div.addEventListener("touchmove", preventScroll);
            div.addEventListener("touchend", hideScrollAlert);
        }
        
        adjustTrusteeId();

        function adjustTrusteeId() {
            if (screen_width < 480) {
                max_fontsize = 23;
            } else {
                max_fontsize = 26;
            }

            divisor_trustee_id = 2.8;

            parent_height = parent.innerHeight; //parent_frame.contentWindow.innerHeight;
            dynamic_fontsize = Math.round(parent_height/divisor_trustee_id);
            new_fontsize = Math.min(max_fontsize,dynamic_fontsize);

            trustee_id = document.getElementsByTagName("a")[0];
            trustee_id.style.fontSize = new_fontsize.toString() + "px";
            trustee_id.parentElement.style.marginTop = "2px";
        }
        
    } 

    if (document.getElementsByClassName("contactus")[0]) {
        active_embed = "address_blurb";

        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";

        address_blurb = document.getElementById("addressblurb");
        if (iOS) { 
            address_blurb.style.height="100%"; 
            address_blurb.parentElement.addEventListener("touchmove", preventScroll); 
            address_blurb.parentElement.addEventListener("touchend", hideScrollAlert);
            document.getElementById("scroll_alert").style.height = "100%";
        }

        adjustAddressBlurb();

        function adjustAddressBlurb() {
            divisors_address_blurb = [8.5,10];

            parent_height = parent.document.body.clientHeight;
            parent_width = parent.document.body.clientWidth;

            dynamic_fontsize = Math.round(parent_height/divisors_address_blurb[0]);
            address_blurb.style.fontSize = dynamic_fontsize.toString() + "px";

            dynamic_padding = Math.round(parent_width/divisors_address_blurb[1]);
            address_blurb.style.paddingLeft = dynamic_padding.toString() + "px";
        }

        
    }

    lock_control = document.getElementById("lock_control");
    if (lock_control) {
        active_embed = "google_map";

        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";
        parent_frame.style.overflow="hidden";
        map_iframe = document.getElementById("map_iframe");
        map_iframescrolling="no";

        body = document.getElementsByTagName("body")[0];
        body.style.marginTop ="7px";

        overlays = document.getElementsByClassName("overlay");

        while (overlays[0]) {
            overlays[0].remove();
        }

        // if (iOS) {
        //     map_iframe.remove();
        //     document.getElementById("iOS_maps").style.display="block";
        // } 
        adjustGoogleMap();
        

        function adjustGoogleMap() {
            map_height = getMapHeight();
            document.documentElement.style.setProperty("--map-window-height", map_height.toString() + "px");
        }

        function getMapHeight() {
            scale_map = 0.7; //0.64
            parent_height = parent.document.body.clientHeight;
            map_height = Math.round(parent_height*scale_map);
            return map_height;
        }
    }

    if (document.getElementsByClassName("footer")[0]) {
        active_embed = "footer";

        if (screen_width < 480) {
            max_fontsize = 18;
        } else {
            max_fontsize = 20;
        }

        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";
        if (iOS) { 
            div = document.getElementsByTagName("div")[0];
            div.addEventListener("touchmove", preventScroll); 
            div.addEventListener("touchend", hideScrollAlert); 
        } 

        if (document.getElementById("email")) {
            adjustFooter();
        }
    
        function adjustFooter() {
            divisor_footer_email = 20;

            parent_width=parent.innerWidth;
            dynamic_fontsize = Math.round(parent_width/divisor_footer_email);
            new_fontsize = Math.min(max_fontsize,dynamic_fontsize);

            email = document.getElementById("email");    
            email.style.fontSize = new_fontsize.toString() + "px";
        }
    }

} else {
    document.documentElement.style.setProperty("--map-window-height", "480px");
}

function preventScroll(e) {
    fade_div = document.getElementById("scroll_alert");
    if (fade_div.style.display == "none") {
        fadeIn(fade_div);
        fade_div.style.display = "block";
    }
    e.preventDefault();
}

function hideScrollAlert(e) {
    fade_div = document.getElementById("scroll_alert");
    fade_div.style.opacity = 0.1;
    fade_div.style.display = "none";
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 0.3){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

var updateFunction;
if (active_embed == "bank_table") { updateFunction = adjustBankTable; }
if (active_embed == "cheque_address") { updateFunction = adjustChequeAddress; }
if (active_embed == "trustee_id") { updateFunction = adjustTrusteeId; }
if (active_embed == "address_blurb") { updateFunction = adjustAddressBlurb; }
if (active_embed == "family_testimonials") { updateFunction = adjustFamilyTestimonials; }
if (active_embed == "google_map") { updateFunction = adjustGoogleMap; }
if (active_embed == "footer") { updateFunction = adjustFooter; }

var adjust_delay = 150;
if (active_embed == "google_map") {
    adjust_delay = 300;
}

if (active_embed) {
    window.addEventListener("orientationchange", function() {
        setTimeout(updateFunction, adjust_delay); 
    }, false);    
    
}