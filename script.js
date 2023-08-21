const Detail = [
    {
        'id': '1',
        'thumbnail': 'image/ditway.webp',
        'titile': 'G-Devith ft. Hour Lavy - ឱ! សង្សារបងហ្អេីយ... (Oh! My Darling…)',
        'date': '2 days ago',
        'time': '3:47',
        'music': 'image/G-Devith ft. Hour Lavy.mp3'
    },
    {
        'id': '2',
        'thumbnail': 'image/vd.webp',
        'titile': 'VANNDA - មហិច្ឆតា (OFFICIAL AUDIO)',
        'date': '2 weeks ago',
        'time': '3:28',
        'music': 'image/VANNDA.mp3'
    },
    {
        'id': '3',
        'thumbnail': 'image/khmer1jivit.webp',
        'titile': 'Khmer1Jivit - ឆក់ព្រលឹង (Soul Snatcher) ft. NPN (Official Audio)',
        'date': '6 days ago',
        'time': '3:55',
        'music': 'image/Khmer1Jivit.mp3'
    },
    {
        'id': '4',
        'thumbnail': 'image/dior.webp',
        'titile': 'G-Devith - នារី Dior (OFFICIAL AUDIO)',
        'date': '3 days ago',
        'time': '4:04',
        'music': 'image/G-Devith - Neary Dior Official.mp3'
    },
    {
        'id': '5',
        'thumbnail': 'image/tep-piseth.jpeg',
        'titile': 'PISETH - ចាប់ក្ដីស្រមៃ (OFFICIAL AUDIO)',
        'date': '2 weeks ago',
        'time': '4:31',
        'music': 'image/PISETH.mp3'
    },
    {
        'id': '6',
        'thumbnail': 'image/pite.jpeg',
        'titile': 'នឹកអ្នកធ្លាប់ Call (OFFICIAL AUDIO)',
        'date': '3 weeks ago',
        'time': '3:52',
        'music': 'image/nik nak tlob call.mp3'
    },
];

var list = '';
var music = '';
for (let i in Detail) {
    list += `
            <tr onclick="setData()" id="btn_play">
                <td>${Detail[i]['id']}</td>
                <td  width="90px">
                    <img src="${Detail[i]['thumbnail']}" height="100px" style="object-fit: cover;" width="100px" alt="">
                </td>
                <td  width="700px">${Detail[i]['titile']}</td>
                <td >${Detail[i]['date']}</td>
                <td  width="100px">${Detail[i]['time']}</td>
                <td width="10px" style="visibility:collapse;">${Detail[i]['music']}</td>
            </tr>
    `;
}


var currentSongIndex = 0; // Initialize the current song index

function updateSongInfo() {
    const song = Detail[currentSongIndex];
    const songTitleElement = document.getElementById("songTitle");
    const audioPlayer = document.getElementById("audioPlayer");
    const thumbnail = document.getElementById("music_thumbnail");

    songTitleElement.textContent = song.titile;
    audioPlayer.src = song.music;
    thumbnail.src = song.thumbnail;
    audioPlayer.load();
}

document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");

    backButton.addEventListener("click", () => {
        if (currentSongIndex > 0) {
            currentSongIndex--;
            updateSongInfo();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentSongIndex < Detail.length - 1) {
            currentSongIndex++;
            updateSongInfo();
        }
    });

    // Add an event listener to the audioPlayer for the "ended" event
    audioPlayer.addEventListener("ended", () => {
        // Increment the current song index
        currentSongIndex++;

        // If the current index is within bounds, play the next song
        if (currentSongIndex < Detail.length) {
            updateSongInfo();
            audioPlayer.play();
        } else {
            // If no more songs, stop playback or implement looping behavior
            audioPlayer.pause(); // Pause the audio
            currentSongIndex = 0; // Reset to the first song
        }
    });

    // Set up event listeners for clicking on a song row
    var table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].addEventListener("click", function () {
            var row = this;
            var rowIndex = row.rowIndex - 1;
            currentSongIndex = rowIndex;
            updateSongInfo();
        });
    }

    // Initial setup
    updateSongInfo();
});

document.getElementsByTagName('tbody')[0].innerHTML = list;

