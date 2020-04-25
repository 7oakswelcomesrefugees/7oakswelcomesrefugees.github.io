/*  Javascript to adjust display of certain elements within website for mobile/tablet displays
    Includes additional mobile.css stylesheet to overwrite some aspects of the default css styling

Script include tag:
<script type="text/javascript" src="https://7oakswelcomesrefugees.github.io/mobile_adjustment.js"></script>
 */
var active_embed;
var screen_width = screen.width;
var adjust_delay = 150;
// if (true) {
//     var screen_width = 500;
// }

if (screen_width < 480) {
    max_fontsize = 20;
} else {
    max_fontsize = 22;
}

if (document.getElementsByClassName("donate")[0]) {

    cells = document.getElementsByTagName("td");
    if (cells[0]) {
        divisor_bank_table = 6.7;
        active_embed = "bank_table";
        adjustBankTable();
    }

    function adjustBankTable() {
        console.log("bank table");
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
        divisor_cheque_address = 7.5;
        active_embed = "cheque_address";
        adjustChequeAddress();
        
    }
    function adjustChequeAddress() {
        console.log("cheque address");

        parent_height=parent.innerHeight;
        dynamic_fontsize = Math.round(parent_height/divisor_cheque_address);
        new_fontsize = Math.min(max_fontsize,dynamic_fontsize);

        cells = document.getElementsByTagName("p");     
        for (var i=0; i< cells.length; i++) {
        
          cells[i].style.fontSize = new_fontsize.toString() + "px";
        }
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


    if (document.getElementsByClassName("aboutus")[0]) {
        divisor_trustee_id = 2.6;

        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";
        console.log(parent_frame);

        active_embed = "trustee_id";
        adjustTrusteeId();

        function adjustTrusteeId() {
            console.log(active_embed);

            parent_height = parent.innerHeight; //parent_frame.contentWindow.innerHeight;
            dynamic_fontsize = Math.round(parent_height/divisor_trustee_id);

            trustee_id = document.getElementsByTagName("a")[0];
            trustee_id.style.fontSize = dynamic_fontsize.toString() + "px";
            trustee_id.parentElement.style.marginTop = "-2px";
        }
        
    }

    if (document.getElementsByClassName("contactus")[0]) {
        divisors_address_blurb = [8.5,10];
        active_embed = "address_blurb";
        adjustAddressBlurb();

        function adjustAddressBlurb() {
            parent_frame = parent.document.getElementsByTagName('iframe')[0];
            parent_frame.scrolling="no";
            parent_height = parent.document.body.clientHeight;
            parent_width = parent.document.body.clientWidth;

            address_blurb = document.getElementById("addressblurb");
            
            dynamic_fontsize = Math.round(parent_height/divisors_address_blurb[0]);
            address_blurb.style.fontSize = dynamic_fontsize.toString() + "px";

            dynamic_padding = Math.round(parent_width/divisors_address_blurb[1]);
            address_blurb.style.paddingLeft = dynamic_padding.toString() + "px";
        }

        
    }

    



    if (document.getElementById("family_testimonials")) {
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
    }

    lock_control = document.getElementById("lock_control");
    if (lock_control) {
        if (screen_width < 480) {
            scale_map = 0.75;
        } else {
            scale_map = 0.64;
        }

        active_embed = "google_map";

        document.getElementById("map_iframe").scrolling="no";
        adjustGoogleMap();

        window.addEventListener("orientationchange", function() {
            console.log("rotated");
            setTimeout(adjustGoogleMap,  adjust_delay); 
            }, false);    

        
            overlays = document.getElementsByClassName("overlay");

            while (overlays[0]) {
                overlays[0].remove();
        }
    }

    function adjustGoogleMap() {
        console.log("rotated");
        map_height = getMapHeight();
        document.documentElement.style.setProperty("--map-window-height", map_height.toString() + "px");
        document.getElementById("map_iframe").height = map_height;
    }

    function getMapHeight() {
        parent_height = parent.document.body.clientHeight;
        map_height = Math.round(parent_height*scale_map);
        return map_height;
    }

}

var updateFunction;
if (active_embed == "bank_table") { updateFunction = adjustBankTable; }
if (active_embed == "cheque_address") { updateFunction = adjustChequeAddress; }
if (active_embed == "trustee_id") { updateFunction = adjustTrusteeId; }
if (active_embed == "address_blurb") { updateFunction = adjustAddressBlurb; }
if (active_embed == "family_testimonials") { updateFunction = adjustFamilyTestimonials; }
if (active_embed == "google_map") { updateFunction = adjustGoogleMap; }
console.log(updateFunction);

if (active_embed) {
    window.addEventListener("orientationchange", function() {
        console.log("rotated");
        console.log(window);
        //updateFunction();
        setTimeout(updateFunction, adjust_delay); 
        // if ((window.orientation ==0) || (window.orientation == 180)) {
        //     console.log("rotated");
        //     console.log(window);
        //     setTimeout(updateFunction, 1000); //timeout may be unecessary, artifact introduced by smaller screen emulator service?
        //     //updateFunction();
        // } else if ((window.orientation == -90) || (window.orientation == 90))  {
            
        // }   //updateFunction();
    }, false);    
    
}