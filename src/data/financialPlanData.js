// ============================================================
// Financial Plan Data — replaces Google Sheets iframe
// All figures in EUR, European formatting (dot = thousands, comma = decimals)
// ============================================================

// ── Initial Investment (Detailed Breakdown) ─────────────────
export const initialInvestment = {
    totalInvestment: '718.548,00 €',
    note2027: 'Excluye partidas proyectadas 2027: Licencia CNMV (123.000 €) y Agente Financiero (35.000 €)',
    categories: [
        {
            title: 'LICENSES',
            total: '193.500,00 €',
            items: [
                { label: 'CNMV Licence', value: '123.000,00 €', note: 'Proyección 2027' },
                { label: 'Initial equity', value: '50.000,00 €', note: '' },
                { label: 'Audits', value: '15.000,00 €', note: '' },
                { label: 'Data protection & anti-money laundering', value: '2.500,00 €', note: '' },
                { label: 'LTD', value: '3.000,00 €', note: '' },
            ],
        },
        {
            title: 'SOFTWARE',
            total: '61.038,00 €',
            items: [
                { label: 'AWS', value: '27.000,00 €', note: '' },
                { label: 'IT equipment', value: '14.700,00 €', note: 'Macbook Pro x7' },
                { label: 'Cybersecurity', value: '10.000,00 €', note: '' },
                { label: 'Software IT', value: '5.000,00 €', note: '' },
                { label: 'Technological licences', value: '3.798,00 €', note: '' },
                { label: 'Holded', value: '540,00 €', note: '' },
            ],
        },
        {
            title: 'TEAM',
            total: '406.210,00 €',
            items: [
                { label: 'Management board', value: '179.550,00 €', note: '3 directors (45.000 € gross/year)' },
                { label: 'Technical team', value: '119.700,00 €', note: '2 technical positions (45.000 € gross/year)' },
                { label: 'Financial agent', value: '35.000,00 €', note: 'Proyección 2027' },
                { label: 'Jewelry appraisal', value: '7.000,00 €', note: '1.5% fee on jewelry volume' },
                { label: 'Cars appraisal', value: '7.000,00 €', note: '1.5% fee on car volume' },
                { label: 'SS (National Insurance)', value: '55.460,00 €', note: '' },
                { label: 'Training', value: '2.500,00 €', note: '' },
            ],
        },
        {
            title: 'MARKETING',
            total: '64.400,00 €',
            items: [
                { label: 'Marketing budget', value: '35.000,00 €', note: '' },
                { label: 'Video & podcast production', value: '14.000,00 €', note: '' },
                { label: 'Networking and trips', value: '12.000,00 €', note: '2 trips/month @ 400 €/trip' },
                { label: 'Design and branding', value: '3.400,00 €', note: '' },
            ],
        },
        {
            title: 'OFFICE LEASES & BUILDINGS',
            total: '23.400,00 €',
            items: [
                { label: 'Warehouse', value: '15.000,00 €', note: '' },
                { label: 'Electricity and water', value: '5.400,00 €', note: '' },
                { label: 'Coworking rent', value: '3.000,00 €', note: '' },
            ],
        },
        {
            title: 'PROPERTY, PLANT & EQUIPMENT',
            total: '3.000,00 €',
            items: [
                { label: 'Refrigerating chamber', value: '3.000,00 €', note: '' },
            ],
        },
        {
            title: 'PROFESSIONAL SERVICES',
            total: '125.000,00 €',
            items: [
                { label: 'Legal, tax and accounting', value: '25.000,00 €', note: '' },
                { label: 'Insurance', value: '100.000,00 €', note: 'Fixed deposit, transactional and transport insurance' },
            ],
        },
    ],
};

