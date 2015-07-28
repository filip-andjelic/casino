<?php
/**
 * Created by PhpStorm.
 * User: Lindon Camaj
 * Date: 7/20/2015
 * Time: 1:11 PM
 */

require_once '/var/www/html/bet-api.dev.sansabet.com/httpdocs/Betapi/loader.php';

print "Sansabet Casion Test";

$token = \Betapi\Wallet\Users\Service\WalletUserService::factory()->generateNewToken(
    array("userName" => "eugene", "password" => "343b1c4a3ea721b2d640fc8700db0f36", "walletType" => \Betapi\Wallet\Main\Enum\WalletType::ORYX)
);
?>
<html>
    <head>
        <title>Casino Test Page</title>
    </head>
    <body>
        <iframe src="https://launch-test.oryxgaming.com/wallets/SANSABET/games/ORYX_BB/open?token=<?php print $token; ?>&languageCode=ENG&playMode=FUN&username=eugene"></iframe>
    </body>
</html>