<?php
/**
 * Created by PhpStorm.
 * User: Lindon
 * Date: 7/21/2015
 * Time: 8:16 PM
 */
$data = file_get_contents("http://mobile-api.dev.sansabet.com/web/casino/authenticate/session/622bumlcvcj70lh2ibfo9e9882");
$dataStatus = json_decode($data, true);
print_r($dataStatus);die();
if(isset($dataStatus) && is_array($dataStatus) && isset($dataStatus['status']) && !empty($dataStatus['status']) && $dataStatus['status'] == 'ok'){
    header('Location: http://casino.dev');
}
else{
    print 'error';
}