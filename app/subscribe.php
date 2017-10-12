<?php
	/**
	 * Add the user to the subscribed.txt file if a post was made and the 
	 * security was answered correctly.
	 */
	if (!empty($_POST)) {
		if ($_POST["Captcha"] == "45") {
			/** 
			 * Write the file.
     		 */
			file_put_contents("../data/subscribe.txt", $_POST["FirstName"] . "," . $_POST["LastName"] . "," . $_POST["Email"] . PHP_EOL, FILE_APPEND | LOCK_EX);
			/** 
			 * Redirect.
     		 */
			header("Location: http://www.ellucianil.org/");			
			die();
		} else {
			echo "You did not answer the question correctly.";
		}
	} 
?>