// ── Hypothesis ──────────────────────────────────────────────
export const hypothesis = {
    years: ['2026', '2027', '2028', '2029', '2030'],

    general: [
        { label: 'Corporate Income Tax', value: '25%' },
        { label: 'VAT', value: '21%' },
        { label: 'Inflation', value: '3% annual' },
    ],

    wines: {
        sectionTitle: 'Wines & Whiskies',
        subtitle: 'Crowdfunding & Trading',
        notes: [
            'Avg profitability: 12%',
            'ROI time: 3–5 years',
            'Trading commission: 4%',
            'Management fee: 4%',
        ],
        level1: {
            title: 'Level 1 (Ticket 60 €)',
            rows: [
                { label: 'Units sold', values: [150, 200, 400, 800, 1500] },
                { label: 'Price per unit', values: ['6,00 €', '6,18 €', '6,37 €', '6,56 €', '6,75 €'] },
                { label: 'Revenue', values: ['900 €', '1.236 €', '2.548 €', '5.248 €', '10.125 €'] },
            ],
        },
        level2: {
            title: 'Level 2 (Ticket 300 €)',
            rows: [
                { label: 'Units sold', values: [30, 80, 170, 400, 700] },
                { label: 'Price per unit', values: ['30,00 €', '30,90 €', '31,83 €', '32,78 €', '33,77 €'] },
                { label: 'Revenue', values: ['900 €', '2.472 €', '5.411 €', '13.112 €', '23.639 €'] },
            ],
        },
        level3: {
            title: 'Level 3 (Ticket 1.200 €)',
            rows: [
                { label: 'Units sold', values: [20, 50, 100, 300, 600] },
                { label: 'Price per unit', values: ['120,00 €', '123,60 €', '127,31 €', '131,13 €', '135,06 €'] },
                { label: 'Revenue', values: ['2.400 €', '6.180 €', '12.731 €', '39.339 €', '81.036 €'] },
            ],
        },
        tradingWineries: {
            title: 'Trading of Wineries',
            rows: [
                { label: 'Units sold', values: [0, 1, 5, 10, 20] },
                { label: 'Price per unit', values: ['160.000 €', '164.800 €', '169.744 €', '174.836 €', '180.081 €'] },
                { label: 'Commission (4%)', values: ['0 €', '6.592 €', '33.949 €', '69.934 €', '144.065 €'] },
            ],
        },
        crowdfundingWineries: {
            title: 'Crowdfunding of Wineries',
            rows: [
                { label: 'Units sold', values: [0, 2, 5, 10, 20] },
                { label: 'Price per unit', values: ['60.000 €', '61.800 €', '63.654 €', '65.563 €', '67.530 €'] },
                { label: 'Management fee (4%)', values: ['0 €', '4.944 €', '12.731 €', '26.225 €', '54.024 €'] },
            ],
        },
        exitFee: {
            title: 'Exit Fee Revenue (10%)',
            rows: [
                { label: 'Exit fee revenue', values: ['0 €', '0 €', '0 €', '0 €', '5.105 €'] },
            ],
        },
        auctions: {
            title: 'Auctions — Wines',
            rows: [
                { label: 'Auctions per year', values: [1, 1, 1, 1, 1] },
                { label: 'Units per auction (bottles)', values: [300, 300, 300, 300, 300] },
                { label: 'Avg price per bottle', values: ['300 €', '400 €', '500 €', '600 €', '700 €'] },
                { label: 'GMV per auction', values: ['90.000 €', '120.000 €', '150.000 €', '180.000 €', '210.000 €'] },
                { label: 'Take rate (blended)', values: ['12%', '12%', '12%', '12%', '12%'] },
                { label: 'Revenue — Wine auctions', values: ['10.800 €', '14.400 €', '18.000 €', '21.600 €', '25.200 €'], isTotal: true },
            ],
        },
    },

    watchesJewelry: {
        sectionTitle: 'Watches & Jewelry',
        notes: [
            'Avg profitability: 10%',
            'ROI time: 3–5 years',
            'Brokering margin: 10%',
            '10% commission on investment earnings',
        ],
        exitFee: {
            title: 'Exit Fee Revenue (10%)',
            rows: [
                { label: 'Exit fee revenue', values: ['0 €', '0 €', '143.325 €', '358.312 €', '882.000 €'] },
            ],
        },
        level1: {
            title: 'Level 1 (Ticket 5.000 €)',
            rows: [
                { label: 'Units sold', values: [100, 200, 500, 1000, 2000] },
                { label: 'Price per unit', values: ['540 €', '556,20 €', '572,89 €', '590,07 €', '607,77 €'] },
                { label: 'Revenue', values: ['54.000 €', '111.240 €', '286.445 €', '590.070 €', '1.215.540 €'] },
            ],
        },
        level2: {
            title: 'Level 2 (Ticket 25.000 €)',
            rows: [
                { label: 'Units sold', values: [20, 50, 100, 200, 500] },
                { label: 'Price per unit', values: ['2.700 €', '2.781 €', '2.864 €', '2.950 €', '3.039 €'] },
                { label: 'Revenue', values: ['54.000 €', '139.050 €', '286.400 €', '590.000 €', '1.519.500 €'] },
            ],
        },
        level3: {
            title: 'Level 3 (Ticket 100.000 €)',
            rows: [
                { label: 'Units sold', values: [3, 10, 30, 70, 180] },
                { label: 'Price per unit', values: ['10.800 €', '11.124 €', '11.458 €', '11.801 €', '12.155 €'] },
                { label: 'Revenue', values: ['32.400 €', '111.240 €', '343.740 €', '826.070 €', '2.187.900 €'] },
            ],
        },
        auctions: {
            title: 'Auctions — Jewelry',
            rows: [
                { label: 'Auctions per year', values: [1, 1, 1, 1, 1] },
                { label: 'Units per auction (items)', values: [150, 200, 250, 300, 350] },
                { label: 'Avg price per item', values: ['2.500 €', '3.000 €', '4.500 €', '5.000 €', '5.500 €'] },
                { label: 'GMV per auction', values: ['375.000 €', '600.000 €', '1.125.000 €', '1.500.000 €', '1.925.000 €'] },
                { label: 'Take rate (blended)', values: ['12%', '12%', '12%', '12%', '12%'] },
                { label: 'Revenue — Jewelry auctions', values: ['45.000 €', '72.000 €', '135.000 €', '180.000 €', '231.000 €'], isTotal: true },
            ],
        },
    },

    classicCars: {
        sectionTitle: 'Classic Cars',
        notes: [
            'Avg profitability: 8%',
            'ROI time: +5 years',
            'Brokering margin: 10%',
            '10% commission on investment earnings',
        ],
        exitFee: {
            title: 'Exit Fee Revenue (10%)',
            rows: [
                { label: 'Exit fee revenue', values: ['0 €', '0 €', '0 €', '134.284 €', '289.406 €'] },
            ],
        },
        level1: {
            title: 'Level 1 (Ticket 10.000 €)',
            rows: [
                { label: 'Units sold', values: [50, 80, 150, 200, 400] },
                { label: 'Price per unit', values: ['1.000 €', '1.030 €', '1.061 €', '1.093 €', '1.126 €'] },
                { label: 'Revenue', values: ['50.000 €', '82.400 €', '159.135 €', '218.600 €', '450.400 €'] },
            ],
        },
        level2: {
            title: 'Level 2 (Ticket 70.000 €)',
            rows: [
                { label: 'Units sold', values: [8, 20, 50, 100, 200] },
                { label: 'Price per unit', values: ['7.000 €', '7.210 €', '7.426 €', '7.649 €', '7.879 €'] },
                { label: 'Revenue', values: ['56.000 €', '144.200 €', '371.315 €', '764.910 €', '1.575.720 €'] },
            ],
        },
        level3: {
            title: 'Level 3 (Ticket +100.000 €)',
            rows: [
                { label: 'Units sold', values: [1, 3, 10, 30, 50] },
                { label: 'Price per unit', values: ['10.000 €', '10.300 €', '10.609 €', '10.927 €', '11.255 €'] },
                { label: 'Revenue', values: ['10.000 €', '30.900 €', '106.090 €', '327.810 €', '562.750 €'] },
            ],
        },
        auctions: {
            title: 'Auctions — Classic Cars',
            rows: [
                { label: 'Auctions per year', values: [1, 1, 1, 1, 1] },
                { label: 'Units per auction (cars)', values: [30, 40, 50, 50, 50] },
                { label: 'Avg price per car', values: ['50.000 €', '50.000 €', '60.000 €', '70.000 €', '80.000 €'] },
                { label: 'GMV per auction', values: ['1.500.000 €', '2.000.000 €', '3.000.000 €', '3.500.000 €', '4.000.000 €'] },
                { label: 'Take rate (blended)', values: ['12%', '12%', '12%', '12%', '12%'] },
                { label: 'Revenue — Cars auctions', values: ['180.000 €', '240.000 €', '360.000 €', '420.000 €', '480.000 €'], isTotal: true },
            ],
        },
    },

    auctionsTotals: {
        title: 'Total Auction Fees Revenue',
        rows: [
            { label: 'Wine auctions', values: ['10.800 €', '14.400 €', '18.000 €', '21.600 €', '25.200 €'] },
            { label: 'Jewelry auctions', values: ['45.000 €', '72.000 €', '135.000 €', '180.000 €', '231.000 €'] },
            { label: 'Car auctions', values: ['180.000 €', '240.000 €', '360.000 €', '420.000 €', '480.000 €'] },
            { label: 'Total Auction Revenue', values: ['235.800 €', '326.400 €', '513.000 €', '621.600 €', '736.200 €'], isTotal: true },
        ],
    },

    subscriptions: {
        sectionTitle: 'Subscriptions & Premium Content',
        rows: [
            { label: 'Normal subscription (9,99 €/mo)', values: [50, 100, 200, 500, 1000] },
            { label: 'Premium subscription (14,99 €/mo)', values: [10, 20, 50, 100, 500] },
            { label: 'Subscription revenue', values: ['7.789 €', '15.578 €', '32.976 €', '77.550 €', '209.640 €'] },
        ],
    },

    b2bSaas: {
        sectionTitle: 'B2B SaaS & Insurance',
        rows: [
            { label: 'SaaS Total Revenue', values: ['0 €', '0 €', '85.000 €', '204.000 €', '425.000 €'] },
            { label: 'Total B2B Revenue', values: ['0 €', '0 €', '90.000 €', '219.000 €', '450.000 €'] },
            { label: 'WOT Commission MGA (15%)', values: ['5.630 €', '25.044 €', '63.545 €', '139.083 €', '301.017 €'] },
            { label: 'Total Assets Under Custody', values: ['2.502.000 €', '8.348.000 €', '21.181.800 €', '46.361.000 €', '100.339.000 €'] },
        ],
    },
};

