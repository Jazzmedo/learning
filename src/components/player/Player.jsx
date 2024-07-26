import React, { useEffect, useState } from 'react';
import WebTorrent from 'webtorrent';
import ReactPlayer from 'react-player';

const Player = ({ torrentId }) => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [subtitlesUrl, setSubtitlesUrl] = useState(null);

    useEffect(() => {
        const client = new WebTorrent();
        client.add(torrentId, torrent => {
            const file = torrent.files.find(file => file.name.endsWith('.mp4'));
            const subtitleFile = torrent.files.find(file => file.name.endsWith('.vtt'));

            file.renderTo('video#player', (err, elem) => {
                if (err) console.error('Render error:', err);
                else setVideoUrl(elem.src);
            });

            if (subtitleFile) {
                subtitleFile.getBlobURL((err, url) => {
                    if (err) console.error('Subtitle error:', err);
                    else setSubtitlesUrl(url);
                });
            }
        });

        return () => {
            client.destroy();
        };
    }, [torrentId]);

    return (
        <div>
            {videoUrl && (
                <ReactPlayer
                    url={videoUrl}
                    playing
                    controls
                    config={{
                        file: {
                            attributes: {
                                crossOrigin: 'anonymous'
                            },
                            tracks: [
                                { kind: 'subtitles', src: subtitlesUrl, srcLang: 'en', default: true }
                            ]
                        }
                    }}
                />
            )}
        </div>
    );
};

export default Player;
