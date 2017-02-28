<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Form Parameters</title>
    <style>
    table {
      width: 480px;
      margin: auto;
    }
    table th {
      text-align: left;
    }
    table th.bigth {
      text-align: center;
    }
    </style>
  </head>
  <body>
    <?php
    if (count($_GET) == 0 && count($_POST) == 0) {
      echo "No data was submitted.";
    }
    ?>
    <table border="1" width="400">
      <?php
      if (count($_GET) > 0) {
      ?>
        <tr><th class="bigth" colspan="2">Query Parameters</th></tr>
        <tr><th>Parameter</th><th>Value</th></tr>
        <?php
        foreach ($_GET as $key => $value) {
          echo "<tr><td>" . $key . "</td><td>" . $value . "</td></tr>";
        }
        ?>

      <?php
      }
      ?>

      <?php
      if (count($_POST) > 0) {
      ?>
        <tr><th class="bigth" colspan="2">Post Parameters</th></tr>
        <tr><th>Parameter</th><th>Value</th></tr>

        <?php
        foreach ($_POST as $key => $value) {
          echo "<tr><td>" . $key . "</td><td>" . $value . "</td></tr>";
        }
        ?>
      <?php
      }
      ?>
    </table>
  </body>
</html>