// ── Balance Sheet ───────────────────────────────────────────
export const balance = {
    years: ['2026', '2027', '2028', '2029', '2030'],
    data: [
        {
            year: '2026',
            assets: {
                total: '554.776,78 €',
                nonCurrent: { label: 'Non current assets', value: '12.250,00 €', detail: 'CAPEX: 12.250,00 €' },
                current: {
                    label: 'Current assets', value: '542.526,78 €',
                    items: [
                        { label: 'Stock', value: '7.781,49 €' },
                        { label: 'Trade receivables', value: '42.783,99 €' },
                        { label: 'Cash flow', value: '491.961,30 €' },
                    ]
                },
            },
            equity: { total: '332.601,78 €', shareCapital: '600.000,00 €', profitLoss: '-267.398,22 €', reserves: '0,00 €' },
            debt: {
                total: '222.175,00 €',
                nonCurrentLiabilities: '0,00 €',
                longTermLoans: '0,00 €',
                currentLiabilities: '222.175,00 €',
                items: [
                    { label: 'Bank overdraft', value: '0,00 €' },
                    { label: 'Suppliers and other trade payables', value: '222.175,00 €' },
                ]
            },
            totalLiabEquity: '554.776,78 €',
            balanceCheck: '0,00 €',
        },
        {
            year: '2027',
            assets: {
                total: '686.294,64 €',
                nonCurrent: { label: 'Non current assets', value: '131.570,00 €', detail: 'CAPEX: 131.570,00 €' },
                current: {
                    label: 'Current assets', value: '554.724,64 €',
                    items: [
                        { label: 'Stock', value: '16.197,93 €' },
                        { label: 'Trade receivables', value: '95.816,60 €' },
                        { label: 'Cash flow', value: '442.710,12 €' },
                    ]
                },
            },
            equity: { total: '234.849,64 €', shareCapital: '600.000,00 €', profitLoss: '-97.752,14 €', reserves: '-267.398,22 €' },
            debt: {
                total: '451.445,00 €',
                nonCurrentLiabilities: '413.342,00 €',
                longTermLoans: '413.342,00 €',
                currentLiabilities: '38.103,00 €',
                items: [
                    { label: 'Bank overdraft', value: '0,00 €' },
                    { label: 'Suppliers and other trade payables', value: '38.103,00 €' },
                ]
            },
            totalLiabEquity: '686.294,64 €',
            balanceCheck: '0,00 €',
        },
        {
            year: '2028',
            assets: {
                total: '1.340.038,64 €',
                nonCurrent: { label: 'Non current assets', value: '134.090,00 €', detail: 'CAPEX: 134.090,00 €' },
                current: {
                    label: 'Current assets', value: '1.205.948,64 €',
                    items: [
                        { label: 'Stock', value: '32.966,09 €' },
                        { label: 'Trade receivables', value: '271.209,08 €' },
                        { label: 'Cash flow', value: '901.773,47 €' },
                    ]
                },
            },
            equity: { total: '927.815,88 €', shareCapital: '600.000,00 €', profitLoss: '692.966,23 €', reserves: '-365.150,36 €' },
            debt: {
                total: '412.222,76 €',
                nonCurrentLiabilities: '196.847,30 €',
                longTermLoans: '196.847,30 €',
                currentLiabilities: '215.375,46 €',
                items: [
                    { label: 'Bank overdraft', value: '0,00 €' },
                    { label: 'Suppliers and other trade payables', value: '215.375,46 €' },
                ]
            },
            totalLiabEquity: '1.340.038,64 €',
            balanceCheck: '0,00 €',
        },
        {
            year: '2029',
            assets: {
                total: '3.208.641,17 €',
                nonCurrent: { label: 'Non current assets', value: '138.160,00 €', detail: 'CAPEX: 138.160,00 €' },
                current: {
                    label: 'Current assets', value: '3.070.481,17 €',
                    items: [
                        { label: 'Stock', value: '58.669,35 €' },
                        { label: 'Trade receivables', value: '551.626,00 €' },
                        { label: 'Cash flow', value: '2.460.185,82 €' },
                    ]
                },
            },
            equity: { total: '2.848.815,55 €', shareCapital: '600.000,00 €', profitLoss: '1.920.999,68 €', reserves: '327.815,88 €' },
            debt: {
                total: '359.825,62 €',
                nonCurrentLiabilities: '178.209,93 €',
                longTermLoans: '178.209,93 €',
                currentLiabilities: '181.615,69 €',
                items: [
                    { label: 'Bank overdraft', value: '0,00 €' },
                    { label: 'Suppliers and other trade payables', value: '181.615,69 €' },
                ]
            },
            totalLiabEquity: '3.208.641,17 €',
            balanceCheck: '0,00 €',
        },
        {
            year: '2030',
            assets: {
                total: '8.209.078,89 €',
                nonCurrent: { label: 'Non current assets', value: '143.180,00 €', detail: 'CAPEX: 143.180,00 €' },
                current: {
                    label: 'Current assets', value: '8.065.898,89 €',
                    items: [
                        { label: 'Stock', value: '106.050,50 €' },
                        { label: 'Trade receivables', value: '1.152.722,00 €' },
                        { label: 'Cash flow', value: '6.807.126,39 €' },
                    ]
                },
            },
            equity: { total: '7.743.185,85 €', shareCapital: '600.000,00 €', profitLoss: '4.894.370,29 €', reserves: '2.248.815,55 €' },
            debt: {
                total: '465.893,05 €',
                nonCurrentLiabilities: '156.470,61 €',
                longTermLoans: '156.470,61 €',
                currentLiabilities: '309.422,44 €',
                items: [
                    { label: 'Bank overdraft', value: '0,00 €' },
                    { label: 'Suppliers and other trade payables', value: '309.422,44 €' },
                ]
            },
            totalLiabEquity: '8.209.078,89 €',
            balanceCheck: '0,00 €',
        },
    ],
};

