<!DOCTYPE html>
<html lang="{$LANG}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$SITE_NAME}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <div class="header-container">
            <h1><a href="index.php">{$SITE_NAME}</a></h1>
            <nav>
                <a href="?lang=tw" class="{if $LANG eq 'tw'}active{/if}">繁體中文</a> | 
                <a href="?lang=en" class="{if $LANG eq 'en'}active{/if}">English</a>
            </nav>
        </div>
    </header>
    <main>
