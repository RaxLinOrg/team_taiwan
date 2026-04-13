<?php
// Smarty configuration
define('SMARTY_DIR', dirname(dirname(__FILE__)) . "/Libs/smarty-5.3.1/libs/");
define('PARSEDOWN_DIR', dirname(dirname(__FILE__)) . "/Libs/");

// Website configuration
define("SITE_NAME", "Team Taiwan");
define("BASE_URL", "/"); // Update this if running in a subdirectory

// Categories
$CATEGORIES = [
    'industry' => [
        'tw' => '工業',
        'en' => 'Industry'
    ],
    'agriculture' => [
        'tw' => '農業',
        'en' => 'Agriculture'
    ],
    'medical' => [
        'tw' => '醫療',
        'en' => 'Medical'
    ],
    'sports' => [
        'tw' => '體育',
        'en' => 'Sports'
    ]
];

// Initialize Smarty
require_once(SMARTY_DIR . "Smarty.class.php");
use Smarty\Smarty;
$smarty = new Smarty();

$smarty->setTemplateDir(dirname(dirname(__FILE__)) . "/view/");
$smarty->setCompileDir(dirname(dirname(__FILE__)) . "/view_c/");
$smarty->setCacheDir(dirname(dirname(__FILE__)) . "/cache/");

if (!is_dir(dirname(dirname(__FILE__)) . "/view_c/")) {
    mkdir(dirname(dirname(__FILE__)) . "/view_c/", 0777, true);
}
if (!is_dir(dirname(dirname(__FILE__)) . "/cache/")) {
    mkdir(dirname(dirname(__FILE__)) . "/cache/", 0777, true);
}

// Language detection
if (isset($_GET['lang']) && in_array($_GET['lang'], ['tw', 'en'])) {
    $lang = $_GET['lang'];
    setcookie('lang', $lang, time() + (86400 * 30), "/");
} else if (isset($_COOKIE['lang']) && in_array($_COOKIE['lang'], ['tw', 'en'])) {
    $lang = $_COOKIE['lang'];
} else {
    $lang = 'tw'; // Default to Traditional Chinese
}

$smarty->assign("SITE_NAME", SITE_NAME);
$smarty->assign("LANG", $lang);
$smarty->assign("CATEGORIES", $CATEGORIES);

// Parsedown initialization
require_once(PARSEDOWN_DIR . "Parsedown.php");
$parsedown = new Parsedown();
