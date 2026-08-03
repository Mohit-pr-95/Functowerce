document.addEventListener('DOMContentLoaded', () => {
    // --- Language Selector & i18n ---
    initLanguage();

    // --- Theme Switcher ---
    initTheme();

    // --- Navigation & Dropdowns ---
    initNavigation();
    
    // --- Citations & Footnotes ---
    initCitations();
    
    // --- Interactive Set Mapping (X -> Y) ---
    initSetMapping();
    
    // --- Interactive Function Grapher ---
    initFunctionGrapher();
});

/* --- Internationalization (i18n) Translations --- */
const translations = {
    en: {
        header_tagline: "Only place you needed to learn mathematical functions in very comprehensive way",
        magic_bar: "<strong>Functions</strong> - Magic of mathematics",
        magic_bar_quadratic: "<strong>y = x²</strong> - The Quadratic Function & Parabola",
        magic_bar_greatest: "<strong>y = [x]</strong> - The Greatest Integer Function (Floor Function)",
        nav_intro: "Introduction",
        nav_quadratic: "Quadratic Function (y=x²)",
        nav_greatest: "Greatest Integer Function (y=[x])",
        nav_common: "Common Functions",
        nav_types: "Types of Functions",
        nav_domain: "Domain & Codomain",
        nav_inverse: "Inverse Functions",
        profile_welcome: "Welcome Scholar",
        profile_sub: "Track your mathematical progress",
        profile_dashboard: "My Dashboard",
        profile_bookmarks: "Bookmarks",
        profile_settings: "Settings",
        theme_light: "Light",
        theme_dark: "Dark",
        theme_system: "System",
        
        // index.html textbook
        intro_p1: "In mathematics, a <strong>function</strong> from a set X to a set Y assigns to each element of X exactly one element of Y.<span class=\"citation\" data-citation=\"1\">[1]</span> The set X is called the <strong>domain</strong> of the function<span class=\"citation\" data-citation=\"2\">[2]</span> and the set Y is called the <strong>codomain</strong> of the function.<span class=\"citation\" data-citation=\"3\">[3]</span>",
        intro_p2: "Functions were originally the idealization of how a varying quantity depends on another quantity. For example, the position of a planet is a function of time. Historically, the concept was elaborated with the infinitesimal calculus at the end of the 17th century, and, until the 19th century, the functions that were considered were differentiable (that is, they had a high degree of regularity).",
        intro_p3: "The concept of a function is often denoted by a letter such as <em>f</em>, <em>g</em> or <em>h</em>. The value of a function <em>f</em> at an element <em>x</em> of its domain (that is, the element of the codomain that is associated with <em>x</em>) is denoted by <em>f(x)</em>; for example, the value of <em>f</em> at <em>x</em> = 4 is denoted by <em>f</em>(4). Commonly, a specific function is defined by means of an expression depending on <em>x</em>, such as <code>f(x) = x² + 1</code>; in this case, some computation, called function evaluation, may be needed for deducing the value of the function at a particular value; for example, if <code>f(x) = x² + 1</code>, then <code>f(4) = 4² + 1 = 17</code>.",
        intro_p4: "Given its domain and its codomain, a function is uniquely represented by the set of all pairs <em>(x, f(x))</em>, called the <strong>graph of the function</strong>, a popular means of illustrating the function. When the domain and the codomain are sets of real numbers, each such pair may be thought of as the Cartesian coordinates of a point in the plane.",
        intro_p5: "Functions are widely used in science, engineering, and in most fields of mathematics. It has been said that functions are <em>\"the central objects of investigation\"</em> in most fields of mathematics.",
        intro_p6: "The concept of a function has evolved significantly over centuries, from its informal origins in ancient mathematics to its formalization in the 19th century. See <a href=\"https://en.wikipedia.org/wiki/History_of_the_function_concept\" target=\"_blank\" rel=\"noopener\">History of the function concept</a> for details.",
        fn_1: "<span class=\"fn-num\">[1]</span><p class=\"fn-desc\">Halmos, Paul R. (1974). <em>Naive Set Theory</em>. Springer-Verlag. A function is defined as a relation satisfying specific uniqueness conditions.</p>",
        fn_2: "<span class=\"fn-num\">[2]</span><p class=\"fn-desc\">The set of all inputs for which the function is defined and produces a valid output.</p>",
        fn_3: "<span class=\"fn-num\">[3]</span><p class=\"fn-desc\">The set of target values into which the function's output is constrained to fall.</p>",
        
        tab_mapping: "Set Mapping (X &rarr; Y)",
        tab_grapher: "Interactive Grapher",
        domain_title: "Domain (X)",
        codomain_title: "Codomain (Y)",
        mapping_note: "Hover over a domain element in <strong>X</strong> to see how it uniquely maps to <strong>Y</strong>.",
        opt_linear: "Linear: f(x) = x",
        opt_quadratic: "Quadratic: f(x) = x²",
        opt_sine: "Sine: f(x) = sin(x)",
        opt_exponential: "Exponential: f(x) = 2ˣ",
        input_x: "Input (x):",
        output_y: "Output f(x) =",
        
        section_common_title: "Know more about some common functions",
        card_badge_explore: "Explore",
        fn_name_quadratic: "Quadratic Function",
        fn_name_greatest: "Greatest Integer Function",
        fn_name_fractional: "Fractional Part Function",
        fn_name_sine: "Sine Function",
        fn_name_cosine: "Cosine Function",

        // quadratic.html
        quad_intro_h2: "Introduction to y = x²",
        quad_intro_p1: "The function <strong>y = x²</strong>, also written as <code>f(x) = x²</code>, is the parent quadratic function. It takes every input number <em>x</em> and returns its square. Because a positive number squared and a negative number squared both produce a non-negative result, the graph never goes below the x-axis.<span class=\"citation\" data-citation=\"1\">[1]</span>",
        quad_intro_p2: "Visually, <code>y = x²</code> forms a smooth U-shaped curve called a <strong>parabola</strong>. Its lowest point is the <strong>vertex</strong> at <code>(0, 0)</code>, and the y-axis is its line of symmetry. This simple function is the base model for every quadratic expression of the form <code>y = ax² + bx + c</code>.",
        quad_origin_h3: "Origin and Historical Context",
        quad_origin_p1: "The idea of squaring numbers is ancient. Babylonian mathematicians used tables of squares thousands of years ago to support arithmetic, measurement, and early equation solving. Geometry also gave quadratic thinking a natural home: finding the area of a square requires multiplying a side length by itself, so <code>area = x²</code>.",
        quad_origin_p2: "The curved shape connected to <code>x²</code> was studied in classical Greek geometry as a parabola, especially through work on conic sections. In the 17th century, coordinate geometry connected algebra and curves, making it natural to draw equations such as <code>y = x²</code> on an x-y plane.",
        quad_props_h3: "Core Properties",
        quad_props_p1: "The domain of <code>y = x²</code> is all real numbers, because any real input can be squared. The range is <code>y &ge; 0</code>, because squares cannot be negative in the real-number system. The function is <strong>even</strong>, meaning <code>f(-x) = f(x)</code>; for example, <code>(-4)² = 16</code> and <code>4² = 16</code>.",
        quad_props_p2: "The slope changes as x changes. Near the vertex the curve is flat, while farther from the origin it becomes steeper. In calculus, this changing slope is described by the derivative <code>f'(x) = 2x</code>.",
        quad_examples_h3: "Worked Examples",
        quad_examples_p1: "If <code>x = 5</code>, then <code>y = 5² = 25</code>. If <code>x = -5</code>, then <code>y = (-5)² = 25</code>. This pair of equal outputs shows the symmetry of the parabola.",
        quad_examples_p2: "A small table of values helps reveal the shape:",
        quad_sci_h3: "Scientific and Engineering Uses",
        quad_sci_p1: "Quadratic functions appear in <strong>uniformly accelerated motion</strong>. For example, the distance traveled by an object under constant acceleration often contains a squared time term, such as <code>d = &frac12;gt²</code>. This is why falling objects and projectiles are commonly modeled using quadratic equations.<span class=\"citation\" data-citation=\"2\">[2]</span>",
        quad_sci_p2: "Engineers use parabolas in reflectors because a parabolic shape can focus parallel incoming rays toward one point. This principle appears in satellite dishes, radio antennas, solar cookers, telescopes, microphones, and headlights.",
        quad_real_h3: "Real-Life Uses",
        quad_real_p1: "<strong>Area:</strong> The simplest real-life meaning of <code>x²</code> is square area. If a square has side length <code>x</code>, its area is <code>x²</code>. Doubling the side length does not double the area; it makes the area four times as large.",
        quad_real_p2: "<strong>Sports and fountains:</strong> The path of a basketball shot, a thrown ball, or a water stream is often approximated by a parabola when air resistance is ignored.",
        quad_real_p3: "<strong>Design and construction:</strong> Parabolic arches and bridge cable models use quadratic shapes because they distribute load and create stable, predictable curves.<span class=\"citation\" data-citation=\"3\">[3]</span>",
        quad_real_p4: "<strong>Optimization:</strong> Quadratic models help find maximum profit, minimum cost, best dimensions, and efficient designs. Since a parabola has a clear turning point, it is useful when a problem has one best maximum or minimum value.",
        quad_trans_h3: "How Transformations Work",
        quad_trans_p1: "The parent function <code>y = x²</code> can be moved, stretched, compressed, or flipped. In <code>y = a(x - h)² + k</code>, the point <code>(h, k)</code> becomes the vertex. If <code>a</code> is positive, the parabola opens upward; if <code>a</code> is negative, it opens downward.",
        back_to_intro: "Back to Introduction",
        
        tab_properties: "Key Properties",
        tab_visualizer: "Geometric Visualizer",
        prop_formula: "Function Formula",
        prop_geometry: "Curve Geometry",
        prop_geometry_val: "Parabola (opens up)",
        prop_vertex: "Vertex Point",
        prop_axis: "Axis of Symmetry",
        prop_domain: "Domain",
        prop_range: "Range",
        prop_parity: "Parity (Symmetry)",
        prop_parity_val: "Even: f(-x) = f(x)",
        prop_derivative: "Derivative (Slope)",
        prop_antiderivative: "Antiderivative",
        prop_note: "This table lists the mathematical properties of the squaring function.",
        side_len: "Side Length (x):",
        visualizer_note: "Drag the slider to see how the area of a square (<strong>x²</strong>) grows geometrically as its side length (<strong>x</strong>) changes.",
        
        calc_badge: "Calculator",
        calc_title: "Function Calculator",
        calc_desc: "Enter a value of x to compute the corresponding output y from the backend.",
        calc_input_label: "Input (<span class=\"math-var\">x</span>)",
        calc_input_ph: "Enter x value...",
        calc_btn_text: "Calculate",
        calc_hint_input: "Press Enter or click Calculate",
        calc_output_label: "Output (<span class=\"math-var\">y</span>)",
        calc_awaiting: "Awaiting input...",
        calc_hint_output: "Value computed by the backend",

        // greatest_integer.html
        gif_intro_h2: "Introduction to y = [x]",
        gif_intro_p1: "The <strong>Greatest Integer Function</strong>, denoted as <code>y = [x]</code> or <code>f(x) = &lfloor;x&rfloor;</code> (also known as the <strong>floor function</strong>), outputs the largest integer that is less than or equal to <em>x</em>.<span class=\"citation\" data-citation=\"1\">[1]</span>",
        gif_intro_p2: "Visually, <code>y = [x]</code> produces a characteristic staircase graph composed of horizontal line segments. For any real input <em>x</em> in the interval <code>[n, n+1)</code> where <em>n</em> is an integer, the value of <code>f(x)</code> remains constant at <em>n</em>.",
        gif_origin_h3: "Origin and Historical Context",
        gif_origin_p1: "The concept of rounding down to the nearest integer has been used implicitly since ancient mathematics. In 1808, Carl Friedrich Gauss introduced the bracket notation <code>[x]</code> in his work on quadratic reciprocity.",
        gif_origin_p2: "In 1962, Kenneth E. Iverson introduced the terms <em>floor</em> and <em>ceiling</em> along with the floor notation <code>&lfloor;x&rfloor;</code> while defining the APL programming language. Today, both bracket <code>[x]</code> and floor <code>&lfloor;x&rfloor;</code> notations are widely standard across mathematics and computer science.",
        gif_props_h3: "Core Properties",
        gif_props_p1: "The domain of <code>y = [x]</code> is all real numbers <code>(&minus;&infty;, +&infty;)</code>. The range is the set of integers <code>&integers;</code>. The function features jump discontinuities at every integer value.",
        gif_props_p2: "The slope (derivative) <code>f'(x) = 0</code> for all non-integer inputs, while the derivative is undefined at integer jump points where the function steps up by 1.",
        gif_examples_h3: "Worked Examples",
        gif_examples_p1: "If <code>x = 2.7</code>, then <code>y = [2.7] = 2</code>. If <code>x = -1.4</code>, then <code>y = [-1.4] = -2</code>. Note that for negative numbers, rounding down moves to the next smaller integer to the left on the number line.",
        gif_examples_p2: "A sample table of values demonstrates the step behavior:",
        gif_sci_h3: "Scientific and Engineering Uses",
        gif_sci_p1: "<strong>Signal Processing & Digitization:</strong> Analog-to-Digital Converters (ADCs) quantize continuous analog signals into discrete voltage levels using floor function steps.<span class=\"citation\" data-citation=\"2\">[2]</span>",
        gif_sci_p2: "<strong>Computer Science & Data Structures:</strong> Greatest integer functions determine hash table bucket indices, binary tree depth bounds, discrete event scheduling ticks, and integer arithmetic operations.",
        gif_real_h3: "Real-Life Uses",
        gif_real_p1: "<strong>Tiered Pricing & Metered Services:</strong> Parking garage rates, taxi meter charges, and cellular data plans charge in full-step increments based on floor function rules.",
        gif_real_p2: "<strong>Postage & Shipping Rates:</strong> Package shipping costs are calculated based on whole-pound or whole-kilogram step tiers.",
        gif_real_p3: "<strong>Age in Years:</strong> Human age is conventionally calculated as <code>[age]</code> in completed full years.<span class=\"citation\" data-citation=\"3\">[3]</span>",
        gif_trans_h3: "How Transformations Work",
        gif_trans_p1: "Combining <code>[x]</code> with <em>x</em> yields the fractional part function <code>{x} = x - [x]</code>. Transformations like <code>y = a[bx + c] + d</code> scale step height (<em>a</em>), step width (1/<em>b</em>), and shift step origins.",
        gif_tab_visualizer: "Step Visualizer",
        gif_prop_geometry_val: "Staircase / Step Function",
        gif_prop_note: "This table lists the mathematical properties of the greatest integer function.",
        gif_input_val: "Step Input (x):",
        gif_visualizer_note: "Drag the slider to see how the greatest integer <strong>[x]</strong> steps between integer levels as <strong>x</strong> changes.",

        // 404.html
        n404_title: "Boo! Page missing!",
        n404_desc: "Whoops! This page must be a ghost - it's not here!",
        n404_btn: "Find shelter",
        n404_link: "What means 404?",
        n404_modal_title: "What does 404 mean?",
        n404_modal_p1: "In computer networking, an <strong>HTTP 404 Not Found</strong> error is a standard status code indicating that the client was able to communicate with a given server, but the server could not find what was requested.",
        n404_modal_p2: "In the context of <strong>Functowerce</strong>, this mathematical function or section has not been published yet or is currently wandering in the phantom realm of non-existent coordinates!",
        n404_modal_ok: "Got it!"
    },
    hi: {
        header_tagline: "गणितीय फलनों को अत्यंत व्यापक रूप में सीखने का एकमात्र स्थान",
        magic_bar: "<strong>फलन (Functions)</strong> - गणित का जादुई संसार",
        magic_bar_quadratic: "<strong>y = x²</strong> - द्विघात फलन एवं परवलय (Parabola)",
        magic_bar_greatest: "<strong>y = [x]</strong> - महत्तम् पूर्णांक फलन (Floor Function)",
        nav_intro: "परिचय (Introduction)",
        nav_quadratic: "द्विघात फलन (y=x²)",
        nav_greatest: "महत्तम् पूर्णांक फलन (y=[x])",
        nav_common: "सामान्य फलन (Common Functions)",
        nav_types: "फलनों के प्रकार (Types of Functions)",
        nav_domain: "प्रांत एवं सह-प्रांत (Domain & Codomain)",
        nav_inverse: "व्युत्क्रम फलन (Inverse Functions)",
        profile_welcome: "स्वागत है विद्वान",
        profile_sub: "अपनी गणितीय प्रगति पर नज़र रखें",
        profile_dashboard: "मेरा डैशबोर्ड",
        profile_bookmarks: "बुकमार्क",
        profile_settings: "सेटिंग्स",
        theme_light: "लाइट",
        theme_dark: "डार्क",
        theme_system: "सिस्टम",

        // index.html textbook
        intro_p1: "गणित में, समुच्चय X से समुच्चय Y में एक <strong>फलन (function)</strong> X के प्रत्येक अवयव को Y के ठीक एक अवयव से जोड़ता है।<span class=\"citation\" data-citation=\"1\">[1]</span> समुच्चय X को फलन का <strong>प्रांत (domain)</strong><span class=\"citation\" data-citation=\"2\">[2]</span> और समुच्चय Y को फलन का <strong>सह-प्रांत (codomain)</strong> कहा जाता है।<span class=\"citation\" data-citation=\"3\">[3]</span>",
        intro_p2: "फलन मूल रूप से इस बात का आदर्शीकरण थे कि एक परिवर्तनशील राशि दूसरी राशि पर कैसे निर्भर करती है। उदाहरण के लिए, किसी ग्रह की स्थिति समय का एक फलन है। ऐतिहासिक रूप से, 17वीं शताब्दी के अंत में सूक्ष्म कलन (calculus) के साथ इस अवधारणा को विस्तृत किया गया था।",
        intro_p3: "फलन की अवधारणा को अक्सर <em>f</em>, <em>g</em> या <em>h</em> जैसे अक्षर से दर्शाया जाता है। इसके प्रांत के एक अवयव <em>x</em> पर फलन <em>f</em> के मान को <em>f(x)</em> द्वारा निरूपित किया जाता है; उदाहरण के लिए, <em>x</em> = 4 पर <em>f</em> के मान को <em>f(4)</em> द्वारा दर्शाया जाता है। सामान्यतः, एक विशिष्ट फलन को <em>x</em> पर निर्भर व्यंजक द्वारा परिभाषित किया जाता है, जैसे <code>f(x) = x² + 1</code>; इस स्थिति में <code>f(4) = 4² + 1 = 17</code> प्राप्त होता है।",
        intro_p4: "अपने प्रांत और सह-प्रांत को ध्यान में रखते हुए, एक फलन को सभी युगलों <em>(x, f(x))</em> के समुच्चय द्वारा निरूपित किया जाता है, जिसे <strong>फलन का आलेख (graph)</strong> कहा जाता है। यह फलन को चित्रित करने का एक लोकप्रिय माध्यम है।",
        intro_p5: "विज्ञान, इंजीनियरिंग और गणित के अधिकांश क्षेत्रों में फलनों का व्यापक रूप से उपयोग किया जाता है। यह कहा गया है कि फलन गणित के अधिकांश क्षेत्रों में <em>\"अनुसंधान की केंद्रीय वस्तुएं\"</em> हैं।",
        intro_p6: "फलन की अवधारणा सदियों से विकसित हुई है, प्राचीन गणित में इसके अनौपचारिक मूल से लेकर 19वीं शताब्दी में इसके औपचारिकीकरण तक। विवरण के लिए <a href=\"https://en.wikipedia.org/wiki/History_of_the_function_concept\" target=\"_blank\" rel=\"noopener\">फलन अवधारणा का इतिहास</a> देखें।",
        fn_1: "<span class=\"fn-num\">[1]</span><p class=\"fn-desc\">हाल्मोस, पॉल आर. (1974). <em>नेव सेट थ्योरी</em>। फलन को विशिष्ट अद्वितीयता शर्तों को पूरा करने वाले संबंध के रूप में परिभाषित किया गया है।</p>",
        fn_2: "<span class=\"fn-num\">[2]</span><p class=\"fn-desc\">उन सभी इनपुट का समुच्चय जिसके लिए फलन परिभाषित है और एक वैध आउटपुट प्रदान करता है।</p>",
        fn_3: "<span class=\"fn-num\">[3]</span><p class=\"fn-desc\">लक्ष्य मानों का समुच्चय जिसमें फलन का आउटपुट आता है।</p>",
        
        tab_mapping: "समुच्चय मानचित्रण (X &rarr; Y)",
        tab_grapher: "इंटरैक्टिव ग्राफ़र",
        domain_title: "प्रांत (X)",
        codomain_title: "सह-प्रांत (Y)",
        mapping_note: "X के प्रांत अवयव पर माउस लाएं (Hover करें) और देखें कि यह Y से कैसे जुड़ता है।",
        opt_linear: "रेखीय (Linear): f(x) = x",
        opt_quadratic: "द्विघात (Quadratic): f(x) = x²",
        opt_sine: "साइन (Sine): f(x) = sin(x)",
        opt_exponential: "चरघातांकी (Exponential): f(x) = 2ˣ",
        input_x: "इनपुट (x):",
        output_y: "आउटपुट f(x) =",

        section_common_title: "कुछ सामान्य फलनों के बारे में और जानें",
        card_badge_explore: "एक्सप्लोर करें",
        fn_name_quadratic: "द्विघात फलन",
        fn_name_greatest: "महत्तम् पूर्णांक फलन",
        fn_name_fractional: "भिन्नात्मक भाग फलन",
        fn_name_sine: "साइन फलन",
        fn_name_cosine: "कोसाइन फलन",

        // quadratic.html
        quad_intro_h2: "y = x² का परिचय",
        quad_intro_p1: "फलन <strong>y = x²</strong>, जिसे <code>f(x) = x²</code> भी लिखा जाता है, मुख्य द्विघात फलन है। यह प्रत्येक इनपुट संख्या <em>x</em> को लेता है और उसका वर्ग लौटाता है। चूंकि धनात्मक संख्या का वर्ग और ऋणात्मक संख्या का वर्ग दोनों गैर-ऋणात्मक परिणाम देते हैं, इसलिए आलेख कभी भी x-अक्ष से नीचे नहीं जाता है।<span class=\"citation\" data-citation=\"1\">[1]</span>",
        quad_intro_p2: "दृश्य रूप से, <code>y = x²</code> एक चिकना U-आकार का वक्र बनाता है जिसे <strong>परवलय (parabola)</strong> कहा जाता है। इसका सबसे निचला बिंदु <code>(0, 0)</code> पर <strong>शीर्ष (vertex)</strong> है, और y-अक्ष इसकी सममिति रेखा है।",
        quad_origin_h3: "उत्पत्ति और ऐतिहासिक संदर्भ",
        quad_origin_p1: "संख्याओं को वर्ग करने का विचार प्राचीन है। बेबीलोन के गणितज्ञों ने हजारों साल पहले अंकगणित, माप और शुरुआती समीकरण हल करने के लिए वर्ग तालिकाओं का उपयोग किया था। ज्यामिति ने भी द्विघात सोच को एक प्राकृतिक आधार दिया: एक वर्ग का क्षेत्रफल निकालने के लिए उसकी भुजा की लंबाई को स्वयं से गुणा करना पड़ता है, इसलिए <code>क्षेत्रफल = x²</code>।",
        quad_origin_p2: "<code>x²</code> से जुड़ी वक्राकार आकृति का अध्ययन शास्त्रीय ग्रीक ज्यामिति में परवलय के रूप में किया गया था। 17वीं शताब्दी में, निर्देशांक ज्यामिति ने बीजगणित और वक्रों को जोड़ा।",
        quad_props_h3: "मुख्य गुणधर्म",
        quad_props_p1: "<code>y = x²</code> का प्रांत (domain) सभी वास्तविक संख्याएं है। परिसर (range) <code>y &ge; 0</code> है। फलन <strong>सम (even)</strong> है, जिसका अर्थ है <code>f(-x) = f(x)</code>; उदाहरण के लिए, <code>(-4)² = 16</code> और <code>4² = 16</code>।",
        quad_props_p2: "x बदलने के साथ ढाल (slope) बदलता है। कलन (calculus) में, इस बदलते ढाल को अवकलज <code>f'(x) = 2x</code> द्वारा वर्णित किया गया है।",
        quad_examples_h3: "हल किए गए उदाहरण",
        quad_examples_p1: "यदि <code>x = 5</code>, तो <code>y = 5² = 25</code>। यदि <code>x = -5</code>, तो <code>y = (-5)² = 25</code>। समान आउटपुट का यह जोड़ा परवलय की सममिति दिखाता है।",
        quad_examples_p2: "मानों की एक छोटी सी तालिका आकृति को समझने में मदद करती है:",
        quad_sci_h3: "वैज्ञानिक और इंजीनियरिंग उपयोग",
        quad_sci_p1: "द्विघात फलन <strong>एकसमान त्वरित गति</strong> में दिखाई देते हैं। उदाहरण के लिए, वस्तु द्वारा तय की गई दूरी में समय का वर्ग <code>d = &frac12;gt²</code> होता है।<span class=\"citation\" data-citation=\"2\">[2]</span>",
        quad_sci_p2: "इंजीनियर परावर्तकों में परवलय का उपयोग करते हैं क्योंकि परवलयिक आकार आने वाली समानांतर किरणों को एक बिंदु पर केंद्रित कर सकता है (जैसे सैटेलाइट डिश, टेलीस्कोप और हेडलाइट्स)।",
        quad_real_h3: "वास्तविक जीवन में उपयोग",
        quad_real_p1: "<strong>क्षेत्रफल:</strong> <code>x²</code> का सबसे सरल वास्तविक जीवन का अर्थ वर्गाकार क्षेत्रफल है। यदि वर्ग की भुजा की लंबाई <code>x</code> है, तो इसका क्षेत्रफल <code>x²</code> होता है।",
        quad_real_p2: "<strong>खेल और फव्वारे:</strong> बास्केटबॉल शॉट, फेंकी गई गेंद या पानी की धारा का मार्ग परवलय जैसा होता है।",
        quad_real_p3: "<strong>डिजाइन और निर्माण:</strong> परवलयिक मेहराब और पुल के केबल मॉडल द्विघात आकृतियों का उपयोग करते हैं।<span class=\"citation\" data-citation=\"3\">[3]</span>",
        quad_real_p4: "<strong>अनुकूलन (Optimization):</strong> द्विघात मॉडल अधिकतम लाभ, न्यूनतम लागत और सर्वोत्तम आयाम खोजने में मदद करते हैं।",
        quad_trans_h3: "रूपांतरण (Transformations) कैसे काम करते हैं",
        quad_trans_p1: "मूल फलन <code>y = x²</code> को स्थानांतरित, विस्तारित या उलटा किया जा सकता है। <code>y = a(x - h)² + k</code> में बिंदु <code>(h, k)</code> शीर्ष बन जाता है।",
        back_to_intro: "परिचय पृष्ठ पर वापस जाएं",

        tab_properties: "मुख्य गुणधर्म",
        tab_visualizer: "ज्यामितीय विज़ुअलाइज़र",
        prop_formula: "फलन सूत्र",
        prop_geometry: "वक्र ज्यामिति",
        prop_geometry_val: "परवलय (ऊपर की ओर खुलता है)",
        prop_vertex: "शीर्ष बिंदु (Vertex)",
        prop_axis: "सममिति का अक्ष",
        prop_domain: "प्रांत (Domain)",
        prop_range: "परिसर (Range)",
        prop_parity: "सममिति प्रकार (Parity)",
        prop_parity_val: "सम (Even): f(-x) = f(x)",
        prop_derivative: "अवकलज (ढाल)",
        prop_antiderivative: "प्रति-अवकलज (समाकलन)",
        prop_note: "यह तालिका वर्ग फलन के गणितीय गुणों को सूचीबद्ध करती है।",
        side_len: "भुजा की लंबाई (x):",
        visualizer_note: "स्लाइडर को खींचकर देखें कि वर्ग का क्षेत्रफल (<strong>x²</strong>) उसकी भुजा की लंबाई (<strong>x</strong>) बदलने के साथ ज्यामितीय रूप से कैसे बढ़ता है।",

        calc_badge: "कैलक्यूलेटर",
        calc_title: "फलन कैलक्यूलेटर",
        calc_desc: "बैकएंड से संबंधित आउटपुट y की गणना करने के लिए x का मान दर्ज करें।",
        calc_input_label: "इनपुट (<span class=\"math-var\">x</span>)",
        calc_input_ph: "x का मान दर्ज करें...",
        calc_btn_text: "गणना करें",
        calc_hint_input: "एंटर दबाएं या गणना करें पर क्लिक करें",
        calc_output_label: "आउटपुट (<span class=\"math-var\">y</span>)",
        calc_awaiting: "इनपुट की प्रतीक्षा है...",
        calc_hint_output: "बैकएंड द्वारा परिकलित मान",

        // greatest_integer.html
        gif_intro_h2: "y = [x] का परिचय",
        gif_intro_p1: "<strong>महत्तम् पूर्णांक फलन (Greatest Integer Function)</strong>, जिसे <code>y = [x]</code> या <code>f(x) = &lfloor;x&rfloor;</code> (फ्लोर फलन) द्वारा दर्शाया जाता है, प्रत्येक वास्तविक संख्या <em>x</em> के लिए <em>x</em> से छोटा या बराबर सबसे बड़ा पूर्णांक आउटपुट देता है।<span class=\"citation\" data-citation=\"1\">[1]</span>",
        gif_intro_p2: "दृश्य रूप से, <code>y = [x]</code> एक सीढ़ीदार (staircase) आलेख बनाता है। किसी भी अंतराल <code>[n, n+1)</code> में मान <em>n</em> पर स्थिर रहता है।",
        gif_origin_h3: "उत्पत्ति और ऐतिहासिक संदर्भ",
        gif_origin_p1: "निकटतम छोटे पूर्णांक में बदलने का विचार प्राचीन काल से रहा है। 1808 में कार्ल फ्रेडरिक गॉस ने कोष्ठक चिह्न <code>[x]</code> प्रस्तुत किया था।",
        gif_origin_p2: "1962 में केनेथ ई. इवरसन ने <code>&lfloor;x&rfloor;</code> निरूपण पेश किया। आज गणित और कंप्यूटर विज्ञान में दोनों चिह्न व्यापक रूप से उपयोग किए जाते हैं।",
        gif_props_h3: "मुख्य गुणधर्म",
        gif_props_p1: "<code>y = [x]</code> का प्रांत सभी वास्तविक संख्याएं <code>(&minus;&infty;, +&infty;)</code> हैं और परिसर पूर्णांकों का समुच्चय <code>&integers;</code> है।",
        gif_props_p2: "अवकलज <code>f'(x) = 0</code> सभी गैर-पूर्णांकों पर होता है, जबकि पूर्णांकों पर यह अपरिभाषित होता है।",
        gif_examples_h3: "हल किए गए उदाहरण",
        gif_examples_p1: "यदि <code>x = 2.7</code>, तो <code>y = [2.7] = 2</code>। यदि <code>x = -1.4</code>, तो <code>y = [-1.4] = -2</code>। ऋणात्मक संख्याओं के लिए यह संख्या रेखा पर बाईं ओर जाता है।",
        gif_examples_p2: "मानों की एक तालिका इसके सीढ़ीदार व्यवहार को दर्शाती है:",
        gif_sci_h3: "वैज्ञानिक और इंजीनियरिंग उपयोग",
        gif_sci_p1: "<strong>सिग्नल प्रोसेसिंग एवं डिजिटलीकरण:</strong> एनालॉग-टू-डिजिटल कनवर्टर (ADC) सतत संकेतों को असतत मानों में बदलने के लिए फ्लोर फलन का उपयोग करते हैं।<span class=\"citation\" data-citation=\"2\">[2]</span>",
        gif_sci_p2: "<strong>कंप्यूटर विज्ञान:</strong> हैश टेबल, डेटा संरचनाएं और पूर्णांक विभाजन में महत्तम् पूर्णांक फलन का व्यापक उपयोग होता है।",
        gif_real_h3: "वास्तविक जीवन में उपयोग",
        gif_real_p1: "<strong>पार्किंग व बिलिंग दरें:</strong> पार्किंग शुल्क, टैक्सी मीटर और मोबाइल डेटा प्लान पूर्ण-घंटे या चरणबद्ध दरों पर आधारित होते हैं।",
        gif_real_p2: "<strong>डाक व कूरियर शुल्क:</strong> कूरियर दरें वजन के पूर्णांक चरणों पर तय की जाती हैं।",
        gif_real_p3: "<strong>आयु गणना:</strong> मानव आयु पूर्ण वर्षों <code>[आयु]</code> में व्यक्त की जाती है।<span class=\"citation\" data-citation=\"3\">[3]</span>",
        gif_trans_h3: "रूपांतरण (Transformations)",
        gif_trans_p1: "<code>[x]</code> को <em>x</em> से मिलाने पर भिन्नात्मक भाग फलन <code>{x} = x - [x]</code> प्राप्त होता है।",
        gif_tab_visualizer: "स्टेप विज़ुअलाइज़र",
        gif_prop_geometry_val: "सीढ़ीदार फलन (Staircase)",
        gif_prop_note: "यह तालिका महत्तम् पूर्णांक फलन के गणितीय गुणों को सूचीबद्ध करती है।",
        gif_input_val: "इनपुट चरण (x):",
        gif_visualizer_note: "स्लाइडर को खींचकर देखें कि x बदलने पर [x] पूर्णांक चरणों में कैसे बदलता है।",

        // 404.html
        n404_title: "अरे! पृष्ठ गायब है!",
        n404_desc: "ओह! यह पृष्ठ एक भूत होना चाहिए - यह यहाँ नहीं है!",
        n404_btn: "मुख्य पृष्ठ पर जाएं",
        n404_link: "404 का क्या अर्थ है?",
        n404_modal_title: "404 का क्या अर्थ होता है?",
        n404_modal_p1: "कंप्यूटर नेटवर्किंग में, <strong>HTTP 404 Not Found</strong> त्रुटि एक मानक स्थिति कोड है जो दर्शाता है कि सर्वर अनुरोधित संसाधन को नहीं खोज सका।",
        n404_modal_p2: "<strong>Functowerce</strong> के संदर्भ में, यह गणितीय फलन या अनुभाग अभी प्रकाशित नहीं हुआ है!",
        n404_modal_ok: "समझ गया!"
    }
};

