import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Footer from '../components/Footer';
import {
    initialInvestment,
    hypothesis,
    balance,
    profitLoss,
    cashFlows,
    projections,
    ratios,
    summary,
    fmtEur,
} from '../data/financialPlanData';
import dl from '../data/financialPlanLabels';
import './FinancialPlan.css';

/* ── Translation helper: looks up data labels per language ─── */
let _dl = {};
const tl = (text) => (text && _dl[text]) || text;

/* ================================================================
   i18n keys for Financial Plan
   ================================================================ */
const fpLabels = {
    es: {
        title: 'Plan Financiero',
        downloadPdf: '📄 Descargar PDF',
        accessTitle: 'Acceso Restringido',
        accessDesc: 'Introduce la clave para acceder al Plan Financiero',
        placeholder: 'Introduce la clave...',
        submit: 'Acceder',
        wrongPassword: 'Contraseña incorrecta',
        tabs: {
            frontpage: 'Portada',
            investment: 'Inversión Inicial',
            hypothesis: 'Hipótesis',
            balance: 'Balance',
            pnl: 'Pérdidas y Ganancias',
            cashflows: 'Flujos de Caja',
            projections: 'Proyecciones',
            ratios: 'Ratios',
            summary: 'Resumen',
        },
        frontPage: {
            badge: 'Plan Financiero',
            company: 'WOTfinance',
            subtitle: 'Win Over Time — Inversiones Alternativas de Lujo',
            meta: ['📅 2026 — 2030', '📊 Proyecciones a 5 años', '🍷 Vinos · Relojes · Joyas · Coches'],
            description: 'Proyecciones financieras completas incluyendo Inversión Inicial, Hipótesis, Balance, Pérdidas y Ganancias, Flujos de Caja, Proyecciones WACC/NPV, Ratios Clave y Resumen Ejecutivo.',
        },
        sections: {
            capex: 'Inversión Inicial (CAPEX)',
            totalInvestment: 'Total Inversión Inicial',
            excludes2027: 'Excluye partidas proyectadas para 2027',
            winesWhiskies: '🍷 Vinos & Whiskies',
            watchesJewelry: '⌚ Relojes & Joyas',
            classicCars: '🚗 Coches Clásicos',
            auctionTotals: '🏛️ Ingresos Totales por Subastas',
            subscriptions: '📱 Suscripciones & Contenido Premium',
            b2bSaas: '💼 B2B SaaS & Seguros',
            generalInfo: 'Información General',
            balanceSheet: 'Balance de Situación',
            profitLoss: 'Cuenta de Pérdidas y Ganancias',
            dcfModel: 'Modelo de Flujo de Caja Descontado (DCF)',
            financialHealth: 'Salud Financiera',
            profitabilityTitle: 'Rentabilidad',
            breakeven: 'Análisis de Punto de Equilibrio',
            executiveSummary: 'Resumen Ejecutivo — Proyecciones a 5 años',
            fixedCost: 'Coste Fijo',
            contributionMargin: 'Margen de Contribución',
            breakEvenPoint: 'Punto de Equilibrio',
            targetRevenue: 'Ingreso objetivo para cubrir todos los costes.',
            assets: 'Activos',
            equity: 'Patrimonio Neto',
            debt: 'Deuda',
            nonCurrentAssets: 'Activos no corrientes',
            currentAssets: 'Activos corrientes',
            totalAssets: 'Total activos',
            shareCapital: 'Capital social',
            profitAndLoss: 'Resultado del ejercicio',
            reserves: 'Reservas',
            nonCurrentLiab: 'Pasivo no corriente',
            longTermLoans: 'Préstamos a largo plazo',
            currentLiab: 'Pasivo corriente',
            totalLiabEquity: 'Total pasivo y patrimonio neto',
            balanceCheck: 'Comprobación balance (Activos - Pasivo&PN)',
            liabilities: 'Pasivos',
            note: 'Nota',
        },
    },
    en: {
        title: 'Financial Plan',
        downloadPdf: '📄 Download PDF',
        accessTitle: 'Restricted Access',
        accessDesc: 'Enter the password to access the Financial Plan',
        placeholder: 'Enter password...',
        submit: 'Access',
        wrongPassword: 'Incorrect password',
        tabs: {
            frontpage: 'Front Page',
            investment: 'Initial Investment',
            hypothesis: 'Hypothesis',
            balance: 'Balance',
            pnl: 'Profit & Loss',
            cashflows: 'Cash Flows',
            projections: 'Projections',
            ratios: 'Ratios',
            summary: 'Summary',
        },
        frontPage: {
            badge: 'Financial Plan',
            company: 'WOTfinance',
            subtitle: 'Win Over Time — Luxury Alternative Investments',
            meta: ['📅 2026 — 2030', '📊 5-Year Projections', '🍷 Wines · Watches · Jewelry · Cars'],
            description: 'Comprehensive financial projections including Initial Investment, Hypothesis, Balance Sheet, Profit & Loss, Cash Flows, WACC/NPV Projections, Key Ratios and Executive Summary.',
        },
        sections: {
            capex: 'Initial Investment (CAPEX)',
            totalInvestment: 'Total Initial Investment',
            excludes2027: 'Excludes items projected for 2027',
            winesWhiskies: '🍷 Wines & Whiskies',
            watchesJewelry: '⌚ Watches & Jewelry',
            classicCars: '🚗 Classic Cars',
            auctionTotals: '🏛️ Total Auction Revenue',
            subscriptions: '📱 Subscriptions & Premium Content',
            b2bSaas: '💼 B2B SaaS & Insurance',
            generalInfo: 'General Information',
            balanceSheet: 'Balance Sheet',
            profitLoss: 'Profit & Loss Statement',
            dcfModel: 'Discounted Cash Flow (DCF) Model',
            financialHealth: 'Financial Health',
            profitabilityTitle: 'Profitability',
            breakeven: 'Break-even Analysis',
            executiveSummary: 'Executive Summary — 5 Year Projections',
            fixedCost: 'Fixed Cost',
            contributionMargin: 'Contribution Margin',
            breakEvenPoint: 'Break-even Point',
            targetRevenue: 'Target revenue to cover all costs.',
            assets: 'Assets',
            equity: 'Equity',
            debt: 'Debt',
            nonCurrentAssets: 'Non current assets',
            currentAssets: 'Current assets',
            totalAssets: 'Total assets',
            shareCapital: 'Share capital',
            profitAndLoss: 'Profit and loss',
            reserves: 'Reserves',
            nonCurrentLiab: 'Non current liabilities',
            longTermLoans: 'Long term loans',
            currentLiab: 'Current liabilities',
            totalLiabEquity: 'Total liabilities & equity',
            balanceCheck: 'Balance check (Assets - Liab&Eq)',
            liabilities: 'Liabilities',
            note: 'Note',
        },
    },
    de: {
        title: 'Finanzplan',
        downloadPdf: '📄 PDF herunterladen',
        accessTitle: 'Eingeschränkter Zugang',
        accessDesc: 'Geben Sie das Passwort ein, um auf den Finanzplan zuzugreifen',
        placeholder: 'Passwort eingeben...',
        submit: 'Zugriff',
        wrongPassword: 'Falsches Passwort',
        tabs: {
            frontpage: 'Titelseite',
            investment: 'Erstinvestition',
            hypothesis: 'Hypothese',
            balance: 'Bilanz',
            pnl: 'GuV',
            cashflows: 'Cashflows',
            projections: 'Projektionen',
            ratios: 'Kennzahlen',
            summary: 'Zusammenfassung',
        },
        frontPage: {
            badge: 'Finanzplan',
            company: 'WOTfinance',
            subtitle: 'Win Over Time — Luxus-Alternativinvestitionen',
            meta: ['📅 2026 — 2030', '📊 5-Jahres-Projektionen', '🍷 Weine · Uhren · Schmuck · Autos'],
            description: 'Umfassende Finanzprojektionen einschließlich Erstinvestition, Hypothese, Bilanz, GuV, Cashflows, WACC/NPV-Projektionen, Kennzahlen und Zusammenfassung.',
        },
        sections: {
            capex: 'Erstinvestition (CAPEX)',
            totalInvestment: 'Gesamte Erstinvestition',
            excludes2027: 'Ohne für 2027 geplante Posten',
            winesWhiskies: '🍷 Weine & Whiskys',
            watchesJewelry: '⌚ Uhren & Schmuck',
            classicCars: '🚗 Oldtimer',
            auctionTotals: '🏛️ Gesamte Auktionserlöse',
            subscriptions: '📱 Abonnements & Premium-Inhalte',
            b2bSaas: '💼 B2B SaaS & Versicherungen',
            generalInfo: 'Allgemeine Informationen',
            balanceSheet: 'Bilanz',
            profitLoss: 'Gewinn- und Verlustrechnung',
            dcfModel: 'Discounted Cash Flow (DCF) Modell',
            financialHealth: 'Finanzielle Gesundheit',
            profitabilityTitle: 'Rentabilität',
            breakeven: 'Break-even-Analyse',
            executiveSummary: 'Zusammenfassung — 5-Jahres-Projektionen',
            fixedCost: 'Fixkosten',
            contributionMargin: 'Deckungsbeitrag',
            breakEvenPoint: 'Break-even-Punkt',
            targetRevenue: 'Zielumsatz zur Deckung aller Kosten.',
            assets: 'Aktiva',
            equity: 'Eigenkapital',
            debt: 'Schulden',
            nonCurrentAssets: 'Anlagevermögen',
            currentAssets: 'Umlaufvermögen',
            totalAssets: 'Gesamtvermögen',
            shareCapital: 'Stammkapital',
            profitAndLoss: 'Gewinn und Verlust',
            reserves: 'Rücklagen',
            nonCurrentLiab: 'Langfristige Verbindlichkeiten',
            longTermLoans: 'Langfristige Darlehen',
            currentLiab: 'Kurzfristige Verbindlichkeiten',
            totalLiabEquity: 'Gesamtverbindlichkeiten & Eigenkapital',
            balanceCheck: 'Bilanzprüfung (Aktiva - Pass.&EK)',
            liabilities: 'Verbindlichkeiten',
            note: 'Hinweis',
        },
    },
    fr: {
        title: 'Plan Financier',
        downloadPdf: '📄 Télécharger PDF',
        accessTitle: 'Accès Restreint',
        accessDesc: 'Entrez le mot de passe pour accéder au Plan Financier',
        placeholder: 'Entrez le mot de passe...',
        submit: 'Accéder',
        wrongPassword: 'Mot de passe incorrect',
        tabs: {
            frontpage: 'Page d\'accueil',
            investment: 'Investissement Initial',
            hypothesis: 'Hypothèse',
            balance: 'Bilan',
            pnl: 'Compte de Résultat',
            cashflows: 'Flux de Trésorerie',
            projections: 'Projections',
            ratios: 'Ratios',
            summary: 'Résumé',
        },
        frontPage: {
            badge: 'Plan Financier',
            company: 'WOTfinance',
            subtitle: 'Win Over Time — Investissements Alternatifs de Luxe',
            meta: ['📅 2026 — 2030', '📊 Projections sur 5 ans', '🍷 Vins · Montres · Bijoux · Voitures'],
            description: 'Projections financières complètes incluant l\'Investissement Initial, les Hypothèses, le Bilan, le Compte de Résultat, les Flux de Trésorerie, les Projections WACC/NPV, les Ratios Clés et le Résumé Exécutif.',
        },
        sections: {
            capex: 'Investissement Initial (CAPEX)',
            totalInvestment: 'Total Investissement Initial',
            excludes2027: 'Exclut les postes prévus pour 2027',
            winesWhiskies: '🍷 Vins & Whiskies',
            watchesJewelry: '⌚ Montres & Bijoux',
            classicCars: '🚗 Voitures Classiques',
            auctionTotals: '🏛️ Revenus Totaux des Enchères',
            subscriptions: '📱 Abonnements & Contenu Premium',
            b2bSaas: '💼 B2B SaaS & Assurances',
            generalInfo: 'Informations Générales',
            balanceSheet: 'Bilan',
            profitLoss: 'Compte de Résultat',
            dcfModel: 'Modèle de Flux de Trésorerie Actualisé (DCF)',
            financialHealth: 'Santé Financière',
            profitabilityTitle: 'Rentabilité',
            breakeven: 'Analyse du Seuil de Rentabilité',
            executiveSummary: 'Résumé Exécutif — Projections sur 5 ans',
            fixedCost: 'Coûts Fixes',
            contributionMargin: 'Marge de Contribution',
            breakEvenPoint: 'Seuil de Rentabilité',
            targetRevenue: 'Revenus cibles pour couvrir tous les coûts.',
            assets: 'Actifs',
            equity: 'Capitaux Propres',
            debt: 'Dettes',
            nonCurrentAssets: 'Actifs non courants',
            currentAssets: 'Actifs courants',
            totalAssets: 'Total actifs',
            shareCapital: 'Capital social',
            profitAndLoss: 'Résultat net',
            reserves: 'Réserves',
            nonCurrentLiab: 'Passifs non courants',
            longTermLoans: 'Emprunts à long terme',
            currentLiab: 'Passifs courants',
            totalLiabEquity: 'Total passifs & capitaux propres',
            balanceCheck: 'Vérification bilan (Actifs - Pass.&CP)',
            liabilities: 'Passifs',
            note: 'Note',
        },
    },
    zh: {
        title: '财务计划',
        downloadPdf: '📄 下载PDF',
        accessTitle: '限制访问',
        accessDesc: '请输入密码以访问财务计划',
        placeholder: '输入密码...',
        submit: '访问',
        wrongPassword: '密码错误',
        tabs: {
            frontpage: '封面',
            investment: '初始投资',
            hypothesis: '假设',
            balance: '资产负债表',
            pnl: '损益表',
            cashflows: '现金流',
            projections: '预测',
            ratios: '比率',
            summary: '摘要',
        },
        frontPage: {
            badge: '财务计划',
            company: 'WOTfinance',
            subtitle: 'Win Over Time — 奢侈品另类投资',
            meta: ['📅 2026 — 2030', '📊 5年预测', '🍷 葡萄酒 · 手表 · 珠宝 · 汽车'],
            description: '全面的财务预测，包括初始投资、假设、资产负债表、损益表、现金流、WACC/NPV预测、关键比率和执行摘要。',
        },
        sections: {
            capex: '初始投资 (CAPEX)',
            totalInvestment: '总初始投资',
            excludes2027: '不包括2027年预计的项目',
            winesWhiskies: '🍷 葡萄酒和威士忌',
            watchesJewelry: '⌚ 手表和珠宝',
            classicCars: '🚗 经典汽车',
            auctionTotals: '🏛️ 拍卖总收入',
            subscriptions: '📱 订阅和高级内容',
            b2bSaas: '💼 B2B SaaS和保险',
            generalInfo: '一般信息',
            balanceSheet: '资产负债表',
            profitLoss: '损益表',
            dcfModel: '贴现现金流 (DCF) 模型',
            financialHealth: '财务健康',
            profitabilityTitle: '盈利能力',
            breakeven: '盈亏平衡分析',
            executiveSummary: '执行摘要 — 5年预测',
            fixedCost: '固定成本',
            contributionMargin: '贡献利润率',
            breakEvenPoint: '盈亏平衡点',
            targetRevenue: '覆盖所有成本的目标收入。',
            assets: '资产',
            equity: '权益',
            debt: '债务',
            nonCurrentAssets: '非流动资产',
            currentAssets: '流动资产',
            totalAssets: '总资产',
            shareCapital: '股本',
            profitAndLoss: '损益',
            reserves: '留存收益',
            nonCurrentLiab: '非流动负债',
            longTermLoans: '长期贷款',
            currentLiab: '流动负债',
            totalLiabEquity: '负债和权益合计',
            balanceCheck: '资产负债表检查（资产-负债&权益）',
            liabilities: '负债',
            note: '备注',
        },
    },
};