var table = document.getElementById("myTable"), rIndex;
for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].addEventListener("click", function () {
        rIndex = this.rowIndex - 1;
        var audio = Detail[rIndex]['music'];

        var audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = audio;
        audioPlayer.autoplay = true;
        audioPlayer.load();
        audioPlayer.play();
        // document.getElementsByClassName('title')[0].innerHTML = title;
        // document.getElementsByClassName('thumnail')[0].innerHTML = thumbnail;
        // document.getElementsByClassName('controller')[0].innerHTML = `<audio id="audioPlayer" autoplay preload="metadata" src="${audio}" controls></audio>`;
    });

}
var list_date = [];
document.getElementById('date').addEventListener('click', function () {
    function convertTimeToDate(timeString) {
        const parts = timeString.split(' ');
        const value = parseInt(parts[0]);
        const unit = parts[1];

        const now = new Date();
        if (unit === 'days') {
            now.setDate(now.getDate() - value);
        } else if (unit === 'weeks') {
            now.setDate(now.getDate() - value * 7);
        } else if (unit === 'years') {
            now.setFullYear(now.getFullYear() - value);
        }
        return now;
    }

    Detail.sort((a, b) => {
        const dateA = convertTimeToDate(a.date);
        const dateB = convertTimeToDate(b.date);
        return dateB - dateA; // Descending order
    });
    var change_date = '';
    for (let i in Detail) {
        change_date += `
            <tr onclick="setData()" id="btn_play">
                <td>${Detail[i]['id']}</td>
                <td  width="90px">
                    <img src="${Detail[i]['thumbnail']}" height="100px" style="object-fit: cover;" width="100px" alt="">
                </td>
                <td  width="700px">${Detail[i]['titile']}</td>
                <td >${Detail[i]['date']}</td>
                <td  width="100px">${Detail[i]['time']}</td>
                <td width="10px" style="visibility:collapse;">${Detail[i]['music']}</td>
            </tr>
    `;
    }

    document.getElementsByTagName('tbody')[0].innerHTML = change_date;
    var table = document.getElementById("myTable"), rIndex;
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].addEventListener("click", function () {
            rIndex = this.rowIndex - 1;
            var audio = Detail[rIndex]['music']; // Get the audio path from the Detail array

            // Update the audio source and play
            var audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.src = audio;
            audioPlayer.autoplay = true;
            audioPlayer.load();
            audioPlayer.play();

            // Update song details
            var thumbnail = this.cells[1].innerHTML;
            var title = this.cells[2].innerHTML;
            document.getElementsByClassName('title')[0].innerHTML = title;
            document.getElementsByClassName('thumnail')[0].innerHTML = thumbnail;
        });
    }

})

document.getElementById('none').addEventListener('click', function () {
    const sortedDetail = Detail.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    var change_id = '';
    for (let i in sortedDetail) {
        change_id += `
            <tr onclick="setData()" id="btn_play">
                <td>${Detail[i]['id']}</td>
                <td  width="90px">
                    <img src="${Detail[i]['thumbnail']}" height="100px" style="object-fit: cover;" width="100px" alt="">
                </td>
                <td  width="700px">${Detail[i]['titile']}</td>
                <td >${Detail[i]['date']}</td>
                <td  width="100px">${Detail[i]['time']}</td>
                <td width="10px" style="visibility:collapse;">${Detail[i]['music']}</td>
            </tr>
    `;
    }

    document.getElementsByTagName('tbody')[0].innerHTML = change_id;

    var table = document.getElementById("myTable"), rIndex;
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].addEventListener("click", function () {
            var rowIndex = this.rowIndex - 1;
            var thumbnail = this.cells[1].innerHTML;
            var title = this.cells[2].innerHTML;
            var audio = this.cells[5].innerHTML;

            console.log("Clicked Index:", rowIndex);
            console.log("Clicked Audio:", audio);

            document.getElementsByClassName('title')[0].innerHTML = title;
            document.getElementsByClassName('thumnail')[0].innerHTML = thumbnail;

            var audioPlayer = document.getElementById('audioPlayer');
            audioPlayer.src = audio;
            audioPlayer.autoplay = true;
            audioPlayer.load();
            audioPlayer.play();

            currentSongIndex = rowIndex;
        });
    }


})
