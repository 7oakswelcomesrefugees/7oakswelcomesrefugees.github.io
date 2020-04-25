/*  Javascript to adjust display of certain elements within website for mobile/tablet displays
    Includes additional mobile.css stylesheet to overwrite some aspects of the default css styling

Script include tag:
<script type="text/javascript" src="https://7oakswelcomesrefugees.github.io/mobile_adjustment.js"></script>
 */
var active_embed;



if (document.getElementsByClassName("donate")[0]) {

    // if (screen_width < 480 ) {
    //     //var els = contains('td', ':');
    //     //for (var i = 0; i < els.length; i++) {
    //     //  els[i].remove();
    //     //}
    //     table = document.querySelectorAll('table.donate')[0];
    //     if (table) {
    //         table.style.paddingLeft = 0;

    //         rows = table.rows;
    //         for (var i =0; i < rows.length; i++) {
    //             right_cell = rows[i].cells[1];
    //             right_cell.style.padding = 0;
    //         }

    //         var els = contains('td', 'Bank');
    //         els[0].style.paddingLeft = 0;
    //         var els = contains('td', 'Acc Name');
    //         els[0].textContent = "Name:";
    //         els[0].style.paddingLeft = 0;
    //         var els = contains('td', 'Sort Code');
    //         els[0].textContent = "Sort:";
    //         els[0].style.paddingLeft = 0;
    //         var els = contains('td', 'Acc No');
    //         els[0].textContent = "Acc:";
    //         els[0].style.paddingLeft = 0;
    //     }
    // }

    // function contains(selector, text) {
    //   var elements = document.querySelectorAll(selector);
    //   return [].filter.call(elements, function(element){
    //     return RegExp(text).test(element.textContent);
    //   });   
    // }

    cells = document.getElementsByTagName("td");
    if (cells[0]) {
        active_embed = "bank_table";
        adjustBankTable();
    }

    function adjustBankTable() {
        console.log("bank table");
        // parent_frame = parent.document.getElementsByTagName('iframe')[0];
        // parent_width = parent_frame.contentWindow.innerWidth;
        // dynamic_fontsize = Math.round(parent_width/15);
        parent_height = parent.innerHeight;
        dynamic_fontsize = Math.round(parent_height/6.7);
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
        adjustChequeAddress();
        
    }
    function adjustChequeAddress() {
        console.log("cheque address");

        // parent_frame = parent.document.getElementsByTagName('iframe')[0];
        // parent_width = parent_frame.contentWindow.innerWidth;
        // dynamic_fontsize = Math.round(parent_width/16);
        parent_height=parent.innerHeight;
        dynamic_fontsize = Math.round(parent_height/7.5);
        new_fontsize = Math.min(max_fontsize,dynamic_fontsize);

        cells = document.getElementsByTagName("p");     
        for (var i=0; i< cells.length; i++) {
        
          cells[i].style.fontSize = new_fontsize.toString() + "px";
        }
    }
}

var screen_width = screen.width;
if (screen_width < 480) {
    max_fontsize = 20;
} else {
    max_fontsize = 25;
}

if (screen_width < 1000) {
  


    if (document.getElementsByClassName("aboutus")[0]) {
        parent_frame = parent.document.getElementsByTagName('iframe')[0];
        parent_frame.scrolling="no";
        console.log(parent_frame);

        active_embed = "trustee_id";
        adjustTrusteeId();

        function adjustTrusteeId() {
            console.log(active_embed);

            parent_height = parent.innerHeight; //parent_frame.contentWindow.innerHeight;
            dynamic_fontsize = Math.round(parent_height/2.6);

            trustee_id = document.getElementsByTagName("a")[0];
            trustee_id.style.fontSize = dynamic_fontsize.toString() + "px";
            trustee_id.parentElement.style.marginTop = "-2px";
        }
        
    }

    if (document.getElementsByClassName("contactus")[0]) {
        active_embed = "address_blurb";
        adjustAddressBlurb();

        function adjustAddressBlurb() {
            parent_frame = parent.document.getElementsByTagName('iframe')[0];
            parent_frame.scrolling="no";
            parent_height = parent_frame.contentWindow.innerHeight;
            parent_width = parent_frame.contentWindow.innerWidth;

            address_blurb = document.getElementById("addressblurb");
            
            dynamic_fontsize = Math.round(parent_height/8);
            address_blurb.style.fontSize = dynamic_fontsize.toString() + "px";

            dynamic_padding = Math.round(parent_width*0.11);
            address_blurb.style.paddingLeft = dynamic_padding.toString() + "px";
        }

        
    }

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
        active_embed = "google_map";

        adjustGoogleMap();

        window.addEventListener("orientationchange", function() {
            console.log("rotated");
            setTimeout(adjustGoogleMap, 500); 
            }, false);    

        if (screen_width < 480) {

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

    function adjustGoogleMap() {
       // console.log("rotated");
        map_height = getMapHeight();
        //console.log(map_height);
        //console.log(document.documentElement);
        //console.log(document);
        document.documentElement.style.setProperty("--map-window-height", map_height.toString() + "px");
        document.getElementById("map_iframe").height = map_height;
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
        parent_height = parent.innerHeight;
        map_height = Math.round(parent_height*0.64);
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
        setTimeout(updateFunction, 500); 
        // if ((window.orientation ==0) || (window.orientation == 180)) {
        //     console.log("rotated");
        //     console.log(window);
        //     setTimeout(updateFunction, 1000); //timeout may be unecessary, artifact introduced by smaller screen emulator service?
        //     //updateFunction();
        // } else if ((window.orientation == -90) || (window.orientation == 90))  {
            
        // }   //updateFunction();
    }, false);    
    
}