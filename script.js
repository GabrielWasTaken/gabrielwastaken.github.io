// Definimos una lista de archivos de vídeo manualmente
const videoFiles = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4"
];

window.onload = function() {
    const videoPlayer = document.getElementById('video-player');
    const videoTitle = document.getElementById('video-title');
    const videoList = document.getElementById('video-list');

    // Función para extraer el nombre del archivo sin la extensión
    const extractTitleFromFilename = (filename) => {
        return filename.replace(/\.[^/.]+$/, "");
    };

    // Función para cargar un vídeo
    const loadVideo = (src, title) => {
        videoPlayer.src = src;
        videoTitle.textContent = title;
    };

    // Agregar vídeos a la lista de selección
    videoFiles.forEach(file => {
        const listItem = document.createElement('li');
        listItem.textContent = extractTitleFromFilename(file);
        listItem.onclick = () => {
            loadVideo(`vids/${file}`, listItem.textContent);
        };
        videoList.appendChild(listItem);
    });

    // Cargar el primer vídeo por defecto
    if (videoFiles.length > 0) {
        loadVideo(`vids/${videoFiles[0]}`, extractTitleFromFilename(videoFiles[0]));
    }
};
