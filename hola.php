<html>
 <head>
  <title>BOT Prueba de PHP</title>
 </head>
 <body>
 <?php echo '<p>Hola Mundo</p>';
 include('simplehtmldom_1_9_1\simple_html_dom.php');
 phpinfo();

 

 // Creamos el objeto a partir de un fichero
$html = file_get_html("https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735");
  //$html = file_get_html("https://www.google.com/");

 // $html->saveHTML("/test.html");

 /*foreach($html->find('a') as $element)
       echo $element->href . '<br>';

 echo $html;
 $html = file_get_contents('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735');
 saveHTMLFile('\\');
 //echo $output . '<br>';


 */
 ?>
 </body>
</html>