// --- Language Selector & i18n Engine ---
function initLanguage() {
    const LANG_KEY = 'functowerce-lang';
    const savedLang = localStorage.getItem(LANG_KEY) || 'en';

    function setLanguage(lang) {
        const dict = translations[lang] || translations.en;

        // Update innerHTML for all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Update placeholder for elements with data-i18n-ph
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        // Update select value on all dropdowns
        document.querySelectorAll('.lang-select').forEach(select => {
            select.value = lang;
        });

        // Save preference in localStorage
        localStorage.setItem(LANG_KEY, lang);
        document.documentElement.setAttribute('lang', lang);

        // Re-bind citation tooltips if needed
        initCitations();

        // Dispatch languageChange event
        window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang: lang } }));
    }

    // Bind change listener to all language dropdowns on page
    document.querySelectorAll('.lang-select').forEach(select => {
        select.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    });

    // Apply language on initial load
    setLanguage(savedLang);
}

// --- Theme Switcher Management (Light, Dark, System) ---
function initTheme() {
    const THEME_KEY = 'functowerce-theme';
    // Default mode is light mode as specified
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(themeMode) {
        let activeTheme = themeMode;
        if (themeMode === 'system') {
            activeTheme = systemMedia.matches ? 'dark' : 'light';
        }
        
        document.documentElement.setAttribute('data-theme', activeTheme);
        
        // Update active UI tab states on every switcher component on the page
        document.querySelectorAll('.theme-tab-btn').forEach(btn => {
            const val = btn.getAttribute('data-theme-val');
            const isActive = val === themeMode;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });

        // Save selection across pages
        localStorage.setItem(THEME_KEY, themeMode);

        // Dispatch event for canvas or other dynamic elements to redraw
        window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme: activeTheme, mode: themeMode } }));
    }

    // Bind tab button clicks
    document.querySelectorAll('.theme-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const themeVal = btn.getAttribute('data-theme-val');
            applyTheme(themeVal);
        });
    });

    // Listen for OS system theme changes if 'system' is currently selected
    systemMedia.addEventListener('change', () => {
        const currentStored = localStorage.getItem(THEME_KEY) || 'light';
        if (currentStored === 'system') {
            applyTheme('system');
        }
    });

    // Initial theme application
    applyTheme(savedTheme);
}

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
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Draw grid
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 139, 139, 0.05)';
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
        ctx.strokeStyle = isDark ? '#cbd5e1' : '#2d3748';
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
        ctx.fillStyle = isDark ? '#94a3b8' : '#718096';
        ctx.font = '10px monospace';
        ctx.fillText('0', centerX - 12, centerY + 14);
        ctx.fillText('x', width - 10, centerY - 8);
        ctx.fillText('y', centerX + 8, 12);

        // Get selected function
        const funcKey = selectFunc.value;
        const f = mathFunctions[funcKey];
        
        // Draw function curve
        ctx.strokeStyle = isDark ? '#14b8a6' : '#008b8b';
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
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)';
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
        ctx.fillStyle = isDark ? '#f8fafc' : '#000000';
        ctx.font = '9px monospace';
        if (Math.abs(currentX) > 0.1) {
            ctx.fillText(currentX.toFixed(1), pointX - 8, centerY + (currentX > 0 ? 12 : -6));
        }
        if (Math.abs(currentY) > 0.1) {
            ctx.fillText(currentY.toFixed(1), centerX + (currentX > 0 ? -22 : 8), pointY + 4);
        }

        // Draw intersection dot
        ctx.fillStyle = isDark ? '#14b8a6' : '#008b8b';
        ctx.beginPath();
        ctx.arc(pointX, pointY, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Ring around dot
        ctx.strokeStyle = isDark ? '#1e293b' : '#ffffff';
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
    
    // Listen for theme change event to redraw canvas
    window.addEventListener('themeChange', drawGraph);

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
