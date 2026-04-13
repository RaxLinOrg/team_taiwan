<?php
require_once("config/config.php");

$cat_id = isset($_GET['id']) ? $_GET['id'] : '';

if (!isset($CATEGORIES[$cat_id])) {
    header("Location: index.php");
    exit;
}

$dir = $cat_id . "/" . $lang . "/";
$files = [];

if (is_dir($dir)) {
    $found_files = glob($dir . "*.md");
    foreach ($found_files as $file) {
        $filename = basename($file);
        $name = str_replace(".md", "", $filename);
        $name = str_replace("_", " ", $name);
        $files[] = [
            'id' => $filename,
            'name' => ucfirst($name)
        ];
    }
}

$smarty->assign("CAT_ID", $cat_id);
$smarty->assign("CAT_NAME", $CATEGORIES[$cat_id][$lang]);
$smarty->assign("FILES", $files);
$smarty->display("category.tpl");
