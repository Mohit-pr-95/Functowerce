document.addEventListener('DOMContentLoaded', () => {
    // --- Local Tab Swapping ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
                if (targetTab === 'visualizer') {
                    setTimeout(drawStepGraph, 20);
                }
            }
        });
    });

    // --- Greatest Integer Step Function Canvas Visualizer ---
    const canvas = document.getElementById('step-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const slider = document.getElementById('x-slider');
    const xValDisp = document.getElementById('step-x-val');
    const yValDisp = document.getElementById('step-y-val');
    const sliderLabel = document.getElementById('slider-label');
    const intervalDisp = document.getElementById('step-interval-val');

    // Greatest Integer (Floor) math logic
    function greatestInteger(x) {
        return Math.floor(x);
    }

    function drawStepGraph() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const currentX = parseFloat(slider.value);
        const currentY = greatestInteger(currentX);
        const floorN = Math.floor(currentX);

        // Update UI text displays
        if (xValDisp) xValDisp.textContent = currentX.toFixed(1);
        if (yValDisp) yValDisp.textContent = currentY;
        if (sliderLabel) sliderLabel.textContent = currentX.toFixed(1);
        if (intervalDisp) intervalDisp.textContent = `[${floorN}, ${floorN + 1})`;

        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;
        const scaleX = 35; // Pixels per unit
        const scaleY = 35;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw background grid
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 139, 139, 0.05)';
        ctx.lineWidth = 1;

        for (let x = centerX % scaleX; x < width; x += scaleX) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let y = centerY % scaleY; y < height; y += scaleY) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw Axes
        ctx.strokeStyle = isDark ? '#cbd5e1' : '#2d3748';
        ctx.lineWidth = 1.5;

        // X-Axis
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();

        // Y-Axis
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, height);
        ctx.stroke();

        // Axis Labels & Numbers
        ctx.fillStyle = isDark ? '#94a3b8' : '#718096';
        ctx.font = '10px monospace';
        ctx.fillText('0', centerX - 12, centerY + 14);
        ctx.fillText('x', width - 12, centerY - 8);
        ctx.fillText('y', centerX + 8, 12);

        // Draw tick mark numbers along axes
        const minUnitX = Math.floor((-centerX) / scaleX);
        const maxUnitX = Math.ceil((width - centerX) / scaleX);

        for (let u = minUnitX; u <= maxUnitX; u++) {
            if (u === 0) continue;
            const px = centerX + u * scaleX;
            const py = centerY - u * scaleY;

            if (px > 10 && px < width - 10) {
                ctx.fillText(u.toString(), px - 4, centerY + 14);
            }
            if (py > 10 && py < height - 10) {
                ctx.fillText(u.toString(), centerX - 18, py + 4);
            }
        }

        // Draw Staircase Steps for range [-4, 4]
        for (let n = -5; n <= 5; n++) {
            const stepY = n;
            const pxStart = centerX + n * scaleX;
            const pxEnd = centerX + (n + 1) * scaleX;
            const py = centerY - stepY * scaleY;

            const isActiveStep = (n === floorN);

            // Line segment for interval [n, n+1)
            ctx.strokeStyle = isActiveStep ? (isDark ? '#38bdf8' : '#0284c7') : (isDark ? '#14b8a6' : '#008b8b');
            ctx.lineWidth = isActiveStep ? 3.5 : 2.5;

            ctx.beginPath();
            ctx.moveTo(pxStart, py);
            ctx.lineTo(pxEnd, py);
            ctx.stroke();

            // Left endpoint: Solid Dot at (n, n)
            ctx.fillStyle = isActiveStep ? (isDark ? '#38bdf8' : '#0284c7') : (isDark ? '#14b8a6' : '#008b8b');
            ctx.beginPath();
            ctx.arc(pxStart, py, isActiveStep ? 5 : 4, 0, Math.PI * 2);
            ctx.fill();

            // Right endpoint: Open Circle at (n+1, n)
            ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
            ctx.strokeStyle = isActiveStep ? (isDark ? '#38bdf8' : '#0284c7') : (isDark ? '#14b8a6' : '#008b8b');
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(pxEnd, py, isActiveStep ? 4.5 : 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        // Draw Projection Lines and Point for current X input
        const pointPx = centerX + currentX * scaleX;
        const pointPy = centerY - currentY * scaleY;

        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.6)' : 'rgba(2, 132, 199, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);

        // Vertical projection line from x-axis to step
        ctx.beginPath();
        ctx.moveTo(pointPx, centerY);
        ctx.lineTo(pointPx, pointPy);
        ctx.stroke();

        // Horizontal projection line from y-axis to step
        ctx.beginPath();
        ctx.moveTo(centerX, pointPy);
        ctx.lineTo(pointPx, pointPy);
        ctx.stroke();

        ctx.setLineDash([]); // Reset dashed lines

        // Active Input Highlight Point
        ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
        ctx.beginPath();
        ctx.arc(pointPx, pointPy, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(pointPx, pointPy, 6, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Bind slider & theme events
    slider.addEventListener('input', drawStepGraph);
    window.addEventListener('themeChange', drawStepGraph);

    // Initial render
    drawStepGraph();

    // --- Backend Function Calculator Connection ---
    const calcInput = document.getElementById('calc-x-input');
    const calcOutput = document.getElementById('calc-y-output');
    const calcBtn = document.getElementById('calc-btn');

    if (calcInput && calcOutput) {
        calcInput.addEventListener('input', () => {
            if (calcInput.value.trim() === '') {
                calcOutput.classList.add('waiting');
                calcOutput.innerHTML = '<span class="output-placeholder" data-i18n="calc_awaiting">Awaiting input...</span>';
            }
        });

        function performGreatestIntegerCalculation() {
            const rawVal = calcInput.value.trim();
            if (rawVal === '') {
                calcOutput.classList.add('waiting');
                calcOutput.innerHTML = '<span class="output-placeholder">Please enter a value first.</span>';
                return;
            }

            const numVal = parseFloat(rawVal);
            if (isNaN(numVal)) {
                calcOutput.classList.add('waiting');
                calcOutput.innerHTML = '<span class="output-placeholder" style="color: #ff6b6b;">Invalid number</span>';
                return;
            }

            calcOutput.innerHTML = '<span class="output-placeholder">Calculating...</span>';

            // Try local backend first (http://127.0.0.1:5000), fallback to production or local calculation
            const localUrl = `http://127.0.0.1:5000/greatest_integer?n=${encodeURIComponent(rawVal)}`;
            const renderUrl = `https://server-lqtl.onrender.com/greatest_integer?n=${encodeURIComponent(rawVal)}`;

            fetch(localUrl)
                .then(res => {
                    if (!res.ok) throw new Error('Local server error');
                    return res.json();
                })
                .catch(() => {
                    // Try hosted backend if local backend is down
                    return fetch(renderUrl).then(res => {
                        if (!res.ok) throw new Error('Remote server error');
                        return res.json();
                    });
                })
                .then(data => {
                    if (data && data.result !== undefined) {
                        calcOutput.classList.remove('waiting');
                        calcOutput.textContent = data.result;
                    } else {
                        throw new Error('Invalid response structure');
                    }
                })
                .catch(() => {
                    // Client-side fallback computation matching Python's box(n) logic
                    calcOutput.classList.remove('waiting');
                    const localResult = greatestInteger(numVal);
                    calcOutput.textContent = localResult;
                });
        }

        if (calcBtn) {
            calcBtn.addEventListener('click', performGreatestIntegerCalculation);
        }

        calcInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performGreatestIntegerCalculation();
            }
        });
    }
});