/* ================================================================
   Helper sub-components
   ================================================================ */

const DataTable = ({ headers, rows, className = '' }) => (
    <div className="fp-table-wrapper">
        <table className={`fp-table ${className}`}>
            {headers && (
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i}>{h}</th>
                        ))}
                    </tr>
                </thead>
            )}
            <tbody>
                {rows.map((row, ri) => (
                    <tr
                        key={ri}
                        className={`${row.isBold ? 'fp-row-bold' : ''} ${row.isHighlight ? 'fp-row-highlight' : ''} ${row.isTotal ? 'fp-row-total' : ''} ${row.isSeparator ? 'fp-row-separator' : ''}`}
                    >
                        <td className="fp-label-cell">{tl(row.label)}</td>
                        {row.values.map((v, vi) => (
                            <td key={vi} className={`fp-value-cell ${String(v).startsWith('-') ? 'fp-negative' : ''}`}>
                                {v || '—'}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

/* ================================================================
   Tab Renderers
   ================================================================ */

// ── Front Page ──────────────────────────────────────────────
function renderFrontPage(t) {
    return (
        <div className="fp-front-page">
            <div className="fp-front-inner">
                <div className="fp-front-badge">{t.frontPage.badge}</div>
                <h2 className="fp-front-company">{t.frontPage.company}</h2>
                <p className="fp-front-subtitle">{t.frontPage.subtitle}</p>
                <img src="/nosotros-gestionamos.png" alt="Nosotros gestionamos" className="fp-front-image" />
                <div className="fp-front-divider"></div>
                <div className="fp-front-meta">
                    {t.frontPage.meta.map((m, i) => <span key={i}>{m}</span>)}
                </div>
                <p className="fp-front-description">{t.frontPage.description}</p>
            </div>
        </div>
    );
}

// ── Initial Investment ──────────────────────────────────────
function renderInitialInvestment(t) {
    const { categories, totalInvestment, note2027 } = initialInvestment;

    return (
        <div className="fp-tab-content">
            <h3 className="fp-section-title">{t.sections.capex}</h3>

            <div className="fp-invest-hero">
                <span className="fp-invest-hero-label">{t.sections.totalInvestment}</span>
                <span className="fp-invest-hero-value">{totalInvestment}</span>
                <span className="fp-invest-hero-note">* {t.sections.excludes2027}</span>
            </div>

            <div className="fp-invest-grid">
                {categories.map((cat, ci) => (
                    <div className="fp-invest-card" key={ci}>
                        <div className="fp-invest-card-header">
                            <span>{cat.title}</span>
                            <span className="fp-invest-card-total">{cat.total}</span>
                        </div>
                        <div className="fp-invest-card-body">
                            {cat.items.map((item, ii) => (
                                <div className="fp-invest-line" key={ii}>
                                    <div className="fp-invest-line-main">
                                        <span>{tl(item.label)}</span>
                                        <span className="fp-invest-amount">{item.value}</span>
                                    </div>
                                    {item.note && <span className="fp-invest-note">{tl(item.note)}</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Hypothesis ──────────────────────────────────────────────
function renderHypothesis(t) {
    const { years, general, wines, watchesJewelry, classicCars, auctionsTotals, subscriptions, b2bSaas } = hypothesis;
    const headers = ['', ...years];

    const renderAssetSection = (asset, sectionTitle) => (
        <div className="fp-hyp-section">
            <h3 className="fp-section-title">{sectionTitle}</h3>

            <div className="fp-notes-bar">
                {asset.notes.map((n, i) => <span key={i} className="fp-note-chip">{tl(n)}</span>)}
            </div>

            {asset.exitFee && (
                <div className="fp-subsection">
                    <h4 className="fp-subsection-title">{tl(asset.exitFee.title)}</h4>
                    <DataTable headers={headers} rows={asset.exitFee.rows} />
                </div>
            )}

            {[asset.level1, asset.level2, asset.level3].filter(Boolean).map((level) => (
                <div className="fp-subsection" key={level.title}>
                    <h4 className="fp-subsection-title">{tl(level.title)}</h4>
                    <DataTable headers={headers} rows={level.rows} />
                </div>
            ))}

            {asset.tradingWineries && (
                <div className="fp-subsection">
                    <h4 className="fp-subsection-title">{tl(asset.tradingWineries.title)}</h4>
                    <DataTable headers={headers} rows={asset.tradingWineries.rows} />
                </div>
            )}

            {asset.crowdfundingWineries && (
                <div className="fp-subsection">
                    <h4 className="fp-subsection-title">{tl(asset.crowdfundingWineries.title)}</h4>
                    <DataTable headers={headers} rows={asset.crowdfundingWineries.rows} />
                </div>
            )}

            {asset.auctions && (
                <div className="fp-subsection">
                    <h4 className="fp-subsection-title">{tl(asset.auctions.title)}</h4>
                    <DataTable headers={headers} rows={asset.auctions.rows} />
                </div>
            )}
        </div>
    );

    return (
        <div className="fp-tab-content">
            {/* General info */}
            <h3 className="fp-section-title">{t.sections.generalInfo}</h3>
            <div className="fp-notes-bar" style={{ marginBottom: 28 }}>
                {general.map((g, i) => <span key={i} className="fp-note-chip">{tl(g.label)}: {tl(g.value)}</span>)}
            </div>

            {renderAssetSection(wines, t.sections.winesWhiskies)}
            {renderAssetSection(watchesJewelry, t.sections.watchesJewelry)}
            {renderAssetSection(classicCars, t.sections.classicCars)}

            {/* Auction Totals */}
            <div className="fp-hyp-section">
                <h3 className="fp-section-title">{t.sections.auctionTotals}</h3>
                <DataTable headers={headers} rows={auctionsTotals.rows} />
            </div>

            {/* Subscriptions */}
            <div className="fp-hyp-section">
                <h3 className="fp-section-title">{t.sections.subscriptions}</h3>
                <DataTable headers={headers} rows={subscriptions.rows} />
            </div>

            {/* B2B SaaS */}
            <div className="fp-hyp-section">
                <h3 className="fp-section-title">{t.sections.b2bSaas}</h3>
                <DataTable headers={headers} rows={b2bSaas.rows} />
            </div>
        </div>
    );
}

// ── Balance ─────────────────────────────────────────────────
function renderBalance(t) {
    const { data } = balance;

    return (
        <div className="fp-tab-content">
            <h3 className="fp-section-title">{t.sections.balanceSheet}</h3>
            {data.map((yr) => (
                <div className="fp-balance-year" key={yr.year}>
                    <h4 className="fp-year-badge">{yr.year}</h4>
                    <div className="fp-balance-grid">
                        {/* LEFT: Assets */}
                        <div className="fp-balance-card">
                            <div className="fp-balance-header">
                                <span>{t.sections.assets}</span>
                                <span className="fp-balance-amount">{yr.assets.total}</span>
                            </div>
                            <div className="fp-balance-body">
                                <div className="fp-balance-line">
                                    <strong>{t.sections.nonCurrentAssets}</strong>
                                    <span>{yr.assets.nonCurrent.value}</span>
                                </div>
                                <div className="fp-balance-subline">
                                    <span>CAPEX</span>
                                    <span>{yr.assets.nonCurrent.value}</span>
                                </div>
                                <div className="fp-balance-line" style={{ marginTop: 12 }}>
                                    <strong>{t.sections.currentAssets}</strong>
                                    <span>{yr.assets.current.value}</span>
                                </div>
                                {yr.assets.current.items.map((it, i) => (
                                    <div className="fp-balance-subline" key={i}>
                                        <span>{tl(it.label)}</span>
                                        <span>{it.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="fp-balance-footer">
                                <span>{t.sections.totalAssets}</span>
                                <span>{yr.assets.total}</span>
                            </div>
                        </div>

                        {/* RIGHT: Equity + Debt */}
                        <div className="fp-balance-card">
                            <div className="fp-balance-header fp-balance-header-eq">
                                <span>{t.sections.equity}</span>
                                <span className="fp-balance-amount">{yr.equity.total}</span>
                            </div>
                            <div className="fp-balance-body">
                                <div className="fp-balance-subline">
                                    <span>{t.sections.shareCapital}</span>
                                    <span>{yr.equity.shareCapital}</span>
                                </div>
                                <div className="fp-balance-subline">
                                    <span>{t.sections.profitAndLoss}</span>
                                    <span className={yr.equity.profitLoss.startsWith('-') ? 'fp-negative' : ''}>{yr.equity.profitLoss}</span>
                                </div>
                                <div className="fp-balance-subline">
                                    <span>{t.sections.reserves}</span>
                                    <span className={yr.equity.reserves.startsWith('-') ? 'fp-negative' : ''}>{yr.equity.reserves}</span>
                                </div>

                                <div className="fp-balance-line" style={{ marginTop: 16 }}>
                                    <strong>{t.sections.debt}</strong>
                                    <span>{yr.debt.total}</span>
                                </div>
                                <div className="fp-balance-subline">
                                    <span>{t.sections.nonCurrentLiab}</span>
                                    <span>{yr.debt.nonCurrentLiabilities}</span>
                                </div>
                                <div className="fp-balance-subline" style={{ paddingLeft: 16 }}>
                                    <span>{t.sections.longTermLoans}</span>
                                    <span>{yr.debt.longTermLoans}</span>
                                </div>
                                <div className="fp-balance-subline">
                                    <span>{t.sections.currentLiab}</span>
                                    <span>{yr.debt.currentLiabilities}</span>
                                </div>
                                {yr.debt.items.map((it, i) => (
                                    <div className="fp-balance-subline" key={i} style={{ paddingLeft: 16 }}>
                                        <span>{tl(it.label)}</span>
                                        <span>{it.value || '—'}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="fp-balance-footer">
                                <span>{t.sections.totalLiabEquity}</span>
                                <span>{yr.totalLiabEquity}</span>
                            </div>
                        </div>
                    </div>
                    <div className="fp-balance-check">
                        {t.sections.balanceCheck}: <strong>{yr.balanceCheck}</strong>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── Profit & Loss ───────────────────────────────────────────
function renderProfitLoss(t) {
    const { headers, sections } = profitLoss;
    const allRows = [];
    sections.forEach((sec) => {
        if (sec.title) {
            allRows.push({ label: sec.title, values: Array(5).fill(''), isBold: true, isSeparator: true });
        }
        sec.rows.forEach((r) => allRows.push(r));
    });

    return (
        <div className="fp-tab-content">
            <h3 className="fp-section-title">{t.sections.profitLoss}</h3>
            <DataTable headers={headers} rows={allRows} />
        </div>
    );
}

// ── Cash Flows ──────────────────────────────────────────────
function renderCashFlows() {
    const { headers, sections } = cashFlows;

    return (
        <div className="fp-tab-content">
            {sections.map((sec, si) => (
                <div className="fp-cf-section" key={si}>
                    <h3 className="fp-section-title">{tl(sec.title)}</h3>
                    {sec.subtitle && <p className="fp-cf-formula">{tl(sec.subtitle)}</p>}
                    {sec.description && <p className="fp-cf-description">{tl(sec.description)}</p>}
                    <DataTable
                        headers={headers}
                        rows={[
                            ...sec.rows,
                            ...(sec.total ? [{ ...sec.total, isBold: true, isHighlight: true }] : []),
                        ]}
                    />
                </div>
            ))}
        </div>
    );
}

// ── Projections ─────────────────────────────────────────────
function renderProjections(t) {
    const { liabilities, costOfEquity, costOfDebt, waccSection, wacc, npvSection, npv, irrSection, conclusions } = projections;

    const KpiRow = ({ label, value, detail, isResult }) => (
        <div className={`fp-proj-row ${isResult ? 'fp-proj-result' : ''}`}>
            <span className="fp-proj-label">{tl(label)}</span>
            <span className="fp-proj-value">{value}</span>
            {detail && <span className="fp-proj-detail">{tl(detail)}</span>}
        </div>
    );

    return (
        <div className="fp-tab-content">
            <h3 className="fp-section-title">{t.sections.dcfModel}</h3>
            <div className="fp-proj-grid">
                <div className="fp-proj-card">
                    <h4>{t.sections.liabilities}</h4>
                    {liabilities.map((r, i) => <KpiRow key={i} {...r} />)}
                </div>
                <div className="fp-proj-card">
                    <h4>{tl(costOfEquity.title)}</h4>
                    <p className="fp-cf-formula">{costOfEquity.formula}</p>
                    {costOfEquity.rows.map((r, i) => <KpiRow key={i} {...r} />)}
                </div>
                <div className="fp-proj-card">
                    <h4>{tl(costOfDebt.title)}</h4>
                    <p className="fp-cf-formula">{costOfDebt.formula}</p>
                    {costOfDebt.rows.map((r, i) => <KpiRow key={i} {...r} />)}
                </div>
            </div>

            {/* WACC Section */}
            <div className="fp-proj-card" style={{ marginTop: 24 }}>
                <h4>{tl(waccSection.title)}</h4>
                <p className="fp-cf-formula">{waccSection.formula}</p>
                <p className="fp-cf-description">{tl(waccSection.detail)}</p>
            </div>

            <div className="fp-proj-hero">
                <div className="fp-proj-hero-item">
                    <span className="fp-proj-hero-label">WACC</span>
                    <span className="fp-proj-hero-value">{wacc.value}</span>
                </div>
                <div className="fp-proj-hero-divider"></div>
                <div className="fp-proj-hero-item">
                    <span className="fp-proj-hero-label">NPV</span>
                    <span className="fp-proj-hero-value fp-proj-npv">{npv.value}</span>
                </div>
            </div>

            {/* NPV Detail */}
            <div className="fp-proj-card" style={{ marginTop: 24 }}>
                <h4>{tl(npvSection.title)}</h4>
                {npvSection.formulas.map((f, i) => <p key={i} className="fp-cf-formula">{f}</p>)}
                <p className="fp-cf-description">{tl(npvSection.detail)}</p>
            </div>

            {/* IRR */}
            <div className="fp-proj-card" style={{ marginTop: 24 }}>
                <h4>{tl(irrSection.title)}</h4>
                <p className="fp-cf-formula">{irrSection.formula}</p>
                <div className="fp-proj-hero" style={{ marginTop: 16, marginBottom: 16 }}>
                    <div className="fp-proj-hero-item">
                        <span className="fp-proj-hero-label">IRR</span>
                        <span className="fp-proj-hero-value fp-proj-npv">{irrSection.value}</span>
                    </div>
                </div>
                <div style={{ display: 'grid', gap: 6 }}>
                    {irrSection.cashFlows.map((cf, i) => (
                        <div key={i} className={`fp-proj-row ${i === 0 ? 'fp-proj-result' : ''}`}>
                            <span className="fp-proj-label">{tl(cf.label)}</span>
                            <span className={`fp-proj-value ${cf.value.startsWith('-') ? 'fp-negative' : ''}`}>{cf.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conclusions */}
            <div className="fp-proj-card" style={{ marginTop: 24 }}>
                <h4>{tl('Conclusions')}</h4>
                <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
                    {conclusions.map((c, i) => (
                        <div key={i} className={`fp-proj-row ${c.result ? 'fp-proj-result' : ''}`}>
                            <span className="fp-proj-label">{c.condition}</span>
                            <span className="fp-proj-value" style={{ color: c.result ? '#2E7D32' : 'var(--text-secondary)' }}>
                                {c.result ? '✅ TRUE' : 'FALSE'}
                            </span>
                            <span className="fp-proj-detail">{tl(c.meaning)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── Ratios ──────────────────────────────────────────────────
function renderRatios(t) {
    const { profitability, roe, solvencyLiquidity, leverageCostOfDebt, breakeven } = ratios;

    const sections = [profitability, roe, solvencyLiquidity, leverageCostOfDebt, breakeven];

    return (
        <div className="fp-tab-content">
            {sections.map((section, si) => (
                <div key={si} className="fp-hyp-section">
                    <h3 className="fp-section-title">{tl(section.title)}</h3>
                    <DataTable headers={section.headers} rows={section.rows} />
                </div>
            ))}
        </div>
    );
}

// ── Summary ─────────────────────────────────────────────────
function renderSummary(t) {
    const { years, charts } = summary;

    return (
        <div className="fp-tab-content">
            <h3 className="fp-section-title">{t.sections.executiveSummary}</h3>
            <div className="fp-summary-grid">
                {charts.map((chart, ci) => {
                    const maxVal = Math.max(...chart.values.map(Math.abs));
                    return (
                        <div className="fp-chart-card" key={ci}>
                            <h4 className="fp-chart-title">{tl(chart.title)}</h4>
                            <div className="fp-chart-container">
                                {chart.values.map((v, vi) => {
                                    const pct = Math.abs(v) / maxVal * 100;
                                    const isNeg = v < 0;
                                    return (
                                        <div className="fp-chart-row" key={vi}>
                                            <span className="fp-chart-year">{tl(years[vi])}</span>
                                            <div className="fp-chart-bar-track">
                                                <div
                                                    className={`fp-chart-bar ${isNeg ? 'fp-chart-bar-neg' : ''}`}
                                                    style={{
                                                        width: `${Math.max(pct, 3)}%`,
                                                        background: isNeg
                                                            ? 'linear-gradient(90deg, #ef5350, #c62828)'
                                                            : `linear-gradient(90deg, ${chart.color}88, ${chart.color})`,
                                                    }}
                                                ></div>
                                            </div>
                                            <span className={`fp-chart-val ${isNeg ? 'fp-negative' : ''}`}>{fmtEur(v)}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ================================================================
   Main Component
   ================================================================ */
const FinancialPlan = () => {
    const { content, language } = useLanguage();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const correctPassword = 'winovertime';
    const t = fpLabels[language] || fpLabels.es;
    _dl = dl[language] || dl.es || {};

    const sheets = [
        { name: t.tabs.frontpage, id: 'frontpage' },
        { name: t.tabs.investment, id: 'investment' },
        { name: t.tabs.hypothesis, id: 'hypothesis' },
        { name: t.tabs.balance, id: 'balance' },
        { name: t.tabs.pnl, id: 'pnl' },
        { name: t.tabs.cashflows, id: 'cashflows' },
        { name: t.tabs.projections, id: 'projections' },
        { name: t.tabs.ratios, id: 'ratios' },
        { name: t.tabs.summary, id: 'summary' },
    ];

    const [activeTab, setActiveTab] = useState(sheets[0].id);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError(t.wrongPassword);
        }
    };

    const handleClose = () => navigate('/');
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('password-overlay')) navigate('/');
    };

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'frontpage': return renderFrontPage(t);
            case 'investment': return renderInitialInvestment(t);
            case 'hypothesis': return renderHypothesis(t);
            case 'balance': return renderBalance(t);
            case 'pnl': return renderProfitLoss(t);
            case 'cashflows': return renderCashFlows();
            case 'projections': return renderProjections(t);
            case 'ratios': return renderRatios(t);
            case 'summary': return renderSummary(t);
            default: return null;
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="financial-plan-page">
                <div className="password-overlay" onClick={handleOverlayClick}>
                    <div className="password-modal">
                        <button className="password-close-btn" onClick={handleClose}>✕</button>
                        <div className="password-modal-header">
                            <img src="/logo-wot.png" alt="WOT Logo" className="password-logo" />
                            <h2>{t.accessTitle}</h2>
                        </div>
                        <p>{t.accessDesc}</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={t.placeholder}
                                className="password-input"
                                autoFocus
                            />
                            {error && <p className="password-error">{error}</p>}
                            <button type="submit" className="btn btn-primary password-btn">{t.submit}</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="financial-plan-page">
            <div className="container financial-plan-container">
                <div className="financial-plan-header">
                    <h1 className="gradient-text financial-plan-title">{t.title}</h1>
                    <a
                        href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTkM2IN1FbmY-ujfuCt__Kc_F_ppTYmXK5cOvkiHnJxDb3inp06JjsdBCCVbgAXvg/pub?output=pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary download-pdf-btn"
                    >
                        {t.downloadPdf}
                    </a>
                </div>
                <div className="tabs-container">
                    {sheets.map((sheet) => (
                        <button
                            key={sheet.id}
                            onClick={() => setActiveTab(sheet.id)}
                            className={`tab-button ${activeTab === sheet.id ? 'active' : ''}`}
                        >
                            {sheet.name}
                        </button>
                    ))}
                </div>
                <div className="fp-content-area">{renderActiveTab()}</div>
            </div>
            <Footer />
        </div>
    );
};

export default FinancialPlan;
