// resources/js/Components/Common/ReadMore.jsx
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReadMore({ content, initialChunksVisible = 1 }) {
    // 1. Pre-process the content into logical chunks.
    // useMemo ensures this expensive operation only runs once.
    const contentChunks = useMemo(() => {
        if (!content || content.length === 0) return [];

        const chunks = [];
        let currentChunk = [];

        content.forEach(item => {
            // A heading always starts a new chunk, but only if the current chunk isn't empty.
            if (item.type === 'heading' && currentChunk.length > 0) {
                chunks.push(currentChunk);
                currentChunk = [];
            }
            // Add the item to the current chunk (whether it's a heading or paragraph).
            // This also handles empty headings correctly.
            if(item.text.trim() !== ''){
                currentChunk.push(item);
            }
        });

        // Add the last remaining chunk
        if (currentChunk.length > 0) {
            chunks.push(currentChunk);
        }

        return chunks;
    }, [content]);


    const [visibleChunkCount, setVisibleChunkCount] = useState(initialChunksVisible);
    const isFullyShown = visibleChunkCount >= contentChunks.length;

    const handleToggle = () => {
        if (isFullyShown) {
            setVisibleChunkCount(initialChunksVisible);
        } else {
            // Reveal the next whole chunk
            setVisibleChunkCount(prevCount => prevCount + 1);
        }
    };

    // Slice the array of chunks to get only the ones we should display
    const visibleChunks = contentChunks.slice(0, visibleChunkCount);

    return (
        <div>
            {visibleChunks.map((chunk, chunkIndex) => (
                // Animate each chunk in as a whole block
                <motion.div
                    key={chunkIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {chunk.map((item, itemIndex) => (
                        item.type === 'heading' ? (
                            <h3 key={itemIndex} className="text-2xl font-bold text-gray-800 mt-6 mb-2">
                                {item.text}
                            </h3>
                        ) : (
                            <p key={itemIndex} className="mb-4">{item.text}</p>
                        )
                    ))}
                </motion.div>
            ))}

            {/* Only show the button if there are more chunks to reveal */}
            {contentChunks.length > initialChunksVisible && (
                <button
                    onClick={handleToggle}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-2"
                >
                    {isFullyShown ? 'Show Less' : 'Show More'}
                </button>
            )}
        </div>
    );
}