// ── Profit & Loss ───────────────────────────────────────────
export const profitLoss = {
    headers: ['', '2026', '2027', '2028', '2029', '2030'],
    sections: [
        {
            rows: [
                { label: 'Revenue', values: ['424.304,08 €', '994.475,76 €', '2.815.378,26 €', '5.726.275,99 €', '11.906.048,40 €'], isBold: true },
                { label: 'Cost of goods sold', values: ['-186.755,79 €', '-281.717,24 €', '-486.988,65 €', '-789.500,61 €', '-1.397.902,97 €'] },
            ],
        },
        {
            rows: [
                { label: 'Gross Margin', values: ['237.548,29 €', '712.758,52 €', '2.328.389,60 €', '4.936.775,38 €', '10.508.145,43 €'], isBold: true },
                { label: '% Gross Margin', values: ['55,99%', '71,67%', '82,70%', '86,21%', '88,26%'] },
            ],
        },
        {
            title: 'Operating Expenses',
            rows: [
                { label: 'Staff', values: ['-299.250,00 €', '-416.423,00 €', '-710.908,92 €', '-1.054.646,24 €', '-1.471.705,64 €'] },
                { label: 'Staff production cost', values: ['0', '0', '0', '0', '0'] },
                { label: 'Marketing', values: ['-64.400,00 €', '-82.000,00 €', '-95.000,00 €', '-120.000,00 €', '-130.000,00 €'] },
                { label: 'Software', values: ['-30.992,00 €', '-39.500,00 €', '-43.500,00 €', '-55.800,00 €', '-67.800,00 €'] },
                { label: 'Office lease & buildings', values: ['-23.400,00 €', '-29.600,00 €', '-30.000,00 €', '-42.000,00 €', '-42.000,00 €'] },
                { label: 'Professional services', values: ['-75.030,00 €', '-201.460,00 €', '-458.136,00 €', '-994.720,00 €', '-2.074.280,00 €'] },
                { label: 'Payment & KYC services (Stripe + Sumsub)', values: ['-9.424,51 €', '-17.847,66 €', '-43.590,30 €', '-84.717,87 €', '-172.534,68 €'] },
            ],
        },
        {
            rows: [
                { label: 'OPEX', values: ['-502.496,51 €', '-786.830,66 €', '-1.381.135,22 €', '-2.351.884,11 €', '-3.958.320,32 €'], isBold: true },
            ],
        },
        {
            rows: [
                { label: 'EBITDA', values: ['-264.948,22 €', '-74.072,14 €', '947.254,39 €', '2.584.891,28 €', '6.549.825,11 €'], isBold: true, isHighlight: true },
                { label: '% EBITDA', values: ['-62,4%', '-7,4%', '33,6%', '45,1%', '55,0%'] },
            ],
        },
        {
            rows: [
                { label: 'Depreciation', values: ['-2.450,00 €', '-3.680,00 €', '-4.680,00 €', '-6.430,00 €', '-8.480,00 €'] },
                { label: 'EBIT', values: ['-267.398,22 €', '-77.752,14 €', '942.574,39 €', '2.578.461,28 €', '6.541.345,11 €'], isBold: true },
            ],
        },
        {
            rows: [
                { label: 'Finance', values: ['0,00 €', '-20.000,00 €', '-18.619,41 €', '-17.128,37 €', '-15.518,05 €'] },
                { label: 'EBT', values: ['-267.398,22 €', '-97.752,14 €', '923.954,98 €', '2.561.332,90 €', '6.525.827,06 €'], isBold: true },
            ],
        },
        {
            rows: [
                { label: 'Tax', values: ['0,00 €', '0,00 €', '-230.988,74 €', '-640.333,23 €', '-1.631.456,76 €'] },
                { label: 'Net Profit', values: ['-267.398,22 €', '-97.752,14 €', '692.966,23 €', '1.920.999,68 €', '4.894.370,29 €'], isBold: true, isHighlight: true },
            ],
        },
    ],
};

