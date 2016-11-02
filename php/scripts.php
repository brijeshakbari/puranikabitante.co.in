
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script src="scripts/less.js" type="text/javascript"></script>
<script src="scripts/base.js" type="text/javascript"></script>
<!--Parallax Script-->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>


<script src="http://www.pinclick.com/buy/js/contact.js" type="text/javascript"></script>
<script src="http://www.pinclick.com/buy/js/conversion.js" type="text/javascript"></script>
<script type="text/javascript"
  src="//www.googleadservices.com/pagead/conversion_async.js">
</script>



<?php
// TODO  - CHANGE TO THE ANALYTICS TRACKING CODE [CONTACT shivani,shaishav,anitha]
?>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  //DO NOT REMOVE
  //Tracking All Pinclick Properties. 
  //Contact shaishav before changing this
  ga('create', 'UA-71767441-10', 'auto', 'debugTracker');
  ga('debugTracker', 'pageview');
  
  
  <?php
    // TODO  - CHANGE 'UA CODE' here]
    ?>
  ga('create', 'UA-72832189-2', 'auto');
  ga('send', 'pageview');
  
  <?php
    // TODO  - CHANGE 'UA CODE' here]
  ?>
  goog_snippet_vars = function() {
    var w = window;
    w.google_conversion_id = 964026105;
    w.google_conversion_label = "ePd7CJ_1ymQQ-b3XywM";
    w.google_remarketing_only = false;
  }
  
  // DO NOT CHANGE THE CODE BELOW.
  goog_report_conversion = function(url) {
    goog_snippet_vars();
    window.google_conversion_format = "3";
    window.google_is_call = true;
    var opt = new Object();
    opt.onload_callback = function() {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  }
  var conv_handler = window['google_trackConversion'];
    if (typeof(conv_handler) == 'function') {
        conv_handler(opt);
    }
  }    
</script>