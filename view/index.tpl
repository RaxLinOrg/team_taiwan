{include file="header.tpl"}

<div class="category-grid">
    {foreach from=$CATEGORIES key=cat_id item=cat_names}
        <div class="category-card">
            <a href="{$cat_id}/{$LANG}/index.html">
                <h2>{$cat_names.$LANG}</h2>
            </a>
        </div>
    {/foreach}
</div>

{include file="footer.tpl"}