// ── Cash Flows ──────────────────────────────────────────────
export const cashFlows = {
    headers: ['', '2026', '2027', '2028', '2029', '2030'],
    sections: [
        {
            title: 'Free Cash Flow (FCF)',
            subtitle: 'FCF = EBIT × (1-Tax Rate) - Investment in CAPEX',
            description: 'Free cash flow is the money the company has available to pay all its creditors and investors.',
            rows: [
                { label: 'EBIT', values: ['-267.398,22 €', '-77.752,14 €', '942.574,39 €', '2.578.461,28 €', '6.541.345,11 €'] },
                { label: 'NOPAT / NOPLAT', values: ['-267.398,22 €', '-77.752,14 €', '706.930,79 €', '1.933.845,96 €', '4.906.008,83 €'] },
                { label: 'Investment in CAPEX', values: ['14.700,00 €', '123.000,00 €', '7.200,00 €', '10.500,00 €', '13.500,00 €'] },
            ],
            total: { label: 'FCF', values: ['-282.098,22 €', '-200.752,14 €', '699.730,79 €', '1.923.345,96 €', '4.892.508,83 €'] },
        },
        {
            title: 'Free Cash Flow to the Firm (FCFF)',
            subtitle: 'FCFF = EBIT × (1-Tax Rate) + Depreciation - CAPEX - Variation of NOWC',
            description: 'The FCFF shows how much money the company is generating for all capital providers.',
            rows: [
                { label: 'EBIT', values: ['-267.398,22 €', '-77.752,14 €', '942.574,39 €', '2.578.461,28 €', '6.541.345,11 €'] },
                { label: 'NOPAT / NOPLAT', values: ['-267.398,22 €', '-77.752,14 €', '706.930,79 €', '1.933.845,96 €', '4.906.008,83 €'] },
                { label: 'Depreciation', values: ['2.450,00 €', '3.680,00 €', '4.680,00 €', '6.430,00 €', '8.480,00 €'] },
                { label: 'Investment in CAPEX', values: ['14.700,00 €', '123.000,00 €', '7.200,00 €', '10.500,00 €', '13.500,00 €'] },
                { label: 'NOWC', values: ['11.333,80 €', '52.834,34 €', '201.873,73 €', '444.445,40 €', '965.115,80 €'] },
                { label: 'Change in NOWC', values: ['11.333,80 €', '41.500,54 €', '149.039,39 €', '242.571,67 €', '520.670,40 €'] },
            ],
            total: { label: 'FCFF', values: ['-290.982,02 €', '-238.572,68 €', '555.371,40 €', '1.687.204,29 €', '4.380.318,43 €'] },
        },
        {
            title: 'Free Cash Flow to the Debt (FCFD)',
            rows: [
                { label: 'Interests', values: ['0,00 €', '-20.000,00 €', '-18.619,41 €', '-17.128,37 €', '-15.518,05 €'] },
                { label: 'Principal', values: ['0,00 €', '-17.257,37 €', '-18.637,96 €', '-20.129,00 €', '-21.739,32 €'] },
                { label: 'Tax shield of interest', values: ['0,00 €', '0,00 €', '4.654,85 €', '4.282,09 €', '3.879,51 €'] },
                { label: 'New Debt', values: ['0,00 €', '250.000,00 €', '0,00 €', '0,00 €', '0,00 €'] },
            ],
            total: { label: 'FCFD', values: ['0,00 €', '212.742,63 €', '-32.602,52 €', '-32.975,28 €', '-33.377,86 €'] },
        },
        {
            title: 'Free Cash Flow to the Equity (FCFE)',
            rows: [
                { label: 'FCFE', values: ['-290.982,02 €', '-25.830,05 €', '522.768,88 €', '1.654.229,01 €', '4.346.940,57 €'] },
            ],
        },
        {
            title: 'Equity Injection (EI)',
            rows: [
                { label: 'EI', values: ['600.000,00 €', '', '', '', ''] },
            ],
        },
        {
            title: 'Net Change in Cash (NCIC)',
            rows: [
                { label: 'NCIC', values: ['309.017,98 €', '-25.830,05 €', '522.768,88 €', '1.654.229,01 €', '4.346.940,57 €'] },
            ],
        },
    ],
};

