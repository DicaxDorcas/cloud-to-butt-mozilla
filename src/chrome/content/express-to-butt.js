(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
    
        v = v.replace(/\bExpress Framework\b/g, "My Butt");
        v = v.replace(/\bExpress framework\b/g, "My butt");
        v = v.replace(/\bexpress Framework\b/g, "my Butt");
        v = v.replace(/\bexpress framework\b/g, "my butt");
        v = v.replace(/\bexpressjs\b/g, "my butt");
        v = v.replace(/\bexpress.js\b/g, "my butt");
        v = v.replace(/\bExpress.js\b/g, "my butt");
        v = v.replace(/\bexpress.JS\b/g, "my butt");
        v = v.replace(/\bExpress.JS\b/g, "my butt");
        v = v.replace(/\bexpress\b/g, "butt");
        v = v.replace(/\bExpress\b/g, "Butt"); 
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
