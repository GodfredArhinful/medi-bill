(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/formatCurrency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format a number as USD currency
 */ __turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatCurrencyCompact",
    ()=>formatCurrencyCompact
]);
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}
function formatCurrencyCompact(value) {
    if (value >= 1000) {
        return `$${(value / 1000).toFixed(1)}k`;
    }
    return formatCurrency(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/KpiCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KpiCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatCurrency.ts [app-client] (ecmascript)");
"use client";
;
;
;
function KpiCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "1ea89ae6b2da74d11a79c184e1a9712a0a671e9d18f1b495a0fb2757a3e8f408") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ea89ae6b2da74d11a79c184e1a9712a0a671e9d18f1b495a0fb2757a3e8f408";
    }
    const { title, value, subtitle, highlight, isCurrency: t1, suffix: t2 } = t0;
    const isCurrency = t1 === undefined ? true : t1;
    const suffix = t2 === undefined ? "" : t2;
    let t3;
    if ($[1] !== isCurrency || $[2] !== suffix || $[3] !== value) {
        t3 = isCurrency ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value) : `${value}${suffix}`;
        $[1] = isCurrency;
        $[2] = suffix;
        $[3] = value;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const displayValue = t3;
    const t4 = `
            card-apple p-6 transition-all duration-300
            ${highlight ? "bg-[var(--apple-black)] text-white" : ""}
        `;
    const t5 = `text-sm font-medium mb-2 ${highlight ? "text-white/70" : "text-[var(--apple-gray)]"}`;
    let t6;
    if ($[5] !== t5 || $[6] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t5,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/KpiCard.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = title;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const t7 = `text-3xl font-semibold tracking-tight ${highlight ? "text-white" : "text-[var(--apple-black)]"}`;
    let t8;
    if ($[8] !== displayValue || $[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t7,
            children: displayValue
        }, void 0, false, {
            fileName: "[project]/src/components/KpiCard.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[8] = displayValue;
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== highlight || $[12] !== subtitle) {
        t9 = subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `mt-2 text-sm ${highlight ? "text-white/60" : "text-[var(--apple-gray)]"}`,
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/KpiCard.tsx",
            lineNumber: 68,
            columnNumber: 22
        }, this);
        $[11] = highlight;
        $[12] = subtitle;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t4 || $[15] !== t6 || $[16] !== t8 || $[17] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/KpiCard.tsx",
            lineNumber: 77,
            columnNumber: 11
        }, this);
        $[14] = t4;
        $[15] = t6;
        $[16] = t8;
        $[17] = t9;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    return t10;
}
_c = KpiCard;
var _c;
__turbopack_context__.k.register(_c, "KpiCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SpendComparisonChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpendComparisonChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/LabelList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatCurrency.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function SpendComparisonChart(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "5096aa7de7b9cd05fa32f11123fe0b5136eaad4a7f891f67a7355a22d2949242") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5096aa7de7b9cd05fa32f11123fe0b5136eaad4a7f891f67a7355a22d2949242";
    }
    const { totalBilled, potentialSavings } = t0;
    let t1;
    if ($[1] !== potentialSavings || $[2] !== totalBilled) {
        t1 = totalBilled > 0 ? (potentialSavings / totalBilled * 100).toFixed(0) : "0";
        $[1] = potentialSavings;
        $[2] = totalBilled;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const savingsPercentage = t1;
    let t2;
    if ($[4] !== totalBilled) {
        t2 = {
            name: "Total Billed",
            amount: totalBilled,
            fill: "#86868b"
        };
        $[4] = totalBilled;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = `Potential Savings (${savingsPercentage}%)`;
    let t4;
    if ($[6] !== potentialSavings || $[7] !== t3) {
        t4 = {
            name: t3,
            amount: potentialSavings,
            fill: "#34c759"
        };
        $[6] = potentialSavings;
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t2 || $[10] !== t4) {
        t5 = [
            t2,
            t4
        ];
        $[9] = t2;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const data = t5;
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            top: 20,
            right: 100,
            left: 20,
            bottom: 20
        };
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
            type: "number",
            tickFormatter: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyCompact"],
            tick: {
                fill: "#86868b",
                fontSize: 12
            },
            axisLine: {
                stroke: "#d2d2d7"
            },
            tickLine: false
        }, void 0, false, {
            fileName: "[project]/src/components/SpendComparisonChart.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
            type: "category",
            dataKey: "name",
            tick: {
                fill: "#1d1d1f",
                fontSize: 14,
                fontWeight: 500
            },
            axisLine: false,
            tickLine: false,
            width: 180
        }, void 0, false, {
            fileName: "[project]/src/components/SpendComparisonChart.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            formatter: _SpendComparisonChartTooltipFormatter,
            contentStyle: {
                backgroundColor: "#fff",
                border: "1px solid #d2d2d7",
                borderRadius: "12px",
                fontSize: "14px",
                padding: "12px 16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SpendComparisonChart.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = [
            0,
            8,
            8,
            0
        ];
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== data) {
        t11 = data.map(_SpendComparisonChartDataMap);
        $[17] = data;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabelList"], {
            dataKey: "amount",
            position: "right",
            formatter: _SpendComparisonChartLabelListFormatter,
            style: {
                fill: "#1d1d1f",
                fontSize: 14,
                fontWeight: 600
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SpendComparisonChart.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            dataKey: "amount",
            radius: t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SpendComparisonChart.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    let t14;
    if ($[22] !== data || $[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-56",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: data,
                    layout: "vertical",
                    margin: t6,
                    barSize: 40,
                    children: [
                        t7,
                        t8,
                        t9,
                        t13
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SpendComparisonChart.tsx",
                    lineNumber: 153,
                    columnNumber: 88
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SpendComparisonChart.tsx",
                lineNumber: 153,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SpendComparisonChart.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[22] = data;
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    return t14;
}
_c = SpendComparisonChart;
function _SpendComparisonChartLabelListFormatter(value_0) {
    return value_0 != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(Number(value_0)) : "";
}
function _SpendComparisonChartDataMap(entry, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
        fill: entry.fill
    }, `cell-${index}`, false, {
        fileName: "[project]/src/components/SpendComparisonChart.tsx",
        lineNumber: 166,
        columnNumber: 10
    }, this);
}
function _SpendComparisonChartTooltipFormatter(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value);
}
var _c;
__turbopack_context__.k.register(_c, "SpendComparisonChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Section(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "7727941bbdd4bdbaf8ee9225b13763c6b23b239472ff400e7872394622aaddcd") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7727941bbdd4bdbaf8ee9225b13763c6b23b239472ff400e7872394622aaddcd";
    }
    const { title, children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `card-apple p-8 ${className}`;
    let t3;
    if ($[1] !== title) {
        t3 = title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-[var(--apple-black)] mb-6 pb-4 border-b border-[var(--apple-border)]",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/Section.tsx",
            lineNumber: 24,
            columnNumber: 19
        }, this);
        $[1] = title;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== children || $[4] !== t2 || $[5] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t2,
            children: [
                t3,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Section.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    return t4;
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ActionPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ActionPanel({ letterElementId, emailContent, emailSubject = "Medical Bill Appeal" }) {
    _s();
    const [isGeneratingPdf, setIsGeneratingPdf] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleDownloadPdf = async ()=>{
        const element = document.getElementById(letterElementId);
        if (!element) {
            alert("Could not find letter content to export");
            return;
        }
        setIsGeneratingPdf(true);
        try {
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                orientation: "portrait",
                unit: "in",
                format: "letter"
            });
            const pageWidth = 8.5;
            const pageHeight = 11;
            const marginLeft = 1;
            const marginRight = 1;
            const marginTop = 1;
            const marginBottom = 1;
            const usableWidth = pageWidth - marginLeft - marginRight;
            const fontSize = 12;
            const lineHeight = fontSize * 1.5 / 72;
            pdf.setFont("times", "normal");
            pdf.setFontSize(fontSize);
            const textContent = element.innerText || element.textContent || "";
            const lines = pdf.splitTextToSize(textContent, usableWidth);
            let currentY = marginTop;
            for(let i = 0; i < lines.length; i++){
                if (currentY + lineHeight > pageHeight - marginBottom) {
                    pdf.addPage();
                    currentY = marginTop;
                }
                pdf.text(lines[i], marginLeft, currentY);
                currentY += lineHeight;
            }
            pdf.save("medical-bill-appeal.pdf");
        } catch (error) {
            console.error("PDF generation error:", error);
            alert("Failed to generate PDF. Please try again.");
        } finally{
            setIsGeneratingPdf(false);
        }
    };
    const handleSendEmail = ()=>{
        const subject = encodeURIComponent(emailSubject);
        const body = encodeURIComponent(emailContent);
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-apple p-6 bg-[var(--apple-light-gray)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-[var(--apple-black)] mb-5",
                children: "Quick Actions"
            }, void 0, false, {
                fileName: "[project]/src/components/ActionPanel.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDownloadPdf,
                        disabled: isGeneratingPdf,
                        className: "btn-apple btn-apple-secondary w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                        children: isGeneratingPdf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 animate-spin",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ActionPanel.tsx",
                                            lineNumber: 73,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ActionPanel.tsx",
                                            lineNumber: 74,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ActionPanel.tsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, this),
                                "Generating..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ActionPanel.tsx",
                            lineNumber: 71,
                            columnNumber: 40
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ActionPanel.tsx",
                                        lineNumber: 79,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ActionPanel.tsx",
                                    lineNumber: 78,
                                    columnNumber: 29
                                }, this),
                                "Download PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ActionPanel.tsx",
                            lineNumber: 77,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ActionPanel.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSendEmail,
                        className: "btn-apple btn-apple-primary w-full text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 1.5,
                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ActionPanel.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ActionPanel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this),
                                "Send via Email"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ActionPanel.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ActionPanel.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ActionPanel.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-xs text-[var(--apple-gray)] text-center",
                children: "Opens your default email client"
            }, void 0, false, {
                fileName: "[project]/src/components/ActionPanel.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ActionPanel.tsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
_s(ActionPanel, "OS84Hf6DBYSYJPMuSvVJpsUehCo=");
_c = ActionPanel;
var _c;
__turbopack_context__.k.register(_c, "ActionPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/letterFormatter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse and format appeal letter into structured sections
 */ __turbopack_context__.s([
    "formatLetterAsText",
    ()=>formatLetterAsText,
    "parseAppealLetter",
    ()=>parseAppealLetter
]);
function parseAppealLetter(rawText) {
    // Default structure
    const result = {
        date: "",
        senderInfo: [],
        recipientInfo: [],
        subject: "",
        salutation: "",
        body: [],
        closing: "Sincerely,",
        signature: ""
    };
    // Try to extract date (look for common date patterns)
    const dateMatch = rawText.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b/i);
    if (dateMatch) {
        result.date = dateMatch[0];
    }
    // Extract subject line
    const subjectMatch = rawText.match(/Subject:\s*(.+?)(?=Dear|To Whom)/i);
    if (subjectMatch) {
        result.subject = subjectMatch[1].trim();
    }
    // Extract salutation
    const salutationMatch = rawText.match(/Dear\s+[^,]+,/i);
    if (salutationMatch) {
        result.salutation = salutationMatch[0];
    }
    // Extract closing and signature
    const closingMatch = rawText.match(/(Sincerely|Respectfully|Best regards|Thank you),?\s*\n*([\s\S]*?)$/i);
    if (closingMatch) {
        result.closing = closingMatch[1] + ",";
        result.signature = closingMatch[2]?.trim() || "";
    }
    // The body is everything between salutation and closing
    let bodyText = rawText;
    // Remove date
    if (result.date) {
        bodyText = bodyText.replace(result.date, "");
    }
    // Remove subject
    if (result.subject) {
        bodyText = bodyText.replace(`Subject: ${result.subject}`, "");
        bodyText = bodyText.replace(result.subject, "");
    }
    // Remove salutation
    if (result.salutation) {
        const salutationIndex = bodyText.indexOf(result.salutation);
        if (salutationIndex !== -1) {
            bodyText = bodyText.substring(salutationIndex + result.salutation.length);
        }
    }
    // Remove closing
    if (closingMatch) {
        bodyText = bodyText.replace(closingMatch[0], "");
    }
    // Split body into paragraphs
    result.body = bodyText.split(/\n\n+/).map((p)=>p.trim()).filter((p)=>p.length > 0 && p.length > 20);
    return result;
}
function formatLetterAsText(rawText) {
    // Basic formatting - add line breaks after common patterns
    let formatted = rawText// Add breaks after date patterns
    .replace(/(\d{4})([A-Z])/g, "$1\n\n$2")// Add breaks before "Dear"
    .replace(/(Dear\s+)/gi, "\n\n$1")// Add breaks before "Subject:"
    .replace(/(Subject:)/gi, "\n\n$1")// Add breaks after Subject line (before Dear)
    .replace(/(Subject:[^\n]+)/gi, "$1\n")// Format patient details in subject lines - add line breaks before each field
    .replace(/,\s*(Patient:)/gi, "\n$1").replace(/,\s*(Member ID:)/gi, "\n$1").replace(/,\s*(Service Date:)/gi, "\n$1").replace(/,\s*(Bill ID:)/gi, "\n$1").replace(/,\s*(Claim ID:)/gi, "\n$1").replace(/,\s*(Claim Number:)/gi, "\n$1").replace(/,\s*(Date of Service:)/gi, "\n$1").replace(/,\s*(Account Number:)/gi, "\n$1").replace(/-\s*(Patient:)/gi, "\n$1").replace(/-\s*(Member ID:)/gi, "\n$1").replace(/-\s*(Service Date:)/gi, "\n$1").replace(/-\s*(Bill ID:)/gi, "\n$1")// Add breaks before closing phrases
    .replace(/(Sincerely|Respectfully|Best regards|Thank you)/gi, "\n\n$1")// Add paragraph breaks between sentences that start new topics
    .replace(/\.\s*(I am writing|I request|I expect|Please|Furthermore|Additionally|Moreover)/gi, ".\n\n$1")// Clean up multiple newlines
    .replace(/\n{3,}/g, "\n\n").trim();
    return formatted;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AppealLetter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppealLetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$letterFormatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/letterFormatter.ts [app-client] (ecmascript)");
"use client";
;
;
;
function AppealLetter(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "deb5c62aad394b1417a0a917494b80afec937891e6228e2651d2c92a3662141f") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "deb5c62aad394b1417a0a917494b80afec937891e6228e2651d2c92a3662141f";
    }
    const { content, id: t1 } = t0;
    const id = t1 === undefined ? "appeal-letter" : t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== content || $[2] !== id) {
        const formattedContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$letterFormatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLetterAsText"])(content);
        t4 = id;
        t5 = "bg-white border border-[var(--apple-border)] rounded-xl p-10 max-h-[600px] overflow-y-auto";
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = {
                fontFamily: "'Georgia', 'Times New Roman', serif"
            };
            $[8] = t6;
        } else {
            t6 = $[8];
        }
        t2 = "max-w-2xl mx-auto space-y-5 text-[15px] leading-relaxed text-[var(--apple-black)]";
        t3 = formattedContent.split("\n\n").map(_AppealLetterAnonymous);
        $[1] = content;
        $[2] = id;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[9] !== t2 || $[10] !== t3) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/AppealLetter.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t4 || $[13] !== t5 || $[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: t4,
            className: t5,
            style: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/AppealLetter.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_c = AppealLetter;
function _AppealLetterAnonymous(paragraph, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-justify",
        children: paragraph
    }, index, false, {
        fileName: "[project]/src/components/AppealLetter.tsx",
        lineNumber: 78,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AppealLetter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AnalysisContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AnalysisContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KpiCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KpiCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendComparisonChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SpendComparisonChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ActionPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppealLetter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AppealLetter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/formatCurrency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function ResultsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "412c4a3026d587bd1053fb8e42b5df0324f2d7a9924bddf7a38df5cccbeb665a") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "412c4a3026d587bd1053fb8e42b5df0324f2d7a9924bddf7a38df5cccbeb665a";
    }
    const { analysis } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AnalysisContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalysis"])();
    if (!analysis) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-[var(--apple-white)] flex items-center justify-center px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center space-y-6 animate-fade-in",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 mx-auto rounded-full bg-[var(--apple-light-gray)] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-10 h-10 text-[var(--apple-gray)]",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 1.5,
                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 376
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/results/page.tsx",
                                lineNumber: 27,
                                columnNumber: 270
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 27,
                            columnNumber: 160
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-subheadline mb-2",
                                    children: "No Results Yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 585
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-body max-w-sm mx-auto",
                                    children: "Upload a medical bill to see your analysis results here."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/results/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 642
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 27,
                            columnNumber: 580
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "btn-apple btn-apple-primary inline-flex",
                            children: "Upload a Bill"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 27,
                            columnNumber: 750
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 27,
                    columnNumber: 105
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 27,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    const totalBilled = analysis.total_billed_amount;
    const potentialSavings = analysis.potential_money_back;
    let t0;
    if ($[2] !== potentialSavings || $[3] !== totalBilled) {
        t0 = totalBilled > 0 ? (potentialSavings / totalBilled * 100).toFixed(0) : "0";
        $[2] = potentialSavings;
        $[3] = totalBilled;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const savingsPercentage = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const reportDate = t1;
    let t2;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "fixed top-0 left-0 right-0 z-50 bg-[var(--apple-white)]/80 backdrop-blur-xl border-b border-[var(--apple-border)]/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/medibill_logo.svg",
                            alt: "MediBill",
                            width: 120,
                            height: 40,
                            className: "h-8 w-auto",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 60,
                            columnNumber: 238
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 60,
                        columnNumber: 223
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-sm text-[var(--apple-blue)] hover:underline transition-colors",
                        children: "New Analysis"
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 60,
                        columnNumber: 357
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 60,
                columnNumber: 144
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "inline-flex items-center gap-2 text-sm text-[var(--apple-blue)] hover:underline mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 68,
                        columnNumber: 201
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 68,
                    columnNumber: 122
                }, this),
                "Back"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-headline",
            children: "Analysis Report"
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t4;
    } else {
        t3 = $[7];
        t4 = $[8];
    }
    let t5;
    if ($[9] !== reportDate) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "mb-12 animate-fade-in",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-body mt-2",
                    children: reportDate
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 78,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = reportDate;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== totalBilled) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KpiCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Total Billed",
            value: totalBilled
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[11] = totalBilled;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = `${savingsPercentage}% of total`;
    let t8;
    if ($[13] !== potentialSavings || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KpiCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Potential Savings",
            value: potentialSavings,
            subtitle: t7
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[13] = potentialSavings;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium mb-2 text-[var(--apple-gray)]",
            children: "Win Probability"
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const t10 = Math.min(analysis.percentage ?? 0, 100);
    let t11;
    if ($[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-apple p-6",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-4xl font-bold text-[var(--apple-blue)]",
                    children: [
                        t10,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 112,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t11 || $[20] !== t6 || $[21] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-foreground ",
            children: [
                t6,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[19] = t11;
        $[20] = t6;
        $[21] = t8;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== potentialSavings || $[24] !== totalBilled) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Savings Overview",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SpendComparisonChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                totalBilled: totalBilled,
                potentialSavings: potentialSavings
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 130,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[23] = potentialSavings;
        $[24] = totalBilled;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-sm font-semibold text-[var(--apple-black)]",
            children: "Appeal Strategy"
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Recommendations",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3",
                        children: [
                            "Review itemized charges for duplicate or erroneous entries",
                            "Compare charges against standard rates for your region",
                            "Contact your insurance provider to verify coverage",
                            "Submit formal appeal using the generated letter below"
                        ].map(_ResultsPageAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/app/results/page.tsx",
                        lineNumber: 146,
                        columnNumber: 76
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 146,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== analysis.appeal) {
        t16 = ({
            "ResultsPage[<button>.onClick]": ()=>navigator.clipboard.writeText(analysis.appeal)
        })["ResultsPage[<button>.onClick]"];
        $[28] = analysis.appeal;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 163,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t16,
                className: "text-sm text-[var(--apple-blue)] hover:underline flex items-center gap-2",
                children: [
                    t17,
                    "Copy"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 170,
                columnNumber: 50
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[31] = t16;
        $[32] = t18;
    } else {
        t18 = $[32];
    }
    let t19;
    if ($[33] !== analysis.appeal) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AppealLetter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            content: analysis.appeal,
            id: "appeal-letter-content"
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[33] = analysis.appeal;
        $[34] = t19;
    } else {
        t19 = $[34];
    }
    let t20;
    if ($[35] !== t18 || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "Appeal Letter",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[35] = t18;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-[var(--apple-gray)]",
            children: "Assumptions & Notes"
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-caption space-y-2 pt-4",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1 text-[var(--apple-gray)]/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Analysis based on uploaded document data only"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 202,
                            columnNumber: 115
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Savings estimates are approximate and subject to negotiation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 202,
                            columnNumber: 171
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Consult with a billing specialist for complex cases"
                        }, void 0, false, {
                            fileName: "[project]/src/app/results/page.tsx",
                            lineNumber: 202,
                            columnNumber: 242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 202,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== t12 || $[41] !== t13 || $[42] !== t20) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 space-y-8 animate-fade-in-up",
            children: [
                t12,
                t13,
                t15,
                t20,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[40] = t12;
        $[41] = t13;
        $[42] = t20;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            animationDelay: "0.2s"
        };
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    const t25 = analysis.appeal;
    let t26;
    if ($[45] !== potentialSavings) {
        t26 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(potentialSavings);
        $[45] = potentialSavings;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    const t27 = `Medical Bill Appeal - ${t26} Potential Recovery`;
    let t28;
    if ($[47] !== analysis.appeal || $[48] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "xl:w-72 order-first xl:order-last animate-fade-in",
            style: t24,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "xl:sticky xl:top-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ActionPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    letterElementId: "appeal-letter-content",
                    emailContent: t25,
                    emailSubject: t27
                }, void 0, false, {
                    fileName: "[project]/src/app/results/page.tsx",
                    lineNumber: 238,
                    columnNumber: 129
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 238,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[47] = analysis.appeal;
        $[48] = t27;
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] !== t23 || $[51] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col xl:flex-row gap-8",
            children: [
                t23,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[50] = t23;
        $[51] = t28;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    if ($[53] !== t29 || $[54] !== t5) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "pt-24 pb-16 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    t5,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 256,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[53] = t29;
        $[54] = t5;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "py-8 text-center text-caption border-t border-[var(--apple-border)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "© 2026 MediBill. All rights reserved."
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 265,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 265,
            columnNumber: 11
        }, this);
        $[56] = t31;
    } else {
        t31 = $[56];
    }
    let t32;
    if ($[57] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[var(--apple-bg)]",
            children: [
                t2,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/results/page.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[57] = t30;
        $[58] = t32;
    } else {
        t32 = $[58];
    }
    return t32;
}
_s(ResultsPage, "8yCmlbIJtHc5ViQQFj94WcDjnBI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AnalysisContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnalysis"]
    ];
});
_c = ResultsPage;
function _ResultsPageAnonymous(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-3 text-body",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-5 h-5 rounded-full bg-[var(--apple-blue)]/10 text-[var(--apple-blue)] flex items-center justify-center flex-shrink-0 text-xs font-medium",
                children: i + 1
            }, void 0, false, {
                fileName: "[project]/src/app/results/page.tsx",
                lineNumber: 281,
                columnNumber: 67
            }, this),
            item
        ]
    }, i, true, {
        fileName: "[project]/src/app/results/page.tsx",
        lineNumber: 281,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fba845ee._.js.map