// ── Projections (WACC, NPV & IRR) ───────────────────────────
export const projections = {
    liabilities: [
        { label: 'Equity', value: '332.601,78 €' },
        { label: 'Debt', value: '39.231,69 €' },
        { label: 'Debt / equity ratio', value: '0,12' },
    ],
    costOfEquity: {
        title: 'Opportunity cost / Cost of Equity (Ke)',
        formula: 'Ke = Rf + Beta × (Rm - Rf)',
        rows: [
            { label: 'Risk free rate (Rf)', value: '0,035', detail: 'Based on the current yield of the 10-year Spanish Government Bond' },
            { label: 'Systematic risk (Beta)', value: '2,5', detail: 'Adjusted to reflect the high-growth and risk profile of an early-stage Fintech venture' },
            { label: 'Expected market return (Rm)', value: '0,120', detail: 'Benchmark market return, adjusted to reflect the higher required rate of return (12%) typical for the Venture Capital asset class' },
            { label: 'Cost of equity (Ke)', value: '0,2475', isResult: true },
        ],
    },
    costOfDebt: {
        title: 'Financing cost / Cost of Debt (Kd adjusted)',
        formula: 'Kd adjusted = Kd × (1-Tax)',
        rows: [
            { label: 'Interest (Kd)', value: '0,08', detail: 'Average interest rates of 8-12%' },
            { label: 'Tax Shield (1-Tax)', value: '0,75', detail: 'Company bonds interest or loans interests' },
            { label: 'Cost of debt', value: '0,06', isResult: true },
        ],
    },
    waccSection: {
        title: 'Weighted average cost of capital (WACC)',
        formula: 'WACC = ((E/D_E) × Ke) + ((D/D_E) × Kd × (1-Tax))',
        detail: 'The WACC is the cost of the liabilities of our company. D_E is the debt to equity ratio.',
    },
    wacc: { label: 'WACC', value: '0,23' },
    npvSection: {
        title: 'Net Present Value (NPV)',
        formulas: [
            'NPV = FCFFo + Σ (FCFFt / (1 + K)^t)',
            'NPV = FCFFo + Σ (FCFFt / (1 + WACC)^t)',
        ],
        detail: 'The first formula is the main formula used to calculate the present value of an investment such as bonds, stocks or startups. The second formula is adapted to the startups case, using the WACC as discount rate. T is the number of years of the projection.',
    },
    npv: { label: 'NPV', value: '1.513.776,68 €' },
    irrSection: {
        title: 'Internal Rate of Return (IRR)',
        formula: 'IRR = Σ (FCFFt / (1+ K)^t ) − Initial Investment',
        value: '52,03%',
        cashFlows: [
            { label: 'Initial Investment', value: '-718.548,00 €' },
            { label: 'Cash flow 2026', value: '-290.982,02 €' },
            { label: 'Cash flow 2027', value: '-238.572,68 €' },
            { label: 'Cash flow 2028', value: '555.371,40 €' },
            { label: 'Cash flow 2029', value: '1.687.204,29 €' },
            { label: 'Cash flow 2030', value: '4.380.318,43 €' },
        ],
    },
    conclusions: [
        { condition: 'IRR > WACC', result: true, meaning: 'The company is worth it' },
        { condition: 'IRR = WACC', result: false, meaning: 'Company could be worth it' },
        { condition: 'IRR < WACC', result: false, meaning: "Company isn't worth it" },
    ],
};

