/* --------------------------------------------------
   Functowerce - Educational Interactive Engine
--------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation & Dropdowns ---
    initNavigation();
    
    // --- Citations & Footnotes ---
    initCitations();
    
    // --- Interactive Set Mapping (X -> Y) ---
    initSetMapping();
    
    // --- Interactive Function Grapher ---
    initFunctionGrapher();
});

// --- Navigation Drawers & Profile Menus ---
function initNavigation() {
    const btnMenu = document.getElementById('btn-menu');
    const sidebarDrawer = document.getElementById('sidebar-drawer');
    const btnProfile = document.getElementById('btn-profile');
    const profileModal = document.getElementById('profile-modal');
    
    // Toggle Sidebar Drawer
    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        btnMenu.classList.toggle('active');
        sidebarDrawer.classList.toggle('open');
        
        // Close profile if open
        profileModal.classList.remove('open');
    });
    
    // Toggle Profile Dropdown
    btnProfile.addEventListener('click', (e) => {
        e.stopPropagation();
        profileModal.classList.toggle('open');
        
        // Close sidebar if open
        btnMenu.classList.remove('active');
        sidebarDrawer.classList.remove('open');
    });
    
    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebarDrawer.contains(e.target) && e.target !== btnMenu && !btnMenu.contains(e.target)) {
            btnMenu.classList.remove('active');
            sidebarDrawer.classList.remove('open');
        }
        if (!profileModal.contains(e.target) && e.target !== btnProfile && !btnProfile.contains(e.target)) {
            profileModal.classList.remove('open');
        }
    });
}

// --- Citation Footnote Highlighter ---
function initCitations() {
    const citations = document.querySelectorAll('.citation');
    
    citations.forEach(cit => {
        const num = cit.getAttribute('data-citation');
        const targetFootnote = document.getElementById(`fn-${num}`);
        
        if (targetFootnote) {
            cit.addEventListener('mouseenter', () => {
                targetFootnote.classList.add('highlighted');
                targetFootnote.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });
            
            cit.addEventListener('mouseleave', () => {
                targetFootnote.classList.remove('highlighted');
            });
        }
    });
}

// --- Set Mapping SVG Connections ---
function initSetMapping() {
    const svg = document.getElementById('mapping-svg');
    if (!svg) return;
    const xNodes = document.querySelectorAll('#set-x .element-node');
    const yNodes = document.querySelectorAll('#set-y .element-node');
    
    // Define the unique mathematical mapping: f(x) -> y
    // x1 -> y2, x2 -> y1, x3 -> y4, x4 -> y3
    const mappings = {
        '1': 'b', // x1 -> y2
        '2': 'a', // x2 -> y1
        '3': 'd', // x3 -> y4
        '4': 'c'  // x4 -> y3
    };

    function updateLines() {
        if (!svg) return;
        const svgRect = svg.getBoundingClientRect();
        
        Object.keys(mappings).forEach((xVal, index) => {
            const yVal = mappings[xVal];
            const xNode = document.querySelector(`#set-x .element-node[data-val="${xVal}"]`);
            const yNode = document.querySelector(`#set-y .element-node[data-val="${yVal}"]`);
            const line = document.getElementById(`line-${index + 1}`);
            
            if (xNode && yNode && line) {
                const xRect = xNode.getBoundingClientRect();
                const yRect = yNode.getBoundingClientRect();
                
                // Coordinates relative to SVG canvas
                const startX = xRect.right - svgRect.left;
                const startY = (xRect.top + xRect.height / 2) - svgRect.top;
                
                const endX = yRect.left - svgRect.left;
                const endY = (yRect.top + yRect.height / 2) - svgRect.top;
                
                // Cubic Bezier curve paths for elegant connections
                const cp1X = startX + (endX - startX) * 0.4;
                const cp1Y = startY;
                const cp2X = startX + (endX - startX) * 0.6;
                const cp2Y = endY;
                
                const d = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
                line.setAttribute('d', d);
            }
        });
    }

    // Set initial positions and bind to window resizes
    setTimeout(updateLines, 100);
    window.addEventListener('resize', updateLines);
    
    // Setup hover highlighting
    xNodes.forEach(node => {
        const xVal = node.getAttribute('data-val');
        const yVal = mappings[xVal];
        const yNode = document.querySelector(`#set-y .element-node[data-val="${yVal}"]`);
        
        // Find which path line corresponds to this node index (0-indexed nodes -> 1-indexed lines)
        const nodeIndex = Array.from(xNodes).indexOf(node);
        const line = document.getElementById(`line-${nodeIndex + 1}`);

        node.addEventListener('mouseenter', () => {
            node.classList.add('mapped-active');
            if (yNode) yNode.classList.add('mapped-active');
            if (line) line.classList.add('highlighted');
        });

        node.addEventListener('mouseleave', () => {
            node.classList.remove('mapped-active');
            if (yNode) yNode.classList.remove('mapped-active');
            if (line) line.classList.remove('highlighted');
        });
    });

    // Handle tab change updates (re-render dimensions when visible)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active classes
            btn.classList.add('active');
            const targetTab = btn.getAttribute('data-tab');
            const tabContent = document.getElementById(`tab-${targetTab}`);
            if (tabContent) tabContent.classList.add('active');
            
            if (targetTab === 'mapping') {
                updateLines();
            }
        });
    });
}

// --- HTML5 Canvas Function Grapher ---
function initFunctionGrapher() {
    const canvas = document.getElementById('graph-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const selectFunc = document.getElementById('select-function');
    const xSlider = document.getElementById('x-input');
    const xLabel = document.getElementById('x-val-label');
    const yLabel = document.getElementById('y-val-label');

    // Coordinate Math
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const scaleX = 40; // Pixels per unit
    const scaleY = 40;

    // Mathematical definition mappings
    const mathFunctions = {
        linear: (x) => x,
        quadratic: (x) => x * x,
        sine: (x) => Math.sin(x),
        exponential: (x) => Math.pow(2, x)
    };

    function drawGraph() {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(0, 139, 139, 0.05)';
        ctx.lineWidth = 1;
        
        // Vertical grid lines
        for (let x = centerX % scaleX; x < width; x += scaleX) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        // Horizontal grid lines
        for (let y = centerY % scaleY; y < height; y += scaleY) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw axes
        ctx.strokeStyle = '#2d3748';
        ctx.lineWidth = 1.5;
        
        // X Axis
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();
        
        // Y Axis
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, height);
        ctx.stroke();
        
        // Labels for origin and axes
        ctx.fillStyle = '#718096';
        ctx.font = '10px monospace';
        ctx.fillText('0', centerX - 12, centerY + 14);
        ctx.fillText('x', width - 10, centerY - 8);
        ctx.fillText('y', centerX + 8, 12);

        // Get selected function
        const funcKey = selectFunc.value;
        const f = mathFunctions[funcKey];
        
        // Draw function curve
        ctx.strokeStyle = '#008b8b';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        
        let first = true;
        for (let pixelX = 0; pixelX < width; pixelX++) {
            // Convert pixel X to math X
            const x = (pixelX - centerX) / scaleX;
            const y = f(x);
            
            // Convert math Y back to pixel Y
            const pixelY = centerY - y * scaleY;
            
            if (pixelY >= 0 && pixelY <= height) {
                if (first) {
                    ctx.moveTo(pixelX, pixelY);
                    first = false;
                } else {
                    ctx.lineTo(pixelX, pixelY);
                }
            }
        }
        ctx.stroke();

        // Draw dynamic point (x, f(x)) based on slider input
        const currentX = parseFloat(xSlider.value);
        const currentY = f(currentX);
        
        const pointX = centerX + currentX * scaleX;
        const pointY = centerY - currentY * scaleY;
        
        // Render dotted projection guidelines to coordinates
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        
        // Horizontal projection
        ctx.beginPath();
        ctx.moveTo(pointX, pointY);
        ctx.lineTo(centerX, pointY);
        ctx.stroke();
        
        // Vertical projection
        ctx.beginPath();
        ctx.moveTo(pointX, pointY);
        ctx.lineTo(pointX, centerY);
        ctx.stroke();
        
        // Reset dashed lines
        ctx.setLineDash([]);
        
        // Plot coordinates projection labels
        ctx.fillStyle = '#000000';
        ctx.font = '9px monospace';
        if (Math.abs(currentX) > 0.1) {
            ctx.fillText(currentX.toFixed(1), pointX - 8, centerY + (currentX > 0 ? 12 : -6));
        }
        if (Math.abs(currentY) > 0.1) {
            ctx.fillText(currentY.toFixed(1), centerX + (currentX > 0 ? -22 : 8), pointY + 4);
        }

        // Draw intersection dot
        ctx.fillStyle = '#008b8b';
        ctx.beginPath();
        ctx.arc(pointX, pointY, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Ring around dot
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(pointX, pointY, 6, 0, Math.PI * 2);
        ctx.stroke();

        // Update UI HTML labels
        xLabel.textContent = currentX.toFixed(1);
        yLabel.textContent = currentY.toFixed(2);
    }

    // Bind inputs to redrawing function
    xSlider.addEventListener('input', drawGraph);
    selectFunc.addEventListener('change', () => {
        // Reset slider to center when swapping functions for better visual UX
        xSlider.value = 0;
        drawGraph();
    });
    
    // Initial Render
    drawGraph();

    // Re-draw when clicking the grapher tab to prevent display dimension bugs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-tab') === 'grapher') {
                setTimeout(drawGraph, 20);
            }
        });
    });
}
