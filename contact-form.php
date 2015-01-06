<?php
if($_POST["message"]) {
    mail("stephane.gerber@catalyste.ch, delphine.linder@catalyste.ch", 'De: '.$_POST["email"], $_POST["message"], 'FROM: info@catalyste.ch');
}
?> 