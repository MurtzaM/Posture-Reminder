walk(document.body);

if (window.MutationObserver) {
	var observer = new MutationObserver(function (mutations) {
		Array.prototype.forEach.call(mutations, function (m) {
			if (m.type === 'childList') {
				walk(m.target);
			} else if (m.target.nodeType === 3) {
				handleText(m.target);
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		attributes: false,
		characterData: true,
		subtree: true
	});
}

function walk(node) 
{
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
	var oldValue = textNode.nodeValue;
	    v = oldValue;

	v = v.replace(/\bProblem\b/g, "Posture");
	v = v.replace(/\bPerson\b/g, "Posture");
	v = v.replace(/\bPart\b/g, "Posture");
	v = v.replace(/\bPlace\b/g, "Posture");
	v = v.replace(/\bPoint\b/g, "Posture");
	v = v.replace(/\bproblem\b/g, "posture");
	v = v.replace(/\bperson\b/g, "posture");
	v = v.replace(/\bpart\b/g, "posture");
	v = v.replace(/\bplace\b/g, "posture");
	v = v.replace(/\bpoint\b/g, "posture");
	
	// avoid infinite series of DOM changes
	if (v !== oldValue) {
		textNode.nodeValue = v;
	}
}
