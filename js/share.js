jQuery(document).ready(function(){
    const links = jQuery('a.article__share-link');

    links.on('click', function(e) {
        e.preventDefault();

        const $link   = jQuery(this);
        const href    = $link.attr('href');
        const network = $link.attr('data-network');
        const networks = {
                facebook : { width : 600, height : 300 },
                twitter  : { width : 600, height : 254 },
                google   : { width : 515, height : 490 },
                linkedin : { width : 600, height : 473 }
        };
        const popup = function(network){
            const options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
            const optionsStr = options+'height='+networks[network].height+',width='+networks[network].width;
            console.log(href);
            window.open(href, 'share', optionsStr).moveTo(50, 50);
        };
        popup(network);
    });
});