// ── Ratios (5-Year Projections) ─────────────────────────────
export const ratios = {
    years: ['2026', '2027', '2028', '2029', '2030'],

    profitability: {
        title: 'Profitability (EBIT, Rotation, ROI)',
        headers: ['', '2026', '2027', '2028', '2029', '2030'],
        rows: [
            { label: 'Sales', values: ['424.304', '994.476', '2.815.378', '5.726.276', '11.906.048'] },
            { label: 'EBIT', values: ['-267.398', '-77.752', '942.574', '2.578.461', '6.541.345'] },
            { label: 'Total Assets', values: ['371.833', '526.772', '1.244.222', '3.208.641', '8.209.079'] },
            { label: 'EBIT Margin (EBIT/Sales)', values: ['-63,0%', '-7,8%', '33,5%', '45,0%', '54,9%'], isBold: true },
            { label: 'Asset Turnover (Sales/Total Assets)', values: ['1,14x', '1,89x', '2,26x', '1,78x', '1,45x'] },
            { label: 'ROI (EBIT/Total Assets)', values: ['-71,9%', '-14,8%', '75,8%', '80,4%', '79,7%'], isBold: true },
        ],
    },

    roe: {
        title: 'ROE',
        headers: ['', '2026', '2027', '2028', '2029', '2030'],
        rows: [
            { label: 'Net Profit', values: ['-267.398', '-97.752', '692.966', '1.921.000', '4.894.370'] },
            { label: 'Equity', values: ['332.602', '234.850', '927.816', '2.848.816', '7.743.186'] },
            { label: 'ROE (Profit/Equity)', values: ['-80,4%', '-41,6%', '74,7%', '67,4%', '63,2%'], isBold: true },
        ],
    },

    solvencyLiquidity: {
        title: 'Solvency & Liquidity',
        headers: ['', '2026', '2027', '2028', '2029', '2030'],
        rows: [
            { label: 'Current Assets (CA)', values: ['359.583', '395.202', '1.110.132', '3.070.481', '8.065.899'] },
            { label: 'Current Liabilities (CL)', values: ['39.232', '77.818', '122.430', '187.589', '317.135'] },
            { label: 'Working Capital (CA-CL)', values: ['320.352', '317.384', '987.702', '2.882.892', '7.748.764'], isBold: true },
            { label: 'Equity / Non-Current Assets', values: ['27,15x', '1,78x', '6,92x', '20,62x', '54,08x'] },
            { label: 'Solvency (TA/(NCL+CL))', values: ['9,48x', '1,80x', '3,93x', '8,92x', '17,62x'] },
            { label: 'Liquidity (CA/CL)', values: ['9,17x', '5,08x', '9,07x', '16,37x', '25,43x'], isBold: true },
            { label: 'Acid Test ((CA-Stock)/CL)', values: ['8,97x', '4,93x', '8,90x', '16,19x', '25,25x'] },
        ],
    },

    leverageCostOfDebt: {
        title: 'Leverage & Cost of Debt',
        headers: ['', '2026', '2027', '2028', '2029', '2030'],
        rows: [
            { label: 'Non-Current Liabilities (NCL)', values: ['0', '214.105', '193.976', '172.236', '148.758'] },
            { label: 'Current Liabilities (CL)', values: ['39.232', '77.818', '122.430', '187.589', '317.135'] },
            { label: 'External Resources (NCL+CL)', values: ['39.232', '291.923', '316.406', '359.826', '465.893'] },
            { label: 'Equity', values: ['332.602', '234.850', '927.816', '2.848.816', '7.743.186'] },
            { label: 'Leverage ((NCL+CL)/Equity)', values: ['0,12x', '1,24x', '0,34x', '0,13x', '0,06x'], isBold: true },
            { label: 'Financial expenses (abs)', values: ['0', '20.000', '18.619', '17.128', '15.518'] },
            { label: 'LT Loans', values: ['0', '214.105', '193.976', '172.236', '148.758'] },
            { label: 'ST Loans', values: ['0', '18.638', '20.129', '21.739', '23.476'] },
            { label: 'Cost of Debt (FinExp/(LT+ST))', values: ['—', '8,6%', '8,7%', '8,8%', '9,0%'] },
            { label: 'ROI (EBIT/TA)', values: ['-71,9%', '-14,8%', '75,8%', '80,4%', '79,7%'] },
            { label: 'Leverage Effect (ROI - Cost of Debt)', values: ['—', '-23,4%', '67,1%', '71,5%', '70,7%'] },
            { label: 'ROE (expanded)', values: ['—', '-43,8%', '98,6%', '89,4%', '83,9%'] },
        ],
    },

    breakeven: {
        title: 'Break-even',
        headers: ['', '2026', '2027', '2028', '2029', '2030'],
        rows: [
            { label: 'Fixed Cost (=-OPEX)', values: ['502.497', '786.831', '1.381.135', '2.351.884', '3.958.320'] },
            { label: 'Gross Margin %', values: ['56,0%', '71,7%', '82,7%', '86,2%', '88,3%'] },
            { label: 'Break Even Sales', values: ['897.549', '1.097.825', '1.670.003', '2.728.003', '4.484.897'], isBold: true },
            { label: 'Days to reach BE', values: ['772', '403', '217', '174', '137'], isBold: true },
        ],
    },
};

// ── Summary (chart data) ────────────────────────────────────
export const summary = {
    years: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    charts: [
        {
            title: 'Gross Margin',
            values: [237548, 712759, 2328390, 4936775, 10508145],
            color: '#2E7D32',
        },
        {
            title: 'EBITDA',
            values: [-264948, -74072, 947254, 2584891, 6549825],
            color: '#1565C0',
        },
        {
            title: 'Net Profit',
            values: [-267398, -97752, 692966, 1920999, 4894370],
            color: '#6A1B9A',
        },
        {
            title: 'Free Cash Flow',
            values: [-282098, -200752, 699731, 1923346, 4892509],
            color: '#E65100',
        },
    ],
};

// ── Helper: Format number using European notation ───────────
export const fmtEur = (n) => {
    if (n === 0) return '0 €';
    return n.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' €';
};

export const fmtEurFull = (n) => {
    if (n === 0) return '0,00 €';
    return n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
};
