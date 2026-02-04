import React from 'react';
import { useTheme, PALETTES } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import './PaletteSelector.css';

const PaletteSelector = () => {
    const { theme, setPalette } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef(null);

    // Close when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleOpen = () => setIsOpen(!isOpen);

    const activePalette = PALETTES[theme] || PALETTES.p1;

    return (
        <div className="palette-selector-container" ref={containerRef}>
            <button
                className="palette-toggle-btn"
                onClick={toggleOpen}
                aria-label="Select Color Palette"
                title="Change Theme Color"
            >
                <div
                    className="palette-preview-dot"
                    style={{
                        background: `linear-gradient(135deg, ${activePalette.colors[0]} 50%, ${activePalette.colors[1]} 50%)`
                    }}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="palette-dropdown"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="palette-options-grid">
                            {Object.entries(PALETTES).map(([key, palette]) => (
                                <button
                                    key={key}
                                    className={`palette-option ${theme === key ? 'active' : ''}`}
                                    onClick={() => {
                                        setPalette(key);
                                        setIsOpen(false);
                                    }}
                                    title={palette.name}
                                >
                                    <div
                                        className="palette-option-dot"
                                        style={{
                                            background: `linear-gradient(135deg, ${palette.colors[0]} 50%, ${palette.colors[1]} 50%)`
                                        }}
                                    />
                                    <span className="palette-name">{palette.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PaletteSelector;
